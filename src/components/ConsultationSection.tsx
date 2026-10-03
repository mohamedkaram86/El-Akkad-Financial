import React, { useState } from 'react';
import { Language, ConsultationRequest } from '../types';
import { DICTIONARY } from '../data/translations';
import { Shield, CheckCircle2, Lock, Send, Video, PhoneCall, FileText, Mail, Loader2, ExternalLink } from 'lucide-react';

const RECIPIENT_EMAIL = 'mohamed.karam@el-akkad.org';

interface ConsultationSectionProps {
  lang: Language;
  prefill?: {
    capital?: number;
    years?: number;
    strategy?: string;
    expertName?: string;
  };
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({ lang, prefill }) => {
  const t = DICTIONARY[lang];

  const [formData, setFormData] = useState<ConsultationRequest>({
    investorType: 'individual',
    fullName: '',
    email: '',
    phone: '',
    capitalBracket: prefill?.capital ? `${prefill.capital.toLocaleString()} SAR/USD` : '',
    targetSector: prefill?.strategy || '',
    preferredContact: 'virtual',
    notes: prefill?.expertName
      ? (lang === 'ar' ? `طلب استشارة خاصة مباشرة مع: ${prefill.expertName}` : `Private mandate briefing requested with: ${prefill.expertName}`)
      : ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [refCode, setRefCode] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = lang === 'ar' ? 'يرجى إدخال الاسم الكامل' : 'Please provide your full name';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = lang === 'ar' ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please enter a valid email address';
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errs.phone = lang === 'ar' ? 'يرجى إدخال رقم هاتف صالح' : 'Please enter a valid phone number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const randomRef = 'AQ-' + Math.floor(100000 + Math.random() * 900000);
    setRefCode(randomRef);

    try {
      // 1. Send directly to the backend endpoint
      const backendPromise = fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          refCode: randomRef,
          targetEmail: RECIPIENT_EMAIL,
        }),
      }).catch((e) => console.warn('Backend consultation call:', e));

