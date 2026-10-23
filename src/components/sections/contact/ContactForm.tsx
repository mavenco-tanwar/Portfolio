'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useSoundEffect } from '@/hooks/useSoundEffect';

export const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    roleOrCompany: '',
    message: '',
    topic: 'Full-Time Senior Frontend Role',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { playClick, playSuccess } = useSoundEffect();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClick(900);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      playSuccess();

      // Confetti celebration
      try {
        confetti({
          particleCount: 60,
          spread: 55,
          origin: { y: 0.7 },
        });
      } catch {
        // Confetti unsupported or blocked
      }
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="glass-card rounded-2xl p-8 border border-emerald-500/30 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white tracking-tight">
          Message Received!
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
          Thank you for reaching out. I typically respond to enterprise inquiries and messages within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            playClick(600);
            setIsSubmitted(false);
            setFormState({
              name: '',
              email: '',
              roleOrCompany: '',
              message: '',
              topic: 'Full-Time Senior Frontend Role',
            });
          }}
          className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-mono text-slate-400 mb-1.5">
            Your Name *
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            placeholder="Jane Doe"
            className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs font-mono text-slate-400 mb-1.5">
            Your Email *
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            placeholder="jane@company.com"
            className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-company" className="block text-xs font-mono text-slate-400 mb-1.5">
            Company / Organization
          </label>
          <input
            id="contact-company"
            type="text"
            value={formState.roleOrCompany}
            onChange={(e) => setFormState({ ...formState, roleOrCompany: e.target.value })}
            placeholder="Acme Corp"
            className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
          />
        </div>

        <div>
          <label htmlFor="contact-topic" className="block text-xs font-mono text-slate-400 mb-1.5">
            Subject Topic
          </label>
          <select
            id="contact-topic"
            value={formState.topic}
            onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
            className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500/50"
          >
            <option value="Full-Time Senior Frontend Role">Full-Time Senior Frontend Role</option>
            <option value="Next.js / Architecture Consulting">Next.js / Architecture Consulting</option>
            <option value="Performance Audit / Core Web Vitals">Performance Audit / Core Web Vitals</option>
            <option value="Design System Consulting">Design System Consulting</option>
            <option value="General Conversation">General Conversation</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-mono text-slate-400 mb-1.5">
          Message *
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          placeholder="Tell me about your team, stack, timeline, or challenge..."
          className="w-full bg-slate-900/60 border border-white/10 rounded-xl p-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-50"
      >
        <Send className="w-3.5 h-3.5" />
        <span>{isSubmitting ? 'Sending Message...' : 'Send Direct Message'}</span>
      </button>
    </form>
  );
};
