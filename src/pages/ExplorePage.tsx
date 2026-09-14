import React, { useState } from 'react';
import { Search, LocateFixed, ArrowUpDown, Filter, Sparkles, MapPin } from 'lucide-react';
import { Mandal } from '../data/mandalsData';
import { useLanguage } from '../hooks/useLanguage';
import { MandalCard } from '../components/mandal/MandalCard';

interface ExplorePageProps {
  mandals: Mandal[];
  savedIds: string[];
  onSelectMandal: (mandal: Mandal) => void;
  onToggleSave: (id: string) => void;
  onRequestLocation: () => void;
  userCoords: { lat: number; lng: number } | null;
  calculateDistance: (lat: number, lng: number) => number | null;
}

export const ExplorePage: React.FC<ExplorePageProps> = ({
  mandals,
  savedIds,
  onSelectMandal,
  onToggleSave,
  onRequestLocation,
  userCoords,
  calculateDistance
}) => {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZone, setSelectedZone] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'default' | 'distance' | 'queue' | 'name'>('default');

  const cleanQuery = searchQuery.toLowerCase().trim();

  // Filter mandals
  let filtered = mandals.filter(m => {
    // Zone filter
    if (selectedZone !== 'all' && m.zone !== selectedZone) return false;

    // Search query
    if (cleanQuery) {
      const matchName = m.name.toLowerCase().includes(cleanQuery) || m.nameMr.includes(cleanQuery);
      const matchArea = m.area.toLowerCase().includes(cleanQuery) || m.areaMr.includes(cleanQuery);
      const matchStation = m.nearestStations.some(s => s.name.toLowerCase().includes(cleanQuery));
      const matchTag = m.tags.some(t => t.toLowerCase().includes(cleanQuery));
      return matchName || matchArea || matchStation || matchTag;
    }

    return true;
  });

  // Sort mandals
  if (sortBy === 'distance' && userCoords) {
    filtered = [...filtered].sort((a, b) => {
      const distA = calculateDistance(a.coordinates.lat, a.coordinates.lng) || 999;
      const distB = calculateDistance(b.coordinates.lat, b.coordinates.lng) || 999;
      return distA - distB;
    });
  } else if (sortBy === 'queue') {
    filtered = [...filtered].sort((a, b) => a.crowd.generalWaitMinutes - b.crowd.generalWaitMinutes);
  } else if (sortBy === 'name') {
    filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  }

  const zones = [
    { id: 'all', label: language === 'mr' ? 'सर्व विभाग' : 'All Areas' },
    { id: 'lalbaug-parel', label: language === 'mr' ? 'लालबाग व परळ' : 'Lalbaug & Parel' },
    { id: 'south-mumbai', label: language === 'mr' ? 'दक्षिण मुंबई (गिरगाव/फोर्ट)' : 'South Mumbai (Girgaon)' },
    { id: 'central-mumbai', label: language === 'mr' ? 'मध्य मुंबई (शीव/दादर)' : 'Central Mumbai (Sion)' },
    { id: 'suburbs-west', label: language === 'mr' ? 'पश्चिम उपनगरे (अंधेरी)' : 'Western Suburbs' },
    { id: 'suburbs-east', label: language === 'mr' ? 'पूर्व उपनगरे (चेंबूर)' : 'Eastern Suburbs' }
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-6 pb-nav md:pb-12 animate-fadeIn space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#F5EBE1] font-display">
          {language === 'mr' ? 'मुंबईतील गणेशोत्सव मंडळे' : 'Explore Mumbai Mandals'}
        </h1>
        <p className="text-xs sm:text-sm text-[#BDB0A4] mt-1">
          {language === 'mr'
            ? 'सर्व प्रसिद्ध मंडळे, थेट गर्दीची वेळ आणि प्रवासाचे मार्ग'
            : 'Directory of Mumbai’s iconic sarvajanik mandals with live queue tracker and station routes'}
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-2.5">
          {/* Search input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#E2621B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-[#1D1712] border border-[var(--line-strong)] rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#F5EBE1] placeholder-[#827367] outline-none focus:border-[#E2621B] shadow-inner"
            />
          </div>

          {/* Sort Menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (!userCoords) onRequestLocation();
                setSortBy(sortBy === 'distance' ? 'default' : 'distance');
              }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                sortBy === 'distance'
                  ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300'
                  : 'bg-[#1D1712] border-white/10 text-[#827367] hover:text-[#F5EBE1]'
              }`}
            >
              <LocateFixed className="w-3.5 h-3.5" />
              <span>{language === 'mr' ? 'जवळचे' : 'Closest'}</span>
            </button>

            <button
              onClick={() => setSortBy(sortBy === 'queue' ? 'default' : 'queue')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                sortBy === 'queue'
                  ? 'bg-amber-950/60 border-amber-500 text-amber-300'
                  : 'bg-[#1D1712] border-white/10 text-[#827367] hover:text-[#F5EBE1]'
              }`}
            >
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span>{language === 'mr' ? 'कमी रांग' : 'Least Wait'}</span>
            </button>
          </div>
        </div>

        {/* Zone Filter Chips */}
        <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {zones.map((zone) => (
            <button
              key={zone.id}
              onClick={() => setSelectedZone(zone.id)}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl whitespace-nowrap transition-all cursor-pointer border ${
                selectedZone === zone.id
                  ? 'bg-[#E2621B] border-[#E2621B] text-[#14100C] shadow-md'
                  : 'bg-[#1D1712] border-white/10 text-[#827367] hover:text-[#F5EBE1] hover:border-white/20'
              }`}
            >
              {zone.label}
            </button>
          ))}
        </div>
      </div>

      {/* Counter */}
      <div className="flex items-center justify-between text-xs text-[#827367]">
        <span>
          {filtered.length} {language === 'mr' ? 'मंडळे उपलब्ध' : 'mandals shown'}
        </span>
        {userCoords && (
          <span className="text-emerald-400">
            ✓ {language === 'mr' ? 'तुमचे जीपीएस लोकेशन सक्रिय' : 'GPS location active'}
          </span>
        )}
      </div>

      {/* Grid of Mandals */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((mandal) => (
            <MandalCard
              key={mandal.id}
              mandal={mandal}
              isSaved={savedIds.includes(mandal.id)}
              distanceKm={calculateDistance(mandal.coordinates.lat, mandal.coordinates.lng)}
              onSelect={onSelectMandal}
              onToggleSave={() => onToggleSave(mandal.id)}
              layout="grid"
            />
          ))}
        </div>
      ) : (
        <div className="surface rounded-2xl p-12 text-center border border-white/10 space-y-3">
          <Search className="w-10 h-10 text-[#827367] mx-auto" />
          <h3 className="text-base font-bold text-[#F5EBE1]">
            {language === 'mr' ? 'कोणतेही मंडळ सापडले नाही' : 'No Mandals Found'}
          </h3>
          <p className="text-xs text-[#827367] max-w-sm mx-auto">
            {language === 'mr'
              ? 'कृपया शोध शब्द तपासा किंवा वेगळा विभाग निवडा.'
              : 'Try searching with a different name or clear the current area filter.'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedZone('all');
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-[#E2621B] text-[#14100C] hover:bg-[#F07024] cursor-pointer"
          >
            {language === 'mr' ? 'फिल्टर साफ करा' : 'Clear Filters'}
          </button>
        </div>
      )}
    </div>
  );
};
