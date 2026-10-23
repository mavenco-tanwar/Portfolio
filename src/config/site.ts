import { MetricStat, NavItem } from '@/types';

export const siteConfig = {
  name: 'Mohammed Ammar Tanwar',
  shortName: 'Ammar',
  title: 'Mohammed Ammar Tanwar | Senior Frontend Engineer',
  description:
    'Senior Frontend Engineer with 5+ years of experience building accessible, high-performance web applications, design systems, and multi-tenant architectures with Next.js, React, and TypeScript.',
  url: 'https://ammartanwar.dev',
  role: 'Senior Frontend Engineer & Next.js / TypeScript Specialist',
  statusBadge: 'Available for Senior Frontend Roles & Consulting',
  heading: 'Building fast, resilient web applications & design systems that scale.',
  subheading:
    'Senior Frontend Engineer with 5+ years of experience specializing in Next.js, TypeScript, and high-performance React architectures. Currently leading multi-tenant SaaS frontends at CXS Analytics.',
  bio: 'I specialize in turning complex enterprise workflows into snappy, accessible, and maintainable user experiences. My focus is on sub-second page loads, accessible component libraries (WCAG 2.1 AA), and bridging the gap between design systems and backend APIs.',
  email: 'ammar.tanwar.dev@gmail.com',
  phone: '+91 8239019096',
  location: 'India (Open to Remote, Hybrid, & Global Relocation)',
  timezone: 'Jaipur, India • IST (UTC+05:30) • Open to overlapping global timezones',
  socials: {
    github: 'https://github.com/mavenco-tanwar',
    linkedin: 'https://www.linkedin.com/in/mohammed-ammar-tanwar/',
    email: 'mailto:ammar.tanwar.dev@gmail.com',
    whatsapp: 'https://wa.me/918239019096',
  },
};

export const navigationLinks: NavItem[] = [
  { label: 'About', href: '#hero' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const engineeringPrinciples = [
  {
    title: 'Performance as a Feature',
    summary:
      'Sub-second TTFB, strict Core Web Vitals (INP < 100ms, zero layout shifts), and lean bundles. Fast interfaces convert better and respect user bandwidth.',
    icon: 'Zap',
  },
  {
    title: 'Accessibility by Default',
    summary:
      'Accessible web applications start with semantic HTML, native focus management, and keyboard navigation to meet WCAG 2.1 AA standards before adding ARIA attributes.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Pragmatic Architecture',
    summary:
      'Building systems designed to scale cleanly: Next.js App Router for server rendering, lightweight state management, and reusable design tokens for consistent UI across multiple portals.',
    icon: 'Layers',
  },
  {
    title: 'Team Velocity & Mentorship',
    summary:
      'Fostering strong engineering culture through actionable code reviews, TypeScript standards, automated CI gates, and mentorship so teams ship with confidence.',
    icon: 'Users',
  },
];

export const impactMetrics: MetricStat[] = [
  {
    value: 5,
    suffix: '+',
    label: 'Years of Experience',
    sublabel: 'Enterprise Frontend & Next.js',
  },
  {
    value: 40,
    suffix: '%',
    label: 'Bundle Size Reduction',
    sublabel: 'SSR/ISR & Tree-Shaking Audits',
  },
  {
    value: 95,
    suffix: '+',
    label: 'Performance Score',
    sublabel: 'Sub-Second FCP & INP in Production',
  },
  {
    value: 30,
    suffix: '%',
    label: 'Faster Delivery Cycles',
    sublabel: '3-Portal Shared Design System',
  },
];
