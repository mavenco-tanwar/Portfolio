'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Command, 
  Search, 
  FileText, 
  Compass, 
  Sparkles, 
  Moon, 
  Sun, 
  Volume2, 
  VolumeX, 
  Mail, 
  Phone, 
  X
} from 'lucide-react';
import { useUIStore } from '@/store/uiStore';
import { useSoundEffect } from '@/hooks/useSoundEffect';
import { useScrollLock } from '@/hooks/useScrollLock';
import { siteConfig } from '@/config/site';

interface CommandItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Resume' | 'Preferences' | 'Contact';
  icon: React.ElementType;
  action: () => void;
  shortcut?: string;
}

export const CommandPalette: React.FC = () => {
  const { 
    isCommandPaletteOpen, 
    setCommandPaletteOpen, 
    openResume, 
    setTheme, 
    toggleSound,
    soundEnabled
  } = useUIStore();

  const { playClick } = useSoundEffect();
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useScrollLock(isCommandPaletteOpen);

  // Global ⌘K / Ctrl+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        playClick(700);
        setCommandPaletteOpen(!isCommandPaletteOpen);
      }
      if (e.key === 'Escape' && isCommandPaletteOpen) {
        setCommandPaletteOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCommandPaletteOpen, setCommandPaletteOpen, playClick]);

  useEffect(() => {
    if (isCommandPaletteOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setSearch('');
    }
  }, [isCommandPaletteOpen]);

  const commands: CommandItem[] = [
    {
      id: 'nav-hero',
      title: 'Jump to Overview & Bio',
      category: 'Navigation',
      icon: Compass,
      action: () => { window.location.hash = '#hero'; },
    },
    {
      id: 'nav-experience',
      title: 'Jump to Career Experience',
      category: 'Navigation',
      icon: Compass,
      action: () => { window.location.hash = '#experience'; },
    },
    {
      id: 'nav-skills',
      title: 'Jump to Skills & Code Patterns',
      category: 'Navigation',
      icon: Compass,
      action: () => { window.location.hash = '#skills'; },
    },
    {
      id: 'nav-projects',
      title: 'Jump to Featured Projects',
      category: 'Navigation',
      icon: Compass,
      action: () => { window.location.hash = '#projects'; },
    },
    {
      id: 'nav-services',
      title: 'Jump to Services & Consulting',
      category: 'Navigation',
      icon: Compass,
      action: () => { window.location.hash = '#services'; },
    },
    {
      id: 'nav-resume',
      title: 'Jump to Resume Section',
      category: 'Navigation',
      icon: Compass,
      action: () => { window.location.hash = '#resume'; },
    },
    {
      id: 'nav-contact',
      title: 'Jump to Contact',
      category: 'Navigation',
      icon: Compass,
      action: () => { window.location.hash = '#contact'; },
    },
    {
      id: 'resume-preview',
      title: 'Preview Master Enterprise Resume (PDF)',
      category: 'Resume',
      icon: FileText,
      action: () => { openResume(); },
      shortcut: 'PDF',
    },
    {
      id: 'theme-midnight',
      title: 'Set Midnight Theme (Default Dark)',
      category: 'Preferences',
      icon: Moon,
      action: () => { setTheme('midnight'); },
    },
    {
      id: 'theme-violet',
      title: 'Set Cyber Violet Theme',
      category: 'Preferences',
      icon: Sparkles,
      action: () => { setTheme('cyber-violet'); },
    },
    {
      id: 'theme-light',
      title: 'Set High-Contrast Light Theme',
      category: 'Preferences',
      icon: Sun,
      action: () => { setTheme('high-contrast-light'); },
    },
    {
      id: 'toggle-sound',
      title: soundEnabled ? 'Mute Procedural Audio' : 'Enable Procedural Audio',
      category: 'Preferences',
      icon: soundEnabled ? VolumeX : Volume2,
      action: () => { toggleSound(); },
    },
    {
      id: 'contact-email',
      title: `Copy Email: ${siteConfig.email}`,
      category: 'Contact',
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText(siteConfig.email);
      },
    },
    {
      id: 'contact-phone',
      title: `Copy Phone: ${siteConfig.phone}`,
      category: 'Contact',
      icon: Phone,
      action: () => {
        navigator.clipboard.writeText(siteConfig.phone);
      },
    },
  ];

  const filtered = commands.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase()) ||
    c.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (cmd: CommandItem) => {
    playClick(750);
    cmd.action();
    setCommandPaletteOpen(false);
  };

  const handleKeyDownList = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        handleSelect(filtered[selectedIndex]);
      }
    }
  };

  return (
    <AnimatePresence>
      {isCommandPaletteOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6"
          role="dialog"
          aria-modal="true"
          aria-label="Command Palette"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCommandPaletteOpen(false)}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.15 }}
            className="relative w-full max-w-xl rounded-2xl glass-panel border border-cyan-500/30 bg-slate-950/95 shadow-2xl overflow-hidden z-10"
          >
            {/* Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
              <Search className="w-5 h-5 text-cyan-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDownList}
                placeholder="Type a command or jump to section..."
                className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setCommandPaletteOpen(false)}
                className="p-1 rounded text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 divide-y divide-white/5">
              {filtered.length === 0 ? (
                <div className="py-8 text-center text-xs text-slate-500">
                  No matching commands found.
                </div>
              ) : (
                filtered.map((cmd, idx) => {
                  const Icon = cmd.icon;
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={cmd.id}
                      type="button"
                      onClick={() => handleSelect(cmd)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-xs transition-colors ${
                        isSelected
                          ? 'bg-cyan-500/15 text-cyan-300 font-medium'
                          : 'text-slate-300 hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                        <span>{cmd.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/5">
                          {cmd.category}
                        </span>
                        {cmd.shortcut && (
                          <span className="text-[10px] font-mono text-cyan-400 font-bold px-1.5 py-0.5 rounded border border-cyan-500/30">
                            {cmd.shortcut}
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Bottom Keyboard Hints */}
            <div className="px-4 py-2 border-t border-white/5 bg-slate-900/50 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-3">
                <span>↑↓ navigate</span>
                <span>↵ select</span>
                <span>esc close</span>
              </div>
              <span className="text-cyan-400/80">Command Palette</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
