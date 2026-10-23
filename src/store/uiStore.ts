import { create } from 'zustand';
import { ThemeMode, Skill } from '@/types';

interface UIState {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;

  soundEnabled: boolean;
  toggleSound: () => void;
  setSoundEnabled: (enabled: boolean) => void;

  activeSection: string;
  setActiveSection: (section: string) => void;

  isResumeOpen: boolean;
  openResume: () => void;
  closeResume: () => void;

  isCommandPaletteOpen: boolean;
  setCommandPaletteOpen: (open: boolean) => void;

  activeSkillTab: 'all' | 'core' | 'ui' | 'api' | 'perf' | 'data-ai';
  setActiveSkillTab: (tab: 'all' | 'core' | 'ui' | 'api' | 'perf' | 'data-ai') => void;

  selectedSkill: Skill | null;
  setSelectedSkill: (skill: Skill | null) => void;

  // Backward compatibility aliases
  resumeModalOpen: boolean;
  openResumeModal: () => void;
  closeResumeModal: () => void;
  commandPaletteOpen: boolean;
}

export const useUIStore = create<UIState>((set) => ({
  theme: 'midnight',
  setTheme: (theme) => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
    }
    set({ theme });
  },

  soundEnabled: false, // Default to respectful human setting (false or subtle)
  toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
  setSoundEnabled: (soundEnabled) => set({ soundEnabled }),

  activeSection: 'hero',
  setActiveSection: (activeSection) => set({ activeSection }),

  isResumeOpen: false,
  openResume: () => set({ isResumeOpen: true, resumeModalOpen: true }),
  closeResume: () => set({ isResumeOpen: false, resumeModalOpen: false }),

  isCommandPaletteOpen: false,
  setCommandPaletteOpen: (open) => set({ isCommandPaletteOpen: open, commandPaletteOpen: open }),

  activeSkillTab: 'all',
  setActiveSkillTab: (activeSkillTab) => set({ activeSkillTab }),

  selectedSkill: null,
  setSelectedSkill: (selectedSkill) => set({ selectedSkill }),

  // Aliases for smooth migration
  resumeModalOpen: false,
  openResumeModal: () => set({ isResumeOpen: true, resumeModalOpen: true }),
  closeResumeModal: () => set({ isResumeOpen: false, resumeModalOpen: false }),
  commandPaletteOpen: false,
}));
