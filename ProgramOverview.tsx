import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { AnimatedHeading } from './AnimatedHeading';
import { AnimatedCounter } from './AnimatedCounter';

export const ProgramOverview: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const rawOrb1Y = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const rawOrb2Y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const orb1Y = shouldReduceMotion ? 0 : rawOrb1Y;
  const orb2Y = shouldReduceMotion ? 0 : rawOrb2Y;

  const metrics = [
    {
      stat: '90',
      unit: 'Hours',
      label: '90-Hour Program',
      sub: 'Comprehensive clinical & pedagogical training',
      icon: 'solar:clock-circle-bold-duotone',
      color: '#2563D8',
    },
    {
      stat: '4',
      unit: 'hrs/wk',
      label: 'Weekday Schedule',
      sub: 'Engaging, focused weekly learning blocks',
      icon: 'solar:calendar-date-bold-duotone',
      color: '#12A89D',
    },
    {
      stat: '60',
      unit: 'Units',
      label: '60 In-Depth Units',
      sub: '6 comprehensive academic modules',
      icon: 'solar:notebook-bold-duotone',
      color: '#D92B7F',
    },
    {
      stat: '6',
      unit: 'Months',
      label: '6 Months Duration',
      sub: 'Paced to fit around academic & work commitments',
      icon: 'solar:layers-minimalistic-bold-duotone',
      color: '#E9A800',
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-[#101828] text-white relative overflow-hidden">
      {/* Subtle backdrop accents with scroll parallax */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute top-0 right-1/4 w-72 h-72 bg-[#2563D8]/10 rounded-full blur-3xl pointer-events-none will-change-transform"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#12A89D]/10 rounded-full blur-3xl pointer-events-none will-change-transform"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedHeading
          eyebrow="ACADEMIC CADENCE"
          eyebrowColor="#45D7C9"
          title="Program at a Glance"
          titleClassName="text-white"
          className="mb-12"
        />

        {/* 4 Primary Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white/5 border border-white/10 hover:border-white/25 rounded-3xl p-6 transition-all duration-300 backdrop-blur-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: `${m.color}25`, color: m.color }}
                  >
                    <Icon icon={m.icon} className="w-5 h-5" />
                  </span>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                    Metric 0{idx + 1}
                  </span>
                </div>

                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight tabular-nums">
                    {isNaN(Number(m.stat)) ? (
                      m.stat
                    ) : (
                      <AnimatedCounter value={Number(m.stat)} duration={1.5} />
                    )}
                  </span>
                  <span className="text-sm font-semibold text-slate-300">
                    {m.unit}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1">
                  {m.label}
                </h3>
              </div>

              <p className="text-xs text-slate-400 mt-3 pt-3 border-t border-white/10 leading-relaxed">
                {m.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
