"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { Code } from "lucide-react"

import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { NAV_ITEMS, getNavToneClasses } from "@/lib/navigation"
import { cn } from "@/lib/utils"

const HEADER_OFFSET = 96

function toSectionId(href) {
  return href.replace("#", "")
}

function getActiveHref(items) {
  const viewportTarget = window.innerHeight * 0.32
  let bestHref = items[0]?.href ?? "#inicio"
  let bestDistance = Number.POSITIVE_INFINITY

  for (const item of items) {
    const element = document.getElementById(toSectionId(item.href))
    if (!element) continue

    const rect = element.getBoundingClientRect()
    const distance = Math.abs(rect.top - viewportTarget)
    if (distance < bestDistance) {
      bestDistance = distance
      bestHref = item.href
    }
  }

  return bestHref
}

export function SiteHeader() {
  const items = useMemo(() => NAV_ITEMS, [])
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? "#inicio")

  useEffect(() => {
    let rafId = 0

    function updateActive() {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        setActiveHref(getActiveHref(items))
      })
    }

    updateActive()
    window.addEventListener("scroll", updateActive, { passive: true })
    window.addEventListener("resize", updateActive)
    window.addEventListener("hashchange", updateActive)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("scroll", updateActive)
      window.removeEventListener("resize", updateActive)
      window.removeEventListener("hashchange", updateActive)
    }
  }, [items])

  function scrollToSection(href) {
    const section = document.getElementById(toSectionId(href))
    if (!section) return

    const top = section.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
    window.scrollTo({ top, behavior: "smooth" })
    window.history.replaceState(null, "", href)
    setActiveHref(href)
  }

  function handleNavigate(href) {
    scrollToSection(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 md:px-6">
        <Link
          href="#inicio"
          className="group flex min-w-0 items-center gap-2 rounded-md px-2 py-1.5 transition-colors hover:bg-muted"
          onClick={(event) => {
            event.preventDefault()
            scrollToSection("#inicio")
          }}
        >
          <Code className="h-5 w-5 shrink-0 text-indigo-600 transition-colors group-hover:text-cyan-600 dark:text-indigo-300 dark:group-hover:text-cyan-300" />
          <span className="truncate text-sm font-bold tracking-tight sm:text-[1.02rem]">Gustavo Mardones</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegacion principal">
          {items.map((item) => {
            const toneClasses = getNavToneClasses(item.tone)
            const isActive = item.href === activeHref

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-1.5 text-[0.94rem] font-semibold tracking-[0.01em] transition-colors",
                  toneClasses.hover,
                  isActive ? toneClasses.active : "text-foreground/80",
                )}
                onClick={(event) => {
                  event.preventDefault()
                  handleNavigate(item.href)
                }}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileNav items={items} activeHref={activeHref} onNavigate={handleNavigate} />
        </div>
      </div>
    </header>
  )
}
