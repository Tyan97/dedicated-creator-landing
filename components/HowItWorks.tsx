export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Apply (2 minutes)",
      description: "Tell us what your product does + who it's for"
    },
    {
      number: "02",
      title: "We send 3 concepts (async)",
      description: "Tailored scenarios for your product"
    },
    {
      number: "03",
      title: "Production starts",
      description: "Dedicated creator begins monthly delivery"
    },
    {
      number: "04",
      title: "Async approvals",
      description: "Review quickly, we ship the batch"
    }
  ];

  return (
    <section className="py-32 px-6 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            How it works
          </span>
          <h2 className="text-[48px] font-bold tracking-tight">
            Four simple steps. <span className="text-accent">No calls.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all group"
            >
              <div className="text-6xl font-bold text-accent/20 mb-6 group-hover:text-accent/30 transition-colors">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
