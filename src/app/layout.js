import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mi Portafolio - Desarrollador Junior",
  description: "Portafolio personal de desarrollador de software junior especializado en desarrollo web moderno",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
