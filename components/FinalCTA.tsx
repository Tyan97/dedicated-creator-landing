export default function FinalCTA() {
  return (
    <section className="py-40 px-6 lg:px-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-accent/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-[52px] lg:text-[60px] font-bold tracking-tight mb-6">
          Want viral scenario videos that show your AI SaaS{" "}
          <span className="text-accent">working on screen?</span>
        </h2>

        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Get 3 tailored concepts. If it's a fit, we'll start shipping monthly content with a dedicated creator.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="px-8 py-4 bg-white text-gray-900 text-[15px] font-semibold rounded-full hover:shadow-2xl hover:shadow-white/20 transition-all hover:-translate-y-1">
            Get 3 video concepts
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white/20 text-white text-[15px] font-medium rounded-full hover:border-white/40 transition-all">
            Apply for a slot
          </button>
        </div>

        <p className="text-sm text-gray-500">
          We review applications async and reply by email.
        </p>
      </div>
    </section>
  );
}
