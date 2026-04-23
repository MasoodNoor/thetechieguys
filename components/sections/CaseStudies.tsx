/**
 * Case Studies Section Component
 * Displays featured case studies
 */

import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import { CaseStudy } from '@/lib/types';

interface CaseStudiesProps {
  id?: string;
  title?: string;
  caseStudies?: CaseStudy[];
  backgroundColor?: string;
  accentColor?: string;
}

export function CaseStudies({
  id = siteConfig.caseStudies.id,
  title = siteConfig.caseStudies.title,
  caseStudies = siteConfig.caseStudies.items,
  backgroundColor = 'bg-gray-50',
  accentColor = 'text-blue-600',
}: CaseStudiesProps) {
  return (
    <section id={id} className={`${backgroundColor} py-16 md:py-24`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            {title}
          </h2>
        )}

        <div className="space-y-12">
          {caseStudies.map((caseStudy, idx) => (
            <Link key={caseStudy.id} href={`/case-studies/${caseStudy.slug}`}>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                  {/* Image - Right on desktop, top on mobile */}
                  {caseStudy.image && (
                    <div className={`${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                  )}

                  {/* Content - Left on desktop, bottom on mobile */}
                  <div className={`flex flex-col justify-center ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                    <p className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2">
                      {caseStudy.industry}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{caseStudy.title}</h3>

                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-700">{caseStudy.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-700">{caseStudy.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Results</h4>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, idx) => (
                          <li key={idx} className="flex gap-2 text-gray-700">
                            <span className="text-green-600 font-bold">✓</span>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`text-2xl font-bold ${accentColor}`}>
                      {caseStudy.metric}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
