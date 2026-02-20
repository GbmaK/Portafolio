
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { SiteHeader } from "@/components/site-header"
import {
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
    badge: "border-indigo-200 bg-indigo-100 text-indigo-800 dark:border-indigo-800/70 dark:bg-indigo-900/35 dark:text-indigo-200",
    card: "border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-background to-background dark:border-indigo-900/70 dark:from-indigo-950/20",
    icon: "text-indigo-600 dark:text-indigo-300",
    chips: "[&>*]:border-indigo-200 [&>*]:bg-indigo-100 [&>*]:text-indigo-800 [&>*]:dark:border-indigo-800/60 [&>*]:dark:bg-indigo-900/40 [&>*]:dark:text-indigo-200",
    button: "bg-indigo-700 text-white hover:bg-indigo-800 dark:bg-indigo-300 dark:text-indigo-950 dark:hover:bg-indigo-200",
  },
  cyan: {
    badge: "border-cyan-200 bg-cyan-100 text-cyan-800 dark:border-cyan-800/70 dark:bg-cyan-900/35 dark:text-cyan-200",
    card: "border-cyan-200/80 bg-gradient-to-br from-cyan-50/80 via-background to-background dark:border-cyan-900/70 dark:from-cyan-950/20",
    icon: "text-cyan-600 dark:text-cyan-300",
    chips: "[&>*]:border-cyan-200 [&>*]:bg-cyan-100 [&>*]:text-cyan-800 [&>*]:dark:border-cyan-800/60 [&>*]:dark:bg-cyan-900/40 [&>*]:dark:text-cyan-200",
    button: "bg-cyan-700 text-white hover:bg-cyan-800 dark:bg-cyan-300 dark:text-cyan-950 dark:hover:bg-cyan-200",
  },
  emerald: {
    badge: "border-emerald-200 bg-emerald-100 text-emerald-800 dark:border-emerald-800/70 dark:bg-emerald-900/35 dark:text-emerald-200",
    card: "border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-background to-background dark:border-emerald-900/70 dark:from-emerald-950/20",
    icon: "text-emerald-600 dark:text-emerald-300",
    chips: "[&>*]:border-emerald-200 [&>*]:bg-emerald-100 [&>*]:text-emerald-800 [&>*]:dark:border-emerald-800/60 [&>*]:dark:bg-emerald-900/40 [&>*]:dark:text-emerald-200",
    button: "bg-emerald-700 text-white hover:bg-emerald-800 dark:bg-emerald-300 dark:text-emerald-950 dark:hover:bg-emerald-200",
  },
  amber: {
    badge: "border-amber-200 bg-amber-100 text-amber-800 dark:border-amber-800/70 dark:bg-amber-900/35 dark:text-amber-200",
    card: "border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-background to-background dark:border-amber-900/70 dark:from-amber-950/20",
    icon: "text-amber-600 dark:text-amber-300",
    chips: "[&>*]:border-amber-200 [&>*]:bg-amber-100 [&>*]:text-amber-800 [&>*]:dark:border-amber-800/60 [&>*]:dark:bg-amber-900/40 [&>*]:dark:text-amber-200",
    button: "bg-amber-700 text-white hover:bg-amber-800 dark:bg-amber-300 dark:text-amber-950 dark:hover:bg-amber-200",
  },
}

const METRICS = [
  { value: "4+", label: "Proyectos destacados", tone: "indigo" },
  { value: "CL + CA", label: "Experiencia internacional", tone: "cyan" },
  { value: "Calidad", label: "Enfoque de trabajo", tone: "emerald" },
]

const EXPERIENCES = [
  {
    title: "Desarrollador Full-Stack",
    tone: "indigo",
    meta: "Wyletable (Startup) - Remoto | Oct 2025 - Ene 2026",
    bullets: [
      "Desarrollo integral de agente virtual para gestion operativa y administrativa.",
      "Arquitectura full-stack con Next.js y Supabase.",
      "Integracion de Google Gemini API para automatizacion y analitica.",
      "Gestion de citas, documentos y control de usuarios.",
      "Integracion de llamadas via Twilio y panel de uso.",
    ],
    tags: ["Next.js", "Supabase", "Gemini API", "Twilio"],
  },
  {
    title: "Desarrollador de Software",
    tone: "emerald",
    meta: "Plexxis Software - Victoria, BC, Canada | Ago 2025 - Oct 2025",
    bullets: [
      "Desarrollo de funcionalidades para plataforma SaaS empresarial.",
      "Mejoras en frontend con React y optimizacion de backend.",
      "Participacion en metodologias agiles y code reviews.",
      "Trabajo internacional con comunicacion tecnica en ingles.",
    ],
    tags: ["React", "SaaS", "Agile"],
  },
]
const SKILLS = [
  {
    title: "Lenguajes y Frameworks",
    description: "Stack web moderno",
    icon: Code,
    tone: "indigo",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Python", "Django"],
  },
  {
    title: "Bases de Datos",
    description: "Modelado y rendimiento",
    icon: Database,
    tone: "emerald",
    items: ["PostgreSQL", "MySQL", "Supabase"],
  },
  {
    title: "APIs y Servicios",
    description: "Integraciones y automatizacion",
    icon: Smartphone,
    tone: "amber",
    items: ["OpenAI API", "Google Gemini API", "Twilio API"],
  },
  {
    title: "Herramientas",
    description: "Flujo y colaboracion",
    icon: GitBranch,
    tone: "cyan",
    items: ["Git", "Linux", "Figma", "Ngrok"],
  },
]

