import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Workflow,
  GitPullRequest,
  Cloud,
  Search,
  ShieldCheck,
  Landmark,
  FileCheck2,
} from 'lucide-react';
import { StaggerGroup, StaggerItem } from './motion/Reveal';
import Reveal from './motion/Reveal';
import SpotlightCard from './motion/SpotlightCard';
import { useDemoPanel } from './demo/DemoPanelContext';

type Pillar = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
};

const xspmPillars: Pillar[] = [
  {
    icon: Workflow,
    title: 'Attack-path intelligence',
    desc: 'Trace how a finding in code becomes a breach in production, ranked by reachability and blast radius.',
  },
  {
    icon: Cloud,
    title: 'Code to cloud, unified',
    desc: 'SAST, SCA, secrets, IaC, CSPM and container findings correlated into one deduplicated view.',
  },
  {
    icon: GitPullRequest,
    title: 'AI remediation',
    desc: 'Context-aware fixes drafted as reviewable pull requests — approve and ship.',
  },
];

const guardSpine = ['Discover', 'Guard', 'Govern', 'Prove'];

const guardPillars: Pillar[] = [
  {
    icon: Search,
    title: 'Discover',
    desc: 'A deterministic AI-BOM per repo — models, MCP servers, agents, prompts, keys — plus shadow-AI and cloud agent inventory.',
  },
  {
    icon: ShieldCheck,
    title: 'Guard',
    desc: 'Blast-radius scoring on every finding, PR checks, CI gates, and AI-drafted remediation PRs.',
  },
  {
    icon: Landmark,
    title: 'Govern',
    desc: 'An MCP gateway, agent-identity deployment gate, fail-closed policy packs, and human approval on destructive actions.',
  },
  {
    icon: FileCheck2,
    title: 'Prove',
    desc: 'A hash-chained, tamper-evident evidence ledger with EU AI Act & SOC 2 packs and CycloneDX ML-BOM export.',
  },
];

const Products: React.FC = () => {
  const { open } = useDemoPanel();

  return (
    <section id="products" className="relative py-28 md:py-36 scroll-mt-24">
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[760px] h-[520px] rounded-full bg-[#2F6BFF]/[0.06] blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        {/* heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full pill-badge px-3 py-1 text-[12px] font-medium uppercase tracking-[0.18em] text-[#A8F046]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A8F046] shadow-[0_0_8px_#A8F046]" />
              Platforms
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-[clamp(2rem,5vw,3.5rem)] font-outfit font-bold tracking-tight text-white leading-[1.05]">
              Two platforms.{' '}
              <span className="gradient-text-static">One Unveilr.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg text-gray-400 font-light max-w-2xl mx-auto">
              The same deterministic engine, applied to two attack surfaces:
              exploitable risk from code to cloud, and the fast-growing risk of
              your AI agents.
            </p>
          </Reveal>
        </div>

        {/* two product cards */}
        <StaggerGroup
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto items-stretch"
          stagger={0.12}
        >
          {/* ── Unveilr XSPM ── */}
          <StaggerItem>
            <SpotlightCard className="group relative h-full gradient-border glass-card rounded-[2rem] p-8 md:p-10 flex flex-col overflow-hidden">
              <div className="absolute -top-24 -left-16 w-[260px] h-[260px] rounded-full bg-[#00E5FF]/[0.10] blur-[90px] pointer-events-none" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full pill-badge px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#00E5FF]">
                  Extended Security Posture Management
                </span>
                <h3 className="mt-5 text-[1.9rem] font-outfit font-bold text-white leading-tight">
                  Unveilr <span className="text-[#00E5FF]">XSPM</span>
                </h3>
                <p className="mt-3 text-[15.5px] text-gray-400 font-light leading-relaxed max-w-md">
                  Connects source code, IaC, cloud posture, containers and attack
                  paths — so your team fixes what's reachable, exploitable, and
                  worth fixing now.
                </p>
              </div>

              <ul className="relative mt-8 space-y-5">
                {xspmPillars.map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="flex gap-4">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20">
                      <Icon className="h-5 w-5 text-[#00E5FF]" />
                    </span>
                    <div>
                      <p className="text-[15px] font-medium text-white">{title}</p>
                      <p className="text-[13.5px] text-gray-400 font-light leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="relative mt-auto pt-9 flex flex-wrap items-center gap-4">
                <button
                  onClick={open}
                  className="btn-primary group/btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold text-white"
                >
                  Book a demo
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
                <a
                  href="#features"
                  className="btn-ghost inline-flex items-center gap-2 rounded-full px-5 py-3 text-[14px] font-semibold text-gray-200"
                >
                  Explore the platform
                </a>
              </div>
            </SpotlightCard>
          </StaggerItem>

          {/* ── Unveilr Guard ── */}
          <StaggerItem>
            <SpotlightCard className="group relative h-full gradient-border glass-card rounded-[2rem] p-8 md:p-10 flex flex-col overflow-hidden">
              <div className="absolute -top-24 -right-16 w-[260px] h-[260px] rounded-full bg-[#A8F046]/[0.10] blur-[90px] pointer-events-none" />

              <div className="relative">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center gap-2 rounded-full pill-badge px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A8F046]">
                    Enterprise AI Control Plane
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#A8F046]/[0.14] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#BEF264]">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[#A8F046] opacity-70 animate-ping" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#A8F046]" />
                    </span>
                    New
                  </span>
                </div>
                <h3 className="mt-5 text-[1.9rem] font-outfit font-bold text-white leading-tight">
                  Unveilr <span className="text-[#A8F046]">Guard</span>
                </h3>
                <p className="mt-3 text-[15.5px] text-gray-400 font-light leading-relaxed max-w-md">
                  Discovers, prioritizes, governs and proves the risk of AI usage
                  — especially AI agents — across your code, cloud and runtime.
                </p>

                {/* Discover → Guard → Govern → Prove spine */}
                <div className="mt-6 flex flex-wrap items-center gap-2 text-[12px] font-medium">
                  {guardSpine.map((step, i) => (
                    <React.Fragment key={step}>
                      <span className="rounded-full border border-[#A8F046]/25 bg-[#A8F046]/[0.08] px-3 py-1 text-[#BEF264]">
                        {step}
                      </span>
                      {i < guardSpine.length - 1 && (
                        <ArrowRight className="h-3.5 w-3.5 text-gray-600" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <ul className="relative mt-8 space-y-5">
                {guardPillars.map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="flex gap-4">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#A8F046]/10 border border-[#A8F046]/20">
                      <Icon className="h-5 w-5 text-[#A8F046]" />
                    </span>
                    <div>
                      <p className="text-[15px] font-medium text-white">{title}</p>
                      <p className="text-[13.5px] text-gray-400 font-light leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="relative mt-8 rounded-2xl border border-white/[0.06] bg-black/20 px-5 py-4 text-[13.5px] text-gray-300 font-light leading-relaxed">
                Register your AI agents as identities, constrain what they can do,
                and prove every sensitive action — so a hijacked agent hits a dead
                end.
              </p>

              <div className="relative mt-auto pt-9 flex flex-wrap items-center gap-4">
                <button
                  onClick={open}
                  className="btn-primary group/btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold text-white"
                >
                  Book a demo
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
                <a
                  href="https://guard.unveilr.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost group/link inline-flex items-center gap-2 rounded-full px-5 py-3 text-[14px] font-semibold text-gray-200"
                >
                  Open the console
                  <ArrowUpRight className="w-4 h-4 text-[#A8F046] transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </SpotlightCard>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
};

export default Products;
