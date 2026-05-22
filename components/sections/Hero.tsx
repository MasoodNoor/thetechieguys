import { Button } from '@/components/ui/button'
import { FadeInView } from '@/components/ui/fade-in-view'
import { siteConfig } from '@/lib/siteConfig'

interface HeroProps {
  id?: string
  title?: string
  subtitle?: string
  ctaPrimary?: { text: string; href: string } | string
  badge?: string
}

export function Hero({
  id = 'hero',
  title = siteConfig.hero.headline,
  subtitle = siteConfig.hero.subheadline,
  ctaPrimary = {
    text: siteConfig.hero.ctaPrimary,
    href: siteConfig.hero.ctaPrimaryHref,
  },
  badge = siteConfig.hero.badge,
}: HeroProps) {
  const primaryCta =
    typeof ctaPrimary === 'string'
      ? { text: ctaPrimary, href: siteConfig.hero.ctaPrimaryHref }
      : ctaPrimary

  return (
    <section
      id={id}
      className="relative bg-gradient-to-b from-primary/5 via-background to-background py-20 md:py-32 overflow-hidden transition-colors duration-300"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 right-10 w-80 h-80 bg-primary/15 rounded-full blur-3xl motion-safe:animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-400/10 rounded-full blur-3xl motion-safe:animate-pulse duration-8" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {badge && (
            <FadeInView className="inline-block mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 transition-shadow duration-300 hover:shadow-md">
                <span className="inline-block w-2 h-2 bg-primary rounded-full motion-safe:animate-pulse" />
                {badge}
              </span>
            </FadeInView>
          )}

          <FadeInView delay={100}>
            <h1 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              {title}
            </h1>
          </FadeInView>

          <FadeInView delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
              {subtitle}
            </p>
          </FadeInView>

          <FadeInView delay={300} className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto px-8 py-6 text-base motion-safe:transition-all motion-safe:duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <a href={primaryCta.href}>{primaryCta.text}</a>
            </Button>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}
