import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function SocialManagement() {
  return (
    <main className="relative">
      <Navigation />

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-32 pb-20 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[56px] lg:text-[64px] font-bold leading-[1.05] tracking-tight mb-6">
            Social Media Management for <span className="text-accent">SaaS Short-Form</span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
            We don't just deliver videos — we can post them for you, keep your accounts active, and run a CTA system that drives traffic to your website.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-8 py-4 bg-accent text-white text-[15px] font-semibold rounded-full hover:shadow-xl hover:shadow-accent/20 transition-all hover:-translate-y-1">
              Get approved → Add Social Management
            </button>
            <button className="px-8 py-4 text-gray-900 text-[15px] font-medium rounded-full hover:text-accent transition-colors">
              See pricing
            </button>
          </div>

          {/* Trust chips */}
          <div className="flex flex-wrap justify-center gap-6">
            {["Posting consistency", "Platform-native captions", "CTA-driven growth", "Async workflow (no calls)"].map((item, i) => (
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

      {/* What this is */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">What this is</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            This is the "done-for-you" layer on top of your monthly video batch.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We handle publishing across your selected platforms so your team doesn't have to touch scheduling, captions, or posting.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">What's included</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Posting & Scheduling"
              items={[
                "Posting to your selected platform(s): TikTok, IG Reels, YouTube Shorts, Facebook Reels",
                "Consistent cadence (built around your monthly batch)",
                "Platform-native formatting + safe margins checks"
              ]}
            />
            <FeatureCard
              title="Captions, Hashtags, & Pinned CTA"
              items={[
                "Captions optimized for retention + comments",
                "Hashtag sets (tested + rotated)",
                "Pinned comment CTA + link direction (when applicable)",
                "CTA included automatically when managing all 4 platforms"
              ]}
            />
            <FeatureCard
              title="Basic Performance Tracking"
              items={[
                "Lightweight monthly snapshot:",
                "• Top posts by views/retention",
                "• What hooks are winning",
                "• CTA click proxy signals (based on link tagging if used)"
              ]}
            />
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Optional (if you want it)</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                UTM link tagging for attribution
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                Comment prompts that match your conversion goal (e.g., "comment 'link'")
              </li>
            </ul>
          </div>

          <div className="mt-8 bg-gray-100 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">What's not included (so expectations are clean)</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">×</span>
                No DMs or full community management (unless added later)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">×</span>
                No "guaranteed virality" promises
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">×</span>
                No long weekly meetings — workflow is async
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Pricing</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="text-5xl font-bold mb-2">$600</div>
              <div className="text-gray-600 mb-6">per platform / month</div>
              <p className="text-sm text-gray-500">Individual platform management</p>
            </div>

            <div className="bg-accent text-white rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-white/20 text-xs font-bold px-3 py-1 rounded-full">BUNDLE</div>
              <div className="text-5xl font-bold mb-2">$1,000</div>
              <div className="text-white/90 mb-6">/ month total</div>
              <p className="text-sm text-white/80">All 4 platforms + CTA included</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Add-on pairings (common)</h3>
            <p className="text-gray-600">
              <strong>Recut Pack + Raw Files:</strong> +$500/month (more variations to post)
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">How it works</h2>

          <ol className="space-y-6">
            {[
              "You're approved for SaaS UGC Supply",
              "You choose platforms (1–4)",
              "We align your CTA destination (usually website)",
              "We publish from your monthly batch on schedule",
              "You get a monthly snapshot + next-month optimization notes"
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-gray-700 pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Requirements</h2>
          <p className="text-gray-700 mb-6">
            You must own/admin your social accounts (or grant posting access)
          </p>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="font-semibold mb-4">You must provide:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                CTA destination link
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                Any restricted words/claims
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                Brand tone guidance (short)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">FAQ</h2>

          <div className="space-y-6">
            <FAQItem
              question="Do you respond to comments/DMs?"
              answer="Not by default. This package is posting + CTA system. We can discuss add-ons later."
            />
            <FAQItem
              question="Do captions differ per platform?"
              answer="Yes. Captions and hashtag sets are optimized per platform."
            />
            <FAQItem
              question="Can you post the same clip everywhere?"
              answer="Yes — and we can vary captions/hashtags to avoid looking copy-pasted."
            />
            <FAQItem
              question="Do you need calls?"
              answer="No. Everything runs async."
            />
            <FAQItem
              question="Do you guarantee results?"
              answer="We guarantee consistent execution. Performance depends on offer, product, market timing, and platform conditions."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 lg:px-20 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Want us to run the posting system too?
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Add Social Media Management after approval.
          </p>
          <button className="px-8 py-4 bg-white text-gray-900 text-[15px] font-semibold rounded-full hover:shadow-2xl hover:shadow-white/20 transition-all hover:-translate-y-1">
            Apply / Upgrade
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FeatureCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
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
