'use client';

import React, { useEffect, useRef } from 'react';
import { useUIStore } from '@/store/uiStore';

export const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const theme = useUIStore((state) => state.theme);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particleCount = Math.min(50, Math.floor((width * height) / 28000));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.4 + 0.8,
      baseAlpha: Math.random() * 0.35 + 0.15,
    }));

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isViolet = theme === 'cyber-violet';
      const isLight = theme === 'high-contrast-light';

      const nodeColor = isLight
        ? 'rgba(2, 132, 199, '
        : isViolet
        ? 'rgba(168, 85, 247, '
        : 'rgba(56, 189, 248, ';

      const lineColor = isLight
        ? 'rgba(15, 23, 42, '
        : isViolet
        ? 'rgba(139, 92, 246, '
        : 'rgba(56, 189, 248, ';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          const force = (140 - dist) / 140;
          p.x -= (dx / dist) * force * 1.2;
          p.y -= (dy / dist) * force * 1.2;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${nodeColor}${p.baseAlpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distNodes = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (distNodes < 120) {
            const alpha = (1 - distNodes / 120) * (isLight ? 0.06 : 0.12);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `${lineColor}${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full opacity-60" />
      <div className="absolute -top-[30%] left-[10%] w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] -right-[15%] w-[650px] h-[650px] rounded-full bg-violet-600/10 blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-[20%] left-[25%] w-[550px] h-[550px] rounded-full bg-emerald-500/10 blur-[150px] pointer-events-none" />
    </div>
  );
};
