import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export const ExploreByAreaSection: React.FC = () => {
  const { language, t } = useLanguage();

  const areas = [
    {
      slug: 'lalbaug-parel',
      name: 'Lalbaug & Parel',
      nameMr: 'लालबाग आणि परळ',
      mandalsCount: 5,
      highlights: 'Lalbaugcha Raja, Ganesh Galli, Chintamani, Tejukaya, Parel Cha Raja',
      highlightsMr: 'लालबागचा राजा, गणेश गल्ली, चिंतामणी, तेजुकुकाया'
    },
    {
      slug: 'south-mumbai',
      name: 'South Mumbai (Girgaon & Fort)',
      nameMr: 'दक्षिण मुंबई (गिरगाव व फोर्ट)',
      mandalsCount: 5,
      highlights: '1893 Keshavji Naik Chawl, 25ft Girgaon Raja, Khetwadi 12th Lane, Fort',
      highlightsMr: 'केशवजी नाईक चाळ (१८९३), गिरगावचा राजा, खेतवाडी'
    },
    {
      slug: 'central-mumbai',
      name: 'Central Mumbai (Sion & Wadala)',
      nameMr: 'मध्य मुंबई (शीव, माटुंगा व वडाळा)',
      mandalsCount: 2,
      highlights: 'GSB Kings Circle (66kg Gold & Annadaan), GSB Ram Mandir Wadala',
      highlightsMr: 'जीएसबी किंग्ज सर्कल (६६ किलो सोने), वडाळा राम मंदिर'
    },
    {
      slug: 'suburbs-west',
      name: 'Western Suburbs (Andheri & Khar)',
      nameMr: 'पश्चिम उपनगरे (अंधेरी, वांद्रे व खार)',
      mandalsCount: 3,
      highlights: 'Andhericha Raja (16 Days), Balgopal Vile Parle, Khar Danda Koliwada',
      highlightsMr: 'अंधेरीचा राजा (१६ दिवस), विलेपार्ले बालगोपाल, खार दांडा'
    },
    {
      slug: 'suburbs-east',
      name: 'Eastern Suburbs (Chembur)',
      nameMr: 'पूर्व उपनगरे (चेंबूर व टिळक नगर)',
      mandalsCount: 1,
      highlights: 'Sahyadri Krida Mandal (Bollywood Cinematic Sets & Facades)',
      highlightsMr: 'सह्याद्री क्रीडा मंडळ (भव्य बॉलीवूड देखावे)'
    }
  ];

  return (
    <section className="mt-9 px-4 sm:px-6">
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <div>
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#F5EBE1]">
            {t.exploreByAreaHeading}
          </h2>
          <p className="text-xs text-[#827367] font-marathi">
            {language === 'mr' ? 'मुंबईच्या विविध विभागांनुसार दर्शन' : 'Explore by Mumbai neighborhoods'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {areas.map((area) => (
          <Link
            key={area.slug}
            to={`/area/${area.slug}`}
            className="surface p-4 rounded-xl border border-[var(--line)] hover:border-[#E2621B]/50 hover:bg-[#231B15] transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#E2621B] flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {language === 'mr' ? `${area.mandalsCount} मंडळे` : `${area.mandalsCount} mandals`}
                </span>
                <ChevronRight className="w-4 h-4 text-[#827367] group-hover:text-[#F59E0B] group-hover:translate-x-0.5 transition-transform" />
              </div>
              <h3 className="text-sm font-bold text-[#F5EBE1] group-hover:text-[#F59E0B] transition-colors font-display mt-1">
                {language === 'mr' ? area.nameMr : area.name}
              </h3>
            </div>
            <p className="text-[11px] text-[#827367] line-clamp-1 mt-2">
              {language === 'mr' ? area.highlightsMr : area.highlights}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};
