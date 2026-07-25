import React from 'react';
import Counter from './motion/Counter';
import Reveal from './motion/Reveal';

const stats = [
  { to: 80, suffix: '%', label: 'Average backlog reduction', accent: '#00E5FF' },
  { to: 5, suffix: '+', label: 'Scanners in one view', accent: '#2F6BFF' },
  { to: 12, prefix: '<', suffix: 'min', label: 'From connect to first scan', accent: '#2F6BFF' },
  { to: 99.9, decimals: 1, suffix: '%', label: 'Platform uptime', accent: '#00E5FF' },
];

const StatsBand: React.FC = () => {
  return (
    <section className="relative py-24 md:py-28">
      <div className="container mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] gradient-border glass-card p-10 md:p-14">
            <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#2F6BFF]/10 blur-[120px] pointer-events-none" />
            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <div
                    className="font-outfit font-black tracking-tight text-[clamp(2.25rem,5vw,3.5rem)] leading-none"
                    style={{ color: s.accent }}
                  >
                    <Counter
                      to={s.to}
                      prefix={s.prefix}
                      suffix={s.suffix}
                      decimals={s.decimals}
                    />
                  </div>
                  <div className="mt-3 text-[13.5px] text-gray-400 font-light max-w-[180px] mx-auto leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default StatsBand;
