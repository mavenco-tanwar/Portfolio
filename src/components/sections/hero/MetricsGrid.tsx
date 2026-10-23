'use client';

import React, { useState, useEffect } from 'react';
import { impactMetrics } from '@/config/site';

export const MetricsGrid: React.FC = () => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const targets = impactMetrics.map((m) => m.value);
    const intervals = targets.map((target, idx) => {
      const step = Math.ceil(target / 25);
      return setInterval(() => {
        setCounts((prev) => {
          const next = [...prev];
          if (next[idx] < target) {
            next[idx] = Math.min(target, next[idx] + step);
          }
          return next;
        });
      }, 40);
    });

    return () => intervals.forEach((i) => clearInterval(i));
  }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10">
      {impactMetrics.map((metric, idx) => (
        <div
          key={metric.label}
          className="glass-card rounded-2xl p-4 sm:p-5 border border-white/5 hover:border-cyan-500/30 transition-all"
        >
          <div className="flex items-baseline gap-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {counts[idx]}
            </span>
            <span className="text-xl sm:text-2xl font-bold text-cyan-400">
              {metric.suffix}
            </span>
          </div>
          <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
            {metric.label}
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5">
            {metric.sublabel}
          </div>
        </div>
      ))}
    </div>
  );
};
