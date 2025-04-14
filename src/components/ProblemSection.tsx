import { MessageSquare, HelpCircle, Clock } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: <MessageSquare className="text-white" size={24} />,
      title: "Random Opinions",
      description:
        "Feedback from people who've never built anything themselves",
    },
    {
      icon: <HelpCircle className="text-white" size={24} />,
      title: "No Structure",
      description: "Comments that miss the core issues with your product",
    },
    {
      icon: <Clock className="text-white" size={24} />,
      title: "Time Wasted",
      description: "Hours spent filtering through unhelpful suggestions",
    },
  ];

  return (
    <section className="py-24 relative bg-gradient-to-b from-socl-background/80 to-socl-background/80">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-white font-manrope">
            The Problem with Social Media Feedback
          </h2>
          <p className="text-lg text-socl-text/80 max-w-2xl mx-auto font-manrope">
            Building in public is great, but social media feedback rarely helps
            you improve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="group relative h-full">
              <div className="bg-socl-cardBg/30 backdrop-blur-sm p-8 rounded-xl relative overflow-hidden transition-all duration-300 hover:translate-y-[-2px] z-10 h-full flex flex-col border border-socl-border/10 hover:border-socl-border/20">
                <div className="relative z-10 flex flex-col flex-grow items-center text-center">
                  <div className="w-12 h-12 bg-socl-primary rounded-lg flex items-center justify-center shadow-sm mb-5">
                    {problem.icon}
                  </div>
                  <h3 className="text-base font-semibold mb-3 text-white font-manrope">
                    {problem.title}
                  </h3>
                  <p className="text-socl-text/70 text-sm flex-grow font-manrope">
                    {problem.description}
                  </p>
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

export default ProblemSection;
