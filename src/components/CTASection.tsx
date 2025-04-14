
const CTASection = () => {
  return (
    <section className="section-spacing relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-socl-background/95 to-socl-background"></div>
      <div className="absolute inset-0 bg-gradient-radial from-socl-primary/5 via-transparent to-transparent opacity-50"></div>
      
      {/* Animated shapes */}
      <div className="absolute top-0 left-[10%] w-16 h-16 bg-socl-primary/20 rounded-full animate-float-slow"></div>
      <div className="absolute bottom-[20%] right-[10%] w-12 h-12 bg-socl-secondary/20 rounded-full animate-float"></div>
      <div className="absolute top-[40%] right-[5%] w-64 h-64 rounded-full bg-gradient-radial from-socl-accent/10 to-transparent blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto glass-card rounded-2xl p-10 text-center border border-socl-border/40 shadow-lg relative overflow-hidden animate-on-scroll">
          {/* Card background gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-socl-primary/5 to-transparent"></div>
          
          {/* Glow elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-socl-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-socl-accent/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="heading-2 mb-6 heading-gradient">Ready to Get Real Feedback?</h2>
            <p className="body-text mb-8 max-w-2xl mx-auto text-socl-muted">
              Join our community of serious builders today and start getting the feedback that will 
              actually help you improve your product.
            </p>
            <a 
              href="https://tally.so/r/mRrZ5K" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group cta-button text-xl px-10 py-4 inline-block relative"
            >
              <span className="relative z-10">Join the Waitlist</span>
              
              {/* Button hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-socl-accent to-socl-primary"></div>
              
              {/* Button glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-socl-primary/30 to-socl-accent/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
          
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-12 h-1 bg-gradient-to-r from-socl-primary to-transparent"></div>
            <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-socl-primary to-transparent"></div>
          </div>
          <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none overflow-hidden">
            <div className="absolute bottom-0 right-0 w-12 h-1 bg-gradient-to-l from-socl-accent to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-1 h-12 bg-gradient-to-t from-socl-accent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
