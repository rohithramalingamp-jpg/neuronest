import React, { useState, useEffect } from 'react';
import { Icon } from './Icon';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingDockProps {
  onOpenApply: () => void;
  onOpenDiagnostic: () => void;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({
  onOpenApply,
  onOpenDiagnostic,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 inset-x-0 z-40 flex justify-center pointer-events-none px-4"
        >
          <div className="pointer-events-auto bg-[#101828]/90 backdrop-blur-md border border-white/15 text-white shadow-2xl rounded-full p-2 flex items-center gap-2 sm:gap-3">
            {/* Live Cohort Status Pill */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#45D7C9] animate-pulse" />
              <span>2026 Admissions</span>
            </div>

            {/* Diagnostic Quiz Button */}
            <button
              onClick={onOpenDiagnostic}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all cursor-pointer"
              title="Assess your clinical fit in 60s"
            >
              <Icon icon="solar:magic-stick-3-bold-duotone" className="w-3.5 h-3.5 text-[#45D7C9]" />
              <span className="hidden md:inline">Fit Diagnostic</span>
              <span className="md:hidden">Quiz</span>
            </button>

            {/* Direct Apply Button */}
            <button
              onClick={onOpenApply}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-[#2563D8] hover:bg-[#1E40AF] text-white text-xs font-bold transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              <span>Apply Now</span>
              <Icon icon="solar:arrow-right-bold" className="w-3.5 h-3.5" />
            </button>

            {/* Inquire on WhatsApp */}
            <a
              href="https://wa.me/919659228566?text=Hi%20Neuronest%2C%20I%20would%20like%20to%20learn%20more%20about%20the%2090-Hour%20Remedial%20Educator%20Program."
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#12A89D]/20 hover:bg-[#12A89D]/40 text-[#45D7C9] flex items-center justify-center transition-colors cursor-pointer"
              title="Chat with Admissions on WhatsApp"
            >
              <Icon icon="solar:chat-round-line-bold" className="w-4 h-4 text-[#45D7C9]" />
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Back to Top"
              aria-label="Scroll to top of page"
            >
              <Icon icon="solar:arrow-up-linear" className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
