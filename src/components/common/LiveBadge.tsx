import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

interface LiveBadgeProps {
  status: 'low' | 'moderate' | 'busy' | 'peak';
  waitMinutes?: number;
  showDotOnly?: boolean;
  className?: string;
}

export const LiveBadge: React.FC<LiveBadgeProps> = ({
  status,
  waitMinutes,
  showDotOnly = false,
  className = ""
}) => {
  const { language } = useLanguage();

  const configs = {
    low: {
      bg: 'bg-emerald-950/60',
      border: 'border-emerald-500/40',
      dot: 'bg-emerald-400',
      text: 'text-emerald-300',
      labelEn: waitMinutes !== undefined ? `${waitMinutes} min wait` : 'Low Queue',
      labelMr: waitMinutes !== undefined ? `~${waitMinutes} मि. प्रतीक्षा` : 'कमी गर्दी',
      ping: 'bg-emerald-400'
    },
    moderate: {
      bg: 'bg-amber-950/60',
      border: 'border-amber-500/40',
      dot: 'bg-amber-400',
      text: 'text-amber-300',
      labelEn: waitMinutes !== undefined ? `${waitMinutes} min wait` : 'Moderate',
      labelMr: waitMinutes !== undefined ? `~${waitMinutes} मि. प्रतीक्षा` : 'मध्यम गर्दी',
      ping: 'bg-amber-400'
    },
    busy: {
      bg: 'bg-orange-950/60',
      border: 'border-orange-500/40',
      dot: 'bg-orange-500',
      text: 'text-orange-300',
      labelEn: waitMinutes !== undefined ? `${waitMinutes > 60 ? Math.round(waitMinutes/60*10)/10 + ' hr' : waitMinutes + ' min'}` : 'Busy Queue',
      labelMr: waitMinutes !== undefined ? `~${waitMinutes > 60 ? Math.round(waitMinutes/60*10)/10 + ' तास' : waitMinutes + ' मि.'}` : 'गर्दी',
      ping: 'bg-orange-500'
    },
    peak: {
      bg: 'bg-red-950/70',
      border: 'border-red-500/50',
      dot: 'bg-red-500',
      text: 'text-red-300',
      labelEn: waitMinutes !== undefined ? `${waitMinutes > 60 ? Math.round(waitMinutes/60*10)/10 + ' hr rush' : waitMinutes + ' min'}` : 'Heavy Rush',
      labelMr: waitMinutes !== undefined ? `~${waitMinutes > 60 ? Math.round(waitMinutes/60*10)/10 + ' तास गर्दी' : waitMinutes + ' मि.'}` : 'प्रचंड गर्दी',
      ping: 'bg-red-500'
    }
  };

  const current = configs[status] || configs.moderate;

  if (showDotOnly) {
    return (
      <span className={`relative flex h-2.5 w-2.5 ${className}`}>
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${current.ping}`} />
        <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${current.dot}`} />
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border ${current.bg} ${current.border} ${current.text} ${className}`}
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${current.ping}`} />
        <span className={`relative inline-flex rounded-full h-2 w-2 ${current.dot}`} />
      </span>
      <span>{language === 'mr' ? current.labelMr : current.labelEn}</span>
    </span>
  );
};
