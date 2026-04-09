import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const REQUIRED_ENV_VARS = ["SMTP_USER", "SMTP_PASS"]
const DEFAULT_SMTP_HOST = "smtp.gmail.com"
const DEFAULT_SMTP_PORT = 465
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5

const rateLimitStore = globalThis.__portfolioRateLimitStore ?? new Map()
globalThis.__portfolioRateLimitStore = rateLimitStore

const MESSAGES = {
  es: {
    invalidJson: "No se pudo procesar la solicitud.",
    requiredFields: "Todos los campos son obligatorios.",
    invalidEmail: "Ingresa un correo válido.",
    tooLong: "El mensaje es demasiado largo.",
    success: "Mensaje enviado con éxito.",
    rateLimit: "Se alcanzó el límite temporal de envíos. Inténtalo nuevamente en unos minutos.",
    missingEnv: (vars) => `Faltan variables en el servidor: ${vars.join(", ")}`,
    placeholder: "Configura SMTP_USER y SMTP_PASS reales en .env.local (App Password de Gmail).",
    invalidPort: "SMTP_PORT debe ser un número válido.",
    authError: "Gmail rechazó las credenciales. Revisa SMTP_USER y usa un App Password válido.",
    genericError: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
    emailSubject: "Nuevo mensaje del portafolio",
    incomingLabel: "Nuevo mensaje recibido desde el portafolio",
    nameLabel: "Nombre",
    emailLabel: "Email",
    subjectLabel: "Asunto",
    messageLabel: "Mensaje",
  },
  en: {
    invalidJson: "The request payload could not be processed.",
    requiredFields: "All fields are required.",
    invalidEmail: "Enter a valid email address.",
    tooLong: "The message is too long.",
    success: "Message sent successfully.",
    rateLimit: "The temporary send limit was reached. Please try again in a few minutes.",
    missingEnv: (vars) => `Missing server variables: ${vars.join(", ")}`,
    placeholder: "Configure real SMTP_USER and SMTP_PASS values in .env.local (use a Gmail App Password).",
    invalidPort: "SMTP_PORT must be a valid number.",
    authError: "Gmail rejected the credentials. Check SMTP_USER and use a valid App Password.",
    genericError: "The message could not be sent. Please try again.",
    emailSubject: "New portfolio message",
    incomingLabel: "New message received from the portfolio",
    nameLabel: "Name",
    emailLabel: "Email",
    subjectLabel: "Subject",
    messageLabel: "Message",
  },
}

function getLanguage(request) {
  return request.headers.get("x-language") === "en" ? "en" : "es"
}

function getMessages(language) {
  return MESSAGES[language] ?? MESSAGES.es
}

function getMissingEnvVars() {
  return REQUIRED_ENV_VARS.filter((name) => !process.env[name])
}

function isPlaceholder(value) {
  if (typeof value !== "string") return true
  const normalized = value.trim().toLowerCase()
  return normalized === "" || normalized.includes("tu_app_password_de_gmail")
}

function parsePayload(payload) {
  const name = typeof payload?.name === "string" ? payload.name.trim() : ""
  const email = typeof payload?.email === "string" ? payload.email.trim() : ""
  const subject = typeof payload?.subject === "string" ? payload.subject.trim() : ""
  const message = typeof payload?.message === "string" ? payload.message.trim() : ""
  const website = typeof payload?.website === "string" ? payload.website.trim() : ""

  return { name, email, subject, message, website }
}

function validatePayload({ name, email, subject, message }, messages) {
  if (!name || !email || !subject || !message) {
    return messages.requiredFields
  }

  if (!EMAIL_REGEX.test(email)) {
    return messages.invalidEmail
  }

  if (name.length > 120 || email.length > 160 || subject.length > 160 || message.length > 5000) {
    return messages.tooLong
  }

  return null
}

function getClientKey(request) {
  const forwardedFor = request.headers.get("x-forwarded-for")
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim()
  }

  return request.headers.get("x-real-ip") || "unknown"
}

function enforceRateLimit(clientKey) {
  const now = Date.now()

  for (const [key, entry] of rateLimitStore.entries()) {
    if (entry.resetAt <= now) {
      rateLimitStore.delete(key)
    }
  }

  const currentEntry = rateLimitStore.get(clientKey)
  if (!currentEntry || currentEntry.resetAt <= now) {
    rateLimitStore.set(clientKey, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    })
    return true
  }

  if (currentEntry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false
  }

  currentEntry.count += 1
  return true
}

export async function POST(request) {
  const language = getLanguage(request)
  const messages = getMessages(language)

  try {
    let rawPayload

    try {
      rawPayload = await request.json()
    } catch {
      return NextResponse.json({ message: messages.invalidJson }, { status: 400 })
    }

    const payload = parsePayload(rawPayload)

    if (payload.website) {
      return NextResponse.json({ message: messages.success }, { status: 200 })
    }

    if (!enforceRateLimit(getClientKey(request))) {
      return NextResponse.json({ message: messages.rateLimit }, { status: 429 })
    }

    const validationError = validatePayload(payload, messages)
    if (validationError) {
      return NextResponse.json({ message: validationError }, { status: 400 })
    }

    const missingEnvVars = getMissingEnvVars()
    if (missingEnvVars.length > 0) {
      console.error("Variables de entorno faltantes para contacto:", missingEnvVars.join(", "))
      return NextResponse.json({ message: messages.missingEnv(missingEnvVars) }, { status: 500 })
    }

    if (isPlaceholder(process.env.SMTP_USER) || isPlaceholder(process.env.SMTP_PASS)) {
      return NextResponse.json({ message: messages.placeholder }, { status: 500 })
    }

    const smtpHost = process.env.SMTP_HOST || DEFAULT_SMTP_HOST
    const smtpPort = Number(process.env.SMTP_PORT || DEFAULT_SMTP_PORT)

    if (Number.isNaN(smtpPort)) {
      return NextResponse.json({ message: messages.invalidPort }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER
    const fromEmail = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER

    await transporter.sendMail({
      to: toEmail,
      from: fromEmail,
      replyTo: payload.email,
      subject: `${messages.emailSubject}: ${payload.subject}`,
      text: [
        messages.incomingLabel,
        "",
        `${messages.nameLabel}: ${payload.name}`,
        `${messages.emailLabel}: ${payload.email}`,
        `${messages.subjectLabel}: ${payload.subject}`,
        "",
        `${messages.messageLabel}:`,
        payload.message,
      ].join("\n"),
    })

    return NextResponse.json({ message: messages.success }, { status: 200 })
  } catch (error) {
    console.error("Error enviando mensaje de contacto:", error)

    if (error?.code === "EAUTH" || error?.responseCode === 535) {
      return NextResponse.json({ message: messages.authError }, { status: 500 })
    }

    return NextResponse.json({ message: messages.genericError }, { status: 500 })
  }
}
