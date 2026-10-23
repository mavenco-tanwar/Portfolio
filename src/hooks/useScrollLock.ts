'use client';

import { useEffect } from 'react';

export function useScrollLock(lock: boolean) {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    if (lock) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [lock]);
}
