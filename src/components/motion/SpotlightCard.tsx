import React, { useRef } from 'react';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** adds a subtle 3D tilt toward the cursor */
  tilt?: boolean;
  tiltStrength?: number;
}

// Pointer capability is fixed for the session — compute once.
const FINE_POINTER =
  typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

/**
 * Card that tracks the cursor: exposes --mx/--my for the `.spotlight`
 * radial glow and optionally tilts in 3D toward the pointer.
 * On touch devices it renders as a plain card (no listeners, no 3D
 * layers) to keep scrolling perfectly smooth.
 */
const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  tilt = false,
  tiltStrength = 6,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const enableTilt = tilt && FINE_POINTER;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);

    if (enableTilt) {
      const rx = ((y / rect.height) - 0.5) * -2 * tiltStrength;
      const ry = ((x / rect.width) - 0.5) * 2 * tiltStrength;
      el.style.setProperty('--rx', `${rx}deg`);
      el.style.setProperty('--ry', `${ry}deg`);
    }
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el || !enableTilt) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <div
      ref={ref}
      onMouseMove={FINE_POINTER ? handleMove : undefined}
      onMouseLeave={FINE_POINTER ? handleLeave : undefined}
      className={`spotlight ${className}`}
      style={
        enableTilt
          ? {
              transform:
                'perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.25s cubic-bezier(0.16,1,0.3,1)',
            }
          : undefined
      }
      {...rest}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