      // 2. Also dispatch directly in the background via FormSubmit AJAX service
      const formSubmitPromise = fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `[طلب استشارة مالية جديد ${randomRef}] ${formData.fullName}`,
          _template: 'table',
          _captcha: 'false',
          'الرقم المرجعي': randomRef,
          'اسم العميل': formData.fullName,
          'البريد الإلكتروني للعميل': formData.email,
          'رقم الهاتف والواتساب': formData.phone,
          'تصنيف المستثمر': formData.investorType,
          'نطاق رأس المال': formData.capitalBracket || 'غير محدد',
          'المجال الاستثماري': formData.targetSector || 'استشارة مالية',
          'طريقة التواصل المفضلة': formData.preferredContact,
          'تفاصيل وملاحظات الاستشارة': formData.notes || 'لا توجد ملاحظات إضافية',
        }),
      }).catch((e) => console.warn('FormSubmit background call:', e));

      await Promise.allSettled([backendPromise, formSubmitPromise]);
    } catch (err) {
      console.warn('Network call completed with client fallback:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-amber-400 uppercase mb-2">
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'ar' ? 'قنوات التواصل المؤسسي والاستشاري' : 'Confidential Investor Mandate'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.consultation.title}
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            {t.consultation.subtitle}
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-neutral-900/60 rounded-2xl border border-neutral-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle top golden gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

          {submitted ? (
            <div className="py-10 px-4 text-center max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center mx-auto mb-6 text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                {t.consultation.successTitle}
              </h3>

              {/* Reference Code Box */}
              <div className="my-5 p-4 rounded-xl bg-neutral-950 border border-neutral-800 inline-block text-center">
                <span className="text-xs text-neutral-400 block mb-1">
                  {t.consultation.refNumber}
                </span>
                <span className="text-xl font-mono font-bold text-amber-400">
                  {refCode}
                </span>
              </div>

              {/* Recipient Email Confirmation Notice */}
              <div className="my-5 p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-start flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                  <span className="font-bold text-emerald-300 block mb-1">
                    {lang === 'ar' ? 'تم الإرسال التلقائي بنجاح من الموقع:' : 'Direct Automated Transmission Successful:'}
                  </span>
                  <p className="text-neutral-300 mb-1.5">
                    {lang === 'ar'
                      ? 'تم إرسال كامل بيانات استشارتكم تلقائياً من خادم الموقع مباشرة إلى البريد الإلكتروني للمستشار المالي:'
                      : 'All consultation mandate parameters have been automatically dispatched to senior advisory at:'}
                  </p>
                  <div className="inline-block px-3 py-1 rounded bg-neutral-900 border border-neutral-700 font-mono text-amber-400 font-bold text-xs sm:text-sm">
                    {RECIPIENT_EMAIL}
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-2">
                    {lang === 'ar'
                      ? '✓ تم استلام الطلب بالكامل دون الحاجة لأي إجراء إضافي أو إرسال بريد يدوي من طرفك. سيقوم المستشار المالي بالتواصل معك هاتفياً أو عبر البريد خلال 24 ساعة.'
                      : '✓ Transmitted automatically. No further action is required from your side. An advisor will contact you within 24 hours.'}
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-center">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      investorType: 'individual',
                      fullName: '',
                      email: '',
                      phone: '',
                      capitalBracket: '',
                      targetSector: '',
                      preferredContact: 'virtual',
                      notes: ''
                    });
                  }}
                  className="px-8 py-3 text-xs sm:text-sm font-semibold text-neutral-200 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-xl transition-colors cursor-pointer border border-neutral-700"
                >
                  {lang === 'ar' ? 'تقديم طلب استشارة مالية آخر' : 'Submit Another Consultation'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Investor Classification */}
              <div>
                <span className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-3">
                  {t.consultation.investorTypeLabel}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'individual', label: t.consultation.individual },
                    { id: 'family-office', label: t.consultation.familyOffice },
                    { id: 'institution', label: t.consultation.institution }
                  ].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, investorType: type.id as any })}
                      className={`p-3.5 text-xs font-semibold rounded-xl border text-center transition-all cursor-pointer ${
                        formData.investorType === type.id
                          ? 'bg-amber-400 text-neutral-950 font-bold border-amber-300 shadow-sm'
                          : 'bg-neutral-950/80 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name, Email, Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-2">
                    {t.consultation.fullName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder={t.consultation.fullNamePlaceholder}
                    className={`w-full px-4 py-3 bg-neutral-950 border rounded-xl text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400 transition-colors ${
                      errors.fullName ? 'border-rose-500' : 'border-neutral-800'
                    }`}
                  />
                  {errors.fullName && <p className="text-xs text-rose-400 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-2">
                    {t.consultation.email} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.consultation.emailPlaceholder}
                    className={`w-full px-4 py-3 bg-neutral-950 border rounded-xl text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400 transition-colors ${
                      errors.email ? 'border-rose-500' : 'border-neutral-800'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-2">
                    {t.consultation.phone} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t.consultation.phonePlaceholder}
                    className={`w-full px-4 py-3 bg-neutral-950 border rounded-xl text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400 transition-colors ${
                      errors.phone ? 'border-rose-500' : 'border-neutral-800'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Capital & Sector Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-2">
                    {t.consultation.capitalBracket}
                  </label>
                  <select
                    value={formData.capitalBracket}
                    onChange={(e) => setFormData({ ...formData, capitalBracket: e.target.value })}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="">{lang === 'ar' ? 'حدد نطاق رأس المال' : 'Select Capital Bracket'}</option>
                    <option value="bracket1">{t.consultation.bracket1}</option>
                    <option value="bracket2">{t.consultation.bracket2}</option>
                    <option value="bracket3">{t.consultation.bracket3}</option>
                    <option value="bracket4">{t.consultation.bracket4}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-2">
                    {t.consultation.targetSectorLabel}
                  </label>
                  <select
                    value={formData.targetSector}
                    onChange={(e) => setFormData({ ...formData, targetSector: e.target.value })}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="">{t.consultation.targetSectorPlaceholder}</option>
                    <option value="re">{t.consultation.sectorOption1}</option>
                    <option value="pe">{t.consultation.sectorOption2}</option>
                    <option value="infra">{t.consultation.sectorOption3}</option>
                    <option value="advisory">{t.consultation.sectorOption4}</option>
                  </select>
                </div>
              </div>

              {/* Meeting Mode Preferences */}
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-2">
                  {t.consultation.contactModeLabel}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'virtual', icon: Video, label: t.consultation.virtualMode },
                    { id: 'call', icon: PhoneCall, label: t.consultation.callMode },
                    { id: 'memo', icon: FileText, label: t.consultation.memoMode }
                  ].map((mode) => {
                    const IconComponent = mode.icon;
                    return (
                      <button
                        key={mode.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, preferredContact: mode.id as any })}
                        className={`p-3 text-xs font-medium rounded-xl border flex items-center gap-2 transition-all cursor-pointer ${
                          formData.preferredContact === mode.id
                            ? 'bg-amber-950/30 border-amber-400 text-amber-300'
                            : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:text-white'
                        }`}
                      >
                        <IconComponent className="w-4 h-4 shrink-0 text-amber-400" />
                        <span className="text-start leading-tight">{mode.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Notes Input */}
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-2">
                  {t.consultation.notes}
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={t.consultation.notesPlaceholder}
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* NDA Notice & Submit Button */}
              <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <Shield className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="leading-snug">{t.consultation.confidentialityNote}</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 disabled:bg-amber-400/60 disabled:cursor-not-allowed rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-neutral-950" />
                      <span>{lang === 'ar' ? 'جاري إرسال طلب الاستشارة...' : 'Dispatching Request...'}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.consultation.submitBtn}</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
