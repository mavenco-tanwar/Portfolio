'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { useSoundEffect } from '@/hooks/useSoundEffect';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { playClick } = useSoundEffect();

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card rounded-2xl p-6 flex flex-col justify-between border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group"
    >
      <div>
        {/* Metric Badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.metrics.slice(0, 2).map((metric) => (
            <Badge key={metric} variant="cyan" size="sm">
              {metric}
            </Badge>
          ))}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-slate-400 font-medium mt-1 mb-3">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Key Architectural Highlights */}
        <div className="space-y-2 py-3 border-t border-white/10">
          <span className="text-[11px] font-mono font-semibold text-slate-300 block">
            Architecture Highlights:
          </span>
          {project.architectureHighlights.map((hl, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span>{hl}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tags and Live URL */}
      <div className="pt-4 border-t border-white/10 mt-4 space-y-4">
        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClick(850)}
            className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white group-hover:border-cyan-400/40 transition-all"
          >
            <span>Visit Live Website</span>
            <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
          </a>
        )}
      </div>
    </motion.div>
  );
};
