import React from 'react';
import { GitPullRequest, ScanLine, Workflow, Code2, Boxes, Cloud } from 'lucide-react';
import { StaggerGroup, StaggerItem } from './motion/Reveal';
import SpotlightCard from './motion/SpotlightCard';

const SectionEyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full pill-badge px-3 py-1 text-[12px] font-medium uppercase tracking-[0.18em] text-[#00E5FF]">
    <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
    {children}
  </span>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="relative py-28 md:py-36">
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#00E5FF]/[0.06] blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl mb-16">
          <StaggerGroup>
            <StaggerItem><SectionEyebrow>The platform</SectionEyebrow></StaggerItem>
            <StaggerItem>
              <h2 className="mt-5 text-[clamp(2rem,5vw,3.5rem)] font-outfit font-bold tracking-tight text-white leading-[1.05] text-balance">
                Everything you need.{' '}
                <span className="gradient-text-static">Nothing you don't.</span>
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-5 text-lg text-gray-400 font-light max-w-2xl">
                Every critical scanner, correlated into one intelligent view — so
                your team stops triaging noise and starts fixing what changes your
                exposure.
              </p>
            </StaggerItem>
          </StaggerGroup>
        </div>

        <StaggerGroup className="grid grid-cols-1 lg:grid-cols-6 gap-5" stagger={0.08}>
          {/* Featured — Attack paths */}
          <StaggerItem className="lg:col-span-4">
            <SpotlightCard
              tilt
              className="group h-full gradient-border glass-card rounded-[2rem] p-8 md:p-10 overflow-hidden flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2F6BFF]/15 border border-[#2F6BFF]/25">
                  <Workflow className="h-6 w-6 text-[#2F6BFF]" />
                </span>
                <h3 className="text-2xl font-outfit font-semibold text-white">Attack-path intelligence</h3>
              </div>
              <p className="text-[15px] text-gray-400 font-light max-w-lg mb-6">
                Trace how a vulnerability in code becomes a breach in production.
                Unveilr connects findings across layers and ranks them by real-world
                reachability and blast radius.
              </p>
              <div className="relative mt-auto rounded-[1.4rem] overflow-hidden border border-white/[0.06]">
                <img
                  src="/unveilr-uploads/attack-graph.png"
                  alt="Attack graph visualization"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-transparent to-transparent pointer-events-none" />
              </div>
            </SpotlightCard>
          </StaggerItem>

          {/* AI remediation */}
          <StaggerItem className="lg:col-span-2">
            <SpotlightCard
              tilt
              className="group h-full gradient-border glass-card rounded-[2rem] p-8 overflow-hidden flex flex-col"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#00E5FF]/12 border border-[#00E5FF]/20 mb-4">
                <GitPullRequest className="h-6 w-6 text-[#00E5FF]" />
              </span>
              <h3 className="text-xl font-outfit font-semibold text-white mb-2">AI remediation</h3>
              <p className="text-[15px] text-gray-400 font-light">
                Context-aware fixes drafted as pull requests — review, approve, ship.
              </p>
              <div className="mt-auto pt-6">
                <div className="rounded-2xl bg-black/30 border border-white/[0.06] p-4 font-mono text-[12px] leading-relaxed">
                  <span className="text-emerald-400">+ </span>
                  <span className="text-gray-300">crypto.randomBytes(32)</span>
                  <br />
                  <span className="text-rose-400">- </span>
                  <span className="text-gray-500 line-through">Math.random()</span>
                </div>
              </div>
            </SpotlightCard>
          </StaggerItem>

          {/* Source code */}
          <SmallTile
            className="lg:col-span-2"
            icon={<Code2 className="h-6 w-6 text-[#A8F046]" />}
            title="Source code"
            desc="SAST, SCA, secrets and dependency scanning unified across every repo."
          />

          {/* Infrastructure */}
          <SmallTile
            className="lg:col-span-2"
            icon={<Boxes className="h-6 w-6 text-[#00E5FF]" />}
            title="Infrastructure as code"
            desc="Terraform, CloudFormation and Kubernetes manifests, checked in context."
          />

          {/* Cloud + containers */}
          <StaggerItem className="lg:col-span-2">
            <SpotlightCard
              tilt
              className="group h-full gradient-border glass-card rounded-[2rem] p-8 overflow-hidden flex flex-col"
            >
              <div className="flex gap-3 mb-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2F6BFF]/12 border border-[#2F6BFF]/20">
                  <Cloud className="h-6 w-6 text-[#2F6BFF]" />
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/15">
                  <ScanLine className="h-6 w-6 text-[#00E5FF]" />
                </span>
              </div>
              <h3 className="text-xl font-outfit font-semibold text-white mb-2">Cloud & containers</h3>
              <p className="text-[15px] text-gray-400 font-light">
                Continuous CSPM across AWS, Azure and GCP with image scanning and
                real-time drift detection.
              </p>
            </SpotlightCard>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
};

const SmallTile: React.FC<{
  className?: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}> = ({ className = '', icon, title, desc }) => (
  <StaggerItem className={className}>
    <SpotlightCard
      tilt
      className="group h-full gradient-border glass-card rounded-[2rem] p-8 overflow-hidden flex flex-col"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/[0.08] mb-4 transition-transform duration-500 group-hover:scale-110">
        {icon}
      </span>
      <h3 className="text-xl font-outfit font-semibold text-white mb-2">{title}</h3>
      <p className="text-[15px] text-gray-400 font-light">{desc}</p>
    </SpotlightCard>
  </StaggerItem>
);

export default Features;
