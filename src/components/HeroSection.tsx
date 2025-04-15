import { useEffect, useRef } from "react";
import { Users, Sparkles } from "lucide-react";

const HeroSection = () => {
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseRef.current = { x: clientX, y: clientY };
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Parallax effect on background elements
    const heroElement = heroRef.current;
    if (heroElement) {
      const parallaxElements = heroElement.querySelectorAll(".parallax");

      const updateParallax = () => {
        const { x, y } = mouseRef.current;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        parallaxElements.forEach((element) => {
          const speed = Number((element as HTMLElement).dataset.speed || 0.05);
          const moveX = (x - centerX) * speed;
          const moveY = (y - centerY) * speed;

          (element as HTMLElement).style.transform =
            `translate(${moveX}px, ${moveY}px)`;
        });

        requestAnimationFrame(updateParallax);
      };

      const animationId = requestAnimationFrame(updateParallax);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        cancelAnimationFrame(animationId);
      };
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-hero-gradient opacity-80"></div>

      {/* Parallax elements */}
      <div
        className="parallax absolute top-20 left-[10%] w-72 h-72 rounded-full bg-gradient-radial from-socl-primary/10 to-transparent blur-xl"
        data-speed="0.03"
      ></div>
      <div
        className="parallax absolute bottom-40 right-[5%] w-96 h-96 rounded-full bg-gradient-radial from-socl-secondary/10 to-transparent blur-xl"
        data-speed="0.05"
      ></div>
      <div
        className="parallax absolute top-[40%] right-[20%] w-32 h-32 rounded-full border border-socl-accent/20 opacity-50"
        data-speed="0.08"
      ></div>
      <div
        className="parallax absolute left-[20%] bottom-[30%] w-48 h-48 rounded-full border border-socl-primary/20 opacity-50"
        data-speed="0.06"
      ></div>

      {/* Geometric shapes */}
      <div className="absolute top-[20%] left-[30%] w-8 h-8 bg-socl-primary/20 rounded-full animate-float-slow"></div>
      <div className="absolute bottom-[30%] right-[20%] w-6 h-6 bg-socl-secondary/30 rounded-full animate-float"></div>
      <div className="absolute top-[60%] right-[30%] w-10 h-10 bg-socl-accent/20 rounded-md rotate-45 animate-float-fast"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center bg-socl-cardBg/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-socl-border animate-fade-in">
            <Sparkles
              size={20}
              className="mr-2 text-socl-primary animate-pulse"
            />
            <span className="font-medium bg-gradient-to-r from-socl-primary to-socl-accent bg-clip-text text-transparent">
              For Serious Builders Only
            </span>
          </div>

          <h1 className="heading-1 mb-6 heading-gradient animate-on-scroll">
            A Private Space for Builders to Exchange Honest, Structured Feedback
          </h1>

          <p className="body-text mb-10 max-w-2xl mx-auto text-socl-muted animate-on-scroll">
            Give and get expert insights from fellow builders. Skip the social media
            noise.
          </p>

          <div className="animate-on-scroll">
            <a
              href="https://tally.so/r/mRrZ5K"
              target="_blank"
              rel="noopener noreferrer"
              className="group cta-button text-xl px-10 py-4 inline-block relative overflow-hidden"
            >
              <span className="relative z-10">Join the Waitlist</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-socl-accent to-socl-primary"></div>

              {/* Button glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-socl-primary/20 to-socl-accent/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          <div className="mt-12 text-sm text-socl-muted animate-on-scroll">
            <p className="flex items-center justify-center">
              <Users size={18} className="mr-2 text-socl-primary" />
              Join 200+ founders already on the waitlist
            </p>
          </div>

          {/* Floating UI mockup */}
          <div className="mt-16 relative animate-on-scroll">
            <div className="glass-card border border-socl-border/40 p-4 rounded-2xl shadow-lg max-w-xl mx-auto backdrop-blur-lg relative z-10 animate-float-slow">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-socl-primary to-socl-accent flex items-center justify-center">
                    <span className="text-white font-bold">S</span>
                  </div>
                  <div className="ml-2">
                    <div className="text-white font-semibold">
                      Structured Feedback
                    </div>
                    <div className="text-xs text-socl-muted">
                      from verified builders
                    </div>
                  </div>
                </div>
                <div className="text-socl-accent">
                  <Sparkles size={20} />
                </div>
              </div>
              <div className="space-y-3">
                <div className="glass-card bg-socl-cardBg/30 p-3 rounded-lg">
                  <div className="text-sm font-medium text-socl-primary">
                    Product Value
                  </div>
                  <div className="text-sm text-socl-muted">
                    Clear solution to a real problem. Consider narrowing target
                    audience.
                  </div>
                </div>
                <div className="glass-card bg-socl-cardBg/30 p-3 rounded-lg">
                  <div className="text-sm font-medium text-socl-secondary">
                    UI/UX
                  </div>
                  <div className="text-sm text-socl-muted">
                    Intuitive flow, but onboarding needs simplification.
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-[80%] h-20 bg-gradient-radial from-socl-primary/20 to-transparent blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
