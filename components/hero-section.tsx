"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { FaInstagram, FaLinkedin, FaArtstation } from "react-icons/fa"
import { SiSketchfab } from "react-icons/si"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentLine, setCurrentLine] = useState(0)
  const codeLines = [
    {
      id: 1,
      content:
        '<span class="code-keyword">class</span> <span class="code-class">DigitalArtist</span> {',
      delay: 0,
    },
    {
      id: 2,
      content: '  <span class="code-variable">name</span>: <span class="code-string">"Héctor Mora"</span>;',
      delay: 800,
    },
    {
      id: 3,
      content: '  <span class="code-variable">role</span>: <span class="code-string">"Technical Artist"</span>;',
      delay: 1200,
    },
    {
      id: 4,
      content:
        '  <span class="code-variable">location</span>: <span class="code-string">"México"</span>;',
      delay: 1600,
    },
    {
      id: 5,
      content: '  <span class="code-variable">skills</span>: [<span class="code-string">"Unity"</span>, <span class="code-string">"Unreal"</span>, <span class="code-string">"3D Art"</span>];',
      delay: 2400,
    },
    { id: 6, content: '  <span class="code-function">createArt</span>() {', delay: 3200 },
    {
      id: 7,
      content:
        '    <span class="code-keyword">return</span> <span class="code-string">"Bringing ideas to life"</span>;',
      delay: 4000,
    },
    { id: 8, content: "  }", delay: 4800 },
    { id: 9, content: "}", delay: 5600 },
  ]

  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    setIsVisible(true)

    const timer = setTimeout(() => {
      setCurrentLine(codeLines.length)
    }, 6000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
      style={{ position: "relative" }}
    >
      {/* Spotlights con nuevo esquema de colores */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            `radial-gradient(600px 300px at 0% 20%, rgba(139, 92, 246, 0.25), transparent 70%),` +
            `radial-gradient(500px 250px at 100% 80%, rgba(34, 211, 238, 0.25), transparent 70%)` +
            `,radial-gradient(400px 200px at 50% 50%, rgba(139, 92, 246, 0.12), transparent 80%)`,
          transition: "background 0.5s",
        }}
      />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-8">
            <div className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              <div className="flex items-baseline mb-2">
                <div className="flex items-center">
                  <img src="/mora.svg" alt="Logotipo de Héctor Mora" className="w-48 sm:w-56 xl:w-64 object-contain" />
                  <h1 className="sr-only">HÉCTOR MORA</h1>
                </div>
              </div>
              <h2 className="uppercase font-oswald text-2xl sm:text-3xl text-dark-cyan mb-4 font-semibold">
                Lic. Desarrollo Integral de Videojuegos
              </h2>
              <p className="max-w-[600px] text-dark-secondary text-lg mb-6 leading-relaxed">
                Technical Artist especializado en Unity y Unreal Engine. Creando experiencias interactivas
                inmersivas con modelado 3D, rigging, y sistemas de animación optimizados para tiempo real.
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-opacity duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              <Button
                className="bg-gradient-to-r from-dark-purple to-dark-cyan hover:opacity-90 text-white font-semibold button-hover-fix shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link href="#projects">
                  Ver Proyectos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-dark-border hover:bg-dark-surface hover:text-dark-cyan transition-all"
                asChild
              >
                <Link href="#contact">Contacto</Link>
              </Button>
            </div>

            <div
              className={`flex space-x-4 transition-opacity duration-1000 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              <Link
                href="https://www.instagram.com/mora4zul/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-secondary hover:text-dark-purple transition-colors p-2 hover:bg-dark-surface rounded-lg"
              >
                <FaInstagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.artstation.com/hectormora"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-secondary hover:text-dark-purple transition-colors p-2 hover:bg-dark-surface rounded-lg"
              >
                <FaArtstation className="h-6 w-6" />
                <span className="sr-only">ArtStation</span>
              </Link>
              <Link
                href="https://sketchfab.com/MoraAzul/models"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-secondary hover:text-dark-purple transition-colors p-2 hover:bg-dark-surface rounded-lg"
              >
                <SiSketchfab className="h-6 w-6" />
                <span className="sr-only">Sketchfab</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/h%C3%A9ctor-de-jes%C3%BAs-mora-l%C3%B3pez-238464169"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-secondary hover:text-dark-purple transition-colors p-2 hover:bg-dark-surface rounded-lg"
              >
                <FaLinkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Code block con animación de typing */}
          <div className="flex items-center">
            <div
              className={`bg-dark-code-bg border border-dark-border rounded-lg p-6 w-full transition-opacity duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0"} shadow-2xl`}
              style={{
                boxShadow: "0 0 30px rgba(139, 92, 246, 0.2)",
              }}
            >
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="ml-4 text-xs text-dark-secondary font-mono">digitalartist.ts</span>
              </div>
              <pre className="text-sm font-mono overflow-x-auto">
                <code>
                  {codeLines.slice(0, currentLine).map((line) => (
                    <div key={line.id} className="code-line" dangerouslySetInnerHTML={{ __html: line.content }} />
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

