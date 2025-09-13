import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar1 as Calendar, Award } from 'lucide-react';

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
}];


const certifications = [
"Oracle Cloud Infrastructure 2025 Certified Generative AI Professional - Oracle",
"Introduction to Generative AI - Google Cloud",
"SQL for Data Science - UC Davis",
"Building Database Applications in PHP - University of Michigan",
"Linux Fundamentals - LearnQuest",
"Introduction to Java - LearnQuest",
"Object-Oriented Programming with Java - LearnQuest",
"SQL - Coursera",
"Data Science Program - Physics Wallah"];


export default function EducationSection() {
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
    <section id="education" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="text-accent">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional certifications that have shaped my expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-accent" />
              Education
            </h3>
            
            <motion.div
              className="space-y-6 relative before:absolute before:inset-y-0 before:left-[17px] before:w-0.5 before:bg-border"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}>

              {educationData.map((item) =>
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
                      {item.grade &&
                    <p className="text-sm text-accent mt-1">{item.grade}</p>
                    }
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </motion.div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-accent" />
              Certifications
            </h3>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border h-full">
              <CardContent className="p-6">
                <motion.ul
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}>

                  {certifications.map((cert, index) =>
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3">

                      <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Award className="h-3.5 w-3.5 text-accent" />
                      </div>
                      <span>{cert}</span>
                    </motion.li>
                  )}
                </motion.ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>);

}