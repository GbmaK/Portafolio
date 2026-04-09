"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { Code } from "lucide-react"

import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { portfolioProfile } from "@/content/portfolio-content"
import { getNavItems, getNavToneClasses } from "@/lib/navigation"
import { getSectionTopOffset, scrollToSection as smoothScrollToSection } from "@/lib/scroll-to-section"
import { cn } from "@/lib/utils"

function toSectionId(href) {
  return href.replace("#", "")
}

function getActiveHref(items) {
  const threshold = getSectionTopOffset() + 18
  let currentHref = items[0]?.href ?? "#inicio"

  for (const item of items) {
    const element = document.getElementById(toSectionId(item.href))
    if (!element) continue

    const rect = element.getBoundingClientRect()
    if (rect.top <= threshold) {
      currentHref = item.href
      continue
    }

    break
  }

  return currentHref
}

export function SiteHeader() {
  const { language, toggleLanguage } = useLanguage()
  const isEnglish = language === "en"
  const items = useMemo(() => getNavItems(language), [language])
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
    const didScroll = smoothScrollToSection(href)
    if (didScroll) {
      setActiveHref(href)
    }
  }

  function handleNavigate(href) {
    scrollToSection(href)
  }

  return (
    <header
      data-site-header
      className="sticky top-0 z-50 w-full border-b border-white/35 bg-background/80 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/68 dark:border-white/10"
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 md:px-6">
        <Link
          href="#inicio"
          className="group flex min-w-0 items-center gap-3 rounded-full px-1 py-1 transition-colors"
          onClick={(event) => {
            event.preventDefault()
            scrollToSection("#inicio")
          }}
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/65 bg-white/80 text-indigo-700 shadow-sm transition-colors group-hover:border-cyan-200 group-hover:bg-cyan-50 group-hover:text-cyan-700 dark:border-white/10 dark:bg-white/5 dark:text-indigo-300 dark:group-hover:border-cyan-900/60 dark:group-hover:bg-cyan-950/30 dark:group-hover:text-cyan-300">
            <Code className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <span className="block truncate text-sm font-semibold tracking-tight sm:text-base">{portfolioProfile.name}</span>
            <span className="hidden truncate text-xs text-muted-foreground xl:block">{portfolioProfile.role[language]}</span>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-0.5 rounded-full border border-white/45 bg-white/60 p-1 shadow-sm backdrop-blur-sm lg:flex dark:border-white/10 dark:bg-white/[0.04]"
          aria-label={isEnglish ? "Primary navigation" : "Navegaci\u00f3n principal"}
        >
          {items.map((item) => {
            const toneClasses = getNavToneClasses(item.tone)
            const isActive = item.href === activeHref

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm font-medium tracking-[0.01em] transition-colors",
                  toneClasses.hover,
                  isActive ? toneClasses.active : "text-foreground/70",
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

        <div className="flex items-center gap-2 rounded-full border border-white/45 bg-white/60 px-1.5 py-1 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04]">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            aria-label={isEnglish ? "Switch to Spanish" : "Cambiar a ingl\u00e9s"}
            className="rounded-full px-3 text-sm font-medium text-foreground/75 hover:bg-white/85 hover:text-foreground dark:hover:bg-white/10"
          >
            {isEnglish ? "ES" : "EN"}
          </Button>
          <ThemeToggle />
          <MobileNav items={items} activeHref={activeHref} onNavigate={handleNavigate} language={language} />
        </div>
      </div>
    </header>
  )
}
