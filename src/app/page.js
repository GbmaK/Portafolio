import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="#" className="mr-6 flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="font-bold">Gustavo Mardones</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#inicio" className="hover:text-foreground/80">
                Inicio
              </Link>
              <Link href="#sobre-mi" className="hover:text-foreground/80">
                Sobre mí
              </Link>
              <Link href="#experiencia" className="hover:text-foreground/80">
                Experiencia
              </Link>
              <Link href="#educacion" className="hover:text-foreground/80">
                Educación
              </Link>
              <Link href="#habilidades" className="hover:text-foreground/80">
                Habilidades
              </Link>
              <Link href="#proyectos" className="hover:text-foreground/80">
                Proyectos
              </Link>
              <Link href="#contacto" className="hover:text-foreground/80">
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
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
                  <MapPin className="h-4 w-4" />
                  Puerto Montt, Chile
                </span>
                <span className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  gustavo.altaner@gmail.com
                </span>
                <span className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +56 9 4517 0710
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="#experiencia">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Ver Experiencia
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contacto">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contactar
                </Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/GbmaK" target="_blank">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/gustavo-mardones-499b2425a" target="_blank">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:gustavo.altaner@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-4 self-center text-center lg:text-left">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mx-auto lg:mx-0">Sobre mí</div>
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
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                <Badge variant="secondary">Full-Stack</Badge>
                <Badge variant="secondary">Automatización</Badge>
                <Badge variant="secondary">Integración de APIs</Badge>
                <Badge variant="secondary">Trazabilidad</Badge>
                <Badge variant="secondary">Análisis de datos</Badge>
                <Badge variant="secondary">Trabajo colaborativo</Badge>
              </div>
              <div className="flex justify-center lg:justify-start">
                <Button asChild>
                  <a href="Gustavo Mardones Resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Descargar CV
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-sm">
                <CardHeader>
                  <CardTitle>Perfil rápido</CardTitle>
                  <CardDescription>Disponible para nuevos desafíos</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 via-muted to-background text-3xl font-bold text-foreground">
                      GM
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold">Gustavo Mardones</p>
                      <p className="text-sm text-muted-foreground">Desarrollador de Software / Analista TI</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Puerto Montt, Chile</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>gustavo.altaner@gmail.com</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
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
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Experiencia</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Experiencia laboral</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Experiencia en Chile y Canadá, colaborando en equipos técnicos y proyectos orientados a resultados.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-2 lg:gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Desarrollador Full-Stack</CardTitle>
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
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Supabase</Badge>
                  <Badge variant="outline">Gemini API</Badge>
                  <Badge variant="outline">Twilio</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Desarrollador de Software</CardTitle>
                <CardDescription>Plexxis Software · Victoria, BC, Canadá | Nov 2024 – Oct 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                  <li>Desarrollo de funcionalidades para plataforma SaaS empresarial del sector construcción.</li>
                  <li>Mejoras en frontend con React y optimización de backend y endpoints.</li>
                  <li>Participación en metodologías ágiles, reuniones técnicas y code reviews.</li>
                  <li>Trabajo en equipo internacional con comunicación técnica en inglés.</li>
                  <li>Enfoque en rendimiento, mantenibilidad y calidad del software.</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">SaaS</Badge>
                  <Badge variant="outline">Agile</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="lg:col-span-2 lg:mx-auto lg:max-w-3xl">
              <CardHeader>
                <CardTitle>Pasante de Desarrollo de Software</CardTitle>
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
                <div className="mt-4 flex flex-wrap gap-2">
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
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Educación</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Formación e idiomas</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Base técnica sólida y comunicación efectiva en entornos profesionales.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 py-12 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Técnico Analista Programador</CardTitle>
                <CardDescription>Institución de Educación Superior | 2023 – 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Formación técnica orientada al desarrollo de software, análisis de sistemas y bases de datos.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Idiomas</CardTitle>
                <CardDescription>Colaboración en equipos internacionales</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
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
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Habilidades</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Tecnologías que domino</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Tecnologías, servicios y enfoques con los que desarrollo soluciones web y de automatización.
            </p>
          </div>
          <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-6 py-12">
            <Card className="w-full max-w-sm">
              <CardHeader>
                <Code className="h-10 w-10 text-primary" />
                <CardTitle>Lenguajes & Frameworks</CardTitle>
                <CardDescription>Desarrollo web y backend moderno</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>JavaScript</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Python</Badge>
                  <Badge>Django</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full max-w-sm">
              <CardHeader>
                <Database className="h-10 w-10 text-primary" />
                <CardTitle>Bases de Datos</CardTitle>
                <CardDescription>Modelado y gestión de datos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>PostgreSQL</Badge>
                  <Badge>MySQL</Badge>
                  <Badge>Supabase</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full max-w-sm">
              <CardHeader>
                <Smartphone className="h-10 w-10 text-primary" />
                <CardTitle>APIs & Servicios</CardTitle>
                <CardDescription>Integraciones y automatización</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>OpenAI API</Badge>
                  <Badge>Google Gemini API</Badge>
                  <Badge>Twilio API</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full max-w-sm">
              <CardHeader>
                <GitBranch className="h-10 w-10 text-primary" />
                <CardTitle>Herramientas & Entornos</CardTitle>
                <CardDescription>Flujo de trabajo y diseño</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Git</Badge>
                  <Badge>Linux</Badge>
                  <Badge>Figma</Badge>
                  <Badge>Ngrok</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full max-w-sm">
              <CardHeader>
                <Briefcase className="h-10 w-10 text-primary" />
                <CardTitle>Especialidades</CardTitle>
                <CardDescription>Enfoques para entregar valor</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
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
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Proyectos</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Mis trabajos recientes</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Aquí puedes ver algunos de los proyectos en los que he trabajado recientemente.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Card className="overflow-hidden">
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
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">FastAPI</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">CSS</Badge>
                  <Badge variant="outline">NumPy</Badge>
                  <Badge variant="outline">H5</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link href="https://github.com/GbmaK/proyecto-espectrometria" target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
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
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">OpenAI API</Badge>
                  <Badge variant="outline">Figma</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link href="https://github.com/GbmaK/Magavi-Project" target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
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
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Django</Badge>
                  <Badge variant="outline">MySQL</Badge>
                  <Badge variant="outline">CSS3</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link href="https://github.com/GbmaK/TDDS" target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
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
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">Canvas</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link href="https://github.com/GbmaK/Gato" target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
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
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contacto</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">¡Trabajemos juntos!</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Abierto a nuevas oportunidades y colaboraciones en desarrollo web, automatización e integración de APIs.
              Si tienes un proyecto en mente, conversemos.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Información de contacto</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>gustavo.altaner@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+56 9 4517 0710</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Puerto Montt, Chile</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://github.com/GbmaK" target="_blank">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://www.linkedin.com/in/gustavo-mardones-499b2425a" target="_blank">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="mailto:gustavo.altaner@gmail.com">
                    <Mail className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Envíame un mensaje</CardTitle>
                <CardDescription>Completa el formulario y te responderé lo antes posible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre</Label>
                      <Input id="nombre" placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="asunto">Asunto</Label>
                    <Input id="asunto" placeholder="Asunto del mensaje" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje</Label>
                    <Textarea id="mensaje" placeholder="Escribe tu mensaje aquí..." className="min-h-[100px]" />
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Code className="h-6 w-6" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2026 Gustavo Mardones. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/GbmaK" target="_blank">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/gustavo-mardones-499b2425a" target="_blank">
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:gustavo.altaner@gmail.com">
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
