import React from 'react';
import { Icon } from './Icon';
import { motion } from 'motion/react';
import { TRAINER_INFO } from '../data/brochureData';
import { AnimatedHeading } from './AnimatedHeading';

export const TrainerProfile: React.FC = () => {
  return (
    <section id="program" className="py-20 md:py-28 bg-[#FAF8F5] border-t border-amber-950/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Staggered Fade-in-up */}
        <AnimatedHeading
          eyebrow="EXCLUSIVE CERTIFICATION PROGRAM"
          eyebrowColor="#D92B7F"
          title="Certified Remedial Educator"
          className="mb-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-16 px-6 py-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs text-center"
        >
          <p className="font-editorial italic font-normal text-xl sm:text-2xl text-[#2563D8] leading-snug">
            &ldquo;{TRAINER_INFO.quote}&rdquo;
          </p>
        </motion.div>

        {/* Profile Card Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10 lg:p-12 max-w-5xl mx-auto luxury-card-glow"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Trainer Image */}
            <div className="md:col-span-5 lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[280px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2563D8]/20 via-[#E9A800]/20 to-[#12A89D]/20 rounded-3xl transform rotate-2 scale-[1.03]" />
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 aspect-[3/4] bg-slate-100 shadow-md">
                  <img
                    src="/src/assets/images/trainer.jpeg"
                    alt={`${TRAINER_INFO.name} - ${TRAINER_INFO.role}`}
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent p-4 text-white text-center">
                    <span className="text-xs font-semibold block tracking-wide">Program Director &amp; Lead Trainer</span>
                    <span className="text-[11px] text-slate-300">Child Counselling Psychologist</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center">
              <div className="mb-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#12A89D] mb-1">
                  <Icon icon="solar:shield-check-bold-duotone" className="w-4 h-4 text-[#12A89D]" />
                  <span>DIRECTORATE OF REMEDIAL PEDAGOGY</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101828] mb-1">
                  {TRAINER_INFO.name}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-[#2563D8]">
                  {TRAINER_INFO.designation}
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  {TRAINER_INFO.role}
                </p>
              </div>

              {/* Bio summary */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {TRAINER_INFO.bio}
              </p>

              {/* Credentials Grid from Brochure */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                  Academic &amp; Clinical Qualifications
                </span>
                <div className="flex flex-wrap gap-2">
                  {TRAINER_INFO.credentials.map((cred) => (
                    <motion.div
                      key={cred.title}
                      whileHover={{ scale: 1.03, y: -1 }}
                      className="px-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs font-medium text-slate-700 flex items-center gap-1.5 hover:border-[#2563D8] transition-colors shadow-2xs"
                      title={cred.full}
                    >
                      <Icon icon="solar:diploma-bold-duotone" className="w-3.5 h-3.5 text-[#2563D8]" />
                      <span className="font-bold text-slate-900">{cred.title}</span>
                      <span className="text-[11px] text-slate-400 hidden sm:inline">· {cred.full}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Authority highlights */}
              <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Icon icon="solar:check-circle-bold-duotone" className="w-4 h-4 text-[#12A89D] shrink-0" />
                  <span>Extensive clinical child counselling expertise</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="solar:check-circle-bold-duotone" className="w-4 h-4 text-[#12A89D] shrink-0" />
                  <span>Active lead trainer across premier institutions</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
