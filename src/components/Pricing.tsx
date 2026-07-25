import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { StaggerGroup, StaggerItem } from './motion/Reveal';
import Reveal from './motion/Reveal';
import SpotlightCard from './motion/SpotlightCard';
import { useDemoPanel } from './demo/DemoPanelContext';

type Plan = {
  name: string;
  description: string;
  price: string;
  period: string;
  cta: string;
  featured?: boolean;
  features: string[];
};

const plans: Plan[] = [
  {
    name: 'Developer',
    description: 'Per-developer pricing for teams shipping secure code.',
    price: '$49',
    period: '/dev/mo',
    cta: 'Start free',
    features: [
      '1,500 AI remediation credits/mo',
      'SAST, SCA, IaC, secrets, container',
      'Unified findings view',
      'Self-serve onboarding',
    ],
  },
  {
    name: 'Team',
    description: 'Volume pricing for teams standardizing on one platform.',
    price: '$39',
    period: '/dev/mo · 25+ seats',
    cta: 'Book a demo',
    featured: true,
    features: [
      'Up to 250 protected assets',
      '120k AI credits/mo (pooled)',
      'Attack-path prioritization',
      'Jira & GitHub workflows',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    description: 'For regulated organizations and complex environments.',
    price: 'Custom',
    period: 'annual contract',
    cta: 'Talk to sales',
    features: [
      'Unlimited developers',
      '800+ protected assets',
      'Custom AI credit pools',
      'Private deployment options',
      'Audit exports & enterprise SLA',
    ],
  },
];

const Pricing: React.FC = () => {
  const { open } = useDemoPanel();
  return (
    <section id="pricing" className="relative py-28 md:py-36">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[#2F6BFF]/[0.06] blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full pill-badge px-3 py-1 text-[12px] font-medium uppercase tracking-[0.18em] text-[#2F6BFF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF] shadow-[0_0_8px_#2F6BFF]" />
              Pricing
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-[clamp(2rem,5vw,3.5rem)] font-outfit font-bold tracking-tight text-white leading-[1.05]">
              Simple, transparent pricing
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg text-gray-400 font-light max-w-2xl mx-auto">
              Start with one developer. Scale to the whole org. Every plan includes all scanners.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch" stagger={0.1}>
          {plans.map((plan) => (
            <StaggerItem key={plan.name} className={plan.featured ? 'md:-mt-4 md:mb-[-1rem]' : ''}>
              <SpotlightCard
                className={`relative h-full rounded-[2rem] p-8 flex flex-col overflow-hidden ${
                  plan.featured
                    ? 'gradient-border bg-[#0c0a18]/80 border border-[#2F6BFF]/25 shadow-[0_0_50px_-12px_rgba(47, 107, 255,0.4)]'
                    : 'glass-card'
                }`}
              >
                {plan.featured && (
                  <>
                    <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-[#2F6BFF]/20 blur-[80px] pointer-events-none" />
                    <span className="absolute top-5 right-5 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#2F6BFF] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      Most popular
                    </span>
                  </>
                )}

                <div className="relative">
                  <h3 className="text-lg font-outfit font-bold text-white mb-1.5">{plan.name}</h3>
                  <p className="text-[13.5px] text-gray-400 font-light mb-6 min-h-[40px] leading-relaxed">
                    {plan.description}
                  </p>
                  <div className="mb-7 flex items-baseline gap-1.5">
                    <span className="text-[2.75rem] leading-none font-outfit font-black tracking-tight text-white">
                      {plan.price}
                    </span>
                    <span className="text-sm text-gray-500">{plan.period}</span>
                  </div>
                </div>

                <button
                  onClick={open}
                  className={`relative mb-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold transition-all duration-300 ${
                    plan.featured
                      ? 'btn-primary text-white'
                      : 'btn-ghost text-white'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </button>

                <ul className="relative space-y-3.5 mt-auto">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[14px] text-gray-300">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20">
                        <Check className="h-3 w-3 text-[#00E5FF]" />
                      </span>
                      <span className="font-light leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
};

export default Pricing;
