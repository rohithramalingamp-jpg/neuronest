import React, { useState } from 'react';
import { Icon } from './Icon';
import { motion, AnimatePresence } from 'motion/react';
import { CORE_CAPABILITIES, MULTI_SENSORY_TOOLKIT } from '../data/brochureData';
import { AnimatedHeading } from './AnimatedHeading';

export const SkillsToolkit: React.FC = () => {
  const [selectedToolId, setSelectedToolId] = useState<string>('maths');
  
  const capabilityIcons = [
    'solar:compass-bold-duotone',
    'solar:slider-vertical-bold-duotone',
    'solar:document-text-bold-duotone',
  ];

  const toolkitIconMap: Record<string, string> = {
    Calculator: 'solar:calculator-bold-duotone',
    BookOpen: 'solar:book-2-bold-duotone',
    PenTool: 'solar:pen-new-square-bold-duotone',
    Palette: 'solar:palette-bold-duotone',
    Puzzle: 'solar:widget-2-bold-duotone',
    HandMetal: 'solar:hand-pills-bold-duotone',
  };

  const selectedTool = MULTI_SENSORY_TOOLKIT.find((t) => t.id === selectedToolId) || MULTI_SENSORY_TOOLKIT[0];

  const clinicalMap: Record<string, { disorder: string; activity: string; evidence: string }> = {
    maths: {
      disorder: 'Dyscalculia, Spatial Deficits & Math Anxiety',
      activity: 'Concrete-Representational-Abstract (CRA) place value sequencing and tactile grouping.',
      evidence: 'Proven to bridge symbolic number meaning for children with non-verbal learning challenges.',
    },
    reading: {
      disorder: 'Developmental Dyslexia & Decoding Delays',
      activity: 'Color-coded phoneme-grapheme mapping, vowel slider drills, and syllable division.',
      evidence: 'Orton-Gillingham compliant systematic multisensory phonological reinforcement.',
    },
    writing: {
      disorder: 'Dysgraphia, Low Muscle Tone & Motor Fatigue',
      activity: 'Ergonomic silicone grip posture correction, slant-board angle writing, and sensory-guided tracing.',
      evidence: 'Reduces intrinsic muscle tension and increases letter formation legibility.',
    },
    creativity: {
      disorder: 'Emotional Frustration & Bilateral Motor Planning',
      activity: 'Tactile kneading, 3D shape formation, and sensory play to discharge academic stress.',
      evidence: 'Activates somatic calming centers while strengthening bilateral hand coordination.',
    },
    brain: {
      disorder: 'ADHD & Working Memory Processing Gaps',
      activity: 'Sequential reasoning grids, pattern extrapolation, and working memory recall cards.',
      evidence: 'Trains prefrontal cortex executive functions and sustained task perseverance.',
    },
    motor: {
      disorder: 'Developmental Coordination Disorder (Dyspraxia)',
      activity: 'Precision bead lacing, tweezer sorting, and fine pincer grasp calibration.',
      evidence: 'Directly supports pencil control, scissor handling, and independent self-care agility.',
    },
  };

  const selectedDetails = clinicalMap[selectedTool.id] || clinicalMap.maths;

  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5] border-t border-amber-950/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Capabilities Section with Staggered Fade-in-up Heading */}
        <div className="mb-20">
          <AnimatedHeading
            eyebrow="PROFESSIONAL COMPETENCIES"
            eyebrowColor="#2563D8"
            title={
              <>
                What You Will{' '}
                <span className="font-editorial italic font-normal text-[#2563D8]">
                  Master
                </span>
              </>
            }
            subtitle="Three cornerstones of modern remedial pedagogy that differentiate an ordinary tutor from a certified clinical specialist."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_CAPABILITIES.map((cap, index) => {
              const iconName = capabilityIcons[index] || 'solar:compass-bold-duotone';
              return (
                <motion.div
                  key={cap.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between luxury-card-glow"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#EEF5FF] text-[#2563D8] flex items-center justify-center mb-6">
                      <Icon icon={iconName} className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#12A89D] block mb-2">
                      {cap.highlight}
                    </span>

                    <h3 className="text-xl font-bold text-[#101828] mb-3 leading-snug">
                      {cap.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Icon icon="solar:check-circle-bold" className="w-4 h-4 text-[#2563D8]" />
                    <span>Included in Clinical Practicum</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Multi-Sensory Toolkit Subsection */}
        <div className="mt-16 pt-16 border-t border-slate-200/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <AnimatedHeading
              align="left"
              eyebrow="PRACTICAL INTERVENTION ARSENAL"
              eyebrowIcon="solar:magic-stick-3-bold-duotone"
              eyebrowColor="#D92B7F"
              title={
                <>
                  Your{' '}
                  <span className="font-editorial italic font-normal text-[#D92B7F]">
                    Multi-Sensory
                  </span>{' '}
                  Toolkit
                </>
              }
              subtitle="Tactile, auditory, and visual aids you will learn to build, administer, and integrate into daily classroom routines. Click any tool to inspect clinical usage."
              className="max-w-2xl"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {MULTI_SENSORY_TOOLKIT.map((tool, idx) => {
              const iconName = toolkitIconMap[tool.iconName] || 'solar:widget-2-bold-duotone';
              const isSelected = tool.id === selectedToolId;
              return (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  onClick={() => setSelectedToolId(tool.id)}
                  className={`bg-white rounded-2xl p-6 border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#2563D8] shadow-md ring-2 ring-[#2563D8]/20 bg-[#FCFDFF]'
                      : 'border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-[#2563D8] text-white' : 'bg-[#EAFBF8] text-[#12A89D]'
                        }`}
                      >
                        <Icon icon={iconName} className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-400">
                        {tool.category}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mb-1">
                      {tool.name}
                    </h4>

                    <div className="text-xs font-semibold text-[#2563D8] mb-2.5">
                      {tool.items}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className={isSelected ? 'text-[#2563D8] font-bold' : 'text-slate-400'}>
                      {isSelected ? 'Currently Inspecting' : 'Click to inspect clinical focus'}
                    </span>
                    <Icon icon="solar:arrow-right-linear" className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Interactive Inspection Drawer */}
          <motion.div
            layout
            className="bg-gradient-to-r from-[#101828] to-[#1E293B] text-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-800 overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTool.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#45D7C9] text-slate-900 flex items-center justify-center font-bold text-sm">
                      <Icon icon="solar:check-circle-bold" className="w-4 h-4 text-slate-900" />
                    </div>
                    <div>
                      <span className="text-xs text-[#45D7C9] font-bold uppercase tracking-wider">
                        Clinical Drill Spotlight: {selectedTool.name} ({selectedTool.items})
                      </span>
                      <h4 className="text-lg font-bold text-white">
                        Primary Intervention: {selectedDetails.disorder}
                      </h4>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    Tool ID: {selectedTool.id.toUpperCase()}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-300">
                  <div>
                    <strong className="text-white block mb-1">Prescribed Clinical Drill:</strong>
                    <p className="leading-relaxed text-slate-300">
                      {selectedDetails.activity}
                    </p>
                  </div>
                  <div>
                    <strong className="text-white block mb-1">Pedagogical Evidence Base:</strong>
                    <p className="leading-relaxed text-slate-300">
                      {selectedDetails.evidence}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
