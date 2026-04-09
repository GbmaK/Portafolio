"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Download, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { portfolioProfile } from "@/content/portfolio-content"
import { getNavToneClasses } from "@/lib/navigation"
import { cn } from "@/lib/utils"

export function MobileNav({ items = [], activeHref = "#inicio", onNavigate, language = "es" }) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)
  const isEnglish = language === "en"

  useEffect(() => {
    if (!open) return

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    function handleClickOutside(event) {
      if (!containerRef.current?.contains(event.target)) {
        setOpen(false)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("pointerdown", handleClickOutside)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("pointerdown", handleClickOutside)
    }
  }, [open])

  function handleLinkClick(event, href) {
    if (typeof onNavigate === "function") {
      event.preventDefault()
      onNavigate(href)
    }
    setOpen(false)
  }

  return (
    <div ref={containerRef} className="lg:hidden">
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label={open ? (isEnglish ? "Close menu" : "Cerrar men\u00fa") : isEnglish ? "Open menu" : "Abrir men\u00fa"}
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        className="border-foreground/15 bg-background/75"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {open ? (
        <>
          <div className="fixed inset-0 top-16 bg-slate-950/25 backdrop-blur-[1px]" aria-hidden="true" />
          <div
            id="mobile-nav-menu"
            className="absolute right-0 top-[calc(100%+0.65rem)] w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-[1.75rem] border border-white/50 bg-background/95 p-4 shadow-[0_28px_80px_-48px_rgba(15,23,42,0.65)] backdrop-blur-xl supports-[backdrop-filter]:bg-background/88 dark:border-white/10"
          >
            <div className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                {isEnglish ? "Navigate" : "Navegar"}
              </p>
              <p className="text-sm font-medium text-foreground/80">
                {isEnglish ? "Jump to a section" : "Ir a una secci\u00f3n"}
              </p>
            </div>

            <nav
              className="flex flex-col gap-1 text-[0.96rem] font-semibold tracking-[0.01em]"
              aria-label={isEnglish ? "Mobile navigation" : "Navegaci\u00f3n m\u00f3vil"}
            >
              {items.map((item) => {
                const toneClasses = getNavToneClasses(item.tone)
                const isActive = activeHref === item.href

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "rounded-2xl px-3 py-3 transition-colors",
                      toneClasses.hover,
                      isActive ? toneClasses.active : "text-foreground/80",
                    )}
                    onClick={(event) => handleLinkClick(event, item.href)}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            <div className="mt-4 grid gap-2">
              <Button variant="outline" className="justify-start rounded-full border-foreground/15 bg-background/80" asChild>
                <a href={portfolioProfile.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" aria-hidden="true" />
                  {isEnglish ? "Download resume" : "Descargar CV"}
                </a>
              </Button>
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}
