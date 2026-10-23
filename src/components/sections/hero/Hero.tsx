'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileDown, 
  Zap, 
  ShieldCheck, 
  Users, 
  Layers,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';
import { siteConfig, engineeringPrinciples } from '@/config/site';
import { useUIStore } from '@/store/uiStore';
import { useSoundEffect } from '@/hooks/useSoundEffect';
import { CodePreview } from './CodePreview';
import { MetricsGrid } from './MetricsGrid';

const principleIcons = {
  Zap: Zap,
  ShieldCheck: ShieldCheck,
  Layers: Layers,
  Users: Users,
};

export const Hero: React.FC = () => {
  const { openResume } = useUIStore();
  const { playClick } = useSoundEffect();

  return (
    <section id="hero" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Two-Column Grid: Copy + Code Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Subheading, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-xs font-mono text-emerald-300"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{siteConfig.statusBadge}</span>
            </motion.div>

            {/* Main H1 Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]"
            >
              Building fast, resilient web applications &amp;{' '}
              <span className="gradient-text-cyan">design systems</span> that scale.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              {siteConfig.subheading}
            </motion.p>

            {/* Location & Quick Contact Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 pt-1"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{siteConfig.location}</span>
              </div>
              <a 
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{siteConfig.email}</span>
              </a>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{siteConfig.phone}</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                type="button"
                onClick={() => {
                  playClick(800);
                  openResume();
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4" />
                <span>View Master Resume</span>
              </button>

              <a
                href="#projects"
                onClick={() => playClick(600)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel hover:bg-white/10 border border-white/15 text-slate-200 hover:text-white font-semibold text-sm transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </a>
            </motion.div>

          </div>

          {/* Right Column: Code Preview */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              <CodePreview />
            </motion.div>
          </div>

        </div>

        {/* Impact Metrics Row */}
        <MetricsGrid />

        {/* Engineering Principles Grid */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Engineering <span className="gradient-text-cyan">Principles</span> &amp; Focus
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              The core architectural values I apply across frontend codebases, teams, and product systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engineeringPrinciples.map((principle) => {
              const Icon = principleIcons[principle.icon as keyof typeof principleIcons] || Zap;
              return (
                <div
                  key={principle.title}
                  className="glass-card rounded-2xl p-5 border border-white/5 hover:border-cyan-500/30 transition-all space-y-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight">
                    {principle.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {principle.summary}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
