"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

const SUPPORTED_LANGUAGES = new Set(["es", "en"])
const STORAGE_KEY = "portfolio-language"

const LanguageContext = createContext(null)

function getInitialLanguage() {
  if (typeof window === "undefined") return "es"

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored && SUPPORTED_LANGUAGES.has(stored)) return stored

  const browserLanguage = window.navigator.language?.toLowerCase?.() ?? "es"
  return browserLanguage.startsWith("en") ? "en" : "es"
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es")

  useEffect(() => {
    setLanguage(getInitialLanguage())
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((previous) => (previous === "es" ? "en" : "es")),
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
