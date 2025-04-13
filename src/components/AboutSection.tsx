
import { ShieldCheck, Sparkles, Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="section-spacing relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial-soft from-socl-accent/10 via-transparent to-transparent opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect p-10 rounded-2xl relative overflow-hidden shadow-card">
            <div className="absolute inset-0 bg-gradient-to-tr from-socl-accent/5 to-transparent"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-b from-socl-accent/10 to-transparent blur-2xl"></div>
            
            {/* Floating sparkles */}
            <div className="absolute top-8 left-8">
              <Sparkles size={20} className="text-socl-accent/40 animate-float" />
            </div>
            <div className="absolute bottom-8 right-12">
              <Star size={18} className="text-socl-secondary/40 animate-float" style={{ animationDelay: '-3s' }} />
            </div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center bg-socl-highlightBg px-4 py-2 rounded-full mb-6 border border-socl-border/30 shadow-glow-sm reveal">
                <ShieldCheck size={20} className="mr-2 text-socl-accent" />
                <span className="font-medium text-socl-accent">Invite Only</span>
              </div>
              
              <h2 className="heading-2 mb-8 text-gradient reveal reveal-delay-200">SOCL: A Better Way to Get Product Feedback</h2>
              
              <p className="body-text mb-6 max-w-3xl mx-auto reveal reveal-delay-400">
                SOCL is an invite-only platform for serious product builders to receive and give 
                structured, actionable feedback. We connect you with other founders who understand 
                your product development journey, providing feedback that's actually useful.
              </p>
              
              <p className="body-text mb-12 max-w-3xl mx-auto reveal reveal-delay-400">
                No more time wasted on social media. Get direct, honest, and structured feedback from 
                people who've been in your shoes.
              </p>
              
              <div className="glow-effect inline-block reveal reveal-delay-600">
                <a 
                  href="https://tally.so/r/mRrZ5K" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cta-button text-lg px-8 py-3"
                >
                  Join the Waitlist
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
