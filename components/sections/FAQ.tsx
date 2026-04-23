/**
 * FAQ Section Component
 * Displays frequently asked questions in accordion
 */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { siteConfig } from '@/lib/siteConfig';
import { FAQItem } from '@/lib/types';

interface FAQProps {
  id?: string;
  title?: string;
  faqItems?: FAQItem[];
  backgroundColor?: string;
}

export function FAQ({
  id = siteConfig.faq.id,
  title = siteConfig.faq.title,
  faqItems = siteConfig.faq.items,
  backgroundColor = 'bg-white',
}: FAQProps) {
  return (
    <section id={id} className={`${backgroundColor} py-16 md:py-24`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              {title}
            </h2>
          )}

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-blue-600 py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
