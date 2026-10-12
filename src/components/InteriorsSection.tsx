import React, { useState } from 'react';
import { Eye, Flame, Snowflake, Bed, Sparkles, Check } from 'lucide-react';
import { Language, RoomDetail } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { ROOMS_DATA } from '../data/propertyData';

interface InteriorsSectionProps {
  lang: Language;
  onOpenLightbox: (imageSrc: string) => void;
}

export const InteriorsSection: React.FC<InteriorsSectionProps> = ({
  lang,
  onOpenLightbox,
}) => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>('camera-francese');
  const t = TRANSLATIONS[lang];

  const currentRoom =
    ROOMS_DATA.find((r) => r.id === selectedRoomId) || ROOMS_DATA[0];

  return (
    <section id="gli-interni" className="py-20 md:py-28 bg-[#F7F4ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3F4B37] block mb-3">
            {t.interiors.label}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#242722] mb-5 leading-[1.08] text-balance">
            {t.interiors.title}
          </h2>
          <p className="text-base sm:text-lg text-[#595B53] leading-relaxed">
            {t.interiors.subtitle}
          </p>
        </div>

        {/* Interactive Room Navigation (Clean Functional Segmented Tabs, not pill badges) */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-[#DCD5C9] pb-4" role="tablist">
          {ROOMS_DATA.map((room) => {
            const isSelected = room.id === selectedRoomId;
            return (
              <button
                key={room.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedRoomId(room.id)}
                className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-md transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#3F4B37] ${
                  isSelected
                    ? 'bg-[#3F4B37] text-white shadow-xs'
                    : 'bg-white hover:bg-[#F4EFE6] text-[#595B53] hover:text-[#242722] border border-[#DCD5C9]'
                }`}
              >
                {room.name[lang]}
              </button>
            );
          })}
        </div>

        {/* Selected Room Showcase Card (Single-elevation, asymmetrical split) */}
        <div className="bg-white rounded-lg border border-[#DCD5C9] p-6 sm:p-8 lg:p-10 shadow-xs mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Room Image Frame */}
            <div className="lg:col-span-7">
              <div className="relative group overflow-hidden rounded-md border border-[#DCD5C9] bg-[#ECE7DD]">
                <div className="aspect-16/10 sm:aspect-16/9 overflow-hidden">
                  <img
                    src={currentRoom.image}
                    alt={currentRoom.name[lang]}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    loading="lazy"
                  />
                </div>

                {/* Inspect Fullscreen Overlay Button */}
                <button
                  type="button"
                  onClick={() => onOpenLightbox(currentRoom.image)}
                  className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-white bg-black/70 hover:bg-black/90 rounded backdrop-blur-xs transition-colors focus-visible:outline-2 focus-visible:outline-white"
                  aria-label={`${t.interiors.viewPhoto}: ${currentRoom.name[lang]}`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{t.interiors.viewPhoto}</span>
                </button>
              </div>
            </div>

            {/* Room Details Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#BC6547] block mb-2">
                  {currentRoom.subtitle[lang]}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#242722] mb-4">
                  {currentRoom.name[lang]}
                </h3>
                <p className="text-sm sm:text-base text-[#595B53] leading-relaxed mb-6">
                  {currentRoom.description[lang]}
                </p>

                {/* Verified Room Features */}
                <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-[#242722]" role="list">
                  {currentRoom.features[lang].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#3F4B37] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified Climate & Seasonal Heating Badge Container */}
              <div className="pt-4 border-t border-[#DCD5C9] bg-[#F7F4ED] p-3.5 rounded border border-[#E5DFD4]">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#3F4B37] mb-1">
                  <Flame className="w-3.5 h-3.5 text-[#BC6547]" />
                  <span>{t.interiors.climateLabel}</span>
                </div>
                <p className="text-xs text-[#595B53]">
                  {currentRoom.climateNote[lang]}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 03: Il Soggiorno e Flessibilità dei Letti (Full-width editorial breakdown) */}
        <div className="bg-[#3F4B37] text-white rounded-lg p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-200/90 block mb-2">
                {lang === 'it' ? 'COMFORT E FLESSIBILITÀ' : 'FLEXIBILITY & SLEEPING SPACES'}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 text-balance">
                {t.interiors.capacityTitle}
              </h3>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-xl">
                {t.interiors.capacityText}
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-xs border border-white/15 p-4 rounded-md">
                <div className="flex items-center gap-2 text-amber-200 text-xs font-semibold uppercase tracking-wide mb-1">
                  <Bed className="w-4 h-4" />
                  <span>Camera 1</span>
                </div>
                <p className="text-sm font-bold text-white">Letto Matrimoniale</p>
                <p className="text-xs text-white/70 mt-1">Con aria condizionata</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xs border border-white/15 p-4 rounded-md">
                <div className="flex items-center gap-2 text-amber-200 text-xs font-semibold uppercase tracking-wide mb-1">
                  <Bed className="w-4 h-4" />
                  <span>Camera 2</span>
                </div>
                <p className="text-sm font-bold text-white">Letto alla Francese</p>
                <p className="text-xs text-white/70 mt-1">Con caminetto elettrico</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xs border border-white/15 p-4 rounded-md col-span-2">
                <div className="flex items-center gap-2 text-amber-200 text-xs font-semibold uppercase tracking-wide mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Soggiorno</span>
                </div>
                <p className="text-sm font-bold text-white">Divano Trasformabile in Matrimoniale</p>
                <p className="text-xs text-white/70 mt-1">
                  {lang === 'it'
                    ? 'Opzione aggiuntiva per ospitare fino a 4-6 persone in libertà.'
                    : 'Additional option accommodating up to 4-6 guests with ease.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
