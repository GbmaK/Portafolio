"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { useLanguage } from "@/components/language-provider"
import { SiteHeader } from "@/components/site-header"
import {
  BarChart3,
  Briefcase,
  Code,
  Database,
  Download,
  ExternalLink,
  GitBranch,
  Github,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Rocket,
  Smartphone,
  Target,
} from "lucide-react"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"

const VisualEffects = dynamic(() => import("@/components/visual-effects").then((mod) => mod.VisualEffects), {
  ssr: false,
})

const TONES = {
  indigo: {
    badge:
      "border-indigo-200 bg-indigo-100 text-indigo-800 dark:border-indigo-800/70 dark:bg-indigo-900/35 dark:text-indigo-200",
    card: "border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-background to-background dark:border-indigo-900/70 dark:from-indigo-950/20",
    icon: "text-indigo-600 dark:text-indigo-300",
    chips:
      "[&>*]:border-indigo-200 [&>*]:bg-indigo-100 [&>*]:text-indigo-800 [&>*]:dark:border-indigo-800/60 [&>*]:dark:bg-indigo-900/40 [&>*]:dark:text-indigo-200",
    button:
      "bg-indigo-700 text-white hover:bg-indigo-800 dark:bg-indigo-300 dark:text-indigo-950 dark:hover:bg-indigo-200",
  },
  cyan: {
    badge: "border-cyan-200 bg-cyan-100 text-cyan-800 dark:border-cyan-800/70 dark:bg-cyan-900/35 dark:text-cyan-200",
    card: "border-cyan-200/80 bg-gradient-to-br from-cyan-50/80 via-background to-background dark:border-cyan-900/70 dark:from-cyan-950/20",
    icon: "text-cyan-600 dark:text-cyan-300",
    chips:
      "[&>*]:border-cyan-200 [&>*]:bg-cyan-100 [&>*]:text-cyan-800 [&>*]:dark:border-cyan-800/60 [&>*]:dark:bg-cyan-900/40 [&>*]:dark:text-cyan-200",
    button: "bg-cyan-700 text-white hover:bg-cyan-800 dark:bg-cyan-300 dark:text-cyan-950 dark:hover:bg-cyan-200",
  },
  emerald: {
    badge:
      "border-emerald-200 bg-emerald-100 text-emerald-800 dark:border-emerald-800/70 dark:bg-emerald-900/35 dark:text-emerald-200",
    card: "border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-background to-background dark:border-emerald-900/70 dark:from-emerald-950/20",
    icon: "text-emerald-600 dark:text-emerald-300",
    chips:
      "[&>*]:border-emerald-200 [&>*]:bg-emerald-100 [&>*]:text-emerald-800 [&>*]:dark:border-emerald-800/60 [&>*]:dark:bg-emerald-900/40 [&>*]:dark:text-emerald-200",
    button:
      "bg-emerald-700 text-white hover:bg-emerald-800 dark:bg-emerald-300 dark:text-emerald-950 dark:hover:bg-emerald-200",
  },
  amber: {
    badge:
      "border-amber-200 bg-amber-100 text-amber-800 dark:border-amber-800/70 dark:bg-amber-900/35 dark:text-amber-200",
    card: "border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-background to-background dark:border-amber-900/70 dark:from-amber-950/20",
    icon: "text-amber-600 dark:text-amber-300",
    chips:
      "[&>*]:border-amber-200 [&>*]:bg-amber-100 [&>*]:text-amber-800 [&>*]:dark:border-amber-800/60 [&>*]:dark:bg-amber-900/40 [&>*]:dark:text-amber-200",
    button:
      "bg-amber-700 text-white hover:bg-amber-800 dark:bg-amber-300 dark:text-amber-950 dark:hover:bg-amber-200",
  },
}

const METRICS = [
  { value: "4+", label: "Proyectos destacados", tone: "indigo" },
  { value: "CL + CA", label: "Experiencia internacional", tone: "cyan" },
  { value: "Time-to-value", label: "Enfoque orientado a impacto", tone: "emerald" },
]

