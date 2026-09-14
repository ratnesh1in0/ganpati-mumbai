import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { Mandal } from '../../data/mandalsData';
import { useLanguage } from '../../hooks/useLanguage';
import { LocateFixed, Filter, Navigation } from 'lucide-react';

interface MumbaiMandalMapProps {
  mandals: Mandal[];
  onSelectMandal: (mandal: Mandal) => void;
  selectedMandalId?: string | null;
  userCoords?: { lat: number; lng: number } | null;
  onRequestLocation?: () => void;
  heightClass?: string;
}

export const MumbaiMandalMap: React.FC<MumbaiMandalMapProps> = ({
  mandals,
  onSelectMandal,
  selectedMandalId,
  userCoords,
  onRequestLocation,
  heightClass = "h-[70vh] sm:h-[75vh]"
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const userMarkerRef = useRef<L.Marker | null>(null);

  const { language, t } = useLanguage();
  const [selectedZone, setSelectedZone] = useState<string>('all');
  const [maxWaitFilter, setMaxWaitFilter] = useState<number | null>(null);

  // Filtered mandals
  const filteredMandals = mandals.filter(m => {
    if (selectedZone !== 'all' && m.zone !== selectedZone) return false;
    if (maxWaitFilter !== null && m.crowd.generalWaitMinutes > maxWaitFilter) return false;
    return true;
  });

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [18.9904, 72.8344], // Centered at Lalbaug / Central Mumbai
        zoom: 13,
        minZoom: 11,
        maxZoom: 18,
        zoomControl: false
      });

      // CartoDB Dark Matter tiles
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; OpenStreetMap',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(map);

      // Re-position zoom control to top-right
      L.control.zoom({ position: 'topright' }).addTo(map);

      mapInstanceRef.current = map;
    }

    return () => {
      // clean up on unmount if needed
    };
  }, []);

  // Update Markers
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clear old markers
    markersRef.current.forEach(m => m.remove());
    markersRef.current = [];

    filteredMandals.forEach(mandal => {
      const isSelected = selectedMandalId === mandal.id;
      const status = mandal.crowd.status;

      let color = '#F59E0B'; // default
      if (status === 'low') color = '#10B981';
      else if (status === 'moderate') color = '#F59E0B';
      else if (status === 'busy') color = '#F97316';
      else if (status === 'peak') color = '#EF4444';

      // Custom marker icon with glow
      const customIcon = L.divIcon({
        className: 'custom-mandal-marker',
        html: `
          <div style="
            position: relative;
            width: ${isSelected ? '36px' : '28px'};
            height: ${isSelected ? '36px' : '28px'};
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s;
          ">
            <div style="
              position: absolute;
              inset: 0;
              border-radius: 9999px;
              background-color: ${color};
              opacity: 0.35;
              animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
            "></div>
            <div style="
              position: relative;
              width: 100%;
              height: 100%;
              border-radius: 9999px;
              background: #1D1712;
              border: 2px solid ${color};
              box-shadow: 0 0 14px ${color}88;
              display: flex;
              align-items: center;
              justify-content: center;
              color: ${color};
              font-weight: bold;
              font-size: 11px;
            ">
              🕉
            </div>
          </div>
        `,
        iconSize: [isSelected ? 36 : 28, isSelected ? 36 : 28],
        iconAnchor: [isSelected ? 18 : 14, isSelected ? 18 : 14]
      });

      const marker = L.marker([mandal.coordinates.lat, mandal.coordinates.lng], {
        icon: customIcon
      }).addTo(map);

      // Popup Content
      const popupHtml = `
        <div style="font-family: 'Mukta', sans-serif; padding: 4px; min-width: 200px;">
          <div style="font-size: 10px; font-weight: bold; color: #F59E0B; text-transform: uppercase;">
            ${language === 'mr' ? mandal.badgeMr : mandal.badge}
          </div>
          <div style="font-size: 14px; font-weight: 800; color: #F5EBE1; margin-top: 2px;">
            ${language === 'mr' ? mandal.nameMr : mandal.name}
          </div>
          <div style="font-size: 11px; color: #BDB0A4; margin-top: 2px;">
            ${language === 'mr' ? mandal.areaMr : mandal.area}
          </div>
          <div style="margin-top: 6px; padding: 4px 8px; background: rgba(0,0,0,0.4); border-radius: 8px; display: flex; align-items: center; justify-content: space-between;">
            <span style="font-size: 11px; color: #827367;">${language === 'mr' ? 'प्रतीक्षा वेळ' : 'Wait Time'}</span>
            <span style="font-size: 12px; font-weight: bold; color: ${color};">
              ~${mandal.crowd.generalWaitMinutes} min
            </span>
          </div>
          <div style="margin-top: 8px; display: flex; gap: 6px;">
            <button id="btn-view-${mandal.id}" style="
              flex: 1;
              padding: 5px 8px;
              background: #E2621B;
              color: #14100C;
              font-weight: bold;
              font-size: 11px;
              border-radius: 6px;
              border: none;
              cursor: pointer;
            ">
              ${language === 'mr' ? 'सविस्तर पहा' : 'View Details'}
            </button>
            <a href="https://www.google.com/maps/dir/?api=1&destination=${mandal.coordinates.lat},${mandal.coordinates.lng}" target="_blank" style="
              padding: 5px 8px;
              background: #28201A;
              color: #F5EBE1;
              font-size: 11px;
              border-radius: 6px;
              text-decoration: none;
              display: grid;
              place-items: center;
              border: 1px solid rgba(255,255,255,0.1);
            " title="Directions">
              📍
            </a>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml, { closeButton: false });

      marker.on('popupopen', () => {
        const btn = document.getElementById(`btn-view-${mandal.id}`);
        if (btn) {
          btn.onclick = () => onSelectMandal(mandal);
        }
      });

      markersRef.current.push(marker);
    });
  }, [filteredMandals, selectedMandalId, language, onSelectMandal]);

  // Update user location pin
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (userCoords) {
      if (userMarkerRef.current) {
        userMarkerRef.current.setLatLng([userCoords.lat, userCoords.lng]);
      } else {
        const userIcon = L.divIcon({
          className: 'user-marker',
          html: `
            <div style="
              width: 20px;
              height: 20px;
              border-radius: 9999px;
              background: #3B82F6;
              border: 3px solid white;
              box-shadow: 0 0 10px #3B82F6;
            "></div>
          `,
          iconSize: [20, 20],
          iconAnchor: [10, 10]
        });

        userMarkerRef.current = L.marker([userCoords.lat, userCoords.lng], {
          icon: userIcon
        }).addTo(map);
      }

      map.flyTo([userCoords.lat, userCoords.lng], 14, { duration: 1 });
    }
  }, [userCoords]);

  // Pan to selected mandal if requested
  useEffect(() => {
    if (selectedMandalId && mapInstanceRef.current) {
      const mandal = mandals.find(m => m.id === selectedMandalId);
      if (mandal) {
        mapInstanceRef.current.flyTo([mandal.coordinates.lat, mandal.coordinates.lng], 15, {
          duration: 1
        });
      }
    }
  }, [selectedMandalId, mandals]);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-[var(--line-strong)] surface-raised shadow-2xl">
      {/* Top Floating Filter Bar */}
      <div className="absolute top-3 left-3 right-14 z-[400] flex flex-wrap gap-1.5 pointer-events-auto">
        {/* Zone chips */}
        <div className="flex gap-1 overflow-x-auto no-scrollbar bg-[#14100C]/85 backdrop-blur-md p-1 rounded-xl border border-white/10 shadow-lg">
          {[
            { id: 'all', label: language === 'mr' ? 'सर्व भाग' : 'All Areas' },
            { id: 'lalbaug-parel', label: language === 'mr' ? 'लालबाग-परळ' : 'Lalbaug-Parel' },
            { id: 'south-mumbai', label: language === 'mr' ? 'दक्षिण मुंबई' : 'South Mumbai' },
            { id: 'central-mumbai', label: language === 'mr' ? 'मध्य (शीव/दादर)' : 'Central (Sion)' },
            { id: 'suburbs-west', label: language === 'mr' ? 'पश्चिम उपनगरे' : 'West Suburbs' },
            { id: 'suburbs-east', label: language === 'mr' ? 'पूर्व उपनगरे' : 'East Suburbs' }
          ].map(chip => (
            <button
              key={chip.id}
              onClick={() => setSelectedZone(chip.id)}
              className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                selectedZone === chip.id
                  ? 'bg-[#E2621B] text-[#14100C] shadow-md'
                  : 'text-[#827367] hover:text-[#F5EBE1] hover:bg-white/5'
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Quick wait filter pill */}
        <div className="hidden sm:flex items-center gap-1 bg-[#14100C]/85 backdrop-blur-md p-1 rounded-xl border border-white/10 shadow-lg text-[11px]">
          <button
            onClick={() => setMaxWaitFilter(maxWaitFilter === 30 ? null : 30)}
            className={`px-2.5 py-1 rounded-lg font-bold transition-colors cursor-pointer ${
              maxWaitFilter === 30
                ? 'bg-emerald-500 text-[#14100C]'
                : 'text-emerald-400 hover:bg-white/5'
            }`}
          >
            &lt; 30 min
          </button>
          <button
            onClick={() => setMaxWaitFilter(maxWaitFilter === 60 ? null : 60)}
            className={`px-2.5 py-1 rounded-lg font-bold transition-colors cursor-pointer ${
              maxWaitFilter === 60
                ? 'bg-amber-500 text-[#14100C]'
                : 'text-amber-400 hover:bg-white/5'
            }`}
          >
            &lt; 1 hr
          </button>
        </div>
      </div>

      {/* Floating Geolocation Button */}
      {onRequestLocation && (
        <button
          onClick={onRequestLocation}
          className="absolute bottom-5 right-4 z-[400] p-3 rounded-full bg-[#1D1712] text-[#F59E0B] border border-white/15 shadow-xl hover:bg-[#28201A] transition-all active:scale-95 cursor-pointer"
          title="Find My Location"
          aria-label="Locate me on map"
        >
          <LocateFixed className="w-5 h-5" />
        </button>
      )}

      {/* Floating Mandal Counter */}
      <div className="absolute bottom-5 left-4 z-[400] px-3 py-1.5 rounded-full bg-[#14100C]/90 backdrop-blur-md text-xs font-semibold text-[#BDB0A4] border border-white/10 shadow-lg flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#E2621B] animate-ping" />
        <span>
          {filteredMandals.length} {language === 'mr' ? 'मंडळे नकाशावर' : 'mandals mapped'}
        </span>
      </div>

      {/* Leaflet container */}
      <div ref={mapContainerRef} className={`w-full ${heightClass}`} />
    </div>
  );
};
