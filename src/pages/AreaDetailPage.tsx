import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Train, Compass, Clock } from 'lucide-react';
import { Mandal } from '../data/mandalsData';
import { useLanguage } from '../hooks/useLanguage';
import { MandalCard } from '../components/mandal/MandalCard';

interface AreaDetailPageProps {
  mandals: Mandal[];
  savedIds: string[];
  onSelectMandal: (mandal: Mandal) => void;
  onToggleSave: (id: string) => void;
}

const AREA_META: Record<string, { title: string; titleMr: string; desc: string; descMr: string; transitTip: string; transitTipMr: string }> = {
  'lalbaug-parel': {
    title: 'Lalbaug & Parel',
    titleMr: 'लालबाग आणि परळ',
    desc: 'The epicentre of Mumbai’s Ganeshotsav. Home to Lalbaugcha Raja, Ganesh Galli, and Chinchpokli Cha Chintamani within a 2.5 km walkable cluster.',
    descMr: 'मुंबई गणेशोत्सवाचे हृदय. लालबागचा राजा, गणेश गल्ली, आणि चिंचपोकळीचा चिंतामणी यांचे पदभ्रमण केंद्र.',
    transitTip: 'Alight at Currey Road (Central) or Chinchpokli (Central). Use foot-overbridge East exits.',
    transitTipMr: 'करी रोड किंवा चिंचपोकळी स्थानकावर उतरा. पूर्वेकडील पादचारी पूल वापरा.'
  },
  'south-mumbai': {
    title: 'South Mumbai (Girgaon & Fort)',
    titleMr: 'दक्षिण मुंबई (गिरगाव व फोर्ट)',
    desc: 'The historic cradle of the festival since 1893. Features Mumbai’s first mandal at Keshavji Naik Chawl, Girgaon’s 25ft eco clay idol, Khetwadi lanes, and Fortcha Raja.',
    descMr: '१८९३ पासूनचा ऐतिहासिक वारसा. केशवजी नाईक चाळ, गिरगावचा राजा आणि खेतवाडीच्या गल्ल्या.',
    transitTip: 'Alight at Charni Road (Western) for Girgaon or CSMT (Central) for Fort.',
    transitTipMr: 'गिरगावसाठी चर्नी रोड किंवा फोर्टसाठी सीएसएमटी स्थानक वापरा.'
  },
  'central-mumbai': {
    title: 'Central Mumbai (Sion, Matunga & Wadala)',
    titleMr: 'मध्य मुंबई (शीव, माटुंगा व वडाळा)',
    desc: 'Known for rich traditional Vedic rituals and the world-renowned GSB Seva Mandal adorned with 66kg pure gold and continuous banana-leaf Annadaan feasts.',
    descMr: '६६ किलो सुवर्णाने मढवलेला जीएसबी महागणपती आणि अखंड महाप्रसाद अन्नदान.',
    transitTip: 'Kings Circle (Harbour) or Sion (Central) station.',
    transitTipMr: 'किंग्ज सर्कल (हार्बर) किंवा शीव (मध्य रेल्वे) स्थानक.'
  },
  'suburbs-west': {
    title: 'Western Suburbs (Andheri, Vile Parle & Khar)',
    titleMr: 'पश्चिम उपनगरे (अंधेरी, विलेपार्ले व खार)',
    desc: 'Celebrity and suburban powerhouse hosting the famous 16-day festival at Andhericha Raja, cultural hub in Vile Parle, and coastal Koli traditions in Khar Danda.',
    descMr: 'अंधेरीच्या राजाचा १६ दिवसांचा उत्सव, विलेपार्लेचा सांस्कृतिक वारसा आणि खार दांडा कोळी संस्कृती.',
    transitTip: 'Mumbai Metro Line 1 (Azad Nagar Station) or Western Railway (Andheri/Vile Parle).',
    transitTipMr: 'मेट्रो मार्ग १ (आझाद नगर) किंवा पश्चिम रेल्वे (अंधेरी/विलेपार्ले).'
  },
  'suburbs-east': {
    title: 'Eastern Suburbs (Chembur & Tilak Nagar)',
    titleMr: 'पूर्व उपनगरे (चेंबूर व टिळक नगर)',
    desc: 'Famous for spectacular cinematic Bollywood art direction and life-sized temple facades built by the renowned Sahyadri Krida Mandal.',
    descMr: 'सह्याद्री क्रीडा मंडळाचे भव्य बॉलीवूड कला दिग्दर्शन आणि मंदिर प्रतिकृती.',
    transitTip: 'Tilak Nagar (Harbour Line) or Kurla (Central Line).',
    transitTipMr: 'टिळक नगर (हार्बर) किंवा कुर्ला (मध्य रेल्वे).'
  }
};

export const AreaDetailPage: React.FC<AreaDetailPageProps> = ({
  mandals,
  savedIds,
  onSelectMandal,
  onToggleSave
}) => {
  const { areaSlug } = useParams<{ areaSlug: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const meta = (areaSlug && AREA_META[areaSlug]) || {
    title: areaSlug?.replace('-', ' ').toUpperCase() || 'Area',
    titleMr: areaSlug || 'परिसर',
    desc: 'Mandals located in this neighborhood.',
    descMr: 'या परिसरातील गणेशोत्सव मंडळे.',
    transitTip: 'Check nearest local train station.',
    transitTipMr: 'जवळचे रेल्वे स्थानक तपासा.'
  };

  const areaMandals = mandals.filter(m => m.zone === areaSlug);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-6 pb-nav md:pb-12 animate-fadeIn space-y-6">
      <button
        onClick={() => navigate('/explore')}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#1D1712] border border-white/10 text-xs font-bold text-[#BDB0A4] hover:text-[#F5EBE1] hover:border-white/20 transition-all cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{language === 'mr' ? 'सर्व परिसरांवर परत' : 'Back to Explore'}</span>
      </button>

      {/* Hero Header */}
      <div className="surface-raised rounded-2xl border border-white/10 p-6 sm:p-8 space-y-3 shadow-xl">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E2621B]">
          <MapPin className="w-4 h-4" />
          <span>{language === 'mr' ? 'परिसर विशेष' : 'Neighborhood Circuit'}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-[#F5EBE1] font-display">
          {language === 'mr' ? meta.titleMr : meta.title}
        </h1>

        <p className="text-xs sm:text-sm text-[#BDB0A4] max-w-2xl leading-relaxed">
          {language === 'mr' ? meta.descMr : meta.desc}
        </p>

        {/* Transit Tip */}
        <div className="p-3.5 rounded-xl bg-[#14100C] border border-white/10 flex items-center gap-2.5 text-xs text-[#F59E0B]">
          <Train className="w-4 h-4 text-[#E2621B] shrink-0" />
          <span>{language === 'mr' ? meta.transitTipMr : meta.transitTip}</span>
        </div>
      </div>

      {/* Mandals List */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#827367]">
            {language === 'mr' ? 'या परिसरातील मंडळे' : `Mandals in ${meta.title}`}
          </h2>
          <span className="text-xs text-[#F59E0B] font-bold">
            {areaMandals.length} {language === 'mr' ? 'मंडळे' : 'total'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {areaMandals.map((mandal) => (
            <MandalCard
              key={mandal.id}
              mandal={mandal}
              isSaved={savedIds.includes(mandal.id)}
              onSelect={onSelectMandal}
              onToggleSave={() => onToggleSave(mandal.id)}
              layout="grid"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
