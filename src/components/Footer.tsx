import React from 'react';
import { Language } from '../types';
import { DICTIONARY } from '../data/translations';
import { Mail, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { AnimatedLogo } from './AnimatedLogo';

interface FooterProps {
  lang: Language;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenConsultation }) => {
  const t = DICTIONARY[lang];

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand & Mission (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <AnimatedLogo size="lg" lang={lang} />

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              {t.footer.description}
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold pt-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>{lang === 'ar' ? 'حوكمة استثمارية ومعايير رقابة مصرفية دولية' : 'Institutional Governance & International Fiduciary Standards'}</span>
            </div>
          </div>

          {/* Quick Nav (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#sectors" className="hover:text-amber-400 transition-colors">
                  {t.nav.sectors}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-amber-400 transition-colors">
                  {t.nav.portfolio}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">
                  {t.nav.calculator}
                </a>
              </li>
              <li>
                <a href="#governance" className="hover:text-amber-400 transition-colors">
                  {t.nav.governance}
                </a>
              </li>
            </ul>
          </div>

          {/* Advisory Tracks (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.advisoryTracksTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{t.footer.track1}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{t.footer.track2}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{t.footer.track3}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{t.footer.track4}</span>
              </li>
            </ul>
          </div>

          {/* Direct Investor Desk (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {lang === 'ar' ? 'التواصل والاستشارة الرقمية' : 'Digital Advisory Desk'}
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href="mailto:mohamed.karam@el-akkad.org"
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-mono">mohamed.karam@el-akkad.org</span>
              </a>
              <a
                href="tel:+966114889000"
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>+966 11 488 9000</span>
              </a>
              <button
                onClick={onOpenConsultation}
                className="mt-3 w-full py-2.5 px-3 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
              >
                {lang === 'ar' ? 'طلب جلسة استشارية خاصة' : 'Request Private Session'}
              </button>
            </div>
          </div>

        </div>

        {/* Regulatory Disclosure & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p className="max-w-2xl text-center md:text-start leading-relaxed">
            {t.footer.regulatoryNotice}
          </p>
          <p className="shrink-0 text-center md:text-end">
            {t.footer.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
};

