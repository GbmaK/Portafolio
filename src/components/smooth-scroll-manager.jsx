"use client"

import { useEffect } from "react"

import { scrollToSection } from "@/lib/scroll-to-section"

export function SmoothScrollManager() {
  useEffect(() => {
    function handleDocumentClick(event) {
      if (event.defaultPrevented) return
      if (event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const anchor = event.target?.closest?.("a[href]")
      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href || !href.startsWith("#")) return

      const didScroll = scrollToSection(href)
      if (didScroll) {
        event.preventDefault()
      }
    }

    document.addEventListener("click", handleDocumentClick)

    return () => {
      document.removeEventListener("click", handleDocumentClick)
    }
  }, [])

  return null
}
