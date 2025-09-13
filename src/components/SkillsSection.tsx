import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code, Database, Server, Cpu, Brush, Wrench } from 'lucide-react'

const skillCategories = [
  {
    title: "Programming",
    icon: <Code className="h-5 w-5 text-accent" />,
    skills: ["Python", "Java", "JavaScript", "C"]
  },
  {
    title: "Web Development",
    icon: <Brush className="h-5 w-5 text-accent" />,
    skills: ["HTML", "CSS", "React.js", "Node.js", "Express.js"]
  },
  {
    title: "Database",
    icon: <Database className="h-5 w-5 text-accent" />,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Pinecone (Vector DB)"]
  },
  {
    title: "ML/Data",
    icon: <Cpu className="h-5 w-5 text-accent" />,
    skills: ["Pandas", "NumPy", "Scikit-learn", "EDA", "LangChain", "LLM Integration"]
  },
  {
    title: "Tools",
    icon: <Wrench className="h-5 w-5 text-accent" />,
    skills: ["Git", "GitHub", "Docker", "Flask", "Streamlit", "CI/CD (GitHub Actions)"]
  },
  {
    title: "Other",
    icon: <Server className="h-5 w-5 text-accent" />,
    skills: ["GenAI APIs (OpenAI, Gemini, Hugging Face)", "REST APIs", "Clerk Auth", "Debugging", "Problem Solving"]
  }
]

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }
  
  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of skills I've developed through education, projects, and professional experience.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border hover:shadow-md transition-shadow overflow-hidden group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-md bg-accent/10 text-accent">
                      {category.icon}
                    </div>
                    <h3 className="font-heading text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="bg-secondary/30 hover:bg-secondary/50 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}