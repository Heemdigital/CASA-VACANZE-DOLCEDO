import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PropertyImage, Language } from '../types';

interface LightboxModalProps {
  images: PropertyImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  lang: Language;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
  lang,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/92 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Galleria a schermo intero"
      onClick={onClose}
    >
      {/* Top Bar: Counter & Close Button */}
      <div
        className="absolute top-4 inset-x-4 sm:inset-x-6 flex items-center justify-between text-white z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-xs font-mono tracking-wider tabular-nums bg-white/10 px-3 py-1.5 rounded backdrop-blur-xs">
          {currentIndex + 1} / {images.length}
        </span>

        <button
          type="button"
          onClick={onClose}
          className="p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded transition-colors focus-visible:outline-2 focus-visible:outline-white"
          aria-label={lang === 'it' ? 'Chiudi galleria' : 'Close gallery'}
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[82vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded shadow-2xl max-h-[72vh] flex items-center justify-center">
          <img
            src={currentImage.src}
            alt={currentImage.alt[lang]}
            referrerPolicy="no-referrer"
            className="max-h-[72vh] max-w-full object-contain select-none"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <p className="text-white/95 text-xs sm:text-sm font-medium">
            {currentImage.caption[lang]}
          </p>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-white"
        aria-label={lang === 'it' ? 'Foto precedente' : 'Previous photo'}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-white"
        aria-label={lang === 'it' ? 'Foto successiva' : 'Next photo'}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
