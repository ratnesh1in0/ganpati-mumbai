import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, Navigate } from 'react-router-dom';
import { LanguageProvider } from './hooks/useLanguage';
import { useLiveCrowd, DevoteeReportSubmission } from './hooks/useLiveCrowd';
import { useSavedMandals } from './hooks/useSavedMandals';
import { useUserLocation } from './hooks/useUserLocation';
import { CURATED_ROUTES, CuratedRoute } from './data/routesData';
import { Mandal } from './data/mandalsData';

// Layout
import { Navbar } from './components/layout/Navbar';
import { BottomNav } from './components/layout/BottomNav';
import { MobileMenuDrawer } from './components/layout/MobileMenuDrawer';
import { Footer } from './components/layout/Footer';

// Modals
import { SearchModal } from './components/common/SearchModal';
import { ReportCrowdModal } from './components/mandal/ReportCrowdModal';
import { MandalDetailModal } from './components/mandal/MandalDetailModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { MapPage } from './pages/MapPage';
import { RoutesPage } from './pages/RoutesPage';
import { RouteDetailPage } from './pages/RouteDetailPage';
import { TransitParkingPage } from './pages/TransitParkingPage';
import { LiveStreamsPage } from './pages/LiveStreamsPage';
import { VisarjanPage } from './pages/VisarjanPage';
import { AartiSangrahPage } from './pages/AartiSangrahPage';
import { SavedPage } from './pages/SavedPage';
import { MandalDetailPage } from './pages/MandalDetailPage';
import { AreaDetailPage } from './pages/AreaDetailPage';
import { HowToUsePage } from './pages/HowToUsePage';
import { AboutPage } from './pages/AboutPage';

