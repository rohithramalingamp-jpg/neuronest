import React from 'react';
import { motion } from 'motion/react';
import { Icon } from './Icon';

interface AnimatedHeadingProps {
  eyebrow?: string;
  eyebrowIcon?: string;
  eyebrowColor?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  isHero?: boolean;
}

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  eyebrow,
  eyebrowIcon,
  eyebrowColor = '#2563D8',
  title,
  subtitle,
  align = 'center',
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  isHero = false,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: isHero ? 0.05 : 0.08,
      },
    },
  };

  const eyebrowVariants = {
    hidden: {
      opacity: 0,
      y: 18,
      filter: 'blur(3px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 28,
      filter: 'blur(6px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const subtitleVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const isCenter = align === 'center';

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      {...(isHero
        ? { animate: 'visible' }
        : { whileInView: 'visible', viewport: { once: true, margin: '-50px' } })}
      className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {/* Eyebrow with Staggered Fade-in-up */}
      {eyebrow && (
        <motion.div
          variants={eyebrowVariants}
          className={`inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 ${
            isCenter ? 'justify-center' : 'justify-start'
          }`}
          style={{ color: eyebrowColor }}
        >
          {eyebrowIcon ? (
            <Icon icon={eyebrowIcon} className="w-4 h-4" />
          ) : (
            <span className="w-5 h-[2px] inline-block rounded-full" style={{ backgroundColor: eyebrowColor }} />
          )}
          <span>{eyebrow}</span>
          {!eyebrowIcon && isCenter && (
            <span className="w-5 h-[2px] inline-block rounded-full" style={{ backgroundColor: eyebrowColor }} />
          )}
        </motion.div>
      )}

      {/* Main Heading with Staggered Fade-in-up */}
      <motion.h2
        variants={titleVariants}
        className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101828] font-heading font-['Plus_Jakarta_Sans',sans-serif] tracking-[-0.02em] leading-[1.12] text-balance ${titleClassName}`}
      >
        {title}
      </motion.h2>

      {/* Subtitle / Description with Staggered Fade-in-up */}
      {subtitle && (
        <motion.p
          variants={subtitleVariants}
          className={`mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed ${
            isCenter ? 'max-w-2xl mx-auto' : 'max-w-xl'
          } ${subtitleClassName}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

