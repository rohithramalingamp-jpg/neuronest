import React, { useState, useEffect } from 'react';
import { Icon } from './Icon';
import { Logo } from './Logo';
import { motion, AnimatePresence, useScroll, useSpring, useReducedMotion } from 'motion/react';
import { INSTITUTION_INFO } from '../data/brochureData';

interface NavbarProps {
  onOpenApply: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#need' },
    { label: 'Program', href: '#program' },
    { label: 'Curriculum', href: '#curriculum' },
    { label: 'Learning Experience', href: '#experience' },
    { label: 'Career Paths', href: '#careers' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#101828] text-white py-1.5 px-4 text-xs font-medium border-b border-slate-800 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="w-2 h-2 rounded-full bg-[#12A89D] animate-ping shrink-0" />
            <span className="truncate text-slate-300">
              <strong className="text-white font-semibold">2026 Cohort Admissions Open:</strong> 90-Hour Certified Remedial Educator Program · Weekday Cadence
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 shrink-0 text-slate-400 text-[11px]">
            <span className="inline-flex items-center gap-1 text-slate-300">
              <Icon icon="solar:diploma-verified-bold-duotone" className="w-3.5 h-3.5 text-[#45D7C9]" />
              NEP 2020 Aligned
            </span>
            <span>·</span>
            <span className="font-mono">Direct Inquiries: +91 96592 28566</span>
          </div>
        </div>
      </div>

      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-amber-950/5 py-3'
            : 'bg-[#FAF8F5]/85 backdrop-blur-xs py-4 border-b border-amber-950/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Wordmark */}
            <a
              href="#hero"
              className="group focus-visible:outline-2 focus-visible:outline-[#2563D8] rounded-md transition-opacity hover:opacity-95"
              aria-label="Neuronest Training Institute Homepage"
            >
              <Logo variant="navbar" />
            </a>

            {/* Zone 2: 4–6 nav links, 1–2 word labels, single-line */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#2563D8] transition-colors whitespace-nowrap py-1 border-b-2 border-transparent hover:border-[#2563D8]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${INSTITUTION_INFO.phone.replace(/\s+/g, '')}`}
                className="hidden xl:flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 px-2.5 py-1.5 rounded-lg border border-slate-200/80 transition-colors"
                title="Call Neuronest Admissions"
              >
                <Icon icon="solar:phone-calling-bold-duotone" className="w-3.5 h-3.5 text-[#12A89D]" />
                <span>+91 96592 28566</span>
              </a>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenApply}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#2563D8] hover:bg-[#1E40AF] rounded-lg transition-all shadow-sm hover:shadow whitespace-nowrap cursor-pointer"
              >
                <span>Apply Now</span>
                <Icon icon="solar:arrow-right-up-linear" className="w-3.5 h-3.5" />
              </motion.button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenApply}
                className="px-3 py-1.5 text-xs font-semibold text-white bg-[#2563D8] rounded-md cursor-pointer"
              >
                Apply
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563D8]"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <Icon
                  icon={mobileMenuOpen ? 'solar:close-circle-bold' : 'solar:hamburger-menu-bold'}
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Subtle Scroll Progress Indicator */}
        {!shouldReduceMotion && (
          <motion.div
            style={{ scaleX, transformOrigin: '0%' }}
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2563D8] via-[#12A89D] to-[#45D7C9]"
          />
        )}
      </motion.header>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-[#FAF8F5] shadow-xl p-6 flex flex-col justify-between overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                  <Logo variant="navbar" showSubtitle={false} />
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 text-slate-500 hover:text-slate-900 rounded-md cursor-pointer"
                    aria-label="Close menu"
                  >
                    <Icon icon="solar:close-circle-linear" className="w-5 h-5" />
                  </button>
                </div>

                <nav className="mt-6 flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2.5 text-base font-medium text-slate-700 hover:text-[#2563D8] hover:bg-slate-100/70 rounded-lg transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-slate-200 space-y-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenApply();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#2563D8] rounded-xl shadow cursor-pointer"
                >
                  <span>Apply for 90-Hour Program</span>
                  <Icon icon="solar:arrow-right-up-linear" className="w-4 h-4" />
                </button>

                <div className="text-xs text-slate-500 space-y-2">
                  <a
                    href={`mailto:${INSTITUTION_INFO.email}`}
                    className="flex items-center gap-2 text-slate-600 hover:text-[#2563D8]"
                  >
                    <Icon icon="solar:letter-bold-duotone" className="w-4 h-4 text-[#12A89D]" />
                    <span>{INSTITUTION_INFO.email}</span>
                  </a>
                  <a
                    href={`tel:${INSTITUTION_INFO.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2 text-slate-600 hover:text-[#2563D8]"
                  >
                    <Icon icon="solar:phone-calling-bold-duotone" className="w-4 h-4 text-[#12A89D]" />
                    <span>{INSTITUTION_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
