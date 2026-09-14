import React, { useState } from 'react';
import {
  X,
  MapPin,
  Train,
  Clock,
  Bookmark,
  CheckCircle,
  ExternalLink,
  Navigation,
  Radio,
  Sparkles,
  ShieldAlert,
  Calendar,
  Utensils
} from 'lucide-react';
import { Mandal } from '../../data/mandalsData';
import { useLanguage } from '../../hooks/useLanguage';
import { LiveBadge } from '../common/LiveBadge';
import { GanpatiGlyph } from '../../assets/DevotionalIcons';

interface MandalDetailModalProps {
  mandal: Mandal | null;
  isOpen: boolean;
  onClose: () => void;
  isSaved: boolean;
  isVisited: boolean;
  onToggleSave: () => void;
  onToggleVisited: () => void;
  onOpenReportModal: () => void;
}

export const MandalDetailModal: React.FC<MandalDetailModalProps> = ({
  mandal,
  isOpen,
  onClose,
  isSaved,
  isVisited,
  onToggleSave,
  onToggleVisited,
  onOpenReportModal
}) => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'aarti' | 'transit' | 'stream'>('overview');

  if (!isOpen || !mandal) return null;

  const hasTwoQueues = mandal.id === 'lalbaugcha-raja';

  return (
    <div className="fixed inset-0 z-[105] flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl surface-raised rounded-2xl border border-white/15 overflow-hidden shadow-2xl flex flex-col max-h-[92vh] z-10 animate-slideUp">
        {/* Visual Hero Header */}
        <div className={`relative h-44 sm:h-52 bg-gradient-to-br ${mandal.gradientTheme} p-5 flex flex-col justify-between overflow-hidden`}>
          {/* Subtle Devotional Watermark */}
          <div className="absolute -right-6 -bottom-6 text-white/10 pointer-events-none">
            <GanpatiGlyph size={180} />
          </div>

          <div className="relative z-10 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-black/50 backdrop-blur-md text-[#F59E0B] border border-white/10">
              <Sparkles className="w-3 h-3 text-[#E2621B]" />
              {language === 'mr' ? mandal.badgeMr : mandal.badge}
            </span>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-black/40 text-[#F5EBE1] hover:bg-black/60 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative z-10">
            <span className="text-xs uppercase tracking-wider text-white/70 font-semibold">
              {language === 'mr' ? mandal.zoneNameMr : mandal.zoneName} · {language === 'mr' ? `स्थापना ${mandal.foundedYear}` : `Est. ${mandal.foundedYear}`}
            </span>
            <h1 className="text-xl sm:text-2xl font-black text-white leading-tight font-display drop-shadow-md">
              {language === 'mr' ? mandal.nameMr : mandal.name}
            </h1>
            <p className="text-xs sm:text-sm text-white/80 line-clamp-1 mt-0.5">
              {language === 'mr' ? mandal.popularTitleMr : mandal.popularTitle}
            </p>
          </div>
        </div>

        {/* Action Buttons Bar */}
        <div className="flex items-center justify-between gap-2 px-4 py-2.5 bg-[#18130E] border-b border-white/10">
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleSave}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                isSaved
                  ? 'bg-[#E2621B]/20 border-[#E2621B] text-[#F59E0B]'
                  : 'bg-[#28201A] border-white/10 text-[#BDB0A4] hover:text-white'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-[#E2621B]' : ''}`} />
              <span>{isSaved ? t.savedMandal : t.saveMandal}</span>
            </button>

            <button
              onClick={onToggleVisited}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                isVisited
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                  : 'bg-[#28201A] border-white/10 text-[#BDB0A4] hover:text-white'
              }`}
            >
              <CheckCircle className={`w-3.5 h-3.5 ${isVisited ? 'fill-emerald-500 text-[#14100C]' : ''}`} />
              <span>{isVisited ? t.visited : t.markVisited}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenReportModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-[#E2621B] text-[#14100C] hover:bg-[#F07024] cursor-pointer"
            >
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>{t.reportCrowdBtn}</span>
            </button>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${mandal.coordinates.lat},${mandal.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-xl bg-[#28201A] text-[#BDB0A4] hover:text-white border border-white/10 cursor-pointer"
              title={t.directions}
            >
              <Navigation className="w-4 h-4 text-[#E2621B]" />
            </a>
          </div>
        </div>

        {/* Live Crowd Card */}
        <div className="m-4 p-3.5 rounded-xl bg-[#201913] border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E2621B] animate-ping" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                {t.liveCrowdHeading}
              </span>
            </div>
            <span className="text-[11px] text-[#827367]">
              {language === 'mr' ? mandal.crowd.lastUpdatedMr : mandal.crowd.lastUpdated} ({mandal.crowd.reportedCount} {t.verifiedReports})
            </span>
          </div>

          {hasTwoQueues ? (
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="p-2.5 rounded-lg bg-[#14100C] border border-white/10">
                <span className="block text-[11px] text-[#BDB0A4] font-medium">{t.mukhDarshan}</span>
                <span className="text-base font-black text-[#F5EBE1]">
                  ~{mandal.crowd.mukhDarshanMinutes} {t.minutes}
                </span>
                <span className="block text-[10px] text-emerald-400">Steady movement</span>
              </div>

              <div className="p-2.5 rounded-lg bg-red-950/30 border border-red-500/30">
                <span className="block text-[11px] text-red-300 font-medium">{t.charanSparsh}</span>
                <span className="text-base font-black text-red-200">
                  ~{Math.round((mandal.crowd.charanSparshMinutes || 510) / 60)} {t.hours}
                </span>
                <span className="block text-[10px] text-red-400">Navsachi Line</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#14100C] border border-white/10">
              <div>
                <span className="block text-[11px] text-[#BDB0A4]">{t.generalQueue}</span>
                <span className="text-base font-black text-[#F59E0B]">
                  ~{mandal.crowd.generalWaitMinutes} {t.minutes}
                </span>
              </div>
              <LiveBadge status={mandal.crowd.status} />
            </div>
          )}

          {mandal.crowd.notes && (
            <p className="mt-2 text-xs text-[#BDB0A4] bg-white/5 p-2 rounded-lg italic">
              "{language === 'mr' ? mandal.crowd.notesMr : mandal.crowd.notes}"
            </p>
          )}
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-white/10 px-4 gap-4 text-xs font-bold overflow-x-auto no-scrollbar">
          {[
            { key: 'overview', label: language === 'mr' ? 'माहिती व इतिहास' : 'Overview' },
            { key: 'aarti', label: language === 'mr' ? 'आरती वेळा' : 'Aartis' },
            { key: 'transit', label: language === 'mr' ? 'कसे पोहोचावे' : 'Transit' },
            { key: 'stream', label: language === 'mr' ? 'थेट दर्शन' : 'Live Stream' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`py-2.5 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${
                activeTab === tab.key
                  ? 'border-[#E2621B] text-[#F59E0B]'
                  : 'border-transparent text-[#827367] hover:text-[#F5EBE1]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div className="overflow-y-auto p-4 space-y-4 flex-1">
          {activeTab === 'overview' && (
            <div className="space-y-4">
              {/* Dress Code notice if applicable */}
              {mandal.dressCodeRule && (
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-950/40 border border-amber-500/40 text-amber-200 text-xs">
                  <ShieldAlert className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
                  <div>
                    <span className="font-bold block">{t.dressCodeNotice}</span>
                    <span>{language === 'mr' ? mandal.dressCodeRuleMr : mandal.dressCodeRule}</span>
                  </div>
                </div>
              )}

              {/* History */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#827367] mb-1.5">
                  {t.historySection}
                </h3>
                <p className="text-xs sm:text-sm text-[#F5EBE1] leading-relaxed">
                  {language === 'mr' ? mandal.historyMr : mandal.history}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#827367] mb-2">
                  {t.highlightsSection}
                </h3>
                <ul className="space-y-1.5">
                  {(language === 'mr' ? mandal.highlightsMr : mandal.highlights).map((h, i) => (
                    <li key={i} className="text-xs text-[#BDB0A4] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E2621B] mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Theme Dekhava */}
              {mandal.themeDekhava && (
                <div className="p-3 rounded-xl bg-[#28201A] border border-white/10">
                  <span className="text-[11px] uppercase tracking-wider text-[#F59E0B] font-bold block mb-1">
                    {language === 'mr' ? 'या वर्षीचा देखावा' : 'This Year’s Theme / Dekhava'}
                  </span>
                  <p className="text-xs text-[#F5EBE1]">
                    {language === 'mr' ? mandal.themeDekhavaMr : mandal.themeDekhava}
                  </p>
                </div>
              )}

              {/* Prasad */}
              <div className="p-3 rounded-xl bg-[#1D1712] border border-white/10 flex items-start gap-2.5">
                <Utensils className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#F5EBE1] block">{t.prasadTitle}</span>
                  <span className="text-xs text-[#BDB0A4]">
                    {language === 'mr' ? mandal.prasadInfoMr : mandal.prasadInfo}
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'aarti' && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#827367] mb-1">
                <Calendar className="w-4 h-4 text-[#E2621B]" />
                <span>{t.aartiSchedule}</span>
              </div>

              <div className="divide-y divide-white/5 border border-white/10 rounded-xl overflow-hidden bg-[#1D1712]">
                {mandal.aartis.map((aarti, idx) => (
                  <div
                    key={idx}
                    className={`p-3 flex items-center justify-between text-xs ${
                      aarti.isNext ? 'bg-[#E2621B]/15 border-l-4 border-l-[#E2621B]' : ''
                    }`}
                  >
                    <div>
                      <span className="font-bold text-[#F5EBE1] block">
                        {language === 'mr' ? aarti.nameMr : aarti.name}
                      </span>
                      {aarti.isNext && (
                        <span className="text-[10px] font-semibold text-[#F59E0B] inline-flex items-center gap-1 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-ping" />
                          {t.nextAarti}
                        </span>
                      )}
                    </div>
                    <span className="font-mono font-bold text-[#F59E0B] text-sm">
                      {aarti.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'transit' && (
            <div className="space-y-3">
              <div className="text-xs text-[#827367] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E2621B]" />
                <span>{language === 'mr' ? mandal.addressMr : mandal.address}</span>
              </div>

              <h4 className="text-xs font-bold uppercase tracking-wider text-[#F59E0B] pt-2">
                {t.nearestStation}
              </h4>

              <div className="space-y-2">
                {mandal.nearestStations.map((station, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#1D1712] border border-white/10 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#F5EBE1] flex items-center gap-1.5">
                        <Train className="w-3.5 h-3.5 text-[#E2621B]" />
                        {language === 'mr' ? station.nameMr : station.name}
                      </span>
                      <span className="text-xs font-semibold text-[#F59E0B]">
                        {language === 'mr' ? station.walkTimeMr : station.walkTime} ({station.distance})
                      </span>
                    </div>
                    <p className="text-[11px] text-[#827367]">
                      {language === 'mr' ? station.exitTipMr : station.exitTip}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'stream' && (
            <div className="space-y-3">
              {mandal.liveStreamAvailable ? (
                <div>
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-white/10 shadow-lg">
                    <iframe
                      src={mandal.streamEmbedUrl || "https://www.youtube-nocookie.com/embed/live_stream?channel=UCkQZz0Y8P6vE"}
                      title={mandal.name}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-[11px] text-[#827367] text-center mt-2">
                    {language === 'mr'
                      ? '२४ तास अधिकृत थेट प्रक्षेपण (लाईव्ह दर्शन)'
                      : '24x7 Official Live Stream directly from the pandal'}
                  </p>
                </div>
              ) : (
                <div className="p-8 text-center surface rounded-xl border border-white/10">
                  <Radio className="w-8 h-8 text-[#827367] mx-auto mb-2" />
                  <p className="text-xs text-[#BDB0A4]">
                    {language === 'mr'
                      ? 'या मंडळाचे अधिकृत थेट प्रक्षेपण उपलब्ध नाही.'
                      : 'Live streaming is not currently enabled for this mandal.'}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
