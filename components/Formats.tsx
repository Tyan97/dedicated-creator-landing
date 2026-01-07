export default function Formats() {
  const formats = [
    "POV problem → product saves the moment",
    '"Caught" / exposed (caught my friend using X…)',
    "Real workflow (live screen use, real steps)",
    "Before/after outcomes (time saved, score improved, result changed)",
    "Comment-reply episodes (turn questions into series)",
    "Myth vs reality (feature reveal inside a scenario)"
  ];

  return (
    <section className="py-32 px-6 lg:px-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-accent/10 to-transparent pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            The formats
          </span>
          <h2 className="text-[48px] font-bold tracking-tight mb-4">
            Scenario formats we run <span className="text-accent">(software-only)</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {formats.map((format, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-accent/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold text-sm">{i + 1}</span>
                </div>
                <p className="text-gray-200 text-[15px] leading-relaxed">{format}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-400 text-center">
          We pick 1–2 formats that fit your product and scale variations around them.
        </p>
      </div>
    </section>
  );
}
