
import { MessageSquare, ListChecks, Users, Star } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <MessageSquare className="text-socl-buttonText" size={28} />,
      title: "Actionable Feedback",
      description: "Get feedback that's direct, useful, and focused on improving your product."
    },
    {
      icon: <ListChecks className="text-socl-buttonText" size={28} />,
      title: "Structured Process",
      description: "No more random opinions; get organized, useful insights that matter."
    },
    {
      icon: <Users className="text-socl-buttonText" size={28} />,
      title: "Builder Community",
      description: "Connect with serious product makers who understand your journey."
    },
    {
      icon: <Star className="text-socl-buttonText" size={28} />,
      title: "Early Access",
      description: "Be part of an exclusive builder community before public launch."
    }
  ];

  return (
    <section id="features" className="section-spacing">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="heading-2">Why Choose SOCL?</h2>
          <p className="body-text max-w-3xl mx-auto">
            SOCL is designed specifically for serious builders who want quality feedback.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex p-6 bg-white/60 rounded-xl shadow-sm">
              <div className="flex-shrink-0 mr-5">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
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

export default FeaturesSection;
