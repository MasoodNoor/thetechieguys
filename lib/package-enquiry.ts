import { siteConfig } from '@/lib/siteConfig'
import type { PricingTier } from '@/lib/types'

export const PACKAGE_QUERY_KEY = 'package'

export function findTierBySlug(slug: string): PricingTier | undefined {
  return siteConfig.pricing.tiers.find((tier) => tier.slug === slug)
}

export function buildPackageEnquiryMessage(
  tier: Pick<PricingTier, 'name' | 'price'>,
  currency = siteConfig.pricing.currency,
): string {
  if (tier.price != null) {
    return `Hi, I'm interested in the ${tier.name} package (${currency}${tier.price}). Please get in touch with next steps.`
  }
  return `Hi, I'm interested in the ${tier.name} package. I'd like to discuss pricing and next steps.`
}

export function getPackageEnquiryHref(slug: string): string {
  return `?${PACKAGE_QUERY_KEY}=${encodeURIComponent(slug)}#contact`
}
