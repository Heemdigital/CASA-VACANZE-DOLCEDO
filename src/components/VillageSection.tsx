import React from 'react';
import {
  MapPin,
  Car,
  CreditCard,
  HeartPulse,
  Newspaper,
  UtensilsCrossed,
  Coffee,
  ShoppingBag,
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { VILLAGE_SERVICES } from '../data/propertyData';

interface VillageSectionProps {
  lang: Language;
}

export const VillageSection: React.FC<VillageSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="dolcedo" className="py-20 md:py-28 bg-[#F7F4ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 06 Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3F4B37] block mb-3">
            {t.village.label}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#242722] mb-5 leading-[1.08] text-balance">
            {t.village.title}
          </h2>
          <p className="text-base sm:text-lg text-[#595B53] leading-relaxed mb-4">
            {t.village.p1}
          </p>
          <p className="text-sm sm:text-base text-[#595B53] leading-relaxed">
            {t.village.p2}
          </p>
        </div>

        {/* Dual Village Photography Composition (Bridge & Village Panorama) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          {/* Large Stone Bridge Photo Card */}
          <div className="lg:col-span-7 bg-white rounded-lg border border-[#DCD5C9] p-3 shadow-xs">
            <div className="relative aspect-16/10 overflow-hidden rounded-md bg-[#ECE7DD]">
              <img
                src="/images/casa-vacanze-dolcedo/dolcedo-piazza-bridge.jpg"
                alt={
                  lang === 'it'
                    ? 'Il ponte storico ad arco e la vegetazione ligure a Dolcedo'
                    : 'The historic stone arch bridge and Ligurian landscape in Dolcedo'
                }
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 text-white">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-200">
                  LIGURIA AUTENTICA
                </span>
                <p className="font-display text-sm sm:text-base text-white/95 italic">
                  {lang === 'it'
                    ? 'Ponte Grande dei Cavalieri di Malta (1292) e il torrente Prino'
                    : 'Great Bridge of the Knights of Malta (1292) over the Prino stream'}
                </p>
              </div>
            </div>
            <div className="p-3 text-xs text-[#595B53] flex items-center justify-between">
              <span>{lang === 'it' ? 'Scorcio pedonale del borgo' : 'Pedestrian village scenery'}</span>
              <span className="font-mono text-[#716F67]">Altitudine 75 m</span>
            </div>
          </div>

          {/* Village Rooftops & Valley Panorama Card */}
          <div className="lg:col-span-5 bg-white rounded-lg border border-[#DCD5C9] p-3 shadow-xs flex flex-col justify-between">
            <div className="relative aspect-4/3 overflow-hidden rounded-md bg-[#ECE7DD]">
              <img
                src="/images/casa-vacanze-dolcedo/dolcedo-village-view.jpg"
                alt={
                  lang === 'it'
                    ? 'Veduta degli uliveti e case storiche di Dolcedo'
                    : 'View of olive groves and historic houses in Dolcedo'
                }
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                loading="lazy"
              />
            </div>
            <div className="p-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#BC6547] block mb-1">
                {lang === 'it' ? 'Entroterra Ligure' : 'Inland Liguria'}
              </span>
              <h3 className="font-display text-lg font-bold text-[#242722] mb-1.5">
                {lang === 'it' ? 'Gli uliveti della Taggiasca' : 'Taggiasca Olive Groves'}
              </h3>
              <p className="text-xs text-[#595B53] leading-relaxed">
                {lang === 'it'
                  ? 'Dolcedo è circondata da terrazzamenti secolari in pietra e mulini ad acqua. Un punto di partenza strategico: il mare di Imperia dista solo 8 km, ma qui si dorme nel silenzio della vallata.'
                  : 'Dolcedo is wrapped in ancient dry-stone terraces and traditional water mills. A strategic base: Imperia\'s beaches are just 8 km away, while here you sleep in peaceful tranquility.'}
              </p>
            </div>
          </div>
        </div>

        {/* Section 07: I SERVIZI IN PAESE */}
        <div className="pt-12 border-t border-[#DCD5C9]">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3F4B37] block mb-3">
              {t.village.servicesLabel}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#242722] mb-3 text-balance">
              {t.village.servicesTitle}
            </h3>
            <p className="text-sm sm:text-base text-[#595B53] leading-relaxed">
              {t.village.servicesSubtitle}
            </p>
          </div>

          {/* Verified Village Facilities List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VILLAGE_SERVICES.map((srv, idx) => {
              const icons = [
                <Coffee className="w-4 h-4" key="1" />,
                <UtensilsCrossed className="w-4 h-4" key="2" />,
                <ShoppingBag className="w-4 h-4" key="3" />,
                <HeartPulse className="w-4 h-4" key="4" />,
                <Newspaper className="w-4 h-4" key="5" />,
                <CreditCard className="w-4 h-4" key="6" />,
                <Car className="w-4 h-4" key="7" />,
              ];

              return (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-lg border border-[#DCD5C9] shadow-2xs hover:border-[#3F4B37]/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-2 text-[#3F4B37]">
                    <div className="w-7 h-7 rounded bg-[#3F4B37]/10 flex items-center justify-center shrink-0">
                      {icons[idx % icons.length]}
                    </div>
                    <h4 className="text-sm font-semibold text-[#242722]">
                      {srv.name[lang]}
                    </h4>
                  </div>
                  <p className="text-xs text-[#595B53] leading-relaxed">
                    {srv.note[lang]}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Honest Parking & Orientation Note */}
          <div className="mt-8 p-4 rounded-md bg-[#F4EFE6] border border-[#DCD5C9] flex items-start gap-3 text-xs text-[#595B53]">
            <MapPin className="w-4 h-4 text-[#BC6547] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-[#242722]">
                {lang === 'it' ? 'Nota sui parcheggi:' : 'Parking notice:'}
              </strong>{' '}
              {lang === 'it'
                ? 'Dolcedo dispone di comodi parcheggi comunali gratuiti a pochi minuti a piedi dalla piazza centrale e dall\'appartamento. Il borgo conserva il suo centro storico a misura d\'uomo e parzialmente pedonale.'
                : 'Dolcedo features free public municipal parking lots a short pleasant walk from the main square and the apartment. The historic center remains human-scaled and pedestrian-friendly.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
