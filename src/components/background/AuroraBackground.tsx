import React, { useEffect, useRef } from 'react';

/**
 * Fixed, GPU-cheap ambient backdrop:
 *  - deep base gradient
 *  - three drifting aurora blobs (cyan / purple / indigo)
 *  - faint grid that fades toward the edges
 *  - a soft glow that lazily trails the cursor
 *  - film grain
 */
const AuroraBackground: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Desktop pointers only — skip the work entirely on touch / reduced-motion.
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduced) return;

    let raf = 0;
    let running = false;
    const target = { x: window.innerWidth / 2, y: window.innerHeight * 0.3 };
    const pos = { ...target };

    const loop = () => {
      pos.x += (target.x - pos.x) * 0.06;
      pos.y += (target.y - pos.y) * 0.06;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${pos.x - 300}px, ${pos.y - 300}px, 0)`;
      }
      // stop the loop once it has effectively caught up (saves CPU when idle)
      if (Math.abs(target.x - pos.x) > 0.5 || Math.abs(target.y - pos.y) > 0.5) {
        raf = requestAnimationFrame(loop);
      } else {
        running = false;
      }
    };
    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!running) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none grain" aria-hidden>
      {/* base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 120% 80% at 50% -10%, #0a0820 0%, #050510 45%, #030308 100%)',
        }}
      />

      {/* aurora blobs */}
      <div
        className="aurora-blob animate-aurora"
        style={{
          top: '-12%',
          left: '8%',
          width: 620,
          height: 620,
          background:
            'radial-gradient(circle, rgba(0,229,255,0.20) 0%, transparent 68%)',
        }}
      />
      <div
        className="aurora-blob animate-aurora"
        style={{
          top: '6%',
          right: '0%',
          width: 720,
          height: 720,
          background:
            'radial-gradient(circle, rgba(47, 107, 255,0.22) 0%, transparent 68%)',
          animationDelay: '-6s',
        }}
      />
      <div
        className="aurora-blob animate-aurora"
        style={{
          bottom: '-18%',
          left: '24%',
          width: 760,
          height: 760,
          background:
            'radial-gradient(circle, rgba(64,0,255,0.16) 0%, transparent 70%)',
          animationDelay: '-12s',
        }}
      />

      {/* cursor-trailing glow */}
      <div
        ref={glowRef}
        className="absolute left-0 top-0"
        style={{
          width: 600,
          height: 600,
          background:
            'radial-gradient(circle, rgba(47, 107, 255,0.10) 0%, transparent 60%)',
          filter: 'blur(40px)',
          willChange: 'transform',
        }}
      />

      {/* faint grid */}
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60" />

      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 55%, rgba(0,0,0,0.5) 100%)',
        }}
      />
    </div>
  );
};

export default AuroraBackground;
