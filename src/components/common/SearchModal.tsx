import React, { useState, useEffect, useRef } from 'react';
import { Search, X, MapPin, Train, ArrowRight } from 'lucide-react';
import { Mandal } from '../../data/mandalsData';
import { CuratedRoute } from '../../data/routesData';
import { useLanguage } from '../../hooks/useLanguage';
import { LiveBadge } from './LiveBadge';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  mandals: Mandal[];
  routes: CuratedRoute[];
  onSelectMandal: (mandal: Mandal) => void;
  onSelectRoute: (route: CuratedRoute) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  mandals,
  routes,
  onSelectMandal,
  onSelectRoute
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { language, t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const filteredMandals = cleanQuery
    ? mandals.filter(m =>
        m.name.toLowerCase().includes(cleanQuery) ||
        m.nameMr.includes(cleanQuery) ||
        m.area.toLowerCase().includes(cleanQuery) ||
        m.areaMr.includes(cleanQuery) ||
        m.popularTitle.toLowerCase().includes(cleanQuery) ||
        m.nearestStations.some(s => s.name.toLowerCase().includes(cleanQuery)) ||
        m.tags.some(tag => tag.toLowerCase().includes(cleanQuery))
      )
    : mandals.slice(0, 5); // popular default suggestions

  const filteredRoutes = cleanQuery
    ? routes.filter(r =>
        r.title.toLowerCase().includes(cleanQuery) ||
        r.titleMr.includes(cleanQuery) ||
        r.description.toLowerCase().includes(cleanQuery) ||
        r.startStation.toLowerCase().includes(cleanQuery)
      )
    : routes.slice(0, 2);

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-14 sm:pt-20 px-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl surface-raised rounded-2xl border border-white/15 overflow-hidden shadow-2xl flex flex-col max-h-[80vh] z-10 animate-slideUp">
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-white/10 px-4 py-3 bg-[#1D1712]">
          <Search className="w-5 h-5 text-[#E2621B] shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full bg-transparent text-sm sm:text-base text-[#F5EBE1] placeholder-[#827367] outline-none font-medium"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-[#827367] hover:text-[#F5EBE1] hover:bg-white/10 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="text-xs px-2 py-1 rounded bg-[#28201A] text-[#827367] hover:text-[#F5EBE1] border border-white/10"
            >
              ESC
            </button>
          )}
        </div>

        {/* Results list */}
        <div className="overflow-y-auto p-3 space-y-4 divide-y divide-white/5">
          {/* Mandals Section */}
          <div>
            <div className="flex items-center justify-between px-2 py-1 text-xs font-semibold text-[#827367] uppercase tracking-wider">
              <span>{language === 'mr' ? 'मंडळे' : 'Mandals'}</span>
              <span>{filteredMandals.length} {language === 'mr' ? 'सापडले' : 'found'}</span>
            </div>

            <div className="mt-1 space-y-1">
              {filteredMandals.length > 0 ? (
                filteredMandals.map((mandal) => (
                  <button
                    key={mandal.id}
                    onClick={() => {
                      onSelectMandal(mandal);
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-[#28201A] transition-colors flex items-center justify-between gap-3 group cursor-pointer border border-transparent hover:border-[#E2621B]/30"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-bold text-[#F5EBE1] group-hover:text-[#F59E0B] truncate">
                          {language === 'mr' ? mandal.nameMr : mandal.name}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 mt-0.5 text-xs text-[#827367]">
                        <span className="flex items-center gap-1 text-[#BDB0A4]">
                          <MapPin className="w-3 h-3 text-[#E2621B]" />
                          {language === 'mr' ? mandal.areaMr : mandal.area}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Train className="w-3 h-3" />
                          {language === 'mr' ? mandal.nearestStations[0]?.nameMr : mandal.nearestStations[0]?.name}
                        </span>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-2">
                      <LiveBadge
                        status={mandal.crowd.status}
                        waitMinutes={mandal.crowd.generalWaitMinutes}
                      />
                      <ArrowRight className="w-4 h-4 text-[#827367] group-hover:text-[#F59E0B] transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </button>
                ))
              ) : (
                <p className="px-3 py-4 text-xs text-center text-[#827367]">
                  {language === 'mr' ? 'कोणतेही मंडळ सापडले नाही' : 'No mandals matching your search'}
                </p>
              )}
            </div>
          </div>

          {/* Routes Section */}
          {filteredRoutes.length > 0 && (
            <div className="pt-3">
              <div className="px-2 py-1 text-xs font-semibold text-[#827367] uppercase tracking-wider">
                <span>{language === 'mr' ? 'दर्शन मार्ग' : 'Walkable Routes'}</span>
              </div>
              <div className="mt-1 space-y-1">
                {filteredRoutes.map((route) => (
                  <button
                    key={route.id}
                    onClick={() => {
                      onSelectRoute(route);
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-[#28201A] transition-colors flex items-center justify-between gap-3 group cursor-pointer border border-transparent hover:border-[#E2621B]/30"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-[#F5EBE1] group-hover:text-[#F59E0B] truncate">
                        {language === 'mr' ? route.titleMr : route.title}
                      </p>
                      <p className="text-xs text-[#827367] truncate mt-0.5">
                        {route.stopsCount} {language === 'mr' ? 'थांबे' : 'stops'} • {route.totalDistance} • {language === 'mr' ? route.estimatedTimeMr : route.estimatedTime}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#827367] group-hover:text-[#F59E0B] transition-transform group-hover:translate-x-0.5 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
