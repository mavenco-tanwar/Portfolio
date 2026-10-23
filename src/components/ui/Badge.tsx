import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'cyan' | 'violet' | 'emerald' | 'amber' | 'neutral';
  size?: 'sm' | 'md';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'cyan',
  size = 'sm',
  className,
  children,
  ...props
}) => {
  const variantStyles = {
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    violet: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    amber: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    neutral: 'bg-white/5 text-slate-400 border-white/10',
  };

  const sizeStyles = {
    sm: 'text-[10px] font-mono px-2 py-0.5',
    md: 'text-xs font-mono px-2.5 py-1',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border font-medium transition-colors',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
