import React, { useState } from 'react';
import { Icon } from './Icon';
import { motion } from 'motion/react';
import { EARNING_POTENTIAL } from '../data/brochureData';
import { AnimatedHeading } from './AnimatedHeading';

export const EarningPotential: React.FC = () => {
  const [hourlyRate, setHourlyRate] = useState<number>(1000);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(10);

  const weeklyIncome = hourlyRate * hoursPerWeek;
  const monthlyIncome = Math.round(weeklyIncome * 4.3);

  return (
    <section className="py-20 md:py-24 bg-[#F5F1EB]/85 border-t border-amber-950/5 bg-grid-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedHeading
          eyebrow="FINANCIAL LANDSCAPE"
          eyebrowIcon="solar:chart-2-bold-duotone"
          eyebrowColor="#12A89D"
          title={
            <>
              Build a{' '}
              <span className="font-editorial italic font-normal text-[#2563D8]">
                Specialized Career
              </span>
            </>
          }
          subtitle="Specialized qualification unlocks distinct practice models across independent consulting and permanent institutional placement."
          className="mb-14"
        />

        {/* Earning Cards Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Card 1: Freelance / Private */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden luxury-card-glow"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#EAFBF8] rounded-bl-full -z-0 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#12A89D]">
                  {EARNING_POTENTIAL.freelance.type}
                </span>
                <span className="w-8 h-8 rounded-lg bg-[#EAFBF8] text-[#12A89D] flex items-center justify-center">
                  <Icon icon="solar:wallet-money-bold-duotone" className="w-4 h-4" />
                </span>
              </div>

              <div className="mb-4">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#101828] tracking-tight tabular-nums block">
                  {EARNING_POTENTIAL.freelance.range}
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#12A89D] uppercase tracking-wider mt-1 block">
                  {EARNING_POTENTIAL.freelance.unit}
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {EARNING_POTENTIAL.freelance.description}
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-5 border-t border-slate-100 text-xs text-slate-500">
              Flexible scheduling for private clinic consults and 1:1 home sessions.
            </div>
          </motion.div>

          {/* Card 2: Full-Time Positions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden luxury-card-glow"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#EEF5FF] rounded-bl-full -z-0 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563D8]">
                  {EARNING_POTENTIAL.fulltime.type}
                </span>
                <span className="w-8 h-8 rounded-lg bg-[#EEF5FF] text-[#2563D8] flex items-center justify-center">
                  <Icon icon="solar:case-round-bold-duotone" className="w-4 h-4" />
                </span>
              </div>

              <div className="mb-4">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#101828] tracking-tight tabular-nums block">
                  {EARNING_POTENTIAL.fulltime.range}
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#2563D8] uppercase tracking-wider mt-1 block">
                  {EARNING_POTENTIAL.fulltime.unit}
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {EARNING_POTENTIAL.fulltime.description}
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-5 border-t border-slate-100 text-xs text-slate-500">
              Structured salaried employment with mandatory school resource rooms.
            </div>
          </motion.div>
        </div>

        {/* Interactive Practice Revenue Estimator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm mb-10"
        >
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-[#EEF5FF] text-[#2563D8] flex items-center justify-center shrink-0">
              <Icon icon="solar:calculator-bold-duotone" className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#101828]">
                Interactive Private Practice Estimator
              </h3>
              <p className="text-xs text-slate-500">
                Simulate potential independent practice earnings within the brochure&apos;s indicative hourly range (₹700 – ₹1,500/hr)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders & Presets */}
            <div className="lg:col-span-7 space-y-6">
              {/* Quick Presets */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Select Practice Archetype Preset:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Part-Time (6 hrs)', rate: 850, hours: 6 },
                    { label: 'Private Clinic (12 hrs)', rate: 1100, hours: 12 },
                    { label: 'Senior Specialist (18 hrs)', rate: 1500, hours: 18 },
                  ].map((preset) => {
                    const isActive = hourlyRate === preset.rate && hoursPerWeek === preset.hours;
                    return (
                      <button
                        key={preset.label}
                        type="button"
                        onClick={() => {
                          setHourlyRate(preset.rate);
                          setHoursPerWeek(preset.hours);
                        }}
                        className={`text-xs px-3 py-1.5 rounded-xl border transition-all cursor-pointer font-medium ${
                          isActive
                            ? 'bg-[#2563D8] text-white border-[#2563D8] shadow-2xs font-semibold'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        {preset.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Icon icon="solar:slider-vertical-bold-duotone" className="w-3.5 h-3.5 text-[#2563D8]" />
                    <span>Hourly Consulting Fee:</span>
                  </span>
                  <span className="text-sm font-extrabold text-[#2563D8] font-mono">
                    ₹{hourlyRate.toLocaleString()} / hr
                  </span>
                </div>
                <input
                  type="range"
                  min="700"
                  max="1500"
                  step="50"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full accent-[#2563D8] cursor-pointer"
                  aria-label="Hourly consulting fee slider"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span>₹700 (Introductory)</span>
                  <span>₹1,500 (Senior Specialist)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Icon icon="solar:slider-vertical-bold-duotone" className="w-3.5 h-3.5 text-[#12A89D]" />
                    <span>Clinical Practice Hours / Week:</span>
                  </span>
                  <span className="text-sm font-extrabold text-[#12A89D] font-mono">
                    {hoursPerWeek} hrs / week
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="25"
                  step="1"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full accent-[#12A89D] cursor-pointer"
                  aria-label="Clinical practice hours per week slider"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span>4 hrs (Part-Time Weekend)</span>
                  <span>25 hrs (Dedicated Practice)</span>
                </div>
              </div>
            </div>

            {/* Live Projected Revenue Box */}
            <div className="lg:col-span-5 bg-white/95 rounded-2xl p-6 border border-amber-950/10 text-center shadow-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Projected Monthly Revenue
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#101828] font-heading tabular-nums text-[#2563D8]">
                ₹{monthlyIncome.toLocaleString()}
              </div>
              <span className="text-xs text-slate-500 font-medium mt-1 block">
                Estimated at ~{hoursPerWeek * 4} sessions / month
              </span>

              <div className="mt-4 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
                <span>Weekly Equivalent:</span>
                <span className="font-bold text-slate-900 font-mono">₹{weeklyIncome.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Required Disclaimer */}
        <div className="max-w-3xl mx-auto flex items-start gap-2.5 p-4 rounded-xl bg-slate-100/90 border border-slate-200 text-xs text-slate-500">
          <Icon icon="solar:info-circle-bold-duotone" className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          <span>{EARNING_POTENTIAL.disclaimer}</span>
        </div>
      </div>
    </section>
  );
};
