import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Icon } from './Icon';
import { motion, AnimatePresence } from 'motion/react';
import { INSTITUTION_INFO } from '../data/brochureData';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProfileNote?: string;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose, initialProfileNote }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentRole: 'Teacher',
    qualification: 'B.Ed / Masters',
    preferredTiming: 'Weekday Morning',
    message: initialProfileNote || '',
  });

  // Keep message in sync if initialProfileNote is passed
  React.useEffect(() => {
    if (initialProfileNote) {
      setFormData((prev) => ({ ...prev, message: initialProfileNote }));
    }
  }, [initialProfileNote]);

  // Reset submission state when modal reopens
  React.useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setIsSubmitting(false);
      setErrors({});
    }
  }, [isOpen]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const triggerCelebration = () => {
    // Wave 1: Center burst
    confetti({
      particleCount: 85,
      spread: 75,
      origin: { y: 0.55 },
      colors: ['#12A89D', '#2563D8', '#D92B7F', '#E9A800', '#45D7C9'],
      zIndex: 99999,
      disableForReducedMotion: true,
    });

    // Wave 2: Left celebratory cannon
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0.1, y: 0.65 },
        colors: ['#12A89D', '#45D7C9', '#2563D8', '#E9A800'],
        zIndex: 99999,
        disableForReducedMotion: true,
      });
    }, 180);

    // Wave 3: Right celebratory cannon
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 0.9, y: 0.65 },
        colors: ['#D92B7F', '#2563D8', '#45D7C9', '#E9A800'],
        zIndex: 99999,
        disableForReducedMotion: true,
      });
    }, 340);

    // Wave 4: Glittering stars cascade
    setTimeout(() => {
      confetti({
        particleCount: 40,
        spread: 100,
        decay: 0.92,
        scalar: 1.25,
        origin: { y: 0.45 },
        shapes: ['star', 'circle'],
        colors: ['#E9A800', '#45D7C9', '#12A89D', '#2563D8'],
        zIndex: 99999,
        disableForReducedMotion: true,
      });
    }, 500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = 'Please provide a valid phone number (minimum 8 digits)';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable submission and trigger celebration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      triggerCelebration();
    }, 600);
  };

  const handleDownloadProspectus = () => {
    const syllabusContent = `NEURONEST TRAINING INSTITUTE
Certified Remedial Educator Program (90 Hours · 6 Months)
"Transform Learning Gaps into Stepping Stones."

Program Director & Lead Trainer: M.G. Yaazhini (MA, MSc, MEd, PGDSE, PGDC, DLP, DCP)
Contact: resourcesneuronest@gmail.com | +91 96592 28566

CURRICULUM MODULES SUMMARY:
Module 01: Foundations of Remedial Education (10 Units · 15 Hours)
Module 02: Neurodevelopmental Disorders (India) (10 Units · 15 Hours)
Module 03: Assessment & Identification (10 Units · 15 Hours)
Module 04: Language & Literacy Remediation (10 Units · 15 Hours)
Module 05: Math & Cognitive Skills Remediation (10 Units · 15 Hours)
Module 06: Classroom Management & Parents (10 Units · 15 Hours)

SCHEDULE: Weekday schedule (4 hours/week). Total 90 clinical and instructional hours.
`;
    const blob = new Blob([syllabusContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Neuronest-Certified-Remedial-Educator-Syllabus.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Bar */}
            <div className="bg-[#101828] text-white px-6 sm:px-8 py-6 relative">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <Icon icon="solar:close-circle-linear" className="w-5 h-5" />
              </button>

              <span className="text-[11px] font-bold uppercase tracking-wider text-[#45D7C9] block mb-1">
                EXCLUSIVELY FOR ASPIRING SPECIALISTS
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Apply for the 90-Hour Program
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Certified Remedial Educator · 6 Months · Weekday Cadence
              </p>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8">
              {isSubmitted ? (
                <div className="text-center py-4">
                  <div className="relative mx-auto mb-5 w-20 h-20 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', damping: 15, stiffness: 260 }}
                      className="w-20 h-20 rounded-2xl bg-[#EAFBF8] border-2 border-[#12A89D]/30 text-[#12A89D] flex items-center justify-center shadow-lg"
                    >
                      <Icon icon="solar:check-circle-bold-duotone" className="w-11 h-11" />
                    </motion.div>
                  </div>

                  <h4 className="text-2xl font-extrabold text-[#101828] mb-2 tracking-tight">
                    Application Received & Confirmed! 🎉
                  </h4>

                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                    Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. The Neuronest admissions committee has logged your priority candidacy for the upcoming 90-hour cohort.
                  </p>

                  <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/70 mb-6 text-left text-xs text-slate-700 space-y-2">
                    <div className="flex justify-between items-center pb-2 border-b border-amber-200/50">
                      <span className="text-amber-800 font-semibold flex items-center gap-1.5">
                        <Icon icon="solar:diploma-verified-bold-duotone" className="w-4 h-4 text-[#12A89D]" />
                        Application Reference:
                      </span>
                      <span className="font-mono font-bold text-slate-900 bg-white/80 px-2 py-0.5 rounded-md border border-amber-200">NN-2026-{Math.floor(1000 + Math.random() * 9000)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Candidate Email:</span>
                      <span className="font-medium text-slate-900">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Contact Telephone:</span>
                      <span className="font-medium text-slate-900">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Direct Inquiries:</span>
                      <span className="font-medium text-[#2563D8]">{INSTITUTION_INFO.phone}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={triggerCelebration}
                      className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-[#12A89D] bg-[#EAFBF8] hover:bg-[#D8F8F3] border border-[#12A89D]/30 rounded-xl transition-all cursor-pointer shadow-xs"
                    >
                      <Icon icon="solar:magic-stick-3-bold-duotone" className="w-4 h-4 text-[#12A89D]" />
                      <span>Replay Celebration 🎉</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={handleDownloadProspectus}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-[#2563D8] hover:bg-[#1E40AF] rounded-xl transition-colors cursor-pointer shadow-xs"
                    >
                      <Icon icon="solar:download-minimalistic-bold" className="w-4 h-4" />
                      <span>Download Syllabus</span>
                    </motion.button>

                    <button
                      type="button"
                      onClick={onClose}
                      className="py-3 px-4 text-xs sm:text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ananya Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#2563D8] ${
                        errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-slate-200 bg-white'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#2563D8] ${
                          errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-200 bg-white'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#2563D8] ${
                          errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-200 bg-white'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Current Professional Role
                      </label>
                      <select
                        value={formData.currentRole}
                        onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2563D8]"
                      >
                        <option value="Teacher">School Teacher</option>
                        <option value="Special Educator">Special Educator</option>
                        <option value="Counsellor">School / Child Counsellor</option>
                        <option value="Parent">Parent Seeking Understanding</option>
                        <option value="Psychology Graduate">Psychology / B.Ed Graduate</option>
                        <option value="Education Professional">School Administrator / Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Highest Educational Background
                      </label>
                      <select
                        value={formData.qualification}
                        onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2563D8]"
                      >
                        <option value="B.Ed / Masters">B.Ed / M.Ed</option>
                        <option value="Bachelors in Psychology">B.A / B.Sc in Psychology</option>
                        <option value="Masters in Psychology">M.A / M.Sc in Psychology / MSW</option>
                        <option value="Diploma in Special Education">Diploma in Special Education</option>
                        <option value="Other Degree">Other University Graduate</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Specific Learning Goals or Questions (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Tell us about your learning objectives or specific student challenges you wish to address..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2563D8]"
                    />
                  </div>

                  <div className="pt-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-white bg-[#2563D8] hover:bg-[#1E40AF] active:scale-[0.99] rounded-xl shadow-md transition-all cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Submitting Application...</span>
                      ) : (
                        <>
                          <span>Submit Application for Next Cohort</span>
                          <Icon icon="solar:arrow-right-bold" className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center pt-2">
                    By submitting, you agree to receive program details directly from Neuronest Training Institute via email and phone.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
