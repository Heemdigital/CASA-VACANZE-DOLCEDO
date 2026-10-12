import React from 'react';
import { ArrowDown, Phone, MapPin, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { OWNER_CONTACT } from '../data/propertyData';

interface HeroProps {
  lang: Language;
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenInquiry }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#F7F4ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Eyebrow & Metadata */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium tracking-widest uppercase text-[#595B53] mb-6">
          <span className="flex items-center gap-1.5 text-[#3F4B37] font-semibold">
            <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
            <span>DOLCEDO</span>
          </span>
          <span aria-hidden="true">·</span>
          <span>PROVINCIA DI IMPERIA</span>
          <span aria-hidden="true">·</span>
          <span>LIGURIA, ITALIA</span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span className="hidden sm:inline font-mono tabular-nums text-[#716F67]">
            {OWNER_CONTACT.coordinates}
          </span>
        </div>

        {/* Hero Main Grid: Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Bold Editorial Typography & Conversion CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#BC6547] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.hero.eyebrow}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[0.94] tracking-tight text-[#242722] mb-6 text-balance">
              <span className="block">{t.hero.titleLine1}</span>
              <span className="block italic font-normal text-[#3F4B37]">
                {t.hero.titleLine2}
              </span>
              <span className="block">{t.hero.titleLine3}</span>
            </h1>

            <p className="text-base sm:text-lg text-[#595B53] leading-relaxed max-w-xl mb-8">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenInquiry}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#3F4B37] hover:bg-[#2A3324] rounded-md transition-colors shadow-xs focus-visible:outline-2 focus-visible:outline-[#3F4B37]"
              >
                <Phone className="w-4 h-4" />
                <span>{t.hero.ctaPrimary}</span>
              </button>

              <a
                href="#la-casa"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#242722] hover:text-[#3F4B37] bg-white hover:bg-[#F4EFE6] border border-[#DCD5C9] rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-[#3F4B37]"
              >
                <span>{t.hero.ctaSecondary}</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Factual Highlights Micro-strip */}
            <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-[#DCD5C9]/80 text-xs text-[#595B53]">
              <div>
                <span className="block font-display text-lg sm:text-xl font-bold text-[#242722] tabular-nums">
                  2 Camere
                </span>
                <span className="text-[11px] leading-tight">Matrimoniale + Letto alla francese</span>
              </div>
              <div>
                <span className="block font-display text-lg sm:text-xl font-bold text-[#242722] tabular-nums">
                  Piazza Doria
                </span>
                <span className="text-[11px] leading-tight">Affaccio diretto nel borgo</span>
              </div>
              <div>
                <span className="block font-display text-lg sm:text-xl font-bold text-[#242722] tabular-nums">
                  100% Ristrutturato
                </span>
                <span className="text-[11px] leading-tight">Wi-Fi, cucina e riscaldamento</span>
              </div>
            </div>
          </div>

          {/* Right Column: "The Ligurian Frame" Editorial Signature Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative architectural frame */}
              <div className="relative border border-[#DCD5C9] bg-white p-2.5 sm:p-3 rounded-md shadow-sm">
                <div className="relative aspect-4/5 overflow-hidden rounded-xs bg-[#ECE7DD]">
                  <img
                    src="/images/casa-vacanze-dolcedo/dolcedo-stone-bridge.jpg"
                    alt={
                      lang === 'it'
                        ? 'Scorcio autentico del ponte medievale in pietra e borgo di Dolcedo'
                        : 'Authentic stone bridge and historic village of Dolcedo, Liguria'
                    }
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                    loading="eager"
                  />
                  {/* Subtle contrast scrim for bottom editorial caption */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-4 sm:p-5 text-white">
                    <span className="block text-[10px] font-mono tracking-wider uppercase text-amber-200/90 mb-0.5">
                      DOLCEDO · PONTE GRANDE DEI CAVALIERI DI MALTA
                    </span>
                    <p className="font-display text-sm sm:text-base leading-snug italic text-white/95">
                      {lang === 'it'
                        ? 'Il borgo storico e le sue acque chiare, a pochi metri dall’appartamento.'
                        : 'The ancient stone village, steps from your apartment door.'}
                    </p>
                  </div>
                </div>

                {/* Sub-card interior preview inset */}
                <div className="mt-2.5 flex items-center justify-between px-1 text-[11px] text-[#716F67]">
                  <span className="font-medium text-[#242722]">
                    {lang === 'it' ? 'Appartamento Vacanze Privato' : 'Private Holiday Apartment'}
                  </span>
                  <span className="font-mono tabular-nums">Mario · Dolcedo (IM)</span>
                </div>
              </div>

              {/* Offset Accent Stamp */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-[#3F4B37] text-white p-3 rounded-md shadow-md hidden sm:block max-w-[170px]">
                <span className="block text-[10px] uppercase tracking-wider text-amber-200/80 mb-0.5">
                  POSIZIONE
                </span>
                <span className="font-display text-xs leading-tight block">
                  {lang === 'it'
                    ? 'Affacciato sulla piazza principale di Dolcedo'
                    : 'Overlooking Dolcedo main village piazza'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
