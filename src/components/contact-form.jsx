"use client"

import { useState } from "react"
import { AlertCircle, CheckCircle2, Loader2, X } from "lucide-react"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const MESSAGE_MAX_LENGTH = 5000
const REQUEST_TIMEOUT_MS = 35000
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
}

function normalizeForm(values) {
  return {
    name: values.name.trim(),
    email: values.email.trim(),
    subject: values.subject.trim(),
    message: values.message.trim(),
    website: values.website.trim(),
  }
}

function validateForm(values, t) {
  const errors = {}

  if (!values.name) {
    errors.name = t("Ingresa tu nombre.", "Enter your name.")
  }

  if (!values.email) {
    errors.email = t("Ingresa tu correo.", "Enter your email.")
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = t("Ingresa un correo válido.", "Enter a valid email address.")
  }

  if (!values.subject) {
    errors.subject = t("Ingresa un asunto.", "Enter a subject.")
  }

  if (!values.message) {
    errors.message = t("Cuéntame brevemente qué necesitas.", "Tell me briefly what you need.")
  }

  return errors
}

async function parseResponseBody(response) {
  const contentType = response.headers.get("content-type") || ""

  if (contentType.includes("application/json")) {
    try {
      return await response.json()
    } catch {
      return null
    }
  }

  try {
    const text = await response.text()
    if (!text) return null
    if (text.trim().startsWith("<")) return null

    return { message: text }
  } catch {
    return null
  }
}

