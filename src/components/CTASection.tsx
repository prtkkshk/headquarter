
const CTASection = () => {
  return (
    <section className="section-spacing relative">
      <div className="absolute inset-0 bg-gradient-to-b from-socl-background/95 to-socl-background"></div>
      <div className="absolute inset-0 bg-gradient-radial-soft from-socl-accent/5 via-transparent to-transparent opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto glass-effect rounded-2xl p-10 text-center border border-socl-border/20 backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-socl-accent/5 to-transparent rounded-2xl"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-radial-soft from-socl-accent/10 to-transparent blur-3xl animate-pulse-soft"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-radial-soft from-socl-darkAccent/10 to-transparent blur-3xl animate-pulse-soft" style={{ animationDelay: "-2s" }}></div>
          
          <div className="relative z-10">
            <h2 className="heading-2 mb-6 text-gradient">Ready to Get Real Feedback?</h2>
            <p className="body-text mb-8 max-w-2xl mx-auto text-socl-muted">
              Join our community of serious builders today and start getting the feedback that will 
              actually help you improve your product.
            </p>
            
            <div className="relative inline-block group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-socl-accent/30 to-socl-darkAccent/30 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <a 
                href="https://tally.so/r/mRrZ5K" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative cta-button text-xl px-10 py-4 inline-block"
              >
                Join the Waitlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
