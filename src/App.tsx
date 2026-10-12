/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types';
import { PROPERTY_IMAGES } from './data/propertyData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutApartment } from './components/AboutApartment';
import { InteriorsSection } from './components/InteriorsSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { VillageSection } from './components/VillageSection';
import { GallerySection } from './components/GallerySection';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';

export default function App() {
  const [lang, setLang] = useState<Language>('it');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleOpenLightbox = (imageSrc: string) => {
    const idx = PROPERTY_IMAGES.findIndex((img) => img.src === imageSrc);
    setLightboxIndex(idx !== -1 ? idx : 0);
    setLightboxOpen(true);
  };

  const handleNextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % PROPERTY_IMAGES.length);
  };

  const handlePrevLightbox = () => {
    setLightboxIndex(
      (prev) => (prev - 1 + PROPERTY_IMAGES.length) % PROPERTY_IMAGES.length
    );
  };

  const handleOpenInquiry = () => {
    const el = document.getElementById('richiesta-soggiorno');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Focus name input if available
      setTimeout(() => {
        const input = document.getElementById('guest-name');
        if (input) input.focus();
      }, 500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4ED] text-[#242722] selection:bg-[#3F4B37] selection:text-white">
      {/* Header with Top Bar Contract */}
      <Header
        lang={lang}
        onLanguageChange={setLang}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero lang={lang} onOpenInquiry={handleOpenInquiry} />

        {/* Section 01: La Casa */}
        <AboutApartment lang={lang} onOpenInquiry={handleOpenInquiry} />

        {/* Section 02 & 03: Gli Interni & Il Soggiorno */}
        <InteriorsSection
          lang={lang}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Section 04 & 05: I Comfort di Casa & Climatizzazione in ogni stagione */}
        <AmenitiesSection lang={lang} />

        {/* Section 06 & 07: Il Borgo di Dolcedo & I Servizi in Paese */}
        <VillageSection lang={lang} />

        {/* Section 08: Una Galleria Autentica */}
        <GallerySection
          lang={lang}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Section 09 & 10: Contatti & Richiesta di Soggiorno */}
        <InquirySection lang={lang} />
      </main>

      {/* Section 11: Closing Editorial Footer */}
      <Footer lang={lang} />

      {/* Interactive Lightbox Dialog */}
      <LightboxModal
        images={PROPERTY_IMAGES}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
        lang={lang}
      />
    </div>
  );
}
