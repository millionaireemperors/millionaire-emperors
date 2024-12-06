import { Check, ArrowRight } from 'lucide-react';
import { Button } from './Button';

const benefits = [
  'Complete Digital Empire Ebook',
  'Exclusive Millionaire Routine Planner (FREE Bonus)',
  'Lifetime Updates',
];

export function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-b from-emperor-black to-emperor-gray">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-heading text-emperor-white mb-6">
          Special Launch Offer
        </h2>
        <p className="text-gray-300 text-xl mb-16 max-w-3xl mx-auto">
          Today's Price: <span className="text-emperor-white font-bold">Just $19.99</span>
        </p>
        <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-emperor-black/40 backdrop-blur-sm border border-emperor-white/20">
          <div className="space-y-4 mb-8">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center justify-center gap-2 text-gray-300">
                <Check className="text-emperor-white" />
                {benefit}
              </div>
            ))}
          </div>
          <Button glowing className="text-xl mb-6">
            Get Instant Access <ArrowRight className="inline-block ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}