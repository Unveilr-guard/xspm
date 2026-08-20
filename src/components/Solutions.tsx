import React from 'react';
import {
  Code2,
  Boxes,
  Cloud,
  Layers,
  Workflow,
  GitPullRequest,
  GitBranch,
  Search,
  Bot,
  ShieldCheck,
  Network,
  Landmark,
  KeyRound,
  FileCheck2,
  Scale,
  ScanLine,
} from 'lucide-react';
import { StaggerGroup, StaggerItem } from './motion/Reveal';
import Reveal from './motion/Reveal';
import SpotlightCard from './motion/SpotlightCard';

type Solution = {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
};

const vrpSolutions: Solution[] = [
  {
    id: 'vrp-appsec',
    icon: Code2,
    title: 'Application security',
    description:
      'SAST, SCA, secrets and dependency scanning unified across every repo — one findings view instead of five scanners.',
    features: ['SAST & SCA', 'Secrets detection', 'Dependency risk', 'Repo-wide coverage'],
  },
  {
    id: 'vrp-iac',
    icon: Boxes,
    title: 'Infrastructure as code',
    description:
      'Terraform, CloudFormation and Kubernetes manifests checked in context — before misconfig ships to production.',
    features: ['Terraform', 'CloudFormation', 'K8s manifests', 'Policy as code'],
  },
  {
    id: 'vrp-cspm',
    icon: Cloud,
    title: 'Cloud posture (CSPM)',
    description:
      'Continuous posture across AWS, Azure and GCP with drift detection and prioritized misconfigurations.',
    features: ['AWS · Azure · GCP', 'Drift detection', 'Misconfig triage', 'Unified dashboard'],
  },
  {
    id: 'vrp-containers',
    icon: ScanLine,
    title: 'Containers & Kubernetes',
    description:
      'Image scanning, runtime signals and K8s posture correlated with the rest of your attack surface.',
    features: ['Image scanning', 'KSPM', 'Runtime signals', 'Workload context'],
  },
  {
    id: 'vrp-attack-paths',
    icon: Workflow,
    title: 'Attack-path intelligence',
    description:
      'Trace how a finding in code becomes a breach in production — ranked by reachability and blast radius.',
    features: ['Reachability', 'Blast radius', 'Path graphs', 'Priority ranking'],
  },
  {
    id: 'vrp-remediation',
    icon: GitPullRequest,
    title: 'AI remediation',
    description:
      'Context-aware fixes drafted as reviewable pull requests — review, approve, ship.',
    features: ['AI-drafted PRs', 'Code & IaC fixes', 'Reviewable diffs', 'Credit pools'],
  },
  {
    id: 'vrp-devsecops',
    icon: GitBranch,
    title: 'DevSecOps workflows',
    description:
      'Frictionless CI/CD and ticketing hooks so security lands where developers already work.',
    features: ['GitHub · GitLab', 'CI gates', 'Jira workflows', 'Self-serve onboarding'],
  },
  {
    id: 'vrp-cnapp',
    icon: Layers,
    title: 'CNAPP-ready coverage',
    description:
      'Code, cloud, containers and posture in one correlated surface — without buying five point products.',
    features: ['CSPM · CNAPP', 'KSPM · DSPM signals', 'Deduplicated findings', 'One console'],
  },
];

const guardSolutions: Solution[] = [
  {
    id: 'guard-aibom',
    icon: Search,
    title: 'AI-BOM discovery',
    description:
      'Deterministic scanners build an AI bill of materials per repo — models, MCP servers, agents, prompts and keys.',
    features: ['Models & agents', 'MCP servers', 'Prompts & keys', 'Per-repo AI-BOM'],
  },
  {
    id: 'guard-shadow',
    icon: Bot,
    title: 'Shadow AI inventory',
    description:
      'Surface unapproved AI usage plus cloud agent fleets — AWS AgentCore, Foundry and coding-agent surfaces.',
    features: ['Shadow AI', 'Cloud agents', 'Claude Code · Cursor', 'Hooks & skills'],
  },
  {
    id: 'guard-blast',
    icon: ShieldCheck,
    title: 'Blast-radius scoring',
    description:
      'Every finding scored by severity × real exposure — reachable, runtime-active, gate-open.',
    features: ['Exposure scoring', 'Continuous re-score', 'Reachability', 'Prioritized backlog'],
  },
  {
    id: 'guard-ci',
    icon: GitPullRequest,
    title: 'PR checks & CI gates',
    description:
      'Block risky AI changes in review and pipeline, with AI-drafted remediation PRs when something slips through.',
    features: ['PR checks', 'CI gates', 'Remediation PRs', 'Fail-closed options'],
  },
  {
    id: 'guard-mcp',
    icon: Network,
    title: 'MCP gateway',
    description:
      'Proxy agent tool calls at runtime — agents only take allowed actions, with every decision sealed.',
    features: ['Tool-call proxy', 'Runtime allowlists', 'Destructive-action holds', 'Verifiable decisions'],
  },
  {
    id: 'guard-identity',
    icon: KeyRound,
    title: 'Agent identity gate',
    description:
      'Register AI agents as identities before deploy — own tokens or external IdPs like Okta and Entra.',
    features: ['Agent identities', 'Deployment gate', 'Okta · Entra', 'Scoped tokens'],
  },
  {
    id: 'guard-policy',
    icon: Landmark,
    title: 'Policy packs & approval',
    description:
      'Tenant policy packs with fail-closed scopes and human approval on destructive agent actions.',
    features: ['Policy packs', 'Fail-closed scopes', 'Human-in-the-loop', 'Tenant controls'],
  },
  {
    id: 'guard-prove',
    icon: FileCheck2,
    title: 'Evidence ledger',
    description:
      'Hash-chained, tamper-evident ledger sealing every decision — with ruleSetHash for audit trails.',
    features: ['Hash-chained ledger', 'Tamper-evident', 'ruleSetHash', 'Decision receipts'],
  },
  {
    id: 'guard-compliance',
    icon: Scale,
    title: 'AI compliance packs',
    description:
      'EU AI Act and SOC 2 evidence packs plus CycloneDX ML-BOM export for auditors and GRC teams.',
    features: ['EU AI Act', 'SOC 2 mappings', 'CycloneDX ML-BOM', 'Evidence packs'],
  },
];

