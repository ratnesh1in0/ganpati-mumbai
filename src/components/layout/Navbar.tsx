import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Map, Route, Compass, Bookmark, Car, Radio, Music } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { LanguageToggle } from '../common/LanguageToggle';
import { GanpatiGlyph } from '../../assets/DevotionalIcons';

interface NavbarProps {
  onOpenSearch: () => void;
  savedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, savedCount }) => {
  const { language, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: t.navHome },
    { path: '/explore', label: t.navExplore },
    { path: '/map', label: t.navMap },
    { path: '/routes', label: t.navRoutes },
    { path: '/transit', label: t.navTransit },
    { path: '/streams', label: t.navLiveStreams },
    { path: '/aartis', label: t.navAartis },
    { path: '/saved', label: t.navSaved, count: savedCount }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--line)] bg-[#14100C]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group select-none">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#E2621B] to-[#F59E0B] text-[#14100C] shadow-[0_0_20px_rgba(226,98,27,0.35)] group-hover:scale-105 transition-transform">
            <GanpatiGlyph size={26} />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-base font-black tracking-tight text-[#F5EBE1] font-display">
                Ganpati<span className="text-[#E2621B]">Mumbai</span>
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-[#E2621B]/20 text-[#F59E0B] border border-[#E2621B]/40">
                LIVE
              </span>
            </div>
            <p className="text-[11px] text-[#827367] font-marathi leading-none">
              {language === 'mr' ? 'मुंबई गणेशोत्सव दर्शन' : 'Mumbai Ganpati Darshan'}
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#E2621B]/15 text-[#F59E0B] border border-[#E2621B]/40'
                    : 'text-[#BDB0A4] hover:text-[#F5EBE1] hover:bg-white/5'
                }`}
              >
                <span>{link.label}</span>
                {link.count !== undefined && link.count > 0 && (
                  <span className="w-4 h-4 rounded-full bg-[#E2621B] text-[#14100C] text-[10px] font-black flex items-center justify-center">
                    {link.count}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Search & Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenSearch}
            type="button"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1D1712] border border-[var(--line-strong)] text-xs text-[#827367] hover:text-[#F5EBE1] hover:border-[#E2621B]/50 transition-colors cursor-pointer"
            aria-label="Search mandals"
          >
            <Search className="w-3.5 h-3.5 text-[#E2621B]" />
            <span className="hidden sm:inline">{language === 'mr' ? 'शोधा...' : 'Search...'}</span>
            <kbd className="hidden lg:inline text-[10px] px-1.5 py-0.5 rounded bg-[#28201A] text-[#827367] border border-white/10">
              ⌘K
            </kbd>
          </button>

          <LanguageToggle />
        </div>
      </div>
    </header>
  );
};
