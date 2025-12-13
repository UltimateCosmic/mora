"use client"

import { useEffect, useRef } from "react"
import { SiUnity, SiUnrealengine, SiBlender, SiAutodesk, SiSharp, SiPython, SiCplusplus } from "react-icons/si"
import { TbBrandThreejs } from "react-icons/tb"
import { Box, Code, Palette, Torus } from "lucide-react"

const skillCategories = [
  {
    name: "Programación",
    icon: <Code className="h-8 w-8" />,
    skills: [
      { name: "C#", icon: <SiSharp className="h-5 w-5" /> },
      { name: "Python", icon: <SiPython className="h-5 w-5" /> },
      { name: "C++", icon: <SiCplusplus className="h-5 w-5" /> },
    ],
  },
  {
    name: "3D & Modelado",
    icon: <Torus className="h-8 w-8" />,
    skills: [
      { name: "3ds Max", icon: <SiAutodesk className="h-5 w-5" /> },
      { name: "Blender", icon: <SiBlender className="h-5 w-5" /> },
    ],
  },
  {
    name: "Texturizado",
    icon: <Palette className="h-8 w-8" />,
    skills: [
      { name: "Substance Painter", icon: <Palette className="h-5 w-5" /> },
      { name: "Quixel", icon: <TbBrandThreejs className="h-5 w-5" /> },
      { name: "3DCoat", icon: <SiAutodesk className="h-5 w-5" /> },
    ],
  },
  {
    name: "Motores Gráficos",
    icon: <Box className="h-8 w-8" />,
    skills: [
      { name: "Unity", icon: <SiUnity className="h-5 w-5" /> },
      { name: "Unreal Engine", icon: <SiUnrealengine className="h-5 w-5" /> },
    ],
  },
]

export function SkillsSection() {
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
    <section id="skills" ref={sectionRef} className="py-16 md:py-24 bg-dark-surface/50 fade-in-section">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[70rem]">
          <h2 className="text-4xl md:text-5xl mb-4">
            {/*<span className="gradient-text">#</span>*/} Skills
          </h2>
          <p className="text-dark-secondary text-lg mb-12">
            Herramientas y tecnologías con las que trabajo para crear experiencias interactivas de alta calidad.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="group bg-dark-background p-6 rounded-xl border border-dark-border hover:border-dark-purple transition-all duration-300 hover:shadow-lg hover:shadow-dark-purple/20"
              >
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="text-dark-cyan group-hover:text-dark-purple transition-colors duration-300 mb-3">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold font-[family-name:var(--font-bebas-neue)] group-hover:text-dark-cyan transition-colors">
                    {category.name}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 p-3 bg-dark-surface rounded-lg border border-dark-border hover:border-dark-cyan transition-all duration-300 hover:translate-x-1"
                    >
                      <div className="text-dark-accent flex-shrink-0">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
