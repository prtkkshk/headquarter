
import { Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center bg-white/30 px-4 py-2 rounded-full mb-6">
            <Users size={20} className="mr-2" />
            <span className="font-medium">For Serious Builders Only</span>
          </div>
          
          <h1 className="heading-1 mb-6">
            A Private Space for Serious Builders to Get Honest, Structured Feedback
          </h1>
          
          <p className="body-text mb-10 max-w-2xl mx-auto">
            Get actionable insights from people who've built, not armchair critics.
            Stop wasting time on social media with unvetted opinions.
          </p>
          
          <a 
            href="https://tally.so/r/mRrZ5K" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button text-xl px-10 py-4"
          >
            Join the Waitlist
          </a>
          
          <div className="mt-12 text-sm opacity-80">
            <p>Join 200+ founders already on the waitlist</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