const EXPERIENCES = [
  {
    title: "Desarrollador Full-Stack",
    tone: "indigo",
    meta: "Wyletable (Startup) · Remoto | Oct 2025 - Ene 2026",
    bullets: [
      "Construcción integral de agente virtual para gestión operativa y administrativa.",
      "Arquitectura full-stack con Next.js, Supabase y control de roles.",
      "Integración de Google Gemini API para automatización y análisis de información.",
      "Gestión documental, panel de uso y flujos de citas.",
    ],
    tags: ["Next.js", "Supabase", "Gemini API", "Twilio"],
  },
  {
    title: "Desarrollador de Software",
    tone: "emerald",
    meta: "Plexxis Software · Victoria, BC, Canadá | Ago 2025 - Oct 2025",
    bullets: [
      "Desarrollo de funcionalidades para plataforma SaaS empresarial.",
      "Optimización de frontend con React y mejora de endpoints para rendimiento.",
      "Participación en procesos ágiles, code reviews y coordinación técnica internacional.",
    ],
    tags: ["React", "SaaS", "Agile"],
  },
  {
    title: "Pasante de Desarrollo de Software",
    tone: "amber",
    meta: "3UP Consulting Group SAC · Puerto Montt, Chile | Feb 2025",
    bullets: [
      "Herramienta para captura de imágenes con enmascaramiento SVG.",
      "Integración de MySQL para gestión de información y metadatos.",
      "Scripts en Python para procesamiento de datos hiperespectrales.",
    ],
    tags: ["Python", "MySQL", "Linux"],
  },
]

const SKILLS = [
  {
    title: "Lenguajes y Frameworks",
    description: "Stack principal para productos web escalables",
    icon: Code,
    tone: "indigo",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Python", "Django"],
  },
  {
    title: "Bases de Datos",
    description: "Modelado, consulta y performance de datos",
    icon: Database,
    tone: "emerald",
    items: ["PostgreSQL", "MySQL", "Supabase"],
  },
  {
    title: "APIs y Servicios",
    description: "Integraciones y automatización de procesos",
    icon: Smartphone,
    tone: "amber",
    items: ["OpenAI API", "Google Gemini API", "Twilio API"],
  },
  {
    title: "Entorno de Trabajo",
    description: "Flujo técnico, versionado y colaboración",
    icon: GitBranch,
    tone: "cyan",
    items: ["Git", "Linux", "Figma", "Ngrok"],
  },
]

const CASE_STUDIES = [
  {
    title: "Caso: Automatización operativa con IA",
    tone: "indigo",
    problem: "Alta carga manual en agenda, atención y registro operativo.",
    solution: "Diseño de agente virtual con flujos full-stack y automatización de tareas repetitivas.",
    impact: "Menor fricción operativa y mejor trazabilidad para decisiones diarias.",
    tags: ["Arquitectura", "Automatización", "UX de procesos"],
  },
  {
    title: "Caso: SaaS más mantenible y rápido",
    tone: "emerald",
    problem: "Deuda técnica en módulos críticos y tiempos altos de iteración.",
    solution: "Refactor de componentes clave, optimización de endpoints y revisión técnica.",
    impact: "Mejor rendimiento percibido y entregas más predecibles.",
    tags: ["Rendimiento", "Calidad de código", "Escalabilidad"],
  },
]

const PROJECTS = [
  {
    title: "Imágenes Hiperespectrales",
    description: "Aplicación web para integración de cámaras y procesamiento técnico de datos.",
    image: "/i3spectra.png",
    tone: "indigo",
    codeUrl: "https://github.com/GbmaK/proyecto-espectrometria",
    tech: ["JavaScript", "FastAPI", "Python", "NumPy"],
  },
  {
    title: "Magavi Project",
    description: "Landing en Next.js con chat contextual conectado a OpenAI API.",
    image: "/portadaMagavi.png",
    tone: "cyan",
    codeUrl: "https://github.com/GbmaK/Magavi-Project",
    tech: ["Next.js", "JavaScript", "OpenAI API", "Figma"],
  },
  {
    title: "Gastos App",
    description: "Sistema en Django para presupuestos y gastos con filtros por fecha.",
    image: "/gastos.png",
    tone: "amber",
    codeUrl: "https://github.com/GbmaK/TDDS",
    tech: ["Python", "Django", "MySQL"],
  },
  {
    title: "Juego Gato",
    description: "Tic-Tac-Toe en React con validación de turnos y ganador.",
    image: "/gato.png",
    tone: "emerald",
    codeUrl: "https://github.com/GbmaK/Gato",
    demoUrl: "https://gato-rust.vercel.app/",
    tech: ["React", "JavaScript", "Canvas"],
  },
]

