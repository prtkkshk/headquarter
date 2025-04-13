
import { Upload, MessageSquare, RefreshCw, Network } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Upload className="text-socl-buttonText" size={32} />,
      title: "Submit Your Product",
      description: "Upload your MVP or prototype to get feedback from serious builders."
    },
    {
      icon: <MessageSquare className="text-socl-buttonText" size={32} />,
      title: "Get Structured Feedback",
      description: "Receive actionable, structured feedback from verified builders."
    },
    {
      icon: <RefreshCw className="text-socl-buttonText" size={32} />,
      title: "Iterate & Improve",
      description: "Act on the feedback and refine your product for better results."
    },
    {
      icon: <Network className="text-socl-buttonText" size={32} />,
      title: "Build Your Network",
      description: "Connect with other serious builders to grow your product."
    }
  ];

  return (
    <section id="how-it-works" className="section-spacing bg-white/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="heading-2">How SOCL Works</h2>
          <p className="body-text max-w-3xl mx-auto">
            A simple, structured process designed to give you the feedback you actually need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white/60 p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p>{step.description}</p>
              <div className="mt-4 text-sm font-medium">Step {index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
