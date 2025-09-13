import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Github, ExternalLink, Bot, Cpu, Database } from 'lucide-react'
import { Link } from 'react-router-dom'

const projects = [
  {
    id: 1,
    title: "Medical Chatbot with LLMs",
    description: "A medical chatbot using LangChain and GPT with RAG-based conversations and QA pipeline.",
    icon: <Bot className="h-6 w-6 text-accent" />,
    tags: ["Python", "LangChain", "Flask", "GPT", "Pinecone", "AWS", "Docker"],
    githubUrl: "https://github.com/Dakshj04/medical-chatbot",
    liveUrl: "#",
    features: [
      "Implemented vector embeddings in Pinecone for document retrieval",
      "Deployed via Docker on AWS EC2/ECR with CI/CD pipelines",
      "Designed Flask backend with HTML/CSS frontend"
    ]
  },
  {
    id: 2,
    title: "AI SaaS Platform – Quick.Ai",
    description: "A full-stack AI SaaS application with Clerk authentication, Stripe billing, and protected routes using the PERN stack.",
    icon: <Database className="h-6 w-6 text-accent" />,
    tags: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Clerk Auth", "OpenAI API"],
    githubUrl: "https://github.com/Dakshj04/quick-ai",
    liveUrl: "#",
    features: [
      "Integrated OpenAI API and Replicate API for AI tools",
      "Deployed with Neon for serverless PostgreSQL",
      "Designed responsive UI with Tailwind CSS"
    ]
  },
  {
    id: 3,
    title: "Diabetes Prediction ML App",
    description: "Developed logistic regression model to predict diabetes risk using clinical parameters.",
    icon: <Cpu className="h-6 w-6 text-accent" />,
    tags: ["Python", "Scikit-learn", "Flask", "Streamlit", "StandardScaler"],
    githubUrl: "https://github.com/Dakshj04/diabetes-prediction",
    liveUrl: "#",
    features: [
      "Applied feature scaling and data preprocessing techniques",
      "Created dual-interface deployment using Flask and Streamlit",
      "Enabled real-time prediction and user-friendly dashboards"
    ]
  }
]

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Explore some of my recent work that showcases my skills in AI/ML and full-stack development.
            </p>
          </div>
          
          <Button asChild variant="ghost" className="mt-4 md:mt-0 self-start md:self-auto group">
            <Link to="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="h-full flex flex-col bg-card border-border hover:shadow-md transition-all hover:border-accent/50 overflow-hidden group">
                <CardHeader className="pb-3">
                  <div className="mb-2">{project.icon}</div>
                  <CardTitle className="font-heading">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="pb-4 flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-secondary/30">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 4 && (
                      <Badge variant="outline">+{project.tags.length - 4}</Badge>
                    )}
                  </div>
                  
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                    {project.features.map((feature, index) => (
                      <li key={index} className="line-clamp-1">{feature}</li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="pt-0 flex gap-3">
                  <Button asChild size="sm" variant="outline">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  
                  <Button asChild size="sm">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}