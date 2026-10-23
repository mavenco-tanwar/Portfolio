import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow: string;
  icon?: LucideIcon;
  title: string;
  highlightedTitle?: string;
  description?: string;
  align?: 'left' | 'center';
  accent?: 'cyan' | 'violet' | 'emerald';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  icon: Icon,
  title,
  highlightedTitle,
  description,
  align = 'center',
  accent = 'cyan',
  className,
}) => {
  const accentClasses = {
    cyan: {
      badge: 'border-cyan-500/30 text-cyan-300',
      gradient: 'gradient-text-cyan',
    },
    violet: {
      badge: 'border-violet-500/30 text-violet-300',
      gradient: 'gradient-text-violet',
    },
    emerald: {
      badge: 'border-emerald-500/30 text-emerald-300',
      gradient: 'gradient-text-emerald',
    },
  };

  const selectedAccent = accentClasses[accent];

  return (
    <div
      className={cn(
        'max-w-3xl mb-16 space-y-4',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      <div
        className={cn(
          'inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border text-xs font-mono',
          selectedAccent.badge
        )}
      >
        {Icon && <Icon className="w-3.5 h-3.5" />}
        <span>{eyebrow}</span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
        {title}{' '}
        {highlightedTitle && (
          <span className={selectedAccent.gradient}>{highlightedTitle}</span>
        )}
      </h2>

      {description && (
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
