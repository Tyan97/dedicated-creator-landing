export default function WhatWeDo() {
  return (
    <section className="py-32 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            What we do
          </span>
          <h2 className="text-[48px] font-bold tracking-tight">
            Most UGC tells. <span className="text-accent">We prove.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card
            title="Viral Product-In-Use Videos"
            description="Scenario-first shorts that prove your product works. We write and produce viral-native videos where the story earns attention—and your software is shown solving the moment on screen."
            link="Explore Product-In-Use Videos"
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            }
          />
          <Card
            title="Social Media Management"
            description="We post, route clicks, and track what drives traffic. Turn consistent posting into a measurable system with CTAs, routing, and reporting—so you can see which content drives website visits and signups."
            link="Explore Social Management"
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            }
          />
        </div>

        <div className="mt-20 max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl p-10">
          <h3 className="text-2xl font-semibold mb-4">What makes it different</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span><strong className="text-gray-900">Believable:</strong> real scenarios, not testimonial scripts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span><strong className="text-gray-900">Watchable:</strong> story first, product inside the story</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span><strong className="text-gray-900">Reusable:</strong> organic-first, and still ad-ready if you want to run it</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Card({ title, description, link, icon }: { title: string; description: string; link: string; icon: React.ReactNode }) {
  return (
    <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 text-[15px] leading-relaxed mb-6">{description}</p>
      <a href="#" className="text-accent font-medium text-[15px] flex items-center gap-2 group-hover:gap-3 transition-all">
        {link}
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  );
}
