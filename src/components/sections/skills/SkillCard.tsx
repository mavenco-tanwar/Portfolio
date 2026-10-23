'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Skill } from '@/types';
import { cn } from '@/lib/utils';
import { useSoundEffect } from '@/hooks/useSoundEffect';

interface SkillCardProps {
  skill: Skill;
  isSelected: boolean;
  onSelect: () => void;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  isSelected,
  onSelect,
}) => {
  const { playClick } = useSoundEffect();

  const handleClick = () => {
    playClick(750);
    onSelect();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        'w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group',
        isSelected
          ? 'glass-card border-violet-500/50 bg-violet-950/20 shadow-lg shadow-violet-500/10'
          : 'glass-panel border-white/5 hover:border-white/15 hover:bg-white/5'
      )}
    >
      <div className="space-y-1.5 flex-1 pr-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors">
            {skill.name}
          </span>
          <span className="text-[11px] font-mono text-violet-400 font-semibold">
            {skill.experienceYears}y exp
          </span>
        </div>

        {/* Level Progress Bar */}
        <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full transition-all duration-500"
            style={{ width: `${skill.level}%` }}
          />
        </div>
      </div>

      <ChevronRight
        className={cn(
          'w-4 h-4 transition-transform shrink-0',
          isSelected ? 'text-violet-400 translate-x-1' : 'text-slate-500 group-hover:text-slate-300'
        )}
      />
    </button>
  );
};
