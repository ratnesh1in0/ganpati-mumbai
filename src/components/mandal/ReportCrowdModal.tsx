import React, { useState, useEffect } from 'react';
import { X, Clock, Users, CheckCircle2, MessageSquare } from 'lucide-react';
import { Mandal } from '../../data/mandalsData';
import { DevoteeReportSubmission } from '../../hooks/useLiveCrowd';
import { useLanguage } from '../../hooks/useLanguage';
import confetti from 'canvas-confetti';

interface ReportCrowdModalProps {
  isOpen: boolean;
  onClose: () => void;
  mandals: Mandal[];
  initialMandalId?: string;
  onSubmitReport: (submission: DevoteeReportSubmission) => void;
}

export const ReportCrowdModal: React.FC<ReportCrowdModalProps> = ({
  isOpen,
  onClose,
  mandals,
  initialMandalId,
  onSubmitReport
}) => {
  const { language, t } = useLanguage();
  const [selectedMandalId, setSelectedMandalId] = useState<string>(
    initialMandalId || mandals[0]?.id || ''
  );
  const [lineType, setLineType] = useState<'general' | 'charan-sparsh' | 'mukh-darshan'>('general');
  const [waitMinutes, setWaitMinutes] = useState<number>(30);
  const [crowdLevel, setCrowdLevel] = useState<'low' | 'moderate' | 'busy' | 'peak'>('moderate');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialMandalId) {
      setSelectedMandalId(initialMandalId);
      if (initialMandalId === 'lalbaugcha-raja') {
        setLineType('mukh-darshan');
      }
    }
  }, [initialMandalId]);

  if (!isOpen) return null;

  const currentMandal = mandals.find(m => m.id === selectedMandalId);
  const hasTwoLines = selectedMandalId === 'lalbaugcha-raja';

  const quickMinutes = [15, 30, 45, 60, 90, 120, 240, 480];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitReport({
      mandalId: selectedMandalId,
      lineType: hasTwoLines ? lineType : 'general',
      waitMinutes,
      crowdLevel,
      notes: notes.trim()
    });

    setSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#E2621B', '#F59E0B', '#E5A93C']
    });

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1600);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg surface-raised rounded-2xl border border-white/15 overflow-hidden shadow-2xl z-10 animate-slideUp">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#1D1712]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E2621B] animate-pulse" />
            <h2 className="text-base font-bold text-[#F5EBE1]">
              {t.reportModalTitle}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#827367] hover:text-[#F5EBE1] hover:bg-white/10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-lg font-bold text-[#F5EBE1]">
              {language === 'mr' ? 'माहिती यशस्वीपणे नोंदवली!' : 'Report Submitted Successfully!'}
            </h3>
            <p className="text-sm text-[#BDB0A4]">
              {language === 'mr'
                ? 'तुमच्या अहवालामुळे इतर हजारो भाविकांना वेळेचा अंदाज घेण्यास मदत होईल. धन्यवाद!'
                : 'Thank you! Your live update is now helping thousands of devotees plan their darshan.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 space-y-4 max-h-[75vh] overflow-y-auto">
            {/* Mandal Selection */}
            <div>
              <label className="block text-xs font-semibold text-[#BDB0A4] mb-1.5">
                {language === 'mr' ? 'मंडळ निवडा' : 'Select Mandal'}
              </label>
              <select
                value={selectedMandalId}
                onChange={(e) => {
                  setSelectedMandalId(e.target.value);
                  if (e.target.value === 'lalbaugcha-raja') {
                    setLineType('mukh-darshan');
                  } else {
                    setLineType('general');
                  }
                }}
                className="w-full bg-[#14100C] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-[#F5EBE1] focus:border-[#E2621B] outline-none"
              >
                {mandals.map((m) => (
                  <option key={m.id} value={m.id} className="bg-[#1D1712]">
                    {language === 'mr' ? `${m.nameMr} (${m.areaMr})` : `${m.name} (${m.area})`}
                  </option>
                ))}
              </select>
            </div>

            {/* Line Type Selection (Especially for Lalbaug) */}
            {hasTwoLines && (
              <div>
                <label className="block text-xs font-semibold text-[#BDB0A4] mb-1.5">
                  {language === 'mr' ? 'रांगेचा प्रकार' : 'Queue Type'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setLineType('mukh-darshan');
                      setWaitMinutes(90);
                      setCrowdLevel('busy');
                    }}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                      lineType === 'mukh-darshan'
                        ? 'bg-[#E2621B]/20 border-[#E2621B] text-[#F59E0B]'
                        : 'bg-[#14100C] border-white/10 text-[#827367]'
                    }`}
                  >
                    {language === 'mr' ? 'मुखदर्शन रांग' : 'Mukh Darshan (General)'}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setLineType('charan-sparsh');
                      setWaitMinutes(480);
                      setCrowdLevel('peak');
                    }}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                      lineType === 'charan-sparsh'
                        ? 'bg-red-500/20 border-red-500 text-red-300'
                        : 'bg-[#14100C] border-white/10 text-[#827367]'
                    }`}
                  >
                    {language === 'mr' ? 'चरणस्पर्श (नवसाची)' : 'Charan Sparsh (Feet Touch)'}
                  </button>
                </div>
              </div>
            )}

            {/* Crowd Level Buttons */}
            <div>
              <label className="block text-xs font-semibold text-[#BDB0A4] mb-1.5">
                <Users className="w-3.5 h-3.5 inline mr-1 text-[#E2621B]" />
                {language === 'mr' ? 'गर्दीची तीव्रता' : 'Crowd Intensity'}
              </label>
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  { key: 'low', label: language === 'mr' ? 'कमी' : 'Low', color: 'hover:border-emerald-500 active:bg-emerald-500/20' },
                  { key: 'moderate', label: language === 'mr' ? 'मध्यम' : 'Moderate', color: 'hover:border-amber-500 active:bg-amber-500/20' },
                  { key: 'busy', label: language === 'mr' ? 'गर्दी' : 'Busy', color: 'hover:border-orange-500 active:bg-orange-500/20' },
                  { key: 'peak', label: language === 'mr' ? 'प्रचंड' : 'Peak', color: 'hover:border-red-500 active:bg-red-500/20' }
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setCrowdLevel(item.key as any)}
                    className={`py-2 px-1 text-center rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                      crowdLevel === item.key
                        ? 'bg-[#E2621B] border-[#E2621B] text-[#14100C]'
                        : 'bg-[#14100C] border-white/10 text-[#827367] ' + item.color
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Wait time slider & quick chips */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-[#BDB0A4] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#E2621B]" />
                  {language === 'mr' ? 'अंदाजे प्रतीक्षा वेळ' : 'Estimated Wait Time'}
                </label>
                <span className="text-sm font-bold text-[#F59E0B]">
                  {waitMinutes >= 60
                    ? `${Math.floor(waitMinutes / 60)} hr ${waitMinutes % 60 > 0 ? (waitMinutes % 60) + ' min' : ''}`
                    : `${waitMinutes} min`}
                </span>
              </div>

              {/* Slider */}
              <input
                type="range"
                min="10"
                max={hasTwoLines && lineType === 'charan-sparsh' ? 720 : 180}
                step="5"
                value={waitMinutes}
                onChange={(e) => setWaitMinutes(Number(e.target.value))}
                className="w-full accent-[#E2621B] cursor-pointer h-2 bg-[#14100C] rounded-lg"
              />

              {/* Quick chips */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {quickMinutes
                  .filter(m => (hasTwoLines && lineType === 'charan-sparsh' ? m >= 60 : m <= 180))
                  .map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setWaitMinutes(m)}
                      className={`text-[11px] px-2.5 py-1 rounded-full border cursor-pointer ${
                        waitMinutes === m
                          ? 'bg-[#E2621B]/20 border-[#E2621B] text-[#F59E0B]'
                          : 'bg-[#14100C] border-white/10 text-[#827367] hover:border-white/20'
                      }`}
                    >
                      {m >= 60 ? `${m / 60}h` : `${m}m`}
                    </button>
                  ))}
              </div>
            </div>

            {/* Notes / Ground situation */}
            <div>
              <label className="block text-xs font-semibold text-[#BDB0A4] mb-1.5">
                <MessageSquare className="w-3.5 h-3.5 inline mr-1 text-[#E2621B]" />
                {language === 'mr' ? 'स्थानिक टीप (पर्यायी)' : 'Devotee Note (Optional)'}
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={
                  language === 'mr'
                    ? 'उदा. पोलीस बॅरिकेड्स सुरळीत आहेत, रांगेत पाणी वाटप चालू आहे...'
                    : 'e.g., Police barricades moving steadily, drinking water available...'
                }
                rows={2}
                maxLength={180}
                className="w-full bg-[#14100C] border border-white/15 rounded-xl p-3 text-xs text-[#F5EBE1] placeholder-[#827367] outline-none focus:border-[#E2621B]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-[#E2621B] hover:bg-[#F07024] text-[#14100C] transition-all shadow-lg glow-shendur cursor-pointer active:scale-98"
            >
              {language === 'mr' ? 'थेट माहिती नोंदवा' : 'Publish Live Report'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
