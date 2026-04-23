/**
 * Services Section Component
 * Displays all services as cards
 */

import Link from 'next/link';
import * as Icons from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/siteConfig';
import { Service } from '@/lib/types';

interface ServicesProps {
  id?: string;
  title?: string;
  services?: Service[];
  backgroundColor?: string;
  accentColor?: string;
}

export function Services({
  id = siteConfig.services.id,
  title = siteConfig.services.title,
  services = siteConfig.services.items,
  backgroundColor = 'bg-gray-50',
  accentColor = 'text-blue-600',
}: ServicesProps) {
  return (
    <section id={id} className={`${backgroundColor} py-16 md:py-24`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            // Get the icon component dynamically
            const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{
              className?: string;
            }>;

            return (
              <Link key={service.id} href={`/services/${service.slug}`}>
                <div className="h-full bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
                  {/* Icon */}
                  {IconComponent && (
                    <div className={`${accentColor} mb-4`}>
                      <IconComponent className="w-10 h-10" />
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>

                  {/* Short Description */}
                  <p className="text-gray-600 text-sm mb-4">{service.shortDescription}</p>

                  {/* Benefits */}
                  <ul className="space-y-2 mb-6">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex gap-2">
                        <span className="text-blue-600 font-bold">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <div className="text-blue-600 font-medium text-sm hover:text-blue-700">
                    Learn More →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
