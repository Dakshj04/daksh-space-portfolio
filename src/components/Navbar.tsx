import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-lg shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-xl font-bold text-accent">
            Daksh<span className="text-foreground">Jain</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'relative font-medium transition-colors hover:text-accent',
                location.pathname === link.path
                  ? 'text-accent'
                  : 'text-foreground/80'
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.span
                  layoutId="navIndicator"
                  className="absolute -bottom-1 left-0 h-0.5 w-full bg-accent"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Social Links - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/Dakshj04"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5 text-foreground/80 hover:text-accent transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/daksh-jain"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-foreground/80 hover:text-accent transition-colors" />
          </a>
          <a
            href="mailto:0408jaindaksh@gmail.com"
            aria-label="Email"
          >
            <Mail className="h-5 w-5 text-foreground/80 hover:text-accent transition-colors" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 w-full bg-card/95 backdrop-blur-lg shadow-lg md:hidden"
          >
            <div className="container mx-auto py-4 px-4">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      'py-2 font-medium transition-colors hover:text-accent',
                      location.pathname === link.path
                        ? 'text-accent'
                        : 'text-foreground/80'
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              
              {/* Social Links - Mobile */}
              <div className="mt-6 flex items-center gap-6 border-t border-border pt-4">
                <a
                  href="https://github.com/Dakshj04"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-foreground/80 hover:text-accent transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/daksh-jain"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-foreground/80 hover:text-accent transition-colors" />
                </a>
                <a
                  href="mailto:0408jaindaksh@gmail.com"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 text-foreground/80 hover:text-accent transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}