export function ContactForm() {
  const { language } = useLanguage()
  const isEnglish = language === "en"
  const t = (es, en) => (isEnglish ? en : es)

  const [form, setForm] = useState(INITIAL_FORM_STATE)
  const [errors, setErrors] = useState({})
  const [isSending, setIsSending] = useState(false)
  const [notice, setNotice] = useState(null)

  async function handleSubmit(event) {
    event.preventDefault()
    setNotice(null)

    const payload = normalizeForm(form)
    const nextErrors = validateForm(payload, t)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    setIsSending(true)
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Language": language,
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      })

      const data = await parseResponseBody(response)

      if (!response.ok) {
        const fallbackMessage =
          response.status >= 500
            ? t(
                "El servidor devolvió un error interno. Si cambiaste .env.local, reinicia npm run dev e inténtalo nuevamente.",
                "The server returned an internal error. If you changed .env.local, restart npm run dev and try again.",
              )
            : t("No se pudo enviar el mensaje. Inténtalo de nuevo.", "The message could not be sent. Please try again.")

        setNotice({
          type: "error",
          message: data?.message || fallbackMessage,
        })
        return
      }

      setNotice({
        type: "success",
        message:
          data?.message ||
          t("Mensaje enviado con éxito. Te responderé pronto.", "Message sent successfully. I will reply soon."),
      })
      setForm(INITIAL_FORM_STATE)
      setErrors({})
    } catch (error) {
      const timeoutMessage =
        error?.name === "AbortError"
          ? t(
              "La solicitud tardó demasiado. Revisa tu conexión e inténtalo nuevamente.",
              "The request took too long. Check your connection and try again.",
            )
          : t(
              "No se pudo enviar el mensaje. Revisa tu conexión e inténtalo nuevamente.",
              "The message could not be sent. Check your connection and try again.",
            )

      setNotice({
        type: "error",
        message: timeoutMessage,
      })
    } finally {
      clearTimeout(timeoutId)
      setIsSending(false)
    }
  }

  function updateField(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))

    setErrors((prev) => {
      if (!prev[name]) return prev
      const next = { ...prev }
      delete next[name]
      return next
    })

    if (notice) setNotice(null)
  }

  const isSuccess = notice?.type === "success"
  const noticeStyles = isSuccess
    ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/30 dark:text-emerald-200"
    : "border-red-200 bg-red-50 text-red-700 dark:border-red-800/60 dark:bg-red-950/30 dark:text-red-200"

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nombre" className="text-slate-700 dark:text-slate-200">
            {t("Nombre", "Name")}
          </Label>
          <Input
            id="nombre"
            name="name"
            placeholder={t("Tu nombre", "Your name")}
            className="border-cyan-200/80 bg-white/80 focus-visible:border-cyan-500 focus-visible:ring-cyan-500/30 dark:border-cyan-900/60 dark:bg-cyan-950/10"
            value={form.name}
            onChange={updateField}
            autoComplete="name"
            maxLength={120}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "nombre-error" : undefined}
            required
          />
          {errors.name ? (
            <p id="nombre-error" className="text-xs text-red-600 dark:text-red-300">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-slate-700 dark:text-slate-200">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={t("tu@email.com", "your@email.com")}
            className="border-cyan-200/80 bg-white/80 focus-visible:border-cyan-500 focus-visible:ring-cyan-500/30 dark:border-cyan-900/60 dark:bg-cyan-950/10"
            value={form.email}
            onChange={updateField}
            autoComplete="email"
            maxLength={160}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email ? (
            <p id="email-error" className="text-xs text-red-600 dark:text-red-300">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="asunto" className="text-slate-700 dark:text-slate-200">
          {t("Asunto", "Subject")}
        </Label>
        <Input
          id="asunto"
          name="subject"
          placeholder={t("Asunto del mensaje", "Message subject")}
          className="border-cyan-200/80 bg-white/80 focus-visible:border-cyan-500 focus-visible:ring-cyan-500/30 dark:border-cyan-900/60 dark:bg-cyan-950/10"
          value={form.subject}
          onChange={updateField}
          maxLength={160}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "asunto-error" : undefined}
          required
        />
        {errors.subject ? (
          <p id="asunto-error" className="text-xs text-red-600 dark:text-red-300">
            {errors.subject}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensaje" className="text-slate-700 dark:text-slate-200">
          {t("Mensaje", "Message")}
        </Label>
        <Textarea
          id="mensaje"
          name="message"
          placeholder={t("Escribe tu mensaje aquí...", "Write your message here...")}
          className="min-h-[140px] border-cyan-200/80 bg-white/80 focus-visible:border-cyan-500 focus-visible:ring-cyan-500/30 dark:border-cyan-900/60 dark:bg-cyan-950/10"
          value={form.message}
          onChange={updateField}
          maxLength={MESSAGE_MAX_LENGTH}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "mensaje-error mensaje-counter" : "mensaje-counter"}
          required
        />
        <div className="flex items-center justify-between gap-3 text-xs">
          {errors.message ? (
            <p id="mensaje-error" className="text-red-600 dark:text-red-300">
              {errors.message}
            </p>
          ) : (
            <span />
          )}
          <p id="mensaje-counter" className="text-muted-foreground">
            {form.message.length}/{MESSAGE_MAX_LENGTH}
          </p>
        </div>
      </div>

      <div className="hidden" aria-hidden="true">
        <Label htmlFor="website">Website</Label>
        <Input id="website" name="website" autoComplete="off" tabIndex={-1} value={form.website} onChange={updateField} />
      </div>

      {notice ? (
        <div role="status" aria-live="polite" className={`rounded-md border px-3 py-2 text-sm ${noticeStyles}`}>
          <div className="flex items-start justify-between gap-2">
            <p className="inline-flex items-start gap-2">
              {isSuccess ? (
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              ) : (
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              )}
              <span>{notice.message}</span>
            </p>
            <button
              type="button"
              onClick={() => setNotice(null)}
              className="rounded p-0.5 opacity-80 transition hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              aria-label={t("Cerrar aviso", "Close notice")}
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-cyan-600 to-indigo-600 text-white hover:from-cyan-700 hover:to-indigo-700 dark:from-cyan-400 dark:to-indigo-400 dark:text-slate-950 dark:hover:from-cyan-300 dark:hover:to-indigo-300"
        disabled={isSending}
        aria-busy={isSending}
      >
        {isSending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            {t("Enviando mensaje...", "Sending message...")}
          </>
        ) : (
          t("Enviar mensaje", "Send message")
        )}
      </Button>
    </form>
  )
}
