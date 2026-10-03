/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { MarketTicker } from './components/MarketTicker';
import { Hero } from './components/Hero';
import { InvestmentSectors } from './components/InvestmentSectors';
import { InvestmentCalculator } from './components/InvestmentCalculator';
import { PortfolioDeals } from './components/PortfolioDeals';
import { GovernanceMethodology } from './components/GovernanceMethodology';
import { TestimonialsAndProof } from './components/TestimonialsAndProof';
import { ConsultationSection } from './components/ConsultationSection';
import { BrochureModal } from './components/BrochureModal';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  
  // Prefill data for the consultation section
  const [consultationPrefill, setConsultationPrefill] = useState<{
    capital?: number;
    years?: number;
    strategy?: string;
  }>({});

  // Sync document direction and language attributes
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const scrollToConsultation = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlanFromCalculator = (capital: number, years: number, strategy: string) => {
    setConsultationPrefill({
      capital,
      years,
      strategy
    });
    scrollToConsultation();
  };

  return (
    <div className={`min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans ${lang === 'ar' ? 'font-arabic' : ''}`}>
      {/* Top Bar Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenConsultation={scrollToConsultation}
      />

      {/* Live Financial Stock Exchange Ticker Tape */}
      <MarketTicker lang={lang} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenConsultation={scrollToConsultation}
          onOpenBrochure={() => setIsBrochureOpen(true)}
        />

        {/* Strategic Investment Sectors Bento */}
        <InvestmentSectors
          lang={lang}
          onOpenConsultation={scrollToConsultation}
        />

        {/* Proven Track Record & Filterable Deals */}
        <PortfolioDeals
          lang={lang}
          onOpenConsultation={scrollToConsultation}
        />

        {/* Interactive Investment Yield Calculator */}
        <InvestmentCalculator
          lang={lang}
          onSelectPlan={handlePlanFromCalculator}
        />

        {/* Fiduciary Governance & 4 Pillars */}
        <GovernanceMethodology
          lang={lang}
        />

        {/* Testimonials & Verified Proof */}
        <TestimonialsAndProof
          lang={lang}
        />

        {/* Direct Investor Onboarding & Consultation Form */}
        <ConsultationSection
          lang={lang}
          prefill={consultationPrefill}
        />
      </main>

      {/* Corporate Fact Sheet Modal */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        lang={lang}
      />

      {/* Structured Footer */}
      <Footer
        lang={lang}
        onOpenConsultation={scrollToConsultation}
      />
    </div>
  );
}
