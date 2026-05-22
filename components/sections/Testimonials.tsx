import { Star } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { AnimatedCard } from '@/components/ui/animated-card'
import { siteConfig } from '@/lib/siteConfig'
import { Testimonial } from '@/lib/types'

interface TestimonialsProps {
  id?: string
  title?: string
  testimonials?: Testimonial[]
}

export function Testimonials({
  id = siteConfig.testimonials.id,
  title = siteConfig.testimonials.title,
  testimonials = siteConfig.testimonials.items,
}: TestimonialsProps) {
  return (
    <Section id={id} variant="default">
      {title && <SectionHeading title={title} />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <AnimatedCard key={testimonial.id} delay={index * 100} className="bg-muted/30">
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <p className="text-foreground/90 text-lg leading-relaxed mb-6 italic">
              &quot;{testimonial.quote}&quot;
            </p>

            <div className="pt-6 border-t border-border">
              <div className="flex items-center gap-4">
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-border"
                  />
                )}
                <div>
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                  <p className="text-xs text-muted-foreground/80 mt-1">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </Section>
  )
}
