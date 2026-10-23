'use client';

import { useEffect, useState } from 'react';

export function useScrollSpy(selectors: string[], offset: number = 100): string {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = selectors.length - 1; i >= 0; i--) {
        const id = selectors[i];
        const element = document.getElementById(id.replace('#', ''));
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(id);
          return;
        }
      }

      if (selectors.length > 0) {
        setActiveId(selectors[0]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectors, offset]);

  return activeId;
}
