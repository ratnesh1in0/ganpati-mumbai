import React, { useState, useEffect } from 'react';
import { Radio, Calendar, Sparkles, Volume2, Clock } from 'lucide-react';
import { Mandal } from '../data/mandalsData';
import { useLanguage } from '../hooks/useLanguage';

interface LiveStreamsPageProps {
  mandals: Mandal[];
  onSelectMandal: (mandal: Mandal) => void;
}

export const LiveStreamsPage: React.FC<LiveStreamsPageProps> = ({ mandals, onSelectMandal }) => {
  const { language, t } = useLanguage();

  const streams = [
    {
      id: 'lalbaugcha-raja',
      name: 'Lalbaugcha Raja Live',
      nameMr: 'लालबागचा राजा थेट दर्शन',
      videoUrl: 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCkQZz0Y8P6vE',
      viewers: '128K watching',
      status: 'Live 24x7'
    },
    {
      id: 'siddhivinayak-temple',
      name: 'Shree Siddhivinayak Temple (Prabhadevi)',
      nameMr: 'श्री सिद्धिविनायक मंदिर (प्रभादेवी)',
      videoUrl: 'https://www.youtube-nocookie.com/embed/live_stream?channel=siddhivinayakonline',
      viewers: '84K watching',
      status: 'Live Sanctum'
    },
    {
      id: 'mumbaicha-raja-ganesh-galli',
      name: 'Mumbaicha Raja (Ganesh Galli)',
      nameMr: 'मुंबईचा राजा (गणेश गल्ली)',
      videoUrl: 'https://www.youtube-nocookie.com/embed/live_stream?channel=mumbaicharaja',
      viewers: '42K watching',
      status: 'Live Darshan'
    },
    {
      id: 'chinchpokli-cha-chintamani',
      name: 'Chinchpokli Cha Chintamani',
      nameMr: 'चिंचपोकळीचा चिंतामणी',
      videoUrl: 'https://www.youtube-nocookie.com/embed/live_stream?channel=chinchpoklichachintamani',
      viewers: '65K watching',
      status: 'Live Darshan'
    },
    {
      id: 'gsb-seva-mandal-kings-circle',
      name: 'GSB Seva Mandal Mahaganpati',
      nameMr: 'जीएसबी सेवा मंडळ महागणपती',
      videoUrl: 'https://www.youtube-nocookie.com/embed/live_stream?channel=gsbsevamandal',
      viewers: '31K watching',
      status: 'Live Pooja'
    }
  ];

  const [activeStreamId, setActiveStreamId] = useState<string>(streams[0].id);

  // Live Aarti Countdown Simulator
  const [countdown, setCountdown] = useState({ hours: 2, minutes: 14, seconds: 35 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 3, minutes: 30, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const activeStream = streams.find(s => s.id === activeStreamId) || streams[0];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-6 pb-nav md:pb-12 animate-fadeIn space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#F5EBE1] font-display flex items-center gap-2.5">
            <Radio className="w-6 h-6 text-[#E2621B] animate-pulse" />
            <span>{language === 'mr' ? '२४ तास थेट दर्शन' : '24x7 Live Darshan Hub'}</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#BDB0A4] mt-1">
            {language === 'mr'
              ? 'मुंबईतील मुख्य मंदिरांचे व मंडळांचे अधिकृत २४ तास लाईव्ह प्रवाह'
              : 'Watch live aartis and sanctum streams from Mumbai’s top pandals wherever you are'}
          </p>
        </div>

        {/* Live Aarti Countdown Banner */}
        <div className="surface-raised rounded-2xl border border-[#E2621B]/40 px-4 py-2.5 flex items-center gap-3">
          <Clock className="w-4 h-4 text-[#F59E0B] shrink-0" />
          <div className="text-left">
            <span className="text-[10px] uppercase tracking-wider text-[#827367] block font-bold">
              {language === 'mr' ? 'पुढील संध्या महाआरती' : 'Next Sandhya Maha Aarti'}
            </span>
            <span className="font-mono font-bold text-sm text-[#F5EBE1]">
              {String(countdown.hours).padStart(2, '0')}h : {String(countdown.minutes).padStart(2, '0')}m : {String(countdown.seconds).padStart(2, '0')}s
            </span>
          </div>
        </div>
      </div>

      {/* Main Video Player */}
      <div className="surface-raised rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={activeStream.videoUrl}
            title={activeStream.name}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Player metadata bar */}
        <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#18130E] border-t border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                {activeStream.status}
              </span>
              <span className="text-xs text-[#827367]">· {activeStream.viewers}</span>
            </div>
            <h2 className="text-base font-bold text-[#F5EBE1] font-display mt-0.5">
              {language === 'mr' ? activeStream.nameMr : activeStream.name}
            </h2>
          </div>

          <div className="text-xs text-[#827367]">
            {language === 'mr' ? 'थेट अधिकृत प्रसारण' : 'Official Verified Feed'}
          </div>
        </div>
      </div>

      {/* Channel Switcher */}
      <div className="space-y-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#827367]">
          {language === 'mr' ? 'मंडळ निवडा (थेट प्रवाह)' : 'Switch Pandals Stream'}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {streams.map((stream) => {
            const isActive = stream.id === activeStreamId;
            return (
              <button
                key={stream.id}
                onClick={() => setActiveStreamId(stream.id)}
                className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer select-none ${
                  isActive
                    ? 'bg-[#E2621B]/15 border-[#E2621B] shadow-lg'
                    : 'surface border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#E2621B] animate-ping' : 'bg-[#827367]'}`} />
                  <span className="text-[10px] text-[#827367]">{stream.viewers.split(' ')[0]}</span>
                </div>
                <h4 className="text-xs font-bold text-[#F5EBE1] line-clamp-1">
                  {language === 'mr' ? stream.nameMr : stream.name}
                </h4>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
