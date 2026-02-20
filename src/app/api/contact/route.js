import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const REQUIRED_ENV_VARS = ["SMTP_USER", "SMTP_PASS"]
const DEFAULT_SMTP_HOST = "smtp.gmail.com"
const DEFAULT_SMTP_PORT = 465

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

function validatePayload({ name, email, subject, message }) {
  if (!name || !email || !subject || !message) {
    return "Todos los campos son obligatorios."
  }

  if (!EMAIL_REGEX.test(email)) {
    return "Ingresa un correo valido."
  }

  if (name.length > 120 || email.length > 160 || subject.length > 160 || message.length > 5000) {
    return "El mensaje es demasiado largo."
  }

  return null
}

export async function POST(request) {
  try {
    const payload = parsePayload(await request.json())

    if (payload.website) {
      return NextResponse.json({ message: "Mensaje enviado con exito." }, { status: 200 })
    }

    const validationError = validatePayload(payload)
    if (validationError) {
      return NextResponse.json({ message: validationError }, { status: 400 })
    }

    const missingEnvVars = getMissingEnvVars()
    if (missingEnvVars.length > 0) {
      console.error("Variables de entorno faltantes para contacto:", missingEnvVars.join(", "))
      return NextResponse.json(
        { message: `Faltan variables en el servidor: ${missingEnvVars.join(", ")}` },
        { status: 500 },
      )
    }

    if (isPlaceholder(process.env.SMTP_USER) || isPlaceholder(process.env.SMTP_PASS)) {
      return NextResponse.json(
        { message: "Configura SMTP_USER y SMTP_PASS reales en .env.local (App Password de Gmail)." },
        { status: 500 },
      )
    }

    const smtpHost = process.env.SMTP_HOST || DEFAULT_SMTP_HOST
    const smtpPort = Number(process.env.SMTP_PORT || DEFAULT_SMTP_PORT)
    if (Number.isNaN(smtpPort)) {
      return NextResponse.json({ message: "SMTP_PORT debe ser un numero valido." }, { status: 500 })
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
      subject: `Nuevo mensaje del portafolio: ${payload.subject}`,
      text: [
        "Nuevo mensaje recibido desde el portafolio",
        "",
        `Nombre: ${payload.name}`,
        `Email: ${payload.email}`,
        `Asunto: ${payload.subject}`,
        "",
        "Mensaje:",
        payload.message,
      ].join("\n"),
    })

    return NextResponse.json({ message: "Mensaje enviado con exito." }, { status: 200 })
  } catch (error) {
    console.error("Error enviando mensaje de contacto:", error)

    if (error?.code === "EAUTH" || error?.responseCode === 535) {
      return NextResponse.json(
        { message: "Gmail rechazo las credenciales. Revisa SMTP_USER y usa un App Password valido." },
        { status: 500 },
      )
    }

    return NextResponse.json({ message: "No se pudo enviar el mensaje. Intentalo de nuevo." }, { status: 500 })
  }
}
