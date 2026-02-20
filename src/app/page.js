import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
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
import Image from "next/image"
import Link from "next/link"

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
  return (
    <div className="min-h-screen bg-background selection:bg-cyan-200 selection:text-cyan-950 dark:selection:bg-cyan-800 dark:selection:text-cyan-100">
      <a href="#contenido-principal" className="skip-link">
        Ir al contenido principal
      </a>

      <SiteHeader />

      <main id="contenido-principal">
        <section id="inicio" aria-labelledby="hero-title" className="pb-20 pt-20 md:pb-28 md:pt-28">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
            <div className="flex flex-col items-center space-y-7 text-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2">
              <SectionBadge tone="cyan">Desarrollador de Software | Analista TI</SectionBadge>

              <div className="space-y-5">
                <h1 id="hero-title" className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Construyo software con foco en{" "}
                  <span className="bg-gradient-to-r from-indigo-700 via-cyan-600 to-emerald-600 bg-clip-text text-transparent dark:from-indigo-300 dark:via-cyan-300 dark:to-emerald-300">
                    resultado y calidad
                  </span>
                </h1>
                <p className="mx-auto max-w-[840px] text-lg text-muted-foreground md:text-2xl">
                  Soy Gustavo Mardones. Diseño y desarrollo productos digitales que automatizan procesos, conectan
                  datos y mejoran la toma de decisiones con impacto medible.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-amber-600 dark:text-amber-300" aria-hidden="true" />
                  Puerto Montt, Chile
                </span>
                <a
                  href="mailto:gustavo.altaner@gmail.com"
                  aria-label="Enviar correo a Gustavo Mardones"
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
                {METRICS.map((metric) => (
                  <Card key={metric.label} className={`gap-3 py-4 text-center ${getTone(metric.tone).card}`}>
                    <CardContent className="space-y-1 px-4">
                      <p className="text-lg font-bold">{metric.value}</p>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">{metric.label}</p>
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
                    Ver experiencia
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
                    Contactar
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre-mi" aria-labelledby="sobre-mi-title" className="bg-muted/45 py-20">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="space-y-5 text-center lg:text-left">
              <SectionBadge tone="indigo">Sobre mí</SectionBadge>
              <h2 id="sobre-mi-title" className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Tecnología aplicada a procesos y datos
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Desarrollo software orientado a automatizar operaciones, integrar plataformas y fortalecer la
                trazabilidad de información para decisiones de negocio.
              </p>
              <p className="text-muted-foreground md:text-lg">
                He colaborado en proyectos de Chile y Canadá con foco en calidad técnica, comunicación efectiva y
                entrega de valor continuo.
              </p>
              <div className={`flex flex-wrap justify-center gap-2 lg:justify-start ${getTone("indigo").chips}`}>
                <Badge variant="secondary">Full-Stack</Badge>
                <Badge variant="secondary">Automatización</Badge>
                <Badge variant="secondary">Integración de APIs</Badge>
                <Badge variant="secondary">Análisis de datos</Badge>
              </div>
              <div className="flex justify-center lg:justify-start">
                <Button
                  className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white hover:from-indigo-700 hover:to-cyan-700 dark:from-indigo-400 dark:to-cyan-400 dark:text-slate-950 dark:hover:from-indigo-300 dark:hover:to-cyan-300"
                  asChild
                >
                  <a href="/Gustavo%20Mardones%20Resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                    Descargar CV
                  </a>
                </Button>
              </div>
            </div>

            <Card className={`w-full max-w-md justify-self-center lg:justify-self-end ${getTone("indigo").card}`}>
              <CardHeader>
                <CardTitle className={getTone("indigo").icon}>Perfil rápido</CardTitle>
                <CardDescription>Disponible para nuevos desafíos</CardDescription>
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

        <section id="experiencia" aria-labelledby="experiencia-title" className="py-20">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
            <SectionHeading
              id="experiencia-title"
              badge="Experiencia"
              title="Experiencia laboral"
              description="Participación en productos reales, equipos distribuidos y decisiones técnicas orientadas a negocio."
              tone="amber"
            />

            <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-3">
              {EXPERIENCES.map((item) => {
                const tone = getTone(item.tone)
                return (
                  <Card key={item.title} className={tone.card}>
                    <CardHeader>
                      <CardTitle className={tone.icon}>{item.title}</CardTitle>
                      <CardDescription>{item.meta}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                      <div className={`mt-4 flex flex-wrap gap-2 ${tone.chips}`}>
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
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
        <section id="educacion" aria-labelledby="educacion-title" className="bg-muted/45 py-20">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
            <SectionHeading
              id="educacion-title"
              badge="Educación"
              title="Formación e idiomas"
              description="Base técnica sólida y comunicación efectiva para equipos internacionales."
              tone="indigo"
            />

            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card className={`lg:col-span-2 ${getTone("indigo").card}`}>
                <CardHeader>
                  <CardTitle className={`flex items-center gap-2 ${getTone("indigo").icon}`}>
                    <Rocket className="h-5 w-5" aria-hidden="true" />
                    Técnico Analista Programador
                  </CardTitle>
                  <CardDescription>Institución de Educación Superior | 2023 - 2025</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <p>Formación orientada a desarrollo de software, bases de datos y arquitectura web.</p>
                  <div className={`flex flex-wrap gap-2 ${getTone("indigo").chips}`}>
                    <Badge variant="outline">Análisis de sistemas</Badge>
                    <Badge variant="outline">Desarrollo web</Badge>
                    <Badge variant="outline">Arquitectura API</Badge>
                    <Badge variant="outline">Bases de datos</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className={getTone("cyan").card}>
                <CardHeader>
                  <CardTitle className={`flex items-center gap-2 ${getTone("cyan").icon}`}>
                    <Languages className="h-5 w-5" aria-hidden="true" />
                    Idiomas
                  </CardTitle>
                  <CardDescription>Trabajo técnico multicultural</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div className="rounded-lg border border-cyan-200/80 bg-cyan-50/60 p-3 dark:border-cyan-900/60 dark:bg-cyan-950/20">
                    <p className="font-semibold text-foreground">Español</p>
                    <p>Nativo</p>
                  </div>
                  <div className="rounded-lg border border-cyan-200/80 bg-cyan-50/60 p-3 dark:border-cyan-900/60 dark:bg-cyan-950/20">
                    <p className="font-semibold text-foreground">Inglés</p>
                    <p>Comunicación técnica profesional</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="habilidades" aria-labelledby="habilidades-title" className="py-20">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
            <SectionHeading
              id="habilidades-title"
              badge="Habilidades"
              title="Tecnologías que domino"
              description="Tecnologías y prácticas con las que construyo soluciones mantenibles."
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
                      <CardTitle className={tone.icon}>{group.title}</CardTitle>
                      <CardDescription>{group.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className={`flex flex-wrap gap-2 ${tone.chips}`}>
                        {group.items.map((item) => (
                          <Badge key={item}>{item}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section id="proyectos" aria-labelledby="proyectos-title" className="bg-muted/45 py-20">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
            <SectionHeading
              id="proyectos-title"
              badge="Proyectos"
              title="Proyectos seleccionados"
              description="Implementaciones que combinan solución técnica, experiencia de usuario y ejecución completa."
              tone="cyan"
            />

            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              {CASE_STUDIES.map((study) => {
                const tone = getTone(study.tone)
                return (
                  <Card key={study.title} className={tone.card} style={{ contentVisibility: "auto", containIntrinsicSize: "350px" }}>
                    <CardHeader>
                      <CardTitle className={`flex items-center gap-2 ${tone.icon}`}>
                        <BarChart3 className="h-5 w-5" aria-hidden="true" />
                        {study.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        <span className="font-semibold text-foreground">Problema:</span> {study.problem}
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Solución:</span> {study.solution}
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Impacto:</span> {study.impact}
                      </p>
                      <div className={`flex flex-wrap gap-2 ${tone.chips}`}>
                        {study.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
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
                  <Card key={project.title} className={`overflow-hidden ${tone.card}`} style={{ contentVisibility: "auto", containIntrinsicSize: "520px" }}>
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <Image
                        src={project.image}
                        alt={`Vista previa de ${project.title}`}
                        fill
                        sizes="(min-width: 1280px) 512px, (min-width: 1024px) 45vw, (min-width: 768px) 80vw, 100vw"
                        quality={85}
                        priority={index === 0}
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className={tone.icon}>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
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
                            Código
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

        <section id="contacto" aria-labelledby="contacto-title" className="py-20">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
            <SectionHeading
              id="contacto-title"
              badge="Contacto"
              title="Hablemos de tu proyecto"
              description="Disponible para colaboraciones, oportunidades y desafíos de producto."
              tone="indigo"
            />

            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className={`space-y-5 rounded-xl border p-6 ${getTone("indigo").card}`}>
                <h3 className="text-xl font-bold">Información de contacto</h3>
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
                    <Link href="https://github.com/GbmaK" target="_blank" rel="noopener noreferrer" aria-label="Visitar GitHub de Gustavo Mardones">
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
                      aria-label="Visitar LinkedIn de Gustavo Mardones"
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
                    <Link href="mailto:gustavo.altaner@gmail.com" aria-label="Enviar correo electrónico">
                      <Mail className="h-4 w-4 text-indigo-700 dark:text-indigo-300" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>

              <Card className={getTone("cyan").card}>
                <CardHeader>
                  <CardTitle className={`flex items-center gap-2 ${getTone("cyan").icon}`}>
                    <Target className="h-5 w-5" aria-hidden="true" />
                    Envíame un mensaje
                  </CardTitle>
                  <CardDescription>Completa el formulario y te responderé lo antes posible.</CardDescription>
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
  )
}
