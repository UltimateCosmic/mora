"use client"

import { useEffect, useRef } from "react"
import { ExternalLink } from "lucide-react"
import { SiUnity, SiBlender, SiAutodesk, SiSharp, SiAndroid, SiOculus } from "react-icons/si"
import { TbWorldWww } from "react-icons/tb"
import { FaVrCardboard } from "react-icons/fa"

// Mapeo de tecnologías a iconos
const getTechIcon = (tech: string) => {
  const icons: Record<string, React.ReactNode> = {
    "Unity": <SiUnity className="h-3.5 w-3.5" />,
    "3ds Max": <SiAutodesk className="h-3.5 w-3.5" />,
    "C#": <SiSharp className="h-3.5 w-3.5" />,
    "Blender": <SiBlender className="h-3.5 w-3.5" />,
    "Android": <SiAndroid className="h-3.5 w-3.5" />,
    "WebGL": <TbWorldWww className="h-3.5 w-3.5" />,
    "VR": <FaVrCardboard className="h-3.5 w-3.5" />,
    "Oculus Quest 2": <SiOculus className="h-3.5 w-3.5" />,
  }
  return icons[tech] || null
}

// Proyectos de Héctor Mora
const projects = [
  {
    id: 1,
    title: "Bimbo",
    role: "Technical Artist",
    description: "Integración de assets en tiempo real, modelado y rigging de elementos interactivos. Desarrollo de herramientas personalizadas en Unity que mejoraron el pipeline de integración y validación de contenido.",
    image: "/projects/Bimbo/hector-mora-parte1.jpg",
    technologies: ["Unity", "3ds Max", "C#"],
  },
  {
    id: 2,
    title: "Marinela",
    role: "Technical Artist",
    description: "Integración de herramientas web y modelos 3D. Rigging y creación de sistemas de animación.",
    image: "/projects/Marinela/marinela-preview.jpg",
    technologies: ["Unity", "3ds Max", "C#"],
  },
  {
    id: 3,
    title: "Aderiac - VR Training",
    role: "Lead Programmer",
    description: "Simulador de montacargas y quizz interactivos optimizado para Oculus Quest 2.",
    image: "/projects/Aderiac/hector-mora-parte01.jpg",
    technologies: ["Unity", "C#", "Oculus Quest 2", "VR"],
  },
  {
    id: 4,
    title: "Cascoo",
    role: "Lead Programmer",
    description: "Visualizador interactivo de piezas con herramientas personalizadas para coordinar interacciones.",
    image: "/projects/Cascoo/hector-mora-parte02 (1).jpg",
    technologies: ["Unity", "C#"],
  },
  {
    id: 5,
    title: "MAC Museum",
    role: "Project Manager / Lead Programmer",
    description: "Entorno VR interactivo para el Museo de Arte Contemporáneo de San Luis Potosí.",
    image: "/projects/Mac/hector-mora-parte01.jpg",
    technologies: ["Unity", "C#", "VR"],
  },
  {
    id: 6,
    title: "Hell Soul Factory",
    role: "Full Project Developer",
    description: "Desarrollo integral: programación, modelado 3D, animación y publicación en Play Store.",
    image: "/projects/HellSoulFactory/hector-mora-soulsfactoryarstation01.png",
    technologies: ["Unity", "Blender", "C#", "Android"],
  },
  {
    id: 7,
    title: "Rubbermaid",
    role: "Technical Artist",
    description: "Sistemas de iluminación, reflecciones y visuales interactivas para WebGL y Android.",
    image: "/projects/Rubbermaid/rubbermaid-preview.jpg",
    technologies: ["Unity", "WebGL", "Android"],
  },
]

export function ProjectsSection() {
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
    <section id="projects" ref={sectionRef} className="py-12 md:py-20 fade-in-section">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[90rem]">
          <h2 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl mb-4 font-[family-name:var(--font-oswald)]">
            {/*<span className="gradient-text">#</span>*/} Proyectos
          </h2>
          <p className="text-dark-secondary text-lg mb-12">
            Experiencia profesional en desarrollo de videojuegos, realidad virtual y experiencias interactivas
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-dark-surface rounded-xl overflow-hidden border border-dark-border transition-all duration-300 hover:border-dark-purple hover:shadow-2xl hover:shadow-dark-purple/20 hover:-translate-y-2"
              >
                <div className="h-56 overflow-hidden relative bg-dark-background">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-background via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-oswald)] mb-2">{project.title}</h3>
                  <p className="text-dark-cyan text-sm font-semibold mb-3">{project.role}</p>
                  <p className="text-dark-secondary text-sm mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="flex items-center gap-1.5 text-xs bg-dark-background px-3 py-1.5 rounded-full text-dark-foreground border border-dark-border hover:border-dark-cyan transition-colors"
                      >
                        {getTechIcon(tech) && <span className="text-dark-accent">{getTechIcon(tech)}</span>}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
