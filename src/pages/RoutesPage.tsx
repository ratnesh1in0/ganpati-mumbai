import React, { useState } from 'react';
import { Route as RouteIcon, Sparkles, MapPin, Clock } from 'lucide-react';
import { CuratedRoute } from '../data/routesData';
import { Mandal } from '../data/mandalsData';
import { useLanguage } from '../hooks/useLanguage';
import { RouteCard } from '../components/routes/RouteCard';
import { CustomRouteBuilder } from '../components/routes/CustomRouteBuilder';

interface RoutesPageProps {
  routes: CuratedRoute[];
  mandals: Mandal[];
  onSelectRoute: (route: CuratedRoute) => void;
  onSelectMandal: (mandal: Mandal) => void;
}

export const RoutesPage: React.FC<RoutesPageProps> = ({
  routes,
  mandals,
  onSelectRoute,
  onSelectMandal
}) => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'curated' | 'builder'>('curated');

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-6 pb-nav md:pb-12 animate-fadeIn space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#F5EBE1] font-display flex items-center gap-2.5">
          <RouteIcon className="w-6 h-6 text-[#E2621B]" />
          <span>{language === 'mr' ? 'पदभ्रमण दर्शन मार्ग' : 'Walkable Darshan Circuits'}</span>
        </h1>
        <p className="text-xs sm:text-sm text-[#BDB0A4] mt-1">
          {language === 'mr'
            ? 'वेळेनुसार, रेल्वे स्थानकांनुसार आणि रांगेचा विचार करून आखलेले सुखद दर्शन मार्ग'
            : 'Optimized walking and transit itineraries tailored to minimize queuing and foot fatigue'}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-white/10 pb-2">
        <button
          onClick={() => setActiveTab('curated')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'curated'
              ? 'bg-[#E2621B] text-[#14100C] shadow-md'
              : 'bg-[#1D1712] text-[#827367] hover:text-[#F5EBE1]'
          }`}
        >
          {language === 'mr' ? 'विशेष निवडक मार्ग' : 'Curated Circuits (5 Trails)'}
        </button>

        <button
          onClick={() => setActiveTab('builder')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'builder'
              ? 'bg-[#E2621B] text-[#14100C] shadow-md'
              : 'bg-[#1D1712] text-[#827367] hover:text-[#F5EBE1]'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{language === 'mr' ? 'स्वतःचा मार्ग बनवा' : 'Build Custom Route'}</span>
        </button>
      </div>

      {activeTab === 'curated' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {routes.map((route) => (
            <RouteCard
              key={route.id}
              route={route}
              onSelect={onSelectRoute}
              layout="grid"
            />
          ))}
        </div>
      ) : (
        <CustomRouteBuilder
          mandals={mandals}
          onSelectMandal={onSelectMandal}
        />
      )}
    </div>
  );
};
