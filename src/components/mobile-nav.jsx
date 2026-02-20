"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { getNavToneClasses, NAV_ITEMS } from "@/lib/navigation"
import { cn } from "@/lib/utils"

export function MobileNav({ items = NAV_ITEMS, activeHref = "#inicio", onNavigate }) {
  const [open, setOpen] = useState(false)

  function handleLinkClick(event, href) {
    if (typeof onNavigate === "function") {
      event.preventDefault()
      onNavigate(href)
    }
    setOpen(false)
  }

  return (
    <div className="md:hidden">
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label={open ? "Cerrar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {open ? (
        <div
          id="mobile-nav-menu"
          className="absolute left-0 top-[calc(100%+1px)] w-full border-b bg-background/95 px-4 py-4 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/85"
        >
          <nav className="flex flex-col gap-1 text-[0.96rem] font-semibold tracking-[0.01em]" aria-label="Navegacion movil">
            {items.map((item) => {
              const toneClasses = getNavToneClasses(item.tone)
              const isActive = activeHref === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2 transition-colors",
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
        </div>
      ) : null}
    </div>
  )
}
