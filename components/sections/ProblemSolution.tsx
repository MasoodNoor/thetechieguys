/**
 * Problem/Solution Section Component
 * Shows common problems and how they're solved
 */

import { siteConfig } from '@/lib/siteConfig';
import { ProblemSolutionCard as ProblemSolutionCardType } from '@/lib/types';
import { ArrowRight } from 'lucide-react';

interface ProblemSolutionProps {
  id?: string;
  title?: string;
  cards?: ProblemSolutionCardType[];
  backgroundColor?: string;
  accentColor?: string;
}

export function ProblemSolution({
  id = siteConfig.problemSolution.id,
  title = siteConfig.problemSolution.title,
  cards = siteConfig.problemSolution.cards,
  backgroundColor = 'bg-white',
  accentColor = 'bg-blue-600',
}: ProblemSolutionProps) {
  return (
    <section id={id} className={`${backgroundColor} py-16 md:py-24`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.id} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              {/* Problem */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Problem</h3>
                <p className="text-gray-700">{card.problem}</p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center mb-6">
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Solution</h3>
                <p className="text-gray-700">{card.solution}</p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center mb-6">
                <ArrowRight className="w-5 h-5 text-green-600" />
              </div>

              {/* Outcome */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Outcome</h3>
                <p className="text-gray-700">{card.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
