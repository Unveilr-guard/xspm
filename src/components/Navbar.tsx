import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import EyeMark from './brand/EyeMark';
import { useDemoPanel } from './demo/DemoPanelContext';

const navLinks = [
  { label: 'Products', href: '#products', id: 'products' },
  { label: 'Capabilities', href: '#features', id: 'features' },
  { label: 'Solutions', href: '#solutions', id: 'solutions' },
  { label: 'How it works', href: '#how-it-works', id: 'how-it-works' },
  { label: 'Pricing', href: '#pricing', id: 'pricing' },
  { label: 'Customers', href: '#customers', id: 'customers' },
];

const Navbar: React.FC = () => {
  const { open } = useDemoPanel();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`mt-3 w-full max-w-6xl rounded-[1.6rem] transition-all duration-500 ${
          scrolled || mobileOpen
            ? 'bg-[#06060f]/80 border border-white/10 backdrop-blur-2xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.7)]'
            : 'bg-transparent border border-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-5 h-16">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5 group shrink-0">
            <span className="relative flex h-8 w-8 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#A8F046] via-[#00E5FF] to-[#2F6BFF] opacity-25 blur-md group-hover:opacity-50 transition-opacity" />
              <EyeMark size={30} className="relative drop-shadow-[0_0_10px_rgba(47,107,255,0.45)]" />
            </span>
            <span className="text-[18px] font-outfit font-bold tracking-tight text-white lowercase">
              unveilr
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 rounded-full p-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-3.5 py-2 text-[13.5px] font-medium rounded-full transition-colors duration-200 ${
                  active === link.id ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.07] border border-white/[0.06]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <button
              onClick={open}
              className="hidden sm:inline-flex btn-primary items-center gap-1.5 rounded-full px-4 py-2 text-[13.5px] font-semibold text-white"
            >
              Book a demo
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="md:hidden p-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden rounded-b-[1.6rem] border-t border-white/[0.06] bg-[#070716]/95 backdrop-blur-2xl"
            >
              <div className="flex flex-col gap-1 p-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-white rounded-2xl hover:bg-white/[0.05] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => { setMobileOpen(false); open(); }}
                  className="btn-primary mt-1 text-center rounded-2xl px-4 py-3 text-sm font-semibold text-white"
                >
                  Book a demo
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
