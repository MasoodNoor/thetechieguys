/**
 * Trust Signals Section Component
 * Displays stats and trust badges
 */

import * as Icons from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import { TrustSignal } from '@/lib/types';

interface TrustSignalsProps {
  id?: string;
  title?: string;
  signals?: TrustSignal[];
  backgroundColor?: string;
  accentColor?: string;
}

export function TrustSignals({
  id = siteConfig.trustSignals.id,
  title = siteConfig.trustSignals.title,
  signals = siteConfig.trustSignals.signals,
  backgroundColor = 'bg-gray-50',
  accentColor = 'text-blue-600',
}: TrustSignalsProps) {
  return (
    <section id={id} className={`${backgroundColor} py-16 md:py-24`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {signals.map((signal) => {
            // Get the icon component dynamically
            const IconComponent = Icons[signal.icon as keyof typeof Icons] as React.ComponentType<{
              className?: string;
            }>;

            return (
              <div
                key={signal.id}
                className="text-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                {IconComponent && (
                  <div className={`${accentColor} mb-4 flex justify-center`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                )}
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {signal.stat}
                </div>
                <p className="text-gray-600 text-sm">{signal.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
