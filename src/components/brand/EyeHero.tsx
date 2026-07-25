import React from 'react';

/**
 * Hero centrepiece — a premium, glassy unveilr eye.
 * Layered radial gradients give the iris real depth, a soft cornea
 * dome reads as glass, a slow scan beam + drifting fibres + orbiting
 * spark particles give it life. Pure SVG + CSS, scales crisply.
 */
const FIBRES = Array.from({ length: 44 });
const SPARKS = [
  { r: 150, a: -30, d: '0s', s: 3 },
  { r: 168, a: 60, d: '-2s', s: 2 },
  { r: 140, a: 140, d: '-4s', s: 2.4 },
  { r: 176, a: 210, d: '-1s', s: 1.8 },
  { r: 158, a: 300, d: '-3s', s: 2.6 },
];

const EyeHero: React.FC = () => {
  return (
    <div className="relative w-full max-w-[560px] aspect-square flex items-center justify-center [perspective:1000px]">
      {/* volumetric ambient glows */}
      <div className="absolute w-[78%] h-[78%] rounded-full bg-[#2F6BFF]/30 blur-[120px] animate-glow-pulse" />
      <div className="absolute w-[52%] h-[52%] rounded-full bg-[#00E5FF]/25 blur-[80px] animate-glow-pulse" style={{ animationDelay: '-3s' }} />
      <div className="absolute left-[14%] top-[18%] w-[34%] h-[34%] rounded-full bg-[#A8F046]/18 blur-[70px] animate-glow-pulse" style={{ animationDelay: '-5s' }} />

      {/* pulsing scan rings */}
      <span className="absolute inset-[4%] rounded-full border border-[#00E5FF]/15 animate-[ping_5s_ease-in-out_infinite]" />
      <span className="absolute inset-[16%] rounded-full border border-[#2F6BFF]/10 animate-[ping_5s_ease-in-out_infinite] [animation-delay:-2.5s]" />

      <svg viewBox="0 0 440 440" className="relative z-10 w-full h-auto animate-float-y" fill="none">
        <defs>
          {/* iris depth — bright core fading to deep teal rim */}
          <radialGradient id="irisCore" cx="50%" cy="50%" r="52%">
            <stop offset="0" stopColor="#9bf7ff" />
            <stop offset="0.28" stopColor="#22D3EE" />
            <stop offset="0.55" stopColor="#1F7BFF" />
            <stop offset="0.82" stopColor="#1B4FE0" />
            <stop offset="1" stopColor="#0FB5AC" />
          </radialGradient>
          {/* outer rim ring — signature lime → teal */}
          <linearGradient id="rim" x1="60" y1="120" x2="380" y2="320" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#ECF955" />
            <stop offset="0.5" stopColor="#A8F046" />
            <stop offset="1" stopColor="#0FB5AC" />
          </linearGradient>
          {/* eyelid frame */}
          <linearGradient id="lid" x1="40" y1="140" x2="400" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#BEF264" />
            <stop offset="0.5" stopColor="#00E5FF" />
            <stop offset="1" stopColor="#2F6BFF" />
          </linearGradient>
          <radialGradient id="pupilG" cx="44%" cy="38%" r="72%">
            <stop offset="0" stopColor="#0b1840" />
            <stop offset="0.6" stopColor="#050a22" />
            <stop offset="1" stopColor="#02030f" />
          </radialGradient>
          {/* edge shading for sphere volume */}
          <radialGradient id="vol" cx="50%" cy="50%" r="50%">
            <stop offset="0.6" stopColor="#000000" stopOpacity="0" />
            <stop offset="1" stopColor="#02030f" stopOpacity="0.55" />
          </radialGradient>
          <linearGradient id="sweep" x1="220" y1="220" x2="360" y2="220" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#A8F046" stopOpacity="0.5" />
            <stop offset="1" stopColor="#A8F046" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="cornea" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="0.55" stopColor="#ffffff" stopOpacity="0.12" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          <path id="almondPath" d="M34 220 C108 116 332 116 406 220 C332 324 108 324 34 220 Z" />
          <clipPath id="almond"><use href="#almondPath" /></clipPath>
          <clipPath id="irisClip"><circle cx="220" cy="220" r="118" /></clipPath>
        </defs>

        {/* outer eyelid halo (soft wide rim) */}
        <use href="#almondPath" fill="none" stroke="url(#lid)" strokeWidth="9" strokeOpacity="0.10" />
        <use href="#almondPath" fill="none" stroke="url(#lid)" strokeWidth="5" strokeOpacity="0.16" />

        {/* everything inside the eye, clipped to the almond */}
        <g clipPath="url(#almond)">
          {/* iris base */}
          <circle cx="220" cy="220" r="118" fill="url(#irisCore)" />

          <g clipPath="url(#irisClip)">
            {/* concentric depth rings */}
            {[116, 100, 84, 70, 58].map((r, i) => (
              <circle key={r} cx="220" cy="220" r={r} fill="none"
                stroke={i % 2 ? '#bfffff' : '#2F6BFF'} strokeOpacity={0.12 + i * 0.04} strokeWidth="1" />
            ))}

            {/* drifting iris fibres */}
            <g className="origin-center animate-spin-slow" style={{ transformOrigin: '220px 220px' }}>
              {FIBRES.map((_, i) => {
                const a = (i / FIBRES.length) * Math.PI * 2;
                return (
                  <line key={i}
                    x1={220 + Math.cos(a) * 52} y1={220 + Math.sin(a) * 52}
                    x2={220 + Math.cos(a) * 117} y2={220 + Math.sin(a) * 117}
                    stroke={i % 4 === 0 ? '#A8F046' : '#9bf7ff'}
                    strokeOpacity={i % 2 ? 0.14 : 0.3} strokeWidth="1" />
                );
              })}
            </g>

            {/* scan beam */}
            <g style={{ transformOrigin: '220px 220px', animation: 'crystal-rotate 8s linear infinite' }}>
              <path d="M220 220 L360 182 A146 146 0 0 1 360 258 Z" fill="url(#sweep)" />
              <line x1="220" y1="220" x2="368" y2="220" stroke="#A8F046" strokeOpacity="0.65" strokeWidth="1.5" />
            </g>

            {/* volume shading on the rim */}
            <circle cx="220" cy="220" r="118" fill="url(#vol)" />
          </g>

          {/* rim ring */}
          <circle cx="220" cy="220" r="117" fill="none" stroke="url(#rim)" strokeWidth="2.5" strokeOpacity="0.85" />

          {/* pupil */}
          <circle cx="220" cy="220" r="48" fill="url(#pupilG)" />
          <circle cx="220" cy="220" r="48" fill="none" stroke="#22D3EE" strokeOpacity="0.45" strokeWidth="1.5" />
          <text x="220" y="227" textAnchor="middle" className="font-mono" fontSize="17" fill="#22D3EE" fillOpacity="0.55">{'</>'}</text>

          {/* cornea dome highlight (glassy) */}
          <ellipse cx="178" cy="166" rx="92" ry="64" fill="url(#cornea)" opacity="0.6" transform="rotate(-18 178 166)" />
          {/* sharp catch-light */}
          <ellipse cx="184" cy="176" rx="13" ry="9" fill="#ffffff" fillOpacity="0.95" transform="rotate(-22 184 176)" />
          <circle cx="248" cy="252" r="4" fill="#A8F046" fillOpacity="0.85" />
        </g>

        {/* luminous eyelid rim on top */}
        <use href="#almondPath" fill="none" stroke="url(#lid)" strokeWidth="2.5" strokeOpacity="0.95" />

        {/* twinkling spark particles */}
        {SPARKS.map((sp, i) => {
          const rad = (sp.a * Math.PI) / 180;
          const cx = 220 + Math.cos(rad) * sp.r;
          const cy = 220 + Math.sin(rad) * sp.r;
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={sp.s}
              fill={i % 2 ? '#A8F046' : '#9bf7ff'}
              className="animate-glow-pulse"
              style={{ animationDelay: sp.d, transformBox: 'fill-box', transformOrigin: 'center' }}
            />
          );
        })}
      </svg>

      {/* orbiting rings */}
      <div className="crystal-ring-outer" style={{ inset: '-3%' }} />
      <div className="crystal-ring" style={{ inset: '7%' }} />
    </div>
  );
};

export default EyeHero;
