/**
 * Why Choose Us Section Component
 * Displays company differentiators
 */

import * as Icons from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import { Differentiator } from '@/lib/types';

interface WhyChooseUsProps {
  id?: string;
  title?: string;
  differentiators?: Differentiator[];
  backgroundColor?: string;
  accentColor?: string;
}

export function WhyChooseUs({
  id = siteConfig.whyChooseUs.id,
  title = siteConfig.whyChooseUs.title,
  differentiators = siteConfig.whyChooseUs.differentiators,
  backgroundColor = 'bg-gray-50',
  accentColor = 'text-blue-600',
}: WhyChooseUsProps) {
  return (
    <section id={id} className={`${backgroundColor} py-16 md:py-24`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((diff) => {
            // Get the icon component dynamically
            const IconComponent = Icons[diff.icon as keyof typeof Icons] as React.ComponentType<{
              className?: string;
            }>;

            return (
              <div
                key={diff.id}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                {/* Icon */}
                {IconComponent && (
                  <div className={`${accentColor} mb-4`}>
                    <IconComponent className="w-10 h-10" />
                  </div>
                )}

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{diff.title}</h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">{diff.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
