import React from 'react';
import { Language } from '../types';
import { DICTIONARY } from '../data/translations';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { Quote, CheckCircle } from 'lucide-react';

interface TestimonialsAndProofProps {
  lang: Language;
}

export const TestimonialsAndProof: React.FC<TestimonialsAndProofProps> = ({ lang }) => {
  const t = DICTIONARY[lang];

  return (
    <section id="testimonials" className="py-24 bg-neutral-900/40 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
            {lang === 'ar' ? 'سجل الثقة والمصداقية' : 'Verified Social Proof'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
            {t.testimonials.title}
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between hover:border-neutral-700 transition-all shadow-lg"
            >
              <div>
                {/* Metric Outcome Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800">
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold font-mono tabular-nums">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                    <span>{lang === 'ar' ? item.metricsAr : item.metricsEn}</span>
                  </div>
                  <Quote className="w-5 h-5 text-neutral-700" />
                </div>

                {/* Quote prose */}
                <p className="text-neutral-300 text-sm leading-relaxed italic mb-6">
                  "{lang === 'ar' ? item.quoteAr : item.quoteEn}"
                </p>
              </div>

              {/* Author attribution (Full name, role, organization) */}
              <div className="pt-4 border-t border-neutral-800/80">
                <h4 className="text-sm font-bold text-white">
                  {lang === 'ar' ? item.authorAr : item.authorEn}
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {lang === 'ar' ? item.titleAr : item.titleEn}
                </p>
                <div className="flex items-center gap-1 text-[11px] text-amber-500/90 font-medium mt-1">
                  <span>{lang === 'ar' ? item.entityAr : item.entityEn}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
