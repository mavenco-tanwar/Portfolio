'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  ShieldCheck, 
  Search, 
  Sparkles, 
  Lock, 
  CheckCircle,
  RefreshCw 
} from 'lucide-react';
import { useSoundEffect } from '@/hooks/useSoundEffect';

interface CandidateProfile {
  id: string;
  name: string;
  currentRole: string;
  matchScore: number;
  experienceYears: number;
  topSkills: string[];
  salaryBand: string;
  recommendationNote: string;
  tenantVerified: boolean;
}

const tenantData: Record<string, { logo: string; color: string; candidates: CandidateProfile[] }> = {
  'EEI Global': {
    logo: '⚡',
    color: 'from-amber-500 to-orange-600',
    candidates: [
      {
        id: 'c1',
        name: 'Sarah Chen',
        currentRole: 'Staff Frontend Architect',
        matchScore: 99,
        experienceYears: 7,
        topSkills: ['Next.js 15', 'TypeScript', 'GraphQL', 'Micro-Frontends'],
        salaryBand: '$165k - $185k',
        recommendationNote: 'Architected high-concurrency SCADA dashboard workflows; proven zero cross-tenant data leakage.',
        tenantVerified: true,
      },
      {
        id: 'c2',
        name: 'Marcus Vance',
        currentRole: 'Senior React / Systems Engineer',
        matchScore: 94,
        experienceYears: 6,
        topSkills: ['React 19', 'Zustand', 'WebSockets', 'WCAG 2.1 AA'],
        salaryBand: '$140k - $160k',
        recommendationNote: 'Strong background in low-latency industrial dashboards and design system tokens.',
        tenantVerified: true,
      },
    ],
  },
  'Eight8Ate Enterprise': {
    logo: '🍽️',
    color: 'from-rose-500 to-red-600',
    candidates: [
      {
        id: 'c3',
        name: 'Elena Rostova',
        currentRole: 'Lead UI/UX Systems Developer',
        matchScore: 98,
        experienceYears: 6,
        topSkills: ['Tailwind CSS', 'Atomic Design', 'Next.js SSR', 'TanStack Query'],
        salaryBand: '$150k - $170k',
        recommendationNote: 'Unified 12 consumer dining brand portals into 1 shared design system repository.',
        tenantVerified: true,
      },
      {
        id: 'c4',
        name: 'Devin Thorne',
        currentRole: 'Senior Next.js Developer',
        matchScore: 92,
        experienceYears: 5,
        topSkills: ['TypeScript', 'Next.js 15', 'Jest / RTL', 'Edge Middleware'],
        salaryBand: '$135k - $155k',
        recommendationNote: 'Reduced franchise portal bundle payload by 42% through aggressive tree-shaking and ISR.',
        tenantVerified: true,
      },
    ],
  },
  'TalentCorp Malaysia': {
    logo: '🇲🇾',
    color: 'from-cyan-500 to-blue-600',
    candidates: [
      {
        id: 'c5',
        name: 'Ahmad Farhan',
        currentRole: 'Senior Frontend Accessibility Specialist',
        matchScore: 97,
        experienceYears: 6,
        topSkills: ['WCAG 2.1 AA', 'React.js', 'Next.js App Router', 'WAI-ARIA'],
        salaryBand: 'RM 14,000 - RM 17,000 / mo',
        recommendationNote: 'Led national LMS platform accessibility audit compliant with MDEC government mandates.',
        tenantVerified: true,
      },
      {
        id: 'c6',
        name: 'Nurul Izzah',
        currentRole: 'Full-Stack Next.js & Laravel Engineer',
        matchScore: 95,
        experienceYears: 5,
        topSkills: ['Next.js', 'Laravel REST', 'TanStack Query', 'Tailwind CSS'],
        salaryBand: 'RM 12,000 - RM 15,000 / mo',
        recommendationNote: 'Spearheaded real-time candidate job recommendation feeds for Ministry of Human Resources.',
        tenantVerified: true,
      },
    ],
  },
};

