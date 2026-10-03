import React, { useState, useId } from 'react';
import { Language } from '../types';
import { DICTIONARY } from '../data/translations';
import { Calculator, ArrowRight, ArrowLeft, PieChart, Landmark, TrendingUp } from 'lucide-react';

interface InvestmentCalculatorProps {
  lang: Language;
  onSelectPlan: (capital: number, years: number, strategy: string) => void;
}

export const InvestmentCalculator: React.FC<InvestmentCalculatorProps> = ({ lang, onSelectPlan }) => {
  const t = DICTIONARY[lang];
  const capitalInputId = useId();
  const horizonInputId = useId();
  
  // State
  const [capital, setCapital] = useState<number>(1000000); // 1,000,000 default
  const [currency, setCurrency] = useState<'SAR' | 'USD' | 'EGP'>('SAR');
  const [horizon, setHorizon] = useState<number>(5); // 5 years
  const [selectedStrategyId, setSelectedStrategyId] = useState<string>('growth');

  // Rates for strategies
  const strategyRates: Record<string, number> = {
    balanced: 0.154,
    growth: 0.242,
    preservation: 0.118
  };

  const currentRate = strategyRates[selectedStrategyId] || 0.154;

  // Compounding calculation: A = P * (1 + r)^t
  const futureValue = capital * Math.pow(1 + currentRate, horizon);
  const totalProfit = futureValue - capital;
  const annualDividend = capital * (selectedStrategyId === 'balanced' ? 0.11 : selectedStrategyId === 'preservation' ? 0.095 : 0.06);

  // Asset allocations per strategy (Purely financial & capital market instruments)
  const allocations: Record<string, { credit: number; pe: number; equity: number; hedge: number }> = {
    balanced: { credit: 45, pe: 25, equity: 20, hedge: 10 },
    growth: { credit: 20, pe: 55, equity: 20, hedge: 5 },
    preservation: { credit: 55, pe: 10, equity: 20, hedge: 15 }
  };

  const currentAlloc = allocations[selectedStrategyId];

  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat(lang === 'ar' ? 'ar-SA' : 'en-US', {
      maximumFractionDigits: 0
    }).format(Math.round(amount));
  };

  const presetAmounts = [
    { label: '500K', value: 500000 },
    { label: '1M', value: 1000000 },
    { label: '2.5M', value: 2500000 },
    { label: '5M', value: 5000000 },
    { label: '10M', value: 10000000 }
  ];

  return (
    <section id="calculator" className="py-24 bg-neutral-900/50 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-amber-400 uppercase mb-2">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>{lang === 'ar' ? 'نمذجة العوائد والمحافظ المالية' : 'Financial Portfolio Modeler'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.calculator.title}
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 space-y-8">
            
            {/* Currency Selector */}
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800/80">
              <span className="text-xs font-semibold text-neutral-300">
                {lang === 'ar' ? 'عملة التقدير الاستثماري:' : 'Base Currency:'}
              </span>
              <div className="flex items-center gap-1 p-1 bg-neutral-900 rounded-lg border border-neutral-800">
                {(['SAR', 'USD', 'EGP'] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                      currency === curr
                        ? 'bg-amber-400 text-neutral-950 shadow-sm'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            {/* Capital Input & Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label htmlFor={capitalInputId} className="text-sm font-semibold text-white">
                  {t.calculator.capitalLabel}
                </label>
                <div className="flex items-baseline gap-1 text-lg font-bold text-amber-400 font-mono tabular-nums">
                  <span>{formatMoney(capital)}</span>
                  <span className="text-xs text-neutral-400">{currency}</span>
                </div>
              </div>

              <input
                id={capitalInputId}
                aria-label={t.calculator.capitalLabel}
                type="range"
                min={200000}
                max={20000000}
                step={100000}
                value={capital}
                onChange={(e) => setCapital(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />

              {/* Preset buttons */}
              <div className="flex flex-wrap gap-2 mt-3">
                {presetAmounts.map((p) => (
                  <button
                    key={p.label}
                    onClick={() => setCapital(p.value)}
                    className={`px-2.5 py-1 text-xs font-medium rounded border transition-colors cursor-pointer ${
                      capital === p.value
                        ? 'bg-neutral-800 border-amber-400 text-amber-400'
                        : 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    {p.label} {currency}
                  </button>
                ))}
              </div>
            </div>

            {/* Horizon Input & Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label htmlFor={horizonInputId} className="text-sm font-semibold text-white">
                  {t.calculator.horizonLabel}
                </label>
                <span className="text-lg font-bold text-amber-400 font-mono tabular-nums">
                  {horizon} {t.calculator.years}
                </span>
              </div>

              <input
                id={horizonInputId}
                aria-label={t.calculator.horizonLabel}
                type="range"
                min={1}
                max={10}
                step={1}
                value={horizon}
                onChange={(e) => setHorizon(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-xs text-neutral-500 mt-1 font-mono">
                <span>1 {t.calculator.years}</span>
                <span>5 {t.calculator.years}</span>
                <span>10 {t.calculator.years}</span>
              </div>
            </div>

            {/* Strategy Selection Cards */}
            <div>
              <span className="block text-sm font-semibold text-white mb-3">
                {t.calculator.strategyLabel}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {t.calculator.strategies.map((strat) => (
                  <button
                    key={strat.id}
                    onClick={() => setSelectedStrategyId(strat.id)}
                    className={`p-4 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between ${
                      selectedStrategyId === strat.id
                        ? 'bg-amber-950/20 border-amber-400/80 ring-1 ring-amber-400/40'
                        : 'bg-neutral-900/70 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-white leading-tight">
                          {strat.name}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-400 leading-snug line-clamp-2 mt-1">
                        {strat.desc}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-neutral-800 flex items-center justify-between">
                      <span className="text-[10px] text-neutral-400">{lang === 'ar' ? 'العائد المستهدف' : 'Target IRR'}</span>
                      <span className="text-xs font-mono font-bold text-amber-400">{strat.rate}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Summary Column (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 sm:p-8 rounded-2xl border border-amber-500/30 flex flex-col justify-between shadow-2xl shadow-neutral-950/80">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <span className="text-xs font-mono font-semibold tracking-wider text-amber-400 uppercase">
                  {t.calculator.resultsTitle}
                </span>
                <span className="text-xs text-neutral-400 font-mono">
                  {horizon} {t.calculator.years} @ {(currentRate * 100).toFixed(1)}% IRR
                </span>
              </div>

              {/* Main Projected Terminal Value */}
              <div className="my-6 p-5 rounded-xl bg-neutral-950/80 border border-neutral-800">
                <span className="text-xs text-neutral-400 block mb-1">
                  {t.calculator.projectedValue}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                    {formatMoney(futureValue)}
                  </span>
                  <span className="text-sm font-bold text-amber-400">{currency}</span>
                </div>
              </div>

              {/* Breakdown Rows */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-950/50 border border-neutral-800/60">
                  <span className="text-xs text-neutral-300">{t.calculator.netProfit}</span>
                  <span className="text-sm font-bold text-emerald-400 font-mono tabular-nums">
                    +{formatMoney(totalProfit)} {currency}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-950/50 border border-neutral-800/60">
                  <span className="text-xs text-neutral-300">{t.calculator.annualDistribution}</span>
                  <span className="text-sm font-bold text-amber-400 font-mono tabular-nums">
                    ~{formatMoney(annualDividend)} {currency} / {lang === 'ar' ? 'سنة' : 'yr'}
                  </span>
                </div>
              </div>

              {/* Asset Allocation Breakdown Visualization */}
              <div className="mb-6 pt-4 border-t border-neutral-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5">
                    <PieChart className="w-3.5 h-3.5 text-amber-400" />
                    <span>{t.calculator.assetAllocation}</span>
                  </span>
                </div>

                {/* Progress Multi-Bar */}
                <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden flex mb-3">
                  <div style={{ width: `${currentAlloc.credit}%` }} className="bg-amber-400" title="Sukuk & Private Credit" />
                  <div style={{ width: `${currentAlloc.pe}%` }} className="bg-blue-500" title="Private Equity" />
                  <div style={{ width: `${currentAlloc.equity}%` }} className="bg-emerald-500" title="Equities & Funds" />
                  <div style={{ width: `${currentAlloc.hedge}%` }} className="bg-neutral-500" title="Macro Hedging" />
                </div>

                {/* Legend */}
                <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-300">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>{t.calculator.reAlloc} ({currentAlloc.credit}%)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>{t.calculator.peAlloc} ({currentAlloc.pe}%)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>{t.calculator.infraAlloc} ({currentAlloc.equity}%)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-neutral-500" />
                    <span>{t.calculator.cashAlloc} ({currentAlloc.hedge}%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div>
              <button
                onClick={() => onSelectPlan(capital, horizon, selectedStrategyId)}
                className="w-full py-4 px-6 text-xs sm:text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.calculator.submitPlan}</span>
                {lang === 'ar' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>

              <p className="mt-3 text-[10px] text-neutral-500 text-center leading-normal">
                {t.calculator.disclaimer}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
