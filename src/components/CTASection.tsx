
const CTASection = () => {
  return (
    <section className="section-spacing relative">
      <div className="absolute inset-0 bg-gradient-to-b from-socl-background/95 to-socl-background"></div>
      <div className="absolute inset-0 bg-gradient-radial from-socl-buttonBg/10 via-transparent to-transparent opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto glass-card rounded-2xl p-10 text-center border border-socl-border">
          <div className="absolute inset-0 bg-gradient-to-tr from-socl-accent/5 to-transparent rounded-2xl"></div>
          <div className="relative z-10">
            <h2 className="heading-2 mb-6 bg-gradient-to-r from-white to-socl-text/80 bg-clip-text text-transparent">Ready to Get Real Feedback?</h2>
            <p className="body-text mb-8 max-w-2xl mx-auto text-socl-muted">
              Join our community of serious builders today and start getting the feedback that will 
              actually help you improve your product.
            </p>
            <a 
              href="https://tally.so/r/mRrZ5K" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button text-xl px-10 py-4 inline-block"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
