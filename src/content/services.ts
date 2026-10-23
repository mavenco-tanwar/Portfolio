import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'arch',
    title: 'Frontend Architecture & Next.js Migrations',
    tagline: 'Moving beyond legacy SPAs to scalable App Router setups',
    description:
      'Helping teams migrate legacy codebases or complex React SPAs to modern Next.js architectures with clean state management, modular directory structures, and sound TypeScript hygiene.',
    deliverables: [
      'Next.js App Router migrations from monolithic or SPA codebases',
      'Multi-tenant routing & Edge Middleware implementation',
      'State architecture with Zustand, TanStack Query, or Redux Toolkit',
      'Strict TypeScript typing standards and error boundary setup',
    ],
    icon: 'Layers',
  },
  {
    id: 'perf',
    title: 'Performance Audits & Core Web Vitals',
    tagline: 'Fixing slow loads, INP bottlenecks, and layout shifts',
    description:
      'Detailed profiling of bundles, rendering cycles, and memory usage to help production sites pass Google Core Web Vitals thresholds on real mobile devices.',
    deliverables: [
      'Chrome DevTools flamechart profiling & memory leak elimination',
      'Bundle chunking and tree-shaking optimization',
      'Fixing LCP (Largest Contentful Paint) and INP (Interaction to Next Paint)',
      'Setting up automated performance regression checks in CI/CD',
    ],
    icon: 'Zap',
  },
  {
    id: 'design-system',
    title: 'Design Systems & Component Libraries',
    tagline: 'Accessible, reusable Figma-to-code components (WCAG 2.1 AA)',
    description:
      'Building component libraries that bridge the gap between design and engineering, speeding up team delivery while baking accessibility into every primitive.',
    deliverables: [
      'Atomic design token architecture (Colors, Typography, Spacing)',
      'WCAG 2.1 AA compliance (Focus traps, ARIA attributes, keyboard support)',
      'Documented component packages with Storybook previews',
      'Publishing internal NPM packages for multi-portal teams',
    ],
    icon: 'Palette',
  },
  {
    id: 'ai-ui',
    title: 'AI & Real-Time Interface Engineering',
    tagline: 'Streaming LLMs, live data tables, and conversational UX',
    description:
      'Building responsive frontends for modern AI products, ensuring that streaming tokens and live data feeds render with zero frame drops or jarring jumps.',
    deliverables: [
      'Server-Sent Events (SSE) token stream renderers with typewriter effects',
      'Markdown rendering with syntax highlighting and action widgets',
      'Optimistic UI updates with rollback handling on network error',
      'High-density data dashboards using Recharts and Canvas',
    ],
    icon: 'Cpu',
  },
];
