import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ProductVideos() {
  return (
    <main className="relative">
      <Navigation />

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-32 pb-20 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[56px] lg:text-[64px] font-bold leading-[1.05] tracking-tight mb-6">
            Product-In-Use Videos for <span className="text-accent">SaaS</span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
            Hook-first short-form that shows your product working on screen — the format that drives views because it's story → proof → payoff.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-8 py-4 bg-accent text-white text-[15px] font-semibold rounded-full hover:shadow-xl hover:shadow-accent/20 transition-all hover:-translate-y-1">
              Apply for a monthly batch
            </button>
            <button className="px-8 py-4 text-gray-900 text-[15px] font-medium rounded-full hover:text-accent transition-colors">
              See examples format
            </button>
          </div>

          {/* Trust chips */}
          <div className="flex flex-wrap justify-center gap-6">
            {["Hook-first scripts", "On-screen proof", "Batch production", "Delivered monthly"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Product-In-Use means */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">What "Product-In-Use" means</h2>
          <p className="text-xl text-gray-700 mb-6 font-semibold">
            Not talking-head UGC. Not pretty brand videos.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            This is high-retention short-form where:
          </p>

          <ol className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">1.</span>
              <span>The first 1–2 seconds is a strong hook ("Caught my friend…", "I tried this…", "This is cheating…")</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">2.</span>
              <span>Then we cut to real product use on screen</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">3.</span>
              <span>Then we land a clear payoff + CTA</span>
            </li>
          </ol>

          <p className="text-lg text-gray-600 leading-relaxed mt-6">
            It's designed to feel native to TikTok/Reels/Shorts.
          </p>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">What you get (deliverables)</h2>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold mb-4">Monthly batch of edited 9:16 videos</h3>
            <p className="text-gray-600 mb-6">Each video follows a repeatable structure:</p>

            <div className="grid md:grid-cols-4 gap-4">
              {["Hook", "On-screen proof (product in use)", "Result/payoff", "CTA"].map((item, i) => (
                <div key={i} className="bg-accent/5 rounded-xl p-4 text-center">
                  <div className="text-accent font-bold mb-2">{i + 1}</div>
                  <div className="text-sm text-gray-700">{item}</div>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Delivered to your shared folder (Drive/SharePoint)
            </p>
          </div>

          {/* Packages */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="text-lg font-semibold mb-2">10 videos/month</div>
              <div className="text-4xl font-bold text-accent mb-4">$1,000</div>
            </div>
            <div className="bg-accent text-white rounded-2xl p-8">
              <div className="text-lg font-semibold mb-2">30 videos/month</div>
              <div className="text-4xl font-bold mb-4">$2,000</div>
              <div className="text-xs bg-white/20 inline-block px-3 py-1 rounded-full">MOST POPULAR</div>
            </div>
          </div>

          {/* Add-ons */}
          <div className="bg-gray-900 text-white rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6">Add-ons</h3>
            <div className="space-y-4">
              <div>
                <div className="font-semibold mb-1">Recut Pack + Raw Files — +$500/month</div>
                <p className="text-sm text-gray-300">3 additional edit formats + raw files for repurposing</p>
              </div>
              <div>
                <div className="font-semibold mb-1">Posting + CTA System</div>
                <p className="text-sm text-gray-300">$600/platform/month</p>
                <p className="text-sm text-gray-300">All 4 platforms bundle: $1,000/month total (CTA included)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How the workflow stays scalable */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">How the workflow stays scalable (and why it works)</h2>
          <p className="text-lg text-gray-600 mb-12">
            This service is built to mass-produce without endless coordination.
          </p>

          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-6">The process</h3>
            <ol className="space-y-4">
              {[
                "You send 1–3 reference videos you want us to copy (pace, hook style, structure)",
                "You provide the on-screen product flow (prerecorded)",
                "We batch produce in your locked format",
                "You approve direction async (no calls)",
                "Monthly delivery on schedule"
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent font-bold">{i + 1}.</span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <h3 className="text-2xl font-semibold mb-6">What we need from you (required)</h3>
          <p className="text-gray-600 mb-6">To keep production fast and consistent:</p>

          <div className="space-y-6">
            <RequirementCard
              number="1"
              title="A clear on-screen workflow"
              description="Your product needs to be demonstrable in a clean sequence (web app / dashboard / desktop app)."
            />
            <RequirementCard
              number="2"
              title="A prerecorded screen flow"
              items={[
                "A clean recording of the product flow(s) we should show",
                "Or a set of recordings per feature/use case"
              ]}
            />
            <RequirementCard
              number="3"
              title="Reference videos to copy"
              description="Links or uploads that show the exact vibe you want:"
              items={["Hook type", "Editing pace", "CTA style", "Tone"]}
            />
            <RequirementCard
              number="4"
              title="CTA destination"
              description="Usually your website landing page (or a link hub)."
            />
          </div>
        </div>
      </section>

      {/* We do vs You do */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">What we do vs what you do</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border-2 border-accent">
              <h3 className="text-2xl font-semibold mb-6 text-accent">We do</h3>
              <ul className="space-y-3">
                {[
                  "Hook-first scripting (based on your references + product)",
                  "Creator performance (voice/acting style aligned to the format)",
                  "Editing + polish for retention",
                  "Batch delivery"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold mb-6">You do</h3>
              <ul className="space-y-3">
                {[
                  "Provide the screen flow recordings",
                  "Provide compliance restrictions (claims, words to avoid)",
                  "Approve the direction async"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Best fit / Not a fit */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Best fit / Not a fit</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-semibold mb-6 text-green-800">Best fit if</h3>
              <ul className="space-y-3">
                {[
                  "You're SaaS (AI-first ideal)",
                  "Your product can be shown clearly on-screen",
                  "You want volume and iteration, not one-off \"perfect\" ads"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
              <h3 className="text-2xl font-semibold mb-6 text-red-800">Not a fit if</h3>
              <ul className="space-y-3">
                {[
                  "Physical product lifestyle shoots",
                  "Influencer campaigns / paid shoutouts",
                  "You want guaranteed virality"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">FAQ</h2>

          <div className="space-y-6">
            <FAQItem
              question='Is this "product demo"?'
              answer="It's product proof — packaged as short-form storytelling. The product is shown in use on screen, but the style is creator-native and hook-first."
            />
            <FAQItem
              question="Can you make multiple styles at once?"
              answer="We recommend locking one winning format first. Add variations after you have traction (or via recuts)."
            />
            <FAQItem
              question="Do you need meetings?"
              answer="No. Async only."
            />
            <FAQItem
              question="Do you guarantee views?"
              answer="No. We guarantee consistent production and strong formats. Results depend on offer, product-market fit, and platform conditions."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 lg:px-20 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready for monthly Product-In-Use batches?
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Apply — if approved, you'll get onboarding steps + your subscription link.
          </p>
          <button className="px-8 py-4 bg-white text-gray-900 text-[15px] font-semibold rounded-full hover:shadow-2xl hover:shadow-white/20 transition-all hover:-translate-y-1">
            Apply for a monthly batch
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function RequirementCard({ number, title, description, items }: {
  number: string;
  title: string;
  description?: string;
  items?: string[];
}) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
          {number}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-lg mb-2">{title}</h4>
          {description && <p className="text-gray-600 mb-2">{description}</p>}
          {items && (
            <ul className="space-y-1 text-gray-600 text-sm">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <h3 className="font-semibold text-lg mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
}
