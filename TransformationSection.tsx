import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { TRANSFORMATIONS } from '../data/brochureData';
import { AnimatedHeading } from './AnimatedHeading';

export const TransformationSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const rawOrb1Y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const rawOrb2Y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rawOrb1Scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.15]);

  const orb1Y = shouldReduceMotion ? 0 : rawOrb1Y;
  const orb2Y = shouldReduceMotion ? 0 : rawOrb2Y;
  const orb1Scale = shouldReduceMotion ? 1 : rawOrb1Scale;

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-[#101828] text-white relative overflow-hidden">
      {/* Background accents with subtle scroll parallax */}
      <motion.div
        style={{ y: orb1Y, scale: orb1Scale }}
        className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#2563D8]/10 rounded-full blur-3xl pointer-events-none will-change-transform"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="absolute bottom-0 right-0 w-80 h-80 bg-[#D92B7F]/10 rounded-full blur-3xl pointer-events-none will-change-transform"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedHeading
          eyebrow="LEARNER EVOLUTION"
          eyebrowIcon="solar:magic-stick-3-bold-duotone"
          eyebrowColor="#45D7C9"
          title={
            <>
              From Learning Struggles{' '}
              <span className="font-editorial italic font-normal text-[#45D7C9]">
                to New Possibilities
              </span>
            </>
          }
          titleClassName="text-white"
          subtitle="When educators shift from frustration to diagnostic empathy, students shift from defeat to empowered mastery."
          className="mb-16"
        />

        {/* 4 Transformation Pairs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TRANSFORMATIONS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, borderColor: 'rgba(69, 215, 201, 0.35)', backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xs transition-all duration-300 flex flex-col justify-between shadow-2xs hover:shadow-lg"
            >
              <div>
                {/* Visual Transition Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-white/10">
                  <div className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-400 tracking-wide">
                    {item.from}
                  </div>

                  <div className="flex items-center justify-center text-[#45D7C9]">
                    <Icon icon="solar:arrow-right-linear" className="w-5 h-5 hidden sm:block" />
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest sm:hidden">
                      Becomes
                    </span>
                  </div>

                  <div className="px-3.5 py-1.5 rounded-lg bg-[#2563D8]/30 border border-[#2563D8]/50 text-xs font-extrabold text-[#45D7C9] tracking-wide">
                    {item.to}
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#E9A800]">
                    Clinical Methodology
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5">
                    {item.focusArea}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 text-[11px] text-slate-400 italic">
                Outcome realized through structured individualized pacing and multi-sensory reinforcement.
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
