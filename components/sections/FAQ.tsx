import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { FadeInView } from '@/components/ui/fade-in-view'
import { siteConfig } from '@/lib/siteConfig'
import { FAQItem } from '@/lib/types'

interface FAQProps {
  id?: string
  title?: string
  faqItems?: FAQItem[]
}

export function FAQ({
  id = siteConfig.faq.id,
  title = siteConfig.faq.title,
  faqItems = siteConfig.faq.items,
}: FAQProps) {
  return (
    <Section id={id} variant="default">
      <div className="max-w-3xl mx-auto">
        {title && <SectionHeading title={title} />}

        <FadeInView delay={150}>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-b border-border">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary py-4 transition-colors duration-300">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeInView>
      </div>
    </Section>
  )
}
