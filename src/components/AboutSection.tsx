import { ShieldCheck, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-socl-background/80 to-socl-background/80">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-socl-cardBg/30 backdrop-blur-sm p-10 rounded-xl relative overflow-hidden border border-socl-border/10 hover:border-socl-border/20">
            <div className="flex items-center justify-center mb-8">
              <div className="inline-flex items-center justify-center bg-socl-cardBg/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-socl-border animate-fade-in">
                <ShieldCheck
                  size={20}
                  className="mr-2 text-socl-primary animate-pulse"
                />
                <span className="font-medium bg-gradient-to-r from-socl-primary to-socl-accent bg-clip-text text-transparent">
                  Invite Only
                </span>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-white text-center font-manrope">
              A Better Way to Get Feedback
            </h2>

            <div className="space-y-6">
              <p className="text-lg text-socl-text/80 text-center max-w-3xl mx-auto font-manrope">
                headquarter is an invite-only platform for serious product
                builders to exchange structured, actionable feedback. Connect
                with fellow founders who truly understand the product journey
                and get insights that actually move the needle.
              </p>

              <p className="text-lg text-socl-text/80 text-center max-w-3xl mx-auto font-manrope">
                No fluff. No endless scrolling. Just honest, actionable feedback
                from people who've been in your shoes.
              </p>
            </div>

            <div className="mt-10 text-center">
              <a
                href="https://tally.so/r/mRrZ5K"
                target="_blank"
                rel="noopener noreferrer"
                className="group cta-button text-lg px-8 py-3 inline-block relative overflow-hidden"
              >
                <span className="relative z-10">Request Access</span>

                {/* Button hover effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-socl-accent to-socl-primary"></div>

                {/* Button glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-socl-primary/30 to-socl-accent/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
