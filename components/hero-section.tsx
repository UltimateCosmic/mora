"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { FaInstagram, FaLinkedin, FaArtstation } from "react-icons/fa"
import { SiSketchfab } from "react-icons/si"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Character {
  src: string
  alt: string
  x: number
  y: number
  scale: number
  depth: number
  rotation: number
}

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [currentCharacter, setCurrentCharacter] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement | null>(null)

  const characters: Character[] = [
    { src: "/projects/PngTransparencia/png00.png", alt: "Personaje demonio rosa", x: 20, y: 10, scale: 1.2, depth: 0.8, rotation: -5 },
    { src: "/projects/PngTransparencia/png01.png", alt: "Personaje verde", x: 60, y: 50, scale: 0.9, depth: 0.5, rotation: 8 },
    { src: "/projects/PngTransparencia/png03.png", alt: "Personaje payaso", x: 10, y: 60, scale: 0.8, depth: 0.6, rotation: -3 },
    { src: "/projects/PngTransparencia/png04.png", alt: "Tanque", x: 70, y: 20, scale: 0.7, depth: 0.4, rotation: 0 },
    { src: "/projects/PngTransparencia/png05.png", alt: "Personaje conejo", x: 80, y: 70, scale: 0.85, depth: 0.7, rotation: 5 },
    { src: "/projects/PngTransparencia/png06.png", alt: "Personaje rosa grande", x: 40, y: 30, scale: 1, depth: 0.9, rotation: -8 },
  ]

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrollProgress = Math.max(0, -rect.top / window.innerHeight)
        setScrollY(scrollProgress)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        setMousePosition({ x, y })
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    handleScroll()

    // Cambiar personaje destacado cada 3 segundos
    const characterInterval = setInterval(() => {
      setCurrentCharacter((prev) => (prev + 1) % characters.length)
    }, 3000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(characterInterval)
    }
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
      style={{ position: "relative" }}
    >
      {/* Gradientes de fondo dinámicos e interactivos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 transition-all duration-300"
        style={{
          background:
            `radial-gradient(800px 400px at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(139, 92, 246, 0.35), transparent 70%),` +
            `radial-gradient(700px 350px at ${100 - mousePosition.x * 100}% ${100 - mousePosition.y * 100}%, rgba(34, 211, 238, 0.3), transparent 70%)` +
            `,radial-gradient(600px 300px at 50% 50%, rgba(139, 92, 246, 0.15), transparent 80%)`,
        }}
      />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          {/* Contenido textual */}
          <div className="flex flex-col justify-center space-y-8">
            <div className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              <div className="flex items-baseline mb-2">
                <div className="flex items-center group cursor-pointer">
                  <img 
                    src="/mora.svg" 
                    alt="Logotipo de Héctor Mora" 
                    className="w-48 sm:w-56 xl:w-64 object-contain transition-transform duration-300 group-hover:scale-110" 
                  />
                  <h1 className="sr-only">HÉCTOR MORA</h1>
                </div>
              </div>
              <h2 className="font-bebas-neue text-2xl sm:text-3xl text-white mb-4">
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
                className="bg-dark-purple hover:bg-dark-purple/80 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link href="#projects">
                  Ver Proyectos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-dark-cyan text-dark-cyan bg-dark-background hover:bg-dark-cyan hover:text-dark-background transition-all"
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

          {/* Galería de personajes 3D con parallax */}
          <div className="relative flex items-center justify-center min-h-[500px] lg:min-h-[600px]">
            <div className="relative w-full h-full">
              {characters.map((character, index) => {
                const parallaxOffset = scrollY * character.depth * 100
                const isHighlighted = index === currentCharacter
                const opacity = isVisible ? (isHighlighted ? 1 : 0.7) : 0
                const zIndex = isHighlighted ? 20 : 10
                
                return (
                  <div
                    key={index}
                    className="absolute transition-all duration-1000 ease-out"
                    style={{
                      left: `${character.x}%`,
                      top: `${character.y}%`,
                      transform: `
                        translate(-50%, calc(-50% + ${parallaxOffset}px)) 
                        scale(${character.scale * (isHighlighted ? 1.1 : 1)}) 
                        rotate(${character.rotation + parallaxOffset * 0.1}deg)
                      `,
                      opacity: opacity,
                      zIndex: zIndex,
                      filter: isHighlighted 
                        ? `drop-shadow(0 0 30px rgba(139, 92, 246, 0.6)) drop-shadow(0 0 60px rgba(34, 211, 238, 0.4))` 
                        : `drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))`,
                      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <img
                      src={character.src}
                      alt={character.alt}
                      className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain pointer-events-none select-none"
                      style={{
                        imageRendering: 'crisp-edges',
                      }}
                    />
                  </div>
                )
              })}
              
              {/* Efecto de resplandor central */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)`,
                  animation: 'pulse 4s ease-in-out infinite',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
      `}</style>
    </section>
  )
}