function AppContent() {
  const navigate = useNavigate();
  const { mandals, submitCrowdReport } = useLiveCrowd();
  const {
    savedIds,
    visitedIds,
    toggleSave,
    toggleVisited,
    isSaved,
    isVisited
  } = useSavedMandals();

  const {
    coords: userCoords,
    requestLocation,
    calculateDistance
  } = useUserLocation();

  // Modals & Selection State
  const [selectedMandal, setSelectedMandal] = useState<Mandal | null>(null);
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);
  const [reportInitialMandalId, setReportInitialMandalId] = useState<string | undefined>(undefined);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Keyboard shortcut ⌘K or Ctrl+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenReport = (mandalId?: string) => {
    setReportInitialMandalId(mandalId);
    setIsReportModalOpen(true);
  };

  const handleSelectRoute = (route: CuratedRoute) => {
    navigate(`/routes/${route.id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#14100C] text-[#F5EBE1]">
      {/* Top Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        savedCount={savedIds.length}
        onOpenMobileMenu={() => setIsMobileMenuOpen(prev => !prev)}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      {/* Main Routed Content */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                mandals={mandals}
                routes={CURATED_ROUTES}
                savedIds={savedIds}
                onSelectMandal={(m) => setSelectedMandal(m)}
                onSelectRoute={handleSelectRoute}
                onToggleSave={toggleSave}
                onOpenReportModal={() => handleOpenReport()}
                onOpenSearch={() => setIsSearchOpen(true)}
                onRequestLocation={requestLocation}
                userCoords={userCoords}
                calculateDistance={calculateDistance}
              />
            }
          />

          <Route
            path="/explore"
            element={
              <ExplorePage
                mandals={mandals}
                savedIds={savedIds}
                onSelectMandal={(m) => setSelectedMandal(m)}
                onToggleSave={toggleSave}
                onRequestLocation={requestLocation}
                userCoords={userCoords}
                calculateDistance={calculateDistance}
              />
            }
          />

          <Route
            path="/map"
            element={
              <MapPage
                mandals={mandals}
                onSelectMandal={(m) => setSelectedMandal(m)}
                onRequestLocation={requestLocation}
                userCoords={userCoords}
                onOpenReportModal={() => handleOpenReport()}
              />
            }
          />

          <Route
            path="/routes"
            element={
              <RoutesPage
                routes={CURATED_ROUTES}
                mandals={mandals}
                onSelectRoute={handleSelectRoute}
                onSelectMandal={(m) => setSelectedMandal(m)}
              />
            }
          />

          <Route
            path="/routes/:routeId"
            element={
              <RouteDetailRouteWrapper
                routes={CURATED_ROUTES}
                mandals={mandals}
                onSelectMandal={(m) => setSelectedMandal(m)}
              />
            }
          />

          <Route path="/transit" element={<TransitParkingPage />} />
          <Route path="/parking" element={<Navigate to="/transit" replace />} />
          <Route path="/streams" element={<LiveStreamsPage mandals={mandals} onSelectMandal={(m) => setSelectedMandal(m)} />} />
          <Route path="/visarjan" element={<VisarjanPage />} />
          <Route path="/aartis" element={<AartiSangrahPage />} />

          <Route
            path="/ganpati/:mandalId"
            element={
              <MandalDetailPage
                mandals={mandals}
                savedIds={savedIds}
                visitedIds={visitedIds}
                onToggleSave={toggleSave}
                onToggleVisited={toggleVisited}
                onOpenReportModal={handleOpenReport}
              />
            }
          />

          <Route
            path="/area/:areaSlug"
            element={
              <AreaDetailPage
                mandals={mandals}
                savedIds={savedIds}
                onSelectMandal={(m) => setSelectedMandal(m)}
                onToggleSave={toggleSave}
              />
            }
          />

          <Route path="/how-to-use" element={<HowToUsePage />} />
          <Route path="/how-to-use/marathi" element={<HowToUsePage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route
            path="/saved"
            element={
              <SavedPage
                mandals={mandals}
                savedIds={savedIds}
                visitedIds={visitedIds}
                onSelectMandal={(m) => setSelectedMandal(m)}
                onToggleSave={toggleSave}
                onToggleVisited={toggleVisited}
              />
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Navigation */}
      <BottomNav
        savedCount={savedIds.length}
        onOpenMore={() => setIsMobileMenuOpen(true)}
        isMoreOpen={isMobileMenuOpen}
      />

      {/* Mobile Full Navigation Drawer */}
      <MobileMenuDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        savedCount={savedIds.length}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Global Modals */}
      <MandalDetailModal
        mandal={selectedMandal}
        isOpen={selectedMandal !== null}
        onClose={() => setSelectedMandal(null)}
        isSaved={selectedMandal ? isSaved(selectedMandal.id) : false}
        isVisited={selectedMandal ? isVisited(selectedMandal.id) : false}
        onToggleSave={() => selectedMandal && toggleSave(selectedMandal.id)}
        onToggleVisited={() => selectedMandal && toggleVisited(selectedMandal.id)}
        onOpenReportModal={() => {
          const id = selectedMandal?.id;
          setSelectedMandal(null);
          handleOpenReport(id);
        }}
      />

      <ReportCrowdModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        mandals={mandals}
        initialMandalId={reportInitialMandalId}
        onSubmitReport={(submission: DevoteeReportSubmission) => {
          submitCrowdReport(submission);
        }}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        mandals={mandals}
        routes={CURATED_ROUTES}
        onSelectMandal={(m) => setSelectedMandal(m)}
        onSelectRoute={handleSelectRoute}
      />
    </div>
  );
}

// Wrapper to extract routeId param for RouteDetailPage
function RouteDetailRouteWrapper({
  routes,
  mandals,
  onSelectMandal
}: {
  routes: CuratedRoute[];
  mandals: Mandal[];
  onSelectMandal: (mandal: Mandal) => void;
}) {
  const navigate = useNavigate();
  const { routeId } = useParams<{ routeId: string }>();
  const currentRoute = routes.find(r => r.id === routeId);

  if (!currentRoute) {
    return <Navigate to="/routes" replace />;
  }

  return (
    <RouteDetailPage
      route={currentRoute}
      mandals={mandals}
      onBack={() => navigate('/routes')}
      onSelectMandal={onSelectMandal}
    />
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </LanguageProvider>
  );
}
