import * as Icons from 'lucide-react'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { AnimatedCard } from '@/components/ui/animated-card'
import { siteConfig } from '@/lib/siteConfig'
import { Differentiator } from '@/lib/types'

interface WhyChooseUsProps {
  id?: string
  title?: string
  differentiators?: Differentiator[]
}

export function WhyChooseUs({
  id = siteConfig.whyChooseUs.id,
  title = siteConfig.whyChooseUs.title,
  differentiators = siteConfig.whyChooseUs.differentiators,
}: WhyChooseUsProps) {
  return (
    <Section id={id} variant="muted">
      {title && <SectionHeading title={title} />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {differentiators.map((diff, index) => {
          const IconComponent = Icons[diff.icon as keyof typeof Icons] as React.ComponentType<{
            className?: string
          }>

          return (
            <AnimatedCard key={diff.id} delay={index * 80}>
              {IconComponent && (
                <div className="text-primary mb-4">
                  <IconComponent className="w-10 h-10" />
                </div>
              )}
              <h3 className="text-xl font-bold text-foreground mb-3">{diff.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{diff.description}</p>
            </AnimatedCard>
          )
        })}
      </div>
    </Section>
  )
}
