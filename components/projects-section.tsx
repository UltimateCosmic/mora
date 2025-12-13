"use client"

import { useEffect, useRef, useState } from "react"
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
    images: [
      "/projects/Bimbo/hector-mora-parte1.jpg",
      "/projects/Bimbo/hector-mora-parte2.jpg",
      "/projects/Bimbo/hector-mora-parte3.jpg",
      "/projects/Bimbo/hector-mora-parte4.jpg",
    ],
    technologies: ["Unity", "3ds Max", "C#"],
  },
  {
    id: 2,
    title: "Marinela",
    role: "Technical Artist",
    description: "Integración de herramientas web y modelos 3D. Rigging y creación de sistemas de animación.",
    images: [
      "/projects/Marinela/hector-mora-parte-01.jpg",
      "/projects/Marinela/hector-mora-parte-02.jpg",
      "/projects/Marinela/hector-mora-parte-03.jpg",
    ],
    technologies: ["Unity", "3ds Max", "C#"],
  },
  {
    id: 3,
    title: "Aderiac - VR Training",
    role: "Lead Programmer",
    description: "Simulador de montacargas y quizz interactivos optimizado para Oculus Quest 2.",
    images: [
      "/projects/Aderiac/hector-mora-parte01.jpg",
      "/projects/Aderiac/hector-mora-parte02.jpg",
      "/projects/Aderiac/hector-mora-parte04.jpg",
      "/projects/Aderiac/hector-mora-parte06.jpg",
    ],
    technologies: ["Unity", "C#", "Oculus Quest 2", "VR"],
  },
  {
    id: 4,
    title: "Cascoo",
    role: "Lead Programmer",
    description: "Visualizador interactivo de piezas con herramientas personalizadas para coordinar interacciones.",
    images: [
      "/projects/Cascoo/hector-mora-parte02 (1).jpg",
      "/projects/Cascoo/hector-mora-parte03.jpg",
      "/projects/Cascoo/hector-mora-parte04.jpg",
      "/projects/Cascoo/hector-mora-parte05.jpg",
    ],
    technologies: ["Unity", "C#"],
  },
  {
    id: 5,
    title: "MAC Museum",
    role: "Project Manager / Lead Programmer",
    description: "Entorno VR interactivo para el Museo de Arte Contemporáneo de San Luis Potosí.",
    images: [
      "/projects/Mac/hector-mora-parte01.jpg",
      "/projects/Mac/hector-mora-parte02.jpg",
      "/projects/Mac/hector-mora-parte03.jpg",
    ],
    technologies: ["Unity", "C#", "VR"],
  },
  {
    id: 6,
    title: "Hell Soul Factory",
    role: "Full Project Developer",
    description: "Desarrollo integral: programación, modelado 3D, animación y publicación en Play Store.",
    images: [
      "/projects/HellSoulFactory/hector-mora-soulsfactoryarstation01.png",
      "/projects/HellSoulFactory/hector-mora-soulsfactoryarstation02.png",
    ],
    technologies: ["Unity", "Blender", "C#", "Android"],
  },
  {
    id: 7,
    title: "Rubbermaid",
    role: "Technical Artist",
    description: "Sistemas de iluminación, reflecciones y visuales interactivas para WebGL y Android.",
    images: [
      "/projects/Rubbermaid/hector-mora-parte01.jpg",
      "/projects/Rubbermaid/hector-mora-parte02.jpg",
      "/projects/Rubbermaid/hector-mora-parte03.jpg",
      "/projects/Rubbermaid/hector-mora-parte04.jpg",
    ],
    technologies: ["Unity", "WebGL", "Android"],
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({})

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

  // Efecto para cambiar imágenes automáticamente al hacer hover
  useEffect(() => {
    if (hoveredProject === null) return

    const project = projects.find(p => p.id === hoveredProject)
    if (!project || project.images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImageIndex(prev => ({
        ...prev,
        [hoveredProject]: ((prev[hoveredProject] || 0) + 1) % project.images.length
      }))
    }, 800)

    return () => clearInterval(interval)
  }, [hoveredProject])

  return (
    <section id="projects" ref={sectionRef} className="py-12 md:py-20 fade-in-section">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[90rem]">
          <h2 className="text-4xl md:text-5xl mb-4">
            {/*<span className="gradient-text">#</span>*/} Proyectos
          </h2>
          <p className="text-dark-secondary text-lg mb-12">
            Experiencia profesional en desarrollo de videojuegos, realidad virtual y experiencias interactivas
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const currentIndex = currentImageIndex[project.id] || 0
              const currentImage = project.images[currentIndex]
              
              return (
                <div
                  key={project.id}
                  className="group bg-dark-surface rounded-xl overflow-hidden border border-dark-border transition-all duration-300 hover:border-dark-cyan hover:shadow-2xl hover:shadow-dark-cyan/20 hover:-translate-y-2"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => {
                    setHoveredProject(null)
                    setCurrentImageIndex(prev => ({ ...prev, [project.id]: 0 }))
                  }}
                >
                  <div className="h-56 overflow-hidden relative bg-dark-background">
                    <img
                      src={currentImage || "/placeholder.svg"}
                      alt={`${project.title} - Imagen ${currentIndex + 1}`}
                      className="w-full h-full object-cover object-center transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-background via-transparent to-transparent opacity-60"></div>
                    {project.images.length > 1 && (
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                        {project.images.map((_, index) => (
                          <div
                            key={index}
                            className={`h-1.5 rounded-full transition-all ${
                              index === currentIndex 
                                ? 'w-6 bg-dark-cyan' 
                                : 'w-1.5 bg-dark-secondary/50'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-4xl">{project.title}</h3>
                    <p className="text-dark-purple text-sm font-semibold mb-4">{project.role}</p>
                    <p className="text-dark-secondary text-sm mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="flex items-center gap-1.5 text-xs bg-dark-background px-3 py-1.5 rounded-full text-dark-foreground border border-dark-border hover:border-dark-cyan transition-colors"
                        >
                          {getTechIcon(tech) && <span className="text-dark-cyan">{getTechIcon(tech)}</span>}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
