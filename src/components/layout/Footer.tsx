import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Heart, Train, Shield, MapPin } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { TRANSIT_DATA } from '../../data/transitData';
import { GanpatiGlyph } from '../../assets/DevotionalIcons';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="mt-16 border-t border-[var(--line)] bg-[#100C09] text-[#827367] pb-24 md:pb-12 pt-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Blessings */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#E2621B] to-[#F59E0B] text-[#14100C]">
                <GanpatiGlyph size={22} />
              </div>
              <span className="text-lg font-black text-[#F5EBE1] font-display">
                Ganpati<span className="text-[#E2621B]">Mumbai</span>
              </span>
            </div>
            <p className="text-sm text-[#BDB0A4] max-w-md leading-relaxed">
              {t.footerDesc}
            </p>
            <div className="pt-2">
              <span className="font-marathi text-sm font-bold text-[#F59E0B] block">
                गणपती बाप्पा मोरया · मंगलमूर्ती मोरया
              </span>
              <span className="text-xs text-[#827367]">
                Live queue tracking & walkable circuits for Mumbai Ganeshotsav
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5EBE1]">
              {t.quickLinks}
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link to="/explore" className="hover:text-[#F59E0B] transition-colors">
                  {language === 'mr' ? 'सर्व प्रसिद्ध मंडळे' : 'All Mandals Directory'}
                </Link>
              </li>
              <li>
                <Link to="/map" className="hover:text-[#F59E0B] transition-colors">
                  {language === 'mr' ? 'थेट गर्दी नकाशा' : 'Live Crowd Map'}
                </Link>
              </li>
              <li>
                <Link to="/routes" className="hover:text-[#F59E0B] transition-colors">
                  {language === 'mr' ? 'पदभ्रमण दर्शन मार्ग' : 'Walkable Darshan Trails'}
                </Link>
              </li>
              <li>
                <Link to="/transit" className="hover:text-[#F59E0B] transition-colors">
                  {language === 'mr' ? 'लोकल ट्रेन्स व पार्किंग' : 'Local Trains & Parking'}
                </Link>
              </li>
              <li>
                <Link to="/streams" className="hover:text-[#F59E0B] transition-colors">
                  {language === 'mr' ? '२४ तास थेट दर्शन' : '24x7 Live Darshan'}
                </Link>
              </li>
              <li>
                <Link to="/aartis" className="hover:text-[#F59E0B] transition-colors">
                  {language === 'mr' ? 'आरती संग्रह व स्तोत्रे' : 'Aarti Sangrah & Prayers'}
                </Link>
              </li>
              <li>
                <Link to="/visarjan" className="hover:text-[#F59E0B] transition-colors">
                  {language === 'mr' ? 'विसर्जन व चौपाटी मार्गदर्शक' : 'Visarjan & Beach Guide'}
                </Link>
              </li>
              <li>
                <Link to="/how-to-use" className="hover:text-[#F59E0B] transition-colors">
                  {language === 'mr' ? 'कसे वापरावे (मार्गदर्शक)' : 'How To Use Guide'}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F59E0B] transition-colors">
                  {language === 'mr' ? 'या उपक्रमाविषयी' : 'About Project'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Emergency Helplines */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5EBE1] flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#E2621B]" />
              {t.emergencyHelplines}
            </h4>
            <ul className="space-y-2 text-xs">
              {TRANSIT_DATA.emergencyContacts.slice(0, 4).map((c, i) => (
                <li key={i} className="flex items-center justify-between border-b border-white/5 pb-1">
                  <span className="text-[#BDB0A4]">{language === 'mr' ? c.titleMr : c.title}</span>
                  <a
                    href={`tel:${c.number.split('/')[0].trim()}`}
                    className="font-mono font-bold text-[#F59E0B] hover:underline"
                  >
                    {c.number}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright / credits */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>
            © 2026 GanpatiMumbai. Built with devotion by Ratnesh for Mumbai devotees. Non-commercial & open.
          </p>
          <div className="flex items-center gap-4 text-[#827367]">
            <span>Lalbaug</span>
            <span>•</span>
            <span>Girgaon</span>
            <span>•</span>
            <span>Parel</span>
            <span>•</span>
            <span>Sion</span>
            <span>•</span>
            <span>Andheri</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
