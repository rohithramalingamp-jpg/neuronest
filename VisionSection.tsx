import React from 'react';
import { Icon } from './Icon';
import { motion } from 'motion/react';
import { INSTITUTION_INFO } from '../data/brochureData';
import { AnimatedHeading } from './AnimatedHeading';

export const VisionSection: React.FC = () => {
  const focusPillars = [
    {
      title: 'Identifying the Neurological "Why"',
      description: 'Understanding the cognitive architecture behind dyslexia, dyscalculia, ADHD, and processing delays.',
      icon: 'solar:brain-bold-duotone',
      color: '#2563D8',
    },
    {
      title: 'Targeted Interventions',
      description: 'Customized educational scaffolds replacing one-size-fits-all rote repetition.',
      icon: 'solar:target-bold-duotone',
      color: '#12A89D',
    },
    {
      title: 'Multi-Sensory Strategies',
      description: 'Kinesthetic, auditory, and tactile modalities that activate alternative neural pathways.',
      icon: 'solar:layers-bold-duotone',
      color: '#D92B7F',
    },
    {
      title: 'Measurable Success',
      description: 'Systematic pre-and-post assessments demonstrating concrete grade-level progress.',
      icon: 'solar:medal-star-bold-duotone',
      color: '#E9A800',
    },
    {
      title: 'Practical Classroom Application',
      description: 'Realistic accommodations designed specifically for active Indian board classrooms.',
      icon: 'solar:magic-stick-3-bold-duotone',
      color: '#2563D8',
    },
  ];

  return (
    <section id="need" className="py-20 md:py-28 bg-[#FAF8F5] border-t border-amber-950/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Staggered Fade-in-up */}
        <AnimatedHeading
          align="left"
          eyebrow="THE VISION & NEED"
          eyebrowColor="#12A89D"
          title={
            <>
              The Gap Is Real.{' '}
              <span className="font-editorial italic font-normal text-[#2563D8]">
                The Opportunity Is Greater.
              </span>
            </>
          }
          className="mb-14 md:mb-16"
        />

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: High-Impact Statistic Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="bg-gradient-to-br from-[#101828] via-[#162032] to-[#1E293B] text-white p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden border border-slate-800">
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-[#2563D8]/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-48 h-48 bg-[#12A89D]/20 rounded-full blur-2xl" />

              <div className="relative z-10">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#45D7C9] mb-4">
                  National Educational Reality
                </span>

                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-6xl sm:text-7xl font-extrabold font-heading text-white tracking-tight tabular-nums">
                    {INSTITUTION_INFO.primaryStat}
                  </span>
                  <span className="text-xl sm:text-2xl font-semibold text-slate-300">
                    Students
                  </span>
                </div>

                {/* Visual 5-student matrix representation */}
                <div className="flex items-center gap-2 mb-6 p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex gap-2 text-xs">
                    <span className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center text-[11px] font-bold text-slate-300">01</span>
                    <span className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center text-[11px] font-bold text-slate-300">02</span>
                    <span className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center text-[11px] font-bold text-slate-300">03</span>
                    <span className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center text-[11px] font-bold text-slate-300">04</span>
                    <span className="w-6 h-6 rounded-md bg-[#2563D8] text-white flex items-center justify-center text-[11px] font-bold ring-2 ring-[#45D7C9] animate-pulse" title="1 in 5 requires specialized remedial intervention">05</span>
                  </div>
                  <span className="text-[11px] text-slate-300 ml-2 font-medium">
                    20% need specialized intervention
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 leading-snug">
                  Today, 1 in 5 students faces learning difficulties in regular schooling.
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  Traditional classrooms are severely struggling to keep up with the diverse cognitive needs of today&apos;s youth. These students don&apos;t simply need to &ldquo;try harder&rdquo; — they require a completely different approach.
                </p>

                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                  <div className="flex items-center gap-2.5 text-xs text-slate-200">
                    <Icon icon="solar:check-circle-bold-duotone" className="w-4 h-4 text-[#45D7C9] shrink-0" />
                    <span>Early diagnostic screening prevents chronic academic distress</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Mission Content & 5 Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-[#D92B7F] block mb-2">
                OUR MISSION
              </span>
              <p className="text-lg sm:text-xl font-medium text-slate-900 leading-relaxed">
                Our mission at Neuronest is to give aspiring educators the exact diagnostic tools, pedagogical methodologies, and unshakeable confidence to be that life-changing difference in a child&apos;s academic journey.
              </p>
            </motion.div>

            {/* 5 Focus Pillars */}
            <div className="space-y-4">
              {focusPillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold text-sm"
                    style={{ backgroundColor: `${pillar.color}15`, color: pillar.color }}
                  >
                    <Icon icon={pillar.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-0.5">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
