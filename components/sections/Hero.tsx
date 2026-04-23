/**
 * Hero Section Component
 * Sanity.io compatible with configurable data
 */

import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/siteConfig';

interface HeroProps {
  id?: string;
  title?: string;
  subtitle?: string;
  ctaPrimary?: { text: string; href: string } | string;
  ctaSecondary?: { text: string; href: string } | string;
  badge?: string;
  backgroundColor?: string;
  textColor?: string;
  hideSecondaryButton?: boolean;
}

export function Hero({
  id = 'hero',
  title = siteConfig.hero.headline,
  subtitle = siteConfig.hero.subheadline,
  ctaPrimary = { text: siteConfig.hero.ctaPrimary, href: '#contact' },
  ctaSecondary = { text: siteConfig.hero.ctaSecondary, href: '/services' },
  badge = siteConfig.hero.badge,
  backgroundColor = 'bg-gradient-to-b from-blue-50 to-white',
  textColor = 'text-neutral-900',
  hideSecondaryButton = false,
}: HeroProps) {
  // Handle both string and object formats for CTAs
  const primaryCta = typeof ctaPrimary === 'string' ? { text: ctaPrimary, href: '#contact' } : ctaPrimary
  const secondaryCta = typeof ctaSecondary === 'string' ? { text: ctaSecondary, href: '/services' } : ctaSecondary
  return (
    <section id={id} className={`relative ${backgroundColor} py-20 md:py-32 overflow-hidden`}>
      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-200/20 rounded-full blur-3xl animate-pulse duration-8" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {/* {badge && (
            <div className="inline-block mb-6 animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-200 hover:shadow-md transition-shadow">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                {badge}
              </span>
            </div>
          )} */}

          {/* Headline */}
          <h1 className={`${textColor} text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-down`}>
            {title}
          </h1>

          {/* Subheadline */}
          <p className={`text-lg md:text-xl ${textColor} opacity-80 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-down [animation-delay:200ms]`}>
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-down [animation-delay:400ms]">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
            >
              <a href={primaryCta.href}>{primaryCta.text}</a>
            </Button>
            {/* {!hideSecondaryButton && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto px-8 py-6 text-base border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:shadow-md"
              >
                <a href={secondaryCta.href}>{secondaryCta.text}</a>
              </Button>
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
}
