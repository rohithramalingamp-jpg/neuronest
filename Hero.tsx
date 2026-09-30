import React, { useRef } from 'react';
import { Icon } from './Icon';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { INSTITUTION_INFO } from '../data/brochureData';

interface HeroProps {
  onOpenApply: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenApply }) => {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll progress for Hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transformations for background decorative shapes
  const rawBgOrb1Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const rawBgOrb1Scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const rawBgOrb2Y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const rawBgOrb2X = useTransform(scrollYProgress, [0, 1], [0, -35]);

  // Parallax transformations for Hero visual asset composition
  const rawImageContainerY = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rawImageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const rawImageY = useTransform(scrollYProgress, [0, 1], [0, -25]);
  const rawBackingRotate = useTransform(scrollYProgress, [0, 1], [1, 3.5]);
  const rawBackingY = useTransform(scrollYProgress, [0, 1], [0, 20]);

  // Floating badges with opposing parallax depths
  const rawBadge1Y = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const rawBadge2Y = useTransform(scrollYProgress, [0, 1], [0, 55]);

  // Respect prefers-reduced-motion accessibility preference
  const bgOrb1Y = shouldReduceMotion ? 0 : rawBgOrb1Y;
  const bgOrb1Scale = shouldReduceMotion ? 1 : rawBgOrb1Scale;
  const bgOrb2Y = shouldReduceMotion ? 0 : rawBgOrb2Y;
  const bgOrb2X = shouldReduceMotion ? 0 : rawBgOrb2X;
  const imageContainerY = shouldReduceMotion ? 0 : rawImageContainerY;
  const imageScale = shouldReduceMotion ? 1 : rawImageScale;
  const imageY = shouldReduceMotion ? 0 : rawImageY;
  const backingRotate = shouldReduceMotion ? 1 : rawBackingRotate;
  const backingY = shouldReduceMotion ? 0 : rawBackingY;
  const badge1Y = shouldReduceMotion ? 0 : rawBadge1Y;
  const badge2Y = shouldReduceMotion ? 0 : rawBadge2Y;

  // Staggered hero entrance variants
  const heroContentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const heroItemVariants = {
    hidden: {
      opacity: 0,
      y: 24,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const heroHeadlineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.06,
      },
    },
  };

  const heroHeadlineLineVariants = {
    hidden: {
      opacity: 0,
      y: 32,
      filter: 'blur(6px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section ref={heroRef} id="hero" className="relative pt-6 pb-12 md:pt-10 md:pb-14 overflow-hidden bg-grid-subtle">
      {/* Soft architectural background shapes with scroll parallax */}
      <motion.div
        style={{ y: bgOrb1Y, scale: bgOrb1Scale }}
        className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-gradient-to-bl from-[#EEF5FF] via-[#EAFBF8]/40 to-transparent rounded-full blur-3xl opacity-80 transform translate-x-1/4 -translate-y-1/4 pointer-events-none will-change-transform"
      />
      <motion.div
        style={{ y: bgOrb2Y, x: bgOrb2X }}
        className="absolute bottom-10 left-10 -z-10 w-96 h-96 bg-gradient-to-tr from-[#FFF0F7]/60 via-[#EEF5FF]/50 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none will-change-transform"
      />

      <div className="max-w-[1320px] mx-auto px-1 sm:px-2 lg:px-3">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 items-center">
          {/* Left Column: Copy & Actions with Staggered Entrance */}
          <motion.div
            variants={heroContentVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Main Headline with Staggered Fade-in-up Lines */}
            <motion.h1
              variants={heroHeadlineVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-[#101828] font-heading font-['Plus_Jakarta_Sans',sans-serif] leading-[1.08] tracking-[-0.02em] mb-4 max-w-2xl text-balance"
            >
              <motion.span variants={heroHeadlineLineVariants} className="block">
                Transform Learning Gaps
              </motion.span>
              <motion.span variants={heroHeadlineLineVariants} className="block mt-1">
                into{' '}
                <span className="font-editorial italic font-normal text-[#2563D8] underline decoration-[#45D7C9] decoration-wavy decoration-2 underline-offset-8">
                  Stepping Stones.
                </span>
              </motion.span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              variants={heroItemVariants}
              className="text-base sm:text-lg text-[#475467] leading-relaxed mb-6 max-w-xl"
            >
              Welcome to Neuronest, a premier training institute dedicated to bridging the critical gap in modern education. We provide future-focused, highly specialized training that turns passionate individuals into highly skilled remedial educators.
            </motion.p>

            {/* Primary & Secondary Action Buttons */}
            <motion.div
              variants={heroItemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenApply}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm sm:text-base font-semibold text-white bg-[#2563D8] hover:bg-[#1E40AF] active:scale-[0.99] rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Apply for the 90-Hour Program</span>
                <Icon icon="solar:arrow-right-bold" className="w-4 h-4" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.99 }}
                href="#curriculum"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl transition-all shadow-2xs hover:shadow-xs text-center"
              >
                <Icon icon="solar:book-2-bold-duotone" className="w-4 h-4 text-[#12A89D]" />
                <span>Explore 6-Module Syllabus</span>
              </motion.a>
            </motion.div>

            {/* Trust & Structure Strip */}
            <motion.div variants={heroItemVariants} className="pt-5 border-t border-slate-200/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                <motion.div
                  whileHover={{ y: -3 }}
                  className="p-3.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-2xs transition-transform"
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 mb-0.5">
                    <Icon icon="solar:clock-circle-bold-duotone" className="w-4 h-4 text-[#2563D8]" />
                    <span>90-Hour Program</span>
                  </div>
                  <span className="text-[11px] text-slate-500 block">Comprehensive training</span>
                </motion.div>

                <motion.div
                  whileHover={{ y: -3 }}
                  className="p-3.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-2xs transition-transform"
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 mb-0.5">
                    <Icon icon="solar:calendar-bold-duotone" className="w-4 h-4 text-[#12A89D]" />
                    <span>6-Month Course</span>
                  </div>
                  <span className="text-[11px] text-slate-500 block">Structured pacing</span>
                </motion.div>

                <motion.div
                  whileHover={{ y: -3 }}
                  className="p-3.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-2xs transition-transform"
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 mb-0.5">
                    <Icon icon="solar:book-bookmark-bold-duotone" className="w-4 h-4 text-[#D92B7F]" />
                    <span>6 Modules</span>
                  </div>
                  <span className="text-[11px] text-slate-500 block">60 clinical units</span>
                </motion.div>

                <motion.div
                  whileHover={{ y: -3 }}
                  className="p-3.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-2xs transition-transform"
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 mb-0.5">
                    <Icon icon="solar:check-circle-bold-duotone" className="w-4 h-4 text-[#E9A800]" />
                    <span>Weekday Cadence</span>
                  </div>
                  <span className="text-[11px] text-slate-500 block">4 hrs / week</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Visual Asset Composition with Subtle Parallax */}
          <div className="lg:col-span-5 relative">
            <motion.div
              style={{ y: imageContainerY }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-md lg:max-w-none will-change-transform"
            >
              {/* Backing decorative frame with parallax rotation */}
              <motion.div
                style={{ y: backingY, rotate: backingRotate }}
                className="absolute inset-0 bg-gradient-to-tr from-[#2563D8]/15 via-[#12A89D]/15 to-transparent rounded-3xl scale-[1.02] will-change-transform"
              />

              {/* Main Image Frame with subtle inner image parallax */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-white aspect-[4/3] sm:aspect-[16/11]">
                <motion.img
                  style={{ scale: imageScale, y: imageY }}
                  src="/src/assets/images/hero.jpeg"
                  alt="Certified Remedial Educator guiding student with multi-sensory materials"
                  className="w-full h-full object-cover object-center will-change-transform"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle scrim for bottom caption readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded bg-[#2563D8] text-[10px] font-bold tracking-wider uppercase">
                      PRACTICUM
                    </span>
                    <span className="text-[11px] text-slate-300">Hands-on Multi-Sensory Methods</span>
                  </div>
                  <p className="font-bold text-sm sm:text-base drop-shadow-sm text-white">
                    Clinical &amp; Classroom Remediation
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: NEP 2020 Strict Alignment with Parallax Offset */}
              <motion.div
                style={{ y: badge1Y }}
                animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
                transition={shouldReduceMotion ? undefined : { duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-md rounded-2xl p-3 sm:p-3.5 flex items-center gap-3 will-change-transform"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EAFBF8] text-[#12A89D] flex items-center justify-center shrink-0">
                  <Icon icon="solar:magic-stick-3-bold-duotone" className="w-5 h-5 text-[#12A89D]" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Framework</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">NEP 2020 Aligned</span>
                </div>
              </motion.div>

              {/* Floating Badge 2: Diagnostic & Intervention Card with Counter Parallax */}
              <motion.div
                style={{ y: badge2Y }}
                animate={shouldReduceMotion ? undefined : { y: [0, 6, 0] }}
                transition={shouldReduceMotion ? undefined : { duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-4 bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-md rounded-2xl p-3.5 flex items-center gap-3 max-w-[220px] will-change-transform"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EEF5FF] text-[#2563D8] flex items-center justify-center shrink-0 font-bold text-sm">
                  1:1
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-slate-900">Individual IEPs</span>
                  <span className="text-[11px] text-slate-500 leading-tight block">Evidence-based clinical roadmaps</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

