import { Button } from './Button';

export function Hero() {
  return (
    <section className="min-h-screen pt-24 bg-gradient-radial from-emperor-black to-emperor-gray">
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="font-heading text-5xl lg:text-6xl text-emperor-white mb-6">
            Transform Your Life with Digital Empire
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Join thousands of successful entrepreneurs who have already unlocked their financial freedom using our proven strategies. Get instant access to the blueprint that's generating millions in online revenue.
          </p>
          <div className="space-y-4 mb-8 text-left">
            <p className="text-gray-300">✓ Step-by-step guide to building profitable online businesses</p>
            <p className="text-gray-300">✓ Strategies used by successful digital entrepreneurs</p>
            <p className="text-gray-300">✓ Exclusive Millionaire Routine Planner included as FREE bonus</p>
          </div>
          <Button glowing className="text-xl">
            Get Started Now - Only $19.99
          </Button>
        </div>
        <div className="flex-1 relative">
          <div className="w-full max-w-md mx-auto">
            <img
              src="https://i.imgur.com/zBbcC36.png"
              alt="Digital Empire Ebook"
              className="w-full h-auto rounded-lg shadow-2xl shadow-emperor-white/20 hover:shadow-emperor-white/40 transition-all duration-300"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}