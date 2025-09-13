import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Bot, Cpu, Database, Search, ListFilter as Filter } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Project data
const allProjects = [
{
  id: 1,
  title: "Medical Chatbot with LLMs",
  description: "A medical chatbot using LangChain and GPT with RAG-based conversations and QA pipeline.",
  icon: <Bot className="h-6 w-6 text-accent" />,
  category: "ai",
  tags: ["Python", "LangChain", "Flask", "GPT", "Pinecone", "AWS", "Docker"],
  githubUrl: "https://github.com/Dakshj04/medical-chatbot",
  liveUrl: "#",
  features: [
  "Built a medical chatbot using LangChain and GPT with RAG-based conversations and QA pipeline",
  "Implemented vector embeddings in Pinecone for document retrieval, prompt ingestion, and retrieval-augmented generation",
  "Deployed via Docker on AWS EC2/ECR with CI/CD pipelines using GitHub Actions",
  "Designed Flask backend with HTML/CSS frontend for interactive and domain-specific medical queries"]

},
{
  id: 2,
  title: "AI SaaS Platform – Quick.Ai",
  description: "A full-stack AI SaaS application with Clerk authentication, Stripe billing, and protected routes using the PERN stack.",
  icon: <Database className="h-6 w-6 text-accent" />,
  category: "fullstack",
  tags: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Clerk Auth", "OpenAI API", "Replicate API", "Tailwind CSS", "REST APIs"],
  githubUrl: "https://github.com/Dakshj04/quick-ai",
  liveUrl: "#",
  features: [
  "Built a full-stack AI SaaS application with Clerk authentication, Stripe billing, and protected routes using the PERN stack",
  "Integrated OpenAI API and Replicate API for tools like article generation, image generation, and resume analysis",
  "Deployed with Neon (serverless PostgreSQL) for scalable database management",
  "Designed responsive UI with Tailwind CSS and React Router for seamless navigation"]

},
{
  id: 3,
  title: "Diabetes Prediction ML App",
  description: "Developed logistic regression model to predict diabetes risk using clinical parameters.",
  icon: <Cpu className="h-6 w-6 text-accent" />,
  category: "ml",
  tags: ["Python", "Scikit-learn", "Flask", "Streamlit", "StandardScaler"],
  githubUrl: "https://github.com/Dakshj04/diabetes-prediction",
  liveUrl: "#",
  features: [
  "Developed logistic regression model to predict diabetes risk using clinical parameters",
  "Applied feature scaling and data preprocessing techniques with StandardScaler for consistent model performance",
  "Created dual-interface deployment using Flask and Streamlit for web-based predictions",
  "Enabled real-time prediction and user-friendly dashboards for clinicians"]

},
{
  id: 4,
  title: "Personal Portfolio Website",
  description: "Modern portfolio website built with React, Tailwind CSS, and Framer Motion animations.",
  icon: <ExternalLink className="h-6 w-6 text-accent" />,
  category: "frontend",
  tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive Design"],
  githubUrl: "https://github.com/Dakshj04/portfolio",
  liveUrl: "#",
  features: [
  "Designed and developed a modern portfolio website with a space-tech theme",
  "Implemented smooth animations and transitions using Framer Motion",
  "Built with React, TypeScript, and Tailwind CSS for a responsive design",
  "Optimized for performance and accessibility"]

},
{
  id: 5,
  title: "E-commerce Dashboard",
  description: "Admin dashboard for e-commerce platforms with analytics, inventory management, and order processing.",
  icon: <Database className="h-6 w-6 text-accent" />,
  category: "fullstack",
  tags: ["React", "Node.js", "MongoDB", "Express", "Chart.js", "Authentication"],
  githubUrl: "#",
  liveUrl: "#",
  features: [
  "Built a comprehensive admin dashboard for e-commerce platforms",
  "Implemented analytics with Chart.js for sales and user behavior visualization",
  "Created inventory management system with real-time updates",
  "Developed order processing workflow with status tracking"]

},
{
  id: 6,
  title: "Image Classification Model",
  description: "Deep learning model for image classification using TensorFlow and Keras.",
  icon: <Cpu className="h-6 w-6 text-accent" />,
  category: "ml",
  tags: ["Python", "TensorFlow", "Keras", "CNN", "Data Augmentation"],
  githubUrl: "#",
  liveUrl: "#",
  features: [
  "Trained a convolutional neural network for image classification",
  "Implemented data augmentation techniques to improve model generalization",
  "Achieved 94% accuracy on test dataset",
  "Deployed model as a web service with TensorFlow Serving"]

}];


export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  useEffect(() => {
    document.title = 'Projects | Daksh Jain Portfolio';

    // Filter projects based on search term and category
    const filtered = allProjects.filter((project) => {
      const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = categoryFilter === 'all' || project.category === categoryFilter;

      return matchesSearch && matchesCategory;
    });

    setFilteredProjects(filtered);
  }, [searchTerm, categoryFilter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-accent">Projects</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of projects spanning AI/ML, full-stack development, and more.
          </p>
        </div>
        
        {/* Filters */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 bg-card border-border" />

            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="bg-card border-border">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="ai">AI/LLMs</SelectItem>
                  <SelectItem value="ml">Machine Learning</SelectItem>
                  <SelectItem value="fullstack">Full-Stack</SelectItem>
                  <SelectItem value="frontend">Frontend</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        {/* Project Categories */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="bg-card/50 border border-border">
            <TabsTrigger value="all" onClick={() => setCategoryFilter('all')}>All</TabsTrigger>
            <TabsTrigger value="ai" onClick={() => setCategoryFilter('ai')}>AI/LLMs</TabsTrigger>
            <TabsTrigger value="ml" onClick={() => setCategoryFilter('ml')}>Machine Learning</TabsTrigger>
            <TabsTrigger value="fullstack" onClick={() => setCategoryFilter('fullstack')}>Full-Stack</TabsTrigger>
            <TabsTrigger value="frontend" onClick={() => setCategoryFilter('frontend')}>Frontend</TabsTrigger>
          </TabsList>
        </Tabs>
        
        {/* Projects Grid */}
        {filteredProjects.length > 0 ?
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible">

            {filteredProjects.map((project) =>
          <motion.div key={project.id} variants={itemVariants}>
                <Card className="h-full flex flex-col bg-card border-border hover:shadow-md transition-all hover:border-accent/50 overflow-hidden group">
                  <CardHeader className="pb-3">
                    <div className="mb-2">{project.icon}</div>
                    <CardTitle className="font-heading">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pb-4 flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 4).map((tag, index) =>
                  <Badge key={index} variant="secondary" className="bg-secondary/30">
                          {tag}
                        </Badge>
                  )}
                      {project.tags.length > 4 &&
                  <Badge variant="outline">+{project.tags.length - 4}</Badge>
                  }
                    </div>
                    
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                      {project.features.slice(0, 3).map((feature, index) =>
                  <li key={index} className="line-clamp-2">{feature}</li>
                  )}
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
          )}
          </motion.div> :

        <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No projects found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
          </div>
        }
      </div>
    </div>);

}