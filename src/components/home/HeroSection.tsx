import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Map, Route, Sparkles } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { ToranGarland } from '../../assets/DevotionalIcons';

interface HeroSectionProps {
  onOpenSearch: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenSearch }) => {
  const { language, t } = useLanguage();

  return (
    <section className="relative overflow-hidden px-4 pt-4 sm:pt-6">
      {/* Background Glows & Rangoli Mask */}
      <div className="rangoli-overlay" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-28 h-80"
        style={{
          background: 'radial-gradient(58% 58% at 50% 42%, rgba(226, 98, 27, 0.38) 0%, rgba(242, 169, 59, 0.12) 48%, transparent 74%)'
        }}
      />

      <div className="relative mx-auto max-w-2xl text-center sm:text-left">
        {/* Festival Day Banner Pill */}
        <div className="relative inline-flex items-center gap-3 overflow-hidden rounded-full px-4 py-2 border backdrop-blur-md border-[#E5A93C]/40 bg-gradient-to-r from-[#E5A93C]/15 via-[#E2621B]/10 to-transparent shadow-lg">
          <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F59E0B] opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#F59E0B] shadow-[0_0_12px_#F59E0B]" />
          </span>
          <div className="min-w-0 text-left">
            <p className="truncate text-xs font-bold text-[#E5A93C] tracking-wide">
              {t.festivalTagline}
            </p>
            <p className="truncate text-[11px] text-[#827367]">
              {t.festivalDay}
            </p>
          </div>
          <span className="ml-auto font-marathi text-xs font-black text-[#F59E0B] pl-2 border-l border-white/10 hidden xs:inline">
            गणपती बाप्पा मोरया
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display mt-5 text-[34px] sm:text-[54px] font-black leading-[1.03] text-[#F5EBE1] tracking-tight">
          {t.heroTitlePrefix}{' '}
          <span className="block sm:inline bg-gradient-to-r from-[#F59E0B] via-[#E2621B] to-[#E5A93C] bg-clip-text text-transparent pb-1">
            {t.heroTitleHighlight}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-2.5 max-w-lg text-sm sm:text-base leading-relaxed text-[#BDB0A4]">
          {t.heroSubtitle}
        </p>

        {/* Search Bar Action Button */}
        <button
          type="button"
          onClick={onOpenSearch}
          className="surface mt-5 flex w-full min-h-12 items-center gap-3 rounded-xl border border-[var(--line-strong)] px-4 text-xs sm:text-sm text-[#827367] transition-all hover:border-[#E2621B]/60 hover:text-[#F5EBE1] cursor-pointer shadow-md group text-left"
        >
          <Search className="w-4 h-4 shrink-0 text-[#E2621B] group-hover:scale-110 transition-transform" />
          <span className="truncate flex-1">{t.searchPlaceholder}</span>
          <kbd className="hidden sm:inline text-[11px] px-2 py-0.5 rounded bg-[#28201A] text-[#827367] border border-white/10">
            Search
          </kbd>
        </button>

        {/* Primary CTA Buttons */}
        <div className="mt-3.5 flex gap-2.5">
          <Link
            to="/map"
            className="inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-150 active:scale-95 select-none bg-[#E2621B] text-[#14100C] hover:bg-[#F07024] h-12 px-5 text-sm flex-1 shadow-lg glow-shendur"
          >
            <Map className="w-4 h-4" />
            <span>{t.openMapBtn}</span>
          </Link>

          <Link
            to="/routes"
            className="inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-150 active:scale-95 select-none bg-[#28201A] text-[#F5EBE1] border border-[var(--line-strong)] hover:bg-[#342A22] h-12 px-5 text-sm flex-1 shadow-md"
          >
            <Route className="w-4 h-4 text-[#F59E0B]" />
            <span>{t.buildRouteBtn}</span>
          </Link>
        </div>
      </div>

      {/* Decorative Toran */}
      <ToranGarland className="mt-8" />
    </section>
  );
};
