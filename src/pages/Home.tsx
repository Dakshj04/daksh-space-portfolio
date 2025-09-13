import HeroSection from '@/components/HeroSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import EducationSection from '@/components/EducationSection'
import ContactSection from '@/components/ContactSection'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.title = 'Daksh Jain | AI/ML Engineer & Full-Stack Developer'
  }, [])

  return (
    <div className="flex flex-col">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </div>
  )
}