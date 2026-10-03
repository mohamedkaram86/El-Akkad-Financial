import React from 'react';
import { Language } from '../types';
import { DICTIONARY } from '../data/translations';
import { STATS_METRICS } from '../data/mockData';
import { X, Download, Printer, CheckCircle } from 'lucide-react';
import { AnimatedLogo } from './AnimatedLogo';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;
  const t = DICTIONARY[lang];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-6 sm:p-8">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <AnimatedLogo size="sm" showText={false} />
            <div>
              <h3 className="text-sm font-bold text-white">
                {lang === 'ar' ? 'الملف التعريفي الاستشاري — العقاد جروب 2026' : 'Corporate Fact Sheet & Credentials — 2026'}
              </h3>
              <p className="text-[11px] text-neutral-400">
                {lang === 'ar' ? 'تقرير سنوي معتمد للمستثمرين والشركاء' : 'Institutional Partner Dossier'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
              title="Print"
              aria-label="Print"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Fact Sheet Presentation Paper Style */}
        <div className="bg-neutral-950 p-6 sm:p-8 rounded-xl border border-neutral-800 text-neutral-200 space-y-6">
          
          {/* Header Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
            <div>
              <h2 className="text-2xl font-bold text-white">
                {lang === 'ar' ? 'مجموعة العقاد للاستشارات والاستثمارات المالية' : 'El Akkad Financial Advisory & Investments'}
              </h2>
              <p className="text-xs text-amber-400 mt-1">
                {lang === 'ar' ? 'استشارات مالية معتمدة · حوكمة مؤسسية · تخطيط مالي' : 'Licensed Financial Advisory · Institutional Governance'}
              </p>
            </div>
            <div className="text-end">
              <span className="text-[11px] text-neutral-400 block font-mono">CODE: AQ-FS-2026</span>
              <span className="text-xs font-semibold text-emerald-400">STATUS: ACCREDITED</span>
            </div>
          </div>

          {/* Key Figures */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {STATS_METRICS.map((stat, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-neutral-900 border border-neutral-800">
                <span className="text-xl font-bold text-white font-mono">{stat.value}</span>
                <span className="text-[11px] text-neutral-400 block mt-0.5">
                  {lang === 'ar' ? stat.labelAr : stat.labelEn}
                </span>
              </div>
            ))}
          </div>

          {/* Executive Overview */}
          <div>
            <h4 className="text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
              {lang === 'ar' ? 'النبذة التنفيذية والميزة التنافسية' : 'Executive Mandate'}
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed bg-neutral-900/60 p-4 rounded-lg border border-neutral-800/80">
              {lang === 'ar'
                ? 'تأسست مجموعة العقاد كبيت خبرة استشاري ومالي نخبوي متخصص في الاستشارات المالية المؤسسية، هيكلة إصدارات الصكوك وأدوات الائتمان الخاص، استشارات محافظ الثروات متعددة الأصول، وترتيب صفقات الاستحواذ والاندماج (M&A). تقدم المجموعة استشارات وحلولاً لصفقات وأصول تتجاوز 4.8 مليار ريال بمعدل عائد تراكمي 23.8% سنوياً مع حماية كاملة لرأس المال ضد تقلبات الاقتصاد الكلي وأسعار الفائدة.'
                : 'Founded as a premier financial advisory and institutional investment house, El Akkad Group bridges private capital and market opportunities across corporate debt structuring, private equity platform roll-ups, and multi-asset wealth management. The firm advises on over 4.8B SAR in aggregate assets with a consistent 23.8% realized IRR and robust downside risk hedging.'}
            </p>
          </div>

          {/* Strategic Advisory Tracks */}
          <div>
            <h4 className="text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
              {lang === 'ar' ? 'المسارات الاستشارية المعتمدة' : 'Accredited Advisory Tracks'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
              <div className="flex items-center gap-2 p-2.5 rounded bg-neutral-900 border border-neutral-800/60">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{t.footer.track1}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded bg-neutral-900 border border-neutral-800/60">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{t.footer.track2}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded bg-neutral-900 border border-neutral-800/60">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{t.footer.track3}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded bg-neutral-900 border border-neutral-800/60">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{t.footer.track4}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-neutral-500">
            {lang === 'ar' ? 'نسخة معتمدة ومحدثة للربع الأول 2026' : 'Official Q1 2026 Edition'}
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                alert(lang === 'ar' ? 'تم تنزيل الملف التعريفي بنجاح (PDF)' : 'Fact Sheet downloaded successfully (PDF)');
              }}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{lang === 'ar' ? 'تحميل كملف PDF' : 'Download PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-neutral-400 hover:text-white bg-neutral-800 rounded-lg transition-colors"
            >
              {t.consultation.closeBtn}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
