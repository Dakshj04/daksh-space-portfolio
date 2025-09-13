import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import ParticleBackground from './ParticleBackground'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 mb-4 rounded-full bg-accent/10 text-accent font-medium text-sm"
              >
                AI/ML Engineer & Full-Stack Developer
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Building the Future with{' '}
                <span className="text-accent">AI</span> and{' '}
                <span className="text-accent">Code</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-4 text-lg text-muted-foreground max-w-lg"
              >
                Passionate about integrating GenAI tools, LLMs, and developing innovative solutions that solve real-world problems.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="group">
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <a href="/resume.pdf" download>
                  Download Resume
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center gap-4 mt-2"
            >
              <a
                href="https://github.com/Dakshj04"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/daksh-jain"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-2xl blur-3xl opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[400px] h-[400px] relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-secondary opacity-20 blur-2xl"></div>
                  <div className="absolute inset-4 rounded-full bg-card border border-border shadow-lg flex items-center justify-center overflow-hidden">
                    <img 
                      src="/avatar-placeholder.png" 
                      alt="Daksh Jain"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/400x400/10B981/FFFFFF?text=DJ";
                      }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating tech icons */}
              <motion.div 
                className="absolute top-10 left-10 p-3 rounded-xl bg-card/80 backdrop-blur-sm border border-border shadow-md"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-8 h-8" />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-20 left-5 p-3 rounded-xl bg-card/80 backdrop-blur-sm border border-border shadow-md"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
              >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-8 h-8" />
              </motion.div>
              
              <motion.div 
                className="absolute top-20 right-10 p-3 rounded-xl bg-card/80 backdrop-blur-sm border border-border shadow-md"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
              >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" className="w-8 h-8" />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-10 right-20 p-3 rounded-xl bg-card/80 backdrop-blur-sm border border-border shadow-md"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1.5 }}
              >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-8 h-8" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-8 bg-accent/30 rounded-full relative"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 right-0 h-4 bg-accent rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}