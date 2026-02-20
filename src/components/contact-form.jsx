"use client"

import { useState } from "react"
import { AlertCircle, CheckCircle2, Loader2, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const MESSAGE_MAX_LENGTH = 5000
const REQUEST_TIMEOUT_MS = 12000

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
}

export function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM_STATE)
  const [isSending, setIsSending] = useState(false)
  const [notice, setNotice] = useState(null)

  async function handleSubmit(event) {
    event.preventDefault()
    setIsSending(true)
    setNotice(null)

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
        signal: controller.signal,
      })

      const data = await response.json()

      if (!response.ok) {
        setNotice({
          type: "error",
          message: data?.message || "No se pudo enviar el mensaje. Inténtalo de nuevo.",
        })
        return
      }

      setNotice({
        type: "success",
        message: "Mensaje enviado con éxito. Te responderé pronto.",
      })
      setForm(INITIAL_FORM_STATE)
    } catch (error) {
      const timeoutMessage =
        error?.name === "AbortError"
          ? "La solicitud tardó demasiado. Revisa tu conexión e inténtalo nuevamente."
          : "No se pudo enviar el mensaje. Revisa tu conexión e inténtalo nuevamente."

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
            Nombre
          </Label>
          <Input
            id="nombre"
            name="name"
            placeholder="Tu nombre"
            className="border-cyan-200/80 bg-white/80 focus-visible:border-cyan-500 focus-visible:ring-cyan-500/30 dark:border-cyan-900/60 dark:bg-cyan-950/10"
            value={form.name}
            onChange={updateField}
            autoComplete="name"
            maxLength={120}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-slate-700 dark:text-slate-200">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            className="border-cyan-200/80 bg-white/80 focus-visible:border-cyan-500 focus-visible:ring-cyan-500/30 dark:border-cyan-900/60 dark:bg-cyan-950/10"
            value={form.email}
            onChange={updateField}
            autoComplete="email"
            maxLength={160}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="asunto" className="text-slate-700 dark:text-slate-200">
          Asunto
        </Label>
        <Input
          id="asunto"
          name="subject"
          placeholder="Asunto del mensaje"
          className="border-cyan-200/80 bg-white/80 focus-visible:border-cyan-500 focus-visible:ring-cyan-500/30 dark:border-cyan-900/60 dark:bg-cyan-950/10"
          value={form.subject}
          onChange={updateField}
          maxLength={160}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensaje" className="text-slate-700 dark:text-slate-200">
          Mensaje
        </Label>
        <Textarea
          id="mensaje"
          name="message"
          placeholder="Escribe tu mensaje aquí..."
          className="min-h-[120px] border-cyan-200/80 bg-white/80 focus-visible:border-cyan-500 focus-visible:ring-cyan-500/30 dark:border-cyan-900/60 dark:bg-cyan-950/10"
          value={form.message}
          onChange={updateField}
          maxLength={MESSAGE_MAX_LENGTH}
          aria-describedby="mensaje-counter"
          required
        />
        <p id="mensaje-counter" className="text-xs text-muted-foreground">
          {form.message.length}/{MESSAGE_MAX_LENGTH}
        </p>
      </div>

      <div className="hidden" aria-hidden="true">
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          name="website"
          autoComplete="off"
          tabIndex={-1}
          value={form.website}
          onChange={updateField}
        />
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
              aria-label="Cerrar aviso"
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
            Enviando mensaje...
          </>
        ) : (
          "Enviar mensaje"
        )}
      </Button>
    </form>
  )
}
