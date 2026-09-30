import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Icon } from './Icon';
import { motion, AnimatePresence } from 'motion/react';

interface FitDiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyWithProfile: (track: string, background: string) => void;
}

export const FitDiagnosticModal: React.FC<FitDiagnosticModalProps> = ({
  isOpen,
  onClose,
  onApplyWithProfile,
}) => {
  const [step, setStep] = useState<number>(1);
  const [background, setBackground] = useState<string>('School Teacher / Educator');
  const [goal, setGoal] = useState<string>('Launch Independent Remedial Clinic');
  const [schedule, setSchedule] = useState<string>('4 hours/week (Weekday Cadence)');

  const backgroundOptions = [
    { label: 'School Teacher / Educator', icon: 'solar:user-speak-bold-duotone', desc: 'Seeking SEN specialization & IEP tools' },
    { label: 'Psychology / MSW Graduate', icon: 'solar:diploma-verified-bold-duotone', desc: 'Translating theory into clinical practice' },
    { label: 'Allied Therapist (OT/SLP)', icon: 'solar:heart-pulse-bold-duotone', desc: 'Adding remedial cognitive interventions' },
    { label: 'Parent / Career Changer', icon: 'solar:shield-star-bold-duotone', desc: 'Passionate about neurodiversity support' },
  ];

  const goalOptions = [
    { label: 'Launch Independent Remedial Clinic', desc: 'Serve private clients with custom multi-sensory IEPs (₹700–₹1,500/hr)' },
    { label: 'Lead School SEN & Inclusion Cell', desc: 'Direct remedial interventions under NEP 2020 guidelines' },
    { label: 'Freelance Hybrid Specialist', desc: 'Combine school visits with flexible home/online consulting' },
  ];

  const scheduleOptions = [
    { label: '4 hours/week (Weekday Cadence)', desc: 'Optimal for active working teachers & university students' },
    { label: 'Focused Evening Batches', desc: 'Dedicated sessions designed to avoid work burnout' },
  ];

  const handleFinish = () => {
    onApplyWithProfile(`Recommended Track: ${goal}`, background);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#101828] to-[#1E293B] text-white p-6 sm:p-7 relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close diagnostic modal"
            >
              <Icon icon="solar:close-circle-bold" className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#45D7C9]/20 text-[#45D7C9] text-xs font-bold uppercase tracking-wider mb-2">
              <Icon icon="solar:magic-stick-3-bold-duotone" className="w-3.5 h-3.5" />
              <span>Diagnostic Fit Engine</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white">
              Discover Your Remedial Career Match
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Answer 3 quick questions to receive your tailored program roadmap and cohort recommendation.
            </p>

            {/* Progress dots */}
            <div className="flex items-center gap-2 mt-4">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    s === step
                      ? 'w-8 bg-[#45D7C9]'
                      : s < step
                      ? 'w-4 bg-[#2563D8]'
                      : 'w-4 bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-7">
            {step === 1 && (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563D8] block mb-1">
                  Question 1 of 3
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-4">
                  What is your primary educational or professional background?
                </h4>

                <div className="space-y-2.5">
                  {backgroundOptions.map((opt) => {
                    const isSelected = background === opt.label;
                    return (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => setBackground(opt.label)}
                        className={`w-full p-3.5 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                          isSelected
                            ? 'border-[#2563D8] bg-[#EEF5FF] shadow-xs'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                            isSelected ? 'bg-[#2563D8] text-white' : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          <Icon icon={opt.icon} className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <span className="block text-sm font-bold text-slate-900">
                            {opt.label}
                          </span>
                          <span className="block text-xs text-slate-500 mt-0.5">
                            {opt.desc}
                          </span>
                        </div>
                        {isSelected && (
                          <Icon icon="solar:check-circle-bold" className="w-5 h-5 text-[#2563D8] shrink-0 mt-1" />
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-5 py-2.5 rounded-xl bg-[#2563D8] text-white font-semibold text-sm hover:bg-[#1E40AF] transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Next Step</span>
                    <Icon icon="solar:arrow-right-bold" className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563D8] block mb-1">
                  Question 2 of 3
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-4">
                  What is your primary goal upon earning your certification?
                </h4>

                <div className="space-y-2.5">
                  {goalOptions.map((opt) => {
                    const isSelected = goal === opt.label;
                    return (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => setGoal(opt.label)}
                        className={`w-full p-4 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                          isSelected
                            ? 'border-[#12A89D] bg-[#EAFBF8] shadow-xs'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div className="flex-1">
                          <span className="block text-sm font-bold text-slate-900">
                            {opt.label}
                          </span>
                          <span className="block text-xs text-slate-600 mt-1 leading-relaxed">
                            {opt.desc}
                          </span>
                        </div>
                        {isSelected && (
                          <Icon icon="solar:check-circle-bold" className="w-5 h-5 text-[#12A89D] shrink-0 mt-1" />
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 font-medium cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-5 py-2.5 rounded-xl bg-[#2563D8] text-white font-semibold text-sm hover:bg-[#1E40AF] transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Next Step</span>
                    <Icon icon="solar:arrow-right-bold" className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563D8] block mb-1">
                  Question 3 of 3
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-4">
                  What weekly schedule fits best with your commitments?
                </h4>

                <div className="space-y-2.5">
                  {scheduleOptions.map((opt) => {
                    const isSelected = schedule === opt.label;
                    return (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => setSchedule(opt.label)}
                        className={`w-full p-4 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                          isSelected
                            ? 'border-[#2563D8] bg-[#EEF5FF] shadow-xs'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div className="flex-1">
                          <span className="block text-sm font-bold text-slate-900">
                            {opt.label}
                          </span>
                          <span className="block text-xs text-slate-600 mt-1">
                            {opt.desc}
                          </span>
                        </div>
                        {isSelected && (
                          <Icon icon="solar:check-circle-bold" className="w-5 h-5 text-[#2563D8] shrink-0 mt-1" />
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 font-medium cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setStep(4);
                      confetti({
                        particleCount: 50,
                        spread: 60,
                        origin: { y: 0.55 },
                        colors: ['#12A89D', '#2563D8', '#E9A800'],
                        zIndex: 99999,
                        disableForReducedMotion: true,
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#12A89D] text-white font-semibold text-sm hover:bg-[#0E857C] transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Generate My Match</span>
                    <Icon icon="solar:magic-wand-bold" className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#EAFBF8] text-[#12A89D] flex items-center justify-center mx-auto mb-3 shadow-2xs">
                  <Icon icon="solar:diploma-verified-bold-duotone" className="w-8 h-8 text-[#12A89D]" />
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-[#EEF5FF] text-[#2563D8] text-xs font-bold uppercase tracking-wider mb-2">
                  98% Clinical Cohort Match
                </div>

                <h4 className="text-xl font-extrabold text-slate-900 mb-2 font-heading">
                  Certified Remedial Specialist (Clinical Track)
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                  Based on your background as a <strong>{background}</strong> and your goal to <strong>{goal}</strong>, the 90-hour weekday cadence will prepare you with full IEP design, diagnostic batteries, and private practice acumen.
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-left mb-6 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Recommended Cohort:</span>
                    <span className="font-bold text-slate-900">2026 Direct Admissions</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Weekly Cadence:</span>
                    <span className="font-bold text-slate-900">{schedule}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Target Practice Rate:</span>
                    <span className="font-bold text-[#12A89D]">₹700 – ₹1,500 / hr</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleFinish}
                    className="flex-1 py-3 px-5 rounded-xl bg-[#2563D8] hover:bg-[#1E40AF] text-white font-semibold text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Apply with Selected Profile</span>
                    <Icon icon="solar:arrow-right-bold" className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="py-3 px-4 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium text-xs cursor-pointer"
                  >
                    Retake Quiz
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
