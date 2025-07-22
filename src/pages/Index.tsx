import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import WhoReviewsSection from "@/components/WhoReviewsSection";
import PricingSection from "@/components/PricingSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <WhatYouGetSection />
      <WhoReviewsSection />
      <PricingSection />
      <HowItWorksSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
