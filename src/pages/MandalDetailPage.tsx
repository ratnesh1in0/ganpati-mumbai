import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Share2,
  Bookmark,
  CheckCircle,
  Navigation,
  Radio,
  Sparkles,
  ShieldAlert,
  Calendar,
  Utensils,
  Train,
  MapPin,
  Clock,
  Check
} from 'lucide-react';
import { Mandal } from '../data/mandalsData';
import { useLanguage } from '../hooks/useLanguage';
import { LiveBadge } from '../components/common/LiveBadge';
import { GanpatiGlyph } from '../assets/DevotionalIcons';

interface MandalDetailPageProps {
  mandals: Mandal[];
  savedIds: string[];
  visitedIds: string[];
  onToggleSave: (id: string) => void;
  onToggleVisited: (id: string) => void;
  onOpenReportModal: (mandalId: string) => void;
}

export const MandalDetailPage: React.FC<MandalDetailPageProps> = ({
  mandals,
  savedIds,
  visitedIds,
  onToggleSave,
  onToggleVisited,
  onOpenReportModal
}) => {
  const { mandalId } = useParams<{ mandalId: string }>();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'aarti' | 'transit' | 'stream'>('overview');

  const mandal = mandals.find(m => m.id === mandalId);

  if (!mandal) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center space-y-4">
        <h2 className="text-xl font-bold text-[#F5EBE1]">
          {language === 'mr' ? 'मंडळ सापडले नाही' : 'Mandal Not Found'}
        </h2>
        <Link
          to="/explore"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#E2621B] text-[#14100C] text-xs font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'mr' ? 'सर्व मंडळे पहा' : 'View All Mandals'}</span>
        </Link>
      </div>
    );
  }

  const isSaved = savedIds.includes(mandal.id);
  const isVisited = visitedIds.includes(mandal.id);
  const hasTwoQueues = mandal.id === 'lalbaugcha-raja';

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 pt-4 pb-nav md:pb-12 animate-fadeIn space-y-6">
      {/* Top bar with back and share */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#1D1712] border border-white/10 text-xs font-bold text-[#BDB0A4] hover:text-[#F5EBE1] hover:border-white/20 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'mr' ? 'मागे जा' : 'Back'}</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1D1712] border border-white/10 text-xs font-semibold text-[#BDB0A4] hover:text-[#F5EBE1] hover:border-white/20 transition-all cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 text-[#E2621B]" />}
            <span>{copied ? (language === 'mr' ? 'लिंक कॉपी झाली!' : 'Link Copied!') : (language === 'mr' ? 'शेअर करा' : 'Share')}</span>
          </button>
        </div>
      </div>

      {/* Hero Visual Card */}
      <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${mandal.gradientTheme} p-6 sm:p-8 flex flex-col justify-between min-h-[260px] sm:min-h-[300px] shadow-2xl border border-white/15`}>
        {/* Decorative Watermark */}
        <div className="absolute -right-8 -bottom-8 text-white/10 pointer-events-none">
          <GanpatiGlyph size={240} />
        </div>

        <div className="relative z-10 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-black/60 backdrop-blur-md text-[#F59E0B] border border-white/15 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#E2621B]" />
            {language === 'mr' ? mandal.badgeMr : mandal.badge}
          </span>

          <span className="text-xs text-white/80 font-bold bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            {language === 'mr' ? `स्थापना ${mandal.foundedYear}` : `Est. ${mandal.foundedYear}`}
          </span>
        </div>

        <div className="relative z-10 space-y-1">
          <span className="text-xs uppercase tracking-wider text-white/75 font-bold">
            {language === 'mr' ? mandal.zoneNameMr : mandal.zoneName} · {language === 'mr' ? mandal.areaMr : mandal.area}
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight font-display drop-shadow-md">
            {language === 'mr' ? mandal.nameMr : mandal.name}
          </h1>
          <p className="text-xs sm:text-base text-white/90 font-medium">
            {language === 'mr' ? mandal.popularTitleMr : mandal.popularTitle}
          </p>
        </div>
      </div>

      {/* Action Toolbar */}
      <div className="surface-raised rounded-2xl border border-white/10 p-3 flex flex-wrap items-center justify-between gap-2 shadow-lg">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onToggleSave(mandal.id)}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
              isSaved
                ? 'bg-[#E2621B]/20 border-[#E2621B] text-[#F59E0B]'
                : 'bg-[#1D1712] border-white/10 text-[#BDB0A4] hover:text-white'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-[#E2621B]' : ''}`} />
            <span>{isSaved ? t.savedMandal : t.saveMandal}</span>
          </button>

          <button
            onClick={() => onToggleVisited(mandal.id)}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
              isVisited
                ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                : 'bg-[#1D1712] border-white/10 text-[#BDB0A4] hover:text-white'
            }`}
          >
            <CheckCircle className={`w-3.5 h-3.5 ${isVisited ? 'fill-emerald-500 text-[#14100C]' : ''}`} />
            <span>{isVisited ? t.visited : t.markVisited}</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenReportModal(mandal.id)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black bg-[#E2621B] text-[#14100C] hover:bg-[#F07024] cursor-pointer shadow-md glow-shendur"
          >
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>{t.reportCrowdBtn}</span>
          </button>

          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${mandal.coordinates.lat},${mandal.coordinates.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#1D1712] border border-white/10 text-xs font-bold text-[#F5EBE1] hover:border-[#E2621B]/50"
          >
            <Navigation className="w-3.5 h-3.5 text-[#E2621B]" />
            <span>{t.directions}</span>
          </a>
        </div>
      </div>

      {/* Live Crowd Section */}
      <div className="surface-raised rounded-2xl border border-white/10 p-5 space-y-3 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E2621B] animate-ping" />
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F59E0B]">
              {t.liveCrowdHeading}
            </h2>
          </div>
          <span className="text-xs text-[#827367]">
            {language === 'mr' ? mandal.crowd.lastUpdatedMr : mandal.crowd.lastUpdated} ({mandal.crowd.reportedCount} {t.verifiedReports})
          </span>
        </div>

        {hasTwoQueues ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-4 rounded-xl bg-[#14100C] border border-white/10 space-y-1">
              <span className="text-xs font-semibold text-[#BDB0A4]">{t.mukhDarshan}</span>
              <span className="text-xl font-black text-[#F5EBE1] block font-mono">
                ~{mandal.crowd.mukhDarshanMinutes} {t.minutes}
              </span>
              <span className="text-xs text-emerald-400 font-medium">Brisk gallery flow</span>
            </div>

            <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 space-y-1">
              <span className="text-xs font-semibold text-red-300">{t.charanSparsh}</span>
              <span className="text-xl font-black text-red-200 block font-mono">
                ~{Math.round((mandal.crowd.charanSparshMinutes || 510) / 60)} {t.hours}
              </span>
              <span className="text-xs text-red-400 font-medium">Navsachi Line (Feet Touch)</span>
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-[#14100C] border border-white/10 flex items-center justify-between">
            <div>
              <span className="text-xs text-[#BDB0A4] block">{t.generalQueue}</span>
              <span className="text-xl font-black text-[#F59E0B] font-mono">
                ~{mandal.crowd.generalWaitMinutes} {t.minutes}
              </span>
            </div>
            <LiveBadge status={mandal.crowd.status} />
          </div>
        )}

        {mandal.crowd.notes && (
          <p className="text-xs text-[#BDB0A4] bg-white/[0.02] p-3 rounded-xl border border-white/5 italic">
            "{language === 'mr' ? mandal.crowd.notesMr : mandal.crowd.notes}"
          </p>
        )}
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/10 gap-5 text-xs font-bold overflow-x-auto no-scrollbar">
        {[
          { key: 'overview', label: language === 'mr' ? 'माहिती व इतिहास' : 'Overview & History' },
          { key: 'aarti', label: language === 'mr' ? 'दैनंदिन आरती वेळा' : 'Aarti Schedule' },
          { key: 'transit', label: language === 'mr' ? 'रेल्वे स्थानके व रस्ता' : 'Transit & Stations' },
          { key: 'stream', label: language === 'mr' ? '२४ तास थेट दर्शन' : 'Live Stream' }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as any)}
            className={`py-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === tab.key
                ? 'border-[#E2621B] text-[#F59E0B]'
                : 'border-transparent text-[#827367] hover:text-[#F5EBE1]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <div className="surface-raised rounded-2xl border border-white/10 p-6 space-y-6 shadow-xl">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Dress code advisory if present */}
            {mandal.dressCodeRule && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-950/40 border border-amber-500/40 text-amber-200 text-xs">
                <ShieldAlert className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
                <div className="space-y-0.5">
                  <strong className="block font-bold">{t.dressCodeNotice}</strong>
                  <span>{language === 'mr' ? mandal.dressCodeRuleMr : mandal.dressCodeRule}</span>
                </div>
              </div>
            )}

            {/* History */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                {t.historySection}
              </h3>
              <p className="text-sm text-[#F5EBE1] leading-relaxed">
                {language === 'mr' ? mandal.historyMr : mandal.history}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                {t.highlightsSection}
              </h3>
              <ul className="space-y-2">
                {(language === 'mr' ? mandal.highlightsMr : mandal.highlights).map((h, i) => (
                  <li key={i} className="text-xs sm:text-sm text-[#BDB0A4] flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#E2621B] mt-1.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Theme Dekhava */}
            {mandal.themeDekhava && (
              <div className="p-4 rounded-xl bg-[#14100C] border border-white/10 space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#F59E0B] font-bold block">
                  {language === 'mr' ? 'या वर्षीचा देखावा' : 'Theme / Set Design'}
                </span>
                <p className="text-xs sm:text-sm text-[#F5EBE1]">
                  {language === 'mr' ? mandal.themeDekhavaMr : mandal.themeDekhava}
                </p>
              </div>
            )}

            {/* Prasad */}
            <div className="p-4 rounded-xl bg-[#14100C] border border-white/10 flex items-start gap-3">
              <Utensils className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs font-bold text-[#F5EBE1] block">{t.prasadTitle}</strong>
                <p className="text-xs text-[#BDB0A4] mt-0.5">
                  {language === 'mr' ? mandal.prasadInfoMr : mandal.prasadInfo}
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'aarti' && (
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
              {t.aartiSchedule}
            </h3>

            <div className="divide-y divide-white/5 border border-white/10 rounded-2xl overflow-hidden bg-[#14100C]">
              {mandal.aartis.map((aarti, idx) => (
                <div
                  key={idx}
                  className={`p-4 flex items-center justify-between ${
                    aarti.isNext ? 'bg-[#E2621B]/15 border-l-4 border-l-[#E2621B]' : ''
                  }`}
                >
                  <div>
                    <span className="text-sm font-bold text-[#F5EBE1] block">
                      {language === 'mr' ? aarti.nameMr : aarti.name}
                    </span>
                    {aarti.isNext && (
                      <span className="text-[11px] font-semibold text-[#F59E0B] inline-flex items-center gap-1.5 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-ping" />
                        {t.nextAarti}
                      </span>
                    )}
                  </div>
                  <span className="font-mono font-black text-[#F59E0B] text-base">
                    {aarti.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'transit' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs text-[#BDB0A4]">
              <MapPin className="w-4 h-4 text-[#E2621B]" />
              <span>{language === 'mr' ? mandal.addressMr : mandal.address}</span>
            </div>

            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F59E0B] pt-2">
              {t.nearestStation}
            </h3>

            <div className="space-y-3">
              {mandal.nearestStations.map((station, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#14100C] border border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#F5EBE1] flex items-center gap-2">
                      <Train className="w-4 h-4 text-[#E2621B]" />
                      {language === 'mr' ? station.nameMr : station.name}
                    </span>
                    <span className="text-xs font-bold text-[#F59E0B]">
                      {language === 'mr' ? station.walkTimeMr : station.walkTime} ({station.distance})
                    </span>
                  </div>
                  <p className="text-xs text-[#827367]">
                    👉 {language === 'mr' ? station.exitTipMr : station.exitTip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'stream' && (
          <div className="space-y-4">
            {mandal.liveStreamAvailable ? (
              <div className="space-y-2">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl">
                  <iframe
                    src={mandal.streamEmbedUrl || "https://www.youtube.com/embed/kxUBFVdtYh4?autoplay=1&rel=0"}
                    title={mandal.name}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 text-xs text-[#827367]">
                  <p>
                    {language === 'mr'
                      ? '२४ तास अधिकृत थेट प्रक्षेपण (लाईव्ह दर्शन)'
                      : '24x7 Official Live Stream directly from the pandal'}
                  </p>
                  <a
                    href="https://www.youtube.com/@LalbaugRaja/live"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#E2621B] hover:text-[#F59E0B] font-bold"
                  >
                    <span>{language === 'mr' ? 'YouTube वर उघडा ↗' : 'Open in YouTube ↗'}</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center surface rounded-2xl border border-white/10 space-y-2">
                <Radio className="w-8 h-8 text-[#827367] mx-auto" />
                <p className="text-xs text-[#BDB0A4]">
                  {language === 'mr'
                    ? 'या मंडळाचे अधिकृत थेट प्रक्षेपण सध्या उपलब्ध नाही.'
                    : 'Live streaming is not currently enabled for this mandal.'}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
