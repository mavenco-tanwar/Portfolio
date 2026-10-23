'use client';

import React, { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';
import { useSoundEffect } from '@/hooks/useSoundEffect';

const codeSnippets = {
  middleware: `// middleware.ts - Edge Subdomain Multi-Tenant Resolution
import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const tenant = hostname.split('.')[0]; // e.g. 'eei' from 'eei.domain.com'

  const url = request.nextUrl.clone();
  url.pathname = \`/tenant/\${tenant}\${url.pathname}\`;

  const response = NextResponse.rewrite(url);
  response.headers.set('x-tenant-id', tenant);
  response.headers.set('x-edge-cache', 'HIT; ttl=3600');
  return response;
}`,
  optimistic: `// useCandidatePipeline.ts - React 19 Optimistic UI with Rollback
import { useOptimistic, useTransition } from 'react';

export function useCandidatePipeline(initialList: Candidate[]) {
  const [isPending, startTransition] = useTransition();
  const [candidates, setOptimistic] = useOptimistic(
    initialList,
    (current, update: { id: string; stage: string }) =>
      current.map(c => c.id === update.id ? { ...c, stage: update.stage } : c)
  );

  const moveStage = (id: string, stage: string) => {
    startTransition(async () => {
      setOptimistic({ id, stage });
      await api.updateCandidateStage(id, stage);
    });
  };

  return { candidates, moveStage, isPending };
}`,
  perf: `// webVitals.ts - Real User INP & Layout Shift Observer
export function initPerformanceMonitoring() {
  if (typeof window === 'undefined') return;

  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      if (entry.entryType === 'first-input' && entry.duration > 40) {
        navigator.sendBeacon('/api/telemetry/inp', JSON.stringify({
          duration: entry.duration,
          target: entry.name,
        }));
      }
    }
  }).observe({ type: 'first-input', buffered: true });
}`,
};

export const CodePreview: React.FC = () => {
  const [activeCodeTab, setActiveCodeTab] = useState<'middleware' | 'optimistic' | 'perf'>('middleware');
  const [copied, setCopied] = useState(false);
  const { playClick, playSuccess } = useSoundEffect();

  const handleCopy = () => {
    playSuccess();
    navigator.clipboard.writeText(codeSnippets[activeCodeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTabChange = (tab: 'middleware' | 'optimistic' | 'perf') => {
    playClick(600);
    setActiveCodeTab(tab);
  };

  return (
    <div className="rounded-2xl glass-panel border border-white/10 shadow-2xl overflow-hidden bg-slate-950/80">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-slate-900/60">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <div className="ml-2 flex items-center gap-1.5 text-xs font-mono text-slate-400">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>production-patterns.ts</span>
          </div>
        </div>

        {/* Copy snippet button */}
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition-colors"
          title="Copy code snippet"
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

      {/* Tabs */}
      <div className="flex items-center border-b border-white/5 bg-slate-900/30 px-3 pt-2 gap-1 overflow-x-auto text-xs font-mono">
        <button
          type="button"
          onClick={() => handleTabChange('middleware')}
          className={`px-3 py-1.5 rounded-t-lg transition-colors border-b-2 ${
            activeCodeTab === 'middleware'
              ? 'text-cyan-300 border-cyan-400 bg-white/5 font-semibold'
              : 'text-slate-400 border-transparent hover:text-slate-200'
          }`}
        >
          Next.js Edge Subdomains
        </button>

        <button
          type="button"
          onClick={() => handleTabChange('optimistic')}
          className={`px-3 py-1.5 rounded-t-lg transition-colors border-b-2 ${
            activeCodeTab === 'optimistic'
              ? 'text-cyan-300 border-cyan-400 bg-white/5 font-semibold'
              : 'text-slate-400 border-transparent hover:text-slate-200'
          }`}
        >
          React 19 Optimistic UI
        </button>

        <button
          type="button"
          onClick={() => handleTabChange('perf')}
          className={`px-3 py-1.5 rounded-t-lg transition-colors border-b-2 ${
            activeCodeTab === 'perf'
              ? 'text-cyan-300 border-cyan-400 bg-white/5 font-semibold'
              : 'text-slate-400 border-transparent hover:text-slate-200'
          }`}
        >
          Core Web Vitals INP
        </button>
      </div>

      {/* Code body */}
      <div className="p-4 sm:p-5 text-xs font-mono overflow-x-auto leading-relaxed text-slate-300 max-h-96">
        <pre>
          <code>{codeSnippets[activeCodeTab]}</code>
        </pre>
      </div>

      {/* Status Bar */}
      <div className="px-4 py-2 border-t border-white/5 bg-slate-900/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>TypeScript Strict • Next.js 15+</span>
        </span>
        <span>UTF-8</span>
      </div>
    </div>
  );
};
