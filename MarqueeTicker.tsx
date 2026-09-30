import React from 'react';
import { Icon } from './Icon';
import { motion, useReducedMotion } from 'motion/react';

interface MarqueeItem {
  icon: string;
  label: string;
  tag: string;
  color: string;
}

const MARQUEE_ITEMS: MarqueeItem[] = [
  { icon: 'solar:diploma-verified-bold-duotone', label: '90-Hour Practical Curriculum', tag: 'Core Program', color: '#2563D8' },
  { icon: 'solar:magic-stick-3-bold-duotone', label: 'Multi-Sensory Orton-Gillingham', tag: 'Methodology', color: '#12A89D' },
  { icon: 'solar:document-text-bold-duotone', label: 'Individualized IEP Clinical Roadmaps', tag: 'Assessment', color: '#D92B7F' },
  { icon: 'solar:verified-check-bold-duotone', label: 'NEP 2020 Inclusive Mandate', tag: 'Accreditation', color: '#E9A800' },
  { icon: 'solar:chart-2-bold-duotone', label: '₹700 – ₹1,500/hr Practice Range', tag: 'Career', color: '#12A89D' },
  { icon: 'solar:clock-circle-bold-duotone', label: 'Flexible 4 Hours / Weekday Cadence', tag: 'Schedule', color: '#2563D8' },
  { icon: 'solar:user-speak-rounded-bold-duotone', label: 'Master Trainer Guided Practicum', tag: 'Faculty', color: '#D92B7F' },
  { icon: 'solar:book-bookmark-bold-duotone', label: '60 Hands-On Clinical Units', tag: 'Syllabus', color: '#E9A800' },
];

export const MarqueeTicker: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Double the list to ensure infinite seamless looping
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="relative py-4 bg-[#101828] text-white border-y border-slate-800 overflow-hidden select-none">
      {/* Edge gradient masks for seamless fade out */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#101828] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#101828] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center gap-6 whitespace-nowrap will-change-transform"
        animate={shouldReduceMotion ? undefined : { x: ['0%', '-50%'] }}
        transition={
          shouldReduceMotion
            ? undefined
            : {
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 28,
                  ease: 'linear',
                },
              }
        }
      >
        {items.map((item, idx) => (
          <div
            key={`${item.label}-${idx}`}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-colors shrink-0"
          >
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${item.color}25`, color: item.color }}
            >
              <Icon icon={item.icon} className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-tight text-slate-200">
              {item.label}
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
              {item.tag}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
