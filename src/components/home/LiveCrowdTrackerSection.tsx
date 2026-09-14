import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Radio, ChevronRight, MessageSquare, TrendingUp } from 'lucide-react';
import { Mandal } from '../../data/mandalsData';
import { useLanguage } from '../../hooks/useLanguage';
import { LiveBadge } from '../common/LiveBadge';

interface LiveCrowdTrackerSectionProps {
  mandals: Mandal[];
  onSelectMandal: (mandal: Mandal) => void;
  onOpenReportModal: () => void;
}

export const LiveCrowdTrackerSection: React.FC<LiveCrowdTrackerSectionProps> = ({
  mandals,
  onSelectMandal,
  onOpenReportModal
}) => {
  const { language, t } = useLanguage();

  // Pick top 4 active mandals for the live crowd widget
  const topActive = mandals.slice(0, 5);

  return (
    <section className="surface mx-4 mt-6 rounded-[var(--radius-card)] border border-[var(--line)] p-4 sm:p-5 shadow-xl">
      {/* Heading & Report Action */}
      <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E2621B] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E2621B]" />
          </span>
          <div>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F5EBE1] font-display">
              {t.liveCrowdHeading}
            </h2>
            <p className="text-[11px] text-[#827367]">
              {t.liveCrowdSubheading}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onOpenReportModal}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#E2621B] text-[#14100C] hover:bg-[#F07024] transition-all cursor-pointer shadow-md active:scale-95"
        >
          <Radio className="w-3.5 h-3.5 animate-pulse" />
          <span>{t.reportCrowdBtn}</span>
        </button>
      </div>

      {/* List of real-time queues */}
      <ul className="divide-y divide-white/5 mt-1">
        {topActive.map((mandal) => {
          const isLalbaug = mandal.id === 'lalbaugcha-raja';

          // calculate visual width percentage (max 120 mins as 100%)
          const pct = Math.min(100, Math.max(15, (mandal.crowd.generalWaitMinutes / 120) * 100));

          return (
            <li
              key={mandal.id}
              onClick={() => onSelectMandal(mandal)}
              className="py-3 flex items-center justify-between gap-3 group cursor-pointer hover:bg-white/[0.02] px-1 rounded-lg transition-colors"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-xs sm:text-sm font-bold text-[#F5EBE1] group-hover:text-[#F59E0B] transition-colors truncate">
                    {language === 'mr' ? mandal.nameMr : mandal.name}
                  </h3>
                  <span className="text-[11px] text-[#827367] hidden xs:inline truncate">
                    ({language === 'mr' ? mandal.areaMr : mandal.area})
                  </span>
                </div>

                {/* Progress bar visual for queue length */}
                <div className="mt-1.5 w-full bg-[#14100C] rounded-full h-1.5 overflow-hidden border border-white/5">
                  <div
                    className={`h-full rounded-full ${
                      mandal.crowd.status === 'peak'
                        ? 'bg-red-500'
                        : mandal.crowd.status === 'busy'
                        ? 'bg-[#E2621B]'
                        : mandal.crowd.status === 'moderate'
                        ? 'bg-[#F59E0B]'
                        : 'bg-emerald-500'
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>

                {/* Footnote notes if any */}
                {mandal.crowd.notes && (
                  <p className="text-[11px] text-[#827367] truncate mt-1">
                    {language === 'mr' ? mandal.crowd.notesMr : mandal.crowd.notes}
                  </p>
                )}
              </div>

              {/* Wait Time Metrics */}
              <div className="text-right shrink-0 flex flex-col items-end">
                {isLalbaug ? (
                  <div>
                    <span className="text-xs font-black text-red-300 block">
                      ~{Math.round((mandal.crowd.charanSparshMinutes || 510) / 60)}h चरणस्पर्श
                    </span>
                    <span className="text-[11px] text-[#F59E0B] block">
                      ~{mandal.crowd.mukhDarshanMinutes}m मुखदर्शन
                    </span>
                  </div>
                ) : (
                  <div>
                    <span className="text-xs sm:text-sm font-black text-[#F59E0B]">
                      ~{mandal.crowd.generalWaitMinutes} min
                    </span>
                    <span className="text-[10px] text-[#827367] block">
                      {language === 'mr' ? mandal.crowd.lastUpdatedMr : mandal.crowd.lastUpdated}
                    </span>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>

      {/* Footer link to Map */}
      <div className="pt-3 mt-1 border-t border-white/5 flex items-center justify-between text-xs text-[#827367]">
        <span>
          {language === 'mr' ? '५ मिनिटांपूर्वी अपडेट केले गेले' : 'Verified by community reports'}
        </span>
        <Link
          to="/map"
          className="inline-flex items-center gap-1 text-[#E2621B] hover:text-[#F07024] font-bold"
        >
          <span>{language === 'mr' ? 'थेट नकाशा पहा' : 'View on live map'}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
};
