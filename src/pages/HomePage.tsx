import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { LiveCrowdTrackerSection } from '../components/home/LiveCrowdTrackerSection';
import { CuratedRoutesRow } from '../components/home/CuratedRoutesRow';
import { IconicMandalsRow } from '../components/home/IconicMandalsRow';
import { ExploreByAreaSection } from '../components/home/ExploreByAreaSection';
import { TransitAlertCard } from '../components/home/TransitAlertCard';
import { Mandal } from '../data/mandalsData';
import { CuratedRoute } from '../data/routesData';

interface HomePageProps {
  mandals: Mandal[];
  routes: CuratedRoute[];
  savedIds: string[];
  onSelectMandal: (mandal: Mandal) => void;
  onSelectRoute: (route: CuratedRoute) => void;
  onToggleSave: (id: string) => void;
  onOpenReportModal: () => void;
  onOpenSearch: () => void;
  onRequestLocation: () => void;
  userCoords: { lat: number; lng: number } | null;
  calculateDistance: (lat: number, lng: number) => number | null;
}

export const HomePage: React.FC<HomePageProps> = ({
  mandals,
  routes,
  savedIds,
  onSelectMandal,
  onSelectRoute,
  onToggleSave,
  onOpenReportModal,
  onOpenSearch,
  onRequestLocation,
  userCoords,
  calculateDistance
}) => {
  return (
    <div className="pb-nav md:pb-12 animate-fadeIn">
      {/* Hero Section */}
      <HeroSection onOpenSearch={onOpenSearch} />

      {/* Live Crowd Tracker */}
      <LiveCrowdTrackerSection
        mandals={mandals}
        onSelectMandal={onSelectMandal}
        onOpenReportModal={onOpenReportModal}
      />

      {/* Curated Circuits: Good for right now */}
      <CuratedRoutesRow
        routes={routes}
        onSelectRoute={onSelectRoute}
      />

      {/* Iconic Mandals */}
      <IconicMandalsRow
        mandals={mandals}
        savedIds={savedIds}
        onSelectMandal={onSelectMandal}
        onToggleSave={onToggleSave}
        onRequestLocation={onRequestLocation}
        userCoords={userCoords}
        calculateDistance={calculateDistance}
      />

      {/* Explore by Neighborhood / Area */}
      <ExploreByAreaSection />

      {/* Transit & Parking Alert Banner */}
      <TransitAlertCard />
    </div>
  );
};
