export default function SocialProof() {
  const items = [
    "AI SaaS only",
    "Screen-led",
    "Dedicated creator (not a pool)",
    "Monthly delivery",
    "Async approvals"
  ];

  return (
    <section className="py-16 border-t border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <p className="text-center text-gray-600 mb-8 font-medium">
          Trusted by AI SaaS teams building fast
        </p>
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[15px] text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
