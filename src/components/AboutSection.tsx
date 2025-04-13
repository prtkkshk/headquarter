
import { ShieldCheck } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="section-spacing relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial-soft from-socl-accent/5 via-transparent to-transparent opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect p-10 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-socl-accent/5 to-transparent"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-b from-socl-accent/10 to-transparent blur-2xl"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center bg-socl-highlightBg px-4 py-2 rounded-full mb-6 border border-socl-border/30">
                <ShieldCheck size={20} className="mr-2 text-socl-accent" />
                <span className="font-medium text-socl-accent">Invite Only</span>
              </div>
              
              <h2 className="heading-2 mb-8 text-gradient">SOCL: A Better Way to Get Product Feedback</h2>
              
              <p className="body-text mb-6 max-w-3xl mx-auto">
                SOCL is an invite-only platform for serious product builders to receive and give 
                structured, actionable feedback. We connect you with other founders who understand 
                your product development journey, providing feedback that's actually useful.
              </p>
              
              <p className="body-text mb-12 max-w-3xl mx-auto">
                No more time wasted on social media. Get direct, honest, and structured feedback from 
                people who've been in your shoes.
              </p>
              
              <a 
                href="https://tally.so/r/mRrZ5K" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-button text-lg px-8 py-3 relative overflow-hidden group"
              >
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-socl-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">Join the Waitlist</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
