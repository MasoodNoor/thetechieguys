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
    tagline: 'Simple IT Support for Your Business',
    description: 'Email, Google Workspace, Microsoft 365, security, and websites',
    email: 'hello@thetechieguys.com',
    phone: BUSINESS_PHONE,
    whatsapp: BUSINESS_PHONE,
    address: 'Karachi, Pakistan',
  },

  // Colors
  colors: {
    primary: '#0066CC',
    accent: '#00AA44',
  },

  // Hero Section
  hero: {
    id: 'hero',
    headline: 'IT Support Made Simple',
    subheadline: 'Email setup, Google Workspace, Microsoft 365, security, websites—without the confusing jargon.',
    ctaPrimary: 'Get Started',
    ctaSecondary: 'Learn More',
    badge: 'Trusted by 50+ UK Businesses',
  },

  // About Section (What We Do)
  whyChooseUs: {
    id: 'about',
    title: 'Why Choose Us?',
    differentiators: [
      {
        id: 'diff-1',
        title: 'No Confusing Tech Talk',
        description: 'We explain things in plain English. You always know what we are doing and why.',
        icon: 'MessageCircle',
      },
      {
        id: 'diff-2',
        title: 'Actually Available',
        description: 'Talk to real people who know your business. No helpdesk queues or automated responses.',
        icon: 'Users',
      },
      {
        id: 'diff-3',
        title: 'Local & Reliable',
        description: 'Manchester-based team who understands UK businesses and your timezone.',
        icon: 'MapPin',
      },
      {
        id: 'diff-4',
        title: 'Fixes Problems First',
        description: 'We stop problems before they happen. Not just fixing things when they break.',
        icon: 'Shield',
      },
      {
        id: 'diff-5',
        title: 'Honest Pricing',
        description: 'Clear packages with no surprise invoices. You know exactly what you are paying for.',
        icon: 'DollarSign',
      },
      {
        id: 'diff-6',
        title: 'Quick Setup',
        description: 'Most setups done in days, not weeks. Zero downtime, so your team keeps working.',
        icon: 'Zap',
      },
    ],
  },

  // Pricing Packages
  pricing: {
    id: 'packages',
    title: 'Simple Packages',
    subtitle: 'Choose what works for your business. All include support and setup.',
    currency: '£',
    tiers: [
      {
        id: 'tier-starter',
        name: 'Starter',
        slug: 'starter',
        description: 'For small teams just getting started',
        price: 99,
        annualPrice: null,
        bestFor: 'Small teams',
        highlighted: false,
        features: [
          { id: 'f1', text: 'Email setup', included: true },
          { id: 'f2', text: 'Up to 3 email accounts', included: true },
          { id: 'f3', text: 'Basic security', included: true },
          { id: 'f4', text: 'Email support', included: true },
          { id: 'f5', text: 'Setup included', included: true },
        ],
        cta: 'Get Started',
        ctaVariant: 'primary' as const,
      },
      {
        id: 'tier-pro',
        name: 'Professional',
        slug: 'professional',
        description: 'Most popular. For growing businesses.',
        price: 299,
        annualPrice: null,
        bestFor: 'Growing businesses',
        highlighted: true,
        features: [
          { id: 'f6', text: 'Everything in Starter', included: true },
          { id: 'f7', text: 'Google Workspace setup', included: true },
          { id: 'f8', text: 'Team collaboration', included: true },
          { id: 'f9', text: 'Advanced security', included: true },
          { id: 'f10', text: 'Phone support', included: true },
          { id: 'f11', text: 'Monthly check-ins', included: true },
        ],
        cta: 'Choose Plan',
        ctaVariant: 'primary' as const,
      },
      {
        id: 'tier-enterprise',
        name: 'Enterprise',
        slug: 'enterprise',
        description: 'For complex setups and larger teams',
        price: null,
        annualPrice: null,
        bestFor: 'Enterprise',
        highlighted: false,
        features: [
          { id: 'f12', text: 'Everything in Professional', included: true },
          { id: 'f13', text: 'Microsoft 365 setup', included: true },
          { id: 'f14', text: 'Custom domain & website', included: true },
          { id: 'f15', text: 'Full security audit', included: true },
          { id: 'f16', text: 'Dedicated support', included: true },
          { id: 'f17', text: 'Custom integrations', included: true },
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
        quote: 'They fixed our email chaos in one day. Simple process, no stress, and they actually explained what they were doing.',
        author: 'Sarah Johnson',
        role: 'Director',
        company: 'Marketing Agency',
        location: 'Manchester',
        rating: 5,
      },
      {
        id: 'testimonial-2',
        quote: 'Finally, someone who speaks plain English about IT. They made our security setup painless.',
        author: 'Mike Davies',
        role: 'Practice Manager',
        company: 'Dental Practice',
        location: 'Manchester',
        rating: 5,
      },
      {
        id: 'testimonial-3',
        quote: 'Quick, professional, and actually friendly. This is IT support done right.',
        author: 'Emma Wilson',
        role: 'Accountant',
        company: 'Accounting Firm',
        location: 'North West',
        rating: 5,
      },
    ],
  },

  // Contact Section
  contact: {
    id: 'contact',
    title: 'Ready to Get Started?',
    description: 'Get in touch. We respond within 2 hours.',
    responseTime: 'Within 2 Hours',
    methods: [
      {
        id: 'contact-whatsapp',
        label: 'WhatsApp',
        value: 'Message Us',
        href: `https://wa.me/${PHONE_DIGITS}?text=Hi,%20I%20need%20help`,
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
    defaultTitle: 'The Techie Guys - Simple IT Support for UK Businesses',
    defaultDescription: 'Email, Google Workspace, Microsoft 365, security, and websites. No confusing jargon. Simple IT support for UK businesses.',
    baseUrl: 'https://thetechieguys.com',
    ogImage: 'https://thetechieguys.com/og-image.png',
  },
};
