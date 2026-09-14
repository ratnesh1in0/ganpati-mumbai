import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Compass, Map, Route, Radio, Menu } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

interface BottomNavProps {
  savedCount: number;
  onOpenMore: () => void;
  isMoreOpen: boolean;
}

export const BottomNav: React.FC<BottomNavProps> = ({ savedCount, onOpenMore, isMoreOpen }) => {
  const { t, language } = useLanguage();
  const location = useLocation();

  const isOtherActive = [
    '/transit',
    '/visarjan',
    '/aartis',
    '/saved',
    '/about',
    '/how-to-use'
  ].some(path => location.pathname.startsWith(path));

  const navItems = [
    { to: '/', label: t.navHome, icon: Home },
    { to: '/explore', label: t.navExplore, icon: Compass },
    { to: '/map', label: t.navMap, icon: Map },
    { to: '/streams', label: language === 'mr' ? 'थेट' : 'Live', icon: Radio, isLive: true },
    { to: '/routes', label: t.navRoutes, icon: Route },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#14100C]/95 backdrop-blur-lg border-t border-[var(--line-strong)] pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-1.5 shadow-[0_-8px_20px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-around px-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center py-1 px-1.5 rounded-xl transition-all duration-150 relative min-w-[52px] ${
                  isActive
                    ? 'text-[#E2621B] font-bold'
                    : 'text-[#827367] hover:text-[#BDB0A4]'
                }`
              }
            >
              <div className="relative">
                <Icon className="w-5 h-5" />
                {item.isLive && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500 animate-ping" />
                )}
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight line-clamp-1">{item.label}</span>
            </NavLink>
          );
        })}

        {/* More Menu Trigger */}
        <button
          onClick={onOpenMore}
          className={`flex flex-col items-center justify-center py-1 px-1.5 rounded-xl transition-all duration-150 relative min-w-[52px] cursor-pointer ${
            isMoreOpen || isOtherActive
              ? 'text-[#F59E0B] font-bold'
              : 'text-[#827367] hover:text-[#BDB0A4]'
          }`}
          aria-label="Open full menu"
        >
          <div className="relative">
            <Menu className="w-5 h-5" />
            {savedCount > 0 && (
              <span className="absolute -top-1.5 -right-2 min-w-[15px] h-[15px] rounded-full bg-[#E2621B] text-[#14100C] text-[9px] font-black flex items-center justify-center px-1">
                {savedCount}
              </span>
            )}
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight">
            {t.navMore || (language === 'mr' ? 'अधिक' : 'More')}
          </span>
        </button>
      </div>
    </nav>
  );
};

