import React from 'react';
import { Icon } from './Icon';
import { Logo } from './Logo';
import { motion } from 'motion/react';
import { INSTITUTION_INFO } from '../data/brochureData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <footer className="bg-[#0B111E] text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="md:col-span-6 lg:col-span-5">
            <div className="mb-5">
              <Logo variant="footer" />
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-6 font-editorial italic text-base text-slate-300">
              &ldquo;{INSTITUTION_INFO.tagline}&rdquo;
            </p>

            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Equipping forward-thinking educators with clinical diagnostics, multi-sensory techniques, and inclusive pedagogical intervention strategies.
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-3 lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Admissions &amp; Inquiries
            </h4>

            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${INSTITUTION_INFO.email}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <Icon icon="solar:letter-bold-duotone" className="w-4 h-4 text-[#12A89D] shrink-0" />
                <span className="font-mono text-xs sm:text-sm">{INSTITUTION_INFO.email}</span>
              </a>

              <a
                href={`tel:${INSTITUTION_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <Icon icon="solar:phone-calling-bold-duotone" className="w-4 h-4 text-[#12A89D] shrink-0" />
                <span className="font-mono text-xs sm:text-sm">{INSTITUTION_INFO.phone}</span>
              </a>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-400 leading-relaxed">
              Exclusive 90-Hour Certified Remedial Educator Program.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; 2026 Neuronest Training Institute. All rights reserved.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <Icon icon="solar:arrow-up-linear" className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
