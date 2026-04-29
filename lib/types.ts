/**
 * Data Types - Sanity.io Compatible
 * All interfaces designed to map directly to Sanity.io schemas
 */

// Service Type
export interface Service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon: string;
  benefits: string[];
  problemStatement: string;
  process: string[];
  outcomes: string[];
}

// Pricing Type
export interface PricingFeature {
  id: string;
  text: string;
  included: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number | null;
  annualPrice: number | null;
  bestFor: string;
  highlighted?: boolean;
  features: PricingFeature[];
  cta: string;
  ctaVariant: 'primary' | 'secondary';
}

// Testimonial Type
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  image?: string;
}

// Case Study Type
export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  slug: string;
  challenge: string;
  solution: string;
  results: string[];
  metric: string;
  image?: string;
}

// Differentiator Type
export interface Differentiator {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Trust Signal Type
export interface TrustSignal {
  id: string;
  stat: string;
  label: string;
  icon: string;
}

// Problem/Solution Card Type
export interface ProblemSolutionCard {
  id: string;
  problem: string;
  solution: string;
  outcome: string;
}

// Navigation Item Type
export interface NavItem {
  id: string;
  label: string;
  href: string;
}

// FAQ Item Type
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Contact Method Type
export interface ContactMethod {
  id: string;
  name: string;
  description: string;
  icon: string;
  action: 'whatsapp' | 'email' | 'phone';
}
