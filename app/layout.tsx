import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { siteConfig } from '@/lib/siteConfig'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  // ── Core ────────────────────────────────────────────────────────────────
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
  metadataBase: new URL(siteConfig.seo.baseUrl),

  // ── Canonical & Robots ──────────────────────────────────────────────────
  alternates: {
    canonical: siteConfig.seo.baseUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ── Keywords (still used by some search engines & LLMs) ─────────────────
  keywords: [
    'business email setup UK',
    'Google Workspace setup UK',
    'Microsoft 365 setup small business',
    'SPF DKIM DMARC configuration',
    'email deliverability fix UK',
    'email migration service UK',
    'fix emails going to spam',
    'domain DNS configuration UK',
    'Google Workspace specialist UK',
    'Microsoft 365 specialist UK',
    'business email specialist',
    'email infrastructure UK',
    'DMARC setup UK',
    'professional email setup',
    'email migration IMAP to Google Workspace',
  ],

  // ── Open Graph ──────────────────────────────────────────────────────────
  openGraph: {
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    url: siteConfig.seo.baseUrl,
    siteName: siteConfig.business.name,
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: 'The Techie Guys — Business Email Setup & Google Workspace Specialists',
      },
    ],
  },

  // ── Twitter / X Card ────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [siteConfig.seo.ogImage] ,
  },

  // ── Icons ───────────────────────────────────────────────────────────────
  // icons: {
  //   icon: [
  //     {
  //       url: '/favicon.ico', // The universal fallback
  //     },
  //     {
  //       url: '/icon-light-32x32.png',
  //       media: '(prefers-color-scheme: light)',
  //     },
  //     {
  //       url: '/icon-dark-32x32.png',
  //       media: '(prefers-color-scheme: dark)',
  //     },
  //     {
  //       url: '/icon.svg',
  //       type: 'image/svg+xml',
  //     },
  //   ],
  //   apple: '/apple-icon.png',
  // },
  icons: {
    icon: [
      { url: '/favicon.ico' }, // Universal Fallback
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' }, // For Google Search
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  // ── Author & Publisher ──────────────────────────────────────────────────
  authors: [{ name: 'The Techie Guys', url: siteConfig.seo.baseUrl }],
  creator: 'The Techie Guys',
  publisher: 'The Techie Guys',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
  themeColor: siteConfig.colors.primary,
}

// ── JSON-LD Structured Data ────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'The Techie Guys',
  url: 'https://thetechieguys.com',
  logo: 'https://thetechieguys.com/icon.svg',
  description:
    'Professional business email setup, Google Workspace, Microsoft 365 and DNS configuration for UK small businesses. SPF, DKIM, DMARC specialists.',
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  serviceType: [
    'Business Email Setup',
    'Google Workspace Setup',
    'Microsoft 365 Setup',
    'SPF DKIM DMARC Configuration',
    'Email Migration',
    'Email Deliverability Fix',
    'DNS Configuration',
    'Domain Management',
  ],
  priceRange: '££',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'hello@thetechieguys.com',
    availableLanguage: 'English',
  },
  sameAs: ['https://www.linkedin.com/company/thetechieguys/'],
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter Email Setup Package',
      description:
        'Business email setup with SPF, DKIM, DMARC and 30 days support.',
      price: '49',
      priceCurrency: 'GBP',
    },
    {
      '@type': 'Offer',
      name: 'Professional Email Package',
      description:
        'Complete email setup and migration for up to 10 users including Google Workspace or Microsoft 365.',
      price: '119',
      priceCurrency: 'GBP',
    },
    {
      '@type': 'Offer',
      name: 'Business Email Package',
      description:
        'Full enterprise email infrastructure for up to 30 users with 90 days priority support.',
      price: '249',
      priceCurrency: 'GBP',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <Navbar />
        {children}
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
