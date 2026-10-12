import React from 'react';
import { Check, ShieldCheck, Heart, Home } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface AboutApartmentProps {
  lang: Language;
  onOpenInquiry: () => void;
}

export const AboutApartment: React.FC<AboutApartmentProps> = ({ lang, onOpenInquiry }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="la-casa" className="py-20 md:py-28 bg-[#F4EFE6] border-y border-[#DCD5C9]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image composition with real photo of the open living/kitchen interior */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              {/* Main Photo Frame */}
              <div className="relative bg-white p-3 rounded-md border border-[#DCD5C9] shadow-xs">
                <div className="aspect-4/3 overflow-hidden rounded-xs bg-[#ECE7DD]">
                  <img
                    src="/images/casa-vacanze-dolcedo/living-kitchen-open-space.jpg"
                    alt={
                      lang === 'it'
                        ? 'Zona giorno e cucina moderna dell\'appartamento a Dolcedo'
                        : 'Living area and modern kitchen in the Dolcedo holiday apartment'
                    }
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                    loading="lazy"
                  />
                </div>
                <div className="pt-3 pb-1 px-1 flex items-center justify-between text-xs text-[#716F67]">
                  <span className="font-serif italic text-[#242722]">
                    {lang === 'it'
                      ? 'Zona giorno con cucina attrezzata'
                      : 'Open-plan living & equipped kitchen'}
                  </span>
                  <span className="font-mono text-[11px] tabular-nums">Dolcedo, Imperia</span>
                </div>
              </div>

              {/* Offset Secondary Photo Detail: Dining & Pellet Stove */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-3/5 bg-white p-2.5 rounded-md border border-[#DCD5C9] shadow-md">
                <div className="aspect-4/3 overflow-hidden rounded-xs bg-[#ECE7DD]">
                  <img
                    src="/images/casa-vacanze-dolcedo/living-room-dining-pellet-stove.jpg"
                    alt={
                      lang === 'it'
                        ? 'Dettaglio zona pranzo e stufa a pellet in pietra'
                        : 'Dining area and stone wall with pellet stove'
                    }
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="mt-1.5 text-[11px] text-[#595B53] px-1 truncate">
                  {lang === 'it' ? 'Stufa a pellet e tavolo da pranzo' : 'Pellet stove & dining table'}
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Text Column */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#3F4B37] block mb-3">
                {t.about.label}
              </span>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#242722] mb-6 leading-[1.08] text-balance">
                {t.about.title}
              </h2>

              <p className="text-base sm:text-lg text-[#595B53] leading-relaxed mb-5">
                {t.about.p1}
              </p>

              <p className="text-sm sm:text-base text-[#595B53] leading-relaxed mb-8">
                {t.about.p2}
              </p>

              {/* 3 Core Editorial Highlights (No static pill badges, clean human editorial format) */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3.5">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#3F4B37]/10 flex items-center justify-center shrink-0 text-[#3F4B37]">
                    <Home className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#242722]">
                      {t.about.highlight1Title}
                    </h3>
                    <p className="text-xs text-[#595B53] mt-0.5">{t.about.highlight1Text}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#BC6547]/10 flex items-center justify-center shrink-0 text-[#BC6547]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#242722]">
                      {t.about.highlight2Title}
                    </h3>
                    <p className="text-xs text-[#595B53] mt-0.5">{t.about.highlight2Text}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#3F4B37]/10 flex items-center justify-center shrink-0 text-[#3F4B37]">
                    <Heart className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#242722]">
                      {t.about.highlight3Title}
                    </h3>
                    <p className="text-xs text-[#595B53] mt-0.5">{t.about.highlight3Text}</p>
                  </div>
                </div>
              </div>

              {/* Sub-action */}
              <div className="pt-4 border-t border-[#DCD5C9]">
                <button
                  type="button"
                  onClick={onOpenInquiry}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3F4B37] hover:text-[#2A3324] transition-colors"
                >
                  <span>{lang === 'it' ? 'Chiedi a Mario info sul soggiorno →' : 'Inquire with Mario about your stay →'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
