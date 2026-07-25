import React from 'react';
import { Quote } from 'lucide-react';
import { StaggerGroup, StaggerItem } from './motion/Reveal';
import Reveal from './motion/Reveal';
import SpotlightCard from './motion/SpotlightCard';

const testimonials = [
  {
    quote:
      'We stopped debating which scanner was right and started fixing the few issues that actually changed our exposure. One correlated view made prioritization obvious.',
    author: 'Platform Security Lead',
    org: 'Design partner program',
  },
  {
    quote:
      'Unveilr cut our vulnerability backlog by 80% in the first month. The attack-path analysis showed us exactly what to fix — and what we could safely ignore.',
    author: 'Head of DevSecOps',
    org: 'Series C SaaS company',
  },
];

const SocialProof: React.FC = () => {
  return (
    <section id="customers" className="relative py-28 md:py-36">
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00E5FF]/[0.05] blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full pill-badge px-3 py-1 text-[12px] font-medium uppercase tracking-[0.18em] text-[#00E5FF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
              Customers
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-[clamp(2rem,5vw,3.5rem)] font-outfit font-bold tracking-tight text-white leading-[1.05]">
              Trusted by security teams
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg text-gray-400 font-light max-w-2xl mx-auto">
              Teams use Unveilr to prioritize what actually changes their exposure.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto" stagger={0.12}>
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <SpotlightCard className="group h-full gradient-border glass-card rounded-[2rem] p-8 md:p-10 flex flex-col">
                <Quote className="h-8 w-8 text-[#2F6BFF]/60 mb-5" />
                <p className="text-[17px] md:text-[18px] text-gray-200 font-light leading-relaxed mb-8">
                  "{t.quote}"
                </p>
                <footer className="mt-auto flex items-center gap-3 border-t border-white/[0.06] pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#00E5FF]/20 to-[#2F6BFF]/20 border border-white/10 text-sm font-bold text-white">
                    {t.author.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                  </span>
                  <span>
                    <span className="block font-outfit font-semibold text-white text-[15px]">{t.author}</span>
                    <span className="block text-[13px] text-gray-500">{t.org}</span>
                  </span>
                </footer>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
};

export default SocialProof;
