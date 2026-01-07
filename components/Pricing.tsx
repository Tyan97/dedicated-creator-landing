export default function Pricing() {
  return (
    <section id="packages" className="py-32 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            Packages
          </span>
          <h2 className="text-[48px] font-bold tracking-tight">
            Simple, <span className="text-accent">predictable</span> pricing
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          <PriceCard
            title="Starter"
            price="1,000"
            videos="10 videos / month"
            description="Best for proving 1–2 formats and building consistency."
          />
          <PriceCard
            title="Growth"
            price="2,000"
            videos="30 videos / month"
            description="Best for daily posting and rapid iteration."
            featured
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-10">Add-ons (optional)</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <AddOnCard
              title="Recut Pack + Raw Files"
              price="+$500 / month"
              description="3 extra edit formats per video + source files so your team can repurpose freely."
            />
            <AddOnCard
              title="Posting + CTA System"
              price="$600 / platform / month"
              description="TikTok, IG Reels, YouTube Shorts, or Facebook Reels — posted consistently with CTAs."
            />
            <AddOnCard
              title="All 4 Platforms Bundle"
              price="$1,000 / month total"
              description="Full posting coverage across all platforms with CTAs included."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PriceCard({ title, price, videos, description, featured = false }: {
  title: string;
  price: string;
  videos: string;
  description: string;
  featured?: boolean;
}) {
  return (
    <div className={`relative rounded-3xl p-10 transition-all hover:-translate-y-2 ${
      featured
        ? "bg-gray-900 text-white border-2 border-accent shadow-2xl"
        : "bg-gray-50 border border-gray-200"
    }`}>
      {featured && (
        <div className="absolute -top-4 left-10 px-4 py-1.5 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-full">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-semibold mb-6">{title}</h3>

      <div className="flex items-baseline gap-1 mb-2">
        <span className={`text-2xl font-semibold ${featured ? "text-white" : "text-gray-900"}`}>$</span>
        <span className={`text-6xl font-bold ${featured ? "text-white" : "text-gray-900"}`}>{price}</span>
        <span className={`text-lg ${featured ? "text-gray-400" : "text-gray-500"}`}>/ month</span>
      </div>

      <p className={`text-lg mb-2 ${featured ? "text-gray-300" : "text-gray-700"}`}>{videos}</p>
      <p className={`text-sm mb-8 italic ${featured ? "text-gray-400" : "text-gray-500"}`}>{description}</p>

      <button className={`w-full py-4 px-8 rounded-full font-semibold transition-all hover:-translate-y-1 hover:shadow-xl ${
        featured
          ? "bg-white text-gray-900 hover:shadow-white/20"
          : "bg-gray-900 text-white hover:shadow-gray-900/20"
      }`}>
        Apply for {title}
      </button>
    </div>
  );
}

function AddOnCard({ title, price, description }: { title: string; price: string; description: string }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-accent transition-colors">
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-accent font-semibold text-sm mb-3">{price}</p>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
