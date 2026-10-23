'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Volume2, 
  VolumeX, 
  Moon, 
  Sparkles, 
  Sun, 
  Command, 
  FileText, 
  Menu, 
  X
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { useUIStore } from '@/store/uiStore';
import { useSoundEffect } from '@/hooks/useSoundEffect';
import { siteConfig, navigationLinks } from '@/config/site';

export const Navbar: React.FC = () => {
  const { 
    theme, 
    setTheme, 
    soundEnabled, 
    toggleSound, 
    setCommandPaletteOpen,
    openResume 
  } = useUIStore();

  const { playClick } = useSoundEffect();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const navHrefList = navigationLinks.map((link) => link.href);
      const sections = navHrefList.map((href) => document.querySelector(href) as HTMLElement | null);
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveHash(navHrefList[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cycleTheme = () => {
    playClick(600);
    if (theme === 'midnight') setTheme('cyber-violet');
    else if (theme === 'cyber-violet') setTheme('high-contrast-light');
    else setTheme('midnight');
  };

  const handleNavClick = (href: string) => {
    playClick(650);
    setActiveHash(href);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip to Main Content Link for WCAG 2.1 AA */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-cyan-500 text-slate-950 font-bold rounded-lg shadow-xl"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav 
            className="flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl glass-panel shadow-2xl transition-all border border-white/10"
            aria-label="Primary Navigation"
          >
            {/* Identity / Logo */}
            <a 
              href="#hero" 
              onClick={() => handleNavClick('#hero')}
              className="flex items-center gap-3 group"
              aria-label={`${siteConfig.name} Home`}
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-mono font-bold text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                AT
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-sm tracking-tight text-white block group-hover:text-cyan-300 transition-colors">
                  {siteConfig.name}
                </span>
                <span className="text-[11px] font-mono text-cyan-400 block -mt-0.5">
                  Senior Frontend Engineer
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5">
              {navigationLinks.map((link) => {
                const isActive = activeHash === link.href;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-cyan-500/20 text-cyan-300 shadow-sm border border-cyan-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Utility Controls & CTA */}
            <div className="flex items-center gap-2">
              {/* Command Palette Trigger */}
              <button
                type="button"
                onClick={() => {
                  playClick(700);
                  setCommandPaletteOpen(true);
                }}
                className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors"
                title="Open Command Palette (⌘K)"
                aria-label="Open Command Palette"
              >
                <Command className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[11px] text-slate-400">⌘K</span>
              </button>

              {/* Sound Toggle */}
              <button
                type="button"
                onClick={() => {
                  toggleSound();
                  playClick(800);
                }}
                className={`p-2 rounded-xl transition-colors border ${
                  soundEnabled
                    ? 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30'
                    : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
                }`}
                title={soundEnabled ? 'Mute UI audio' : 'Enable subtle UI audio'}
                aria-label={soundEnabled ? 'Mute audio' : 'Enable audio'}
              >
                {soundEnabled ? (
                  <Volume2 className="w-4 h-4" />
                ) : (
                  <VolumeX className="w-4 h-4" />
                )}
              </button>

              {/* Theme Cycle Button */}
              <button
                type="button"
                onClick={cycleTheme}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                title={`Current Theme: ${theme}. Click to switch.`}
                aria-label="Switch Theme"
              >
                {theme === 'midnight' && <Moon className="w-4 h-4 text-cyan-400" />}
                {theme === 'cyber-violet' && <Sparkles className="w-4 h-4 text-violet-400" />}
                {theme === 'high-contrast-light' && <Sun className="w-4 h-4 text-amber-400" />}
              </button>

              {/* Quick Resume Modal Button */}
              <button
                type="button"
                onClick={() => {
                  playClick(750);
                  openResume();
                }}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-semibold text-xs transition-all shadow-md shadow-cyan-500/20"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => {
                  playClick(500);
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                className="lg:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6 mt-2"
            >
              <div className="glass-panel p-4 rounded-2xl border border-white/10 shadow-2xl space-y-2">
                <div className="grid grid-cols-2 gap-1.5">
                  {navigationLinks.map((link) => {
                    const isActive = activeHash === link.href;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={() => handleNavClick(link.href)}
                        className={`px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                          isActive
                            ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        {link.label}
                      </a>
                    );
                  })}
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <a
                      href={siteConfig.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={siteConfig.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openResume();
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Resume</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
