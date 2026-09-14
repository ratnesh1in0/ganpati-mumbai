import React, { useState } from 'react';
import { Train, Route as RouteIcon, Clock, Check, Sparkles, Navigation, ArrowRight, AlertCircle } from 'lucide-react';
import { Mandal } from '../../data/mandalsData';
import { useLanguage } from '../../hooks/useLanguage';
import { LiveBadge } from '../common/LiveBadge';
import confetti from 'canvas-confetti';

interface CustomRouteBuilderProps {
  mandals: Mandal[];
  onSelectMandal: (mandal: Mandal) => void;
}

const STARTING_STATIONS = [
  { id: 'currey-road', name: 'Currey Road (Central Line)', nameMr: 'करी रोड (मध्य रेल्वे)', lat: 18.9950, lng: 72.8315 },
  { id: 'chinchpokli', name: 'Chinchpokli (Central Line)', nameMr: 'चिंचपोकळी (मध्य रेल्वे)', lat: 18.9868, lng: 72.8310 },
  { id: 'byculla', name: 'Byculla (Central Line)', nameMr: 'भायखळा (मध्य रेल्वे)', lat: 18.9750, lng: 72.8320 },
  { id: 'dadar', name: 'Dadar (Central & Western)', nameMr: 'दादर (मध्य व पश्चिम रेल्वे)', lat: 19.0178, lng: 72.8478 },
  { id: 'charni-road', name: 'Charni Road (Western Line)', nameMr: 'चर्नी रोड (पश्चिम रेल्वे)', lat: 18.9510, lng: 72.8185 },
  { id: 'grant-road', name: 'Grant Road (Western Line)', nameMr: 'ग्रँट रोड (पश्चिम रेल्वे)', lat: 18.9630, lng: 72.8160 },
  { id: 'csmt', name: 'CSMT (Central Line)', nameMr: 'सीएसएमटी (मध्य रेल्वे)', lat: 18.9400, lng: 72.8355 },
  { id: 'kings-circle', name: 'Kings Circle (Harbour Line)', nameMr: 'किंग्ज सर्कल (हार्बर रेल्वे)', lat: 19.0305, lng: 72.8550 },
  { id: 'andheri', name: 'Andheri / Azad Nagar Metro', nameMr: 'अंधेरी / आझाद नगर मेट्रो', lat: 19.1298, lng: 72.8315 }
];

