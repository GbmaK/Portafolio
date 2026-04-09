const NAV_ITEMS_BY_LANGUAGE = {
  es: [
    { href: "#inicio", label: "Inicio", tone: "cyan" },
    { href: "#sobre-mi", label: "Sobre m\u00ed", tone: "indigo" },
    { href: "#experiencia", label: "Experiencia", tone: "amber" },
    { href: "#proyectos", label: "Proyectos", tone: "cyan" },
    { href: "#habilidades", label: "Habilidades", tone: "emerald" },
    { href: "#educacion", label: "Educaci\u00f3n", tone: "indigo" },
    { href: "#contacto", label: "Contacto", tone: "indigo" },
  ],
  en: [
    { href: "#inicio", label: "Home", tone: "cyan" },
    { href: "#sobre-mi", label: "About", tone: "indigo" },
    { href: "#experiencia", label: "Experience", tone: "amber" },
    { href: "#proyectos", label: "Projects", tone: "cyan" },
    { href: "#habilidades", label: "Skills", tone: "emerald" },
    { href: "#educacion", label: "Education", tone: "indigo" },
    { href: "#contacto", label: "Contact", tone: "indigo" },
  ],
}

const NAV_TONE_CLASSES = {
  cyan: {
    hover:
      "hover:bg-cyan-50/85 hover:text-cyan-700 dark:hover:bg-cyan-950/35 dark:hover:text-cyan-300",
    active:
      "bg-cyan-50 text-cyan-800 shadow-sm dark:bg-cyan-950/45 dark:text-cyan-200",
  },
  indigo: {
    hover:
      "hover:bg-indigo-50/85 hover:text-indigo-700 dark:hover:bg-indigo-950/35 dark:hover:text-indigo-300",
    active:
      "bg-indigo-50 text-indigo-800 shadow-sm dark:bg-indigo-950/45 dark:text-indigo-200",
  },
  amber: {
    hover:
      "hover:bg-amber-50/85 hover:text-amber-700 dark:hover:bg-amber-950/35 dark:hover:text-amber-300",
    active:
      "bg-amber-50 text-amber-800 shadow-sm dark:bg-amber-950/45 dark:text-amber-200",
  },
  emerald: {
    hover:
      "hover:bg-emerald-50/85 hover:text-emerald-700 dark:hover:bg-emerald-950/35 dark:hover:text-emerald-300",
    active:
      "bg-emerald-50 text-emerald-800 shadow-sm dark:bg-emerald-950/45 dark:text-emerald-200",
  },
}

export function getNavItems(language = "es") {
  return NAV_ITEMS_BY_LANGUAGE[language] ?? NAV_ITEMS_BY_LANGUAGE.es
}

export function getNavToneClasses(tone) {
  return NAV_TONE_CLASSES[tone] ?? NAV_TONE_CLASSES.cyan
}
