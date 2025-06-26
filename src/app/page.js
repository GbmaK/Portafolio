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
  Globe,
  Smartphone,
  Server,
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
              <span className="font-bold">Mi Portafolio</span>
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
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Desarrollador Junior</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Hola, soy <span className="text-primary">Gustavo</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Desarrollador de software apasionado por crear soluciones innovadoras y experiencias digitales
                excepcionales. Especializado en desarrollo web moderno y tecnologías emergentes.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="#proyectos">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Ver Proyectos
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
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-4 self-center">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Sobre mí</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Desarrollador apasionado por la tecnología
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Soy un desarrollador junior con una gran pasión por aprender y crear. Me especializo en desarrollo web
                con tecnologías modernas como React, Next.js y Node.js. Siempre estoy buscando nuevos desafíos y
                oportunidades para crecer profesionalmente.
              </p>
              <p className="text-muted-foreground md:text-lg">
                Mi objetivo es contribuir a proyectos innovadores mientras continúo desarrollando mis habilidades
                técnicas y colaborativas. Me encanta trabajar en equipo y estoy siempre dispuesto a aprender de
                desarrolladores más experimentados.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Autodidacta</Badge>
                <Badge variant="secondary">Trabajo en equipo</Badge>
                <Badge variant="secondary">Resolución de problemas</Badge>
                <Badge variant="secondary">Aprendizaje continuo</Badge>
              </div>
              <Button asChild>
                <a href="Gustavo Mardones Resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Descargar CV
                </a>
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Foto de perfil"
                  width={400}
                  height={400}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
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
              Estas son las principales tecnologías y herramientas con las que trabajo día a día.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card>
              <CardHeader>
                <Globe className="h-10 w-10 text-primary" />
                <CardTitle>Frontend</CardTitle>
                <CardDescription>Desarrollo de interfaces modernas y responsivas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>HTML5</Badge>
                  <Badge>CSS3</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Bootstrap</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Server className="h-10 w-10 text-primary" />
                <CardTitle>Backend</CardTitle>
                <CardDescription>Desarrollo de APIs y servicios del lado del servidor</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Node.js</Badge>
                  <Badge>Python</Badge>
                  <Badge>FastAPI</Badge>
                  <Badge>REST APIs</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Database className="h-10 w-10 text-primary" />
                <CardTitle>Base de Datos</CardTitle>
                <CardDescription>Gestión y diseño de bases de datos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>MySQL</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Firebase</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <GitBranch className="h-10 w-10 text-primary" />
                <CardTitle>Herramientas</CardTitle>
                <CardDescription>Control de versiones y herramientas de desarrollo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Git</Badge>
                  <Badge>GitHub</Badge>
                  <Badge>VS Code</Badge>
                  <Badge>Vercel</Badge>
                  <Badge>Figma</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Code className="h-10 w-10 text-primary" />
                <CardTitle>Otros</CardTitle>
                <CardDescription>Metodologías y conceptos adicionales</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Agile</Badge>
                  <Badge>Scrum</Badge>
                  <Badge>Responsive Design</Badge>
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
                <CardTitle>Imagenes Hyperspectral</CardTitle>
                <CardDescription>
                  Desarrollo de aplicación web con integración de cámaras hiperespectrales, comunicación hardware-software y trabajo colaborativo remoto en un proyecto confidencial.                
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
                  Landing page en Next.js con dos modales de chat integrados, cada uno conectado a la API de ChatGPT con un contexto personalizado.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">ChatGPT API</Badge>
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
              Estoy siempre abierto a nuevas oportunidades y colaboraciones. No dudes en contactarme si tienes algún
              proyecto en mente.
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
                  <span>+1 (778) 678-5151</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Victoria, Canada</span>
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
              © 2024 Gustavo Mardones. Todos los derechos reservados.
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
