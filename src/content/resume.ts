import { ResumeData } from '@/types';

export const resumeData: ResumeData = {
  title: 'Mohammed Ammar Tanwar — Senior Frontend Engineer Resume',
  role: 'Senior Frontend Engineer & Next.js / TypeScript Specialist',
  badge: '5+ Years Enterprise Experience',
  pdfUrl: '/resumes/Mohammed_Ammar_Tanwar_Resume.pdf',
  fileSize: '139 KB',
  lastUpdated: 'Updated for 2026',
  summary:
    'Comprehensive Curriculum Vitae covering 5+ years of enterprise engineering experience. Details end-to-end frontend architecture, Next.js App Router (SSR/SSG/ISR), micro-frontends, multi-tenant SaaS platforms (InsightAccess at CXS Analytics), 3-portal Atomic Design systems (Learnbay), strict TypeScript typing, sub-second Core Web Vitals profiling, automated testing (Jest, RTL, Cypress), and engineering squad mentorship.',
  keyHighlights: [
    'Multi-Tenant Architecture: Designed Next.js App Router & Edge Middleware domain routing with zero cross-tenant state leakage.',
    'Performance & Core Web Vitals: Reduced client-side bundle size by 40% and maintained sub-second FCP across high-traffic platforms.',
    'Design Systems & WCAG 2.1 AA: Built shared atomic component libraries across 3 enterprise portals, accelerating sprint cycles by 30%.',
    'Full-Stack API & AI Streaming: Engineered real-time Server-Sent Events (SSE) streaming talent search consuming REST and GraphQL endpoints.',
  ],
  competencies: [
    {
      category: 'Frontend Core & Frameworks',
      skills: [
        'Next.js 15 (App Router, SSR, SSG, ISR)',
        'React 19',
        'TypeScript',
        'JavaScript (ES6+)',
        'Zustand',
        'Redux Toolkit',
      ],
    },
    {
      category: 'UI Architecture & Design Systems',
      skills: ['Tailwind CSS', 'Design Tokens', 'Atomic Design', 'WCAG 2.1 AA', 'WAI-ARIA', 'Micro-Frontends'],
    },
    {
      category: 'API Orchestration & Performance',
      skills: [
        'TanStack Query',
        'RESTful APIs',
        'GraphQL',
        'Edge Middleware',
        'JWT / RBAC',
        'Core Web Vitals (LCP, INP, CLS)',
      ],
    },
    {
      category: 'Testing & Engineering Quality',
      skills: [
        'Jest',
        'React Testing Library',
        'Cypress',
        'GitLab CI/CD',
        'Chrome DevTools Flamecharts',
        'Code Reviews',
      ],
    },
  ],
};
