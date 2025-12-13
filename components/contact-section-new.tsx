"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone } from "lucide-react"
import { FaInstagram, FaLinkedin, FaArtstation } from "react-icons/fa"
import { SiSketchfab } from "react-icons/si"
import Link from "next/link"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const section = sectionRef.current
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-16 md:py-24 fade-in-section">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[70rem]">
          <h2 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl mb-4 font-[family-name:var(--font-oswald)]">
            {/*<span className="gradient-text">#</span>*/} Contacto
          </h2>
          <p className="text-dark-secondary text-lg mb-12">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre tus ideas y ver cómo puedo ayudarte a hacerlas realidad.
          </p>
          <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
            <div>
              <h3 className="text-2xl font-semibold mb-6 font-[family-name:var(--font-oswald)] text-dark-cyan">
                Trabajemos juntos
              </h3>
              <p className="text-dark-secondary mb-8 text-lg leading-relaxed">
                Estoy disponible para colaboraciones en proyectos de videojuegos, realidad virtual, 
                experiencias interactivas y desarrollo de herramientas personalizadas. Si buscas un 
                Technical Artist con experiencia en Unity y Unreal Engine, ¡hablemos!
              </p>
              <div className="space-y-6">
                <div className="flex items-start p-4 bg-dark-surface rounded-lg border border-dark-border hover:border-dark-purple transition-all">
                  <MapPin className="h-6 w-6 text-dark-cyan mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Ubicación</h4>
                    <span className="text-dark-secondary">México</span>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-dark-surface rounded-lg border border-dark-border hover:border-dark-purple transition-all">
                  <Phone className="h-6 w-6 text-dark-cyan mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Teléfono</h4>
                    <a href="tel:+523316061275" className="text-dark-secondary hover:text-dark-cyan transition-colors">
                      +52 331 606 1275
                    </a>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-dark-surface rounded-lg border border-dark-border hover:border-dark-purple transition-all">
                  <Mail className="h-6 w-6 text-dark-cyan mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:hectormoracg@gmail.com" className="text-dark-secondary hover:text-dark-cyan transition-colors">
                      hectormoracg@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-dark-surface p-8 rounded-xl border border-dark-border hover:border-dark-purple transition-all">
              <h3 className="text-2xl font-semibold mb-6 font-[family-name:var(--font-oswald)] text-dark-purple">
                Sígueme
              </h3>
              <p className="text-dark-secondary mb-8">
                Explora mi trabajo en estas plataformas y mantente al día con mis últimos proyectos.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="https://www.instagram.com/mora4zul/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center p-6 bg-dark-background hover:bg-gradient-to-br hover:from-dark-purple hover:to-dark-cyan rounded-lg border border-dark-border hover:border-transparent transition-all duration-300"
                >
                  <FaInstagram className="h-10 w-10 mb-3 text-dark-cyan group-hover:text-white transition-colors" />
                  <span className="text-sm font-medium group-hover:text-white transition-colors">Instagram</span>
                </Link>
                <Link
                  href="https://www.artstation.com/hectormora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center p-6 bg-dark-background hover:bg-gradient-to-br hover:from-dark-cyan hover:to-dark-purple rounded-lg border border-dark-border hover:border-transparent transition-all duration-300"
                >
                  <FaArtstation className="h-10 w-10 mb-3 text-dark-purple group-hover:text-white transition-colors" />
                  <span className="text-sm font-medium group-hover:text-white transition-colors">ArtStation</span>
                </Link>
                <Link
                  href="https://sketchfab.com/MoraAzul/models"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center p-6 bg-dark-background hover:bg-gradient-to-br hover:from-dark-purple hover:to-dark-cyan rounded-lg border border-dark-border hover:border-transparent transition-all duration-300"
                >
                  <SiSketchfab className="h-10 w-10 mb-3 text-dark-cyan group-hover:text-white transition-colors" />
                  <span className="text-sm font-medium group-hover:text-white transition-colors">Sketchfab</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/h%C3%A9ctor-de-jes%C3%BAs-mora-l%C3%B3pez-238464169"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center p-6 bg-dark-background hover:bg-gradient-to-br hover:from-dark-cyan hover:to-dark-purple rounded-lg border border-dark-border hover:border-transparent transition-all duration-300"
                >
                  <FaLinkedin className="h-10 w-10 mb-3 text-dark-purple group-hover:text-white transition-colors" />
                  <span className="text-sm font-medium group-hover:text-white transition-colors">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
