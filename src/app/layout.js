import { JetBrains_Mono, Manrope } from "next/font/google"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata = {
  metadataBase: new URL("https://portafolio-git-master-gbmaks-projects.vercel.app"),
  title: {
    default: "Gustavo Mardones | Software Developer",
    template: "%s | Gustavo Mardones",
  },
  description:
    "Portafolio de Gustavo Mardones, desarrollador de software enfocado en automatizacion, integracion de APIs y productos web con impacto real.",
  keywords: [
    "Gustavo Mardones",
    "Software Developer",
    "Next.js",
    "React",
    "Automatizacion",
    "Portafolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gustavo Mardones | Software Developer",
    description:
      "Desarrollo de software orientado a automatizacion de procesos, trazabilidad de datos y entrega de productos web mantenibles.",
    url: "/",
    siteName: "Portafolio Gustavo Mardones",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gustavo Mardones | Software Developer",
    description:
      "Portafolio profesional con experiencia, proyectos y contacto directo para colaboraciones.",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} ${jetbrainsMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
