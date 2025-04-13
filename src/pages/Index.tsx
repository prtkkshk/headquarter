
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
      {/* Background effects */}
      <div className="fixed inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.015] pointer-events-none"></div>
      <div className="fixed inset-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
      <div className="fixed top-0 left-0 w-[800px] h-[800px] bg-gradient-radial-soft from-socl-accent/5 via-transparent to-transparent opacity-20 blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial-soft from-socl-darkAccent/5 via-transparent to-transparent opacity-20 blur-3xl pointer-events-none"></div>
      
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
