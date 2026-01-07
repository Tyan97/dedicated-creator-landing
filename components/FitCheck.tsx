export default function FitCheck() {
  const goodFit = [
    "Your AI SaaS can be shown clearly on screen",
    "You can provide a demo workspace / test account",
    "You want consistent monthly delivery, not one-off miracles"
  ];

  const notFit = [
    "You need physical product filming",
    "You only want influencer-style talking head testimonials",
    "Your product can't be shown on screen at all"
  ];

  return (
    <section className="py-32 px-6 lg:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            Fit check
          </span>
          <h2 className="text-[48px] font-bold tracking-tight">
            We're selective to <span className="text-accent">protect results</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FitCard
            title="We're a fit if"
            items={goodFit}
            type="good"
          />
          <FitCard
            title="Not a fit if"
            items={notFit}
            type="bad"
          />
        </div>
      </div>
    </section>
  );
}

function FitCard({ title, items, type }: { title: string; items: string[]; type: "good" | "bad" }) {
  const isGood = type === "good";

  return (
    <div className={`rounded-3xl p-10 ${isGood ? "bg-white border-2 border-green-200" : "bg-gray-100 border border-gray-300"}`}>
      <div className="flex items-center gap-3 mb-8">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          isGood ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
        }`}>
          {isGood ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>

      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 py-3 border-b border-gray-200 last:border-0">
            <div className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isGood ? "text-green-600" : "text-red-600"}`}>
              {isGood ? (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>
            <span className="text-gray-700 text-[15px]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
