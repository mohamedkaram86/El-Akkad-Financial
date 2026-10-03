import React, { useState } from 'react';
import { Language } from '../types';
import { TrendingUp, TrendingDown, Activity, ChevronRight, X, Clock } from 'lucide-react';

interface MarketTickerProps {
  lang: Language;
}

export interface TickerItem {
  id: string;
  symbol: string;
  nameAr: string;
  nameEn: string;
  value: string;
  change: string;
  isPositive: boolean;
  high: string;
  low: string;
  volume: string;
  category: 'equity' | 'sukuk' | 'commodity' | 'fx';
}

export const MARKET_TICKERS: TickerItem[] = [
  {
    id: 'tasi',
    symbol: 'TASI',
    nameAr: 'مؤشر السوق السعودي (تاسي)',
    nameEn: 'Tadawul All Share Index',
    value: '12,482.60',
    change: '+0.88%',
    isPositive: true,
    high: '12,510.40',
    low: '12,420.10',
    volume: '8.4B SAR',
    category: 'equity',
  },
  {
    id: 'egx30',
    symbol: 'EGX30',
    nameAr: 'مؤشر البورصة المصرية',
    nameEn: 'Egyptian Exchange 30',
    value: '31,145.20',
    change: '+1.24%',
    isPositive: true,
    high: '31,280.00',
    low: '30,950.80',
    volume: '5.2B EGP',
    category: 'equity',
  },
  {
    id: 'dfmgi',
    symbol: 'DFMGI',
    nameAr: 'مؤشر سوق دبي المالي',
    nameEn: 'Dubai Financial Market Index',
    value: '4,892.40',
    change: '+0.54%',
    isPositive: true,
    high: '4,910.20',
    low: '4,865.10',
    volume: '620M AED',
    category: 'equity',
  },
  {
    id: 'sukuk10y',
    symbol: 'KSA 10Y SUKUK',
    nameAr: 'عائد الصكوك السيادية 10 سنوات',
    nameEn: 'KSA 10Y Sovereign Sukuk Yield',
    value: '4.84%',
    change: '-0.04%',
    isPositive: false,
    high: '4.89%',
    low: '4.82%',
    volume: '1.8B SAR',
    category: 'sukuk',
  },
  {
    id: 'brent',
    symbol: 'BRENT',
    nameAr: 'خام برنت للنفط',
    nameEn: 'Brent Crude Oil',
    value: '$78.65',
    change: '+1.12%',
    isPositive: true,
    high: '$79.20',
    low: '$77.80',
    volume: '240K Contracts',
    category: 'commodity',
  },
  {
    id: 'gold',
    symbol: 'GOLD',
    nameAr: 'أونصة الذهب الفوري',
    nameEn: 'Spot Gold Ounce',
    value: '$2,654.80',
    change: '+0.42%',
    isPositive: true,
    high: '$2,662.00',
    low: '$2,641.50',
    volume: '185K Oz',
    category: 'commodity',
  },
  {
    id: 'sp500',
    symbol: 'S&P 500',
    nameAr: 'مؤشر إس آند بي الأمريكي',
    nameEn: 'S&P 500 Index',
    value: '5,892.10',
    change: '+0.65%',
    isPositive: true,
    high: '5,908.40',
    low: '5,860.20',
    volume: '3.8B Shares',
    category: 'equity',
  },
  {
    id: 'usdsar',
    symbol: 'USD/SAR',
    nameAr: 'الدولار / الريال السعودي',
    nameEn: 'US Dollar / Saudi Riyal',
    value: '3.7508',
    change: '+0.01%',
    isPositive: true,
    high: '3.7512',
    low: '3.7502',
    volume: 'Interbank Peg',
    category: 'fx',
  },
];

