import React, { useRef } from 'react';
import { Icon } from './Icon';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { INSTITUTION_INFO } from '../data/brochureData';
import { AnimatedHeading } from './AnimatedHeading';

interface FinalCTAProps {
  onOpenApply: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenApply }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const rawOrb1Y = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const rawOrb2Y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rawOrb1Scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.2]);

  const orb1Y = shouldReduceMotion ? 0 : rawOrb1Y;
  const orb2Y = shouldReduceMotion ? 0 : rawOrb2Y;
  const orb1Scale = shouldReduceMotion ? 1 : rawOrb1Scale;

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-[#101828] text-white relative overflow-hidden">
      {/* Background gradients with subtle scroll parallax */}
      <motion.div
        style={{ y: orb1Y, scale: orb1Scale }}
        className="absolute top-0 right-0 w-96 h-96 bg-[#2563D8]/15 rounded-full blur-3xl pointer-events-none will-change-transform"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#12A89D]/15 rounded-full blur-3xl pointer-events-none will-change-transform"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimatedHeading
          eyebrow="COHORT ENROLLMENT NOW OPEN"
          eyebrowIcon="solar:magic-stick-3-bold-duotone"
          eyebrowColor="#45D7C9"
          title={
            <>
              Ready to{' '}
              <span className="font-editorial italic font-normal text-[#45D7C9]">
                Transform Lives?
              </span>
            </>
          }
          titleClassName="text-white lg:text-6xl"
          subtitle="Applications for our next intensive 90-hour cohort are now officially open. Join an elite group of educators dedicated to turning learning difficulties into milestones of growth."
          subtitleClassName="text-slate-300 max-w-2xl mx-auto mb-10"
          className="mb-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenApply}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#2563D8] hover:bg-[#1E40AF] active:scale-[0.99] rounded-xl shadow-lg transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Apply for the Program</span>
              <Icon icon="solar:arrow-right-bold" className="w-4 h-4" />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`mailto:${INSTITUTION_INFO.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-slate-200 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-all"
            >
              <Icon icon="solar:letter-bold-duotone" className="w-4 h-4 text-[#45D7C9]" />
              <span>Contact Neuronest</span>
            </motion.a>
          </div>

          {/* Direct Contact Cards */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm text-slate-300">
            <a
              href={`mailto:${INSTITUTION_INFO.email}`}
              className="flex items-center gap-2.5 hover:text-white transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#45D7C9]">
                <Icon icon="solar:letter-bold-duotone" className="w-4 h-4" />
              </div>
              <span className="font-mono text-xs sm:text-sm">{INSTITUTION_INFO.email}</span>
            </a>

            <a
              href={`tel:${INSTITUTION_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2.5 hover:text-white transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#45D7C9]">
                <Icon icon="solar:phone-calling-bold-duotone" className="w-4 h-4" />
              </div>
              <span className="font-mono text-xs sm:text-sm">{INSTITUTION_INFO.phone}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
