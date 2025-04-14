import { Upload, MessageSquare, RefreshCw, Network } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Upload className="text-white" size={24} />,
      title: "Submit Your Product",
      description: "Upload your MVP or prototype for review",
      gradient: "from-socl-primary to-socl-accent",
    },
    {
      icon: <MessageSquare className="text-white" size={24} />,
      title: "Get Structured Feedback",
      description: "Receive detailed actionable insights from builders",
      gradient: "from-socl-primary to-socl-accent",
    },
    {
      icon: <RefreshCw className="text-white" size={24} />,
      title: "Iterate & Improve",
      description: "Implement changes and refine your product",
      gradient: "from-socl-primary to-socl-accent",
    },
    {
      icon: <Network className="text-white" size={24} />,
      title: "Build Your Network",
      description: "Connect with other serious product builders",
      gradient: "from-socl-primary to-socl-accent",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 relative bg-gradient-to-b from-socl-background/80 to-socl-background/80"
    >
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-white">How It Works</h2>
          <p className="text-lg text-socl-text/80 max-w-2xl mx-auto">
            A simple process to get the feedback you need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative h-full">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-px bg-socl-border/10 -translate-y-1/2 z-0"></div>
              )}

              <div className="bg-socl-cardBg/30 backdrop-blur-sm p-8 rounded-xl relative overflow-hidden transition-all duration-300 hover:translate-y-[-2px] z-10 h-full flex flex-col border border-socl-border/10 hover:border-socl-border/20">
                {/* Content */}
                <div className="relative z-10 flex flex-col flex-grow items-center text-center">
                  <div className="w-12 h-12 bg-socl-primary rounded-lg flex items-center justify-center mb-5 shadow-sm">
                    {step.icon}
                  </div>
                  <h3 className="text-base font-semibold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-socl-text/70 text-sm flex-grow">
                    {step.description}
                  </p>
                  <div className="mt-4 text-xs font-medium text-socl-primary/60">
                    Step {index + 1}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="mt-16 text-center">
          <a
            href="https://tally.so/r/mRrZ5K"
            target="_blank"
            rel="noopener noreferrer"
            className="group cta-button text-xl px-10 py-4 inline-block relative overflow-hidden"
          >
            <span className="relative z-10">Join the Waitlist</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-socl-accent to-socl-primary"></div>

           
            <div className="absolute -inset-1 bg-gradient-to-r from-socl-primary/20 to-socl-accent/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default HowItWorksSection;
