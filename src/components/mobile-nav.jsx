"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

const NAV_LINKS = [
  {
    href: "#inicio",
    label: "Inicio",
    className: "hover:bg-cyan-50 hover:text-cyan-700 dark:hover:bg-cyan-900/30 dark:hover:text-cyan-300",
  },
  {
    href: "#sobre-mi",
    label: "Sobre mí",
    className: "hover:bg-indigo-50 hover:text-indigo-700 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-300",
  },
  {
    href: "#experiencia",
    label: "Experiencia",
    className: "hover:bg-amber-50 hover:text-amber-700 dark:hover:bg-amber-900/30 dark:hover:text-amber-300",
  },
  {
    href: "#educacion",
    label: "Educación",
    className: "hover:bg-indigo-50 hover:text-indigo-700 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-300",
  },
  {
    href: "#habilidades",
    label: "Habilidades",
    className: "hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-300",
  },
  {
    href: "#proyectos",
    label: "Proyectos",
    className: "hover:bg-cyan-50 hover:text-cyan-700 dark:hover:bg-cyan-900/30 dark:hover:text-cyan-300",
  },
  {
    href: "#contacto",
    label: "Contacto",
    className: "hover:bg-indigo-50 hover:text-indigo-700 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-300",
  },
]
export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {open ? (
        <div
          id="mobile-nav-menu"
          className="absolute left-0 top-[calc(100%+1px)] w-full border-b bg-background/95 px-4 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/80"
        >
          <nav className="flex flex-col gap-1 text-sm font-medium">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 transition-colors ${item.className}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  )
}

