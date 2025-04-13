
import { MessageSquare, ListChecks, Users, Star, Check } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <MessageSquare className="text-socl-accent" size={28} />,
      title: "Actionable Feedback",
      description: "Get feedback that's direct, useful, and focused on improving your product.",
      benefits: ["Structured review templates", "Categorized feedback", "Implementation prioritization"]
    },
    {
      icon: <ListChecks className="text-socl-accent" size={28} />,
      title: "Structured Process",
      description: "No more random opinions; get organized, useful insights that matter.",
      benefits: ["Guided feedback flows", "Focused review sessions", "Clear action items"]
    },
    {
      icon: <Users className="text-socl-accent" size={28} />,
      title: "Builder Community",
      description: "Connect with serious product makers who understand your journey.",
      benefits: ["Verified product builders", "Industry expertise", "Peer networking"]
    },
    {
      icon: <Star className="text-socl-accent" size={28} />,
      title: "Early Access",
      description: "Be part of an exclusive builder community before public launch.",
      benefits: ["Priority feedback", "Influence platform direction", "Establish reputation"]
    }
  ];

  return (
    <section id="features" className="section-spacing relative">
      <div className="absolute inset-0 bg-gradient-to-b from-socl-background to-socl-background/95"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial-soft from-socl-accent/5 via-transparent to-transparent opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="heading-2 text-gradient reveal">Why Choose SOCL?</h2>
          <p className="body-text max-w-3xl mx-auto text-socl-muted reveal reveal-delay-200">
            SOCL is designed specifically for serious builders who want quality feedback.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-effect p-8 rounded-xl shadow-card card-hover backdrop-blur-md reveal" 
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-socl-accent/5 to-transparent rounded-xl opacity-20"></div>
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 mr-5 relative z-10">
                  <div className="w-14 h-14 bg-socl-highlightBg rounded-full flex items-center justify-center shadow-inner border border-socl-border/50 group-hover:border-socl-accent/50 transition-all duration-300">
                    <div className="absolute inset-0 rounded-full bg-socl-accent/5 animate-pulse-soft" style={{ animationDelay: `${-index}s` }}></div>
                    {feature.icon}
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-2 text-gradient-blue">{feature.title}</h3>
                  <p className="text-base text-socl-muted">{feature.description}</p>
                </div>
              </div>
              
              <div className="mt-4 pl-4 border-l-2 border-socl-border/30">
                <h4 className="text-sm uppercase tracking-wider text-socl-muted mb-2">Key Benefits</h4>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-socl-muted">
                      <Check size={14} className="text-socl-accent mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal reveal-delay-400">
          <div className="glow-effect inline-block">
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
      </div>
    </section>
  );
};

export default FeaturesSection;
