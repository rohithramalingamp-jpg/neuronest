import React from 'react';
import { Icon } from './Icon';
import { motion } from 'motion/react';
import { AnimatedHeading } from './AnimatedHeading';

interface ProgramFitProps {
  onOpenApply: () => void;
}

export const ProgramFit: React.FC<ProgramFitProps> = ({ onOpenApply }) => {
  return (
    <section className="py-20 md:py-24 bg-[#FAF8F5] border-t border-amber-950/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#EEF5FF] via-white to-[#EAFBF8] rounded-3xl border border-slate-200 p-8 sm:p-12 lg:p-16 shadow-xs relative overflow-hidden"
        >
          <div className="max-w-3xl">
            <AnimatedHeading
              align="left"
              eyebrow="FLEXIBLE PROFESSIONAL FORMAT"
              eyebrowColor="#2563D8"
              title={
                <>
                  Designed to Fit Around Your{' '}
                  <span className="font-editorial italic font-normal text-[#2563D8]">
                    Academic Journey
                  </span>
                </>
              }
              subtitle="At Neuronest, we recognize that our educators and scholars manage active careers and rigorous collegiate courses. Our 90-hour curriculum is structured into an accessible 4 hours/week weekday schedule, allowing for steady retention, clinical practice, and continuous professional integration without burnout."
              className="mb-8"
            />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8">
              <motion.div whileHover={{ y: -3 }} className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <Icon icon="solar:clock-circle-bold-duotone" className="w-6 h-6 text-[#2563D8] mb-2" />
                <span className="block text-xl font-extrabold text-slate-900 tabular-nums">90 Hours</span>
                <span className="text-xs text-slate-500">Total clinical coursework</span>
              </motion.div>

              <motion.div whileHover={{ y: -3 }} className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <Icon icon="solar:calendar-date-bold-duotone" className="w-6 h-6 text-[#12A89D] mb-2" />
                <span className="block text-xl font-extrabold text-slate-900 tabular-nums">6 Months</span>
                <span className="text-xs text-slate-500">Structured academic pace</span>
              </motion.div>

              <motion.div whileHover={{ y: -3 }} className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <Icon icon="solar:clock-circle-bold-duotone" className="w-6 h-6 text-[#D92B7F] mb-2" />
                <span className="block text-xl font-extrabold text-slate-900 tabular-nums">4 Hrs/Wk</span>
                <span className="text-xs text-slate-500">Weekday learning blocks</span>
              </motion.div>

              <motion.div whileHover={{ y: -3 }} className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <Icon icon="solar:medal-star-bold-duotone" className="w-6 h-6 text-[#E9A800] mb-2" />
                <span className="block text-xl font-extrabold text-slate-900 tabular-nums">6 Modules</span>
                <span className="text-xs text-slate-500">60 specialized units</span>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenApply}
                className="px-7 py-3.5 text-sm font-semibold text-white bg-[#2563D8] hover:bg-[#1E40AF] rounded-xl shadow-sm hover:shadow transition-all cursor-pointer text-center"
              >
                Inquire for Next Cohort Dates
              </motion.button>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Icon icon="solar:shield-check-bold-duotone" className="w-4 h-4 text-[#12A89D] shrink-0" />
                <span>Certificate granted upon completion of all 6 modules and practical assessments</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
