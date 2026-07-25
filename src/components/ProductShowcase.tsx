import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from './motion/Reveal';

type Tab = { id: string; label: string; src: string; caption: string };

const tabs: Tab[] = [
  {
    id: 'findings',
    label: 'Finding management',
    src: '/unveilr-uploads/product-shot-2.png',
    caption: 'Triage, assign and track findings across every scanner in one view.',
  },
  {
    id: 'risk',
    label: 'Risk stories',
    src: '/unveilr-uploads/product-shot-3.png',
    caption: 'AI-written risk stories that collapse thousands of findings into what matters.',
  },
  {
    id: 'remediation',
    label: 'Auto remediation',
    src: '/unveilr-uploads/product-shot-1.png',
    caption: 'AI-drafted code & IaC fixes, delivered as reviewable pull requests.',
  },
];

const ProductShowcase: React.FC = () => {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section id="product" className="relative py-28 md:py-36">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[760px] h-[520px] rounded-full bg-[#2F6BFF]/[0.07] blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full pill-badge px-3 py-1 text-[12px] font-medium uppercase tracking-[0.18em] text-[#A8F046]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A8F046] shadow-[0_0_8px_#A8F046]" />
              Inside the platform
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-[clamp(2rem,5vw,3.5rem)] font-outfit font-bold tracking-tight text-white leading-[1.05]">
              One console for your{' '}
              <span className="gradient-text-static">entire attack surface.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg text-gray-400 font-light max-w-2xl mx-auto">
              Findings from every scanner, correlated and prioritized — so you
              always know what to fix next, and why it matters.
            </p>
          </Reveal>
        </div>

        {/* tab switcher */}
        <Reveal delay={0.12}>
          <div className="flex justify-center mb-8">
            <div className="inline-flex flex-wrap justify-center gap-1 rounded-full glass-card p-1.5">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={`relative rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                    active === t.id ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {active === t.id && (
                    <motion.span
                      layoutId="showcase-tab"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00E5FF]/20 to-[#2F6BFF]/20 border border-white/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{t.label}</span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* browser mockup */}
        <Reveal delay={0.16}>
          <div className="relative mx-auto max-w-5xl">
            {/* glow under window */}
            <div className="absolute -inset-x-10 -bottom-10 top-10 rounded-[2.5rem] bg-gradient-to-r from-[#00E5FF]/10 via-[#2F6BFF]/10 to-[#A8F046]/10 blur-3xl pointer-events-none" />

            <div className="relative gradient-border overflow-hidden rounded-[1.75rem] glass-card shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)]">
              {/* window chrome */}
              <div className="flex items-center gap-3 border-b border-white/[0.07] bg-white/[0.02] px-5 py-3.5">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]/80" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]/80" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]/80" />
                </div>
                <div className="mx-auto flex items-center gap-2 rounded-full bg-black/30 border border-white/[0.06] px-4 py-1.5 text-[12px] text-gray-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A8F046]" />
                  app.unveilr.ai/{current.id}
                </div>
                <div className="hidden sm:block w-14" />
              </div>

              {/* window body */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-[#070718]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={current.src}
                      alt={current.label}
                      className="h-full w-full object-cover object-top"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#070718] via-[#070718]/40 to-transparent p-5 pt-12">
                      <p className="text-sm text-gray-300">{current.caption}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ProductShowcase;
