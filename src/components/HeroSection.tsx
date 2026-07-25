import React, { useRef } from 'react';
import { ArrowRight, ShieldCheck, GitBranch, Cloud } from 'lucide-react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import EyeHero from './brand/EyeHero';
import { useDemoPanel } from './demo/DemoPanelContext';

const ease = [0.16, 1, 0.3, 1] as const;

const HeroSection: React.FC = () => {
  const { open } = useDemoPanel();
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // pointer-driven parallax for the crystal cluster
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [12, -12]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [-12, 12]);
  const translateX = useTransform(sx, [-0.5, 0.5], [-18, 18]);
  const translateY = useTransform(sy, [-0.5, 0.5], [-18, 18]);

  const onMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={onMove}
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16"
    >
      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* ── Left: copy ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.a
              href="#features"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="pill-badge group mb-7 inline-flex items-center gap-2.5 rounded-full py-1 pl-1 pr-3.5 text-[12.5px] font-medium text-gray-300"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#A8F046]/[0.12] px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#BEF264]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#A8F046] opacity-70 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#A8F046]" />
                </span>
                Beta
              </span>
              AI-powered remediation
              <ArrowRight className="h-3.5 w-3.5 text-gray-500 transition-transform group-hover:translate-x-0.5" />
            </motion.a>

            <h1 className="font-outfit font-black tracking-tight text-white leading-[1.0] text-[clamp(2.5rem,5.5vw,4.5rem)] mb-7">
              {['Unveil and Reduce', 'Exploitable Risk'].map((line, i) => (
                <motion.span
                  key={line}
                  className="block"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease, delay: 0.1 + i * 0.08 }}
                >
                  {line}
                </motion.span>
              ))}
              <motion.span
                className="block gradient-text"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.26 }}
              >
                from Code to Cloud.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.36 }}
              className="text-[17px] md:text-[19px] text-gray-400 font-light leading-relaxed mb-9 max-w-[560px]"
            >
              Unveilr connects source code, IaC, cloud posture, containers and
              attack paths — so your team fixes what's reachable, exploitable,
              and worth fixing now.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.46 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={open}
                className="btn-primary group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold text-white"
              >
                Book a demo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="#how-it-works"
                className="btn-ghost inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold text-gray-200"
              >
                See how it works
              </a>
            </motion.div>

            {/* mini trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-[13px] text-gray-500"
            >
              {[
                { icon: ShieldCheck, label: 'SOC 2 Type II' },
                { icon: GitBranch, label: 'Code to cloud' },
                { icon: Cloud, label: 'AWS · Azure · GCP' },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-2">
                  <Icon className="w-4 h-4 text-[#00E5FF]/70" />
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right: the unveilr eye ── */}
          <div className="lg:col-span-5 relative flex justify-center items-center min-h-[420px]">
            <motion.div
              style={{
                rotateX: reduce ? 0 : rotateX,
                rotateY: reduce ? 0 : rotateY,
                x: reduce ? 0 : translateX,
                y: reduce ? 0 : translateY,
              }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease, delay: 0.3 }}
              className="relative w-full max-w-[540px] aspect-square flex items-center justify-center"
            >
              <EyeHero />

              {/* floating stat chips */}
              <FloatingChip
                className="left-[-6%] top-[18%]"
                delay={0.8}
                title="Risk reduced"
                value="−80%"
                accent="#00E5FF"
              />
              <FloatingChip
                className="right-[-8%] top-[42%]"
                delay={1}
                title="Findings correlated"
                value="1 view"
                accent="#2F6BFF"
              />
              <FloatingChip
                className="left-[2%] bottom-[10%]"
                delay={1.2}
                title="Scanners unified"
                value="5+"
                accent="#2F6BFF"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <motion.a
        href="#features"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <span className="flex h-8 w-5 items-start justify-center rounded-full border border-white/15 p-1">
          <span className="h-1.5 w-1 rounded-full bg-white/70 animate-scroll-dot" />
        </span>
      </motion.a>
    </section>
  );
};

const FloatingChip: React.FC<{
  className?: string;
  delay: number;
  title: string;
  value: string;
  accent: string;
}> = ({ className = '', delay, title, value, accent }) => (
  <motion.div
    initial={{ opacity: 0, y: 14, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, ease, delay }}
    className={`absolute z-20 glass-card rounded-[1.4rem] px-4 py-3 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.7)] ${className}`}
  >
    <div className="text-[11px] uppercase tracking-wider text-gray-400">{title}</div>
    <div className="text-xl font-outfit font-bold" style={{ color: accent }}>
      {value}
    </div>
  </motion.div>
);

export default HeroSection;
