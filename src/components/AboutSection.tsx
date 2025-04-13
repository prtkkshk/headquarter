
import { ShieldCheck } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="section-spacing relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-socl-accent/10 via-transparent to-transparent opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center bg-socl-highlightBg px-4 py-2 rounded-full mb-6 border border-socl-border">
            <ShieldCheck size={20} className="mr-2 text-socl-accent" />
            <span className="font-medium text-socl-accent">Invite Only</span>
          </div>
          
          <h2 className="heading-2 mb-8 bg-gradient-to-r from-white to-socl-text/80 bg-clip-text text-transparent">SOCL: A Better Way to Get Product Feedback</h2>
          
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
            className="cta-button text-lg px-8 py-3"
          >
            Join the Waitlist
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
