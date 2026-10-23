import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'hcm-simulation',
    title: 'InsightAccess — Multi-Tenant HCM Platform',
    subtitle: 'Enterprise Talent Management & Role-Based Workflows',
    description:
      'An interactive simulation of the multi-tenant architecture built at CXS Analytics. Features tenant-isolated routing, role-based access control (Admin, Recruiter, Hiring Manager), and real-time streaming talent search.',
    metrics: ['Tenant Isolation', 'Streaming Talent Search', 'Granular RBAC', 'Edge Resolution'],
    tags: ['Next.js 15', 'TypeScript', 'Zustand', 'RBAC', 'Tailwind CSS'],
    isInteractiveDemo: true,
    architectureHighlights: [
      'Edge Middleware inspects host subdomains to partition tenant styles and data access.',
      'Chunked token streaming reader renders matching candidate summaries with zero UI freeze.',
      'Granular RBAC prevents unauthorized roles from viewing sensitive candidate compensation data.',
    ],
  },
  {
    id: 'learnbay-suite',
    title: 'Learnbay — Learning Platform & Public Suite',
    subtitle: 'High-Traffic EdTech Platforms (learnbay.co, blog, tutorials)',
    description:
      'Led the migration from a monolithic frontend to Next.js hybrid SSR/SSG. Reduced bundle weight by 40% while supporting thousands of concurrent learners across dynamic course catalogues.',
    metrics: ['40% Bundle Reduction', '95+ Mobile CWV Score', '3 Unified Portals', '3x Organic Traffic'],
    tags: ['Next.js', 'React.js', 'TypeScript', 'ISR / SSG', 'Node.js', 'Tailwind CSS'],
    liveUrl: 'https://www.learnbay.co',
    architectureHighlights: [
      'Incremental Static Regeneration (ISR) with 1-hour revalidation for over 500+ syllabus pages.',
      'Shared UI component package consumed across Learner, Instructor, and Admin portals.',
      'Image asset pipeline and font subsetting that cut Largest Contentful Paint (LCP) from 3.8s to 1.1s.',
    ],
  },
  {
    id: 'techshah-platform',
    title: 'Techshah — Tech Solutions Showcase',
    subtitle: 'Enterprise Engineering & Digital Showcase (techshah.co)',
    description:
      'Engineered a fast, accessible web platform achieving 98+ Lighthouse scores across mobile and desktop. Built with route pre-fetching and smooth micro-interactions.',
    metrics: ['98 Lighthouse Score', 'Zero Layout Shift (CLS = 0)', 'Sub-800ms FCP'],
    tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://techshah.co',
    architectureHighlights: [
      'Route prefetching via intersection observers for near-instant page transitions.',
      'Responsive WebP/AVIF images with fetchpriority hints for hero assets.',
      'Strict layout sizing that completely eliminated layout shifts.',
    ],
  },
  {
    id: 'mandawa-design-house',
    title: 'Mandawa Design House',
    subtitle: 'International B2B & Bespoke Design Showcase',
    description:
      'Digital catalog and inquiry platform for international architecture and bespoke interior buyers, optimized for sub-second mobile loads across international CDNs.',
    metrics: ['Sub-Second Mobile Load', 'International B2B Inquiries', 'Progressive Image Loading'],
    tags: ['Next.js', 'Tailwind CSS', 'REST API', 'Framer Motion'],
    liveUrl: 'https://www.mandawadesignhouse.com/',
    architectureHighlights: [
      'High-resolution catalog viewer using progressive image decoders.',
      'Bespoke inquiry builder with optimistic client caching.',
      'Fast international delivery through Cloudflare edge caching.',
    ],
  },
];
