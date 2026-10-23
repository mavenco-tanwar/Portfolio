'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { Experience } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { useSoundEffect } from '@/hooks/useSoundEffect';

interface ExperienceCardProps {
  experience: Experience;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  isExpanded,
  onToggle,
  index,
}) => {
  const isEven = index % 2 === 0;
  const isAcademic = experience.id === 'academics';
  const { playClick } = useSoundEffect();

  const handleCardClick = () => {
    playClick(600);
    onToggle();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`relative flex flex-col sm:flex-row items-start ${
        isEven ? 'sm:flex-row-reverse' : ''
      }`}
    >
      {/* Central Node Badge */}
      <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
        <div
          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-transform duration-300 ${
            experience.isCurrent
              ? 'border-cyan-400 bg-cyan-950 text-cyan-300 shadow-[0_0_15px_#38bdf8]'
              : 'border-white/20 bg-slate-900 text-slate-300'
          }`}
        >
          {isAcademic ? (
            <GraduationCap className="w-4 h-4" />
          ) : (
            <Briefcase className="w-4 h-4" />
          )}
        </div>
      </div>

      {/* Main Card Content */}
      <div className="w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0">
        <div
          onClick={handleCardClick}
          className="glass-card rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer group"
        >
          {/* Card Header */}
          <div className="flex items-start justify-between gap-2 mb-3">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-xs font-mono font-bold text-cyan-400">
                  {experience.company}
                </span>
                {experience.isCurrent && (
                  <Badge variant="cyan" size="sm">Current Role</Badge>
                )}
                <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                  {experience.type}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                {experience.role}
              </h3>
            </div>

            <button
              type="button"
              className="p-1 rounded text-slate-400 hover:text-white transition-colors shrink-0"
              aria-label={isExpanded ? 'Collapse card' : 'Expand card'}
            >
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-cyan-400" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Meta: Period & Location */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-4 pb-3 border-b border-white/5">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>{experience.period}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{experience.location}</span>
            </span>
          </div>

          {/* Summary */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
            {experience.description}
          </p>

          {/* Expandable Highlights */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 pt-2 overflow-hidden"
              >
                {experience.highlights.map((hl, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{hl.project}</span>
                      </span>
                    </div>

                    <div className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 inline-block font-semibold">
                      Impact: {hl.impact}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {hl.details}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {hl.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Tech Stack Tags */}
          <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5 items-center">
            {experience.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/5 text-cyan-300/80 border border-cyan-500/15"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  );
};
