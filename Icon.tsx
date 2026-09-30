import React from 'react';
import { IconType } from 'react-icons';
import {
  LuGraduationCap,
  LuSparkles,
  LuWand,
  LuHandHeart,
  LuUserCheck,
  LuBuilding2,
  LuHeart,
  LuAward,
  LuX,
  LuCircleX,
  LuMenu,
  LuChevronLeft,
  LuChevronRight,
  LuChevronUp,
  LuChevronDown,
  LuArrowRight,
  LuArrowUpRight,
  LuArrowUp,
  LuStore,
  LuMail,
  LuPhoneCall,
  LuBrain,
  LuTarget,
  LuLayers,
  LuLayers2,
  LuMedal,
  LuCalculator,
  LuBookOpen,
  LuPenTool,
  LuPalette,
  LuPuzzle,
  LuActivity,
  LuCompass,
  LuSlidersVertical,
  LuFileText,
  LuGitMerge,
  LuBriefcase,
  LuClock,
  LuCalendar,
  LuCalendarDays,
  LuBookMarked,
  LuNotebook,
  LuUsers,
  LuMegaphone,
  LuSpeech,
  LuCircleCheck,
  LuShieldCheck,
  LuShieldAlert,
  LuChartBar,
  LuWallet,
  LuDownload,
  LuInfo,
  LuCircleHelp,
  LuSearch,
  LuMaximize2,
  LuMessageCircle,
} from 'react-icons/lu';
import {
  HiAcademicCap,
  HiCheckBadge,
  HiShieldCheck,
} from 'react-icons/hi2';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  icon?: string | IconType | React.ComponentType<{ className?: string; size?: number | string }>;
  name?: string;
  className?: string;
  size?: number | string;
}

const iconRegistry: Record<string, IconType> = {
  // Education & Academics
  'solar:square-academic-cap-bold-duotone': LuGraduationCap,
  'solar:square-academic-cap-2-bold-duotone': HiAcademicCap,
  'solar:diploma-bold-duotone': LuAward,
  'solar:diploma-verified-bold-duotone': HiCheckBadge,
  'solar:book-2-bold-duotone': LuBookOpen,
  'solar:book-bookmark-bold-duotone': LuBookMarked,
  'solar:notebook-bold-duotone': LuNotebook,

  // Magic & Stars & Accents
  'solar:magic-stick-3-bold-duotone': LuSparkles,
  'solar:magic-wand-bold': LuWand,
  'solar:sparkler-bold-duotone': LuSparkles,
  'solar:sparkler-bold': LuWand,
  'solar:medal-star-bold-duotone': LuMedal,

  // Care & Community
  'solar:hand-heart-bold-duotone': LuHandHeart,
  'solar:heart-bold-duotone': LuHeart,
  'solar:users-group-rounded-bold-duotone': LuUsers,
  'solar:user-check-bold-duotone': LuUserCheck,
  'solar:user-speak-bold-duotone': LuMegaphone,
  'solar:user-speak-rounded-bold-duotone': LuSpeech,

  // Tools & Therapeutics
  'solar:brain-bold-duotone': LuBrain,
  'solar:calculator-bold-duotone': LuCalculator,
  'solar:pen-new-square-bold-duotone': LuPenTool,
  'solar:palette-bold-duotone': LuPalette,
  'solar:widget-2-bold-duotone': LuPuzzle,
  'solar:puzzle-bold-duotone': LuPuzzle,
  'solar:hand-pills-bold-duotone': LuActivity,
  'solar:target-bold-duotone': LuTarget,
  'solar:layers-bold-duotone': LuLayers,
  'solar:layers-minimalistic-bold-duotone': LuLayers2,
  'solar:compass-bold-duotone': LuCompass,
  'solar:slider-vertical-bold-duotone': LuSlidersVertical,
  'solar:document-text-bold-duotone': LuFileText,
  'solar:routing-2-bold-duotone': LuGitMerge,

  // Business & Careers
  'solar:buildings-bold-duotone': LuBuilding2,
  'solar:shop-2-bold-duotone': LuStore,
  'solar:case-round-bold-duotone': LuBriefcase,
  'solar:wallet-money-bold-duotone': LuWallet,
  'solar:chart-2-bold-duotone': LuChartBar,

  // Time & Scheduling
  'solar:clock-circle-bold-duotone': LuClock,
  'solar:calendar-date-bold-duotone': LuCalendar,
  'solar:calendar-bold-duotone': LuCalendarDays,

  // Verification & Security
  'solar:verified-check-bold-duotone': LuCircleCheck,
  'solar:shield-check-bold-duotone': HiShieldCheck,
  'solar:shield-star-bold-duotone': LuShieldAlert,
  'solar:check-circle-bold': LuCircleCheck,
  'solar:check-circle-bold-duotone': LuCircleCheck,

  // Controls & UI Navigation
  'solar:magnifier-linear': LuSearch,
  'solar:magnifer-linear': LuSearch,
  'solar:maximize-square-3-linear': LuMaximize2,
  'solar:close-circle-bold': LuCircleX,
  'solar:close-circle-linear': LuX,
  'solar:hamburger-menu-bold': LuMenu,
  'solar:alt-arrow-left-linear': LuChevronLeft,
  'solar:alt-arrow-right-linear': LuChevronRight,
  'solar:alt-arrow-up-linear': LuChevronUp,
  'solar:alt-arrow-down-linear': LuChevronDown,
  'solar:arrow-right-bold': LuArrowRight,
  'solar:arrow-right-linear': LuArrowRight,
  'solar:arrow-right-up-linear': LuArrowUpRight,
  'solar:arrow-up-linear': LuArrowUp,

  // Contacts & Messaging
  'solar:letter-bold-duotone': LuMail,
  'solar:phone-calling-bold-duotone': LuPhoneCall,
  'solar:chat-round-line-bold': LuMessageCircle,
  'solar:download-minimalistic-bold': LuDownload,
  'solar:info-circle-bold-duotone': LuInfo,
  'solar:question-circle-bold-duotone': LuCircleHelp,
};

export const Icon: React.FC<IconProps> = ({
  icon,
  name,
  className = 'w-5 h-5',
  size,
  ...props
}) => {
  const iconTarget = icon || name;

  if (!iconTarget) {
    return <LuSparkles className={className} size={size} {...props} />;
  }

  // If a react-icons component is passed directly
  if (typeof iconTarget === 'function') {
    const Component = iconTarget;
    return <Component className={className} size={size} {...props} />;
  }

  if (typeof iconTarget === 'string') {
    const ResolvedComponent = iconRegistry[iconTarget] || iconRegistry[`solar:${iconTarget}`] || LuSparkles;
    return <ResolvedComponent className={className} size={size} {...props} />;
  }

  return <LuSparkles className={className} size={size} {...props} />;
};

export default Icon;
