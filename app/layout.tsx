import type React from "react"
import { Roboto, Oswald } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
})

const oswald = Oswald({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
})

export const metadata: Metadata = {
  title: "Héctor Mora | Lic. Desarrollo Integral de Videojuegos",
  description:
    "Héctor Mora - Lic. en Desarrollo Integral de Videojuegos. Technical Artist, Game Developer y 3D Artist especializado en Unity, Unreal Engine y experiencias interactivas.",
  icons: {
    icon: "/mora.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${roboto.className} ${oswald.variable}`} suppressHydrationWarning>
      <body className="bg-dark-background text-dark-foreground min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
