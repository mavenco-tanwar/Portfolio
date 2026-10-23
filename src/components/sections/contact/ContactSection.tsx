'use client';

import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Copy, 
  Check, 
  MessageSquare 
} from 'lucide-react';
import { siteConfig } from '@/config/site';
import { useSoundEffect } from '@/hooks/useSoundEffect';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ContactForm } from './ContactForm';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const { playSuccess } = useSoundEffect();

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    playSuccess();
    navigator.clipboard.writeText(siteConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    playSuccess();
    navigator.clipboard.writeText(siteConfig.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="Get In Touch"
          icon={Mail}
          title="Let's build something"
          highlightedTitle="exceptional together"
          description="Available for full-time Senior Frontend roles, architecture consultations, or technical advisory. Feel free to send a message or connect directly."
          accent="cyan"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Live Timezone Card */}
            <div className="glass-card rounded-2xl p-5 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold">
                <Clock className="w-4 h-4" />
                <span>Current Local Time (IST)</span>
              </div>
              <div className="text-2xl font-bold font-mono text-white tracking-wider">
                {currentTime || 'Loading...'}
              </div>
              <p className="text-xs text-slate-400">
                {siteConfig.timezone}
              </p>
            </div>

            {/* Email Card with 1-click copy */}
            <div className="glass-card rounded-2xl p-5 border border-white/10 flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-slate-400 block">Email Address</span>
                <span className="text-xs font-bold text-white block">{siteConfig.email}</span>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card with 1-click copy */}
            <div className="glass-card rounded-2xl p-5 border border-white/10 flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-slate-400 block">Phone / WhatsApp</span>
                <span className="text-xs font-bold text-white block">{siteConfig.phone}</span>
              </div>
              <button
                type="button"
                onClick={copyPhone}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-card rounded-2xl p-5 border border-white/10 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">Location Preference</span>
                <span className="text-xs font-bold text-white">{siteConfig.location}</span>
              </div>
            </div>

            {/* WhatsApp Quick Link */}
            <a
              href={siteConfig.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-4 border border-emerald-500/30 hover:border-emerald-500/50 flex items-center justify-between text-xs font-semibold text-emerald-300 transition-colors group"
            >
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400/80 group-hover:translate-x-1 transition-transform">
                Open Chat &rarr;
              </span>
            </a>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
};
