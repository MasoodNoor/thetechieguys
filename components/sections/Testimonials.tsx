/**
 * Testimonials Section Component
 * Displays client testimonials with carousel
 */

import { Star } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import { Testimonial } from '@/lib/types';

interface TestimonialsProps {
  id?: string;
  title?: string;
  testimonials?: Testimonial[];
  backgroundColor?: string;
  accentColor?: string;
}

export function Testimonials({
  id = siteConfig.testimonials.id,
  title = siteConfig.testimonials.title,
  testimonials = siteConfig.testimonials.items,
  backgroundColor = 'bg-white',
  accentColor = 'text-yellow-400',
}: TestimonialsProps) {
  return (
    <section id={id} className={`${backgroundColor} py-16 md:py-24`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 fill-yellow-400 ${accentColor}`} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author Info */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  {testimonial.image && (
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
