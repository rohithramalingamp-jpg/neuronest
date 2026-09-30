import React, { useState } from 'react';
import { Icon } from './Icon';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data/brochureData';
import { AnimatedHeading } from './AnimatedHeading';

export const FAQ: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const toggleFAQ = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-[#F5F1EB]/85 border-t border-amber-950/5 bg-grid-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedHeading
          eyebrow="CLARITY & ADMISSIONS"
          eyebrowIcon="solar:question-circle-bold-duotone"
          eyebrowColor="#2563D8"
          title={
            <>
              Frequently Asked{' '}
              <span className="font-editorial italic font-normal text-[#2563D8]">
                Questions
              </span>
            </>
          }
          subtitle="Answers regarding course duration, clinical syllabus structure, certification, and career prerequisites."
          className="mb-16"
        />

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563D8]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#101828] pr-2">
                    {faq.question}
                  </span>
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-500">
                    <Icon
                      icon={isOpen ? 'solar:alt-arrow-up-linear' : 'solar:alt-arrow-down-linear'}
                      className={`w-4 h-4 transition-colors ${isOpen ? 'text-[#2563D8]' : 'text-slate-400'}`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
