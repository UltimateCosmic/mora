"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { FaInstagram, FaLinkedin, FaArtstation, FaItchIo, FaGooglePlay } from "react-icons/fa"
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

  // Composición optimizada con equilibrio visual y jerarquía clara
  const characters: Character[] = [
    // Personaje principal - demonio rosa (centro, protagonista absoluto)
    { src: "/projects/PngTransparencia/png00.png", alt: "Personaje demonio rosa", x: 50, y: 40, scale: 1.6, depth: 1.0, rotation: 0 },
    // Personaje rosa grande (izquierda-superior, secundario prominente)
    { src: "/projects/PngTransparencia/png06.png", alt: "Personaje rosa grande", x: 0, y: 20, scale: 1.0, depth: 0.7, rotation: -8 },
    // Personaje verde (derecha-inferior, complemento dinámico)
    { src: "/projects/PngTransparencia/png01.png", alt: "Personaje verde", x: 90, y: 70, scale: 4, depth: 0.65, rotation: 6 },
    // Tanque (izquierda-inferior, elemento de fondo)
    { src: "/projects/PngTransparencia/png04.png", alt: "Tanque", x: 0, y: 75, scale: 1.4, depth: 0.3, rotation: -4 },
    // Personaje payaso (derecha-superior, detalle de fondo)
    { src: "/projects/PngTransparencia/png03.png", alt: "Personaje payaso", x: 88, y: 18, scale: 3.5, depth: 0.4, rotation: 10 },
    // Personaje conejo (centro-inferior, soporte visual)
    { src: "/projects/PngTransparencia/png05.png", alt: "Personaje conejo", x: 50, y: 95, scale: 1, depth: 0.5, rotation: -6 },
  ]

  /*const characters: Character[] = [
    // Personaje principal - demonio rosa (centro, protagonista absoluto)
    { src: "/projects/PngTransparencia/png00.png", alt: "Personaje demonio rosa", x: 50, y: 35, scale: 1.6, depth: 1.0, rotation: 0 },
    // Personaje rosa grande (izquierda-superior, secundario prominente)
    { src: "/projects/PngTransparencia/png06.png", alt: "Personaje rosa grande", x: 15, y: 20, scale: 1.0, depth: 0.7, rotation: -8 },
    // Personaje verde (derecha-inferior, complemento dinámico)
    { src: "/projects/PngTransparencia/png01.png", alt: "Personaje verde", x: 80, y: 60, scale: 0.95, depth: 0.65, rotation: 6 },
    // Tanque (izquierda-inferior, elemento de fondo)
    { src: "/projects/PngTransparencia/png04.png", alt: "Tanque", x: 12, y: 75, scale: 0.55, depth: 0.3, rotation: -4 },
    // Personaje payaso (derecha-superior, detalle de fondo)
    { src: "/projects/PngTransparencia/png03.png", alt: "Personaje payaso", x: 88, y: 18, scale: 0.65, depth: 0.4, rotation: 10 },
    // Personaje conejo (centro-inferior, soporte visual)
    { src: "/projects/PngTransparencia/png05.png", alt: "Personaje conejo", x: 50, y: 80, scale: 0.7, depth: 0.5, rotation: -6 },
  ]*/

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
      {/* Gradientes de fondo dinámicos con mayor sutileza y profundidad */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 transition-all duration-700"
        style={{
          background:
            `radial-gradient(1000px 500px at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(139, 92, 246, 0.25), transparent 75%),` +
            `radial-gradient(900px 450px at ${100 - mousePosition.x * 100}% ${100 - mousePosition.y * 100}%, rgba(34, 211, 238, 0.20), transparent 75%),` +
            `radial-gradient(800px 400px at 50% 50%, rgba(139, 92, 246, 0.12), transparent 85%),` +
            `linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, transparent 50%, rgba(34, 211, 238, 0.05) 100%)`,
        }}
      />

      {/* Capa adicional de profundidad con gradiente sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(ellipse 120% 100% at 50% 50%, transparent 40%, rgba(10, 10, 15, 0.4) 100%)`,
        }}
      />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          {/* Contenido textual con mejor jerarquía visual */}
          <div className="flex flex-col justify-center space-y-6">
            <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="flex items-baseline mb-3 justify-center md:justify-start">
                <div className="flex items-center group cursor-pointer">
                  <img 
                    src="/mora.svg" 
                    alt="Logotipo de Héctor Mora" 
                    className="w-48 sm:w-56 xl:w-64 object-contain transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]" 
                  />
                  <h1 className="sr-only">HÉCTOR MORA</h1>
                </div>
              </div>
              <h2 className="font-bebas-neue text-2xl sm:text-3xl xl:text-4xl text-white mb-5 tracking-wide text-center md:text-left">
                <span className="text-dark-purple">Lic.</span> Desarrollo Integral de Videojuegos
              </h2>
              <p className="max-w-[600px] text-dark-secondary text-base sm:text-lg mb-6 leading-relaxed font-light text-center md:text-left mx-auto md:mx-0">
                <span className="text-white font-medium">Technical Artist</span> especializado en{" "}
                <span className="text-dark-cyan font-medium">Unity</span> y{" "}
                <span className="text-dark-cyan font-medium">Unreal Engine</span>. 
                Creando experiencias interactivas inmersivas con{" "}
                <span className="text-white">modelado 3D</span>,{" "}
                <span className="text-white">rigging</span>, y sistemas de{" "}
                <span className="text-white">animación</span> optimizados para tiempo real.
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} justify-center md:justify-start`}
            >
              <Button
                className="bg-dark-purple hover:bg-dark-purple/80 text-white font-semibold shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-300 px-8 py-6 text-base"
                asChild
              >
                <Link href="#projects">
                  Ver Proyectos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-dark-cyan text-dark-cyan bg-dark-background/50 backdrop-blur-sm hover:bg-dark-cyan hover:text-dark-background hover:border-dark-cyan transition-all duration-300 px-8 py-6 text-base font-medium"
                asChild
              >
                <Link href="#contact">Contacto</Link>
              </Button>
            </div>

            <div
              className={`flex space-x-4 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} justify-center md:justify-start`}
            >
              <Link
                href="https://www.instagram.com/mora4zul/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-secondary hover:text-dark-purple transition-all duration-300 p-2.5 hover:bg-dark-purple/10 rounded-lg backdrop-blur-sm border border-transparent hover:border-dark-purple/30"
              >
                <FaInstagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.artstation.com/hectormora"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-secondary hover:text-dark-purple transition-all duration-300 p-2.5 hover:bg-dark-purple/10 rounded-lg backdrop-blur-sm border border-transparent hover:border-dark-purple/30"
              >
                <FaArtstation className="h-6 w-6" />
                <span className="sr-only">ArtStation</span>
              </Link>
              <Link
                href="https://sketchfab.com/MoraAzul/models"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-secondary hover:text-dark-purple transition-all duration-300 p-2.5 hover:bg-dark-purple/10 rounded-lg backdrop-blur-sm border border-transparent hover:border-dark-purple/30"
              >
                <SiSketchfab className="h-6 w-6" />
                <span className="sr-only">Sketchfab</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/h%C3%A9ctor-de-jes%C3%BAs-mora-l%C3%B3pez-238464169"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-secondary hover:text-dark-purple transition-all duration-300 p-2.5 hover:bg-dark-purple/10 rounded-lg backdrop-blur-sm border border-transparent hover:border-dark-purple/30"
              >
                <FaLinkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://moraazul.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-secondary hover:text-dark-purple transition-all duration-300 p-2.5 hover:bg-dark-purple/10 rounded-lg backdrop-blur-sm border border-transparent hover:border-dark-purple/30"
              >
                <FaItchIo className="h-6 w-6" />
                <span className="sr-only">Itch.io</span>
              </Link>
              <Link
                href="https://play.google.com/store/apps/dev?id=6474479279117437176"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-secondary hover:text-dark-purple transition-all duration-300 p-2.5 hover:bg-dark-purple/10 rounded-lg backdrop-blur-sm border border-transparent hover:border-dark-purple/30"
              >
                <FaGooglePlay className="h-6 w-6" />
                <span className="sr-only">Google Play Store</span>
              </Link>
            </div>
          </div>

          {/* Galería de personajes 3D con parallax mejorado */}
          <div className="relative flex items-center justify-center min-h-[550px] lg:min-h-[650px]">
            <div className="relative w-full h-full">
              {characters.map((character, index) => {
                const parallaxOffset = scrollY * character.depth * 80
                const isHighlighted = index === currentCharacter
                const isPrimary = index === 0 // El demonio rosa es siempre protagonista
                
                // Sistema de opacidad mejorado para jerarquía visual
                let opacity = 0
                if (isVisible) {
                  if (isPrimary) {
                    opacity = 1 // Protagonista siempre visible
                  } else if (isHighlighted) {
                    opacity = 0.95 // Destacado
                  } else {
                    opacity = 0.65 // Elementos de soporte
                  }
                }
                
                const zIndex = isPrimary ? 30 : (isHighlighted ? 20 : 10)
                const scale = isPrimary ? 1.05 : (isHighlighted ? 1.08 : 1)
                
                // Animación flotante única para cada personaje
                const floatAnimation = `float-${index}`
                const animationDuration = `${3 + index * 0.5}s`
                
                return (
                  <div
                    key={index}
                    className="absolute"
                    style={{
                      left: `${character.x}%`,
                      top: `${character.y}%`,
                      transform: `
                        translate(-50%, calc(-50% + ${parallaxOffset}px)) 
                        scale(${character.scale * scale}) 
                        rotate(${character.rotation + parallaxOffset * 0.08}deg)
                      `,
                      opacity: opacity,
                      zIndex: zIndex,
                      filter: isPrimary
                        ? `drop-shadow(0 0 40px rgba(139, 92, 246, 0.7)) drop-shadow(0 0 80px rgba(34, 211, 238, 0.5)) drop-shadow(0 20px 40px rgba(0, 0, 0, 0.4))`
                        : isHighlighted 
                        ? `drop-shadow(0 0 25px rgba(139, 92, 246, 0.5)) drop-shadow(0 0 50px rgba(34, 211, 238, 0.3)) drop-shadow(0 15px 30px rgba(0, 0, 0, 0.3))` 
                        : `drop-shadow(0 10px 25px rgba(0, 0, 0, 0.35))`,
                      transition: 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1), filter 1s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <img
                      src={character.src}
                      alt={character.alt}
                      className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 object-contain pointer-events-none select-none"
                      style={{
                        imageRendering: 'auto',
                        animation: `${floatAnimation} ${animationDuration} ease-in-out infinite`,
                      }}
                    />
                  </div>
                )
              })}
              
              {/* Efecto de resplandor central mejorado con múltiples capas */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(circle, rgba(139, 92, 246, 0.18) 0%, rgba(34, 211, 238, 0.12) 40%, transparent 75%)`,
                  animation: 'pulse 5s ease-in-out infinite',
                  filter: 'blur(60px)',
                }}
              />
              
              {/* Segundo resplandor para mayor profundidad */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 md:w-80 md:h-80 rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, transparent 70%)`,
                  animation: 'pulse-reverse 6s ease-in-out infinite',
                  filter: 'blur(40px)',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(1.15);
          }
        }
        
        @keyframes pulse-reverse {
          0%, 100% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(1.1);
          }
          50% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        
        /* Animaciones flotantes - solo para las imágenes, sin afectar posición o escala del contenedor */
        @keyframes float-0 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        
        @keyframes float-1 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes float-2 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes float-3 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        @keyframes float-4 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-11px);
          }
        }
        
        @keyframes float-5 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-9px);
          }
        }
      `}</style>
    </section>
  )
}


