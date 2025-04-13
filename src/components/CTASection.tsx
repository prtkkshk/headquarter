
import { Sparkles, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-spacing relative">
      <div className="absolute inset-0 bg-gradient-to-b from-socl-background/95 to-socl-background"></div>
      <div className="absolute inset-0 bg-gradient-radial-soft from-socl-accent/5 via-transparent to-transparent opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto glass-effect rounded-2xl p-10 text-center border border-socl-border/20 backdrop-blur-xl shadow-card reveal">
          <div className="absolute inset-0 bg-gradient-to-tr from-socl-accent/5 to-transparent rounded-2xl"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-radial-soft from-socl-accent/10 to-transparent blur-3xl animate-pulse-soft"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-radial-soft from-socl-darkAccent/10 to-transparent blur-3xl animate-pulse-soft" style={{ animationDelay: "-2s" }}></div>
          
          {/* Floating sparkles */}
          <div className="absolute top-8 left-1/4">
            <Sparkles size={20} className="text-socl-accent/40 animate-float" />
          </div>
          <div className="absolute bottom-8 right-1/4">
            <Sparkles size={16} className="text-socl-secondary/40 animate-float" style={{ animationDelay: '-2s' }} />
          </div>
          
          <div className="relative z-10">
            <h2 className="heading-2 mb-6 text-gradient">Ready to Get Real Feedback?</h2>
            <p className="body-text mb-8 max-w-2xl mx-auto text-socl-muted">
              Join our community of serious builders today and start getting the feedback that will 
              actually help you improve your product.
            </p>
            
            <div className="glow-effect inline-block relative">
              <a 
                href="https://tally.so/r/mRrZ5K" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-button text-xl px-10 py-4 inline-flex items-center"
              >
                <span>Join the Waitlist</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
