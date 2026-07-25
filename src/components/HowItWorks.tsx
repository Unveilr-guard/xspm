import React from 'react';
import { Check, Plug, Layers, Target } from 'lucide-react';
import { StaggerGroup, StaggerItem } from './motion/Reveal';
import Reveal from './motion/Reveal';

const steps = [
  {
    step: '01',
    icon: Plug,
    title: 'Connect your repos',
    description:
      'Link GitHub, GitLab, or Bitbucket in seconds. Scanning starts immediately — no agents, no config files.',
  },
  {
    step: '02',
    icon: Layers,
    title: 'Get the full picture',
    description:
      'Unveilr correlates findings across code, IaC, cloud, and containers into a single, deduplicated risk view.',
  },
  {
    step: '03',
    icon: Target,
    title: 'Fix what matters',
    description:
      'Prioritized by reachability and blast radius — so you fix the few issues that actually change your exposure.',
  },
];

const trust = ['SOC 2 compliant', 'Free for open source', 'No credit card required', 'Self-serve onboarding'];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="relative py-28 md:py-36">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#2F6BFF]/[0.06] blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full pill-badge px-3 py-1 text-[12px] font-medium uppercase tracking-[0.18em] text-[#2F6BFF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF] shadow-[0_0_8px_#2F6BFF]" />
              How it works
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-[clamp(2rem,5vw,3.5rem)] font-outfit font-bold tracking-tight text-white leading-[1.05]">
              Three steps to fewer vulnerabilities
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg text-gray-400 font-light max-w-2xl mx-auto">
              Get started in minutes, not months. Frictionless integration designed for scale.
            </p>
          </Reveal>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* connecting line */}
          <div className="hidden md:block absolute top-[44px] left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-8" stagger={0.12}>
            {steps.map((s) => (
              <StaggerItem key={s.step} className="relative flex flex-col items-center text-center">
                <div className="relative mb-7">
                  <div className="absolute inset-0 rounded-[1.4rem] bg-gradient-to-br from-[#00E5FF] to-[#2F6BFF] blur-lg opacity-40" />
                  <div className="relative flex h-[88px] w-[88px] items-center justify-center rounded-[1.4rem] glass-card border border-white/10">
                    <s.icon className="h-8 w-8 text-white" />
                    <span className="absolute -top-2.5 -right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#00E5FF] to-[#2F6BFF] text-[12px] font-bold text-white shadow-lg">
                      {s.step}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-outfit font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-[15px] text-gray-400 font-light leading-relaxed max-w-xs">{s.description}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-24 pt-10 border-t border-white/[0.05] max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-5 text-[15px] text-gray-300 font-light">
              {trust.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20">
                    <Check className="h-3.5 w-3.5 text-[#00E5FF]" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HowItWorks;
