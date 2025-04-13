
import { useEffect } from "react";
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
  useEffect(() => {
    // Scroll animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    // Cleanup observer
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-socl-background text-socl-text overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.02] pointer-events-none"></div>
      <div className="fixed inset-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
      
      {/* Ambient gradients */}
      <div className="fixed top-0 left-0 w-[1000px] h-[1000px] bg-gradient-radial-soft from-socl-accent/10 via-transparent to-transparent opacity-10 blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-[800px] h-[800px] bg-gradient-radial-soft from-socl-darkAccent/10 via-transparent to-transparent opacity-10 blur-3xl pointer-events-none"></div>
      <div className="fixed top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-radial-soft from-socl-secondary/10 via-transparent to-transparent opacity-5 blur-3xl pointer-events-none"></div>
      
      {/* Stars effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `pulse-soft ${Math.random() * 3 + 2}s ease-in-out infinite`
            }}
          ></div>
        ))}
      </div>
      
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
