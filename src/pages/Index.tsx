
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-socl-background text-socl-text overflow-hidden">
      <div className="fixed inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.015] pointer-events-none"></div>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <AboutSection />
        <HowItWorksSection />
        <FeaturesSection />
        <CTASection />
        <FAQSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
