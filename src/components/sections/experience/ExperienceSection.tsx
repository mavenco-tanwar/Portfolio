'use client';

import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';
import { experiences } from '@/content/experience';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ExperienceCard } from './ExperienceCard';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('cxs-analytics');

  const handleToggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="relative py-24 sm:py-32 border-t border-white/5 bg-slate-950/40">
      {/* Anchor for backward compatibility with #career */}
      <div id="career" className="absolute -top-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="Career Journey & Experience"
          icon={Briefcase}
          title="5+ Years of"
          highlightedTitle="Hands-On Engineering"
          description="From monolithic Next.js migrations to high-concurrency multi-tenant platforms serving enterprise conglomerates and national workforce systems."
          accent="cyan"
        />

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Track Line */}
          <div
            className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-indigo-500 to-violet-600/30 pointer-events-none"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
                isExpanded={expandedId === exp.id}
                onToggle={() => handleToggle(exp.id)}
                index={index}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
