import React, { useState, useEffect } from 'react';

export type LogoVariant = 'breakout-arrow' | 'candlestick-shield';

interface AnimatedLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  lang?: 'ar' | 'en';
  className?: string;
  isInteractive?: boolean;
  variant?: LogoVariant;
  onToggleVariant?: () => void;
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  size = 'md',
  showText = true,
  lang = 'ar',
  className = '',
  isInteractive = true,
  variant: propVariant,
  onToggleVariant,
}) => {
  // Dimension definitions
  const dimensions = {
    sm: { box: 38, icon: 24, textTitle: 'text-sm', textSub: 'text-[10px]' },
    md: { box: 48, icon: 30, textTitle: 'text-base sm:text-lg', textSub: 'text-[11px]' },
    lg: { box: 62, icon: 42, textTitle: 'text-xl sm:text-2xl', textSub: 'text-xs' },
    xl: { box: 88, icon: 58, textTitle: 'text-3xl', textSub: 'text-sm' },
  }[size];

  // Global / local variant management (Default to the new breakout-arrow alternative design)
  const [internalVariant, setInternalVariant] = useState<LogoVariant>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('alaqqad_logo_variant') as LogoVariant;
      if (saved === 'candlestick-shield' || saved === 'breakout-arrow') {
        return saved;
      }
    }
    return 'breakout-arrow'; // Default to the brand new alternative
  });

  const activeVariant = propVariant || internalVariant;

  const handleToggle = (e: React.MouseEvent) => {
    if (!isInteractive) return;
    // If the user clicks on the emblem directly, switch designs so they can preview both
    const nextVariant: LogoVariant =
      activeVariant === 'breakout-arrow' ? 'candlestick-shield' : 'breakout-arrow';
    setInternalVariant(nextVariant);
    if (typeof window !== 'undefined') {
      localStorage.setItem('alaqqad_logo_variant', nextVariant);
      window.dispatchEvent(new Event('logo-variant-changed'));
    }
    if (onToggleVariant) {
      onToggleVariant();
    }
  };

  useEffect(() => {
    const handleStorage = () => {
      const saved = localStorage.getItem('alaqqad_logo_variant') as LogoVariant;
      if (saved && (saved === 'candlestick-shield' || saved === 'breakout-arrow')) {
        setInternalVariant(saved);
      }
    };
    window.addEventListener('logo-variant-changed', handleStorage);
    return () => window.removeEventListener('logo-variant-changed', handleStorage);
  }, []);

  return (
    <div
      className={`inline-flex items-center gap-3.5 select-none ${className} ${
        isInteractive ? 'group cursor-pointer' : ''
      }`}
      onClick={handleToggle}
      title={
        lang === 'ar'
          ? 'انقر للتبديل بين نمطي الشعار المالي'
          : 'Click to switch between financial logo designs'
      }
    >
      {/* Animated Emblem Container */}
      <div
        className="relative flex items-center justify-center shrink-0"
        style={{ width: dimensions.box, height: dimensions.box }}
      >
        {/* Ambient Pulsing Glow Backdrop */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-amber-600/30 via-amber-400/25 to-emerald-500/20 blur-md opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none"
        />

        {/* Outer Rotating / Shimmering Border Halo */}
        <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-amber-300 via-amber-500/40 to-neutral-800 shadow-xl shadow-amber-950/40">
          <div className="w-full h-full bg-neutral-950/95 rounded-[15px] backdrop-blur-sm" />
        </div>

        {/* Dynamic Sweep Light Effect on hover */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div className="w-[200%] h-full bg-gradient-to-r from-transparent via-amber-300/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
        </div>

        {/* SVG Crest Emblem: DESIGN 2 (New Alternative: Kinetic Ascending Arrows & Falcon Wings) */}
        {activeVariant === 'breakout-arrow' ? (
          <svg
            viewBox="0 0 100 100"
            className="relative z-10 transition-transform duration-500 ease-out group-hover:scale-105"
            style={{ width: dimensions.icon, height: dimensions.icon }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Luxury Multi-Tone Gold Gradients */}
              <linearGradient id="goldGradientNew" x1="0" y1="100" x2="100" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#78350F" />
                <stop offset="30%" stopColor="#D97706" />
                <stop offset="70%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#FFFBEB" />
              </linearGradient>

              <linearGradient id="goldShimmerBeam" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="50%" stopColor="#FEF3C7" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>

              <linearGradient id="emeraldBullish" x1="0" y1="100" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#047857" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>

              <filter id="goldDropGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#F59E0B" floodOpacity="0.5" />
              </filter>
            </defs>

            {/* Orbit of Capital Momentum (Dotted Dynamic Ring) */}
            <circle
              cx="50"
              cy="50"
              r="44"
              stroke="#D97706"
              strokeWidth="1"
              strokeDasharray="2 6"
              className="opacity-40 motion-safe:animate-[spinSlow_25s_linear_infinite]"
            />

            {/* Background Geometric Diamond Shield */}
            <polygon
              points="50,6 92,50 50,94 8,50"
              stroke="url(#goldGradientNew)"
              strokeWidth="2.5"
              strokeLinejoin="round"
              className="opacity-75 group-hover:opacity-100 transition-opacity"
            />

            {/* Tier 1 Ascending Stock Arrow Bar (Base Layer - Foundation) */}
            <path
              d="M26 68 L42 52 L50 60 L34 76 Z"
              fill="url(#goldGradientNew)"
              opacity="0.6"
              className="group-hover:opacity-80 transition-opacity duration-300"
            />

            {/* Tier 2 Ascending Stock Arrow Bar (Mid Acceleration - Private Equity & Sukuk) */}
            <path
              d="M38 56 L54 40 L62 48 L46 64 Z"
              fill="url(#goldGradientNew)"
              opacity="0.8"
              className="group-hover:opacity-95 transition-opacity duration-300"
            />

            {/* Tier 3 Ascending Stock Arrow Bar (High Alpha Apex - Maximum Capital Multiple) */}
            <path
              d="M50 44 L66 28 L74 36 L58 52 Z"
              fill="url(#goldShimmerBeam)"
              opacity="0.95"
              filter="url(#goldDropGlow)"
            />

            {/* Continuous Live Kinetic Trendline that pierces upward */}
            <path
              d="M18 78 L38 58 L48 64 L68 34 L82 16"
              stroke="#FFFBEB"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#goldDropGlow)"
              className="opacity-90"
            />

            {/* Animated Laser Dash Stream traveling along the stock line */}
            <path
              d="M18 78 L38 58 L48 64 L68 34 L82 16"
              stroke="#FDE68A"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="16 28"
              className="motion-safe:animate-[stockLineFlow_1.8s_linear_infinite]"
            />

            {/* Major Ascending Breakout Arrowhead (سهم الاختراق الصاعد ثلاثي الأبعاد) */}
            <g className="motion-safe:animate-[stockArrowPulse_2.5s_ease-in-out_infinite]">
              {/* Arrow Head Body Facet 1 (Shining Gold) */}
              <polygon
                points="84,14 62,22 72,28"
                fill="#FFFBEB"
                filter="url(#goldDropGlow)"
              />
              {/* Arrow Head Body Facet 2 (Deep Amber Shading) */}
              <polygon
                points="84,14 72,28 78,38"
                fill="#F59E0B"
                filter="url(#goldDropGlow)"
              />
              {/* Center Crisp Ridge Line */}
              <line
                x1="84"
                y1="14"
                x2="72"
                y2="28"
                stroke="#FDE68A"
                strokeWidth="1"
              />
            </g>

            {/* Stylized Arabic Monogram Calligraphic Accent "ع" at Base */}
            <path
              d="M24 50 C24 42, 32 38, 40 42 C44 44, 46 48, 42 52 C38 56, 32 60, 24 64"
              stroke="url(#goldGradientNew)"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.8"
            />

            {/* Bull Market Green Signal Dot at Arrow Tip */}
            <circle
              cx="85"
              cy="13"
              r="3.5"
              fill="#10B981"
              className="animate-ping opacity-75 origin-center"
            />
            <circle
              cx="85"
              cy="13"
              r="2"
              fill="#34D399"
            />
          </svg>
        ) : (
          /* SVG Crest Emblem: DESIGN 1 (Candlesticks & Hex Shield) */
          <svg
            viewBox="0 0 100 100"
            className="relative z-10 transition-transform duration-500 ease-out group-hover:scale-105"
            style={{ width: dimensions.icon, height: dimensions.icon }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="aqqadGoldPrimary" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFBEB" />
                <stop offset="25%" stopColor="#FCD34D" />
                <stop offset="60%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>

              <linearGradient id="aqqadGoldShine" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFBEB" />
                <stop offset="40%" stopColor="#FBBF24" />
                <stop offset="80%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#78350F" />
              </linearGradient>

              <linearGradient id="bullishGold" x1="0" y1="100" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#B45309" />
                <stop offset="60%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#FDE68A" />
              </linearGradient>

              <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="1" stdDeviation="2.5" floodColor="#F59E0B" floodOpacity="0.4" />
              </filter>
            </defs>

            {/* Outer Geometric Hex Shield */}
            <polygon
              points="50,5 90,26 90,74 50,95 10,74 10,26"
              stroke="url(#aqqadGoldPrimary)"
              strokeWidth="2.5"
              strokeLinejoin="round"
              className="opacity-70 group-hover:opacity-100 transition-opacity duration-500"
            />

            {/* Financial Candlestick #1 */}
            <g className="transition-all duration-500 opacity-75 group-hover:opacity-100">
              <line x1="26" y1="48" x2="26" y2="74" stroke="url(#bullishGold)" strokeWidth="1.2" strokeLinecap="round" />
              <rect x="23" y="54" width="6" height="14" rx="1.5" fill="url(#bullishGold)" stroke="#FDE68A" strokeWidth="0.5" />
            </g>

            {/* Financial Candlestick #2 */}
            <g className="transition-all duration-500 opacity-85 group-hover:opacity-100">
              <line x1="42" y1="34" x2="42" y2="72" stroke="url(#bullishGold)" strokeWidth="1.2" strokeLinecap="round" />
              <rect x="39" y="40" width="6" height="22" rx="1.5" fill="url(#bullishGold)" stroke="#FFFBEB" strokeWidth="0.5" />
            </g>

            {/* Financial Candlestick #3 */}
            <g className="transition-all duration-500 group-hover:opacity-100">
              <line x1="58" y1="20" x2="58" y2="68" stroke="url(#bullishGold)" strokeWidth="1.2" strokeLinecap="round" />
              <rect x="55" y="26" width="6" height="30" rx="1.5" fill="url(#bullishGold)" stroke="#FFFBEB" strokeWidth="0.5" />
            </g>

            {/* Stylized Ayn Monogram */}
            <path
              d="M36 44 C36 36, 42 30, 50 30 C58 30, 64 34, 64 42 C64 49, 58 54, 50 55 C60 58, 68 64, 68 74 C68 83, 58 88, 46 88 C34 88, 25 82, 22 75"
              stroke="url(#aqqadGoldPrimary)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-500 opacity-90 group-hover:opacity-100"
            />

            {/* Ascending Breakout Arrow */}
            <g className="motion-safe:animate-[stockArrowPulse_2.5s_ease-in-out_infinite]">
              <line x1="62" y1="38" x2="78" y2="20" stroke="#FFFBEB" strokeWidth="3.5" strokeLinecap="round" filter="url(#goldGlow)" />
              <path d="M66 20 L78 20 L78 32" stroke="#FFFBEB" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#goldGlow)" />
              <polygon points="78,20 70,20 78,28" fill="#FBBF24" />
            </g>

            {/* Green Beacon */}
            <circle cx="80" cy="18" r="3" fill="#10B981" className="animate-ping opacity-75 origin-center" />
            <circle cx="80" cy="18" r="2" fill="#34D399" />
          </svg>
        )}

        {/* Dynamic Corner Sparkles */}
        <div className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-emerald-400 opacity-60 group-hover:scale-150 group-hover:opacity-100 transition-all duration-500" />
        <div className="absolute bottom-1.5 left-1.5 w-1 h-1 rounded-full bg-amber-400 opacity-40 group-hover:scale-125 group-hover:opacity-80 transition-all duration-500" />
      </div>

      {/* Typography Lockup */}
      {showText && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-extrabold tracking-tight text-white group-hover:text-amber-300 transition-colors ${dimensions.textTitle}`}
            >
              {lang === 'ar' ? 'العقاد جروب' : 'El Akkad Group'}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse hidden sm:inline-block" />
          </div>
          <span className={`text-neutral-400 font-medium tracking-wide ${dimensions.textSub}`}>
            {lang === 'ar'
              ? 'للاستشارات والاستثمارات المالية'
              : 'Financial Advisory & Investments'}
          </span>
        </div>
      )}
    </div>
  );
};