const PROJECTS = [
  {
    title: "Imagenes hiperespectrales",
    description: "Aplicacion web con integracion de camaras y procesamiento de datos.",
    image: "/i3spectra.png",
    tone: "indigo",
    codeUrl: "https://github.com/GbmaK/proyecto-espectrometria",
    tech: ["JavaScript", "FastAPI", "Python", "NumPy"],
  },
  {
    title: "Magavi Project",
    description: "Landing page en Next.js con chat conectado a OpenAI API.",
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
    description: "Tic-Tac-Toe en React con logica de turnos y validacion de ganador.",
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

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background selection:bg-cyan-200 selection:text-cyan-950 dark:selection:bg-cyan-800 dark:selection:text-cyan-100">
      <a href="#contenido-principal" className="skip-link">
        Ir al contenido principal
      </a>

      <SiteHeader />

      <main id="contenido-principal">
        <section id="inicio" className="pb-20 pt-20 md:pb-28 md:pt-28">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
            <div className="flex flex-col items-center space-y-7 text-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2">
              <SectionBadge tone="cyan">Desarrollador de Software | Analista TI</SectionBadge>
              <div className="space-y-5">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Construyo software con foco en{" "}
                  <span className="bg-gradient-to-r from-indigo-700 via-cyan-600 to-emerald-600 bg-clip-text text-transparent dark:from-indigo-300 dark:via-cyan-300 dark:to-emerald-300">
                    resultado y calidad
                  </span>
                </h1>
                <p className="mx-auto max-w-[820px] text-lg text-muted-foreground md:text-2xl">
                  Soy Gustavo Mardones. Diseno y desarrollo productos digitales que automatizan procesos,
                  conectan datos y mejoran decisiones.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-amber-600 dark:text-amber-300" /> Puerto Montt, Chile
                </span>
                <a href="mailto:gustavo.altaner@gmail.com" className="inline-flex items-center gap-2 break-all transition-colors hover:text-cyan-700 dark:hover:text-cyan-300">
                  <Mail className="h-4 w-4 text-cyan-600 dark:text-cyan-300" /> gustavo.altaner@gmail.com
                </a>
                <span className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4 text-emerald-600 dark:text-emerald-300" /> +56 9 4517 0710
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
                <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white hover:from-indigo-700 hover:to-cyan-700 dark:from-indigo-400 dark:to-cyan-400 dark:text-slate-950 dark:hover:from-indigo-300 dark:hover:to-cyan-300" asChild>
                  <Link href="#experiencia"><Briefcase className="mr-2 h-4 w-4" />Ver experiencia</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-cyan-300 text-cyan-700 hover:bg-cyan-50 dark:border-cyan-800 dark:text-cyan-200 dark:hover:bg-cyan-900/30" asChild>
                  <Link href="#contacto"><MessageSquare className="mr-2 h-4 w-4" />Contactar</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="bg-muted/45 py-20">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="space-y-5 text-center lg:text-left">
              <SectionBadge tone="indigo">Sobre mi</SectionBadge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Tecnologia aplicada a procesos y datos</h2>
              <p className="text-muted-foreground md:text-lg">
                Desarrollo software orientado a automatizar operaciones, integrar plataformas y mejorar la trazabilidad de informacion.
              </p>
              <p className="text-muted-foreground md:text-lg">
                He trabajado en proyectos de Chile y Canada, colaborando con equipos tecnicos y altos estandares de calidad.
              </p>
              <div className={`flex flex-wrap justify-center gap-2 lg:justify-start ${getTone("indigo").chips}`}>
                <Badge variant="secondary">Full-Stack</Badge>
                <Badge variant="secondary">Automatizacion</Badge>
                <Badge variant="secondary">Integracion API</Badge>
                <Badge variant="secondary">Analisis de datos</Badge>
              </div>
              <div className="flex justify-center lg:justify-start">
                <Button className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white hover:from-indigo-700 hover:to-cyan-700 dark:from-indigo-400 dark:to-cyan-400 dark:text-slate-950 dark:hover:from-indigo-300 dark:hover:to-cyan-300" asChild>
                  <a href="/Gustavo%20Mardones%20Resume.pdf" download><Download className="mr-2 h-4 w-4" />Descargar CV</a>
                </Button>
              </div>
            </div>

            <Card className={`w-full max-w-md justify-self-center lg:justify-self-end ${getTone("indigo").card}`}>
              <CardHeader>
                <CardTitle className={getTone("indigo").icon}>Perfil rapido</CardTitle>
                <CardDescription>Disponible para nuevos desafios</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2"><MapPin className="h-4 w-4 text-amber-600 dark:text-amber-300" /><span>Puerto Montt, Chile</span></div>
                <div className="flex items-center justify-center gap-2"><Mail className="h-4 w-4 text-cyan-600 dark:text-cyan-300" /><span className="break-all">gustavo.altaner@gmail.com</span></div>
                <div className="flex items-center justify-center gap-2"><Phone className="h-4 w-4 text-emerald-600 dark:text-emerald-300" /><span>+56 9 4517 0710</span></div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="experiencia" className="py-20">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <SectionBadge tone="amber">Experiencia</SectionBadge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Experiencia laboral</h2>
              <p className="mx-auto max-w-[760px] text-muted-foreground md:text-lg">Experiencia en productos reales, equipos distribuidos y decisiones tecnicas orientadas a negocio.</p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-2 lg:gap-8">
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
                        {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                      </ul>
                      <div className={`mt-4 flex flex-wrap gap-2 ${tone.chips}`}>
                        {item.tags.map((tag) => <Badge key={tag} variant="outline">{tag}</Badge>)}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section id="educacion" className="bg-muted/45 py-20">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <SectionBadge tone="indigo">Educacion</SectionBadge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Formacion e idiomas</h2>
              <p className="mx-auto max-w-[760px] text-muted-foreground md:text-lg">Base tecnica solida y comunicacion efectiva para equipos internacionales.</p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card className={`lg:col-span-2 ${getTone("indigo").card}`}>
                <CardHeader>
                  <CardTitle className={`flex items-center gap-2 ${getTone("indigo").icon}`}><Rocket className="h-5 w-5" />Tecnico Analista Programador</CardTitle>
                  <CardDescription>Institucion de Educacion Superior | 2023 - 2025</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <p>Formacion orientada a desarrollo de software, bases de datos y arquitectura web.</p>
                  <div className={`flex flex-wrap gap-2 ${getTone("indigo").chips}`}>
                    <Badge variant="outline">Analisis de sistemas</Badge>
                    <Badge variant="outline">Desarrollo web</Badge>
                    <Badge variant="outline">Arquitectura API</Badge>
                    <Badge variant="outline">Bases de datos</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className={getTone("cyan").card}>
                <CardHeader>
                  <CardTitle className={`flex items-center gap-2 ${getTone("cyan").icon}`}><Languages className="h-5 w-5" />Idiomas</CardTitle>
                  <CardDescription>Trabajo tecnico multicultural</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div className="rounded-lg border border-cyan-200/80 bg-cyan-50/60 p-3 dark:border-cyan-900/60 dark:bg-cyan-950/20"><p className="font-semibold text-foreground">Espanol</p><p>Nativo</p></div>
                  <div className="rounded-lg border border-cyan-200/80 bg-cyan-50/60 p-3 dark:border-cyan-900/60 dark:bg-cyan-950/20"><p className="font-semibold text-foreground">Ingles</p><p>Comunicacion tecnica profesional</p></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="habilidades" className="py-20">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <SectionBadge tone="emerald">Habilidades</SectionBadge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Tecnologias que domino</h2>
              <p className="mx-auto max-w-[760px] text-muted-foreground md:text-lg">Tecnologias, servicios y practicas con las que construyo soluciones mantenibles.</p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-6 py-12 sm:grid-cols-2 xl:grid-cols-4">
              {SKILLS.map((group) => {
                const Icon = group.icon
                const tone = getTone(group.tone)
                return (
                  <Card key={group.title} className={tone.card}>
                    <CardHeader>
                      <Icon className={`h-9 w-9 ${tone.icon}`} />
                      <CardTitle className={tone.icon}>{group.title}</CardTitle>
                      <CardDescription>{group.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className={`flex flex-wrap gap-2 ${tone.chips}`}>
                        {group.items.map((item) => <Badge key={item}>{item}</Badge>)}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section id="proyectos" className="bg-muted/45 py-20">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <SectionBadge tone="cyan">Proyectos</SectionBadge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Proyectos seleccionados</h2>
              <p className="mx-auto max-w-[760px] text-muted-foreground md:text-lg">Proyectos que muestran integracion tecnica, experiencia de usuario y ejecucion completa.</p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-10">
              {PROJECTS.map((project) => {
                const tone = getTone(project.tone)
                return (
                  <Card key={project.title} className={`overflow-hidden ${tone.card}`}>
                    <div className="relative aspect-video overflow-hidden">
                      <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                    <CardHeader>
                      <CardTitle className={tone.icon}>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className={`mb-4 flex flex-wrap gap-2 ${tone.chips}`}>
                        {project.tech.map((tech) => <Badge key={tech} variant="outline">{tech}</Badge>)}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" className={tone.button} asChild>
                          <Link href={project.codeUrl} target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4" />Codigo</Link>
                        </Button>
                        {project.demoUrl ? (
                          <Button size="sm" variant="outline" className="border-foreground/20 hover:bg-foreground/5" asChild>
                            <Link href={project.demoUrl} target="_blank" rel="noreferrer"><ExternalLink className="mr-2 h-4 w-4" />Demo</Link>
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

        <section id="contacto" className="py-20">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <SectionBadge tone="indigo">Contacto</SectionBadge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Hablemos de tu proyecto</h2>
              <p className="mx-auto max-w-[760px] text-muted-foreground md:text-lg">Estoy disponible para colaboraciones y nuevas oportunidades.</p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className={`space-y-5 rounded-xl border p-6 ${getTone("indigo").card}`}>
                <h3 className="text-xl font-bold">Informacion de contacto</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-cyan-600 dark:text-cyan-300" /><span className="break-all">gustavo.altaner@gmail.com</span></div>
                  <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-emerald-600 dark:text-emerald-300" /><span>+56 9 4517 0710</span></div>
                  <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-amber-600 dark:text-amber-300" /><span>Puerto Montt, Chile</span></div>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" className="border-zinc-300/80 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800/60" asChild>
                    <Link href="https://github.com/GbmaK" target="_blank" rel="noreferrer"><Github className="h-4 w-4 text-zinc-700 dark:text-zinc-200" /></Link>
                  </Button>
                  <Button variant="outline" size="icon" className="border-cyan-300/80 hover:bg-cyan-50 dark:border-cyan-800 dark:hover:bg-cyan-900/30" asChild>
                    <Link href="https://www.linkedin.com/in/gustavo-mardones-499b2425a" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4 text-cyan-700 dark:text-cyan-300" /></Link>
                  </Button>
                  <Button variant="outline" size="icon" className="border-indigo-300/80 hover:bg-indigo-50 dark:border-indigo-800 dark:hover:bg-indigo-900/30" asChild>
                    <Link href="mailto:gustavo.altaner@gmail.com"><Mail className="h-4 w-4 text-indigo-700 dark:text-indigo-300" /></Link>
                  </Button>
                </div>
              </div>

              <Card className={getTone("cyan").card}>
                <CardHeader>
                  <CardTitle className={`flex items-center gap-2 ${getTone("cyan").icon}`}><Target className="h-5 w-5" />Enviame un mensaje</CardTitle>
                  <CardDescription>Completa el formulario y te respondere lo antes posible.</CardDescription>
                </CardHeader>
                <CardContent><ContactForm /></CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 md:h-24 md:flex-row md:px-6">
          <div className="flex flex-col items-center gap-2 text-center md:flex-row md:text-left">
            <Code className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
            <p className="text-sm text-muted-foreground">© 2026 Gustavo Mardones. Built with Next.js.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hover:bg-zinc-100 dark:hover:bg-zinc-800/60" asChild>
              <Link href="https://github.com/GbmaK" target="_blank" rel="noreferrer"><Github className="h-4 w-4 text-zinc-700 dark:text-zinc-200" /></Link>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-cyan-50 dark:hover:bg-cyan-900/30" asChild>
              <Link href="https://www.linkedin.com/in/gustavo-mardones-499b2425a" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4 text-cyan-700 dark:text-cyan-300" /></Link>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-indigo-50 dark:hover:bg-indigo-900/30" asChild>
              <Link href="mailto:gustavo.altaner@gmail.com"><Mail className="h-4 w-4 text-indigo-700 dark:text-indigo-300" /></Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
