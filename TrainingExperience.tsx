import React, { useRef } from 'react';
import { Icon } from './Icon';
import { motion } from 'motion/react';
import { AnimatedHeading } from './AnimatedHeading';

export const TrainingExperience: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: 'Hands-On Training',
      tag: 'Clinical Practicum',
      description: 'Physical manipulatives, diagnostic kit assemblies, and structured child observation practice.',
      icon: 'solar:layers-bold-duotone',
      color: '#2563D8',
      image: '/src/assets/images/workshop.jpeg',
    },
    {
      title: 'Practical Demonstrations',
      tag: 'Simulation Labs',
      description: 'Live diagnostic error analysis, dyslexia reading simulations, and handwriting grip remediation.',
      icon: 'solar:magic-stick-3-bold-duotone',
      color: '#12A89D',
      image: '/src/assets/images/gallery.jpeg',
    },
    {
      title: 'Collaborative Learning',
      tag: 'Peer Pods',
      description: 'Interactive case presentations, multidisciplinary IEP discussions, and shared lesson designs.',
      icon: 'solar:users-group-rounded-bold-duotone',
      color: '#D92B7F',
      image: '/src/assets/images/Collaborative Learning.jpeg',
    },
    {
      title: 'Classroom Application',
      tag: 'Board Aligned',
      description: 'Integrating accommodations directly into CBSE, ICSE, and international school syllabi.',
      icon: 'solar:book-2-bold-duotone',
      color: '#E9A800',
      image: '/src/assets/images/hero.jpeg',
    },
    {
      title: 'Expert-Led Sessions',
      tag: 'Direct Mentorship',
      description: 'Clinically grounded direction under Program Director M.G. Yaazhini and child psychologists.',
      icon: 'solar:user-check-bold-duotone',
      color: '#2563D8',
      image: '/src/assets/images/trainer.jpeg',
    },
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5] border-t border-amber-950/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <AnimatedHeading
            align="left"
            eyebrow="THE PEDAGOGICAL APPROACH"
            eyebrowColor="#2563D8"
            title={
              <>
                Inside the{' '}
                <span className="font-editorial italic font-normal text-[#2563D8]">
                  Neuronest
                </span>{' '}
                Learning Experience
              </>
            }
            subtitle="An immersive 90-hour learning format purposefully built around authentic tactile demonstration, active case simulation, and clinical reflection."
            className="max-w-xl"
          />

          {/* Carousel Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-slate-300 flex items-center justify-center text-slate-600 hover:text-slate-900 shadow-2xs cursor-pointer transition-colors"
              aria-label="Scroll experience left"
            >
              <Icon icon="solar:alt-arrow-left-linear" className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-slate-300 flex items-center justify-center text-slate-600 hover:text-slate-900 shadow-2xs cursor-pointer transition-colors"
              aria-label="Scroll experience right"
            >
              <Icon icon="solar:alt-arrow-right-linear" className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title}
              whileHover={{ y: -4 }}
              className="w-[280px] sm:w-[320px] shrink-0 bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between luxury-card-glow"
            >
              <div className="h-44 relative bg-slate-100 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-white/90 backdrop-blur-xs text-[11px] font-bold text-slate-900 shadow-2xs">
                  {exp.tag}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-xs"
                      style={{ backgroundColor: `${exp.color}18`, color: exp.color }}
                    >
                      <Icon icon={exp.icon} className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-400">
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {exp.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
