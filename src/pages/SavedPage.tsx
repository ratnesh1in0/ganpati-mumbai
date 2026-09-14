import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, CheckCircle, Route, Compass, Sparkles, Trash2 } from 'lucide-react';
import { Mandal } from '../data/mandalsData';
import { useLanguage } from '../hooks/useLanguage';
import { MandalCard } from '../components/mandal/MandalCard';

interface SavedPageProps {
  mandals: Mandal[];
  savedIds: string[];
  visitedIds: string[];
  onSelectMandal: (mandal: Mandal) => void;
  onToggleSave: (id: string) => void;
  onToggleVisited: (id: string) => void;
}

export const SavedPage: React.FC<SavedPageProps> = ({
  mandals,
  savedIds,
  visitedIds,
  onSelectMandal,
  onToggleSave,
  onToggleVisited
}) => {
  const { language, t } = useLanguage();

  const savedMandals = mandals.filter(m => savedIds.includes(m.id));
  const visitedCount = savedMandals.filter(m => visitedIds.includes(m.id)).length;
  const progressPct = savedMandals.length > 0 ? Math.round((visitedCount / savedMandals.length) * 100) : 0;

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-6 pb-nav md:pb-12 animate-fadeIn space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#F5EBE1] font-display flex items-center gap-2.5">
          <Bookmark className="w-6 h-6 text-[#E2621B] fill-[#E2621B]" />
          <span>{language === 'mr' ? 'माझी दर्शन यादी' : 'My Saved Mandals'}</span>
        </h1>
        <p className="text-xs sm:text-sm text-[#BDB0A4] mt-1">
          {language === 'mr'
            ? 'तुम्ही साठवलेली मंडळे आणि दर्शनाची प्रगती'
            : 'Track your personal Ganeshotsav bucket list and mark visited mandals'}
        </p>
      </div>

      {savedMandals.length > 0 ? (
        <div className="space-y-6">
          {/* Progress Tracker Card */}
          <div className="surface-raised rounded-2xl border border-white/10 p-5 sm:p-6 space-y-3 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                  {language === 'mr' ? 'दर्शन प्रगती' : 'Darshan Completion'}
                </span>
                <h3 className="text-lg font-black text-[#F5EBE1]">
                  {visitedCount} of {savedMandals.length} {language === 'mr' ? 'मंडळांचे दर्शन झाले' : 'mandals visited'}
                </h3>
              </div>
              <span className="text-2xl font-black text-[#E2621B] font-mono">
                {progressPct}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-[#14100C] rounded-full h-3 overflow-hidden border border-white/10 p-0.5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#E2621B] to-[#F59E0B] transition-all duration-500 shadow-[0_0_12px_#E2621B]"
                style={{ width: `${progressPct}%` }}
              />
            </div>

            <div className="flex items-center justify-between pt-2 text-xs">
              <span className="text-[#827367]">
                {visitedCount === savedMandals.length
                  ? (language === 'mr' ? 'अभिनंदन! सर्व मंडळांचे दर्शन पूर्ण झाले! 🎉' : 'All saved mandals visited! Blessed Ganeshotsav! 🎉')
                  : (language === 'mr' ? 'मंडळावर क्लिक करून "दर्शन झाले" मार्क करा.' : 'Tap on mandal cards to mark as visited.')}
              </span>
              <Link
                to="/routes"
                className="inline-flex items-center gap-1.5 font-bold text-[#E2621B] hover:text-[#F07024]"
              >
                <Route className="w-3.5 h-3.5" />
                <span>{language === 'mr' ? 'यांचा मार्ग बनवा' : 'Route these mandals'}</span>
              </Link>
            </div>
          </div>

          {/* Grid of Saved Mandals with Visited Checklist Toggle */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedMandals.map((mandal) => {
              const isDone = visitedIds.includes(mandal.id);
              return (
                <div key={mandal.id} className="relative group">
                  <MandalCard
                    mandal={mandal}
                    isSaved={true}
                    onSelect={onSelectMandal}
                    onToggleSave={() => onToggleSave(mandal.id)}
                    layout="grid"
                  />

                  {/* Visited Checkbox Overlay Button */}
                  <div className="absolute top-3 right-12 z-20">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleVisited(mandal.id);
                      }}
                      className={`px-2.5 py-1 rounded-full text-xs font-bold border backdrop-blur-md transition-all cursor-pointer flex items-center gap-1 shadow-md ${
                        isDone
                          ? 'bg-emerald-500/90 text-[#14100C] border-emerald-400 font-black'
                          : 'bg-black/60 text-[#BDB0A4] border-white/20 hover:text-white hover:border-emerald-500'
                      }`}
                    >
                      <CheckCircle className={`w-3.5 h-3.5 ${isDone ? 'fill-[#14100C]' : ''}`} />
                      <span>{isDone ? (language === 'mr' ? 'पूर्ण ✓' : 'Visited ✓') : (language === 'mr' ? 'दर्शन झाले?' : 'Mark Visited')}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="surface rounded-2xl p-12 text-center border border-white/10 space-y-4 max-w-md mx-auto my-12">
          <div className="w-16 h-16 rounded-full bg-[#E2621B]/15 text-[#E2621B] mx-auto grid place-items-center">
            <Bookmark className="w-8 h-8" />
          </div>
          <h2 className="text-lg font-bold text-[#F5EBE1]">
            {language === 'mr' ? 'यादीत कोणतेही मंडळ साठवलेले नाही' : 'No Mandals Saved Yet'}
          </h2>
          <p className="text-xs text-[#827367] leading-relaxed">
            {language === 'mr'
              ? 'मंडळे एक्सप्लोर करताना बुकमार्क बटनावर क्लिक करा आणि तुमची स्वतःची दर्शन यादी तयार करा.'
              : 'Browse mandals and tap the bookmark icon to create your personalized Ganeshotsav pilgrimage list.'}
          </p>
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs bg-[#E2621B] text-[#14100C] hover:bg-[#F07024] cursor-pointer shadow-md"
          >
            <Compass className="w-4 h-4" />
            <span>{language === 'mr' ? 'मंडळे शोधा' : 'Explore Mandals'}</span>
          </Link>
        </div>
      )}
    </div>
  );
};
