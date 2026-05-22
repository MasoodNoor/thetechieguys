import type { ComponentType } from 'react'
import * as Icons from 'lucide-react'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { AnimatedCard } from '@/components/ui/animated-card'
import { siteConfig } from '@/lib/siteConfig'
import { Service } from '@/lib/types'

interface ServicesProps {
  id?: string
  title?: string
  services?: Service[]
  cardHref?: string
}

export function Services({
  id = siteConfig.services.id,
  title = siteConfig.services.title,
  services = siteConfig.services.items,
  cardHref = '#contact',
}: ServicesProps) {
  return (
    <Section id={id} variant="muted">
      {title && <SectionHeading title={title} />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const IconComponent = Icons[service.icon as keyof typeof Icons] as ComponentType<{
            className?: string
          }>

          return (
            <AnimatedCard
              key={service.id}
              as="a"
              href={cardHref}
              delay={index * 80}
              className="cursor-pointer h-full"
            >
              {IconComponent && (
                <div className="text-primary mb-4">
                  <IconComponent className="w-10 h-10" />
                </div>
              )}
              <h3 className="text-xl font-bold text-foreground mb-2">{service.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.shortDescription}</p>
              <ul className="space-y-2 mb-6">
                {service.benefits.slice(0, 2).map((benefit, idx) => (
                  <li key={idx} className="text-sm text-foreground/80 flex gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="text-primary font-medium text-sm transition-colors duration-300 group-hover:text-primary/80">
                Get in touch →
              </div>
            </AnimatedCard>
          )
        })}
      </div>
    </Section>
  )
}
