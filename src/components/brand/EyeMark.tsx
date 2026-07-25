import React, { useId } from 'react';

interface EyeMarkProps {
  size?: number;
  className?: string;
  /** subtle idle animation (pupil drift) */
  animated?: boolean;
}

/**
 * The unveilr brand mark: an eye/iris built from the brand spectrum
 * (lime → teal outer iris, electric-blue → cyan inner, black pupil).
 * Transparent background so it sits cleanly on the dark UI.
 */
const EyeMark: React.FC<EyeMarkProps> = ({ size = 28, className = '', animated = false }) => {
  const id = useId().replace(/:/g, '');
  const lime = `lime-${id}`;
  const blue = `blue-${id}`;
  const clip = `clip-${id}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 96"
      fill="none"
      className={className}
      role="img"
      aria-label="unveilr"
    >
      <defs>
        <linearGradient id={lime} x1="6" y1="20" x2="100" y2="84" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ECF955" />
          <stop offset="0.55" stopColor="#A8F046" />
          <stop offset="1" stopColor="#0FB5AC" />
        </linearGradient>
        <linearGradient id={blue} x1="48" y1="22" x2="100" y2="74" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#00FFFF" />
          <stop offset="0.5" stopColor="#1FA6FF" />
          <stop offset="1" stopColor="#114FEE" />
        </linearGradient>
        {/* almond eye outline used to clip the iris */}
        <clipPath id={clip}>
          <path d="M6 48 C34 16 86 16 114 48 C86 80 34 80 6 48 Z" />
        </clipPath>
      </defs>

      {/* eye / outer iris (lime → teal) */}
      <path
        d="M6 48 C34 16 86 16 114 48 C86 80 34 80 6 48 Z"
        fill={`url(#${lime})`}
      />

      <g clipPath={`url(#${clip})`}>
        {/* inner iris offset right → leaves a lime crescent on the left */}
        <circle cx="74" cy="46" r="33" fill={`url(#${blue})`}>
          {animated && (
            <animate attributeName="cx" values="74;70;74" dur="6s" repeatCount="indefinite" />
          )}
        </circle>
        {/* pupil */}
        <circle cx="78" cy="44" r="15" fill="#000000">
          {animated && (
            <animate attributeName="cx" values="78;74;78" dur="6s" repeatCount="indefinite" />
          )}
        </circle>
        {/* highlight */}
        <circle cx="84" cy="37" r="4.5" fill="#FFFFFF" />
      </g>
    </svg>
  );
};

export default EyeMark;
