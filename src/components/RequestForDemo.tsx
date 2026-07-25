import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import Reveal from './motion/Reveal';
import { useDemoPanel } from './demo/DemoPanelContext';

const RequestForDemo: React.FC = () => {
  const { open } = useDemoPanel();

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] gradient-border glass-card p-10 md:p-16 max-w-5xl mx-auto text-center">
            {/* ambient glows */}
            <div className="absolute -top-1/3 left-1/4 w-[460px] h-[460px] rounded-full bg-[#00E5FF]/10 blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-1/3 right-1/4 w-[460px] h-[460px] rounded-full bg-[#2F6BFF]/12 blur-[120px] pointer-events-none" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full pill-badge px-3 py-1 text-[12px] font-medium uppercase tracking-[0.18em] text-[#00E5FF]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
                Get started
              </span>

              <h2 className="mx-auto mt-6 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-outfit font-bold tracking-tight text-white leading-[1.05]">
                See your attack surface{' '}
                <span className="gradient-text-static">in one view.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-gray-400 font-light">
                Get a personalized walkthrough. We'll show you exactly how Unveilr
                fits your stack — and what it would surface in your environment.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                  onClick={open}
                  className="btn-primary group inline-flex items-center gap-2 rounded-full px-8 py-4 text-[15px] font-semibold text-white"
                >
                  Book a demo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <span className="text-[13px] text-gray-500">No agents to install · Answers within 24 hours</span>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] text-gray-500">
                {['SOC 2 Type II', '30-minute tailored walkthrough', 'Code to cloud coverage'].map((t) => (
                  <span key={t} className="inline-flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#A8F046]" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default RequestForDemo;
