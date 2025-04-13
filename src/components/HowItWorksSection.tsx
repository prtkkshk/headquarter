
import { Upload, MessageSquare, RefreshCw, Network, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Upload className="text-socl-accent" size={32} />,
      title: "Submit Your Product",
      description: "Upload your MVP or prototype to get feedback from serious builders."
    },
    {
      icon: <MessageSquare className="text-socl-accent" size={32} />,
      title: "Get Structured Feedback",
      description: "Receive actionable, structured feedback from verified builders."
    },
    {
      icon: <RefreshCw className="text-socl-accent" size={32} />,
      title: "Iterate & Improve",
      description: "Act on the feedback and refine your product for better results."
    },
    {
      icon: <Network className="text-socl-accent" size={32} />,
      title: "Build Your Network",
      description: "Connect with other serious builders to grow your product."
    }
  ];

  return (
    <section id="how-it-works" className="section-spacing relative">
      <div className="absolute inset-0 bg-gradient-to-b from-socl-background via-socl-background/90 to-socl-background"></div>
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-gradient-radial-soft from-socl-accent/5 via-transparent to-transparent opacity-30"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-radial-soft from-socl-accent/10 to-transparent blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-36 h-36 bg-gradient-radial-soft from-socl-darkAccent/10 to-transparent blur-3xl animate-float" style={{ animationDelay: "-3s" }}></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="heading-2 text-gradient reveal">How SOCL Works</h2>
          <p className="body-text max-w-3xl mx-auto text-socl-muted reveal reveal-delay-200">
            A simple, structured process designed to give you the feedback you actually need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="glass-effect p-8 rounded-xl shadow-card card-hover relative backdrop-blur-md reveal" 
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-socl-accent/5 to-transparent rounded-xl opacity-30"></div>
              
              {/* Connect steps with arrows (except the last one) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="text-socl-accent/40" size={24} />
                </div>
              )}
              
              <div className="w-16 h-16 bg-socl-highlightBg rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border border-socl-border relative z-10 group hover:border-socl-accent/50 transition-all duration-300">
                <div className="absolute inset-0 rounded-full bg-socl-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gradient-blue relative z-10">{step.title}</h3>
              <p className="text-socl-muted relative z-10">{step.description}</p>
              <div className="mt-4 text-sm font-medium bg-socl-buttonBg/30 py-1 px-3 rounded-full text-socl-accent inline-block relative z-10 border border-socl-border/20">
                Step {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
