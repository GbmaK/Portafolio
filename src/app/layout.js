import { JetBrains_Mono, Manrope } from "next/font/google"

import { LanguageProvider } from "@/components/language-provider"
import { SmoothScrollManager } from "@/components/smooth-scroll-manager"
import { portfolioProfile } from "@/content/portfolio-content"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

function getSiteUrl() {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (!envUrl) {
    return new URL("https://portafolio-git-master-gbmaks-projects.vercel.app")
  }

  return new URL(envUrl.startsWith("http") ? envUrl : `https://${envUrl}`)
}

const siteUrl = getSiteUrl()
const socialLinks = [portfolioProfile.githubUrl, portfolioProfile.linkedinUrl]

export const metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${portfolioProfile.name} | Full-Stack Developer`,
    template: `%s | ${portfolioProfile.name}`,
  },
  description:
    "Portafolio de Gustavo Mardones, desarrollador full-stack enfocado en React, Next.js, Python, automatización e integraciones con impacto real.",
  applicationName: "Portafolio Gustavo Mardones",
  authors: [{ name: portfolioProfile.name }],
  creator: portfolioProfile.name,
  keywords: [
    "Gustavo Mardones",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Python",
    "Automatización",
    "Integración de APIs",
    "Portafolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${portfolioProfile.name} | Full-Stack Developer`,
    description:
      "Desarrollo de software orientado a automatización de procesos, productos web mantenibles e integraciones útiles para negocio.",
    url: "/",
    siteName: "Portafolio Gustavo Mardones",
    locale: "es_CL",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioProfile.name} | Full-Stack Developer`,
    description: "Experiencia, proyectos y contacto directo para colaboraciones técnicas y producto.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolioProfile.name,
  jobTitle: "Full-Stack Developer",
  url: siteUrl.toString(),
  email: `mailto:${portfolioProfile.email}`,
  telephone: portfolioProfile.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Puerto Montt",
    addressCountry: "CL",
  },
  sameAs: socialLinks,
  knowsLanguage: ["Spanish", "English"],
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${manrope.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <LanguageProvider>{children}</LanguageProvider>
        <SmoothScrollManager />
      </body>
    </html>
  )
}
