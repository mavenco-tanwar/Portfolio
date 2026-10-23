import { Skill } from '@/types';

export const skills: Skill[] = [
  {
    name: 'Next.js (App Router, SSR, SSG, ISR)',
    category: 'core',
    level: 98,
    experienceYears: 5,
    featuredSnippet: {
      title: 'Edge Tenant Subdomain Resolver',
      language: 'typescript',
      description: 'How we route multi-tenant traffic at the edge with zero cold starts.',
      code: `// middleware.ts - Edge Subdomain Routing
import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const tenant = host.split('.')[0]; // e.g. 'eei' from 'eei.domain.com'

  const url = request.nextUrl.clone();
  url.pathname = \`/tenant/\${tenant}\${url.pathname}\`;

  const response = NextResponse.rewrite(url);
  response.headers.set('x-tenant-id', tenant);
  return response;
}`,
    },
  },
  {
    name: 'React.js (Concurrent Features & Hooks)',
    category: 'core',
    level: 96,
    experienceYears: 5,
    featuredSnippet: {
      title: 'Optimistic Candidate Status Update',
      language: 'typescript',
      description: 'React 19 useOptimistic pattern with instant UI feedback and rollback.',
      code: `import { useOptimistic, useTransition } from 'react';

export function useCandidatePipeline(initialCandidates: Candidate[]) {
  const [isPending, startTransition] = useTransition();
  const [candidates, setOptimistic] = useOptimistic(
    initialCandidates,
    (current, update: { id: string; stage: string }) =>
      current.map(c => c.id === update.id ? { ...c, stage: update.stage } : c)
  );

  const moveStage = (id: string, stage: string) => {
    startTransition(async () => {
      setOptimistic({ id, stage });
      try {
        await api.updateCandidateStage(id, stage);
      } catch (err) {
        console.error('Stage transition failed:', err);
      }
    });
  };

  return { candidates, moveStage, isPending };
}`,
    },
  },
  {
    name: 'TypeScript (Strict Typing & Generics)',
    category: 'core',
    level: 95,
    experienceYears: 5,
    featuredSnippet: {
      title: 'Exhaustive State Machine Handler',
      language: 'typescript',
      description: 'Discriminated unions with compile-time exhaustiveness checking.',
      code: `type AsyncResult<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };

export function renderState<T>(state: AsyncResult<T>) {
  switch (state.status) {
    case 'idle': return null;
    case 'loading': return <Spinner />;
    case 'success': return <DataGrid data={state.data} />;
    case 'error': return <ErrorAlert error={state.error} />;
    default: {
      const _exhaustiveCheck: never = state;
      return _exhaustiveCheck;
    }
  }
}`,
    },
  },
  {
    name: 'Zustand & Redux Toolkit',
    category: 'core',
    level: 94,
    experienceYears: 4,
    featuredSnippet: {
      title: 'Lightweight Persistent Store Slice',
      language: 'typescript',
      description: 'Selective subscriptions to prevent unnecessary component re-renders.',
      code: `import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FilterState {
  department: string;
  minExperience: number;
  setDepartment: (dept: string) => void;
}

export const useTalentFilterStore = create<FilterState>()(
  persist(
    (set) => ({
      department: 'Engineering',
      minExperience: 3,
      setDepartment: (department) => set({ department }),
    }),
    { name: 'talent-filters-v1' }
  )
);`,
    },
  },
  {
    name: 'Tailwind CSS & Design Tokens',
    category: 'ui',
    level: 98,
    experienceYears: 5,
    featuredSnippet: {
      title: 'Runtime Brand Theme Token Injection',
      language: 'typescript',
      description: 'Injects client brand colors into CSS variables at runtime.',
      code: `export function applyBrandTheme(tokens: Record<string, string>) {
  const root = document.documentElement;
  Object.entries(tokens).forEach(([tokenName, value]) => {
    root.style.setProperty(\`--brand-\${tokenName}\`, value);
  });
}`,
    },
  },
  {
    name: 'WCAG 2.1 AA & Keyboard Accessibility',
    category: 'ui',
    level: 95,
    experienceYears: 4,
    featuredSnippet: {
      title: 'Modal Focus Trap Hook',
      language: 'typescript',
      description: 'Guarantees Tab cycling and restores prior active element on close.',
      code: `import { useEffect, useRef } from 'react';

export function useFocusTrap(isOpen: boolean) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || !ref.current) return;
    const focusable = ref.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const prevActive = document.activeElement as HTMLElement | null;
    first?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      prevActive?.focus();
    };
  }, [isOpen]);

  return ref;
}`,
    },
  },
  {
    name: 'TanStack Query & REST / GraphQL',
    category: 'api',
    level: 96,
    experienceYears: 4,
    featuredSnippet: {
      title: 'Tenant-Isolated Query Caching',
      language: 'typescript',
      description: 'Ensures browser cache keys are strictly scoped by tenant.',
      code: `import { useQuery } from '@tanstack/react-query';

export function useCandidateList(tenantId: string) {
  return useQuery({
    queryKey: ['candidates', tenantId],
    queryFn: () => api.fetchCandidates(tenantId),
    staleTime: 5 * 60 * 1000,
    placeholderData: (prev) => prev,
  });
}`,
    },
  },
  {
    name: 'Core Web Vitals & Chrome DevTools Profiling',
    category: 'perf',
    level: 96,
    experienceYears: 5,
    featuredSnippet: {
      title: 'INP & Long Animation Frame Observer',
      language: 'typescript',
      description: 'Monitors main-thread bottlenecks and reports interactions > 50ms.',
      code: `export function observePerformance() {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.duration > 50) {
        console.warn(\`[Slow Interaction]: \${entry.name} took \${entry.duration.toFixed(1)}ms\`);
      }
    });
  });

  observer.observe({ type: 'first-input', buffered: true });
}`,
    },
  },
  {
    name: 'Streaming LLM & Conversational UI',
    category: 'data-ai',
    level: 95,
    experienceYears: 3,
    featuredSnippet: {
      title: 'SSE Stream Reader Hook',
      language: 'typescript',
      description: 'Decodes streaming tokens smoothly with backpressure handling.',
      code: `export async function streamTokens(
  responseStream: ReadableStream<Uint8Array>,
  onToken: (token: string) => void
) {
  const reader = responseStream.getReader();
  const decoder = new TextDecoder();
  let done = false;

  while (!done) {
    const { value, done: isDone } = await reader.read();
    done = isDone;
    if (value) {
      onToken(decoder.decode(value, { stream: true }));
    }
  }
}`,
    },
  },
];
