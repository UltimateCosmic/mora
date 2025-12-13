"use client"

import { useEffect, useRef } from "react"
import { Mail, MapPin } from "lucide-react"
import { FaInstagram, FaLinkedin, FaArtstation } from "react-icons/fa"
import { SiSketchfab } from "react-icons/si"

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-16 md:py-24 bg-dark-surface/50 fade-in-section">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[70rem] flex-col items-start justify-center gap-8">
          <h2 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl font-[family-name:var(--font-oswald)]">
            Sobre Mí
          </h2>
          <div className="mt-4 grid gap-12 md:grid-cols-[2fr_1fr]">
            <div>
              <p className="text-dark-foreground mb-6 text-lg leading-relaxed">
                Soy un <span className="text-dark-cyan font-semibold">Technical Artist</span> y <span className="text-dark-purple font-semibold">Game Developer</span> especializado 
                en crear experiencias interactivas inmersivas. Mi pasión es fusionar el arte con la tecnología para dar vida a mundos virtuales impresionantes.
              </p>
              <p className="text-dark-foreground mb-6 text-lg leading-relaxed">
                Con experiencia en <span className="text-dark-cyan">Unity</span> y <span className="text-dark-cyan">Unreal Engine</span>, me especializo en 
                optimización de performance, desarrollo de herramientas personalizadas, y creación de pipelines eficientes para producción de contenido 3D en tiempo real.
              </p>
              <p className="text-dark-foreground mb-8 text-lg leading-relaxed">
                He trabajado en proyectos diversos, desde simuladores VR para capacitación empresarial hasta experiencias interactivas 
                para museos y videojuegos móviles. Mi enfoque siempre es crear experiencias fluidas y visualmente impactantes.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-dark-cyan font-[family-name:var(--font-oswald)]">Especialidades</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-dark-background p-4 rounded-lg border border-dark-border">
                  <p className="text-dark-purple font-semibold">Technical Art</p>
                  <p className="text-dark-secondary text-sm">Shaders, VFX, Lighting</p>
                </div>
                <div className="bg-dark-background p-4 rounded-lg border border-dark-border">
                  <p className="text-dark-cyan font-semibold">3D Modeling</p>
                  <p className="text-dark-secondary text-sm">3ds Max, Blender</p>
                </div>
                <div className="bg-dark-background p-4 rounded-lg border border-dark-border">
                  <p className="text-dark-purple font-semibold">Game Development</p>
                  <p className="text-dark-secondary text-sm">Unity, Unreal Engine</p>
                </div>
                <div className="bg-dark-background p-4 rounded-lg border border-dark-border">
                  <p className="text-dark-cyan font-semibold">VR Experiences</p>
                  <p className="text-dark-secondary text-sm">Oculus, Interactive</p>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-background p-6 rounded-xl border border-dark-border flex flex-col items-center hover:border-dark-purple transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-dark-cyan font-[family-name:var(--font-oswald)]">Contacto</h3>
              
              <div className="w-full space-y-4 mb-6">
                <div className="flex items-start p-3 bg-dark-surface rounded-lg hover:bg-dark-surface/70 transition-colors">
                  <MapPin className="text-dark-cyan mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-dark-foreground">México</span>
                </div>
                <div className="flex items-start p-3 bg-dark-surface rounded-lg hover:bg-dark-surface/70 transition-colors">
                  <Mail className="text-dark-purple mr-3 mt-1 flex-shrink-0" size={20} />
                  <a href="mailto:hectormoracg@gmail.com" className="text-dark-cyan hover:text-dark-purple transition-colors break-all">
                    hectormoracg@gmail.com
                  </a>
                </div>
              </div>
              
              <h4 className="text-sm font-semibold mb-4 text-dark-secondary">Sígueme en:</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/mora4zul/" target="_blank" rel="noopener noreferrer" 
                   className="p-3 bg-dark-surface rounded-lg hover:bg-dark-purple hover:text-white transition-all">
                  <FaInstagram size={24} />
                </a>
                <a href="https://www.artstation.com/hectormora" target="_blank" rel="noopener noreferrer" 
                   className="p-3 bg-dark-surface rounded-lg hover:bg-dark-cyan hover:text-dark-background transition-all">
                  <FaArtstation size={24} />
                </a>
                <a href="https://sketchfab.com/MoraAzul/models" target="_blank" rel="noopener noreferrer" 
                   className="p-3 bg-dark-surface rounded-lg hover:bg-dark-purple hover:text-white transition-all">
                  <SiSketchfab size={24} />
                </a>
                <a href="https://www.linkedin.com/in/h%C3%A9ctor-de-jes%C3%BAs-mora-l%C3%B3pez-238464169" target="_blank" rel="noopener noreferrer" 
                   className="p-3 bg-dark-surface rounded-lg hover:bg-dark-cyan hover:text-dark-background transition-all">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
