import React from 'react';

interface LogoProps {
  variant?: 'navbar' | 'footer' | 'mark' | 'hero' | 'symbol';
  className?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'navbar',
  className = '',
  showSubtitle = true,
}) => {
  const isDark = variant === 'footer';

  // Mark only (SVG icon badge)
  if (variant === 'symbol' || variant === 'mark') {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <img
          src="/src/assets/images/neuronest logo-1-01.png"
          alt="Neuronest Logo Mark"
          className="w-full h-full object-contain drop-shadow-xs"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand Icon Shield */}
      <div className="relative shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 duration-300 overflow-hidden">
        <img
          src="/src/assets/images/neuronest logo-1-01.png"
          alt="Neuronest Brand Symbol"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1">
          <span
            className={`font-heading font-extrabold text-lg sm:text-xl tracking-tight leading-none ${
              isDark ? 'text-white' : 'text-[#0F172A]'
            }`}
          >
            NEURONEST
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#12A89D] self-baseline mt-1 ml-0.5" />
        </div>

        {showSubtitle && (
          <span
            className={`text-[9px] sm:text-[10px] font-bold tracking-[0.22em] uppercase mt-1 leading-none ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            TRAINING INSTITUTE
          </span>
        )}
      </div>
    </div>
  );
};
