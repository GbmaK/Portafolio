function toSectionId(href) {
  return href.replace(/^.*#/, "")
}

export function getSectionTopOffset() {
  if (typeof window === "undefined") return 76

  const computed = window.getComputedStyle(document.documentElement).getPropertyValue("--section-top-offset")
  const parsed = Number.parseFloat(computed)
  return Number.isFinite(parsed) ? parsed : 76
}

export function getScrollBehavior() {
  if (typeof window === "undefined") return "auto"

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
}

export function scrollToSection(href) {
  if (typeof window === "undefined") return false
  if (typeof href !== "string" || !href.includes("#")) return false

  const sectionId = toSectionId(href)
  if (!sectionId) return false

  const section = document.getElementById(sectionId)
  if (!section) return false

  const offset = getSectionTopOffset()
  const top = section.getBoundingClientRect().top + window.scrollY - offset

  window.scrollTo({ top, behavior: getScrollBehavior() })
  window.history.replaceState(null, "", `#${sectionId}`)

  return true
}
