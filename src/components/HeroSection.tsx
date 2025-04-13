
import { Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-socl-accent/5 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-radial from-socl-accent/20 via-transparent to-transparent opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center bg-socl-highlightBg px-4 py-2 rounded-full mb-6 border border-socl-border">
            <Users size={20} className="mr-2 text-socl-accent" />
            <span className="font-medium text-socl-accent">For Serious Builders Only</span>
          </div>
          
          <h1 className="heading-1 mb-6 bg-gradient-to-r from-white to-socl-text/80 bg-clip-text text-transparent">
            A Private Space for Serious Builders to Get Honest, Structured Feedback
          </h1>
          
          <p className="body-text mb-10 max-w-2xl mx-auto text-socl-muted">
            Get actionable insights from people who've built, not armchair critics.
            Stop wasting time on social media with unvetted opinions.
          </p>
          
          <a 
            href="https://tally.so/r/mRrZ5K" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button text-xl px-10 py-4 inline-block"
          >
            Join the Waitlist
          </a>
          
          <div className="mt-12 text-sm text-socl-muted">
            <p>Join 200+ founders already on the waitlist</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
