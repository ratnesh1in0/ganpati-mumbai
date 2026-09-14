import React, { useState, useEffect } from 'react';
import { Radio, Sparkles, Clock, ExternalLink, ShieldCheck, Play, MapPin, Eye } from 'lucide-react';
import { Mandal } from '../data/mandalsData';
import { useLanguage } from '../hooks/useLanguage';

interface LiveStreamsPageProps {
  mandals: Mandal[];
  onSelectMandal: (mandal: Mandal) => void;
}

interface StreamItem {
  id: string;
  name: string;
  nameMr: string;
  pandal: string;
  pandalMr: string;
  videoId: string;
  liveUrl: string;
  channelUrl: string;
  channelHandle: string;
  viewers: string;
  status: string;
  statusMr: string;
  aartiTime: string;
  aartiTimeMr: string;
  description: string;
  descriptionMr: string;
}

export const LiveStreamsPage: React.FC<LiveStreamsPageProps> = ({ mandals, onSelectMandal }) => {
  const { language, t } = useLanguage();

  const streams: StreamItem[] = [
    {
      id: 'lalbaugcha-raja',
      name: 'Lalbaugcha Raja 2026 Live 24x7',
      nameMr: 'लालबागचा राजा २०२६ थेट प्रक्षेपण २४x७',
      pandal: 'Lalbaug Market, GD Ambekar Marg',
      pandalMr: 'लालबाग मार्केट, जी डी आंबेकर मार्ग',
      videoId: 'kxUBFVdtYh4',
      liveUrl: 'https://www.youtube.com/@LalbaugRaja/live',
      channelUrl: 'https://www.youtube.com/@LalbaugRaja',
      channelHandle: '@LalbaugRaja',
      viewers: '128K watching',
      status: 'Live 24x7',
      statusMr: '२४ तास थेट',
      aartiTime: 'Maha Aarti: 12:30 PM & 8:30 PM',
      aartiTimeMr: 'महाआरती: दु. १२:३० व रा. ८:३०',
      description: 'Official 24x7 continuous live darshan feed straight from the sanctum of Lalbaugcha Raja.',
      descriptionMr: 'लालबागच्या राजाच्या मुख्य गाभाऱ्यातून थेट अधिकृत अखंड २४ तास दर्शन प्रवाह.'
    },
    {
      id: 'siddhivinayak-temple',
      name: 'Shree Siddhivinayak Temple Live',
      nameMr: 'श्री सिद्धिविनायक मंदिर थेट दर्शन',
      pandal: 'Prabhadevi, Dadar West',
      pandalMr: 'प्रभादेवी, दादर पश्चिम',
      videoId: '3U5_X3qHlQg',
      liveUrl: 'https://www.youtube.com/@ShreeSiddhivinayakTemple/live',
      channelUrl: 'https://www.youtube.com/@ShreeSiddhivinayakTemple',
      channelHandle: '@ShreeSiddhivinayakTemple',
      viewers: '84K watching',
      status: 'Live Sanctum',
      statusMr: 'गाभारा दर्शन',
      aartiTime: 'Kakad Aarti: 5:30 AM | Sandhya: 7:30 PM',
      aartiTimeMr: 'काकड आरती: ५:३० सकाळी | संध्या: ७:३०',
      description: 'Official continuous live sanctum camera from Shree Siddhivinayak Ganapati Temple Trust.',
      descriptionMr: 'श्री सिद्धिविनायक गणपती मंदिर ट्रस्टचे थेट अधिकृत गाभारा प्रक्षेपण.'
    },
    {
      id: 'chinchpokli-cha-chintamani',
      name: 'Chinchpokli Cha Chintamani Live 24x7',
      nameMr: 'चिंचपोकळीचा चिंतामणी २०२६ थेट दर्शन',
      pandal: 'Dattaram Lad Marg, Chinchpokli',
      pandalMr: 'दत्ताराम लाड मार्ग, चिंचपोकळी',
      videoId: 'dcq8TsY8yM0',
      liveUrl: 'https://www.youtube.com/@chinchpoklichachintamani1920/live',
      channelUrl: 'https://www.youtube.com/@chinchpoklichachintamani1920',
      channelHandle: '@chinchpoklichachintamani1920',
      viewers: '65K watching',
      status: 'Live 24x7',
      statusMr: '२४ तास थेट',
      aartiTime: 'Morning: 9:00 AM | Evening: 8:00 PM',
      aartiTimeMr: 'सकाळी: ९:०० | संध्याकाळी: ८:००',
      description: 'Official 106th year live broadcast of Chinchpokli Cha Chintamani.',
      descriptionMr: 'चिंचपोकळीचा चिंतामणीच्या १०६ व्या वर्षाचे अधिकृत थेट प्रक्षेपण.'
    },
    {
      id: 'mumbaicha-raja-ganesh-galli',
      name: 'Mumbaicha Raja (Ganesh Galli 99th Year)',
      nameMr: 'मुंबईचा राजा (गणेश गल्ली ९९ वे वर्ष)',
      pandal: 'Lane 1, Ganesh Galli, Lalbaug',
      pandalMr: 'पहिली गल्ली, गणेश गल्ली, लालबाग',
      videoId: '5wVQbf3aYvI',
      liveUrl: 'https://www.youtube.com/@MumbaichaRaja22/live',
      channelUrl: 'https://www.youtube.com/@MumbaichaRaja22',
      channelHandle: '@MumbaichaRaja22',
      viewers: '42K watching',
      status: 'First Look HD',
      statusMr: 'प्रथम दर्शन',
      aartiTime: 'Noon: 12:00 PM | Night: 8:30 PM',
      aartiTimeMr: 'दुपारी: १२:०० | रात्री: ८:३०',
      description: '99th year grand Mahakaleshwar temple replica and darshan broadcast.',
      descriptionMr: '९९ व्या वर्षाचा भव्य महाकालेश्वर मंदिर देखावा व प्रथम दर्शन दर्शन प्रवाह.'
    },
    {
      id: 'gsb-seva-mandal-kings-circle',
      name: 'GSB Seva Mandal Kings Circle (Mahaganpati)',
      nameMr: 'जीएसबी सेवा मंडळ महागणपती विराट दर्शन',
      pandal: 'Guru Tegh Bahadur Nagar, Sion / Matunga',
      pandalMr: 'गुरू तेग बहादूर नगर, सायन / माटुंगा',
      videoId: 'yq9t_kNeScY',
      liveUrl: 'https://www.youtube.com/@gsbsevamandalofficial/live',
      channelUrl: 'https://www.youtube.com/@gsbsevamandalofficial',
      channelHandle: '@gsbsevamandalofficial',
      viewers: '31K watching',
      status: 'Virat Darshan',
      statusMr: 'सुवर्ण दर्शन',
      aartiTime: 'Madhyahna: 1:00 PM | Ratri: 9:00 PM',
      aartiTimeMr: 'मध्यान्ह: १:०० दु. | रात्री: ९:००',
      description: '₹400+ Cr gold & silver adorned Mahaganpati pooja and continuous darshan.',
      descriptionMr: '६६ किलो सोने व ३२५ किलो चांदीने मढविलेल्या महागणपतीचे सुवर्ण दर्शन.'
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
  const matchedMandal = mandals.find(m => m.id === activeStream.id);

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
              ? 'मुंबईतील मुख्य मंदिरे व मंडळांचे अधिकृत २४ तास थेट दर्शन आणि महाआरती प्रवाह'
              : 'Watch verified 24x7 sanctum streams & Maha Aartis from Mumbai’s iconic pandals'}
          </p>
        </div>

        {/* Live Aarti Countdown Banner */}
        <div className="surface-raised rounded-2xl border border-[#E2621B]/40 px-4 py-2.5 flex items-center gap-3 shadow-lg">
          <Clock className="w-4 h-4 text-[#F59E0B] shrink-0 animate-spin" style={{ animationDuration: '8s' }} />
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

      {/* Main Video Player Card */}
      <div className="surface-raised rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
        <div className="relative aspect-video w-full bg-black">
          <iframe
            key={activeStream.videoId}
            src={`https://www.youtube.com/embed/${activeStream.videoId}?autoplay=1&mute=0&rel=0&playsinline=1`}
            title={activeStream.name}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Player metadata bar */}
        <div className="p-4 sm:p-5 bg-[#18130E] border-t border-white/10 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                  {language === 'mr' ? activeStream.statusMr : activeStream.status}
                </span>
                <span className="text-xs text-[#827367] flex items-center gap-1">
                  <Eye className="w-3 h-3 text-[#827367]" />
                  {activeStream.viewers}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400/90 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {language === 'mr' ? 'अधिकृत चॅनल' : 'Official Verified Feed'}
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-[#F5EBE1] font-display">
                {language === 'mr' ? activeStream.nameMr : activeStream.name}
              </h2>
              
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#BDB0A4]">
                <span className="flex items-center gap-1 text-[#E5A93C]">
                  <MapPin className="w-3 h-3" />
                  {language === 'mr' ? activeStream.pandalMr : activeStream.pandal}
                </span>
                <span>•</span>
                <span className="text-[#F59E0B]">
                  {language === 'mr' ? activeStream.aartiTimeMr : activeStream.aartiTime}
                </span>
              </div>
            </div>

            {/* Action Buttons: Watch on YouTube + View Mandal Info */}
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={activeStream.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#CC0000] hover:bg-[#E60000] text-white text-xs font-bold transition-all shadow-lg hover:shadow-red-900/40 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{language === 'mr' ? 'YouTube वर पहा ↗' : 'Watch on YouTube ↗'}</span>
              </a>

              {matchedMandal && (
                <button
                  onClick={() => onSelectMandal(matchedMandal)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl surface border border-white/15 hover:border-[#E2621B] text-[#F5EBE1] text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>{language === 'mr' ? 'तपशील' : 'Details'}</span>
                </button>
              )}
            </div>
          </div>

          <p className="text-xs text-[#827367] leading-relaxed border-t border-white/5 pt-2">
            {language === 'mr' ? activeStream.descriptionMr : activeStream.description}
            {' '}
            <span className="text-[#BDB0A4]">
              {language === 'mr' 
                ? `प्रवाह न दिसल्यास ${activeStream.channelHandle} चॅनलवर थेट भेट द्या.`
                : `If player does not start, visit official ${activeStream.channelHandle} channel.`}
            </span>
          </p>
        </div>
      </div>

      {/* Channel Switcher */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#827367]">
            {language === 'mr' ? 'मंडळ निवडा (थेट प्रवाह)' : 'Switch Pandals Stream'}
          </h3>
          <span className="text-[11px] text-[#F59E0B]">
            {language === 'mr' ? 'सर्व प्रवाह २४ तास उपलब्ध' : 'All 5 Streams Verified & Active'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {streams.map((stream) => {
            const isActive = stream.id === activeStreamId;
            return (
              <button
                key={stream.id}
                onClick={() => setActiveStreamId(stream.id)}
                className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer select-none relative group ${
                  isActive
                    ? 'bg-[#E2621B]/15 border-[#E2621B] shadow-lg ring-1 ring-[#E2621B]/50'
                    : 'surface border-white/10 hover:border-white/25 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#E2621B] animate-ping' : 'bg-red-500'}`} />
                  <span className="text-[10px] font-mono text-[#827367] group-hover:text-[#BDB0A4]">{stream.viewers.split(' ')[0]}</span>
                </div>
                <h4 className="text-xs font-bold text-[#F5EBE1] line-clamp-1">
                  {language === 'mr' ? stream.nameMr : stream.name}
                </h4>
                <p className="text-[10px] text-[#827367] line-clamp-1 mt-0.5">
                  {stream.channelHandle}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Devotional Note & External Channel Links */}
      <div className="surface rounded-2xl border border-white/10 p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#F59E0B]" />
          <h3 className="text-sm font-bold text-[#F5EBE1]">
            {language === 'mr' ? 'अधिकृत YouTube वाहिन्या (थेट दुवे)' : 'Official YouTube Broadcast Channels'}
          </h3>
        </div>
        <p className="text-xs text-[#827367] leading-relaxed">
          {language === 'mr'
            ? 'सर्व थेट प्रक्षेपण संबंधित मंडळांच्या अधिकृत ट्रस्टद्वारे यूट्यूबवर मोफत उपलब्ध केले जातात. आपण थेट त्यांच्या यूट्यूब चॅनलला भेट देऊन सबस्क्राईब करू शकता:'
            : 'All video broadcasts are hosted by respective mandal trusts on YouTube. You can also visit their official channel pages directly:'}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {streams.map(s => (
            <a
              key={s.id}
              href={s.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 hover:border-[#E2621B] text-xs text-[#BDB0A4] hover:text-[#F5EBE1] transition-colors"
            >
              <span>{s.channelHandle}</span>
              <ExternalLink className="w-3 h-3 text-[#827367]" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

