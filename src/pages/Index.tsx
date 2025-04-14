import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import BackgroundElements from "@/components/BackgroundElements";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initialize intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-active");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Select all elements to animate on scroll
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observerRef.current?.observe(el);
    });

    // Cursor glow effect
    const cursorGlow = document.createElement("div");
    cursorGlow.classList.add(
      "fixed",
      "w-64",
      "h-64",
      "rounded-full",
      "pointer-events-none",
      "z-0",
      "bg-gradient-radial",
      "from-socl-accent/5",
      "to-transparent",
      "opacity-0",
      "transition-opacity"
    );
    document.body.appendChild(cursorGlow);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursorGlow.style.left = `${clientX - 128}px`;
      cursorGlow.style.top = `${clientY - 128}px`;
      cursorGlow.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      cursorGlow.style.opacity = "0";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observerRef.current?.unobserve(el);
      });
      observerRef.current?.disconnect();
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeChild(cursorGlow);
    };
  }, []);

  return (
    <div className="min-h-screen bg-socl-background text-socl-text overflow-hidden">
      <div className="fixed inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.02] pointer-events-none"></div>
      <BackgroundElements />
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <AboutSection />
        <HowItWorksSection />
        {/* <FeaturesSection /> */}
        <FAQSection />
      </main>
      <FooterSection />
    </div>
    
  );
};

export default Index;
