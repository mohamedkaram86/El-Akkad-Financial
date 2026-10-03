import React, { useState } from 'react';
import { Language } from '../types';
import { DICTIONARY } from '../data/translations';
import { Globe, Menu, X, ArrowUpRight } from 'lucide-react';
import { AnimatedLogo } from './AnimatedLogo';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = DICTIONARY[lang];

  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Single Brand Wordmark Element with Animated Emblem */}
        <a 
          href="#" 
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
          aria-label={lang === 'ar' ? 'الصفحة الرئيسية لمجموعة العقاد' : 'El Akkad Group Home'}
        >
          <AnimatedLogo size="md" lang={lang} />
        </a>

        {/* Zone 2: Navigation Links (Clean text, single line) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
          <a href="#sectors" className="hover:text-amber-400 transition-colors whitespace-nowrap">
            {t.nav.sectors}
          </a>
          <a href="#portfolio" className="hover:text-amber-400 transition-colors whitespace-nowrap">
            {t.nav.portfolio}
          </a>
          <a href="#calculator" className="hover:text-amber-400 transition-colors whitespace-nowrap">
            {t.nav.calculator}
          </a>
          <a href="#governance" className="hover:text-amber-400 transition-colors whitespace-nowrap">
            {t.nav.governance}
          </a>
          <a href="#testimonials" className="hover:text-amber-400 transition-colors whitespace-nowrap">
            {t.nav.testimonials}
          </a>
        </nav>

        {/* Zone 3: Primary Actions (Consultation button + Language switch) */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-semibold">{lang === 'ar' ? 'English' : 'العربية'}</span>
          </button>

          <button
            onClick={onOpenConsultation}
            className="group flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-md shadow-amber-950/30 transition-all transform active:scale-98 cursor-pointer whitespace-nowrap"
          >
            <span>{t.nav.contact}</span>
            <ArrowUpRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${lang === 'ar' ? 'rotate-[-90deg]' : ''}`} />
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onToggleLang}
            className="p-2 text-xs font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 rounded-md"
          >
            {lang === 'ar' ? 'EN' : 'عربي'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white rounded-md bg-neutral-900 border border-neutral-800"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-neutral-800 bg-neutral-950 px-4 pt-2 pb-6 space-y-3">
          <a
            href="#sectors"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-300 hover:text-amber-400"
          >
            {t.nav.sectors}
          </a>
          <a
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-300 hover:text-amber-400"
          >
            {t.nav.portfolio}
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-300 hover:text-amber-400"
          >
            {t.nav.calculator}
          </a>
          <a
            href="#governance"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-300 hover:text-amber-400"
          >
            {t.nav.governance}
          </a>
          <a
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-300 hover:text-amber-400"
          >
            {t.nav.testimonials}
          </a>

          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full text-center py-3 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg"
            >
              {t.nav.contact}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
