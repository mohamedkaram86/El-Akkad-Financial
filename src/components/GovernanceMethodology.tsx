import React from 'react';
import { Language } from '../types';
import { DICTIONARY } from '../data/translations';
import { ShieldCheck, Scale, FileCheck, Layers } from 'lucide-react';

interface GovernanceMethodologyProps {
  lang: Language;
}

export const GovernanceMethodology: React.FC<GovernanceMethodologyProps> = ({ lang }) => {
  const t = DICTIONARY[lang];

  const pillarIcons = [
    <FileCheck key="1" className="w-5 h-5 text-amber-400" />,
    <ShieldCheck key="2" className="w-5 h-5 text-amber-400" />,
    <Scale key="3" className="w-5 h-5 text-amber-400" />,
    <Layers key="4" className="w-5 h-5 text-amber-400" />
  ];

  return (
    <section id="governance" className="py-24 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
            {lang === 'ar' ? 'معايير الأمان والحوكمة' : 'Fiduciary Tenets'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
            {t.governance.title}
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            {t.governance.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.governance.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-amber-500">
                    {pillar.num}.
                  </span>
                  <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800">
                    {pillarIcons[idx]}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800/80">
                <span className="text-[11px] text-amber-400/90 font-medium">
                  {lang === 'ar' ? 'معيار مؤسسي ملزم' : 'Institutional Mandatory Rule'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Trust Banner */}
        <div className="mt-12 p-6 rounded-xl bg-neutral-900/30 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-amber-400 shrink-0" />
            <p className="text-xs sm:text-sm text-neutral-300">
              {lang === 'ar'
                ? 'تخضع جميع استشاراتنا وهياكل الصناديق لأنظمة الرقابة المصرفية والحوكمة المالية المعتمدة في دول مجلس التعاون ومصر.'
                : 'All advisory frameworks and SPV vehicles adhere strictly to GCC & North African regulatory standards and fiduciary statutes.'}
            </p>
          </div>
          <span className="text-xs font-mono text-neutral-400 shrink-0">
            {lang === 'ar' ? 'معدل الالتزام: 100%' : 'Compliance: 100%'}
          </span>
        </div>

      </div>
    </section>
  );
};
