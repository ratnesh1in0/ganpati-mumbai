import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, Map, Route, Bookmark } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export const BottomNav: React.FC<{ savedCount: number }> = ({ savedCount }) => {
  const { t } = useLanguage();

  const navItems = [
    { to: '/', label: t.navHome, icon: Home },
    { to: '/explore', label: t.navExplore, icon: Compass },
    { to: '/map', label: t.navMap, icon: Map },
    { to: '/routes', label: t.navRoutes, icon: Route },
    { to: '/saved', label: t.navSaved, icon: Bookmark, badge: savedCount }
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#14100C]/95 backdrop-blur-lg border-t border-[var(--line-strong)] pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2">
      <div className="flex items-center justify-around px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-150 relative ${
                  isActive
                    ? 'text-[#E2621B] font-bold'
                    : 'text-[#827367] hover:text-[#BDB0A4]'
                }`
              }
            >
              <div className="relative">
                <Icon className="w-5 h-5" />
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="absolute -top-1.5 -right-2 min-w-[15px] h-[15px] rounded-full bg-[#E2621B] text-[#14100C] text-[9px] font-black flex items-center justify-center px-1">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-[11px] mt-1 tracking-tight">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