const EN_TRANSLATIONS = {
  "Proyectos destacados": "Featured projects",
  "Experiencia internacional": "International experience",
  "Enfoque orientado a impacto": "Impact-focused delivery",
  "Desarrollador Full-Stack": "Full-Stack Developer",
  "Wyletable (Startup) · Remoto | Oct 2025 - Ene 2026": "Wyletable (Startup) · Remote | Oct 2025 - Jan 2026",
  "Construcción integral de agente virtual para gestión operativa y administrativa.":
    "End-to-end build of a virtual agent for operational and administrative management.",
  "Arquitectura full-stack con Next.js, Supabase y control de roles.":
    "Full-stack architecture with Next.js, Supabase, and role-based access control.",
  "Integración de Google Gemini API para automatización y análisis de información.":
    "Google Gemini API integration for automation and information analysis.",
  "Gestión documental, panel de uso y flujos de citas.":
    "Document workflows, usage dashboard, and appointment flows.",
  "Desarrollador de Software": "Software Developer",
  "Plexxis Software · Victoria, BC, Canadá | Ago 2025 - Oct 2025":
    "Plexxis Software · Victoria, BC, Canada | Aug 2025 - Oct 2025",
  "Desarrollo de funcionalidades para plataforma SaaS empresarial.":
    "Developed features for an enterprise SaaS platform.",
  "Optimización de frontend con React y mejora de endpoints para rendimiento.":
    "Frontend optimization with React and endpoint improvements for better performance.",
  "Participación en procesos ágiles, code reviews y coordinación técnica internacional.":
    "Worked in agile workflows, code reviews, and international technical coordination.",
  "Pasante de Desarrollo de Software": "Software Development Intern",
  "Herramienta para captura de imágenes con enmascaramiento SVG.": "Built an image capture tool with SVG masking.",
  "Integración de MySQL para gestión de información y metadatos.":
    "Integrated MySQL for information and metadata management.",
  "Scripts en Python para procesamiento de datos hiperespectrales.":
    "Created Python scripts for hyperspectral data processing.",
  "Lenguajes y Frameworks": "Languages and Frameworks",
  "Stack principal para productos web escalables": "Core stack for scalable web products",
  "Bases de Datos": "Databases",
  "Modelado, consulta y performance de datos": "Data modeling, querying, and performance",
  "APIs y Servicios": "APIs and Services",
  "Integraciones y automatización de procesos": "Integrations and process automation",
  "Entorno de Trabajo": "Work Environment",
  "Flujo técnico, versionado y colaboración": "Technical flow, versioning, and collaboration",
  "Caso: Automatización operativa con IA": "Case: AI-driven operational automation",
  "Alta carga manual en agenda, atención y registro operativo.":
    "High manual workload in scheduling, support, and operational records.",
  "Diseño de agente virtual con flujos full-stack y automatización de tareas repetitivas.":
    "Designed a virtual agent with full-stack flows and repetitive task automation.",
  "Menor fricción operativa y mejor trazabilidad para decisiones diarias.":
    "Less operational friction and improved traceability for day-to-day decisions.",
  "Arquitectura": "Architecture",
  "Automatización": "Automation",
  "Caso: SaaS más mantenible y rápido": "Case: Faster and more maintainable SaaS",
  "Deuda técnica en módulos críticos y tiempos altos de iteración.":
    "Technical debt in critical modules and long iteration cycles.",
  "Refactor de componentes clave, optimización de endpoints y revisión técnica.":
    "Refactored key components, optimized endpoints, and improved technical reviews.",
  "Mejor rendimiento percibido y entregas más predecibles.":
    "Better perceived performance and more predictable delivery.",
  "Rendimiento": "Performance",
  "Calidad de código": "Code quality",
  "Escalabilidad": "Scalability",
  "Imágenes Hiperespectrales": "Hyperspectral Imaging",
  "Aplicación web para integración de cámaras y procesamiento técnico de datos.":
    "Web app for camera integration and technical data processing.",
  "Landing en Next.js con chat contextual conectado a OpenAI API.":
    "Next.js landing page with contextual chat connected to OpenAI API.",
  "Sistema en Django para presupuestos y gastos con filtros por fecha.":
    "Django system for budgets and expense tracking with date filters.",
  "Gastos App": "Expense App",
  "Juego Gato": "Tic-Tac-Toe Game",
  "Tic-Tac-Toe en React con validación de turnos y ganador.":
    "React Tic-Tac-Toe with turn validation and winner detection.",
  "Tecnologías que domino": "Technologies I work with",
  "Tecnologías y prácticas con las que construyo soluciones mantenibles.":
    "Technologies and practices I use to build maintainable solutions.",
  "Sobre mí": "About",
  "Integración de APIs": "API integration",
  "Análisis de datos": "Data analysis",
  "UX de procesos": "Process UX",
  "Arquitectura API": "API architecture",
  "Educación": "Education",
  "Formación e idiomas": "Education and languages",
  "Base técnica sólida y comunicación efectiva para equipos internacionales.":
    "Solid technical foundation and effective communication for international teams.",
  "Técnico Analista Programador": "Technical Programmer Analyst",
  "Institución de Educación Superior | 2023 - 2025": "Higher Education Institution | 2023 - 2025",
  "Formación orientada a desarrollo de software, bases de datos y arquitectura web.":
    "Training focused on software development, databases, and web architecture.",
  "Análisis de sistemas": "Systems analysis",
  "Desarrollo web": "Web development",
  "Idiomas": "Languages",
  "Trabajo técnico multicultural": "Multicultural technical work",
  "Español": "Spanish",
  "Inglés": "English",
  "Comunicación técnica profesional": "Professional technical communication",
  "Proyectos": "Projects",
  "Proyectos seleccionados": "Selected projects",
  "Implementaciones que combinan solución técnica, experiencia de usuario y ejecución completa.":
    "Implementations combining technical execution, user experience, and end-to-end delivery.",
  "Hablemos de tu proyecto": "Let's talk about your project",
  "Información de contacto": "Contact information",
  "Envíame un mensaje": "Send me a message",
  "Completa el formulario y te responderé lo antes posible.": "Complete the form and I will reply as soon as possible.",
  "Disponible para colaboraciones, oportunidades y desafíos de producto.":
    "Available for collaborations, opportunities, and product challenges.",
  "Perfil rápido": "Quick profile",
  "Disponible para nuevos desafíos": "Open to new challenges",
  "Puerto Montt, Chile": "Puerto Montt, Chile",
}

