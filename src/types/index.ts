export type Language = 'ar' | 'en';

export type InvestmentSector = 'asset-management' | 'private-equity' | 'capital-markets' | 'advisory';

export interface DealItem {
  id: string;
  titleAr: string;
  titleEn: string;
  sector: InvestmentSector;
  sectorLabelAr: string;
  sectorLabelEn: string;
  locationAr: string;
  locationEn: string;
  image: string;
  capitalSize: string;
  irr: string;
  holdingPeriod: string;
  statusAr: string;
  statusEn: string;
  highlightAr: string;
  highlightEn: string;
  thesisAr: string;
  thesisEn: string;
  metrics: {
    labelAr: string;
    labelEn: string;
    value: string;
  }[];
}

export interface ExpertProfile {
  id: string;
  nameAr: string;
  nameEn: string;
  roleAr: string;
  roleEn: string;
  credentialsAr: string;
  credentialsEn: string;
  experienceYears: number;
  bioAr: string;
  bioEn: string;
  specialtiesAr: string[];
  specialtiesEn: string[];
}

export interface TestimonialItem {
  id: string;
  quoteAr: string;
  quoteEn: string;
  authorAr: string;
  authorEn: string;
  titleAr: string;
  titleEn: string;
  entityAr: string;
  entityEn: string;
  metricsAr: string;
  metricsEn: string;
}

export interface ConsultationRequest {
  investorType: 'individual' | 'family-office' | 'institution';
  fullName: string;
  email: string;
  phone: string;
  capitalBracket: string;
  targetSector: string;
  preferredContact: 'virtual' | 'call' | 'memo';
  notes: string;
}