export const MarketTicker: React.FC<MarketTickerProps> = ({ lang }) => {
  const [selectedTicker, setSelectedTicker] = useState<TickerItem | null>(null);

  // Duplicate for seamless infinite loop
  const tickerItems = [...MARKET_TICKERS, ...MARKET_TICKERS];

  return (
    <div className="w-full bg-neutral-950/95 border-b border-neutral-800/90 text-xs font-mono text-neutral-300 relative z-40 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex items-center">
        {/* Ticker Lead-In Label */}
        <div className="shrink-0 flex items-center gap-2 px-3 sm:px-4 py-2 bg-amber-950/40 text-amber-400 font-bold border-e border-neutral-800 tracking-wider">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="hidden sm:inline font-sans">
            {lang === 'ar' ? 'نبض البورصة المباشر' : 'Live Market Ticker'}
          </span>
          <span className="sm:hidden font-sans">
            {lang === 'ar' ? 'البورصة' : 'Markets'}
          </span>
        </div>

        {/* Continuous Horizontal Scrolling Strip */}
        <div className="flex-1 overflow-hidden relative group py-2" dir="ltr">
          <div className="flex w-max motion-safe:animate-[marquee_38s_linear_infinite] group-hover:[animation-play-state:paused] gap-6 px-4">
            {tickerItems.map((item, index) => (
              <button
                key={`${item.id}-${index}`}
                onClick={() => setSelectedTicker(item)}
                className="flex items-center gap-2 text-xs hover:bg-neutral-900/80 px-2.5 py-1 rounded-md transition-colors cursor-pointer shrink-0"
              >
                <span className="font-bold text-white tracking-wide">{item.symbol}</span>
                <span className="text-neutral-300 tabular-nums">{item.value}</span>
                <span
                  className={`flex items-center gap-0.5 font-semibold tabular-nums ${
                    item.isPositive ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {item.isPositive ? (
                    <TrendingUp className="w-3 h-3 shrink-0" />
                  ) : (
                    <TrendingDown className="w-3 h-3 shrink-0" />
                  )}
                  <span>{item.change}</span>
                </span>
                <span className="text-neutral-700 mx-1">|</span>
              </button>
            ))}
          </div>
        </div>

        {/* Mini Legend Button */}
        <div className="hidden lg:flex items-center gap-1.5 px-3 py-2 border-s border-neutral-800 text-[11px] text-neutral-400 shrink-0 font-sans">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span>{lang === 'ar' ? 'جلسة التداول نشطة' : 'Trading Active'}</span>
        </div>
      </div>

      {/* Interactive Modal when clicking on any stock/index */}
      {selectedTicker && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 max-w-md w-full shadow-2xl relative font-sans text-neutral-200">
            <button
              onClick={() => setSelectedTicker(null)}
              className="absolute top-4 end-4 p-1.5 text-neutral-400 hover:text-white rounded-lg bg-neutral-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-500/30 flex items-center justify-center font-mono font-bold text-amber-400">
                {selectedTicker.symbol.slice(0, 3)}
              </div>
              <div>
                <h4 className="text-base font-bold text-white">
                  {lang === 'ar' ? selectedTicker.nameAr : selectedTicker.nameEn}
                </h4>
                <span className="text-xs font-mono text-neutral-400">
                  Symbol: {selectedTicker.symbol}
                </span>
              </div>
            </div>

            {/* Current Price Banner */}
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 mb-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-neutral-400 block mb-0.5">
                  {lang === 'ar' ? 'السعر الحالي / المؤشر' : 'Current Benchmark Value'}
                </span>
                <span className="text-2xl font-extrabold text-white font-mono tabular-nums">
                  {selectedTicker.value}
                </span>
              </div>
              <div
                className={`flex items-center gap-1 font-mono font-bold text-sm px-2.5 py-1 rounded-lg ${
                  selectedTicker.isPositive
                    ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30'
                    : 'bg-rose-950/60 text-rose-400 border border-rose-500/30'
                }`}
              >
                {selectedTicker.isPositive ? '+' : ''}
                {selectedTicker.change}
              </div>
            </div>

            {/* Detailed Stock Statistics Grid */}
            <div className="grid grid-cols-3 gap-2.5 text-xs mb-5 font-mono">
              <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800/80">
                <span className="text-[10px] text-neutral-400 block font-sans">
                  {lang === 'ar' ? 'أعلى سعر اليوم' : 'Day High'}
                </span>
                <span className="text-white font-bold tabular-nums">{selectedTicker.high}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800/80">
                <span className="text-[10px] text-neutral-400 block font-sans">
                  {lang === 'ar' ? 'أدنى سعر اليوم' : 'Day Low'}
                </span>
                <span className="text-white font-bold tabular-nums">{selectedTicker.low}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800/80">
                <span className="text-[10px] text-neutral-400 block font-sans">
                  {lang === 'ar' ? 'حجم التداول' : 'Volume'}
                </span>
                <span className="text-amber-400 font-bold tabular-nums">{selectedTicker.volume}</span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed mb-5">
              {lang === 'ar'
                ? 'يتابع فريق الاستشارات المالية بمجموعة العقاد حركة المؤشرات وأسعار الأصول لحظياً لتحديد أفضل نقاط الدخول والخروج وإعادة موازنة المحافظ الاستثمارية.'
                : 'El Akkad market intelligence monitors benchmark liquidity, sovereign spreads, and equity volatility real-time to execute tactical allocation mandates.'}
            </p>

            <button
              onClick={() => setSelectedTicker(null)}
              className="w-full py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
            >
              {lang === 'ar' ? 'إغلاق شاشة المؤشر' : 'Dismiss Terminal'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
