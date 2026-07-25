import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number; // seconds for one loop
  reverse?: boolean;
  className?: string;
  pauseOnHover?: boolean;
}

/** Seamless infinite marquee — duplicates content and translates -50%. */
const Marquee: React.FC<MarqueeProps> = ({
  children,
  speed = 40,
  reverse = false,
  className = '',
  pauseOnHover = true,
}) => {
  return (
    <div className={`marquee-mask group relative w-full overflow-hidden ${className}`}>
      <div
        className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} ${
          pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''
        }`}
        style={{ ['--marquee-duration' as string]: `${speed}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>{children}</div>
      </div>
    </div>
  );
};

export default Marquee;
