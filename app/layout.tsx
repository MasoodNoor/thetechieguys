import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { siteConfig } from '@/lib/siteConfig'
import {
  getFaqPageSchema,
  getPricingOffersForSchema,
  getReviewsForSchema,
} from '@/lib/seo'
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
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' }, // Google-friendly (multiple of 48)
      { url: '/icon.svg', type: 'image/svg+xml' },  
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      { url: '/favicon.ico' }, // Universal fallback (incl. legacy)
      
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
  '@graph': [
    {
      '@type': 'ProfessionalService',
      name: siteConfig.business.name,
      url: siteConfig.seo.baseUrl,
      logo: `${siteConfig.seo.baseUrl}/icon.svg`,
      description: siteConfig.business.description,
      areaServed: {
        '@type': 'Country',
        name: 'United Kingdom',
      },
      serviceType: siteConfig.services.items.map((s) => s.name),
      priceRange: '££',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: siteConfig.business.email,
        telephone: siteConfig.business.phone,
        areaServed: 'GB',
        availableLanguage: 'English',
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'GB',
        description: siteConfig.business.address,
      },
      sameAs: [
        'https://www.linkedin.com/company/thetechieguys/',
        siteConfig.business.social.facebook,
        siteConfig.business.social.instagram,
      ],
      offers: getPricingOffersForSchema(),
      ...getReviewsForSchema(),
    },
    getFaqPageSchema(),
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
