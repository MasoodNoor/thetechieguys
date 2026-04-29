/**
 * Site Configuration - The Techie Guys
 * All texts, colors, and data are editable here
 */

/** Single source for phone + WhatsApp; links below derive from this. */
const BUSINESS_PHONE = '+92 300 8929640';
const PHONE_DIGITS = BUSINESS_PHONE.replace(/\D/g, '');

export const siteConfig = {
  // Business Info
  business: {
    name: 'The Techie Guys',
    tagline: 'Business Email & Domain Specialists for UK Small Businesses',
    description:
      'Google Workspace setup, Microsoft 365 configuration, SPF DKIM DMARC, email migration, and domain management for UK businesses.',
    email: 'hello@thetechieguys.com',
    phone: BUSINESS_PHONE,
    whatsapp: BUSINESS_PHONE,
    address: 'Serving UK Businesses',
  },

  // Colors
  colors: {
    primary: '#0066CC',
    accent: '#00AA44',
  },

  // Hero Section
  hero: {
    id: 'hero',
    headline: 'Business Email That Actually Works',
    subheadline:
      'Google Workspace setup, Microsoft 365, SPF/DKIM/DMARC configuration, and email migration for UK small businesses. Fixed prices. Done in 24–48 hours.',
    ctaPrimary: 'Get a Free Email Audit',
    ctaSecondary: 'See Packages',
    badge: 'Trusted by 50+ UK Businesses',
  },

  // Why Choose Us
  whyChooseUs: {
    id: 'about',
    title: 'Why UK Businesses Choose Us',
    differentiators: [
      {
        id: 'diff-1',
        title: 'Plain English, Always',
        description:
          'No jargon, no confusing tech talk. We explain exactly what we are doing and why — so you stay in control.',
        icon: 'MessageCircle',
      },
      {
        id: 'diff-2',
        title: 'Real People, Fast Replies',
        description:
          'You talk directly to the person doing the work. No helpdesk tickets, no automated responses. We reply within 2 hours.',
        icon: 'Users',
      },
      {
        id: 'diff-3',
        title: 'UK-Focused Specialists',
        description:
          'We work exclusively with UK businesses. We understand your platforms, your registrars, and how UK email infrastructure works.',
        icon: 'Globe',
      },
      {
        id: 'diff-4',
        title: 'Problems Prevented, Not Just Fixed',
        description:
          'We configure your email correctly from the start — so you never lose leads to spam folders or suffer domain blacklisting.',
        icon: 'Shield',
      },
      {
        id: 'diff-5',
        title: 'Fixed Prices, No Surprises',
        description:
          'Every project is quoted upfront. You know exactly what you are paying before we start. No hourly rates, no hidden extras.',
        icon: 'DollarSign',
      },
      {
        id: 'diff-6',
        title: '24–48 Hour Turnaround',
        description:
          'Most setups and fixes completed within 24–48 hours. Zero downtime during migration — your team keeps working throughout.',
        icon: 'Zap',
      },
    ],
  },

  // Pricing Packages
  pricing: {
    id: 'packages',
    title: 'Simple, Fixed-Price Packages',
    subtitle:
      'No monthly subscriptions. No surprise invoices. One price, everything included.',
    currency: '£',
    tiers: [
      {
        id: 'tier-starter',
        name: 'Starter',
        slug: 'starter',
        description: 'For solo traders and small teams getting professional email for the first time',
        price: 49,
        annualPrice: null,
        bestFor: 'Solo traders & startups',
        highlighted: false,
        features: [
          // { id: 'f1', text: 'Business email setup (1–3 users)', included: false },
          { id: 'f2', text: 'SPF, DKIM & DMARC configured', included: true },
          { id: 'f3', text: 'MX record configuration', included: true },
          { id: 'f4', text: '30 days of email support', included: true },
          { id: 'f5', text: 'Setup guide & handover document', included: true },
        ],
        cta: 'Get Started',
        ctaVariant: 'primary' as const,
      },
      {
        id: 'tier-pro',
        name: 'Professional',
        slug: 'professional',
        description: 'Complete email infrastructure for growing teams — includes migration',
        price: 119,
        annualPrice: null,
        bestFor: 'Growing teams (up to 10 users)',
        highlighted: true,
        features: [
          { id: 'f6', text: 'Everything in Starter', included: true },
          { id: 'f7', text: 'Up to 10 users configured', included: true },
          { id: 'f8', text: 'Email migration from old host', included: true },
          { id: 'f9', text: 'Google Workspace or M365 setup', included: true },
          { id: 'f10', text: 'HTML email signatures (all users)', included: true },
          { id: 'f11', text: '60 days priority support', included: true },
        ],
        cta: 'Get Started',
        ctaVariant: 'primary' as const,
      },
      {
        id: 'tier-enterprise',
        name: 'Business',
        slug: 'business',
        description: 'Full enterprise-grade email infrastructure for established businesses',
        price: 249,
        annualPrice: null,
        bestFor: 'Established businesses (up to 30 users)',
        highlighted: false,
        features: [
          { id: 'f12', text: 'Everything in Professional', included: true },
          { id: 'f13', text: 'Up to 30 users configured', included: true },
          { id: 'f14', text: 'Microsoft 365 or GWS full setup', included: true },
          { id: 'f15', text: 'Security policies & mobile setup', included: true },
          { id: 'f16', text: '90 days priority support', included: true },
          { id: 'f17', text: 'Quarterly health review call', included: true },
        ],
        cta: 'Contact Us',
        ctaVariant: 'secondary' as const,
      },
    ],
  },

  // Testimonials
  testimonials: {
    id: 'testimonials',
    title: 'What Our Clients Say',
    items: [
      {
        id: 'testimonial-1',
        quote:
          'I recently had the pleasure of using this service and I couldn\'t be more satisfied. The response time was incredibly quick, addressing all my needs almost immediately. The team was not only efficient but also exceptionally friendly and polite, making the entire experience pleasant and stress-free. The quality of work they delivered was outstanding and truly exceeded my expectations. To top it all off, the value for money was incredible. I highly recommend this service to anyone in need of reliable and professional assistance. Five stars all the way!',
        author: 'Paul Tomlin',
        role: 'Owner',
        company: 'stokedrivingschool.com - Stoke Driving School',
        location: 'Stoke-on-Trent, United Kingdom',
        rating: 5,
      },
      {
        id: 'testimonial-2',
        quote:
          'Excellent work again second time I used Masood. Highly recommend.',
        author: 'SUKH JOSAN',
        role: 'Director',
        company: 'https://www.sukiseo.com - Sukiseo SEO',
        location: 'United Kingdom',
        rating: 5,
      },
      {
        id: 'testimonial-3',
        quote:
          'Very helpful, extremely trustworthy and would highly recommend. Great communication as well.',
        author: 'Luke H',
        role: 'Administrator',
        company: 'Business Support Manager',
        location: 'North West',
        rating: 5,
      },
    ],
  },

  // Contact Section
  contact: {
    id: 'contact',
    title: 'Get a Free Email Audit',
    description:
      'Not sure if your email setup is correct? We will check your SPF, DKIM, DMARC, and deliverability for free — and tell you exactly what needs fixing.',
    responseTime: 'Within 2 Hours',
    methods: [
      {
        id: 'contact-whatsapp',
        label: 'WhatsApp',
        value: 'Message Us Now',
        href: `https://wa.me/${PHONE_DIGITS}?text=Hi,%20I%20would%20like%20a%20free%20email%20audit%20for%20my%20business`,
        icon: 'MessageCircle',
      },
      {
        id: 'contact-email',
        label: 'Email',
        value: 'hello@thetechieguys.com',
        href: 'mailto:hello@thetechieguys.com',
        icon: 'Mail',
      },
      {
        id: 'contact-phone',
        label: 'Phone',
        value: BUSINESS_PHONE,
        href: `tel:+${PHONE_DIGITS}`,
        icon: 'Phone',
      },
    ],
  },

  // SEO
  seo: {
    defaultTitle:
      'Business Email Setup & Google Workspace UK | The Techie Guys',
    defaultDescription:
      'Expert Business Email setup & Google Workspace for UK small businesses. Fixed prices, 48hr turnaround & SPF/DKIM/DMARC config. Book your free email audit today!',
    baseUrl: 'https://thetechieguys.com',
    ogImage: 'https://thetechieguys.com/og-image.png alt="Business Email Setup & Google Workspace UK | The Techie Guys',
  },
};
