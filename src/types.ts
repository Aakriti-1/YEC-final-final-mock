export interface Competition {
  id: string;
  name: string;
  week: number;
  weekLabel: string;
  dates: string;
  image: string;
  description: string;
  teamSize: string;
  eligibleYears: string;
  qualification: string;
  details: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  major: string;
  year: string;
  interestingFact: string;
  category?: 'Executive Lead' | 'Competition Lead' | string;
}

export interface CompetitionLead {
  name: string;
  role: string;
  image: string;
}

export interface PackageItem {
  id: string;
  title: string;
  pdfUrl: string;
  description: string;
  targetAudience: string;
  highlights: string[];
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  location: string;
  industry: string;
  description: string;
  websiteUrl: string;
  tier?: string;
  tierColor?: string;
  tagline?: string;
  supportDetails?: string;
  careersUrl?: string;
}

