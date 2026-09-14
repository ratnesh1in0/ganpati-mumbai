import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Ban, Train, Car } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export const TransitAlertCard: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section className="mt-8 px-4 sm:px-6">
      <Link
        to="/transit"
        className="flex items-center gap-3 sm:gap-4 rounded-[var(--radius-card)] border border-[var(--line-strong)] bg-[#1B1510] p-4 sm:p-5 transition-all hover:border-[#6C8AB0]/60 hover:bg-[#231B15] shadow-lg group"
      >
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#6C8AB0]/40 bg-[#6C8AB0]/10 text-[#6C8AB0]">
          <Car className="w-5 h-5" />
        </div>

        <div className="min-w-0 flex-1">
          <span className="block text-sm sm:text-base font-bold text-[#F5EBE1] group-hover:text-[#6C8AB0] transition-colors font-display">
            {t.transitBannerTitle}
          </span>
          <span className="mt-0.5 block text-xs leading-relaxed text-[#BDB0A4]">
            {t.transitBannerDesc}
          </span>
          <span className="mt-1 flex items-center gap-1 text-[11px] text-[#827367]">
            <Ban className="w-3 h-3 text-[#E2621B]" />
            <span>
              {language === 'mr'
                ? 'अधिकृत नियमावली — रस्त्यावरील पोलीस बॅरिकेड्सचे पालन करा'
                : 'Advisory guide — follow on-ground police barricades'}
            </span>
          </span>
        </div>

        <ChevronRight className="w-5 h-5 shrink-0 text-[#827367] group-hover:text-[#F5EBE1] group-hover:translate-x-1 transition-all" />
      </Link>
    </section>
  );
};
