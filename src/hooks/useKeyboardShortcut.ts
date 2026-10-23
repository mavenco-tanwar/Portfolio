'use client';

import { useEffect } from 'react';

interface ShortcutConfig {
  key: string;
  metaKey?: boolean;
  ctrlKey?: boolean;
  handler: (e: KeyboardEvent) => void;
}

export function useKeyboardShortcut({ key, metaKey = false, ctrlKey = false, handler }: ShortcutConfig) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const matchMeta = metaKey ? e.metaKey || e.ctrlKey : true;
      const matchCtrl = ctrlKey ? e.ctrlKey : true;
      const matchKey = e.key.toLowerCase() === key.toLowerCase();

      if (matchKey && matchMeta && matchCtrl) {
        e.preventDefault();
        handler(e);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [key, metaKey, ctrlKey, handler]);
}
