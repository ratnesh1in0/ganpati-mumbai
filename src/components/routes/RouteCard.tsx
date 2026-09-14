import React from 'react';
import { Route, Clock, MapPin, ArrowRight, Train } from 'lucide-react';
import { CuratedRoute } from '../../data/routesData';
import { useLanguage } from '../../hooks/useLanguage';

interface RouteCardProps {
  route: CuratedRoute;
  onSelect: (route: CuratedRoute) => void;
  layout?: 'horizontal' | 'grid';
}

export const RouteCard: React.FC<RouteCardProps> = ({
  route,
  onSelect,
  layout = 'grid'
}) => {
  const { language } = useLanguage();

  if (layout === 'horizontal') {
    return (
      <div
        onClick={() => onSelect(route)}
        className="surface-raised flex w-[260px] sm:w-[280px] shrink-0 flex-col rounded-[var(--radius-card)] border border-[var(--line-strong)] p-4 scroll-snap-start transition-all duration-200 hover:border-[#E2621B]/50 hover:-translate-y-1 hover:shadow-xl active:scale-[0.985] cursor-pointer select-none group"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E2621B]/15 text-[#F59E0B] border border-[#E2621B]/30">
            {language === 'mr' ? route.badgeMr : route.badge}
          </span>
          <span className="text-xs text-[#827367] flex items-center gap-1 font-mono font-semibold">
            {route.stopsCount} {language === 'mr' ? 'थांबे' : 'stops'}
          </span>
        </div>

        <h3 className="text-sm font-bold text-[#F5EBE1] line-clamp-2 leading-snug group-hover:text-[#F59E0B] transition-colors font-display">
          {language === 'mr' ? route.titleMr : route.title}
        </h3>

        <p className="mt-1.5 text-xs text-[#BDB0A4] line-clamp-2 leading-relaxed">
          {language === 'mr' ? route.taglineMr : route.tagline}
        </p>

        <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#827367]">
          <span className="flex items-center gap-1 text-[#F59E0B] font-semibold">
            <Clock className="w-3 h-3 text-[#E2621B]" />
            <span>{language === 'mr' ? route.estimatedTimeMr : route.estimatedTime}</span>
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-[#827367] group-hover:text-[#F59E0B] transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => onSelect(route)}
      className="surface-raised flex flex-col rounded-2xl border border-[var(--line-strong)] p-5 transition-all duration-200 hover:border-[#E2621B]/50 hover:-translate-y-1 hover:shadow-2xl cursor-pointer group"
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#E2621B]/15 text-[#F59E0B] border border-[#E2621B]/30">
          {language === 'mr' ? route.badgeMr : route.badge}
        </span>
        <span className="text-xs text-[#827367] font-semibold">
          {route.stopsCount} {language === 'mr' ? 'थांबे' : 'stops'} · {route.totalDistance}
        </span>
      </div>

      <h3 className="text-base sm:text-lg font-bold text-[#F5EBE1] group-hover:text-[#F59E0B] transition-colors font-display">
        {language === 'mr' ? route.titleMr : route.title}
      </h3>

      <p className="text-xs sm:text-sm text-[#BDB0A4] mt-1 line-clamp-2 leading-relaxed">
        {language === 'mr' ? route.descriptionMr : route.description}
      </p>

      {/* Highlights */}
      <ul className="mt-3 space-y-1">
        {(language === 'mr' ? route.highlightsMr : route.highlights).slice(0, 2).map((h, i) => (
          <li key={i} className="text-xs text-[#827367] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2621B]" />
            <span className="truncate">{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-xs">
        <div className="flex items-center gap-3 text-[#BDB0A4]">
          <span className="flex items-center gap-1">
            <Train className="w-3.5 h-3.5 text-[#E2621B]" />
            <span className="truncate max-w-[130px]">{language === 'mr' ? route.startStationMr : route.startStation}</span>
          </span>
          <span>•</span>
          <span className="font-bold text-[#F59E0B]">
            {language === 'mr' ? route.estimatedTimeMr : route.estimatedTime}
          </span>
        </div>

        <span className="inline-flex items-center gap-1 text-xs font-bold text-[#E2621B] group-hover:text-[#F59E0B]">
          <span>{language === 'mr' ? 'मार्ग पहा' : 'View Trail'}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </div>
  );
};
