/**
 * Site Configuration - The Techie Guys
 * All texts, colors, and data are editable here
 */

/** Single source for phone + WhatsApp; links below derive from this. */
const BUSINESS_PHONE = '+92 300 8929640';
const PHONE_DIGITS = BUSINESS_PHONE.replace(/\D/g, '');

const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/TheTechieGuysHQ',
  instagram: 'https://www.instagram.com/thetechieguys/',
} as const;

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
    address: 'Remote support for UK small businesses (worldwide delivery)',
    social: SOCIAL_LINKS,
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
    ctaPrimaryHref: '#contact',
    ctaSecondary: 'See Packages',
    ctaSecondaryHref: '#packages',
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

  // Services (Sanity-ready: same shape as lib/types Service)
  services: {
    id: 'services',
    title: 'What We Do',
    items: [
      {
        id: 'service-gws',
        name: 'Google Workspace Setup',
        slug: 'google-workspace-setup',
        shortDescription:
          'Professional Gmail and Google Workspace for your team — configured correctly from day one.',
        description:
          'Full Google Workspace setup including MX records, user accounts, and security settings for UK businesses.',
        icon: 'Mail',
        benefits: [
          'MX & DNS configured correctly',
          'User accounts and aliases set up',
          'Mobile and desktop ready',
        ],
        problemStatement: 'Still on personal Gmail or a messy old host?',
        process: ['Audit current setup', 'Configure DNS & MX', 'Create users and test delivery'],
        outcomes: ['Professional @yourdomain email', 'Reliable delivery', 'Team collaboration ready'],
      },
      {
        id: 'service-m365',
        name: 'Microsoft 365 Setup',
        slug: 'microsoft-365-setup',
        shortDescription:
          'Outlook and Microsoft 365 configured for small teams — without the Microsoft confusion.',
        description:
          'Microsoft 365 tenant setup, email DNS, and user configuration for UK small businesses.',
        icon: 'Building2',
        benefits: [
          'Tenant and domain verified',
          'Outlook on all devices',
          'Security defaults applied',
        ],
        problemStatement: 'Microsoft 365 feels overwhelming to set up alone?',
        process: ['Domain verification', 'DNS & MX setup', 'User provisioning and testing'],
        outcomes: ['Business Outlook addresses', 'Secure tenant', 'Smooth team onboarding'],
      },
      {
        id: 'service-spf-dkim',
        name: 'SPF, DKIM & DMARC',
        slug: 'spf-dkim-dmarc',
        shortDescription:
          'Stop your emails landing in spam — we fix authentication records properly.',
        description:
          'SPF, DKIM, and DMARC configuration and alignment for maximum deliverability.',
        icon: 'Shield',
        benefits: [
          'Authentication records fixed',
          'DMARC reporting explained',
          'Spam folder issues resolved',
        ],
        problemStatement: 'Emails going to spam or marked as unauthenticated?',
        process: ['Audit DNS records', 'Fix SPF/DKIM/DMARC', 'Test and monitor'],
        outcomes: ['Inbox placement improved', 'Brand protection', 'Clear reporting'],
      },
      {
        id: 'service-migration',
        name: 'Email Migration',
        slug: 'email-migration',
        shortDescription:
          'Move from old email host or IMAP to Google Workspace or Microsoft 365 — zero drama.',
        description:
          'Mailbox migration with minimal downtime for UK businesses switching providers.',
        icon: 'ArrowRightLeft',
        benefits: [
          'Emails and folders preserved',
          'Zero-downtime planning',
          'Post-migration testing',
        ],
        problemStatement: 'Afraid of losing emails when switching providers?',
        process: ['Pre-migration audit', 'Staged mailbox move', 'DNS cutover and verification'],
        outcomes: ['All mail migrated', 'Team keeps working', 'Old host switched off safely'],
      },
      {
        id: 'service-deliverability',
        name: 'Deliverability Rescue',
        slug: 'email-deliverability',
        shortDescription:
          'Emails going to spam? We diagnose and fix reputation, DNS, and configuration issues.',
        description:
          'Deliverability audit and remediation for UK businesses losing leads to spam folders.',
        icon: 'TrendingUp',
        benefits: [
          'Full DNS & reputation audit',
          'Blacklist and auth fixes',
          'Before/after testing',
        ],
        problemStatement: 'Losing leads because emails never reach the inbox?',
        process: ['Deliverability audit', 'Fix root causes', 'Monitor improvement'],
        outcomes: ['Inbox placement restored', 'Fewer spam reports', 'Confidence to scale sending'],
      },
      {
        id: 'service-dns',
        name: 'DNS & Domain Management',
        slug: 'dns-domain-management',
        shortDescription:
          'Domain DNS, records, and registrar fixes — explained in plain English.',
        description:
          'DNS configuration and domain troubleshooting for business email and websites.',
        icon: 'Globe',
        benefits: [
          'MX, TXT, CNAME records correct',
          'Registrar access sorted',
          'Documentation handover',
        ],
        problemStatement: 'DNS records look like a foreign language?',
        process: ['Audit domain & DNS', 'Apply fixes', 'Document for your team'],
        outcomes: ['Records correct and tested', 'You understand what we changed', 'Fewer future outages'],
      },
    ],
  },

  // FAQ (Sanity-ready: same shape as lib/types FAQItem)
  faq: {
    id: 'faq',
    title: 'Frequently Asked Questions',
    items: [
      {
        id: 'faq-1',
        question: 'How long does business email setup take?',
        answer:
          'Most setups are completed within 24–48 hours. Migrations with many mailboxes may take slightly longer — we will give you a clear timeline before we start.',
      },
      {
        id: 'faq-2',
        question: 'Do you work with UK businesses only?',
        answer:
          'We specialise in UK small businesses — we understand UK registrars, common hosts, and how UK teams use email day to day. We also support international clients who need UK-style professional email setup.',
      },
      {
        id: 'faq-3',
        question: 'Can you fix emails going to spam?',
        answer:
          'Yes. We audit SPF, DKIM, DMARC, MX records, and sending reputation, then fix the root cause. Many clients see improvement within 24–48 hours of DNS changes propagating.',
      },
      {
        id: 'faq-4',
        question: 'Google Workspace or Microsoft 365 — which should I choose?',
        answer:
          'Google Workspace suits teams that live in Gmail and Google Drive. Microsoft 365 suits teams already using Outlook and Office. We will recommend the best fit based on how your team already works.',
      },
      {
        id: 'faq-5',
        question: 'Will my team lose emails during migration?',
        answer:
          'No — we plan migrations to preserve mailboxes, folders, and history. We test before and after cutover so your team keeps working throughout.',
      },
      {
        id: 'faq-6',
        question: 'What is included in the free email audit?',
        answer:
          'We check your SPF, DKIM, DMARC, MX records, and basic deliverability — then send you a plain-English report on what is wrong and what we would fix. No obligation to buy.',
      },
      {
        id: 'faq-7',
        question: 'Are your prices fixed?',
        answer:
          'Yes. Our packages are one-time fixed prices quoted upfront. You know exactly what you are paying before we start — no hourly surprises.',
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
        price: 29,
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
        price: 89,
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
        price: 149,
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
        company: 'https://stokedrivingschool.com - Stoke Driving School',
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
    social: [
      {
        id: 'social-facebook',
        label: 'Facebook',
        href: SOCIAL_LINKS.facebook,
        icon: 'Facebook' as const,
      },
      {
        id: 'social-instagram',
        label: 'Instagram',
        href: SOCIAL_LINKS.instagram,
        icon: 'Instagram' as const,
      },
    ],
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
      'Business Email & Google Workspace Setup UK | The Techie Guys',
    defaultDescription:
      'Business email setup, Google Workspace & Microsoft 365 for UK small businesses. SPF/DKIM/DMARC, email migration, deliverability fixes. Fixed prices. Free audit.',
    baseUrl: 'https://thetechieguys.com',
    // Export public/og-image.png from public/og-image.svg after layout changes (1200×630)
    ogImage: 'https://thetechieguys.com/og-image.png',
  },
};
