import type { Metadata, Viewport } from 'next';
import './globals.css';
import { 
  BackgroundCanvas, 
  CustomCursor, 
  Navbar, 
  CommandPalette 
} from '@/components/layout';
import { ResumeViewerModal } from '@/components/sections';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    'Mohammed Ammar Tanwar',
    'Senior Frontend Engineer',
    'Next.js Specialist',
    'TypeScript Architect',
    'React 19',
    'Enterprise Frontend Architecture',
    'Core Web Vitals',
    'Multi-Tenant SaaS',
    'Design Systems',
    'WCAG 2.1 AA',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.socials.github }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Senior Frontend Engineer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#07090e',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteConfig.url}/#person`,
        name: siteConfig.name,
        jobTitle: siteConfig.role,
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        sameAs: [
          siteConfig.socials.linkedin,
          siteConfig.socials.github,
        ],
        knowsAbout: [
          'Next.js',
          'React',
          'TypeScript',
          'Enterprise Architecture',
          'Design Systems',
          'Core Web Vitals',
          'Multi-Tenant SaaS',
          'WCAG 2.1 AA',
          'TanStack Query',
          'Zustand',
          'Jest',
          'React Testing Library',
        ],
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'Rajasthan Technical University',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: `${siteConfig.name} | Senior Frontend Engineer Portfolio`,
        description: siteConfig.description,
        publisher: {
          '@id': `${siteConfig.url}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#07090e] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        <BackgroundCanvas />
        <CustomCursor />
        <Navbar />
        <ResumeViewerModal />
        <CommandPalette />
        <main id="main-content" className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
