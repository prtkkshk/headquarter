
import { MessageSquare, ListChecks, Users, Star } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <MessageSquare className="text-socl-accent" size={28} />,
      title: "Actionable Feedback",
      description: "Get feedback that's direct, useful, and focused on improving your product."
    },
    {
      icon: <ListChecks className="text-socl-accent" size={28} />,
      title: "Structured Process",
      description: "No more random opinions; get organized, useful insights that matter."
    },
    {
      icon: <Users className="text-socl-accent" size={28} />,
      title: "Builder Community",
      description: "Connect with serious product makers who understand your journey."
    },
    {
      icon: <Star className="text-socl-accent" size={28} />,
      title: "Early Access",
      description: "Be part of an exclusive builder community before public launch."
    }
  ];

  return (
    <section id="features" className="section-spacing relative">
      <div className="absolute inset-0 bg-gradient-to-b from-socl-background to-socl-background/95"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial-soft from-socl-accent/5 via-transparent to-transparent opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="heading-2 text-gradient">Why Choose SOCL?</h2>
          <p className="body-text max-w-3xl mx-auto text-socl-muted">
            SOCL is designed specifically for serious builders who want quality feedback.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex p-6 glass-effect rounded-xl shadow-lg card-hover backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-br from-socl-accent/5 to-transparent rounded-xl opacity-20"></div>
              <div className="flex-shrink-0 mr-5 relative z-10">
                <div className="w-12 h-12 bg-socl-highlightBg rounded-full flex items-center justify-center shadow-inner border border-socl-border/50">
                  {feature.icon}
                </div>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2 text-socl-accent">{feature.title}</h3>
                <p className="text-base text-socl-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
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
    </section>
  );
};

export default FeaturesSection;
