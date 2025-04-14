import { MessageSquare, Target, Users, Zap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Target className="text-white" size={24} />,
      title: "Focused Feedback",
      description:
        "Get feedback from builders who understand product development and can provide meaningful insights.",
    },
    {
      icon: <MessageSquare className="text-white" size={24} />,
      title: "Structured Reviews",
      description:
        "Receive organized, actionable feedback that helps you make informed decisions about your product.",
    },
    {
      icon: <Users className="text-white" size={24} />,
      title: "Verified Community",
      description:
        "Connect with a curated community of serious builders who are committed to helping each other succeed.",
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: "Rapid Iteration",
      description:
        "Get quick, actionable feedback that helps you iterate and improve your product faster.",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 relative bg-gradient-to-b from-socl-background to-socl-background/95"
    >
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-white font-manrope">
            Why Choose SOCL
          </h2>
          <p className="text-lg text-socl-text/80 max-w-2xl mx-auto font-manrope">
            Get the feedback that actually matters for your product
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative h-full">
              <div className="bg-socl-cardBg/30 backdrop-blur-sm p-8 rounded-xl relative overflow-hidden transition-all duration-300 hover:translate-y-[-2px] z-10 h-full flex flex-col border border-socl-border/10 hover:border-socl-border/20">
                <div className="relative z-10 flex flex-col flex-grow">
                  <div className="flex items-center mb-5">
                    <div className="w-12 h-12 bg-socl-primary rounded-lg flex items-center justify-center shadow-sm">
                      {feature.icon}
                    </div>
                    <h3 className="text-base font-semibold ml-4 text-white font-manrope">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-socl-text/70 text-sm flex-grow font-manrope">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://tally.so/r/mRrZ5K"
            target="_blank"
            rel="noopener noreferrer"
            className="group cta-button text-xl px-10 py-4 inline-block relative overflow-hidden"
          >
            <span className="relative z-10">Join the Waitlist</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-socl-accent to-socl-primary"></div>

            {/* Button glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-socl-primary/20 to-socl-accent/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
