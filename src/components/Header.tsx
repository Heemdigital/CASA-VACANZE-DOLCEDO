import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { OWNER_CONTACT } from '../data/propertyData';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenInquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onLanguageChange,
  onOpenInquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        isScrolled
          ? 'bg-[#F7F4ED]/95 backdrop-blur-md shadow-xs border-b border-[#DCD5C9]/80 py-3.5'
          : 'bg-[#F7F4ED]/80 backdrop-blur-xs py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: Zone 1 (Wordmark) — Zone 2 (4-5 Nav Links) — Zone 3 (Primary Action + Lang) */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="#"
            className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#242722] hover:text-[#3F4B37] transition-colors whitespace-nowrap shrink-0"
            aria-label="Casa Vacanze Dolcedo - Home"
          >
            CASA VACANZE <span className="font-light text-[#716F67]">·</span> DOLCEDO
          </a>

          {/* Zone 2: Single-line nav links */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#595B53]"
            aria-label="Navigazione principale"
          >
            <a
              href="#la-casa"
              className="hover:text-[#242722] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {t.nav.home}
            </a>
            <a
              href="#gli-interni"
              className="hover:text-[#242722] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {t.nav.interiors}
            </a>
            <a
              href="#servizi"
              className="hover:text-[#242722] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {t.nav.comfort}
            </a>
            <a
              href="#dolcedo"
              className="hover:text-[#242722] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {t.nav.village}
            </a>
            <a
              href="#galleria"
              className="hover:text-[#242722] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {t.nav.gallery}
            </a>
          </nav>

          {/* Zone 3: Language Toggle & 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Minimalist Segmented Language Switcher */}
            <div
              className="flex items-center bg-[#E5DFD4]/70 rounded-md p-0.5 text-xs font-medium"
              role="group"
              aria-label="Lingua / Language"
            >
              <button
                type="button"
                onClick={() => onLanguageChange('it')}
                className={`px-2 py-1 rounded transition-colors whitespace-nowrap ${
                  lang === 'it'
                    ? 'bg-white text-[#242722] shadow-2xs font-semibold'
                    : 'text-[#595B53] hover:text-[#242722]'
                }`}
                aria-pressed={lang === 'it'}
              >
                IT
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-1 rounded transition-colors whitespace-nowrap ${
                  lang === 'en'
                    ? 'bg-white text-[#242722] shadow-2xs font-semibold'
                    : 'text-[#595B53] hover:text-[#242722]'
                }`}
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
            </div>

            {/* Desktop Primary CTA */}
            <button
              type="button"
              onClick={onOpenInquiry}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide uppercase text-white bg-[#3F4B37] hover:bg-[#2A3324] rounded-md transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3F4B37]"
            >
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{t.nav.contactMario}</span>
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-[#242722] hover:bg-[#E5DFD4]/60 rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-[#3F4B37]"
              aria-label="Apri menu di navigazione"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-black/40 backdrop-blur-xs transition-opacity"
          onClick={closeMenu}
          aria-hidden={!mobileMenuOpen}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#F7F4ED] shadow-xl p-6 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Menu di navigazione"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#DCD5C9]">
                <span className="font-display text-lg font-bold tracking-tight text-[#242722]">
                  CASA VACANZE
                </span>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="p-2 text-[#595B53] hover:text-[#242722] rounded-md"
                  aria-label="Chiudi menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-4 mt-6 text-base font-medium text-[#242722]">
                <a
                  href="#la-casa"
                  onClick={closeMenu}
                  className="py-2 hover:text-[#3F4B37] transition-colors"
                >
                  {t.nav.home}
                </a>
                <a
                  href="#gli-interni"
                  onClick={closeMenu}
                  className="py-2 hover:text-[#3F4B37] transition-colors"
                >
                  {t.nav.interiors}
                </a>
                <a
                  href="#servizi"
                  onClick={closeMenu}
                  className="py-2 hover:text-[#3F4B37] transition-colors"
                >
                  {t.nav.comfort}
                </a>
                <a
                  href="#dolcedo"
                  onClick={closeMenu}
                  className="py-2 hover:text-[#3F4B37] transition-colors"
                >
                  {t.nav.village}
                </a>
                <a
                  href="#galleria"
                  onClick={closeMenu}
                  className="py-2 hover:text-[#3F4B37] transition-colors"
                >
                  {t.nav.gallery}
                </a>
                <a
                  href="#richiesta-soggiorno"
                  onClick={closeMenu}
                  className="py-2 hover:text-[#3F4B37] transition-colors"
                >
                  {t.nav.contact}
                </a>
              </nav>
            </div>

            <div className="pt-6 border-t border-[#DCD5C9] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#716F67]">Lingua</span>
                <div className="flex items-center bg-[#E5DFD4] rounded-md p-0.5 text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => onLanguageChange('it')}
                    className={`px-3 py-1 rounded ${
                      lang === 'it' ? 'bg-white text-[#242722] font-bold' : 'text-[#595B53]'
                    }`}
                  >
                    IT
                  </button>
                  <button
                    type="button"
                    onClick={() => onLanguageChange('en')}
                    className={`px-3 py-1 rounded ${
                      lang === 'en' ? 'bg-white text-[#242722] font-bold' : 'text-[#595B53]'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  onOpenInquiry();
                }}
                className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#3F4B37] hover:bg-[#2A3324] rounded-md transition-colors"
              >
                {t.nav.contactMario}
              </button>

              <a
                href={`tel:${OWNER_CONTACT.phoneClean}`}
                className="block text-center text-xs text-[#716F67] hover:text-[#242722]"
              >
                {OWNER_CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
