import React from 'react';
import { ArrowUp, Phone, MapPin } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { OWNER_CONTACT } from '../data/propertyData';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1F241B] text-[#DCD5C9] pt-16 pb-12 border-t border-[#3F4B37]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Statement */}
          <div className="md:col-span-5">
            <span className="font-display text-2xl font-bold tracking-tight text-white block mb-2">
              {t.footer.brand}
            </span>
            <p className="font-display italic text-base text-amber-200/90 mb-4">
              "{t.footer.statement}"
            </p>
            <p className="text-xs text-[#A8A49A] leading-relaxed max-w-sm mb-6">
              {lang === 'it'
                ? 'Appartamento vacanze completamente ristrutturato nel centro storico di Dolcedo, affacciato sulla piazza principale. Comfort domestico e fascino ligure.'
                : 'Completely renovated holiday apartment in the historic center of Dolcedo, overlooking the main square. Modern home comfort and authentic Ligurian charm.'}
            </p>

            <div className="flex items-center gap-2 text-xs text-[#DCD5C9]">
              <MapPin className="w-3.5 h-3.5 text-[#BC6547]" />
              <span>{t.footer.address}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-white block mb-3">
              {lang === 'it' ? 'Navigazione' : 'Navigation'}
            </span>
            <ul className="space-y-2 text-xs" role="list">
              <li>
                <a href="#la-casa" className="hover:text-white transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#gli-interni" className="hover:text-white transition-colors">
                  {t.nav.interiors}
                </a>
              </li>
              <li>
                <a href="#servizi" className="hover:text-white transition-colors">
                  {t.nav.comfort}
                </a>
              </li>
              <li>
                <a href="#dolcedo" className="hover:text-white transition-colors">
                  {t.nav.village}
                </a>
              </li>
              <li>
                <a href="#galleria" className="hover:text-white transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#richiesta-soggiorno" className="hover:text-white transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details & Host Info */}
          <div className="md:col-span-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-white block mb-3">
              {lang === 'it' ? 'Contatto Diretto' : 'Direct Contact'}
            </span>
            <div className="space-y-2.5 text-xs text-[#A8A49A]">
              <p className="text-white font-medium">{t.footer.owner}</p>
              <p>
                <a
                  href={`tel:${OWNER_CONTACT.phoneClean}`}
                  className="inline-flex items-center gap-1.5 text-amber-200 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{OWNER_CONTACT.phone}</span>
                </a>
              </p>
              <p className="text-[11px] pt-2 text-[#8E8B83]">
                {lang === 'it'
                  ? 'Disponibile per chiamate e messaggi WhatsApp per disponibilità e chiarimenti sul soggiorno.'
                  : 'Available via phone and WhatsApp messages for availability and questions regarding your stay.'}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#716F67]">
          <p>
            © {new Date().getFullYear()} {t.footer.brand}. {t.footer.rights}
          </p>

          <p className="text-center sm:text-right">{t.footer.legalNote}</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#DCD5C9] hover:text-white transition-colors"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
