import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  Calendar,
  Users,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { OWNER_CONTACT } from '../data/propertyData';

interface InquirySectionProps {
  lang: Language;
}

export const InquirySection: React.FC<InquirySectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Calculate nights
  const calculateNights = () => {
    if (!formData.checkIn || !formData.checkOut) return null;
    const start = new Date(formData.checkIn);
    const end = new Date(formData.checkOut);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : null;
  };

  const nights = calculateNights();

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t.contact.validationName;
    }

    if (!formData.contactInfo.trim()) {
      newErrors.contactInfo = t.contact.validationContact;
    }

    if (formData.checkIn && formData.checkOut) {
      const start = new Date(formData.checkIn);
      const end = new Date(formData.checkOut);
      if (end <= start) {
        newErrors.dates = t.contact.validationDates;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Build WhatsApp text
  const generateWhatsAppMessage = () => {
    const nightsStr = nights ? ` (${nights} ${lang === 'it' ? 'notti' : 'nights'})` : '';
    const datesStr =
      formData.checkIn && formData.checkOut
        ? `${formData.checkIn} - ${formData.checkOut}${nightsStr}`
        : lang === 'it'
        ? 'Date da concordare'
        : 'Dates to be agreed';

    if (lang === 'it') {
      return `Buongiorno Mario, vorrei informazioni per un soggiorno a Casa Vacanze Dolcedo.\n\nNome: ${formData.name}\nRecapito: ${formData.contactInfo}\nPeriodo: ${datesStr}\nOspiti: ${formData.guests}\n${formData.message ? `Messaggio: ${formData.message}\n` : ''}\nGrazie!`;
    } else {
      return `Hello Mario, I would like information regarding a stay at Casa Vacanze Dolcedo.\n\nName: ${formData.name}\nContact: ${formData.contactInfo}\nDates: ${datesStr}\nGuests: ${formData.guests}\n${formData.message ? `Message: ${formData.message}\n` : ''}\nThank you!`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const openWhatsAppDirect = () => {
    const text = encodeURIComponent(generateWhatsAppMessage());
    window.open(`https://wa.me/393921108243?text=${text}`, '_blank');
  };

  return (
    <section id="richiesta-soggiorno" className="py-20 md:py-28 bg-[#2A3324] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Direct Contact Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 block mb-3">
            {t.contact.label}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-[1.08] text-balance">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8">
            {t.contact.subtitle}
          </p>

          {/* Quick Direct Communication Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`tel:${OWNER_CONTACT.phoneClean}`}
              className="inline-flex items-center gap-2.5 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#242722] bg-white hover:bg-[#F4EFE6] rounded-md transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#3F4B37]" />
              <span>{t.contact.callMario} ({OWNER_CONTACT.phone})</span>
            </a>

            <button
              type="button"
              onClick={() => {
                const text = encodeURIComponent(
                  lang === 'it'
                    ? 'Buongiorno Mario, vorrei informazioni per un soggiorno a Casa Vacanze Dolcedo.'
                    : 'Hello Mario, I would like to inquire about a stay at Casa Vacanze Dolcedo.'
                );
                window.open(`https://wa.me/393921108243?text=${text}`, '_blank');
              }}
              className="inline-flex items-center gap-2.5 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 rounded-md transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>{t.contact.whatsapp}</span>
            </button>
          </div>
        </div>

        {/* Section 10: Richiesta di Soggiorno (Inquiry Form Card) */}
        <div className="bg-white text-[#242722] rounded-lg border border-[#DCD5C9] p-6 sm:p-10 shadow-lg">
          <div className="max-w-3xl mb-8">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#242722] mb-2">
              {t.contact.formTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#595B53]">
              {t.contact.formSubtitle}
            </p>
          </div>

          {isSubmitted ? (
            /* Success State */
            <div className="p-6 sm:p-8 bg-[#F7F4ED] rounded-lg border border-[#3F4B37]/30 text-center max-w-xl mx-auto">
              <div className="w-12 h-12 bg-[#3F4B37]/10 text-[#3F4B37] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-[#242722] mb-2">
                {t.contact.successTitle}
              </h4>
              <p className="text-xs sm:text-sm text-[#595B53] mb-6 leading-relaxed">
                {t.contact.successMessage}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={openWhatsAppDirect}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] rounded-md transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.contact.openWhatsAppNow}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      contactInfo: '',
                      checkIn: '',
                      checkOut: '',
                      guests: '2',
                      message: '',
                    });
                  }}
                  className="w-full sm:w-auto px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#595B53] hover:text-[#242722] border border-[#DCD5C9] rounded-md transition-colors"
                >
                  {t.contact.resetForm}
                </button>
              </div>
            </div>
          ) : (
            /* Main Inquiry Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nome */}
                <div>
                  <label
                    htmlFor="guest-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#242722] mb-1.5"
                  >
                    {t.contact.nameLabel}
                  </label>
                  <input
                    id="guest-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#DCD5C9] bg-white focus:border-[#3F4B37] focus:ring-1 focus:ring-[#3F4B37] outline-hidden text-[#242722]"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-[#BC6547] flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email / Telefono */}
                <div>
                  <label
                    htmlFor="guest-contact"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#242722] mb-1.5"
                  >
                    {t.contact.contactInfoLabel}
                  </label>
                  <input
                    id="guest-contact"
                    type="text"
                    required
                    value={formData.contactInfo}
                    onChange={(e) => {
                      setFormData({ ...formData, contactInfo: e.target.value });
                      if (errors.contactInfo) setErrors({ ...errors, contactInfo: '' });
                    }}
                    placeholder={t.contact.contactInfoPlaceholder}
                    className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#DCD5C9] bg-white focus:border-[#3F4B37] focus:ring-1 focus:ring-[#3F4B37] outline-hidden text-[#242722]"
                  />
                  {errors.contactInfo && (
                    <p className="mt-1 text-xs text-[#BC6547] flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.contactInfo}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Date & Ospiti Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label
                    htmlFor="check-in-date"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#242722] mb-1.5"
                  >
                    {t.contact.checkInLabel}
                  </label>
                  <input
                    id="check-in-date"
                    type="date"
                    value={formData.checkIn}
                    onChange={(e) => {
                      setFormData({ ...formData, checkIn: e.target.value });
                      if (errors.dates) setErrors({ ...errors, dates: '' });
                    }}
                    className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#DCD5C9] bg-white focus:border-[#3F4B37] focus:ring-1 focus:ring-[#3F4B37] outline-hidden text-[#242722]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="check-out-date"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#242722] mb-1.5"
                  >
                    {t.contact.checkOutLabel}
                  </label>
                  <input
                    id="check-out-date"
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) => {
                      setFormData({ ...formData, checkOut: e.target.value });
                      if (errors.dates) setErrors({ ...errors, dates: '' });
                    }}
                    className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#DCD5C9] bg-white focus:border-[#3F4B37] focus:ring-1 focus:ring-[#3F4B37] outline-hidden text-[#242722]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="guest-count"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#242722] mb-1.5"
                  >
                    {t.contact.guestsLabel}
                  </label>
                  <select
                    id="guest-count"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#DCD5C9] bg-white focus:border-[#3F4B37] focus:ring-1 focus:ring-[#3F4B37] outline-hidden text-[#242722]"
                  >
                    <option value="1">1 {lang === 'it' ? 'ospite' : 'guest'}</option>
                    <option value="2">2 {lang === 'it' ? 'ospiti' : 'guests'} (consigliato per coppie)</option>
                    <option value="3">3 {lang === 'it' ? 'ospiti' : 'guests'}</option>
                    <option value="4">4 {lang === 'it' ? 'ospiti' : 'guests'} (con divano letto)</option>
                    <option value="5">5 {lang === 'it' ? 'ospiti' : 'guests'}</option>
                    <option value="6">6 {lang === 'it' ? 'ospiti' : 'guests'}</option>
                  </select>
                </div>
              </div>

              {/* Dates feedback & Nights Counter */}
              {errors.dates ? (
                <p className="text-xs text-[#BC6547] flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.dates}</span>
                </p>
              ) : nights ? (
                <div className="flex items-center gap-2 text-xs font-medium text-[#3F4B37] bg-[#F7F4ED] px-3 py-1.5 rounded-md border border-[#DCD5C9] w-fit">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{t.contact.nightsCount(nights)}</span>
                </div>
              ) : null}

              {/* Optional message */}
              <div>
                <label
                  htmlFor="guest-message"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#242722] mb-1.5"
                >
                  {t.contact.messageLabel}
                </label>
                <textarea
                  id="guest-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#DCD5C9] bg-white focus:border-[#3F4B37] focus:ring-1 focus:ring-[#3F4B37] outline-hidden text-[#242722]"
                />
              </div>

              {/* Submit Action & Transparent Disclaimer */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#3F4B37] hover:bg-[#2A3324] disabled:opacity-60 rounded-md transition-colors shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{submitting ? t.contact.submitting : t.contact.submitButton}</span>
                </button>

                <p className="text-[11px] text-[#716F67] max-w-md leading-tight">
                  <ShieldCheck className="w-3.5 h-3.5 inline mr-1 text-[#3F4B37]" />
                  {t.contact.disclaimer}
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
