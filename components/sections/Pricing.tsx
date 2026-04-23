/**
 * Pricing Section Component
 * Displays pricing tiers with features
 */

import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/siteConfig';
import { PricingTier } from '@/lib/types';
import { CheckCircle2, Circle } from 'lucide-react';

interface PricingProps {
  id?: string;
  title?: string;
  subtitle?: string;
  tiers?: PricingTier[];
  currency?: string;
  backgroundColor?: string;
  accentColor?: string;
  highlightColor?: string;
}

export function Pricing({
  id = siteConfig.pricing.id,
  title = siteConfig.pricing.title,
  subtitle = siteConfig.pricing.subtitle,
  tiers = siteConfig.pricing.tiers,
  currency = siteConfig.pricing.currency,
  backgroundColor = 'bg-white',
  accentColor = 'text-blue-600',
  highlightColor = 'border-blue-600 bg-blue-50',
}: PricingProps) {
  return (
    <section id={id} className={`${backgroundColor} py-16 md:py-24`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>}
          {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-lg border-2 p-8 flex flex-col h-full transition-all ${
                tier.highlighted ? `${highlightColor}` : 'bg-white border-gray-200'
              }`}
            >
              {/* Highlighted Badge */}
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    {tier.cta}
                  </span>
                </div>
              )}

              {/* Tier Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>

              {/* Best For */}
              <p className="text-sm text-gray-600 mb-4">{tier.bestFor}</p>

              {/* Description */}
              <p className="text-sm text-gray-700 mb-6">{tier.description}</p>

              {/* Price */}
              <div className="mb-6">
                {tier.monthlyPrice ? (
                  <div>
                    <span className="text-4xl font-bold text-gray-900">{currency}{tier.monthlyPrice}</span>
                    <span className="text-gray-600">/month</span>
                    <p className="text-xs text-gray-500 mt-1">or {currency}{tier.annualPrice}/year</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-2xl font-bold text-gray-900">Custom Pricing</p>
                    <p className="text-sm text-gray-600">Contact for quote</p>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <Button
                className="w-full mb-8"
                variant={tier.ctaVariant === 'primary' ? 'default' : 'outline'}
                size="lg"
              >
                {tier.cta}
              </Button>

              {/* Features */}
              <div className="space-y-4 flex-1">
                {tier.features.map((feature) => (
                  <div key={feature.id} className="flex gap-3 items-start">
                    {feature.included ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                    )}
                    <span
                      className={`text-sm ${
                        feature.included ? 'text-gray-900 font-medium' : 'text-gray-500 line-through'
                      }`}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
