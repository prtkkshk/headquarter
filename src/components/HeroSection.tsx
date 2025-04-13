
import { Users, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-socl-accent/5 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-radial-soft from-socl-accent/10 via-transparent to-transparent opacity-30"></div>
      
      {/* Animated elements */}
      <div className="absolute top-40 left-[10%] w-20 h-20 bg-gradient-to-r from-socl-accent/10 to-socl-darkAccent/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-20 right-[15%] w-16 h-16 bg-gradient-to-r from-socl-darkAccent/10 to-socl-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: "-2s" }}></div>
      <div className="absolute bottom-20 left-[20%] w-24 h-24 bg-gradient-to-r from-socl-accent/10 to-socl-darkAccent/10 rounded-full blur-xl animate-float" style={{ animationDelay: "-4s" }}></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center glass-effect px-4 py-2 rounded-full mb-6 border border-socl-border">
            <Users size={20} className="mr-2 text-socl-accent" />
            <span className="font-medium text-socl-accent">For Serious Builders Only</span>
          </div>
          
          <h1 className="heading-1 mb-6 text-gradient">
            A Private Space for Serious Builders to Get Honest, Structured Feedback
          </h1>
          
          <p className="body-text mb-10 max-w-2xl mx-auto text-socl-muted">
            Get actionable insights from people who've built, not armchair critics.
            Stop wasting time on social media with unvetted opinions.
          </p>
          
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-socl-accent/50 to-socl-darkAccent/50 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <a 
              href="https://tally.so/r/mRrZ5K" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative inline-block cta-button text-xl px-10 py-4"
            >
              Join the Waitlist
            </a>
          </div>
          
          <div className="mt-12 text-sm text-socl-muted flex items-center justify-center">
            <Star size={16} className="mr-2 text-socl-accent/80" />
            <p>Join 200+ founders already on the waitlist</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
