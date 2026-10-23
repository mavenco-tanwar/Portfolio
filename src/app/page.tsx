import React from 'react';
import { 
  Hero, 
  ExperienceSection, 
  SkillsSection, 
  ProjectsSection, 
  ServicesSection, 
  ResumeSection, 
  ContactSection 
} from '@/components/sections';
import { Footer } from '@/components/layout';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
