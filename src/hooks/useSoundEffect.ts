'use client';

import { useCallback } from 'react';
import { useUIStore } from '@/store/uiStore';
import { sound } from '@/lib/sound';

export function useSoundEffect() {
  const soundEnabled = useUIStore((state) => state.soundEnabled);

  const playClick = useCallback(
    (freq = 700) => {
      if (soundEnabled) {
        sound.playClick(freq);
      }
    },
    [soundEnabled]
  );

  const playHover = useCallback(() => {
    if (soundEnabled) {
      sound.playHover();
    }
  }, [soundEnabled]);

  const playSuccess = useCallback(() => {
    if (soundEnabled) {
      sound.playSuccess();
    }
  }, [soundEnabled]);

  return { playClick, playHover, playSuccess, soundEnabled };
}
