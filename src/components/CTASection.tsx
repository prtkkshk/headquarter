const CTASection = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-socl-background to-socl-background/95">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-socl-cardBg/30 backdrop-blur-sm p-10 rounded-xl relative overflow-hidden border border-socl-border/10 hover:border-socl-border/20">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 text-white text-center font-manrope">
                Ready to Get Real Feedback?
              </h2>
              <p className="text-lg text-socl-text/80 text-center max-w-2xl mx-auto mb-8 font-manrope">
                Join our community of serious builders today and start getting
                the feedback that will actually help you improve your product.
              </p>
              <div className="text-center">
                <a
                  href="https://tally.so/r/mRrZ5K"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cta-button text-lg px-8 py-3 inline-block relative overflow-hidden"
                >
                  <span className="relative z-10">Join the Waitlist</span>

                  {/* Button hover effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-socl-accent to-socl-primary"></div>

                  {/* Button glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-socl-primary/30 to-socl-accent/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
