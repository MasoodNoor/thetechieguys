import { PackageCtaButton } from '@/components/ui/package-cta-button'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { FadeInView } from '@/components/ui/fade-in-view'
import { siteConfig } from '@/lib/siteConfig'
import { PricingTier } from '@/lib/types'
import { CheckCircle2, Circle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PricingProps {
  id?: string
  title?: string
  subtitle?: string
  tiers?: PricingTier[]
  currency?: string
}

export function Pricing({
  id = siteConfig.pricing.id,
  title = siteConfig.pricing.title,
  subtitle = siteConfig.pricing.subtitle,
  tiers = siteConfig.pricing.tiers,
  currency = siteConfig.pricing.currency,
}: PricingProps) {
  return (
    <Section id={id} variant="default">
      {(title || subtitle) && <SectionHeading title={title ?? ''} subtitle={subtitle} />}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
        {tiers.map((tier, index) => (
          <FadeInView key={tier.id} delay={index * 100}>
            <div
              className={cn(
                'relative rounded-xl border-2 p-8 flex flex-col h-full',
                'motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out',
                'hover:shadow-lg hover:-translate-y-1',
                tier.highlighted
                  ? 'border-primary bg-primary/5 dark:bg-primary/10 shadow-md'
                  : 'border-border bg-card',
              )}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                    Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{tier.bestFor}</p>
              <p className="text-sm text-foreground/80 mb-6">{tier.description}</p>

              <div className="mb-6">
                {tier.price ? (
                  <span className="text-4xl font-bold text-foreground flex items-center justify-center">
                    {currency}
                    {tier.price}
                  </span>
                ) : (
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">Custom Pricing</p>
                    <p className="text-sm text-muted-foreground">Contact for quote</p>
                  </div>
                )}
              </div>

              <PackageCtaButton
                slug={tier.slug}
                label={tier.cta}
                variant={tier.ctaVariant === 'primary' ? 'primary' : 'secondary'}
              />

              <div className="space-y-4 flex-1">
                {tier.features.map((feature) => (
                  <div key={feature.id} className="flex gap-3 items-start">
                    {feature.included ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="w-5 h-5 text-muted-foreground/40 flex-shrink-0 mt-0.5" />
                    )}
                    <span
                      className={cn(
                        'text-sm',
                        feature.included
                          ? 'text-foreground font-medium'
                          : 'text-muted-foreground line-through',
                      )}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInView>
        ))}
      </div>
    </Section>
  )
}