export const HcmSimulation: React.FC = () => {
  const [tenant, setTenant] = useState<'EEI Global' | 'Eight8Ate Enterprise' | 'TalentCorp Malaysia'>('EEI Global');
  const [role, setRole] = useState<'Platform Admin' | 'Senior Recruiter' | 'Hiring Manager'>('Senior Recruiter');
  const [searchTerm, setSearchTerm] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamedText, setStreamedText] = useState('');
  const { playClick, playSuccess } = useSoundEffect();

  const handleTenantChange = (t: typeof tenant) => {
    playClick(550);
    setTenant(t);
  };

  const handleRoleChange = (r: typeof role) => {
    playClick(600);
    setRole(r);
  };

  const triggerAiSearch = () => {
    playClick(850);
    setIsStreaming(true);
    setStreamedText('');

    const response = `[${tenant}] Query dispatched via Edge Middleware... RBAC verified for role: ${role}. Analyzing candidate pool against tenant skills index... Returning top verified matches.`;
    let i = 0;
    const interval = setInterval(() => {
      setStreamedText(response.slice(0, i + 1));
      i++;
      if (i >= response.length) {
        clearInterval(interval);
        setIsStreaming(false);
        playSuccess();
      }
    }, 18);
  };

  const activeCandidates = tenantData[tenant].candidates.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.currentRole.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.topSkills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="rounded-2xl glass-panel border border-cyan-500/30 overflow-hidden shadow-2xl bg-slate-950/90">
      
      {/* Simulation Browser Bar */}
      <div className="px-4 py-3 bg-slate-900/80 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>

          <div className="flex items-center gap-2 bg-slate-950/70 border border-white/10 px-3 py-1 rounded-lg text-xs font-mono text-slate-300">
            <span className="text-cyan-400">https://</span>
            <span className="font-bold text-white">{tenant.toLowerCase().replace(/[^a-z0-9]/g, '')}.insightaccess.com</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Edge Routed
            </span>
          </div>
        </div>

        {/* Tenant Switching Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-white/5 text-xs font-mono">
          <span className="text-slate-500 px-2 text-[10px] hidden sm:inline">Tenant:</span>
          {(['EEI Global', 'Eight8Ate Enterprise', 'TalentCorp Malaysia'] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => handleTenantChange(t)}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                tenant === t
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {t.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Control Ribbon: Role selector + Search + AI match trigger */}
      <div className="p-4 sm:p-6 border-b border-white/5 bg-slate-900/30 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Role switcher */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1 shrink-0">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>RBAC:</span>
          </span>
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-white/10 w-full sm:w-auto">
            {(['Platform Admin', 'Senior Recruiter', 'Hiring Manager'] as const).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => handleRoleChange(r)}
                className={`text-[11px] font-mono px-2.5 py-1 rounded-lg transition-all ${
                  role === r
                    ? 'bg-white/15 text-white font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {r.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Search input and AI stream trigger */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-60">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search talent..."
              className="w-full bg-slate-950 border border-white/10 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
            />
          </div>

          <button
            type="button"
            onClick={triggerAiSearch}
            disabled={isStreaming}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs transition-all disabled:opacity-50 shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isStreaming ? 'Streaming...' : 'Simulate SSE'}</span>
          </button>
        </div>

      </div>

      {/* Streaming Log Banner if active */}
      {streamedText && (
        <div className="px-4 py-2.5 bg-cyan-950/40 border-b border-cyan-500/20 text-xs font-mono text-cyan-300 flex items-center gap-2">
          <RefreshCw className={`w-3.5 h-3.5 shrink-0 ${isStreaming ? 'animate-spin' : ''}`} />
          <span className="truncate">{streamedText}</span>
        </div>
      )}

      {/* Candidate Cards Grid */}
      <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {activeCandidates.map((c) => (
          <div
            key={c.id}
            className="p-4 rounded-xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 transition-all space-y-3"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-white text-sm">{c.name}</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                </div>
                <p className="text-xs text-cyan-300 mt-0.5">{c.currentRole}</p>
              </div>

              <div className="text-right">
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {c.matchScore}% Match
                </span>
                <span className="block text-[10px] text-slate-400 font-mono mt-1">
                  {c.experienceYears}y experience
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {c.recommendationNote}
            </p>

            {/* Compensation & RBAC restriction */}
            <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs font-mono">
              <span className="text-slate-400">Compensation:</span>
              {role === 'Hiring Manager' ? (
                <span className="flex items-center gap-1 text-slate-500">
                  <Lock className="w-3 h-3" />
                  <span>Hidden by RBAC</span>
                </span>
              ) : (
                <span className="text-white font-semibold">{c.salaryBand}</span>
              )}
            </div>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-1 pt-1">
              {c.topSkills.map((skill) => (
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
  );
};
