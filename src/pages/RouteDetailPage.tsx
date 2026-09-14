import React, { useEffect, useRef } from 'react';
import { ArrowLeft, Clock, Train, Footprints, AlertCircle, CheckCircle2 } from 'lucide-react';
import L from 'leaflet';
import type { CuratedRoute, RouteStop } from '../data/routesData';
import type { Mandal } from '../data/mandalsData';
import { useLanguage } from '../hooks/useLanguage';
import { LiveBadge } from '../components/common/LiveBadge';

interface RouteDetailPageProps {
  route: CuratedRoute;
  mandals: Mandal[];
  onBack: () => void;
  onSelectMandal: (mandal: Mandal) => void;
}

export const RouteDetailPage: React.FC<RouteDetailPageProps> = ({
  route,
  mandals,
  onBack,
  onSelectMandal
}) => {
  const { language } = useLanguage();
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Map route stops to Mandal objects
  const stopsWithMandals = route.stops
    .map((s: RouteStop) => {
      const mandal = mandals.find((m: Mandal) => m.id === s.mandalId);
      return {
        ...s,
        mandal
      };
    })
    .filter((s): s is RouteStop & { mandal: Mandal } => s.mandal !== undefined);

  // Render Leaflet Route Polyline Map
  useEffect(() => {
    if (!mapContainerRef.current || stopsWithMandals.length === 0) return;

    const latLngs = stopsWithMandals.map(s => [s.mandal.coordinates.lat, s.mandal.coordinates.lng] as [number, number]);

    const map = L.map(mapContainerRef.current, {
      zoomControl: false,
      attributionControl: false
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 18
    }).addTo(map);

    // Draw glowing polyline connecting stops
    const polyline = L.polyline(latLngs, {
      color: '#E2621B',
      weight: 4,
      opacity: 0.8,
      dashArray: '6, 8'
    }).addTo(map);

    // Add Stop markers with sequence numbers
    stopsWithMandals.forEach((s, idx) => {
      const markerIcon = L.divIcon({
        className: 'route-stop-marker',
        html: `
          <div style="
            width: 26px;
            height: 26px;
            border-radius: 9999px;
            background: #E2621B;
            border: 2px solid #14100C;
            color: #14100C;
            font-weight: 900;
            font-size: 11px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 12px rgba(226,98,27,0.7);
          ">
            ${idx + 1}
          </div>
        `,
        iconSize: [26, 26],
        iconAnchor: [13, 13]
      });

      L.marker([s.mandal.coordinates.lat, s.mandal.coordinates.lng], {
        icon: markerIcon
      }).addTo(map);
    });

    map.fitBounds(polyline.getBounds(), { padding: [30, 30] });

    return () => {
      map.remove();
    };
  }, [stopsWithMandals]);

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 pt-4 pb-nav md:pb-12 animate-fadeIn space-y-6">
      {/* Back button */}
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#1D1712] border border-white/10 text-xs font-bold text-[#BDB0A4] hover:text-[#F5EBE1] hover:border-white/20 transition-all cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{language === 'mr' ? 'सर्व मार्गांवर परत' : 'Back to Routes'}</span>
      </button>

      {/* Hero Card */}
      <div className="surface-raised rounded-2xl border border-[var(--line-strong)] p-6 space-y-4 shadow-xl">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#E2621B]/15 text-[#F59E0B] border border-[#E2621B]/30">
            {language === 'mr' ? route.badgeMr : route.badge}
          </span>
          <span className="text-xs text-[#827367]">
            {route.stopsCount} {language === 'mr' ? 'थांबे' : 'stops'} · {route.totalDistance}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-[#F5EBE1] font-display">
          {language === 'mr' ? route.titleMr : route.title}
        </h1>

        <p className="text-sm text-[#BDB0A4] leading-relaxed">
          {language === 'mr' ? route.descriptionMr : route.description}
        </p>

        {/* Quick Highlights Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
          <div className="p-3 rounded-xl bg-[#14100C] border border-white/10 flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-[#E2621B] shrink-0" />
            <div>
              <span className="text-[#827367] block">Estimated Time</span>
              <span className="font-bold text-[#F5EBE1]">
                {language === 'mr' ? route.estimatedTimeMr : route.estimatedTime}
              </span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#14100C] border border-white/10 flex items-center gap-2.5">
            <Train className="w-4 h-4 text-[#F59E0B] shrink-0" />
            <div>
              <span className="text-[#827367] block">Start / End Station</span>
              <span className="font-bold text-[#F5EBE1] truncate">
                {language === 'mr' ? route.startStationMr : route.startStation}
              </span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#14100C] border border-white/10 flex items-center gap-2.5">
            <Footprints className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <span className="text-[#827367] block">Best Timing</span>
              <span className="font-bold text-[#F5EBE1]">
                {language === 'mr' ? route.bestTimingMr : route.bestTiming}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mini Leaflet Route Map */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg surface">
        <div ref={mapContainerRef} className="w-full h-64" />
        <div className="absolute bottom-2 left-3 z-[400] px-2.5 py-1 rounded-md bg-[#14100C]/90 backdrop-blur-md text-[11px] font-semibold text-[#827367] border border-white/10">
          {route.stopsCount} stops connected along circuit
        </div>
      </div>

      {/* Step-by-Step Circuit Timeline */}
      <div className="space-y-4">
        <h2 className="text-base font-bold uppercase tracking-wider text-[#F59E0B] font-display">
          {language === 'mr' ? 'पदभ्रमण क्रमवार तपशील' : 'Sequential Walking Itinerary'}
        </h2>

        {/* Start Station Node */}
        <div className="p-3.5 rounded-xl bg-[#1D1712] border border-blue-500/30 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 grid place-items-center shrink-0">
            <Train className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 block">
              {language === 'mr' ? 'सुरुवात स्थानक' : 'Starting Railway Station'}
            </span>
            <span className="text-sm font-bold text-[#F5EBE1]">
              {language === 'mr' ? route.startStationMr : route.startStation}
            </span>
          </div>
        </div>

        {/* Stops */}
        <div className="space-y-3">
          {stopsWithMandals.map((stop, i) => (
            <div
              key={stop.mandalId}
              onClick={() => onSelectMandal(stop.mandal)}
              className="surface rounded-xl border border-white/10 p-4 hover:border-[#E2621B]/40 transition-all cursor-pointer group shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#E2621B] text-[#14100C] text-xs font-black grid place-items-center shrink-0 mt-0.5 shadow-md">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-[#F5EBE1] group-hover:text-[#F59E0B] transition-colors">
                      {language === 'mr' ? stop.mandal.nameMr : stop.mandal.name}
                    </h3>
                    <p className="text-xs text-[#827367]">
                      {language === 'mr' ? stop.mandal.areaMr : stop.mandal.area} · {language === 'mr' ? stop.mandal.popularTitleMr : stop.mandal.popularTitle}
                    </p>
                  </div>
                </div>

                <LiveBadge
                  status={stop.mandal.crowd.status}
                  waitMinutes={stop.mandal.crowd.generalWaitMinutes}
                />
              </div>

              {/* Walking tip from previous */}
              {stop.walkingTip && (
                <div className="mt-3 text-xs text-[#BDB0A4] bg-white/[0.03] p-2.5 rounded-lg border border-white/5 flex items-start gap-2">
                  <Footprints className="w-3.5 h-3.5 text-[#E2621B] shrink-0 mt-0.5" />
                  <span>{language === 'mr' ? stop.walkingTipMr : stop.walkingTip}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* End Station Node */}
        <div className="p-3.5 rounded-xl bg-[#1D1712] border border-emerald-500/30 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 grid place-items-center shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
              {language === 'mr' ? 'मार्ग सांगता' : 'Route Finish & Return Station'}
            </span>
            <span className="text-sm font-bold text-[#F5EBE1]">
              {language === 'mr' ? route.endStationMr : route.endStation}
            </span>
          </div>
        </div>
      </div>

      {/* Practical Tips */}
      <div className="surface rounded-2xl border border-white/10 p-5 space-y-2.5">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#F59E0B] flex items-center gap-1.5">
          <AlertCircle className="w-4 h-4 text-[#E2621B]" />
          <span>{language === 'mr' ? 'या मार्गासाठी महत्त्वाच्या सूचना' : 'Practical Circuit Tips'}</span>
        </h3>
        <ul className="space-y-1.5 text-xs text-[#BDB0A4]">
          {(language === 'mr' ? route.tipsMr : route.tips).map((tip: string, i: number) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2621B] mt-1.5 shrink-0" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
