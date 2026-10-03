import React, { useState } from 'react';
import { Language, DealItem, InvestmentSector } from '../types';
import { DICTIONARY } from '../data/translations';
import { DEALS_DATA } from '../data/mockData';
import { TrendingUp, ArrowUpRight, X, MapPin, Clock, Landmark, LineChart } from 'lucide-react';

interface PortfolioDealsProps {
  lang: Language;
  onOpenConsultation: () => void;
}

export const PortfolioDeals: React.FC<PortfolioDealsProps> = ({ lang, onOpenConsultation }) => {
  const t = DICTIONARY[lang];
  const [activeFilter, setActiveFilter] = useState<'all' | InvestmentSector>('all');
  const [selectedDeal, setSelectedDeal] = useState<DealItem | null>(null);

  const filteredDeals = activeFilter === 'all'
    ? DEALS_DATA
    : DEALS_DATA.filter((d) => d.sector === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-neutral-800">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
              {lang === 'ar' ? 'سجل الصفقات والاستشارات الناجحة' : 'Proven Financial Track Record'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
              {t.portfolio.title}
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base">
              {t.portfolio.subtitle}
            </p>
          </div>

          {/* Interactive Filter Tabs (functional segmented buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-900 rounded-xl border border-neutral-800 self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-amber-400 text-neutral-950 font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.portfolio.allTab}
            </button>
            <button
              onClick={() => setActiveFilter('capital-markets')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'capital-markets'
                  ? 'bg-amber-400 text-neutral-950 font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.portfolio.realEstateTab}
            </button>
            <button
              onClick={() => setActiveFilter('private-equity')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'private-equity'
                  ? 'bg-amber-400 text-neutral-950 font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.portfolio.peTab}
            </button>
            <button
              onClick={() => setActiveFilter('asset-management')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'asset-management'
                  ? 'bg-amber-400 text-neutral-950 font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.portfolio.infraTab}
            </button>
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredDeals.map((deal) => (
            <div
              key={deal.id}
              className="group rounded-2xl bg-neutral-900/60 border border-neutral-800 overflow-hidden flex flex-col hover:border-neutral-700 transition-all shadow-lg"
            >
              {/* Media container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={deal.image}
                  alt={lang === 'ar' ? deal.titleAr : deal.titleEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                
                {/* Sector & Location Tag (Clean inline) */}
                <div className="absolute top-4 start-4 flex items-center gap-2 bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-700/60 text-xs text-white">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'ar' ? deal.locationAr : deal.locationEn}</span>
                </div>

                {/* IRR Highlight */}
                <div className="absolute bottom-4 end-4 bg-neutral-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-amber-500/40 text-end">
                  <span className="text-[10px] text-neutral-400 block">{t.portfolio.irrLabel}</span>
                  <span className="text-base font-extrabold text-amber-400 font-mono tabular-nums">{deal.irr}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Unboxed Metadata Line with typographic separators */}
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                    <span className="text-amber-400 font-semibold">{lang === 'ar' ? deal.sectorLabelAr : deal.sectorLabelEn}</span>
                    <span aria-hidden="true">·</span>
                    <span>{deal.capitalSize}</span>
                    <span aria-hidden="true">·</span>
                    <span>{deal.holdingPeriod}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {lang === 'ar' ? deal.titleAr : deal.titleEn}
                  </h3>

                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {lang === 'ar' ? deal.highlightAr : deal.highlightEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">{lang === 'ar' ? deal.statusAr : deal.statusEn}</span>
                  </div>

                  <button
                    onClick={() => setSelectedDeal(deal)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    <span>{t.portfolio.viewDetails}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Deal Modal */}
      {selectedDeal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/85 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setSelectedDeal(null)}
              className="absolute top-5 end-5 p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold mb-2">
                <span>{lang === 'ar' ? selectedDeal.sectorLabelAr : selectedDeal.sectorLabelEn}</span>
                <span aria-hidden="true">·</span>
                <span>{lang === 'ar' ? selectedDeal.locationAr : selectedDeal.locationEn}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {lang === 'ar' ? selectedDeal.titleAr : selectedDeal.titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {lang === 'ar' ? selectedDeal.highlightAr : selectedDeal.highlightEn}
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-neutral-950 border border-neutral-800">
              {selectedDeal.metrics.map((m, idx) => (
                <div key={idx} className="p-2">
                  <span className="text-[11px] text-neutral-400 block mb-0.5">
                    {lang === 'ar' ? m.labelAr : m.labelEn}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-amber-400 font-mono tabular-nums">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Thesis Section */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                {lang === 'ar' ? 'الأطروحة والهيكلة المالية للصفقة' : 'Financial Thesis & Value Creation'}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed bg-neutral-950/60 p-4 rounded-xl border border-neutral-800">
                {lang === 'ar' ? selectedDeal.thesisAr : selectedDeal.thesisEn}
              </p>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-neutral-400">
                {lang === 'ar' ? 'البيانات المالية ومذكرات الاكتتاب متاحة للشركاء المؤهلين' : 'Confidential information memorandum available for accredited partners'}
              </span>
              <button
                onClick={() => {
                  setSelectedDeal(null);
                  onOpenConsultation();
                }}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                {lang === 'ar' ? 'طلب استشارة لصفقة مماثلة' : 'Inquire on Similar Financial Mandates'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
