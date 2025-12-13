import { Mail } from "lucide-react"
import { FaInstagram, FaLinkedin, FaArtstation } from "react-icons/fa"
import { SiSketchfab } from "react-icons/si"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-8 border-t border-dark-border bg-dark-surface/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-dark-secondary mb-1">
              &copy; {new Date().getFullYear()} <span className="text-dark-accent font-semibold">Héctor Mora</span>. Todos los derechos reservados.
            </p>
            <p className="text-xs text-dark-muted">
              Lic. Desarrollo Integral de Videojuegos
            </p>
          </div>
          <p className="text-sm text-dark-secondary">
            Hecho con <span className="text-dark-purple">Next.js</span>,{" "}
            <span className="text-dark-cyan">React</span> y{" "}
            <span className="text-dark-accent">Tailwind CSS</span>
          </p>
          <div className="flex space-x-3">
            <Link
              href="https://www.instagram.com/mora4zul/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-secondary hover:text-pink-500 transition-all duration-300 hover:scale-110"
              title="Instagram"
            >
              <FaInstagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.artstation.com/hectormora"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-secondary hover:text-blue-500 transition-all duration-300 hover:scale-110"
              title="ArtStation"
            >
              <FaArtstation className="h-5 w-5" />
              <span className="sr-only">ArtStation</span>
            </Link>
            <Link
              href="https://sketchfab.com/MoraAzul/models"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-secondary hover:text-cyan-500 transition-all duration-300 hover:scale-110"
              title="Sketchfab"
            >
              <SiSketchfab className="h-5 w-5" />
              <span className="sr-only">Sketchfab</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/héctor-de-jesús-mora-lópez-238464169"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-secondary hover:text-blue-700 transition-all duration-300 hover:scale-110"
              title="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:hectormoracg@gmail.com"
              className="text-dark-secondary hover:text-dark-accent transition-all duration-300 hover:scale-110"
              title="Email"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
