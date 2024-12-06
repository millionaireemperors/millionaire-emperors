export function Author() {
  return (
    <section className="py-24 bg-emperor-black/95">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
              alt="Author"
              className="w-full max-w-md mx-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-500 shadow-xl shadow-emperor-green/20"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-4xl font-heading text-white mb-6">
              From Vision to Empire
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              "I've built my own digital empire—and now I'm sharing the exact
              roadmap to help you do the same. This isn't just another ebook;
              it's your blueprint to financial freedom."
            </p>
            <div className="flex items-center gap-4">
              <div className="h-1 w-12 bg-emperor-gold"></div>
              <p className="text-emperor-gold font-heading">John Emperor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}