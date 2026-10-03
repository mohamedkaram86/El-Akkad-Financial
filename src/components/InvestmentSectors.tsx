import React from 'react';
import { Language } from '../types';
import { DICTIONARY } from '../data/translations';
import { financialAnalyticsImg, boardroomImg, infrastructureImg } from '../data/mockData';
import { TrendingUp, BarChart3, CheckCircle2, ShieldCheck, LineChart, Landmark } from 'lucide-react';

interface InvestmentSectorsProps {
  lang: Language;
  onOpenConsultation: () => void;
}

export const InvestmentSectors: React.FC<InvestmentSectorsProps> = ({ lang, onOpenConsultation }) => {
  const t = DICTIONARY[lang];

  return (
    <section id="sectors" className="py-24 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-800">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
              {lang === 'ar' ? 'القطاعات الاستشارية والاستثمارية' : 'Core Financial Disciplines'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
              {t.sectors.title}
            </h2>
            <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
              {t.sectors.subtitle}
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="mt-6 md:mt-0 text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors cursor-pointer self-start md:self-auto"
          >
            <span>{lang === 'ar' ? 'طلب استشارة مالية مخصصة' : 'Request Advisory Proposal'}</span>
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Financial Advisory & Sukuk (Span 7) */}
          <div className="md:col-span-7 group rounded-2xl bg-neutral-900/60 border border-neutral-800 overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-all">
            <div className="relative h-64 sm:h-72 overflow-hidden">
              <img
                src={financialAnalyticsImg}
                alt="El Akkad Financial Advisory and Analytics"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
              <div className="absolute top-4 start-4 flex items-center gap-2 bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-700/60 text-xs text-white font-medium">
                <Landmark className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'ar' ? 'الاستشارات المالية وهيكلة الصفقات' : 'Corporate Deal Structuring'}</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-amber-500 font-bold tracking-wider">
                  01. {lang === 'ar' ? 'الركيزة الأولى' : 'Pillar 01'}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-3">
                  {t.sectors.cards[0].title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {t.sectors.cards[0].desc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-neutral-800/80">
                {t.sectors.cards[0].features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bento Card 2: Private Equity (Span 5) */}
          <div className="md:col-span-5 group rounded-2xl bg-neutral-900/60 border border-neutral-800 overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-all">
            <div className="relative h-48 sm:h-52 overflow-hidden">
              <img
                src={boardroomImg}
                alt="El Akkad Private Equity Boardroom"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
              <div className="absolute top-4 start-4 flex items-center gap-2 bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-700/60 text-xs text-white font-medium">
                <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'ar' ? 'الملكية الخاصة والاستحواذ' : 'Private Equity & M&A'}</span>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-amber-500 font-bold tracking-wider">
                  02. {lang === 'ar' ? 'الركيزة الثانية' : 'Pillar 02'}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1 mb-3">
                  {t.sectors.cards[1].title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {t.sectors.cards[1].desc}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-neutral-800/80">
                {t.sectors.cards[1].features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bento Card 3: Multi-Asset Wealth & Treasury (Span 5) */}
          <div className="md:col-span-5 group rounded-2xl bg-neutral-900/60 border border-neutral-800 overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-all">
            <div className="relative h-48 sm:h-52 overflow-hidden">
              <img
                src={infrastructureImg}
                alt="Green Sukuk and Infrastructure"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
              <div className="absolute top-4 start-4 flex items-center gap-2 bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-700/60 text-xs text-white font-medium">
                <LineChart className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'ar' ? 'استشارات الثروات والمحافظ' : 'Wealth & Portfolio Advisory'}</span>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-amber-500 font-bold tracking-wider">
                  03. {lang === 'ar' ? 'الركيزة الثالثة' : 'Pillar 03'}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1 mb-3">
                  {t.sectors.cards[2].title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {t.sectors.cards[2].desc}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-neutral-800/80">
                {t.sectors.cards[2].features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bento Card 4: Certified Feasibility & Valuation (Span 7) */}
          <div className="md:col-span-7 group rounded-2xl bg-neutral-900/60 border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-amber-500 font-bold tracking-wider">
                  04. {lang === 'ar' ? 'الركيزة الرابعة' : 'Pillar 04'}
                </span>
                <div className="p-2.5 rounded-xl bg-neutral-800/80 text-amber-400 border border-neutral-700/50">
                  <BarChart3 className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {t.sectors.cards[3].title}
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                {t.sectors.cards[3].desc}
              </p>

              {/* Advisory Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-4 border-y border-neutral-800">
                {t.sectors.cards[3].features.map((feat, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/60 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-300 font-medium leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-neutral-800/80">
              <span className="text-xs text-neutral-400">
                {lang === 'ar' ? 'معتمدون رسمياً لدى كبرى البيوت الاستثمارية وهيئات أسواق المال والبنوك' : 'Accredited advisory partners to premier investment houses and central capital markets'}
              </span>
              <button
                onClick={onOpenConsultation}
                className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                {lang === 'ar' ? 'طلب فحص مالي وتقييم منشأة' : 'Request Valuation & DD'}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
