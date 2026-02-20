import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Smartphone,
  GitBranch,
  Briefcase,
  MessageSquare,
  Download,
  MapPin,
  Phone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="relative mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-2 px-4 md:px-6">
          <Link href="#" className="flex min-w-0 items-center space-x-2">
            <Code className="h-6 w-6 shrink-0" />
            <span className="truncate font-bold text-sm sm:text-base">Gustavo Mardones</span>
          </Link>
          <div className="flex items-center gap-2">
            <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
              <Link href="#inicio" className="transition-colors hover:text-cyan-700 dark:hover:text-cyan-300">
                Inicio
              </Link>
              <Link href="#sobre-mi" className="transition-colors hover:text-indigo-700 dark:hover:text-indigo-300">
                Sobre mí
              </Link>
              <Link href="#experiencia" className="transition-colors hover:text-amber-700 dark:hover:text-amber-300">
                Experiencia
              </Link>
              <Link href="#educacion" className="transition-colors hover:text-indigo-700 dark:hover:text-indigo-300">
                Educación
              </Link>
              <Link href="#habilidades" className="transition-colors hover:text-emerald-700 dark:hover:text-emerald-300">
                Habilidades
              </Link>
              <Link href="#proyectos" className="transition-colors hover:text-cyan-700 dark:hover:text-cyan-300">
                Proyectos
              </Link>
              <Link href="#contacto" className="transition-colors hover:text-indigo-700 dark:hover:text-indigo-300">
                Contacto
              </Link>
            </nav>
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="py-20 md:py-32">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg border border-cyan-200 bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-800 dark:border-cyan-800/70 dark:bg-cyan-900/35 dark:text-cyan-200">
                Desarrollador de Software / Analista TI
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Hola, soy <span className="text-primary">Gustavo Mardones</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Desarrollador de software con experiencia en automatización de procesos, análisis de datos y
                plataformas de gestión de información. Enfocado en trazabilidad, control y visualización de datos para
                apoyar la toma de decisiones.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-amber-600 dark:text-amber-300" />
                  Puerto Montt, Chile
                </span>
                <span className="inline-flex items-center gap-2 break-all">
                  <Mail className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
                  gustavo.altaner@gmail.com
                </span>
                <span className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4 text-emerald-600 dark:text-emerald-300" />
                  +56 9 4517 0710
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white hover:from-indigo-700 hover:to-cyan-700 dark:from-indigo-400 dark:to-cyan-400 dark:text-slate-950 dark:hover:from-indigo-300 dark:hover:to-cyan-300"
                asChild
              >
                <Link href="#experiencia">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Ver Experiencia
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-cyan-300 text-cyan-700 hover:bg-cyan-50 dark:border-cyan-800 dark:text-cyan-200 dark:hover:bg-cyan-900/30"
                asChild
              >
                <Link href="#contacto">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contactar
                </Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <Button variant="ghost" size="icon" className="hover:bg-zinc-100 dark:hover:bg-zinc-800/60" asChild>
                <Link href="https://github.com/GbmaK" target="_blank">
                  <Github className="h-5 w-5 text-zinc-700 dark:text-zinc-200" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-cyan-50 dark:hover:bg-cyan-900/30" asChild>
                <Link href="https://www.linkedin.com/in/gustavo-mardones-499b2425a" target="_blank">
                  <Linkedin className="h-5 w-5 text-cyan-700 dark:text-cyan-300" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-cyan-50 dark:hover:bg-cyan-900/30" asChild>
                <Link href="mailto:gustavo.altaner@gmail.com">
                  <Mail className="h-5 w-5 text-cyan-700 dark:text-cyan-300" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 bg-muted/50">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-4 self-center text-center lg:text-left">
              <div className="mx-auto inline-block rounded-lg border border-indigo-200 bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800 dark:border-indigo-800/70 dark:bg-indigo-900/35 dark:text-indigo-200 lg:mx-0">Sobre mí</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Tecnología aplicada a procesos y datos
              </h2>
              <p className="text-muted-foreground md:text-lg lg:max-w-xl mx-auto lg:mx-0">
                Desarrollador de software con experiencia en el diseño e implementación de sistemas digitales
                orientados a la automatización de procesos, análisis de datos y optimización operativa. Especializado
                en el desarrollo de aplicaciones web, APIs y plataformas de gestión de información, con foco en
                trazabilidad, control y visualización de datos para la toma de decisiones.
              </p>
              <p className="text-muted-foreground md:text-lg lg:max-w-xl mx-auto lg:mx-0">
                He participado en proyectos tecnológicos en Chile y Canadá, trabajando en equipos colaborativos y con
                altos estándares técnicos. Perfil adaptable a contextos industriales y productivos, con interés en
                aportar a la transformación digital del sector acuícola.
              </p>
              <div className="flex flex-wrap justify-center gap-2 lg:justify-start [&>*]:border-indigo-200 [&>*]:bg-indigo-100 [&>*]:text-indigo-800 [&>*]:dark:border-indigo-800/60 [&>*]:dark:bg-indigo-900/40 [&>*]:dark:text-indigo-200">
                <Badge variant="secondary">Full-Stack</Badge>
                <Badge variant="secondary">Automatización</Badge>
                <Badge variant="secondary">Integración de APIs</Badge>
                <Badge variant="secondary">Trazabilidad</Badge>
                <Badge variant="secondary">Análisis de datos</Badge>
                <Badge variant="secondary">Trabajo colaborativo</Badge>
              </div>
              <div className="flex justify-center lg:justify-start">
                <Button className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white hover:from-indigo-700 hover:to-cyan-700 dark:from-indigo-400 dark:to-cyan-400 dark:text-slate-950 dark:hover:from-indigo-300 dark:hover:to-cyan-300" asChild>
                  <a href="Gustavo Mardones Resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Descargar CV
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-sm border-indigo-200/70 bg-gradient-to-br from-indigo-50/70 via-background to-background dark:border-indigo-900/60 dark:from-indigo-950/20">
                <CardHeader>
                  <CardTitle className="text-indigo-700 dark:text-indigo-200">Perfil rápido</CardTitle>
                  <CardDescription>Disponible para nuevos desafíos</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-indigo-200 via-cyan-100 to-background text-3xl font-bold text-indigo-900 dark:from-indigo-900 dark:via-cyan-900/70 dark:to-background dark:text-cyan-100">
                      GM
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold">Gustavo Mardones</p>
                      <p className="text-sm text-muted-foreground">Desarrollador de Software / Analista TI</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="h-4 w-4 text-amber-600 dark:text-amber-300" />
                      <span>Puerto Montt, Chile</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
                      <span className="break-all">gustavo.altaner@gmail.com</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4 text-emerald-600 dark:text-emerald-300" />
                      <span>+56 9 4517 0710</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="inline-block rounded-lg border border-amber-200 bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800 dark:border-amber-800/70 dark:bg-amber-900/35 dark:text-amber-200">Experiencia</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Experiencia laboral</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Experiencia en Chile y Canadá, colaborando en equipos técnicos y proyectos orientados a resultados.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-2 lg:gap-8">
            <Card className="border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-background to-background dark:border-indigo-900/70 dark:from-indigo-950/20">
              <CardHeader>
                <CardTitle className="text-indigo-700 dark:text-indigo-200">Desarrollador Full-Stack</CardTitle>
                <CardDescription>Wyletable (Startup) · Remoto | Oct 2025 – Ene 2026</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                  <li>Desarrollo integral de un agente virtual inteligente para gestión operativa y administrativa.</li>
                  <li>Implementación de arquitectura full-stack con Next.js y Supabase.</li>
                  <li>Integración de Google Gemini API para automatización de procesos y análisis de información.</li>
                  <li>Gestión de citas, procesamiento de documentos y control de usuarios.</li>
                  <li>Integración de llamadas automáticas vía Twilio y panel de analítica de uso.</li>
                  <li>Autenticación, control de roles y rutas protegidas.</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2 [&>*]:border-indigo-200 [&>*]:bg-indigo-100 [&>*]:text-indigo-800 [&>*]:dark:border-indigo-800/60 [&>*]:dark:bg-indigo-900/40 [&>*]:dark:text-indigo-200">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Supabase</Badge>
                  <Badge variant="outline">Gemini API</Badge>
                  <Badge variant="outline">Twilio</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-background to-background dark:border-emerald-900/70 dark:from-emerald-950/20">
              <CardHeader>
                <CardTitle className="text-emerald-700 dark:text-emerald-200">Desarrollador de Software</CardTitle>
                <CardDescription>Plexxis Software · Victoria, BC, Canadá | Ago 2025 – Oct 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                  <li>Desarrollo de funcionalidades para plataforma SaaS empresarial del sector construcción.</li>
                  <li>Mejoras en frontend con React y optimización de backend y endpoints.</li>
                  <li>Participación en metodologías ágiles, reuniones técnicas y code reviews.</li>
                  <li>Trabajo en equipo internacional con comunicación técnica en inglés.</li>
                  <li>Enfoque en rendimiento, mantenibilidad y calidad del software.</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2 [&>*]:border-emerald-200 [&>*]:bg-emerald-100 [&>*]:text-emerald-800 [&>*]:dark:border-emerald-800/60 [&>*]:dark:bg-emerald-900/40 [&>*]:dark:text-emerald-200">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">SaaS</Badge>
                  <Badge variant="outline">Agile</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-background to-background dark:border-amber-900/70 dark:from-amber-950/20 lg:col-span-2 lg:mx-auto lg:max-w-3xl">
              <CardHeader>
                <CardTitle className="text-amber-700 dark:text-amber-200">Pasante de Desarrollo de Software</CardTitle>
                <CardDescription>3UP Consulting Group SAC · Puerto Montt, Chile | Feb 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                  <li>Desarrollo de herramienta para captura de imágenes con enmascaramiento SVG.</li>
                  <li>Integración de base de datos MySQL para gestión de información y metadatos.</li>
                  <li>Creación de scripts en Python para procesamiento de datos hiperespectrales.</li>
                  <li>Documentación técnica y control de versiones con Git en entorno Linux.</li>
                  <li>Aplicación en análisis visual y control de calidad industrial.</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2 [&>*]:border-amber-200 [&>*]:bg-amber-100 [&>*]:text-amber-800 [&>*]:dark:border-amber-800/60 [&>*]:dark:bg-amber-900/40 [&>*]:dark:text-amber-200">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">MySQL</Badge>
                  <Badge variant="outline">Linux</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="educacion" className="py-20 bg-muted/50">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="inline-block rounded-lg border border-indigo-200 bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800 dark:border-indigo-800/70 dark:bg-indigo-900/35 dark:text-indigo-200">
              Educación
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Formación e idiomas</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Base técnica sólida y comunicación efectiva en entornos profesionales.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 py-12 md:grid-cols-2">
            <Card className="border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-background to-background dark:border-indigo-900/70 dark:from-indigo-950/20">
              <CardHeader>
                <CardTitle className="text-indigo-700 dark:text-indigo-200">Técnico Analista Programador</CardTitle>
                <CardDescription>Institución de Educación Superior | 2023 – 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Formación técnica orientada al desarrollo de software, análisis de sistemas y bases de datos.
                </p>
              </CardContent>
            </Card>
            <Card className="border-cyan-200/80 bg-gradient-to-br from-cyan-50/80 via-background to-background dark:border-cyan-900/70 dark:from-cyan-950/20">
              <CardHeader>
                <CardTitle className="text-cyan-700 dark:text-cyan-200">Idiomas</CardTitle>
                <CardDescription>Colaboración en equipos internacionales</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 [&>*]:border-cyan-200 [&>*]:bg-cyan-100 [&>*]:text-cyan-800 [&>*]:dark:border-cyan-800/60 [&>*]:dark:bg-cyan-900/40 [&>*]:dark:text-cyan-200">
                  <Badge>Español: Nativo</Badge>
                  <Badge>Inglés: Avanzado</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="inline-block rounded-lg border border-emerald-200 bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800 dark:border-emerald-800/70 dark:bg-emerald-900/40 dark:text-emerald-200">
              Habilidades
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Tecnologías que domino</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Tecnologías, servicios y enfoques con los que desarrollo soluciones web y de automatización.
            </p>
          </div>
          <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-6 py-12">
            <Card className="w-full max-w-sm border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-background to-background dark:border-indigo-900/70 dark:from-indigo-950/20">
              <CardHeader>
                <Code className="h-10 w-10 text-indigo-600 dark:text-indigo-300" />
                <CardTitle className="text-indigo-700 dark:text-indigo-200">Lenguajes & Frameworks</CardTitle>
                <CardDescription>Desarrollo web y backend moderno</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 [&>*]:border-indigo-200 [&>*]:bg-indigo-100 [&>*]:text-indigo-800 [&>*]:dark:border-indigo-800/60 [&>*]:dark:bg-indigo-900/40 [&>*]:dark:text-indigo-200">
                  <Badge>JavaScript</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Python</Badge>
                  <Badge>Django</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full max-w-sm border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-background to-background dark:border-emerald-900/70 dark:from-emerald-950/20">
              <CardHeader>
                <Database className="h-10 w-10 text-emerald-600 dark:text-emerald-300" />
                <CardTitle className="text-emerald-700 dark:text-emerald-200">Bases de Datos</CardTitle>
                <CardDescription>Modelado y gestión de datos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 [&>*]:border-emerald-200 [&>*]:bg-emerald-100 [&>*]:text-emerald-800 [&>*]:dark:border-emerald-800/60 [&>*]:dark:bg-emerald-900/40 [&>*]:dark:text-emerald-200">
                  <Badge>PostgreSQL</Badge>
                  <Badge>MySQL</Badge>
                  <Badge>Supabase</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full max-w-sm border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-background to-background dark:border-amber-900/70 dark:from-amber-950/20">
              <CardHeader>
                <Smartphone className="h-10 w-10 text-amber-600 dark:text-amber-300" />
                <CardTitle className="text-amber-700 dark:text-amber-200">APIs & Servicios</CardTitle>
                <CardDescription>Integraciones y automatización</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 [&>*]:border-amber-200 [&>*]:bg-amber-100 [&>*]:text-amber-800 [&>*]:dark:border-amber-800/60 [&>*]:dark:bg-amber-900/40 [&>*]:dark:text-amber-200">
                  <Badge>OpenAI API</Badge>
                  <Badge>Google Gemini API</Badge>
                  <Badge>Twilio API</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full max-w-sm border-cyan-200/80 bg-gradient-to-br from-cyan-50/80 via-background to-background dark:border-cyan-900/70 dark:from-cyan-950/20">
              <CardHeader>
                <GitBranch className="h-10 w-10 text-cyan-600 dark:text-cyan-300" />
                <CardTitle className="text-cyan-700 dark:text-cyan-200">Herramientas & Entornos</CardTitle>
                <CardDescription>Flujo de trabajo y diseño</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 [&>*]:border-cyan-200 [&>*]:bg-cyan-100 [&>*]:text-cyan-800 [&>*]:dark:border-cyan-800/60 [&>*]:dark:bg-cyan-900/40 [&>*]:dark:text-cyan-200">
                  <Badge>Git</Badge>
                  <Badge>Linux</Badge>
                  <Badge>Figma</Badge>
                  <Badge>Ngrok</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full max-w-sm border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-background to-background dark:border-indigo-900/70 dark:from-indigo-950/20">
              <CardHeader>
                <Briefcase className="h-10 w-10 text-indigo-600 dark:text-indigo-300" />
                <CardTitle className="text-indigo-700 dark:text-indigo-200">Especialidades</CardTitle>
                <CardDescription>Enfoques para entregar valor</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 [&>*]:border-indigo-200 [&>*]:bg-indigo-100 [&>*]:text-indigo-800 [&>*]:dark:border-indigo-800/60 [&>*]:dark:bg-indigo-900/40 [&>*]:dark:text-indigo-200">
                  <Badge>Full-Stack</Badge>
                  <Badge>Automatización</Badge>
                  <Badge>Integración de APIs</Badge>
                  <Badge>Dashboards</Badge>
                  <Badge>Análisis de datos</Badge>
                  <Badge>MVPs escalables</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 bg-muted/50">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="inline-block rounded-lg border border-cyan-200 bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-800 dark:border-cyan-800/70 dark:bg-cyan-900/35 dark:text-cyan-200">
              Proyectos
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Mis trabajos recientes</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Aquí puedes ver algunos de los proyectos en los que he trabajado recientemente.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Card className="overflow-hidden border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-background to-background dark:border-indigo-900/70 dark:from-indigo-950/20">
              <div className="aspect-video relative">
                <Image src="/i3spectra.png" alt="Proyecto 1" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Imágenes hiperespectrales</CardTitle>
                <CardDescription>
                  Desarrollo de aplicación web con integración de cámaras hiperespectrales, comunicación
                  hardware-software y trabajo colaborativo remoto en un proyecto confidencial.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2 [&>*]:border-indigo-200 [&>*]:bg-indigo-100 [&>*]:text-indigo-800 [&>*]:dark:border-indigo-800/60 [&>*]:dark:bg-indigo-900/40 [&>*]:dark:text-indigo-200">
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">FastAPI</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">CSS</Badge>
                  <Badge variant="outline">NumPy</Badge>
                  <Badge variant="outline">H5</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-indigo-700 text-white hover:bg-indigo-800 dark:bg-indigo-300 dark:text-indigo-950 dark:hover:bg-indigo-200" asChild>
                    <Link href="https://github.com/GbmaK/proyecto-espectrometria" target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-cyan-200/80 bg-gradient-to-br from-cyan-50/80 via-background to-background dark:border-cyan-900/70 dark:from-cyan-950/20">
              <div className="aspect-video relative">
                <Image src="/portadaMagavi.png" alt="Proyecto 2" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Magavi Project</CardTitle>
                <CardDescription>
                  Landing page en Next.js con dos modales de chat integrados, cada uno conectado a la OpenAI API con
                  un contexto personalizado.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2 [&>*]:border-cyan-200 [&>*]:bg-cyan-100 [&>*]:text-cyan-800 [&>*]:dark:border-cyan-800/60 [&>*]:dark:bg-cyan-900/40 [&>*]:dark:text-cyan-200">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">OpenAI API</Badge>
                  <Badge variant="outline">Figma</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-cyan-700 text-white hover:bg-cyan-800 dark:bg-cyan-300 dark:text-cyan-950 dark:hover:bg-cyan-200" asChild>
                    <Link href="https://github.com/GbmaK/Magavi-Project" target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-background to-background dark:border-amber-900/70 dark:from-amber-950/20">
              <div className="aspect-video relative">
                <Image src="/gastos.png" alt="Proyecto 3" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Gastos App</CardTitle>
                <CardDescription>
                  Aplicación web desarrollada con Django para la gestión de presupuestos y gastos, con gráficas interactivas y control por fechas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2 [&>*]:border-amber-200 [&>*]:bg-amber-100 [&>*]:text-amber-800 [&>*]:dark:border-amber-800/60 [&>*]:dark:bg-amber-900/40 [&>*]:dark:text-amber-200">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Django</Badge>
                  <Badge variant="outline">MySQL</Badge>
                  <Badge variant="outline">CSS3</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-amber-700 text-white hover:bg-amber-800 dark:bg-amber-300 dark:text-amber-950 dark:hover:bg-amber-200" asChild>
                    <Link href="https://github.com/GbmaK/TDDS" target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-background to-background dark:border-emerald-900/70 dark:from-emerald-950/20">
              <div className="aspect-video relative">
                <Image src="/gato.png" alt="Proyecto 4" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Juego Gato</CardTitle>
                <CardDescription>
                  Juego de Gato (Tic-Tac-Toe) desarrollado con React, con lógica de turnos y verificación de ganador.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2 [&>*]:border-emerald-200 [&>*]:bg-emerald-100 [&>*]:text-emerald-800 [&>*]:dark:border-emerald-800/60 [&>*]:dark:bg-emerald-900/40 [&>*]:dark:text-emerald-200">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">Canvas</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-emerald-700 text-white hover:bg-emerald-800 dark:bg-emerald-300 dark:text-emerald-950 dark:hover:bg-emerald-200" asChild>
                    <Link href="https://github.com/GbmaK/Gato" target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-800 dark:text-emerald-200 dark:hover:bg-emerald-900/30" asChild>
                    <Link href="https://gato-rust.vercel.app/" target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  </Button> 
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="inline-block rounded-lg border border-indigo-200 bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800 dark:border-indigo-800/70 dark:bg-indigo-900/35 dark:text-indigo-200">
              Contacto
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">¡Trabajemos juntos!</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Abierto a nuevas oportunidades y colaboraciones en desarrollo web, automatización e integración de APIs.
              Si tienes un proyecto en mente, conversemos.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4 rounded-xl border border-indigo-200/70 bg-gradient-to-br from-indigo-50/70 via-background to-background p-5 dark:border-indigo-900/60 dark:from-indigo-950/20">
              <h3 className="text-xl font-bold">Información de contacto</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
                  <span className="break-all">gustavo.altaner@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-emerald-600 dark:text-emerald-300" />
                  <span>+56 9 4517 0710</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-amber-600 dark:text-amber-300" />
                  <span>Puerto Montt, Chile</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="border-zinc-300/80 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800/60" asChild>
                  <Link href="https://github.com/GbmaK" target="_blank">
                    <Github className="h-4 w-4 text-zinc-700 dark:text-zinc-200" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="border-cyan-300/80 hover:bg-cyan-50 dark:border-cyan-800 dark:hover:bg-cyan-900/30" asChild>
                  <Link href="https://www.linkedin.com/in/gustavo-mardones-499b2425a" target="_blank">
                    <Linkedin className="h-4 w-4 text-cyan-700 dark:text-cyan-300" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="border-cyan-300/80 hover:bg-cyan-50 dark:border-cyan-800 dark:hover:bg-cyan-900/30" asChild>
                  <Link href="mailto:gustavo.altaner@gmail.com">
                    <Mail className="h-4 w-4 text-cyan-700 dark:text-cyan-300" />
                  </Link>
                </Button>
              </div>
            </div>
            <Card className="border-cyan-200/70 bg-gradient-to-br from-cyan-50/60 via-background to-background dark:border-cyan-900/60 dark:from-cyan-950/20">
              <CardHeader>
                <CardTitle>Envíame un mensaje</CardTitle>
                <CardDescription>Completa el formulario y te responderé lo antes posible.</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 md:h-24 md:flex-row md:px-6">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Code className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2026 Gustavo Mardones. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-zinc-100 dark:hover:bg-zinc-800/60" asChild>
              <Link href="https://github.com/GbmaK" target="_blank">
                <Github className="h-4 w-4 text-zinc-700 dark:text-zinc-200" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-cyan-50 dark:hover:bg-cyan-900/30" asChild>
              <Link href="https://www.linkedin.com/in/gustavo-mardones-499b2425a" target="_blank">
                <Linkedin className="h-4 w-4 text-cyan-700 dark:text-cyan-300" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-cyan-50 dark:hover:bg-cyan-900/30" asChild>
              <Link href="mailto:gustavo.altaner@gmail.com">
                <Mail className="h-4 w-4 text-cyan-700 dark:text-cyan-300" />
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}



