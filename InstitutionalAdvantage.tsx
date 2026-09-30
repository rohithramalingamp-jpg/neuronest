import React from 'react';
import { Icon } from './Icon';
import { motion } from 'motion/react';
import { INSTITUTIONAL_ADVANTAGES } from '../data/brochureData';
import { AnimatedHeading } from './AnimatedHeading';

export const InstitutionalAdvantage: React.FC = () => {
  const iconMap: Record<string, string> = {
    nep2020: 'solar:diploma-verified-bold-duotone',
    experiential: 'solar:compass-bold-duotone',
    inclusion: 'solar:hand-heart-bold-duotone',
    bridge: 'solar:routing-2-bold-duotone',
    employability: 'solar:case-round-bold-duotone',
    integration: 'solar:clock-circle-bold-duotone',
  };

  return (
    <section id="advantages" className="py-20 md:py-28 bg-[#F5F1EB]/85 border-t border-amber-950/5 bg-grid-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedHeading
          eyebrow="INSTITUTIONAL ADVANTAGE"
          eyebrowColor="#2563D8"
          title={
            <>
              Why Institutions Choose{' '}
              <span className="font-editorial italic font-normal text-[#2563D8]">
                Neuronest
              </span>
            </>
          }
          subtitle="A scientifically rigorous framework combining regulatory mandates, clinical diagnostics, and classroom-tested interventions."
          className="mb-16"
        />

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INSTITUTIONAL_ADVANTAGES.map((item, idx) => {
            const iconName = iconMap[item.id] || 'solar:diploma-verified-bold-duotone';
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, borderColor: 'rgba(37, 99, 216, 0.4)', transition: { duration: 0.2 } }}
                className="group relative bg-white rounded-3xl p-8 border border-slate-200/80 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between luxury-card-glow"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${item.accent}14`, color: item.accent }}
                    >
                      <Icon icon={iconName} className="w-6 h-6" />
                    </div>
                    <span className="font-heading font-bold text-sm tracking-widest text-slate-400">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#101828] mb-3 group-hover:text-[#2563D8] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle indicator bar */}
                <div
                  className="mt-6 h-[2px] w-8 rounded-full transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: item.accent }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