export const CustomRouteBuilder: React.FC<CustomRouteBuilderProps> = ({ mandals, onSelectMandal }) => {
  const { language, t } = useLanguage();
  const [startStationId, setStartStationId] = useState<string>('currey-road');
  const [selectedMandalIds, setSelectedMandalIds] = useState<string[]>([
    'lalbaugcha-raja',
    'mumbaicha-raja-ganesh-galli',
    'chinchpokli-cha-chintamani'
  ]);
  const [generatedPlan, setGeneratedPlan] = useState<{
    orderedMandals: Mandal[];
    totalDistanceKm: number;
    totalWalkingMinutes: number;
    totalQueueMinutes: number;
  } | null>(null);

  const toggleMandal = (id: string) => {
    setSelectedMandalIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleGenerate = () => {
    if (selectedMandalIds.length === 0) return;

    const startStation = STARTING_STATIONS.find(s => s.id === startStationId) || STARTING_STATIONS[0];
    const pool = mandals.filter(m => selectedMandalIds.includes(m.id));

    // Greedy Nearest-Neighbor Algorithm from start station
    const ordered: Mandal[] = [];
    let currentLat = startStation.lat;
    let currentLng = startStation.lng;
    const remaining = [...pool];

    let totalDist = 0;

    while (remaining.length > 0) {
      let nearestIdx = 0;
      let minDistance = Infinity;

      for (let i = 0; i < remaining.length; i++) {
        const m = remaining[i];
        const dist = Math.sqrt(
          Math.pow(m.coordinates.lat - currentLat, 2) +
          Math.pow(m.coordinates.lng - currentLng, 2)
        );
        if (dist < minDistance) {
          minDistance = dist;
          nearestIdx = i;
        }
      }

      const nextMandal = remaining.splice(nearestIdx, 1)[0];
      ordered.push(nextMandal);
      totalDist += minDistance * 111; // rough degree to km conversion
      currentLat = nextMandal.coordinates.lat;
      currentLng = nextMandal.coordinates.lng;
    }

    const walkingMinutes = Math.round(totalDist * 13); // ~13 mins per km in crowds
    const queueMinutes = ordered.reduce((sum, m) => sum + m.crowd.generalWaitMinutes, 0);

    setGeneratedPlan({
      orderedMandals: ordered,
      totalDistanceKm: Math.round(totalDist * 10) / 10,
      totalWalkingMinutes: walkingMinutes,
      totalQueueMinutes: queueMinutes
    });

    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#E2621B', '#F59E0B', '#E5A93C']
    });
  };

  const selectedStation = STARTING_STATIONS.find(s => s.id === startStationId);

  return (
    <div className="surface-raised rounded-2xl border border-[var(--line-strong)] p-5 sm:p-7 space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1 text-xs font-bold text-[#F59E0B] uppercase tracking-wider">
          <RouteIcon className="w-4 h-4 text-[#E2621B]" />
          <span>{t.buildRouteBtn}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#F5EBE1] font-display">
          {t.builderTitle}
        </h2>
        <p className="text-xs sm:text-sm text-[#BDB0A4] mt-1 leading-relaxed">
          {t.builderSub}
        </p>
      </div>

      {/* Step 1: Select Starting Station */}
      <div className="space-y-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#827367]">
          {language === 'mr' ? 'पायरी १: सुरुवातीचे रेल्वे स्थानक' : 'Step 1: Choose Starting Railway Station'}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {STARTING_STATIONS.map((station) => (
            <button
              key={station.id}
              type="button"
              onClick={() => setStartStationId(station.id)}
              className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex items-center gap-2.5 ${
                startStationId === station.id
                  ? 'bg-[#E2621B]/15 border-[#E2621B] text-[#F59E0B]'
                  : 'bg-[#1D1712] border-white/10 text-[#827367] hover:border-white/20'
              }`}
            >
              <Train className={`w-4 h-4 shrink-0 ${startStationId === station.id ? 'text-[#E2621B]' : ''}`} />
              <span className="text-xs font-bold line-clamp-1">
                {language === 'mr' ? station.nameMr : station.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Choose Mandals */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#827367]">
            {language === 'mr' ? 'पायरी २: दर्शनासाठी मंडळे निवडा' : 'Step 2: Select Mandals To Visit'}
          </label>
          <span className="text-xs text-[#F59E0B] font-bold">
            {selectedMandalIds.length} {language === 'mr' ? 'निवडले' : 'selected'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-72 overflow-y-auto pr-1">
          {mandals.map((mandal) => {
            const isChecked = selectedMandalIds.includes(mandal.id);
            return (
              <div
                key={mandal.id}
                onClick={() => toggleMandal(mandal.id)}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 select-none ${
                  isChecked
                    ? 'bg-[#28201A] border-[#E2621B]/60 text-[#F5EBE1]'
                    : 'bg-[#1D1712] border-white/10 text-[#827367] hover:border-white/20'
                }`}
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${
                      isChecked ? 'bg-[#E2621B] border-[#E2621B] text-[#14100C]' : 'border-white/20'
                    }`}>
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </span>
                    <p className="text-xs font-bold truncate">
                      {language === 'mr' ? mandal.nameMr : mandal.name}
                    </p>
                  </div>
                  <span className="text-[11px] text-[#827367] ml-6 block truncate">
                    {language === 'mr' ? mandal.areaMr : mandal.area} · ~{mandal.crowd.generalWaitMinutes}m wait
                  </span>
                </div>

                <LiveBadge
                  status={mandal.crowd.status}
                  showDotOnly
                  className="shrink-0"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Generate Action Button */}
      <button
        type="button"
        onClick={handleGenerate}
        disabled={selectedMandalIds.length === 0}
        className="w-full py-3.5 px-5 rounded-xl font-black text-sm bg-gradient-to-r from-[#E2621B] to-[#F59E0B] text-[#14100C] hover:opacity-95 transition-all shadow-lg glow-shendur flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        <Sparkles className="w-4 h-4" />
        <span>{t.calculateRouteBtn}</span>
      </button>

      {/* Generated Plan Itinerary */}
      {generatedPlan && (
        <div className="pt-4 border-t border-white/10 space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-[#F5EBE1] font-display flex items-center gap-2">
              <RouteIcon className="w-4 h-4 text-[#E2621B]" />
              {t.optimizedResultTitle}
            </h3>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
            <div className="p-3 rounded-xl bg-[#14100C] border border-white/10">
              <span className="text-[#827367] block">{t.totalDistance}</span>
              <span className="text-base font-black text-[#F5EBE1] font-mono">
                {generatedPlan.totalDistanceKm} km
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#14100C] border border-white/10">
              <span className="text-[#827367] block">Walking Time</span>
              <span className="text-base font-black text-[#F59E0B] font-mono">
                ~{generatedPlan.totalWalkingMinutes} min
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#14100C] border border-white/10 col-span-2 sm:col-span-1">
              <span className="text-[#827367] block">{t.totalEstTime}</span>
              <span className="text-base font-black text-[#E2621B] font-mono">
                ~{Math.round((generatedPlan.totalWalkingMinutes + generatedPlan.totalQueueMinutes) / 60 * 10) / 10} hr
              </span>
            </div>
          </div>

          {/* Step by Step Timeline */}
          <div className="relative pl-6 space-y-4 border-l-2 border-[#E2621B]/40 ml-2">
            {/* Start Node */}
            <div className="relative">
              <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-blue-500 border-2 border-[#14100C]" />
              <div className="text-xs">
                <span className="text-blue-400 font-bold uppercase tracking-wider block">
                  {language === 'mr' ? 'सुरुवात स्थानक' : 'Starting Point'}
                </span>
                <span className="text-sm font-bold text-[#F5EBE1]">
                  {language === 'mr' ? selectedStation?.nameMr : selectedStation?.name}
                </span>
              </div>
            </div>

            {/* Mandals Nodes */}
            {generatedPlan.orderedMandals.map((mandal, index) => (
              <div key={mandal.id} className="relative">
                <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-[#E2621B] border-2 border-[#14100C] flex items-center justify-center text-[9px] font-black text-[#14100C]">
                  {index + 1}
                </div>
                <div
                  onClick={() => onSelectMandal(mandal)}
                  className="p-3 rounded-xl bg-[#14100C] border border-white/10 hover:border-[#E2621B]/40 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#F5EBE1] hover:text-[#F59E0B]">
                      {language === 'mr' ? mandal.nameMr : mandal.name}
                    </span>
                    <LiveBadge status={mandal.crowd.status} waitMinutes={mandal.crowd.generalWaitMinutes} />
                  </div>
                  <span className="text-[11px] text-[#827367] block mt-0.5">
                    {language === 'mr' ? mandal.areaMr : mandal.area} · {language === 'mr' ? mandal.nearestStations[0]?.nameMr : mandal.nearestStations[0]?.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
