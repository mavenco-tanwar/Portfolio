'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle2, Eye } from 'lucide-react';
import { resumeData } from '@/content/resume';
import { useUIStore } from '@/store/uiStore';
import { useSoundEffect } from '@/hooks/useSoundEffect';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';

export const ResumeSection: React.FC = () => {
  const { openResume } = useUIStore();
  const { playClick, playSuccess } = useSoundEffect();

  return (
    <section id="resume" className="relative py-24 sm:py-32">
      {/* Anchor for backward compatibility with #resumes */}
      <div id="resumes" className="absolute -top-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="Curriculum Vitae"
          icon={FileText}
          title="Curriculum Vitae &amp;"
          highlightedTitle="Resume"
          description="Detailed breakdown of my 5+ years of enterprise engineering experience — Next.js App Router scale, multi-tenant SaaS architecture, design systems, Core Web Vitals profiling, and team mentorship."
          accent="cyan"
        />

        {/* Master Resume Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl glass-panel border border-cyan-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Header / Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge variant="cyan" size="md">
                    {resumeData.badge}
                  </Badge>
                  <span className="text-xs font-mono text-slate-400">
                    PDF • {resumeData.fileSize} • {resumeData.lastUpdated}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Mohammed Ammar Tanwar
                </h3>
                <p className="text-xs sm:text-sm text-cyan-300 font-medium mt-0.5">
                  {resumeData.role}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    playClick(750);
                    openResume();
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl glass-panel hover:bg-white/10 border border-white/15 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Preview in Browser</span>
                </button>

                <a
                  href={resumeData.pdfUrl}
                  download="Mohammed_Ammar_Tanwar_Resume.pdf"
                  onClick={playSuccess}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs transition-all shadow-md shadow-cyan-500/20"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

            {/* Summary */}
            <div className="py-6 border-b border-white/10">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                Professional Profile
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {resumeData.summary}
              </p>
            </div>

            {/* Key Highlights */}
            <div className="py-6 border-b border-white/10">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                Core Career Highlights
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {resumeData.keyHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Competencies Grid */}
            <div className="pt-6">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-4">
                Verified Skill Competencies
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {resumeData.competencies.map((comp) => (
                  <div key={comp.category} className="p-3.5 rounded-xl bg-slate-900/50 border border-white/5">
                    <span className="text-xs font-bold text-white block mb-2">
                      {comp.category}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {comp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
