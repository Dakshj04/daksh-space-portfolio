import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Download, GraduationCap, Award, Briefcase, User, Code, Database, Cpu, Brush, Wrench, Server } from 'lucide-react'
import { useEffect } from 'react'

// Skill categories
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

// Education data
const educationData = [
  {
    id: 1,
    institution: "Jain University",
    location: "Bengaluru",
    degree: "B.Tech in Computer Science",
    period: "Aug 2023 – Aug 2026",
    grade: "CGPA: 8.3/10"
  },
  {
    id: 2,
    institution: "Indus University",
    location: "Ahmedabad",
    degree: "B.Tech in Computer Science",
    period: "Aug 2022 – Aug 2023",
    grade: ""
  },
  {
    id: 3,
    institution: "Seedling Modern Public School",
    location: "Udaipur",
    degree: "12th Grade",
    period: "Aug 2020 – Aug 2022",
    grade: "86.6%"
  },
  {
    id: 4,
    institution: "Seedling Modern Public School",
    location: "Udaipur",
    degree: "10th Grade",
    period: "Completed Aug 2020",
    grade: "86.2%"
  }
]

// Certifications
const certifications = [
  "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional - Oracle",
  "Introduction to Generative AI - Google Cloud",
  "SQL for Data Science - UC Davis",
  "Building Database Applications in PHP - University of Michigan",
  "Linux Fundamentals - LearnQuest",
  "Introduction to Java - LearnQuest",
  "Object-Oriented Programming with Java - LearnQuest",
  "SQL - Coursera",
  "Data Science Program - Physics Wallah"
]

export default function About() {
  useEffect(() => {
    document.title = 'About | Daksh Jain Portfolio'
  }, [])
  
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
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-accent">Me</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn more about my background, skills, and journey in tech.
          </p>
        </div>
        
        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-2xl blur-3xl opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full relative">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent to-secondary opacity-20 blur-2xl"></div>
                    <div className="absolute inset-4 rounded-xl bg-card border border-border shadow-lg flex items-center justify-center overflow-hidden">
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
              </div>
              
              <div className="mt-6 text-center">
                <Button asChild size="lg" className="w-full md:w-auto">
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <User className="h-6 w-6 text-accent" />
                  Daksh Jain
                </h2>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-accent/20 text-accent hover:bg-accent/30">
                    AI/ML Engineer
                  </Badge>
                  <Badge className="bg-accent/20 text-accent hover:bg-accent/30">
                    Full-Stack Developer
                  </Badge>
                </div>
                
                <div className="space-y-4 text-lg">
                  <p>
                    I'm an aspiring AI/ML Engineer and Full-Stack Developer with a passion for building innovative solutions that solve real-world problems. My journey in tech began with a curiosity about how software can transform industries and improve lives.
                  </p>
                  <p>
                    Currently pursuing my B.Tech in Computer Science at Jain University in Bengaluru, I focus on integrating GenAI tools, LLMs, and LangChain into practical applications. I'm particularly interested in the intersection of artificial intelligence and web development.
                  </p>
                  <p>
                    My experience spans from developing medical chatbots with LLMs to building full-stack AI SaaS platforms. I enjoy the challenge of turning complex problems into elegant solutions through code.
                  </p>
                </div>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-md bg-accent/10">
                      <GraduationCap className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Education</p>
                      <p className="font-medium">B.Tech in Computer Science</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-md bg-accent/10">
                      <Briefcase className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Bengaluru, India</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Tabs Section */}
        <Tabs defaultValue="skills" className="mb-12">
          <TabsList className="bg-card/50 border border-border w-full justify-start overflow-auto">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>
          
          {/* Skills Tab */}
          <TabsContent value="skills" className="mt-6">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
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
          </TabsContent>
          
          {/* Education Tab */}
          <TabsContent value="education" className="mt-6">
            <motion.div 
              className="space-y-6 relative before:absolute before:inset-y-0 before:left-[17px] before:w-0.5 before:bg-border"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {educationData.map((item) => (
                <motion.div key={item.id} variants={itemVariants} className="relative pl-10">
                  <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-card border border-border flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-accent"></div>
                  </div>
                  
                  <Card className="bg-card/50 backdrop-blur-sm border-border">
                    <CardContent className="p-5">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h4 className="font-heading text-lg font-semibold">{item.institution}</h4>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5 mr-1" />
                          {item.period}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground">{item.location}</p>
                      <p className="mt-2">{item.degree}</p>
                      {item.grade && (
                        <p className="text-sm text-accent mt-1">{item.grade}</p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          
          {/* Certifications Tab */}
          <TabsContent value="certifications" className="mt-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-6">
                <motion.ul 
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {certifications.map((cert, index) => (
                    <motion.li 
                      key={index} 
                      variants={itemVariants}
                      className="flex items-start gap-3"
                    >
                      <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Award className="h-3.5 w-3.5 text-accent" />
                      </div>
                      <span>{cert}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Summary Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.div variants={itemVariants}>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
              Professional <span className="text-accent">Summary</span>
            </h2>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-6">
                <p className="text-lg">
                  Aspiring AI/ML Engineer and Full-Stack Developer with strong skills in Python, React.js, and machine learning. Passionate about integrating GenAI tools, LLMs, LangChain, and developing chatbots, while deploying full-stack web apps. Experienced in AI SaaS, ML model development, and real-world problem solving.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

function Calendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}