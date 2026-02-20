"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (!response.ok) {
        setNotice({
          type: "error",
          message: data?.message || "No se pudo enviar el mensaje. Intentalo de nuevo.",
        })
        return
      }

      setNotice({
        type: "success",
        message: "Mensaje enviado con exito. Te respondere pronto.",
      })
      setForm(INITIAL_FORM_STATE)
    } catch {
      setNotice({
        type: "error",
        message: "No se pudo enviar el mensaje. Revisa tu conexion e intentalo nuevamente.",
      })
    } finally {
      setIsSending(false)
    }
  }

  function updateField(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
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
          placeholder="Escribe tu mensaje aqui..."
          className="min-h-[120px] border-cyan-200/80 bg-white/80 focus-visible:border-cyan-500 focus-visible:ring-cyan-500/30 dark:border-cyan-900/60 dark:bg-cyan-950/10"
          value={form.message}
          onChange={updateField}
          maxLength={5000}
          required
        />
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
        <p
          role="status"
          aria-live="polite"
          className={
            notice.type === "success"
              ? "rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/30 dark:text-emerald-200"
              : "rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-800/60 dark:bg-red-950/30 dark:text-red-200"
          }
        >
          {notice.message}
        </p>
      ) : null}

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-cyan-600 to-indigo-600 text-white hover:from-cyan-700 hover:to-indigo-700 dark:from-cyan-400 dark:to-indigo-400 dark:text-slate-950 dark:hover:from-cyan-300 dark:hover:to-indigo-300"
        disabled={isSending}
        aria-busy={isSending}
      >
        {isSending ? "Enviando..." : "Enviar mensaje"}
      </Button>
    </form>
  )
}
