export const NAV_ITEMS = [
  { href: "#inicio", label: "Inicio", tone: "cyan" },
  { href: "#sobre-mi", label: "Sobre mí", tone: "indigo" },
  { href: "#experiencia", label: "Experiencia", tone: "amber" },
  { href: "#educacion", label: "Educación", tone: "indigo" },
  { href: "#habilidades", label: "Habilidades", tone: "emerald" },
  { href: "#proyectos", label: "Proyectos", tone: "cyan" },
  { href: "#contacto", label: "Contacto", tone: "indigo" },
]

const NAV_TONE_CLASSES = {
  cyan: {
    hover:
      "hover:bg-cyan-50 hover:text-cyan-700 dark:hover:bg-cyan-900/30 dark:hover:text-cyan-300",
    active: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-200",
  },
  indigo: {
    hover:
      "hover:bg-indigo-50 hover:text-indigo-700 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-300",
    active: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200",
  },
  amber: {
    hover:
      "hover:bg-amber-50 hover:text-amber-700 dark:hover:bg-amber-900/30 dark:hover:text-amber-300",
    active: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200",
  },
  emerald: {
    hover:
      "hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-300",
    active: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200",
  },
}

export function getNavToneClasses(tone) {
  return NAV_TONE_CLASSES[tone] ?? NAV_TONE_CLASSES.cyan
}
