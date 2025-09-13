import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-heading text-xl font-bold text-accent">
                Daksh<span className="text-foreground">Jain</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              AI/ML Engineer and Full-Stack Developer passionate about integrating GenAI tools, LLMs, and developing innovative solutions.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://github.com/Dakshj04"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-foreground/70 hover:text-accent transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/daksh-jain"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-foreground/70 hover:text-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:0408jaindaksh@gmail.com"
                aria-label="Email"
                className="text-foreground/70 hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:+916378922996"
                aria-label="Phone"
                className="text-foreground/70 hover:text-accent transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:0408jaindaksh@gmail.com" className="hover:text-accent transition-colors">
                  0408jaindaksh@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+916378922996" className="hover:text-accent transition-colors">
                  +91 6378922996
                </a>
              </li>
              <li className="mt-2">
                <p>Bengaluru, India</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Daksh Jain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}