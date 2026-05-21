import { siteConfig } from '@/lib/siteConfig'

/** Review + AggregateRating for JSON-LD (matches visible testimonials) */
export function getReviewsForSchema() {
  const items = siteConfig.testimonials.items
  if (items.length === 0) return {}

  const ratings = items.map((t) => t.rating)
  const avg =
    ratings.reduce((sum, r) => sum + r, 0) / ratings.length

  return {
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avg.toFixed(1),
      reviewCount: String(items.length),
      bestRating: '5',
      worstRating: '1',
    },
    review: items.map((t) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: t.author },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(t.rating),
        bestRating: '5',
        worstRating: '1',
      },
      reviewBody: t.quote,
    })),
  }
}

/** Schema.org Offer entries — prices from siteConfig.pricing */
export function getPricingOffersForSchema() {
  const { currency, tiers } = siteConfig.pricing
  return tiers.map((tier) => ({
    '@type': 'Offer' as const,
    name: `${tier.name} Package`,
    description: tier.description,
    price: String(tier.price),
    priceCurrency: currency === '£' ? 'GBP' : 'GBP',
  }))
}

/** FAQPage schema — matches visible FAQ accordion */
export function getFaqPageSchema() {
  return {
    '@type': 'FAQPage',
    mainEntity: siteConfig.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

/** Plain-text summary for /llms.txt — kept in sync with siteConfig */
export function buildLlmsTxt(): string {
  const { business, pricing, contact, services } = siteConfig
  const serviceLines = services.items
    .map((s) => `- ${s.name}: ${s.shortDescription}`)
    .join('\n')
  const packageLines = pricing.tiers
    .map(
      (tier) =>
        `- ${tier.name}: ${pricing.currency}${tier.price} one-time — ${tier.description}`,
    )
    .join('\n')

  return `# ${business.name}

> ${business.description}
> Fixed prices. 24-48 hour turnaround.

## Services
${serviceLines}

## Packages
${packageLines}

## Target Audience
UK small businesses, solo traders, and growing teams who need
professional email infrastructure without technical complexity.

## Contact
- Website: ${siteConfig.seo.baseUrl}
- Email: ${business.email}
- Response time: ${contact.responseTime.toLowerCase()}`
}
