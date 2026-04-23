/**
 * Call To Action Section Component
 * Generic CTA section for bottom of pages
 */

import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/siteConfig';

interface CTAProps {
  id?: string;
  headline?: string;
  subheadline?: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
  backgroundColor?: string;
  textColor?: string;
}

export function CTA({
  id = 'cta',
  headline = siteConfig.cta.ctaHeadline,
  subheadline = siteConfig.cta.ctaSubheadline,
  primaryCta = siteConfig.cta.primaryButton,
  primaryHref = '/contact',
  secondaryCta = 'Learn More',
  secondaryHref = '/services',
  backgroundColor = 'bg-blue-600',
  textColor = 'text-white',
}: CTAProps) {
  return (
    <section id={id} className={`${backgroundColor} py-16 md:py-24`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textColor}`}>{headline}</h2>
          <p className={`text-lg mb-8 ${textColor} opacity-90`}>{subheadline}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-base font-semibold"
            >
              <a href={primaryHref}>{primaryCta}</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-blue-700 px-8 py-6 text-base"
            >
              <a href={secondaryHref}>{secondaryCta}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
