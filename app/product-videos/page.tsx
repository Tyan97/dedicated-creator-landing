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
            Hook-first short-form that shows your product working on screen - the format that drives views because it is story + proof + payoff.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-8 py-4 bg-accent text-white text-[15px] font-semibold rounded-full hover:shadow-xl hover:shadow-accent/20 transition-all hover:-translate-y-1">
              Apply for a monthly batch
            </button>
            <button className="px-8 py-4 text-gray-900 text-[15px] font-medium rounded-full hover:text-accent transition-colors">
              See example formats
            </button>
          </div>

          {/* Trust chips */}
          <div className="flex flex-wrap justify-center gap-6">
            {"Hook-first scripts,On-screen proof,Batch production,Delivered monthly".split(",").map((item, i) => (
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
              <span>The first 1-2 seconds is a strong hook ("Caught my friend", "I tried this", "This is cheating")</span>
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
            It is designed to feel native to TikTok, Reels, and Shorts.
          </p>
        </div>
      </section>

      {/* Examples */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-4xl font-bold mb-3">Examples: hook-first product proof</h2>
              <p className="text-lg text-gray-600">
                Each angle is a proven structure we can match and mass-produce.
              </p>
            </div>
            <div className="text-sm text-gray-500">
              We can match your references exactly - pacing, tone, and hook style.
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Caught using it",
              "Before / after",
              "POV: you are in a",
              "3-step proof",
              "My friend thought this was cheating",
              "I tried this so you do not have to",
              "Hidden feature unlock",
              "If you do X, use this",
              "This saved me 3 hours"
            ].map((label, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="h-40 bg-gradient-to-br from-gray-200 to-gray-100" />
                <div className="p-4">
                  <div className="text-xs uppercase tracking-wide text-gray-400 mb-2">Angle</div>
                  <div className="text-sm font-semibold text-gray-800">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why this beats talking-head UGC</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold mb-6">Traditional UGC</h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Talking to camera",
                  "Vague product mention",
                  "Low proof density",
                  "Retention drops after the hook"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent/5 rounded-2xl p-8 border border-accent/30">
              <h3 className="text-2xl font-semibold mb-6 text-accent">Product-In-Use UGC</h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Hook-first narrative",
                  "On-screen proof immediately",
                  "Clear why it works",
                  "Built for Shorts, Reels, TikTok"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-1">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">What you get (deliverables)</h2>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold mb-4">Deliverables receipt</h3>
            <p className="text-gray-600 mb-6">Clear specs so there is no guessing:</p>

            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              {[
                { label: "Video length", value: "15-30s or 30-45s" },
                { label: "Resolution + aspect", value: "1080x1920, 9:16" },
                { label: "Structure", value: "Hook -> proof on screen -> payoff -> CTA" },
                { label: "Captions", value: "Included (burned-in)" },
                { label: "On-screen text", value: "Included as needed" },
                { label: "File format", value: "MP4, organized folders" },
                { label: "Delivery cadence", value: "Weekly drops or month-end batch" },
                { label: "Storage", value: "Shared Drive / SharePoint" }
              ].map((row, i) => (
                <div key={i} className="flex items-start justify-between gap-4 border-b border-gray-100 pb-3">
                  <span className="text-gray-500">{row.label}</span>
                  <span className="font-semibold text-gray-800 text-right">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold mb-4">Every video follows a repeatable structure</h3>
            <p className="text-gray-600 mb-6">Built for retention and proof.</p>

            <div className="grid md:grid-cols-4 gap-4">
              {["Hook", "On-screen proof (product in use)", "Result/payoff", "CTA"].map((item, i) => (
                <div key={i} className="bg-accent/5 rounded-xl p-4 text-center">
                  <div className="text-accent font-bold mb-2">{i + 1}</div>
                  <div className="text-sm text-gray-700">{item}</div>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 mt-6">Delivered to your shared folder (Drive/SharePoint).</p>
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
                <div className="font-semibold mb-1">Recut Pack + Raw Files - +$500/month</div>
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

      {/* Revisions & turnaround */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Revisions & turnaround</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold mb-4">Turnaround</h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  "First videos delivered 7 days after onboarding",
                  "Weekly drops on the 30 plan",
                  "Month-end batch on the 10 plan"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-1">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold mb-4">Revisions</h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  "1 round of revisions per video or per batch",
                  "Covers text, pacing, CTA, and minor edits",
                  "Does not include new concepts or new structure",
                  "Style-match guarantee on the first 3 videos"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-1">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-500 text-center">
            If the first batch does not match your reference style, we redo the format once.
          </div>
        </div>
      </section>

      {/* Usage rights */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Usage rights</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              {[
                { title: "Organic posting", detail: "Included for all platforms" },
                { title: "Paid ads usage", detail: "Available as an add-on" },
                { title: "Raw files", detail: "Included with Recut Pack" },
                { title: "Music", detail: "Platform-native or licensed on request" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.detail}</div>
                  </div>
                </div>
              ))}
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

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              {
                title: "We lock a winning format",
                detail: "One proven structure repeated for speed and consistency."
              },
              {
                title: "We batch produce",
                detail: "Scripts, recordings, and edits are done in cycles."
              },
              {
                title: "Approvals stay async",
                detail: "No calls required, just clear checkpoints."
              },
              {
                title: "We iterate hooks from winners",
                detail: "The best angles get expanded into the next batch."
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="text-lg font-semibold mb-2">{item.title}</div>
                <div className="text-sm text-gray-600">{item.detail}</div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-6">The process</h3>
            <ol className="space-y-4">
              {[
                "You send 1-3 reference videos you want us to copy (pace, hook style, structure)",
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
            <RequirementCard
              number="5"
              title="Claims and compliance"
              description="Any restrictions, do-not-say phrases, or platform policies."
            />
            <RequirementCard
              number="6"
              title="Optional brand tone"
              description="Preferred words, cadence, or voice notes."
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
                  "Creator performance (voice and delivery aligned to the format)",
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
                  "AI tools or SaaS with clear UI workflows",
                  "Your product has a clear wow or proof moment",
                  "You want volume and iteration, not one-off perfect ads"
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
                  "Physical goods that require lifestyle shoots",
                  "Founders who want weekly calls and custom ideation nonstop",
                  "Campaigns that require guaranteed performance"
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
              answer="It is product proof packaged as short-form storytelling. The product is shown in use on screen, but the style is creator-native and hook-first."
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
            Apply - if approved, you will get onboarding steps + your subscription link.
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
                  <span className="text-accent">&gt;</span>
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
