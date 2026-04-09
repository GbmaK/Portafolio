"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"

const STORAGE_KEY = "portfolio-theme"

function getInitialTheme() {
  if (typeof window === "undefined") return "light"

  const savedTheme = window.localStorage.getItem(STORAGE_KEY)
  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export function ThemeToggle() {
  const { language } = useLanguage()
  const isEnglish = language === "en"
  const [theme, setTheme] = useState("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const initialTheme = getInitialTheme()
    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    document.documentElement.classList.toggle("dark", theme === "dark")
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme, mounted])

  const isDark = theme === "dark"
  const label = isDark
    ? isEnglish
      ? "Switch to light mode"
      : "Cambiar a modo claro"
    : isEnglish
      ? "Switch to dark mode"
      : "Cambiar a modo oscuro"

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={() => setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
      className="rounded-full text-foreground/75 hover:bg-white/70 hover:text-foreground dark:hover:bg-white/10"
    >
      {mounted && isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  )
}
