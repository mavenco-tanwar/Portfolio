'use client';

import React from 'react';
import { Rocket } from 'lucide-react';
import { projects } from '@/content/projects';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProjectCard } from './ProjectCard';
import { HcmSimulation } from './HcmSimulation';

export const ProjectsSection: React.FC = () => {
  const interactiveProject = projects.find((p) => p.isInteractiveDemo);
  const standardProjects = projects.filter((p) => !p.isInteractiveDemo);

  return (
    <section id="projects" className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="Featured Work & Architecture"
          icon={Rocket}
          title="Production"
          highlightedTitle="Projects & Architectures"
          description="A selection of production systems I've built or led — from multi-tenant SaaS dashboards to high-traffic EdTech platforms and sub-second web experiences."
          accent="cyan"
        />

        {/* Featured Interactive Simulation */}
        {interactiveProject && (
          <div className="mb-16">
            <HcmSimulation />
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {standardProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};
