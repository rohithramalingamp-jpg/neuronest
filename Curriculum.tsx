import React, { useState } from 'react';
import { Icon } from './Icon';
import { motion, AnimatePresence } from 'motion/react';
import { CURRICULUM_MODULES } from '../data/brochureData';
import { AnimatedHeading } from './AnimatedHeading';

export const Curriculum: React.FC = () => {
  const [activeModuleId, setActiveModuleId] = useState<number>(1);
  const [expandedMobileModules, setExpandedMobileModules] = useState<number[]>([1]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleMobileModule = (id: number) => {
    if (expandedMobileModules.includes(id)) {
      setExpandedMobileModules(expandedMobileModules.filter((m) => m !== id));
    } else {
      setExpandedMobileModules([...expandedMobileModules, id]);
    }
  };

  const activeModule = CURRICULUM_MODULES.find((m) => m.id === activeModuleId) || CURRICULUM_MODULES[0];

  // Filtering topics if search query present
  const matchingTopics = searchQuery.trim()
    ? CURRICULUM_MODULES.flatMap((mod) =>
        mod.topics
          .filter((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((t) => ({ topic: t, moduleNum: mod.number, moduleTitle: mod.title, moduleId: mod.id }))
      )
    : [];

  return (
    <section id="curriculum" className="py-20 md:py-28 bg-[#FAF8F5] border-t border-amber-950/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Staggered Fade-in-up */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <AnimatedHeading
              align="left"
              eyebrow="COMPREHENSIVE 6-MODULE SYLLABUS"
              eyebrowColor="#2563D8"
              title={
                <>
                  A Curriculum Built for{' '}
                  <span className="font-editorial italic font-normal text-[#2563D8]">
                    Real Classrooms
                  </span>
                </>
              }
              subtitle="60 structured clinical and instructional units covering foundational theory, diagnostic screening, multi-sensory remediation, and school integration."
            />

            {/* Quick condition filter buttons */}
            <div className="flex flex-wrap items-center gap-2 mt-5 text-xs">
              <span className="text-slate-400 font-medium">Quick find:</span>
              {['IEP', 'ADHD', 'Phonics', 'Dyscalculia', 'Dysgraphia', 'RTI'].map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchQuery(searchQuery === term ? '' : term)}
                  className={`px-3 py-1 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                    searchQuery === term
                      ? 'bg-[#2563D8] text-white border-[#2563D8] shadow-xs'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Icon icon="solar:magnifier-linear" className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search topics (e.g., IEP, ADHD)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563D8] focus:border-transparent transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* If Search is Active */}
        {searchQuery.trim() !== '' ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs mb-8"
          >
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <span className="text-sm font-bold text-slate-900">
                Found {matchingTopics.length} topic{matchingTopics.length === 1 ? '' : 's'} matching &ldquo;{searchQuery}&rdquo;
              </span>
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-[#2563D8] font-semibold hover:underline cursor-pointer"
              >
                Reset search
              </button>
            </div>

            {matchingTopics.length === 0 ? (
              <p className="text-sm text-slate-500 py-6 text-center">
                No syllabus topics found matching this keyword. Try searching for &ldquo;IEP&rdquo;, &ldquo;ADHD&rdquo;, &ldquo;Phonics&rdquo;, or &ldquo;Assessment&rdquo;.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {matchingTopics.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#EEF5FF] text-[#2563D8] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {item.moduleNum}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-slate-900 block mb-0.5">
                        {item.topic}
                      </span>
                      <span className="text-xs text-slate-500">
                        Module {item.moduleNum}: {item.moduleTitle}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ) : (
          <>
            {/* Desktop 2-Column Explorer */}
            <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
              {/* Module List Navigation */}
              <div className="col-span-5 space-y-3">
                {CURRICULUM_MODULES.map((mod) => {
                  const isActive = mod.id === activeModuleId;
                  return (
                    <motion.button
                      key={mod.id}
                      onClick={() => setActiveModuleId(mod.id)}
                      whileHover={{ x: 2 }}
                      className={`w-full text-left p-4.5 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-4 ${
                        isActive
                          ? 'bg-white border-[#2563D8] shadow-md ring-1 ring-[#2563D8]/30'
                          : 'bg-white/70 hover:bg-white border-slate-200/80 hover:border-slate-300 shadow-2xs'
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        <span
                          className={`w-8 h-8 rounded-lg flex items-center justify-center font-heading font-bold text-xs shrink-0 ${
                            isActive
                              ? 'bg-[#2563D8] text-white shadow-xs'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {mod.number}
                        </span>
                        <div>
                          <span className="text-xs font-bold text-slate-400 tracking-wider uppercase block">
                            Module {mod.number}
                          </span>
                          <h3
                            className={`text-base font-bold leading-snug ${
                              isActive ? 'text-[#2563D8]' : 'text-slate-800'
                            }`}
                          >
                            {mod.title}
                          </h3>
                          <span className="text-xs text-slate-500 mt-1 block">
                            {mod.duration}
                          </span>
                        </div>
                      </div>

                      <div
                        className={`w-2 h-2 rounded-full mt-2 shrink-0 ${
                          isActive ? 'bg-[#2563D8]' : 'bg-transparent'
                        }`}
                      />
                    </motion.button>
                  );
                })}
              </div>

              {/* Active Module Details & Topics List with Smooth Animated Switch */}
              <div className="col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-md p-8 lg:p-10 sticky top-24 luxury-card-glow">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeModule.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="pb-6 mb-6 border-b border-slate-100">
                      <div className="flex items-center gap-3 text-xs font-bold text-[#2563D8] uppercase tracking-wider mb-2">
                        <span className="px-2.5 py-1 rounded-md bg-[#EEF5FF]">
                          Module {activeModule.number}
                        </span>
                        <span className="text-slate-400">·</span>
                        <span className="text-slate-600 flex items-center gap-1.5 font-normal">
                          <Icon icon="solar:clock-circle-bold-duotone" className="w-3.5 h-3.5 text-[#12A89D]" />
                          {activeModule.duration}
                        </span>
                      </div>

                      <h3 className="text-2xl font-extrabold text-[#101828] mb-2 leading-tight">
                        {activeModule.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {activeModule.summary}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                        <Icon icon="solar:book-2-bold-duotone" className="w-4 h-4 text-[#2563D8]" />
                        <span>Unit Curriculum (10 Clinical Topics)</span>
                      </h4>

                      <motion.div
                        variants={{
                          hidden: { opacity: 0 },
                          visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.04, delayChildren: 0.05 },
                          },
                        }}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                      >
                        {activeModule.topics.map((topic, index) => (
                          <motion.div
                            key={topic}
                            variants={{
                              hidden: { opacity: 0, y: 10 },
                              visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                            }}
                            whileHover={{ scale: 1.015, y: -2 }}
                            className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-100 flex items-start gap-2.5 hover:bg-[#EEF5FF]/60 hover:border-[#2563D8]/20 transition-all cursor-default shadow-2xs"
                          >
                            <span className="text-xs font-bold text-[#2563D8] tabular-nums mt-0.5 shrink-0">
                              {String(index + 1).padStart(2, '0')}.
                            </span>
                            <span className="text-xs font-medium text-slate-800 leading-snug">
                              {topic}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile / Tablet Accordion View */}
            <div className="lg:hidden space-y-4">
              {CURRICULUM_MODULES.map((mod) => {
                const isExpanded = expandedMobileModules.includes(mod.id);
                return (
                  <div
                    key={mod.id}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs"
                  >
                    <button
                      onClick={() => toggleMobileModule(mod.id)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-md bg-[#EEF5FF] text-[#2563D8] font-bold text-xs flex items-center justify-center shrink-0">
                          {mod.number}
                        </span>
                        <div>
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                            Module {mod.number} · {mod.duration}
                          </span>
                          <span className="text-base font-bold text-slate-900 leading-snug block">
                            {mod.title}
                          </span>
                        </div>
                      </div>

                      <div className="text-slate-400 shrink-0">
                        <Icon
                          icon={isExpanded ? 'solar:alt-arrow-up-linear' : 'solar:alt-arrow-down-linear'}
                          className="w-5 h-5 text-[#2563D8]"
                        />
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-5 pb-5 pt-2 border-t border-slate-100">
                        <p className="text-xs text-slate-600 mb-4 italic">
                          {mod.summary}
                        </p>
                        <div className="space-y-2">
                          {mod.topics.map((t, idx) => (
                            <div
                              key={t}
                              className="text-xs text-slate-700 flex items-start gap-2 p-2 rounded-lg bg-slate-50"
                            >
                              <span className="font-bold text-[#2563D8] shrink-0">
                                {idx + 1}.
                              </span>
                              <span>{t}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