function translateText(text, language) {
  if (language !== "en") return text
  return EN_TRANSLATIONS[text] ?? text
}

function getTone(tone) {
  return TONES[tone] ?? TONES.cyan
}

function SectionBadge({ tone, children }) {
  return (
    <span className={`inline-block rounded-lg border px-3 py-1 text-sm font-medium ${getTone(tone).badge}`}>
      {children}
    </span>
  )
}

function SectionHeading({ id, badge, title, description, tone }) {
  return (
    <div className="flex flex-col items-center space-y-4 text-center">
      <SectionBadge tone={tone}>{badge}</SectionBadge>
      <h2 id={id} className="text-3xl font-bold tracking-tighter sm:text-4xl">
        {title}
      </h2>
      <p className="mx-auto max-w-[760px] text-muted-foreground md:text-lg">{description}</p>
    </div>
  )
}

export default function Portfolio() {
  const { language } = useLanguage()
  const isEnglish = language === "en"
  const t = (es, en) => (isEnglish ? en : es)
  const tr = (text) => translateText(text, language)

  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-background selection:bg-cyan-200 selection:text-cyan-950 dark:selection:bg-cyan-800 dark:selection:text-cyan-100">
      <VisualEffects />
      <div className="relative z-10">
        <a href="#contenido-principal" className="skip-link">
          {t("Ir al contenido principal", "Skip to main content")}
        </a>

        <SiteHeader />

        <main id="contenido-principal">
        <section id="inicio" aria-labelledby="hero-title" className="pb-20 pt-20 md:pb-28 md:pt-28">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
            <div className="flex flex-col items-center space-y-7 text-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2">
              <div data-parallax="tilt" style={{ "--parallax-depth": "10px" }}>
                <SectionBadge tone="cyan">{t("Desarrollador de Software | Analista TI", "Software Developer | IT Analyst")}</SectionBadge>
              </div>

              <div className="space-y-5" data-parallax="tilt" style={{ "--parallax-depth": "18px" }}>
                <h1 id="hero-title" className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  {t("Construyo software con foco en", "I build software focused on")}{" "}
                  <span className="bg-gradient-to-r from-indigo-700 via-cyan-600 to-emerald-600 bg-clip-text text-transparent dark:from-indigo-300 dark:via-cyan-300 dark:to-emerald-300">
                    {t("resultado y calidad", "results and quality")}
                  </span>
                </h1>
                <p className="mx-auto max-w-[840px] text-lg text-muted-foreground md:text-2xl">
                  {t(
                    "Soy Gustavo Mardones. Diseño y desarrollo productos digitales que automatizan procesos, conectan datos y mejoran la toma de decisiones con impacto medible.",
                    "I am Gustavo Mardones. I design and build digital products that automate processes, connect data, and improve decision-making with measurable impact.",
                  )}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-amber-600 dark:text-amber-300" aria-hidden="true" />
                  Puerto Montt, Chile
                </span>
                <a
                  href="mailto:gustavo.altaner@gmail.com"
                  aria-label={t("Enviar correo a Gustavo Mardones", "Send email to Gustavo Mardones")}
                  className="inline-flex items-center gap-2 break-all transition-colors hover:text-cyan-700 dark:hover:text-cyan-300"
                >
                  <Mail className="h-4 w-4 text-cyan-600 dark:text-cyan-300" aria-hidden="true" />
                  gustavo.altaner@gmail.com
                </a>
                <span className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4 text-emerald-600 dark:text-emerald-300" aria-hidden="true" />
                  +56 9 4517 0710
                </span>
              </div>

              <div className="grid w-full max-w-3xl gap-3 pt-2 sm:grid-cols-3">
                {METRICS.map((metric, index) => (
                  <Card
                    key={metric.label}
                    className={`gap-3 py-4 text-center ${getTone(metric.tone).card}`}
                    data-parallax="tilt"
                    style={{ "--parallax-depth": `${8 + index * 4}px` }}
                  >
                    <CardContent className="space-y-1 px-4">
                      <p className="text-lg font-bold">{metric.value}</p>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">{tr(metric.label)}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex flex-col gap-2 pt-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white hover:from-indigo-700 hover:to-cyan-700 dark:from-indigo-400 dark:to-cyan-400 dark:text-slate-950 dark:hover:from-indigo-300 dark:hover:to-cyan-300"
                  asChild
                >
                  <Link href="#experiencia">
                    <Briefcase className="mr-2 h-4 w-4" aria-hidden="true" />
                    {t("Ver experiencia", "View experience")}
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-cyan-300 text-cyan-700 hover:bg-cyan-50 dark:border-cyan-800 dark:text-cyan-200 dark:hover:bg-cyan-900/30"
                  asChild
                >
                  <Link href="#contacto">
                    <MessageSquare className="mr-2 h-4 w-4" aria-hidden="true" />
                    {t("Contactar", "Contact")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="sobre-mi"
          aria-labelledby="sobre-mi-title"
          className="bg-muted/45 py-20"
          style={{ contentVisibility: "auto", containIntrinsicSize: "980px" }}
        >
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="space-y-5 text-center lg:text-left">
              <SectionBadge tone="indigo">{tr("Sobre mí")}</SectionBadge>
              <h2 id="sobre-mi-title" className="text-3xl font-bold tracking-tighter sm:text-4xl">
                {t("Tecnología aplicada a procesos y datos", "Technology applied to processes and data")}
              </h2>
              <p className="text-muted-foreground md:text-lg">
                {t(
                  "Desarrollo software orientado a automatizar operaciones, integrar plataformas y fortalecer la trazabilidad de información para decisiones de negocio.",
                  "I build software focused on automating operations, integrating platforms, and strengthening data traceability for better business decisions.",
                )}
              </p>
              <p className="text-muted-foreground md:text-lg">
                {t(
                  "He colaborado en proyectos de Chile y Canadá con foco en calidad técnica, comunicación efectiva y entrega de valor continuo.",
                  "I have collaborated on projects in Chile and Canada with a strong focus on technical quality, communication, and continuous value delivery.",
                )}
              </p>
              <div className={`flex flex-wrap justify-center gap-2 lg:justify-start ${getTone("indigo").chips}`}>
                <Badge variant="secondary">Full-Stack</Badge>
                <Badge variant="secondary">{tr("Automatización")}</Badge>
                <Badge variant="secondary">{tr("Integración de APIs")}</Badge>
                <Badge variant="secondary">{tr("Análisis de datos")}</Badge>
              </div>
              <div className="flex justify-center lg:justify-start">
                <Button
                  className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white hover:from-indigo-700 hover:to-cyan-700 dark:from-indigo-400 dark:to-cyan-400 dark:text-slate-950 dark:hover:from-indigo-300 dark:hover:to-cyan-300"
                  asChild
                >
                  <a href="/Gustavo%20Mardones%20Resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                    {t("Descargar CV", "Download Resume")}
                  </a>
                </Button>
              </div>
            </div>

            <Card
              className={`w-full max-w-md justify-self-center lg:justify-self-end ${getTone("indigo").card}`}
              data-parallax="tilt"
              style={{ "--parallax-depth": "14px" }}
            >
              <CardHeader>
                <CardTitle className={getTone("indigo").icon}>{tr("Perfil rápido")}</CardTitle>
                <CardDescription>{tr("Disponible para nuevos desafíos")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="h-4 w-4 text-amber-600 dark:text-amber-300" aria-hidden="true" />
                  <span>Puerto Montt, Chile</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4 text-cyan-600 dark:text-cyan-300" aria-hidden="true" />
                  <span className="break-all">gustavo.altaner@gmail.com</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4 text-emerald-600 dark:text-emerald-300" aria-hidden="true" />
                  <span>+56 9 4517 0710</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section
          id="experiencia"
          aria-labelledby="experiencia-title"
          className="py-20"
          style={{ contentVisibility: "auto", containIntrinsicSize: "920px" }}
        >
          <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
            <SectionHeading
              id="experiencia-title"
              badge={t("Experiencia", "Experience")}
              title={t("Experiencia laboral", "Work experience")}
              description={t(
                "Participación en productos reales, equipos distribuidos y decisiones técnicas orientadas a negocio.",
                "Hands-on work in real products, distributed teams, and technical decisions aligned with business goals.",
              )}
              tone="amber"
            />

            <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-3">
              {EXPERIENCES.map((item) => {
                const tone = getTone(item.tone)
                return (
                  <Card key={item.title} className={tone.card} data-parallax="tilt" style={{ "--parallax-depth": "10px" }}>
                    <CardHeader>
                      <CardTitle className={tone.icon}>{tr(item.title)}</CardTitle>
                      <CardDescription>{tr(item.meta)}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>{tr(bullet)}</li>
                        ))}
                      </ul>
                      <div className={`mt-4 flex flex-wrap gap-2 ${tone.chips}`}>
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tr(tag)}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
        <section
          id="educacion"
          aria-labelledby="educacion-title"
          className="bg-muted/45 py-20"
          style={{ contentVisibility: "auto", containIntrinsicSize: "900px" }}
        >
          <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
            <SectionHeading
              id="educacion-title"
              badge={tr("Educación")}
              title={tr("Formación e idiomas")}
              description={tr("Base técnica sólida y comunicación efectiva para equipos internacionales.")}
              tone="indigo"
            />

            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card className={`lg:col-span-2 ${getTone("indigo").card}`}>
                <CardHeader>
                  <CardTitle className={`flex items-center gap-2 ${getTone("indigo").icon}`}>
                    <Rocket className="h-5 w-5" aria-hidden="true" />
                    {tr("Técnico Analista Programador")}
                  </CardTitle>
                  <CardDescription>{tr("Institución de Educación Superior | 2023 - 2025")}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <p>{tr("Formación orientada a desarrollo de software, bases de datos y arquitectura web.")}</p>
                  <div className={`flex flex-wrap gap-2 ${getTone("indigo").chips}`}>
                    <Badge variant="outline">{tr("Análisis de sistemas")}</Badge>
                    <Badge variant="outline">{tr("Desarrollo web")}</Badge>
                    <Badge variant="outline">Arquitectura API</Badge>
                    <Badge variant="outline">{tr("Bases de Datos")}</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className={getTone("cyan").card}>
                <CardHeader>
                  <CardTitle className={`flex items-center gap-2 ${getTone("cyan").icon}`}>
                    <Languages className="h-5 w-5" aria-hidden="true" />
                    {tr("Idiomas")}
                  </CardTitle>
                  <CardDescription>{tr("Trabajo técnico multicultural")}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div className="rounded-lg border border-cyan-200/80 bg-cyan-50/60 p-3 dark:border-cyan-900/60 dark:bg-cyan-950/20">
                    <p className="font-semibold text-foreground">{tr("Español")}</p>
                    <p>{t("Nativo", "Native")}</p>
                  </div>
                  <div className="rounded-lg border border-cyan-200/80 bg-cyan-50/60 p-3 dark:border-cyan-900/60 dark:bg-cyan-950/20">
                    <p className="font-semibold text-foreground">{tr("Inglés")}</p>
                    <p>{tr("Comunicación técnica profesional")}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="habilidades"
          aria-labelledby="habilidades-title"
          className="py-20"
          style={{ contentVisibility: "auto", containIntrinsicSize: "920px" }}
        >
          <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
            <SectionHeading
              id="habilidades-title"
              badge={t("Habilidades", "Skills")}
              title={tr("Tecnologías que domino")}
              description={tr("Tecnologías y prácticas con las que construyo soluciones mantenibles.")}
              tone="emerald"
            />

            <div className="mx-auto grid max-w-6xl gap-6 py-12 sm:grid-cols-2 xl:grid-cols-4">
              {SKILLS.map((group) => {
                const Icon = group.icon
                const tone = getTone(group.tone)
                return (
                  <Card key={group.title} className={tone.card}>
                    <CardHeader>
                      <Icon className={`h-9 w-9 ${tone.icon}`} aria-hidden="true" />
                      <CardTitle className={tone.icon}>{tr(group.title)}</CardTitle>
                      <CardDescription>{tr(group.description)}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className={`flex flex-wrap gap-2 ${tone.chips}`}>
                        {group.items.map((item) => (
                          <Badge key={item}>{tr(item)}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section
          id="proyectos"
          aria-labelledby="proyectos-title"
          className="bg-muted/45 py-20"
          style={{ contentVisibility: "auto", containIntrinsicSize: "1260px" }}
        >
          <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
            <SectionHeading
              id="proyectos-title"
              badge={tr("Proyectos")}
              title={tr("Proyectos seleccionados")}
              description={tr("Implementaciones que combinan solución técnica, experiencia de usuario y ejecución completa.")}
              tone="cyan"
            />

            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              {CASE_STUDIES.map((study) => {
                const tone = getTone(study.tone)
                return (
                  <Card
                    key={study.title}
                    className={tone.card}
                    data-parallax="float"
                    style={{ contentVisibility: "auto", containIntrinsicSize: "350px", "--parallax-depth": "42px" }}
                  >
                    <CardHeader>
                      <CardTitle className={`flex items-center gap-2 ${tone.icon}`}>
                        <BarChart3 className="h-5 w-5" aria-hidden="true" />
                        {tr(study.title)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        <span className="font-semibold text-foreground">{t("Problema:", "Problem:")}</span> {tr(study.problem)}
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">{t("Solución:", "Solution:")}</span> {tr(study.solution)}
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">{t("Impacto:", "Impact:")}</span> {tr(study.impact)}
                      </p>
                      <div className={`flex flex-wrap gap-2 ${tone.chips}`}>
                        {study.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tr(tag)}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 pb-4 lg:grid-cols-2 lg:gap-10">
              {PROJECTS.map((project, index) => {
                const tone = getTone(project.tone)
                return (
                  <Card
                    key={project.title}
                    className={`overflow-hidden ${tone.card}`}
                    data-parallax="tilt"
                    style={{ contentVisibility: "auto", containIntrinsicSize: "520px", "--parallax-depth": "12px" }}
                  >
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <Image
                        src={project.image}
                        alt={`${t("Vista previa de", "Preview of")} ${tr(project.title)}`}
                        fill
                        sizes="(min-width: 1280px) 512px, (min-width: 1024px) 45vw, (min-width: 768px) 80vw, 100vw"
                        quality={85}
                        priority={index === 0}
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className={tone.icon}>{tr(project.title)}</CardTitle>
                      <CardDescription>{tr(project.description)}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className={`mb-4 flex flex-wrap gap-2 ${tone.chips}`}>
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" className={tone.button} asChild>
                          <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                            {t("Código", "Code")}
                          </Link>
                        </Button>
                        {project.demoUrl ? (
                          <Button size="sm" variant="outline" className="border-foreground/20 hover:bg-foreground/5" asChild>
                            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                              Demo
                            </Link>
                          </Button>
                        ) : null}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section
          id="contacto"
          aria-labelledby="contacto-title"
          className="py-20"
          style={{ contentVisibility: "auto", containIntrinsicSize: "860px" }}
        >
          <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
            <SectionHeading
              id="contacto-title"
              badge={t("Contacto", "Contact")}
              title={tr("Hablemos de tu proyecto")}
              description={tr("Disponible para colaboraciones, oportunidades y desafíos de producto.")}
              tone="indigo"
            />

            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className={`space-y-5 rounded-xl border p-6 ${getTone("indigo").card}`}>
                <h3 className="text-xl font-bold">{tr("Información de contacto")}</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-cyan-600 dark:text-cyan-300" aria-hidden="true" />
                    <span className="break-all">gustavo.altaner@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-emerald-600 dark:text-emerald-300" aria-hidden="true" />
                    <span>+56 9 4517 0710</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-amber-600 dark:text-amber-300" aria-hidden="true" />
                    <span>Puerto Montt, Chile</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-zinc-300/80 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800/60"
                    asChild
                  >
                    <Link
                      href="https://github.com/GbmaK"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t("Visitar GitHub de Gustavo Mardones", "Visit Gustavo Mardones GitHub")}
                    >
                      <Github className="h-4 w-4 text-zinc-700 dark:text-zinc-200" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-cyan-300/80 hover:bg-cyan-50 dark:border-cyan-800 dark:hover:bg-cyan-900/30"
                    asChild
                  >
                    <Link
                      href="https://www.linkedin.com/in/gustavo-mardones-499b2425a"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t("Visitar LinkedIn de Gustavo Mardones", "Visit Gustavo Mardones LinkedIn")}
                    >
                      <Linkedin className="h-4 w-4 text-cyan-700 dark:text-cyan-300" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-indigo-300/80 hover:bg-indigo-50 dark:border-indigo-800 dark:hover:bg-indigo-900/30"
                    asChild
                  >
                    <Link href="mailto:gustavo.altaner@gmail.com" aria-label={t("Enviar correo electrónico", "Send email")}>
                      <Mail className="h-4 w-4 text-indigo-700 dark:text-indigo-300" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>

              <Card className={getTone("cyan").card}>
                <CardHeader>
                  <CardTitle className={`flex items-center gap-2 ${getTone("cyan").icon}`}>
                    <Target className="h-5 w-5" aria-hidden="true" />
                    {tr("Envíame un mensaje")}
                  </CardTitle>
                  <CardDescription>{tr("Completa el formulario y te responderé lo antes posible.")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        </main>
        <footer className="border-t py-6 md:py-0">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 md:h-24 md:flex-row md:px-6">
            <div className="flex flex-col items-center gap-2 text-center md:flex-row md:text-left">
              <Code className="h-5 w-5 text-indigo-600 dark:text-indigo-300" aria-hidden="true" />
              <p className="text-sm text-muted-foreground">© 2026 Gustavo Mardones. Built with Next.js.</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="hover:bg-zinc-100 dark:hover:bg-zinc-800/60" asChild>
                <Link href="https://github.com/GbmaK" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4 text-zinc-700 dark:text-zinc-200" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-cyan-50 dark:hover:bg-cyan-900/30" asChild>
                <Link
                  href="https://www.linkedin.com/in/gustavo-mardones-499b2425a"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4 text-cyan-700 dark:text-cyan-300" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-indigo-50 dark:hover:bg-indigo-900/30" asChild>
                <Link href="mailto:gustavo.altaner@gmail.com" aria-label="Email">
                  <Mail className="h-4 w-4 text-indigo-700 dark:text-indigo-300" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

