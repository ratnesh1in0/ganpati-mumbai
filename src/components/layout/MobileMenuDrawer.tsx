import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  X, 
  Home, 
  Compass, 
  Map, 
  Route, 
  Radio, 
  Train, 
  Waves, 
  Music, 
  Bookmark, 
  Info, 
  HelpCircle,
  Search,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { LanguageToggle } from '../common/LanguageToggle';
import { GanpatiGlyph } from '../../assets/DevotionalIcons';

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedCount: number;
  onOpenSearch: () => void;
}

export const MobileMenuDrawer: React.FC<MobileMenuDrawerProps> = ({
  isOpen,
  onClose,
  savedCount,
  onOpenSearch
}) => {
  const { language, t } = useLanguage();
  const location = useLocation();

  // Close drawer on route change
  useEffect(() => {
    onClose();
  }, [location.pathname]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const mainLinks = [
    {
      to: '/',
      label: language === 'mr' ? 'मुख्य पान' : 'Home',
      sub: language === 'mr' ? 'लाईव्ह ट्रॅकर व मार्ग' : 'Live tracker & circuits',
      icon: Home,
      color: 'text-[#E2621B]'
    },
    {
      to: '/explore',
      label: language === 'mr' ? 'सर्व प्रसिद्ध मंडळे' : 'Explore All Mandals',
      sub: language === 'mr' ? '१८ मानाचे व ऐतिहासिक गणपती' : '18 iconic & historic pandals',
      icon: Compass,
      color: 'text-[#F59E0B]'
    },
    {
      to: '/map',
      label: language === 'mr' ? 'थेट गर्दी नकाशा' : 'Live Crowd Map',
      sub: language === 'mr' ? 'रांगेनुसार रंग व स्थानक माहिती' : 'Illuminated queue heatmap',
      icon: Map,
      color: 'text-amber-400'
    },
    {
      to: '/routes',
      label: language === 'mr' ? 'पदभ्रमण दर्शन मार्ग' : 'Darshan Circuits & Builder',
      sub: language === 'mr' ? 'वेळेनुसार ५ सुलभ दर्शन फेऱ्या' : '5 time-optimized circuits',
      icon: Route,
      color: 'text-orange-400'
    },
    {
      to: '/streams',
      label: language === 'mr' ? '२४ तास थेट दर्शन' : '24x7 Live Streams Hub',
      sub: language === 'mr' ? 'लालबागचा राजा, सिद्धिविनायक' : 'Lalbaugcha Raja & Siddhivinayak',
      icon: Radio,
      color: 'text-red-400',
      badge: 'LIVE 24x7',
      badgeClass: 'bg-red-500/20 text-red-400 border-red-500/30 animate-pulse'
    }
  ];

  const secondaryLinks = [
    {
      to: '/transit',
      label: language === 'mr' ? 'लोकल ट्रेन्स व पार्किंग' : 'Local Trains & Parking',
      sub: language === 'mr' ? 'रात्रीच्या विशेष लोकल व २०+ मैदाने' : '24x7 night trains & 20+ parking lots',
      icon: Train,
      color: 'text-blue-400',
      badge: '24x7 NIGHT',
      badgeClass: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    },
    {
      to: '/visarjan',
      label: language === 'mr' ? 'विसर्जन व चौपाटी मार्गदर्शक' : 'Visarjan & Beach Guide',
      sub: language === 'mr' ? 'गिरगाव, जुहू, दादर व २०० कृत्रिम तलाव' : 'Beaches, tides & 200+ BMC lakes',
      icon: Waves,
      color: 'text-cyan-400'
    },
    {
      to: '/aartis',
      label: language === 'mr' ? 'आरती संग्रह व घंटा नाद' : 'Aarti Sangrah & Bell Chime',
      sub: language === 'mr' ? 'मराठी व इंग्रजीत नित्य आरत्या' : 'Daily prayers with temple bell',
      icon: Music,
      color: 'text-emerald-400'
    },
    {
      to: '/saved',
      label: language === 'mr' ? 'माझे साठवलेले गणपती' : 'Saved Mandals & Checklist',
      sub: language === 'mr' ? 'वैयक्तिक दर्शन यादी' : 'Personal darshan checklist',
      icon: Bookmark,
      color: 'text-[#E5A93C]',
      count: savedCount
    }
  ];

  const infoLinks = [
    {
      to: '/how-to-use',
      label: language === 'mr' ? 'कसे वापरावे (मार्गदर्शक)' : 'How To Use Guide',
      icon: HelpCircle
    },
    {
      to: '/about',
      label: language === 'mr' ? 'या उपक्रमाविषयी' : 'About Project & Credits',
      icon: Info
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Dimmed backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over menu panel */}
      <aside className="relative z-10 w-full max-w-sm h-full bg-[#14100C] border-l border-white/10 flex flex-col shadow-2xl overflow-hidden animate-slideLeft">
        {/* Top Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#1A140F]">
          <div className="flex items-center gap-2.5">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#E2621B] to-[#F59E0B] text-[#14100C]">
              <GanpatiGlyph size={22} />
            </div>
            <div>
              <span className="text-sm font-black text-[#F5EBE1] font-display block">
                Ganpati<span className="text-[#E2621B]">Mumbai</span>
              </span>
              <span className="text-[10px] text-[#F59E0B] font-bold">
                {language === 'mr' ? 'दिवस १ / १० · गणेशोत्सव २०२६' : 'Day 1 of 10 · Ganeshotsav 2026'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#827367] hover:text-[#F5EBE1] hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Search Button */}
        <div className="px-4 pt-3 pb-2">
          <button
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#1D1712] border border-white/10 text-xs text-[#827367] hover:text-[#F5EBE1] hover:border-[#E2621B]/40 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-[#E2621B]" />
              <span>{language === 'mr' ? 'मंडळ, परिसर शोधा...' : 'Search mandals, areas...'}</span>
            </div>
            <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-[#28201A] text-[#827367] border border-white/10">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Scrollable Nav Items */}
        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4 divide-y divide-white/5">
          {/* Main Links */}
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#827367] px-2 block mb-1">
              {language === 'mr' ? 'मुख्य विभाग' : 'Main Sections'}
            </span>
            {mainLinks.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center justify-between p-2.5 rounded-xl transition-all ${
                      isActive
                        ? 'bg-[#E2621B]/15 text-[#F5EBE1] border border-[#E2621B]/40 shadow-sm'
                        : 'text-[#BDB0A4] hover:text-[#F5EBE1] hover:bg-white/5'
                    }`
                  }
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#1D1712] border border-white/5">
                      <Icon className={`w-4 h-4 ${item.color}`} />
                    </div>
                    <div>
                      <span className="text-xs font-bold block">{item.label}</span>
                      <span className="text-[10px] text-[#827367] block">{item.sub}</span>
                    </div>
                  </div>

                  {item.badge ? (
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${item.badgeClass}`}>
                      {item.badge}
                    </span>
                  ) : (
                    <ChevronRight className="w-4 h-4 text-[#827367]" />
                  )}
                </NavLink>
              );
            })}
          </div>

          {/* Secondary Features */}
          <div className="space-y-1 pt-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#827367] px-2 block mb-1">
              {language === 'mr' ? 'सुविधा व भक्ती' : 'Transit, Prayers & Visarjan'}
            </span>
            {secondaryLinks.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center justify-between p-2.5 rounded-xl transition-all ${
                      isActive
                        ? 'bg-[#E2621B]/15 text-[#F5EBE1] border border-[#E2621B]/40 shadow-sm'
                        : 'text-[#BDB0A4] hover:text-[#F5EBE1] hover:bg-white/5'
                    }`
                  }
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#1D1712] border border-white/5">
                      <Icon className={`w-4 h-4 ${item.color}`} />
                    </div>
                    <div>
                      <span className="text-xs font-bold block">{item.label}</span>
                      <span className="text-[10px] text-[#827367] block">{item.sub}</span>
                    </div>
                  </div>

                  {item.count !== undefined && item.count > 0 ? (
                    <span className="w-5 h-5 rounded-full bg-[#E2621B] text-[#14100C] text-[10px] font-black flex items-center justify-center">
                      {item.count}
                    </span>
                  ) : item.badge ? (
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${item.badgeClass}`}>
                      {item.badge}
                    </span>
                  ) : (
                    <ChevronRight className="w-4 h-4 text-[#827367]" />
                  )}
                </NavLink>
              );
            })}
          </div>

          {/* Info & Help */}
          <div className="space-y-1 pt-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#827367] px-2 block mb-1">
              {language === 'mr' ? 'माहिती व साहाय्य' : 'Information & Support'}
            </span>
            {infoLinks.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center justify-between p-2.5 rounded-xl transition-all ${
                      isActive
                        ? 'bg-[#E2621B]/15 text-[#F5EBE1] border border-[#E2621B]/40'
                        : 'text-[#BDB0A4] hover:text-[#F5EBE1] hover:bg-white/5'
                    }`
                  }
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#1D1712] border border-white/5">
                      <Icon className="w-4 h-4 text-[#827367]" />
                    </div>
                    <span className="text-xs font-bold">{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#827367]" />
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* Footer in Drawer */}
        <div className="p-4 border-t border-white/10 bg-[#1A140F] text-center space-y-1">
          <span className="font-marathi text-xs font-bold text-[#F59E0B] block">
            गणपती बाप्पा मोरया · मंगलमूर्ती मोरया
          </span>
          <p className="text-[10px] text-[#827367]">
            Built with devotion by Ratnesh for Mumbai devotees.
          </p>
        </div>
      </aside>
    </div>
  );
};
