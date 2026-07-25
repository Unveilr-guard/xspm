import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';

export const RemotionScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const progress = (frame % 600) / 600; 
  const angle = progress * Math.PI * 2;

  // Orbital motion
  const orb1X = Math.cos(angle) * (width * 0.2) + width / 2;
  const orb1Y = Math.sin(angle * 2) * (height * 0.2) + height / 2;

  const orb2X = Math.sin(angle + Math.PI) * (width * 0.3) + width / 2;
  const orb2Y = Math.cos(angle * 1.5) * (height * 0.3) + height / 2;

  return (
    <AbsoluteFill style={{ backgroundColor: '#030014', overflow: 'hidden' }}>
      {/* Define SVG Noise Filter */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <filter id="bg-noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
      </svg>
      
      {/* Cyan Orb */}
      <div
        style={{
          position: 'absolute',
          top: orb1Y,
          left: orb1X,
          width: 1000,
          height: 1000,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(0,229,255,0.18) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          willChange: 'transform, top, left',
        }}
      />

      {/* Purple Orb */}
      <div
        style={{
          position: 'absolute',
          top: orb2Y,
          left: orb2X,
          width: 1200,
          height: 1200,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(47, 107, 255,0.18) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          willChange: 'transform, top, left',
        }}
      />

      {/* Deep Blue Orb */}
      <div
        style={{
          position: 'absolute',
          top: height * 0.8 + Math.sin(angle) * 150,
          left: width * 0.2 + Math.cos(angle) * 150,
          width: 800,
          height: 800,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(64,0,255,0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(90px)',
          willChange: 'transform, top, left',
        }}
      />

      {/* Background Noise Layer Overlay */}
      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          opacity: 0.05, 
          filter: 'url(#bg-noiseFilter)', 
          mixBlendMode: 'overlay',
          pointerEvents: 'none',
        }} 
      />
    </AbsoluteFill>
  );
};
