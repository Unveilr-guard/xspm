import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ArrowRight, CheckCircle, Loader2, AlertCircle, ShieldCheck } from 'lucide-react';
import { useDemoPanel } from './DemoPanelContext';
import EyeMark from '../brand/EyeMark';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mpqkzead';

const companySizes = ['1–10', '11–50', '51–200', '201–500', '501–1,000', '1,000+'];

const labelCls = 'block text-[13px] font-medium text-gray-300 mb-1.5';
const fieldCls =
  'w-full rounded-2xl border border-white/[0.1] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-500 transition-all focus:outline-none focus:ring-2 focus:ring-[#2F6BFF]/30 focus:border-[#2F6BFF]/60';

const DemoPanel: React.FC = () => {
  const { isOpen, close } = useDemoPanel();

  const [form, setForm] = useState({ name: '', email: '', company: '', role: '', size: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  // esc to close + scroll lock
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, close]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          _subject: `Demo request from ${form.name} — ${form.company}`,
        }),
      });
      if (!res.ok) throw new Error('Submission failed. Please try again.');
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* panel */}
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Book a demo"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 36 }}
            className="absolute right-0 top-0 h-full w-full sm:w-[480px] overflow-y-auto overflow-x-hidden border-l border-white/[0.08] bg-[#070716]/95 backdrop-blur-2xl shadow-[-30px_0_80px_-20px_rgba(0,0,0,0.8)]"
          >
            {/* glow accents */}
            <div className="pointer-events-none absolute -top-20 -right-10 h-72 w-72 rounded-full bg-[#2F6BFF]/15 blur-[100px]" />
            <div className="pointer-events-none absolute top-1/2 -left-10 h-64 w-64 rounded-full bg-[#00E5FF]/10 blur-[90px]" />

            <div className="relative p-6 sm:p-8">
              {/* header */}
              <div className="mb-7 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                    <EyeMark size={24} />
                  </span>
                  <div>
                    <h2 className="font-outfit text-xl font-bold text-white">Book a demo</h2>
                    <p className="text-[13px] text-gray-400">See Unveilr on your stack.</p>
                  </div>
                </div>
                <button
                  onClick={close}
                  aria-label="Close"
                  className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {submitted ? (
                <div className="py-16 text-center">
                  <CheckCircle className="mx-auto mb-5 h-14 w-14 text-[#A8F046] drop-shadow-[0_0_10px_rgba(168,240,70,0.4)]" />
                  <h3 className="mb-2 text-xl font-bold text-white">Thanks — we'll be in touch.</h3>
                  <p className="text-sm text-gray-400">Our team will reach out within 24 hours.</p>
                  <button onClick={close} className="btn-ghost mt-8 rounded-full px-6 py-3 text-sm font-semibold text-white">
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className={labelCls} htmlFor="dp-name">Full Name <span className="text-[#2F6BFF]">*</span></label>
                    <input id="dp-name" className={fieldCls} placeholder="John Doe" required value={form.name} onChange={set('name')} />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelCls} htmlFor="dp-email">Email Address <span className="text-[#2F6BFF]">*</span></label>
                      <input id="dp-email" type="email" className={fieldCls} placeholder="john@company.com" required value={form.email} onChange={set('email')} />
                    </div>
                    <div>
                      <label className={labelCls} htmlFor="dp-company">Company <span className="text-[#2F6BFF]">*</span></label>
                      <input id="dp-company" className={fieldCls} placeholder="Acme Corp" required value={form.company} onChange={set('company')} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelCls} htmlFor="dp-role">Your Role <span className="text-[#2F6BFF]">*</span></label>
                      <input id="dp-role" className={fieldCls} placeholder="Security Engineer, CISO, etc." required value={form.role} onChange={set('role')} />
                    </div>
                    <div>
                      <label className={labelCls} htmlFor="dp-size">Company Size <span className="text-[#2F6BFF]">*</span></label>
                      <select
                        id="dp-size"
                        required
                        value={form.size}
                        onChange={set('size')}
                        className={`${fieldCls} appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10 ${form.size ? 'text-white' : 'text-gray-500'}`}
                        style={{
                          backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%23889' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                        }}
                      >
                        <option value="" disabled>Select company size</option>
                        {companySizes.map((s) => (
                          <option key={s} value={s} className="bg-[#0b0b1a] text-white">{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelCls} htmlFor="dp-msg">
                      What would you like to see in the demo? <span className="text-gray-500 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="dp-msg"
                      rows={4}
                      className={`${fieldCls} resize-none`}
                      placeholder="Tell us about your security challenges or specific features you're interested in..."
                      value={form.message}
                      onChange={set('message')}
                    />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 rounded-2xl border border-red-500/15 bg-red-500/5 px-4 py-3 text-sm text-red-400">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? (
                      <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
                    ) : (
                      <>Request Demo <ArrowRight className="h-4 w-4" /></>
                    )}
                  </button>

                  <p className="flex items-center justify-center gap-2 text-[12px] text-gray-500">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#A8F046]" />
                    We'll respond within 24 hours · No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DemoPanel;
