'use client';

import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { useUIStore } from '@/store/uiStore';
import { resumeData } from '@/content/resume';
import { Modal } from '@/components/ui/Modal';
import { useSoundEffect } from '@/hooks/useSoundEffect';

export const ResumeViewerModal: React.FC = () => {
  const { isResumeOpen, closeResume } = useUIStore();
  const { playSuccess } = useSoundEffect();

  return (
    <Modal
      isOpen={isResumeOpen}
      onClose={closeResume}
      maxWidth="5xl"
      className="h-[88vh]"
      title={
        <div className="flex items-center justify-between w-full pr-8">
          <div>
            <h3 className="text-sm font-bold text-white tracking-tight">
              {resumeData.title}
            </h3>
            <p className="text-[11px] font-mono text-cyan-300">
              {resumeData.fileSize} • {resumeData.lastUpdated}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={resumeData.pdfUrl}
              download="Mohammed_Ammar_Tanwar_Resume.pdf"
              onClick={playSuccess}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href={resumeData.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs border border-white/10 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in Tab</span>
            </a>
          </div>
        </div>
      }
    >
      <div className="flex-1 w-full h-full bg-slate-900 overflow-hidden relative">
        <iframe
          src={`${resumeData.pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
          title="Mohammed Ammar Tanwar Enterprise Resume Preview"
          className="w-full h-full border-none bg-slate-900"
        />
      </div>
    </Modal>
  );
};
