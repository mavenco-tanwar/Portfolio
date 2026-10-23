# Mohammed Ammar Tanwar — Personal Engineering Portfolio

Production portfolio and architecture showcases built with **Next.js (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

Live demo & portfolio: [https://ammartanwar.dev](https://ammartanwar.dev)

---

## Overview & Architecture

This repository hosts my personal engineering portfolio, project case studies, and architecture demonstrations. The codebase is organized to demonstrate real-world frontend engineering practices: modular separation of concerns, strict typing, responsive design systems, accessible UI primitives, and sub-second performance.

### Key Architectural Highlights

- **App Router & Turbopack:** Built on Next.js with React 19 concurrent features, streaming SSR, and zero layout shift.
- **Design System & Theme Tokens:** CSS custom properties power 3 distinct themes (`midnight`, `cyber-violet`, and `high-contrast-light`) with accessible contrast ratios.
- **Multi-Tenant HCM Simulation:** An interactive prototype showcasing multi-tenant subdomain resolution, Role-Based Access Control (RBAC), and streaming search UI inspired by production systems built at CXS Analytics.
- **Accessible UI Primitives (WCAG 2.1 AA):** Native skip links, keyboard navigation focus management, and accessible dialogs with focus trap and scroll locking.
- **Audio & Haptic Feedback:** Optional, lightweight Web Audio synthesizer for tactile UI feedback without extra asset network requests.
- **SEO & Structured Data:** Semantic HTML with JSON-LD schema (`Person` and `WebSite`), dynamic OpenGraph, and Twitter cards.

---

## Tech Stack

- **Framework:** Next.js (App Router), React 19, TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v4, Vanilla CSS custom properties
- **Animation:** Framer Motion, HTML5 Canvas
- **State Management:** Zustand (scoped UI preferences & modals)
- **Icons:** Lucide React, Custom SVGs
- **Testing & Tooling:** ESLint, Prettier, TypeScript Compiler

---

## Project Structure

```
src/
├── app/                      # Next.js App Router (pages, layout, globals.css)
│   ├── globals.css           # Design tokens, theme variables, glassmorphism utilities
│   ├── layout.tsx            # Root layout, font definitions, SEO metadata & JSON-LD
│   └── page.tsx              # Home page assembling section modules
├── components/
│   ├── ui/                   # Reusable UI primitives (Badge, Modal, SectionHeader)
│   ├── layout/               # Shell chrome (Navbar, Footer, CommandPalette, Background)
│   └── sections/             # Page domain sections
│       ├── hero/             # Intro, live metrics counters, code preview
│       ├── experience/       # Career timeline & STAR achievement cards
│       ├── skills/           # Categorized skill cards & interactive code inspector
│       ├── projects/         # Production project cards & HCM demo simulation
│       ├── services/         # Architecture, performance, and consulting offerings
│       ├── resume/           # Master resume preview & PDF download modal
│       └── contact/          # Live IST clock, direct copy actions, contact form
├── config/                   # Site-wide configuration, author bio & navigation links
├── content/                  # Domain-specific content files (experience, projects, skills, etc.)
├── hooks/                    # Reusable React hooks (useScrollSpy, useSoundEffect, useScrollLock)
├── lib/                      # Utilities (cn class merger, date formatters, audio synthesizer)
├── store/                    # Zustand store (pure UI state management)
└── types/                    # Domain TypeScript interfaces and types
```

---

## Getting Started

### Prerequisites

- Node.js 18.18+ or 20+
- npm 9+ or pnpm 8+

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Type check and build optimized static / server bundle
npm run build

# Start production server
npm run start
```

---

## Contact & Profile

**Mohammed Ammar Tanwar**  
Senior Frontend Engineer & Next.js / TypeScript Specialist

- **Email:** [ammar.tanwar.dev@gmail.com](mailto:ammar.tanwar.dev@gmail.com)
- **LinkedIn:** [linkedin.com/in/mohammed-ammar-tanwar](https://www.linkedin.com/in/mohammed-ammar-tanwar/)
- **GitHub:** [github.com/mavenco-tanwar](https://github.com/mavenco-tanwar)
- **Phone:** +91 8239019096
