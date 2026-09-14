import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { CuratedRoute } from '../../data/routesData';
import { useLanguage } from '../../hooks/useLanguage';
import { RouteCard } from '../routes/RouteCard';

interface CuratedRoutesRowProps {
  routes: CuratedRoute[];
  onSelectRoute: (route: CuratedRoute) => void;
}

export const CuratedRoutesRow: React.FC<CuratedRoutesRowProps> = ({ routes, onSelectRoute }) => {
  const { language, t } = useLanguage();

  return (
    <section className="mt-8">
      {/* Heading row */}
      <div className="mb-2 flex items-baseline justify-between gap-3 px-4 sm:px-6">
        <div className="min-w-0">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#F5EBE1]">
            {t.goodForNowHeading}
          </h2>
          <p className="text-xs text-[#827367] font-marathi">
            {t.goodForNowSub}
          </p>
        </div>
        <Link
          to="/routes"
          className="-mr-1 flex items-center gap-0.5 px-2 py-1 text-xs font-semibold text-[#E2621B] hover:text-[#F07024] shrink-0"
        >
          <span>{t.seeAll}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Description */}
      <p className="mb-3 px-4 sm:px-6 text-xs text-[#827367] leading-relaxed">
        {language === 'mr'
          ? 'कमीत कमी अंतर चालण्यासाठी आणि रांगेचा अंदाज घेऊन तयार केलेले मार्ग.'
          : 'Walkable circuits suited to the time of day, with queuing and train stations counted.'}
      </p>

      {/* Horizontal Carousel */}
      <div className="flex gap-3 overflow-x-auto px-4 sm:px-6 pb-2 no-scrollbar scroll-smooth">
        {routes.map((route) => (
          <RouteCard
            key={route.id}
            route={route}
            onSelect={onSelectRoute}
            layout="horizontal"
          />
        ))}
      </div>
    </section>
  );
};
