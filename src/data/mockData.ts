import { DealItem, ExpertProfile, TestimonialItem } from '../types';

import heroTowerImg from '../assets/images/hero_aqqad_investment_tower_1791026908063.jpg';
import financialAnalyticsImg from '../assets/images/aqqad_financial_analytics_1791027498328.jpg';
import boardroomImg from '../assets/images/aqqad_investment_boardroom_1791026932711.jpg';
import infrastructureImg from '../assets/images/aqqad_infrastructure_green_1791026943946.jpg';

export { heroTowerImg, financialAnalyticsImg, boardroomImg, infrastructureImg };

export const DEALS_DATA: DealItem[] = [
  {
    id: 'deal-1',
    titleAr: 'هيكلة وإصدار صكوك مالية وصندوق ائتمان خاص',
    titleEn: 'Corporate Sukuk Issuance & Private Credit Vehicle',
    sector: 'capital-markets',
    sectorLabelAr: 'أسواق المال والصكوك',
    sectorLabelEn: 'Debt Capital Markets & Sukuk',
    locationAr: 'سوق الصكوك وأدوات الدين',
    locationEn: 'Capital Debt Markets',
    image: financialAnalyticsImg,
    capitalSize: '950,000,000 ر.س',
    irr: '+16.8% IRR',
    holdingPeriod: 'إصدار مدته 5 سنوات',
    statusAr: 'تغطية الاكتتاب بنسبة 320%',
    statusEn: 'Over-subscribed by 3.2x',
    highlightAr: 'هيكلة مالية متوافقة كلياً مع الشريعة وتخفيض تكلفة التمويل على الجهة المصدرة بمقدار 210 نقطة أساس',
    highlightEn: 'Sharia-compliant issuance reducing issuer weighted average cost of capital (WACC) by 210 bps',
    thesisAr: 'صياغة برنامج صكوك مرابحة واستثمار خاص لتلبية طلب المؤسسات المالية الإقليمية وصناديق التقاعد على أصول الدخل الثابت الآمنة ذات العائد المرتفع، مع توفير سيولة تشغيلية للمصدر.',
    thesisEn: 'Engineered hybrid Murabaha Sukuk capturing insatiable institutional appetite for protected fixed-yield instruments, structured with credit enhancement covenants.',
    metrics: [
      { labelAr: 'القيمة الإجمالية للإصدار', labelEn: 'Total Issuance Value', value: '950M SAR' },
      { labelAr: 'معدل العائد السنوي الموزع', labelEn: 'Annual Coupon Yield', value: '11.4%' },
      { labelAr: 'معدل التغطية الاستثمارية', labelEn: 'Subscription Coverage', value: '3.2x' },
      { labelAr: 'التصنيف الائتماني الداخلي', labelEn: 'Investment Grade Rating', value: 'A+ Equivalent' }
    ]
  },
  {
    id: 'deal-2',
    titleAr: 'صفقة استحواذ وتمويل نمو لشركة تكنولوجيا مالية (FinTech)',
    titleEn: 'Cross-Border FinTech Buyout & Growth Capital',
    sector: 'private-equity',
    sectorLabelAr: 'ملكية خاصة وتمويل نمو',
    sectorLabelEn: 'Private Equity & Growth',
    locationAr: 'قطاع التقنية المالية الإقليمي',
    locationEn: 'Regional FinTech Sector',
    image: boardroomImg,
    capitalSize: '$140,000,000 USD',
    irr: '+34.2% IRR',
    holdingPeriod: '3.5 سنوات',
    statusAr: 'تخارج استراتيجي محقق',
    statusEn: 'Completed Strategic Exit',
    highlightAr: 'تحقيق مضاعف استثمار 3.6x عند بيع الحصة لمجموعة مصرفية دولية بعد مضاعفة الإيرادات 5 مرات',
    highlightEn: '3.6x MOIC realized upon trade sale to global banking group following 5x revenue scale',
    thesisAr: 'الاستحواذ على حصة حاكمة في منصة مدفوعات رقمية وخدمات ائتمانية للشركات، وإعادة هيكلة المجلس التوجيهي وفريق القيادة، والتوسع في الأسواق الإقليمية.',
    thesisEn: 'Controlling buyout of proprietary B2B payments infrastructure, governance overhaul, and regional expansion culminating in strategic acquisition.',
    metrics: [
      { labelAr: 'مضاعف رأس المال المستثمر', labelEn: 'MOIC Multiple', value: '3.6x' },
      { labelAr: 'معدل العائد الداخلي السنوي', labelEn: 'Realized IRR', value: '34.2%' },
      { labelAr: 'نمو الإيرادات السنوية', labelEn: 'Annual Revenue Growth', value: '+420%' },
      { labelAr: 'فترة التخارج المحققة', labelEn: 'Holding Horizon', value: '42 شهراً' }
    ]
  },
  {
    id: 'deal-3',
    titleAr: 'صندوق الاستحواذ على سلاسل الإمداد والخدمات اللوجستية',
    titleEn: 'MENA Supply Chain Consolidation Fund',
    sector: 'private-equity',
    sectorLabelAr: 'ملكية خاصة ودمج شركات',
    sectorLabelEn: 'Private Equity & Buyout',
    locationAr: 'القطاع اللوجستي والصناعي',
    locationEn: 'Regional Industrial Corridors',
    image: heroTowerImg,
    capitalSize: '$110,000,000 USD',
    irr: '+24.5% IRR',
    holdingPeriod: 'قيد التوجيه والمتابعة النشطة',
    statusAr: 'توزيعات أرباح ربع سنوية منتظمة',
    statusEn: 'Active Quarterly Dividend Yield',
    highlightAr: 'دمج 3 شركات تشغيلية تحت مظلة مالية واحدة ورفع هوامش الأرباح التشغيلية بنسبة 38%',
    highlightEn: 'Platform rollup of 3 operational logistics entities, unlocking 38% EBITDA margin synergy',
    thesisAr: 'تطبيق استراتيجية التجميع المالي (Roll-up Strategy) لخفض تكلفة رأس المال، دمج العمليات المحاسبية والضريبية، وتجهيز الكيان المشترك للطرح العام في السوق المالي.',
    thesisEn: 'Executing programmatic PE rollup strategy, centralizing treasury & tax efficiencies, preparing unified entity for regional public listing (IPO).',
    metrics: [
      { labelAr: 'نمو الأرباح قبل الفوائد (EBITDA)', labelEn: 'EBITDA Expansion', value: '+38.5%' },
      { labelAr: 'العائد النقدي الموزع سنوياً', labelEn: 'Annual Cash Dividend', value: '14.2%' },
      { labelAr: 'قيمة الوفورات التشغيلية', labelEn: 'Synergy Savings', value: '$16.4M' },
      { labelAr: 'مستوى الحماية الرأسمالية', labelEn: 'Downside Protection', value: 'محمي بأصول تشغيلية' }
    ]
  },
  {
    id: 'deal-4',
    titleAr: 'محفظة الصكوك الخضراء وأصول البنية التحتية المستدامة',
    titleEn: 'Green Sukuk & Sustainable Infrastructure SPV',
    sector: 'asset-management',
    sectorLabelAr: 'تخطيط أصول وصكوك خضراء',
    sectorLabelEn: 'Green Assets & SPV Management',
    locationAr: 'محفظة الطاقة النظيفة الإقليمية',
    locationEn: 'Regional Clean Energy Belts',
    image: infrastructureImg,
    capitalSize: '$165,000,000 USD',
    irr: '+19.2% IRR',
    holdingPeriod: 'عقود شراء طاقة 20 عاماً',
    statusAr: 'تشغيل تجاري وتدفقات مالية مستقرة',
    statusEn: 'Commercial Operation (20-yr PPA)',
    highlightAr: 'تدفقات نقدية سيادية مؤمنة بالكامل مدعومة بضمانات ائتمانية ومحمية تلقائياً من التضخم',
    highlightEn: 'Fully sovereign-backed inflation-indexed cash flows providing fixed institutional income',
    thesisAr: 'صندوق تمويلي واستثماري هيكلي يوفر تدفقات نقدية مستمرة كبديل عالي العائد لأدوات السندات التقليدية مع صفرية الارتباط بتقلبات الأسهم.',
    thesisEn: 'Structured financing SPV delivering bond-like stability, non-correlated alpha, and strict ESG compliance.',
    metrics: [
      { labelAr: 'عائد التوزيعات السنوية', labelEn: 'Annual Cash Yield', value: '11.8%' },
      { labelAr: 'مدة التدفقات النقدية الملزمة', labelEn: 'Cashflow Duration', value: '20 عاماً' },
      { labelAr: 'حجم التمويل الهيكلي', labelEn: 'Structured Capital', value: '$165M' },
      { labelAr: 'تصنيف الأثر المستدام', labelEn: 'ESG Rating', value: 'Dark Green (Verified)' }
    ]
  }
];

