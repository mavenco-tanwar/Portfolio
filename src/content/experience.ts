import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'cxs-analytics',
    role: 'Software Developer (Frontend)',
    company: 'CXS Analytics Sdn Bhd',
    location: 'Remote (Malaysia / Global)',
    period: 'Nov 2024 – Sep 2026',
    isCurrent: true,
    type: 'Full-Time Enterprise SaaS',
    description:
      'Led frontend architecture across multi-tenant HCM platforms and national workforce portals serving listed enterprise conglomerates and public sector institutions.',
    highlights: [
      {
        project: 'InsightAccess Multi-Tenant HCM Platform',
        impact: 'Zero cross-tenant state leakage across enterprise clients (EEI, Eight8Ate)',
        details:
          'Architected the Next.js App Router frontend for a multi-tenant HR platform. Configured Edge Middleware to resolve tenant subdomains and inject branded design tokens without cold-start overhead. Built streaming candidate search integrations consuming backend Laravel APIs.',
        tags: ['Next.js 15', 'TypeScript', 'Edge Middleware', 'TanStack Query', 'RBAC', 'Streaming AI'],
      },
      {
        project: 'MyNext National HR-Tech Platform',
        impact: 'Zero-downtime CI/CD deployments for TalentCorp Malaysia & Ministry of Human Resources',
        details:
          'Developed national workforce matching modules and LMS integrations compliant with WCAG 2.1 AA accessibility guidelines. Established automated GitLab CI/CD testing pipelines that cut deployment risk to zero.',
        tags: ['WCAG 2.1 AA', 'GitLab CI/CD', 'LMS Integration', 'Enterprise Security'],
      },
    ],
    techStack: [
      'Next.js App Router',
      'TypeScript',
      'React',
      'TanStack Query',
      'Tailwind CSS',
      'Laravel REST/GraphQL',
      'GitLab CI/CD',
    ],
  },
  {
    id: 'learnbay',
    role: 'Senior Web Developer',
    company: 'Learn Vista Private Limited (Learnbay)',
    location: 'Bengaluru, India',
    period: 'Jan 2022 – Nov 2024',
    type: 'Full-Time EdTech',
    description:
      'Led frontend engineering across public learning platforms, guided the migration from legacy monolith to Next.js hybrid SSR/SSG, and unified 3 separate web portals under a single design system.',
    highlights: [
      {
        project: 'Next.js Hybrid SSR & SSG Migration',
        impact: '40% reduction in client bundle size & 3x organic search visibility',
        details:
          'Migrated high-traffic course pages to Next.js with Incremental Static Regeneration (ISR, 1h cache) and dynamic checkout flows to SSR. Replaced render-blocking scripts with critical CSS and responsive WebP image pipelines.',
        tags: ['Next.js SSR/SSG/ISR', 'Core Web Vitals', 'SEO Optimization', 'Webpack Chunking'],
      },
      {
        project: '3-Portal Enterprise Design System',
        impact: 'Reduced squad sprint delivery cycles by 30%',
        details:
          'Extracted shared UI components across Learner, Instructor, and Admin portals into an internal NPM package following Atomic Design principles, standardized design tokens, and Storybook documentation.',
        tags: ['Atomic Design', 'Design Tokens', 'Accessibility', 'Storybook', 'NPM Registry'],
      },
      {
        project: 'Engineering Mentorship & Code Standards',
        impact: 'Mentored 4 junior/mid engineers; zero regression rollbacks over 6 quarters',
        details:
          'Set up strict TypeScript configurations (zero implicit any), Jest and React Testing Library coverage targets, and pre-commit linting gates with constructive architectural code review standards.',
        tags: ['Mentorship', 'Jest / RTL', 'Code Quality', 'CI/CD Gates'],
      },
    ],
    techStack: [
      'Next.js',
      'React.js',
      'TypeScript',
      'Redux Toolkit',
      'Node.js',
      'Express',
      'MongoDB',
      'Jest',
      'RTL',
    ],
  },
  {
    id: 'abal-solutions',
    role: 'Web Developer',
    company: 'ABAL Solutions',
    location: 'Remote',
    period: 'Jun 2020 – Dec 2021',
    type: 'Full-Time Web Agency',
    description:
      'Engineered responsive, accessible client interfaces and optimized assets across distributed web applications.',
    highlights: [
      {
        project: 'Cross-Browser Optimization & Responsive Layouts',
        impact: 'Cut initial page latency by 30% via caching and modern media pipelines',
        details:
          'Built accessible responsive layouts using semantic HTML5, modern CSS3, and ES6+. Implemented Brotli compression, responsive srcset image variants, and aggressive HTTP cache-control headers.',
        tags: ['Semantic HTML5', 'Modern CSS3', 'Brotli/Gzip', 'Asset Optimization', 'REST APIs'],
      },
    ],
    techStack: ['JavaScript (ES6+)', 'HTML5 / CSS3', 'REST APIs', 'Webpack', 'Responsive Design'],
  },
  {
    id: 'academics',
    role: 'B.Tech in Computer Science & Engineering',
    company: 'Rajasthan Technical University',
    location: 'Rajasthan, India',
    period: '2017 – 2021',
    type: 'Education',
    description:
      'Completed comprehensive Bachelor of Technology coursework in computer science fundamentals, data structures, algorithms, databases, and network architecture.',
    highlights: [
      {
        project: 'Computer Science & Engineering Curriculum',
        impact: 'Deep foundation in systems engineering, DSA, and computer networks',
        details:
          'Focused on algorithmic complexity, object-oriented software engineering, relational database design, and web technology fundamentals.',
        tags: ['Data Structures', 'Algorithms', 'Software Engineering', 'DBMS'],
      },
    ],
    techStack: ['C++', 'Java', 'SQL', 'Web Technologies', 'Operating Systems'],
  },
];
