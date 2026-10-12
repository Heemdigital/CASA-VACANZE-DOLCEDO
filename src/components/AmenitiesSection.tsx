import React from 'react';
import {
  Wifi,
  Sparkles,
  Coffee,
  Gift,
  Flame,
  Wind,
  CheckCircle2,
  Tv,
  UtensilsCrossed,
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { AMENITIES_LIST } from '../data/propertyData';

interface AmenitiesSectionProps {
  lang: Language;
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="servizi" className="py-20 md:py-28 bg-[#F4EFE6] border-y border-[#DCD5C9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 04 Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3F4B37] block mb-3">
            {t.amenities.label}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#242722] mb-5 leading-[1.08] text-balance">
            {t.amenities.title}
          </h2>
          <p className="text-base sm:text-lg text-[#595B53] leading-relaxed">
            {t.amenities.subtitle}
          </p>
        </div>

        {/* Section 04 Bento-Grid: Editorial Amenity Cards & Kitchen Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          {/* Left Column: Authentic Kitchen Photo Feature Card */}
          <div className="lg:col-span-5 bg-white rounded-lg border border-[#DCD5C9] p-4 flex flex-col justify-between shadow-xs">
            <div className="relative aspect-4/3 overflow-hidden rounded-md bg-[#ECE7DD]">
              <img
                src="/images/casa-vacanze-dolcedo/kitchen-modern-sage.jpg"
                alt={
                  lang === 'it'
                    ? 'Cucina lineare moderna verde salvia con forno e piano cottura'
                    : 'Modern sage linear kitchen with built-in oven and cooktop'
                }
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                loading="lazy"
              />
            </div>
            <div className="pt-4 px-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#BC6547] block mb-1">
                {lang === 'it' ? 'Cucina Attrezzata' : 'Equipped Kitchen'}
              </span>
              <h3 className="font-display text-xl font-bold text-[#242722] mb-2">
                {lang === 'it'
                  ? 'Libertà di cucinare come a casa'
                  : 'The freedom to cook like at home'}
              </h3>
              <p className="text-xs sm:text-sm text-[#595B53] leading-relaxed">
                {lang === 'it'
                  ? 'Piano cottura a induzione, forno integrato, lavastoviglie, frigorifero, stoviglie e macchina per caffè e tè. Prepara la focaccia e i sapori liguri a qualsiasi ora.'
                  : 'Induction cooktop, built-in oven, dishwasher, refrigerator, dinnerware, and coffee & tea maker. Savor authentic Ligurian meals on your schedule.'}
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Amenity Grid (2x3) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AMENITIES_LIST.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded-lg border border-[#DCD5C9] shadow-2xs hover:border-[#3F4B37]/40 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded bg-[#3F4B37]/10 flex items-center justify-center text-[#3F4B37] shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-[#242722]">
                    {item.name[lang]}
                  </h4>
                </div>
                <p className="text-xs text-[#595B53] leading-relaxed pl-9.5">
                  {item.detail[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 05: IL COMFORT IN OGNI STAGIONE */}
        <div className="pt-12 border-t border-[#DCD5C9]">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#BC6547] block mb-3">
              {t.amenities.climateSectionLabel}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#242722] mb-3 text-balance">
              {t.amenities.climateSectionTitle}
            </h3>
            <p className="text-sm sm:text-base text-[#595B53] leading-relaxed">
              {t.amenities.climateSectionSubtitle}
            </p>
          </div>

          {/* 3 Asymmetrical Seasonal Comfort Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Room 1 */}
            <div className="bg-white rounded-lg border border-[#DCD5C9] p-6 shadow-2xs">
              <div className="w-9 h-9 rounded-md bg-[#3F4B37]/10 text-[#3F4B37] flex items-center justify-center mb-4">
                <Wind className="w-5 h-5" />
              </div>
              <h4 className="font-display text-lg font-bold text-[#242722] mb-2">
                {t.amenities.climateRoom1Title}
              </h4>
              <p className="text-xs sm:text-sm text-[#595B53] leading-relaxed mb-4">
                {t.amenities.climateRoom1Desc}
              </p>
              <div className="pt-3 border-t border-[#E5DFD4] text-[11px] font-medium text-[#3F4B37]">
                ✓ Climatizzazione caldo/freddo autonoma
              </div>
            </div>

            {/* Room 2 */}
            <div className="bg-white rounded-lg border border-[#DCD5C9] p-6 shadow-2xs">
              <div className="w-9 h-9 rounded-md bg-[#BC6547]/10 text-[#BC6547] flex items-center justify-center mb-4">
                <Flame className="w-5 h-5" />
              </div>
              <h4 className="font-display text-lg font-bold text-[#242722] mb-2">
                {t.amenities.climateRoom2Title}
              </h4>
              <p className="text-xs sm:text-sm text-[#595B53] leading-relaxed mb-4">
                {t.amenities.climateRoom2Desc}
              </p>
              <div className="pt-3 border-t border-[#E5DFD4] text-[11px] font-medium text-[#BC6547]">
                ✓ Caminetto elettrico a parete + ventilatore
              </div>
            </div>

            {/* Living */}
            <div className="bg-white rounded-lg border border-[#DCD5C9] p-6 shadow-2xs">
              <div className="w-9 h-9 rounded-md bg-[#3F4B37]/10 text-[#3F4B37] flex items-center justify-center mb-4">
                <Flame className="w-5 h-5" />
              </div>
              <h4 className="font-display text-lg font-bold text-[#242722] mb-2">
                {t.amenities.climateLivingTitle}
              </h4>
              <p className="text-xs sm:text-sm text-[#595B53] leading-relaxed mb-4">
                {t.amenities.climateLivingDesc}
              </p>
              <div className="pt-3 border-t border-[#E5DFD4] text-[11px] font-medium text-[#3F4B37]">
                ✓ Stufa a pellet con pietra a vista + ventilatore
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