export const EXPERTS_DATA: ExpertProfile[] = [
  {
    id: 'expert-1',
    nameAr: 'د. طارق المنصور',
    nameEn: 'Dr. Tarek Al-Mansoor, CFA',
    roleAr: 'كبير مسؤولي الاستثمار ورئيس الاستراتيجيات المالية (CIO)',
    roleEn: 'Chief Investment Officer (CIO)',
    credentialsAr: 'حامل شهادة CFA | ماجستير تخصيص الأصول والمحافظ من جامعة لندن للأعمال LBS',
    credentialsEn: 'CFA Charterholder | M.Sc. Portfolio Management, London Business School',
    experienceYears: 22,
    bioAr: 'خبير هندسة الأصول وصناديق الاستثمار في بيوت المال الإقليمية والدولية. يمتلك خبرة دقيقة في تخصيص الأصول الديناميكي وهندسة العوائد وحماية رأس المال من التضخم وتقلبات أسواق الصرف.',
    bioEn: 'Former Head of Asset Allocation at Tier-1 investment houses. Specialized in multi-asset portfolio architecture, currency hedging, and macro alpha generation.',
    specialtiesAr: ['تخصيص الأصول متعدد الفئات', 'تحوط العملات والتضخم', 'هيكلة الصناديق الاستثمارية', 'النمذجة الرياضية للمخاطر'],
    specialtiesEn: ['Multi-Asset Allocation', 'Macro FX & Rate Hedging', 'Private Credit & Equity', 'Quantitative Risk Modeling']
  },
  {
    id: 'expert-2',
    nameAr: 'أ. ليلى الزهراني',
    nameEn: 'Layla Al-Zahrani',
    roleAr: 'رئيسة قطاع صفقات الاندماج والاستحواذ (M&A)',
    roleEn: 'Head of M&A & Corporate Transactions',
    credentialsAr: 'ماجستير في القانون التجاري الدولي والتمويل | مستشارة معتمدة لهيئات أسواق المال',
    credentialsEn: 'LL.M. in International Corporate Finance Law | Certified Capital Market Advisor',
    experienceYears: 18,
    bioAr: 'قادت أكثر من 45 صفقة اندماج واستحواذ وتخارج استثماري ناجحة في قطاعات الخدمات المالية والتقنية واللوجستيات، مع تخصص استثنائي في الفحص المالي والقانوني النافي للجهالة والمفاوضات المالية الاستراتيجية.',
    bioEn: 'Orchestrated over 45 buy-side and sell-side transactions across tech, healthcare, and financial services with deep expertise in legal & financial due diligence.',
    specialtiesAr: ['صفقات الاندماج والاستحواذ', 'الفحص النافي للجهالة (Due Diligence)', 'المفاوضات المالية وتحديد الأسعار', 'استشارات التخارج الاستراتيجي'],
    specialtiesEn: ['M&A Deal Execution', 'Comprehensive Due Diligence', 'Valuation & Deal Structuring', 'Strategic Exit Advisory']
  },
  {
    id: 'expert-3',
    nameAr: 'أ. عبد المحسن التميمي',
    nameEn: 'Abdulmohsen Al-Tamimi, CFA',
    roleAr: 'رئيس قطاع أسواق الدين وهيكلة الصكوك',
    roleEn: 'Head of Debt Capital Markets & Sukuk Advisory',
    credentialsAr: 'حامل شهادة CFA | ماجستير التمويل الإسلامي والهندسة المالية',
    credentialsEn: 'CFA Charterholder | M.Sc. Islamic Finance & Financial Engineering',
    experienceYears: 19,
    bioAr: 'قاد صفقات إصدار صكوك وأدوات دين مؤسسية تجاوزت 6 مليارات ريال للشركات والمصارف، مع ابتكار هياكل مرابحة واستصناع وإجارة متطورة تتطابق مع المعايير الشرعية وهيئات الرقابة المالية.',
    bioEn: 'Pioneered over 6B SAR in corporate Sukuk and hybrid debt structures for leading corporations, optimizing balance sheets and lowering borrowing costs.',
    specialtiesAr: ['هيكلة الصكوك المتوافقة مع الشريعة', 'هيكلة الديون المؤسسية', 'ترتيب التمويل المشترك', 'تخطيط سيولة الخزينة'],
    specialtiesEn: ['Sharia-Compliant Sukuk Structuring', 'Corporate Debt Restructuring', 'Syndicated Financing', 'Treasury Liquidity Optimization']
  },
  {
    id: 'expert-4',
    nameAr: 'د. يوسف النجار',
    nameEn: 'Dr. Youssef Al-Najjar',
    roleAr: 'رئيس لجنة دراسات الجدوى والتقييم المالي المؤسسي',
    roleEn: 'Head of Valuation & Feasibility Committee',
    credentialsAr: 'دكتوراه في التقييم المالي ودراسات الجدوى | عضو الجمعية الأمريكية للمقيمين المعتمدين ASA',
    credentialsEn: 'Ph.D. in Financial Valuation | Accredited Senior Appraiser (ASA)',
    experienceYears: 24,
    bioAr: 'مرجع إقليمي معتمد في إعداد دراسات الجدوى الاقتصادية الكبرى، تقييم الشركات والأسهم العادلة، ونمذجة تدفقات الخصم النقدي (DCF) لأكثر من 120 كياناً تجارياً وصناعياً.',
    bioEn: 'Premier regional authority in business enterprise valuation, certified feasibility analytics, and discounted cash flow modeling for major private holdings.',
    specialtiesAr: ['دراسات الجدوى المالية المعتمدة', 'تقييم المنشآت والأسهم العادلة', 'نمذجة التدفقات النقدية DCF', 'تحليل حساسية الأسواق المالية'],
    specialtiesEn: ['Certified Feasibility Studies', 'Business Enterprise Valuation', 'Discounted Cash Flow (DCF)', 'Market Stress Sensitivity']
  },
  {
    id: 'expert-5',
    nameAr: 'د. منى الكردي',
    nameEn: 'Dr. Mona Al-Kurdi',
    roleAr: 'رئيسة استراتيجيات الحوكمة والتحوط المالي',
    roleEn: 'Head of Risk Governance & Macro Hedging',
    credentialsAr: 'دكتوراه في قياس المخاطر والتحوط المالي | زميل معهد المخاطر العالمي PRMIA',
    credentialsEn: 'Ph.D. in Financial Risk & Quantitative Finance | Fellow of PRMIA',
    experienceYears: 17,
    bioAr: 'خبيرة في بناء نماذج التحوط ضد تقلبات أسعار الفائدة والسيولة وتقلبات العملات للمحافظ الكبرى، وضمان الامتثال التام مع المعايير الرقابية المصرفية الدولية بازل 3.',
    bioEn: 'Specializes in quantitative risk modeling, dynamic interest rate & currency hedges, stress testing portfolios, and aligning funds with Basel III standards.',
    specialtiesAr: ['حوكمة مخاطر السيولة والفائدة', 'اختبارات التحمل المالي Stress Testing', 'حوكمة الاستثمار المؤسسي', 'امتثال الهيئات الرقابية'],
    specialtiesEn: ['Liquidity & Rate Risk Management', 'Financial Stress Testing', 'Institutional Governance', 'Regulatory Compliance']
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    quoteAr: 'استشارات فريق الخبراء لمحفظتنا في أسواق الدين وأدوات الائتمان الخاص حققت نمواً ثابتاً وتدفقات دورية منتظمة مع حماية دقيقة من تقلبات الفائدة.',
    quoteEn: 'The expert team’s financial advisory and private credit fund management consistently outperformed benchmarks, generating 24%+ net IRR while flawlessly hedging interest rate risks.',
    authorAr: 'الشيخ عبد الرحمن بن فهد السديري',
    authorEn: 'Sheikh Abdulrahman Al-Sudairy',
    titleAr: 'رئيس المجلس الاستشاري لمكتب السديري العائلي',
    titleEn: 'Chairman, Al-Sudairy Family Office',
    entityAr: 'مكتب عائلي استثماري',
    entityEn: 'Single Family Office',
    metricsAr: '+24.8% عائد سنوي مركب',
    metricsEn: '+24.8% Compound Annual IRR'
  },
  {
    id: 'test-2',
    quoteAr: 'في صفقة الاندماج الإقليمية الكبرى، قادت أ. ليلى الزهراني وفريق الاستشارات المالية المفاوضات ببراعة وكشفت فجوات تقييم وفرت علينا 22 مليون دولار في سعر الصفقة النهائي.',
    quoteEn: 'During our cross-border acquisition, the financial advisory team identified critical balance sheet mispricings, unlocking $22M in immediate transaction synergies for our fund.',
    authorAr: 'م. كريم الشناوي',
    authorEn: 'Eng. Karim El-Shennawy',
    titleAr: 'العضو المنتدب لصندوق تنمية الاستثمارات المالية',
    titleEn: 'Managing Director, Regional Financial Investment Fund',
    entityAr: 'صندوق استثماري مؤسسي',
    entityEn: 'Institutional Investment Fund',
    metricsAr: '22 مليون دولار قيمة مضافة',
    metricsEn: '$22M Direct Value Captured'
  },
  {
    id: 'test-3',
    quoteAr: 'دراسة الجدوى المالية وهيكلة إصدار الصكوك التي أعدها فريق الاستشارات المالية مكّنتنا من جمع 950 مليون ريال بتكلفة تنافسية وتغطية اكتتاب تجاوزت 3 أضعاف.',
    quoteEn: 'The feasibility modeling and Sukuk structuring led by the financial advisory team enabled us to close a 950M SAR debt facility with exceptional pricing and 3.2x institutional over-subscription.',
    authorAr: 'د. منصور العتيبي',
    authorEn: 'Dr. Mansour Al-Otaibi',
    titleAr: 'الرئيس التنفيذي للمالية، مجموعة المدى الاستثمارية',
    titleEn: 'Chief Financial Officer, Al-Mada Investment Group',
    entityAr: 'مجموعة قابضة متعددة الأنشطة',
    entityEn: 'Conglomerate Holding Company',
    metricsAr: '3.2x تغطية اكتتاب الصكوك',
    metricsEn: '3.2x Sukuk Over-subscription'
  }
];

export const STATS_METRICS = [
  {
    value: '+4.8B',
    unitAr: 'ريال سعودي',
    unitEn: 'SAR AUM & Advisory Deals',
    labelAr: 'حجم الأصول والصفقات المالية المدارة',
    labelEn: 'Total Assets & Deals Under Advisory'
  },
  {
    value: '23.8%',
    unitAr: 'سنوياً',
    unitEn: 'Historic IRR',
    labelAr: 'متوسط العائد الداخلي التاريخي',
    labelEn: 'Track-Record Compound Annual Return'
  },
  {
    value: '18+',
    unitAr: 'عاماً من الريادة',
    unitEn: 'Years in Financial Markets',
    labelAr: 'خبرة مصرفية واستشارية متواصلة',
    labelEn: 'Institutional Market Track Record'
  },
  {
    value: '140+',
    unitAr: 'شريك ومستثمر',
    unitEn: 'Institutional Clients',
    labelAr: 'مكاتب عائلية ومؤسسات مالية شريكة',
    labelEn: 'Family Offices & Institutional Mandates'
  }
];
