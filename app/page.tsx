import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import WhatWeDo from "@/components/WhatWeDo";
import Formats from "@/components/Formats";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FitCheck from "@/components/FitCheck";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <SocialProof />
      <WhatWeDo />
      <Formats />
      <HowItWorks />
      <Pricing />
      <FitCheck />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
