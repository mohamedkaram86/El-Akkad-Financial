import React from 'react';
import { Language } from '../types';
import { DICTIONARY } from '../data/translations';
import { STATS_METRICS, heroTowerImg } from '../data/mockData';
import { ArrowLeft, ArrowRight, ShieldCheck, FileText, ChevronDown } from 'lucide-react';
import { AnimatedLogo } from './AnimatedLogo';

interface HeroProps {
  lang: Language;
  onOpenConsultation: () => void;
  onOpenBrochure: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenConsultation, onOpenBrochure }) => {
  const t = DICTIONARY[lang];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-neutral-800">
      {/* Background Architectural Visual with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroTowerImg}
          alt="El Akkad Investment Group Headquarters Tower"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:transition-transform duration-1000"
        />
        {/* Editorial Multi-Stop Scrim for WCAG AA compliance */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/50" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-neutral-950/60 to-neutral-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-center text-center">
        
        {/* Floating Animated Emblem Feature with Live Design Switcher */}
        <div className="mb-6 flex flex-col items-center">
          <AnimatedLogo size="lg" showText={false} />
          <span className="text-[11px] text-neutral-500 hover:text-amber-400 cursor-pointer mt-2.5 font-mono transition-colors">
            {lang === 'ar' ? '✦ انقر لتجربة التصميم البديل للشعار' : '✦ Click emblem to toggle alternative design'}
          </span>
        </div>

        {/* Natural Editorial Tagline (Zero-Pill discipline) */}
        <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-amber-400 mb-6 uppercase">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>{t.hero.kicker}</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span className="text-neutral-300 font-normal">
            {lang === 'ar' ? 'استشارات مالية معتمدة · حوكمة مؤسسية · تخطيط استثماري' : 'Certified Financial Advisory · Institutional Governance'}
          </span>
        </div>

        {/* Balanced Headline (no isolated single words) */}
        <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.2] text-balance mb-6">
          {t.hero.headline}
        </h1>

        {/* Concise Value Subheadline */}
        <p className="max-w-2xl text-base sm:text-lg text-neutral-300 font-light leading-relaxed mb-10 text-balance">
          {t.hero.subheadline}
        </p>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xl shadow-amber-950/40 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>{t.hero.ctaPrimary}</span>
            {lang === 'ar' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </button>

          <a
            href="#portfolio"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 text-sm font-medium text-neutral-200 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 rounded-lg transition-colors whitespace-nowrap"
          >
            <span>{t.hero.ctaSecondary}</span>
          </a>

          <button
            onClick={onOpenBrochure}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-amber-400/90 hover:text-amber-300 bg-amber-950/20 hover:bg-amber-950/40 border border-amber-500/30 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
          >
            <FileText className="w-4 h-4" />
            <span>{t.hero.ctaBrochure}</span>
          </button>
        </div>

        {/* Quantitative Rigor Stats Row */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-neutral-800/80">
          {STATS_METRICS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center p-3 sm:p-4 rounded-lg bg-neutral-900/40 border border-neutral-800/50">
              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="text-2xl sm:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs text-amber-400 font-semibold">
                  {lang === 'ar' ? stat.unitAr : stat.unitEn}
                </span>
              </div>
              <span className="text-xs sm:text-sm text-neutral-400 font-medium text-center">
                {lang === 'ar' ? stat.labelAr : stat.labelEn}
              </span>
            </div>
          ))}
        </div>

        {/* Down Indicator */}
        <div className="mt-12 text-neutral-500 flex flex-col items-center">
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
