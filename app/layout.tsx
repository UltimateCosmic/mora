import type React from "react"
import { Inter, Bebas_Neue } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
})

export const metadata: Metadata = {
  title: "Héctor Mora | Lic. Desarrollo Integral de Videojuegos",
  description:
    "Héctor Mora - Lic. en Desarrollo Integral de Videojuegos. Technical Artist, Game Developer y 3D Artist especializado en Unity, Unreal Engine y experiencias interactivas.",
  icons: {
    icon: "/projects/PngTransparencia/png00.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.className} ${bebasNeue.variable}`} suppressHydrationWarning>
      <body className="bg-dark-background text-dark-foreground min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
