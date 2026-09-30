import React from 'react';
import { Icon } from './Icon';
import { motion } from 'motion/react';
import { TARGET_AUDIENCE } from '../data/brochureData';
import { AnimatedHeading } from './AnimatedHeading';

export const AudienceSection: React.FC = () => {
  const iconList = [
    'solar:magic-stick-3-bold-duotone',
    'solar:square-academic-cap-bold-duotone',
    'solar:hand-heart-bold-duotone',
    'solar:user-check-bold-duotone',
    'solar:buildings-bold-duotone',
    'solar:heart-bold-duotone',
    'solar:diploma-bold-duotone',
  ];

  return (
    <section className="py-20 md:py-24 bg-[#F5F1EB]/85 border-t border-amber-950/5 bg-grid-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedHeading
          eyebrow="ADMISSIONS PROFILE"
          eyebrowColor="#D92B7F"
          title={
            <>
              Who Is This{' '}
              <span className="font-editorial italic font-normal text-[#D92B7F]">
                Program For?
              </span>
            </>
          }
          subtitle="Engineered for proactive individuals committed to mastering evidence-based remedial interventions and inclusive pedagogy."
          className="mb-16"
        />

        {/* 7 Audience Profile Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {TARGET_AUDIENCE.map((aud, index) => {
            const iconName = iconList[index % iconList.length];
            return (
              <motion.div
                key={aud.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between luxury-card-glow"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-[#EEF5FF] text-[#2563D8] flex items-center justify-center mb-4 shadow-2xs">
                    <Icon icon={iconName} className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {aud.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {aud.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
