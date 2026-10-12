import React, { useState } from 'react';
import { Eye, Image as ImageIcon } from 'lucide-react';
import { Language, PropertyImage } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { PROPERTY_IMAGES } from '../data/propertyData';

interface GallerySectionProps {
  lang: Language;
  onOpenLightbox: (src: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  lang,
  onOpenLightbox,
}) => {
  const [filter, setFilter] = useState<'all' | 'interior' | 'village'>('all');
  const t = TRANSLATIONS[lang];

  const filteredImages = PROPERTY_IMAGES.filter((img) => {
    if (filter === 'all') return true;
    if (filter === 'interior') return img.category !== 'village';
    if (filter === 'village') return img.category === 'village';
    return true;
  });

  return (
    <section id="galleria" className="py-20 md:py-28 bg-[#F4EFE6] border-y border-[#DCD5C9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3F4B37] block mb-3">
              {t.gallery.label}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#242722] mb-3 leading-[1.08] text-balance">
              {t.gallery.title}
            </h2>
            <p className="text-sm sm:text-base text-[#595B53] leading-relaxed">
              {t.gallery.subtitle}
            </p>
          </div>

          {/* Filter Tabs (Functional segmented controls, not static pills) */}
          <div
            className="flex items-center gap-1 p-1 bg-white border border-[#DCD5C9] rounded-md shrink-0 self-start md:self-auto"
            role="group"
            aria-label="Filtro galleria"
          >
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-[#3F4B37] text-white shadow-2xs font-semibold'
                  : 'text-[#595B53] hover:text-[#242722]'
              }`}
            >
              {t.gallery.filterAll}
            </button>
            <button
              type="button"
              onClick={() => setFilter('interior')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                filter === 'interior'
                  ? 'bg-[#3F4B37] text-white shadow-2xs font-semibold'
                  : 'text-[#595B53] hover:text-[#242722]'
              }`}
            >
              {t.gallery.filterInterior}
            </button>
            <button
              type="button"
              onClick={() => setFilter('village')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                filter === 'village'
                  ? 'bg-[#3F4B37] text-white shadow-2xs font-semibold'
                  : 'text-[#595B53] hover:text-[#242722]'
              }`}
            >
              {t.gallery.filterVillage}
            </button>
          </div>
        </div>

        {/* Gallery Grid (Asymmetrical rhythm with authentic photos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, index) => {
            return (
              <div
                key={img.id}
                onClick={() => onOpenLightbox(img.src)}
                className="group relative cursor-pointer bg-white rounded-md border border-[#DCD5C9] p-2.5 shadow-2xs hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-4/3 overflow-hidden rounded-xs bg-[#ECE7DD]">
                  <img
                    src={img.src}
                    alt={img.alt[lang]}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                    loading="lazy"
                  />
                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-black/60 rounded backdrop-blur-xs">
                      <Eye className="w-3.5 h-3.5" />
                      <span>{t.gallery.openLightbox}</span>
                    </span>
                  </div>
                </div>

                <div className="pt-2.5 pb-1 px-1 flex items-start justify-between gap-2">
                  <p className="text-xs text-[#242722] font-medium leading-snug line-clamp-1">
                    {img.caption[lang]}
                  </p>
                  <span className="text-[10px] font-mono text-[#716F67] uppercase shrink-0">
                    {img.category === 'village' ? 'Borgo' : 'Interni'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
