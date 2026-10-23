'use client';

import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  Globe2, 
  Zap, 
  BrainCircuit, 
  Code2, 
  Copy, 
  Check, 
  Terminal, 
  Search 
} from 'lucide-react';
import { skills } from '@/content/skills';
import { Skill } from '@/types';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SkillCard } from './SkillCard';
import { useSoundEffect } from '@/hooks/useSoundEffect';

const categories = [
  { id: 'all', label: 'All Skills', icon: Cpu },
  { id: 'core', label: 'Core & Frameworks', icon: Code2 },
  { id: 'ui', label: 'UI & Design Systems', icon: Layers },
  { id: 'api', label: 'API & Data', icon: Globe2 },
  { id: 'perf', label: 'Performance & Testing', icon: Zap },
  { id: 'data-ai', label: 'Data Vis & AI', icon: BrainCircuit },
] as const;

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'core' | 'ui' | 'api' | 'perf' | 'data-ai'>('all');
  const [selectedSkill, setSelectedSkill] = useState<Skill>(skills[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const { playClick, playSuccess } = useSoundEffect();

  const filteredSkills = skills.filter((skill) => {
    const matchesTab = activeTab === 'all' || skill.category === activeTab;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.featuredSnippet.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleCopy = () => {
    playSuccess();
    navigator.clipboard.writeText(selectedSkill.featuredSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTabChange = (tabId: typeof activeTab) => {
    playClick(650);
    setActiveTab(tabId);
  };

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      {/* Anchor for backward compatibility with #arsenal */}
      <div id="arsenal" className="absolute -top-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="Technical Stack & Architecture"
          icon={Cpu}
          title="Core"
          highlightedTitle="Tech Stack & Patterns"
          description="Click any skill below to inspect real production TypeScript patterns, custom React hooks, and design token implementations."
          accent="violet"
        />

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl glass-panel border border-white/10 w-full md:w-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleTabChange(cat.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30 font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills & code..."
              className="w-full bg-slate-900/60 border border-white/10 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50"
            />
          </div>
        </div>

        {/* Two-Column Grid: Skills List + Live Code Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Skill List Cards */}
          <div className="lg:col-span-5 space-y-2.5 max-h-[640px] overflow-y-auto pr-1">
            {filteredSkills.map((skill) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                isSelected={selectedSkill.name === skill.name}
                onSelect={() => setSelectedSkill(skill)}
              />
            ))}

            {filteredSkills.length === 0 && (
              <div className="p-8 text-center text-xs text-slate-500 glass-panel rounded-xl">
                No matching skills found.
              </div>
            )}
          </div>

          {/* Right Column: Code Inspector Window */}
          <div className="lg:col-span-7 sticky top-24">
            <div className="rounded-2xl glass-panel border border-violet-500/30 overflow-hidden shadow-2xl bg-slate-950/90">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-slate-900/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-300 font-semibold flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-violet-400" />
                    <span>{selectedSkill.featuredSnippet.title}</span>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Sub-bar Description */}
              <div className="px-4 py-2 border-b border-white/5 bg-slate-900/40 text-xs text-slate-400 font-mono">
                {selectedSkill.featuredSnippet.description}
              </div>

              {/* Code Preformatted Block */}
              <div className="p-4 sm:p-6 text-xs font-mono overflow-x-auto leading-relaxed text-slate-300 max-h-[460px]">
                <pre>
                  <code>{selectedSkill.featuredSnippet.code}</code>
                </pre>
              </div>

              {/* Window Footer */}
              <div className="px-4 py-2 border-t border-white/5 bg-slate-900/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Language: {selectedSkill.featuredSnippet.language}</span>
                <span className="text-violet-400">Production Code</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
