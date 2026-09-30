import React from 'react';
import { Icon } from './Icon';
import { motion } from 'motion/react';
import { CAREER_PATHWAYS } from '../data/brochureData';
import { AnimatedHeading } from './AnimatedHeading';

interface CareerPathsProps {
  onOpenApply: () => void;
}

export const CareerPaths: React.FC<CareerPathsProps> = ({ onOpenApply }) => {
  const iconMap: Record<string, string> = {
    'resource-teacher': 'solar:square-academic-cap-bold-duotone',
    'special-school': 'solar:buildings-bold-duotone',
    entrepreneur: 'solar:shop-2-bold-duotone',
  };

  return (
    <section id="careers" className="py-20 md:py-28 bg-[#FAF8F5] border-t border-amber-950/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedHeading
          eyebrow="VOCATIONAL TRAJECTORY"
          eyebrowColor="#2563D8"
          title={
            <>
              Turn Your Expertise{' '}
              <span className="font-editorial italic font-normal text-[#2563D8]">
                Into a Career
              </span>
            </>
          }
          subtitle="Remedial education is no longer an optional add-on; regulatory mandates and rising awareness make certified specialists critical to educational infrastructure."
          className="mb-16"
        />

        {/* 3 Career Pathway Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CAREER_PATHWAYS.map((career, idx) => {
            const iconName = iconMap[career.id] || 'solar:square-academic-cap-bold-duotone';
            return (
              <motion.div
                key={career.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between luxury-card-glow"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EEF5FF] text-[#2563D8] flex items-center justify-center mb-6 shadow-2xs">
                    <Icon icon={iconName} className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#12A89D] block mb-1">
                    {career.environment}
                  </span>

                  <h3 className="text-xl font-bold text-[#101828] mb-1 leading-snug">
                    {career.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#2563D8] mb-4">
                    {career.role}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {career.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Key Competency Areas
                    </span>
                    {career.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Icon icon="solar:check-circle-bold-duotone" className="w-4 h-4 text-[#12A89D] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onOpenApply}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-[#2563D8] bg-[#EEF5FF] hover:bg-[#2563D8] hover:text-white rounded-xl transition-all cursor-pointer shadow-2xs"
                  >
                    <span>Prepare for this Role</span>
                    <Icon icon="solar:arrow-right-linear" className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
