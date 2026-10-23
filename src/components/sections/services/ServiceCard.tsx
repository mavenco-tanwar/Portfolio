'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Palette, Cpu, CheckCircle2 } from 'lucide-react';
import { Service } from '@/types';

const iconMap = {
  Layers: Layers,
  Zap: Zap,
  Palette: Palette,
  Cpu: Cpu,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const Icon = iconMap[service.icon as keyof typeof iconMap] || Layers;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card rounded-2xl p-7 flex flex-col justify-between border border-white/10 hover:border-emerald-500/40 transition-all duration-300 group"
    >
      <div>
        {/* Top Icon & Index */}
        <div className="flex items-center justify-between pb-4">
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-105 transition-transform">
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono text-slate-500 font-bold">
            0{index + 1}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
          {service.title}
        </h3>
        <p className="text-xs font-mono text-emerald-400 font-semibold mt-1 mb-3">
          {service.tagline}
        </p>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Deliverables Checklist */}
        <div className="space-y-2.5 pt-4 border-t border-white/10">
          <span className="text-xs font-mono font-semibold text-slate-300 block">
            What I Deliver:
          </span>
          {service.deliverables.map((d, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{d}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
