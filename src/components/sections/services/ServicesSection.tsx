'use client';

import React from 'react';
import { Briefcase } from 'lucide-react';
import { services } from '@/content/services';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ServiceCard } from './ServiceCard';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-slate-950/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="Consulting & Technical Leadership"
          icon={Briefcase}
          title="How I can"
          highlightedTitle="help your team succeed"
          description="Whether you're an early-stage startup or an enterprise team, I help plan, build, and optimize web applications that stand up to real production traffic."
          accent="emerald"
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};