const SolutionCard: React.FC<{
  solution: Solution;
  accent: 'cyan' | 'lime';
}> = ({ solution, accent }) => {
  const Icon = solution.icon;
  const accentClasses =
    accent === 'cyan'
      ? {
          iconWrap: 'bg-[#00E5FF]/12 border-[#00E5FF]/20',
          icon: 'text-[#00E5FF]',
          dot: 'bg-[#00E5FF]',
        }
      : {
          iconWrap: 'bg-[#A8F046]/12 border-[#A8F046]/20',
          icon: 'text-[#A8F046]',
          dot: 'bg-[#A8F046]',
        };

  return (
    <StaggerItem>
      <SpotlightCard
        tilt
        id={solution.id}
        className="group h-full gradient-border glass-card rounded-[2rem] p-7 md:p-8 flex flex-col scroll-mt-28"
      >
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-2xl border mb-4 transition-transform duration-500 group-hover:scale-110 ${accentClasses.iconWrap}`}
        >
          <Icon className={`h-5 w-5 ${accentClasses.icon}`} />
        </span>
        <h3 className="text-xl font-outfit font-semibold text-white mb-2">{solution.title}</h3>
        <p className="text-[14.5px] text-gray-400 font-light leading-relaxed mb-5">
          {solution.description}
        </p>
        <ul className="mt-auto space-y-2">
          {solution.features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-[13px] text-gray-400">
              <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${accentClasses.dot}`} />
              {f}
            </li>
          ))}
        </ul>
      </SpotlightCard>
    </StaggerItem>
  );
};

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="relative py-28 md:py-36 scroll-mt-24">
      <div className="absolute top-32 right-0 w-[480px] h-[480px] rounded-full bg-[#A8F046]/[0.05] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[420px] h-[420px] rounded-full bg-[#00E5FF]/[0.05] blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full pill-badge px-3 py-1 text-[12px] font-medium uppercase tracking-[0.18em] text-[#2F6BFF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF] shadow-[0_0_8px_#2F6BFF]" />
              Solutions
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-[clamp(2rem,5vw,3.5rem)] font-outfit font-bold tracking-tight text-white leading-[1.05]">
              Solutions across{' '}
              <span className="gradient-text-static">both products.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg text-gray-400 font-light max-w-2xl mx-auto">
              Vulnerability Risk Platform covers exploitable risk from code to
              cloud. Unveilr Guard covers the AI agents now running in your
              environment.
            </p>
          </Reveal>
        </div>

        {/* ── Vulnerability Risk Platform ── */}
        <div id="solutions-vrp" className="mb-20 scroll-mt-28">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="inline-flex items-center gap-2 rounded-full pill-badge px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#00E5FF]">
                Vulnerability Risk Platform
              </span>
              <span className="text-sm text-gray-500 font-light">
                Code, cloud, containers & attack paths
              </span>
            </div>
          </Reveal>
          <StaggerGroup
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5"
            stagger={0.06}
          >
            {vrpSolutions.map((s) => (
              <SolutionCard key={s.id} solution={s} accent="cyan" />
            ))}
          </StaggerGroup>
        </div>

        {/* ── Guard ── */}
        <div id="solutions-guard" className="scroll-mt-28">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="inline-flex items-center gap-2 rounded-full pill-badge px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A8F046]">
                Unveilr Guard
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#A8F046]/[0.14] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#BEF264]">
                New
              </span>
              <span className="text-sm text-gray-500 font-light">
                Enterprise AI Control Plane — Discover → Guard → Govern → Prove
              </span>
            </div>
          </Reveal>
          <StaggerGroup
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
            stagger={0.06}
          >
            {guardSolutions.map((s) => (
              <SolutionCard key={s.id} solution={s} accent="lime" />
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
