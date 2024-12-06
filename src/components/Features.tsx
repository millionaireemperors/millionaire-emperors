import {
  BarChart3,
  BookOpen,
  Calendar,
  Target,
  Users,
  Zap,
  DollarSign,
  TrendingUp,
} from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Complete Business Blueprint',
    description: 'Step-by-step guide to launching your digital empire from scratch',
  },
  {
    icon: BarChart3,
    title: 'Proven Marketing Systems',
    description: 'Copy-paste marketing strategies that drive consistent sales',
  },
  {
    icon: Calendar,
    title: 'Premium Planner (FREE)',
    description: 'Structure your day like successful millionaires',
  },
  {
    icon: Target,
    title: 'ROI-Focused Strategies',
    description: 'Focus on high-impact activities that generate real revenue',
  },
  {
    icon: Users,
    title: 'Audience Building',
    description: 'Create a loyal following that buys from you repeatedly',
  },
  {
    icon: Zap,
    title: 'Rapid Implementation',
    description: 'Start seeing results in your first week of implementation',
  },
  {
    icon: DollarSign,
    title: 'Multiple Income Streams',
    description: 'Diversify your revenue with proven business models',
  },
  {
    icon: TrendingUp,
    title: 'Scaling Strategies',
    description: 'Take your business from 4 to 6 figures and beyond',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-emperor-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading text-center text-emperor-white mb-8">
          What's Inside Digital Empire?
        </h2>
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16">
          This isn't just another ebook - it's your complete roadmap to building a successful online business. Every strategy has been tested and proven to work in real-world scenarios.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-lg border border-emperor-white/20 bg-gradient-to-br from-emperor-black to-emperor-gray hover:border-emperor-white/40 transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-emperor-white mb-4" />
              <h3 className="text-xl font-heading text-emperor-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}