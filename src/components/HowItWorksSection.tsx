const HowItWorksSection = () => {
  const steps = [
    {
      emoji: "📤",
      title: "Submit Your Product",
      description: "Upload your MVP link and basic details",
      step: "Step 1"
    },
    {
      emoji: "💬",
      title: "Get Structured Feedback",
      description: "Experienced builders review and analyze your product",
      step: "Step 2"
    },
    {
      emoji: "📄",
      title: "Receive & Improve",
      description: "Implement changes on detailed written feedback",
      step: "Step 3"
    },
    {
      emoji: "💡",
      title: "Build Your Business",
      description: "Continue building with clear confidence in product direction",
      step: "Step 4"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-foreground mb-4">How It Works</h2>
        <p className="text-xl text-muted-foreground mb-16">
          A simple process to get the feedback you need
        </p>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="feature-box text-center" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-20 h-20 icon-3d rounded-2xl flex items-center justify-center mx-auto mb-6 animate-fade-in-3d"
                   style={{ animationDelay: `${index * 0.15}s` }}>
                <span className="text-3xl">{step.emoji}</span>
              </div>
              <div className="text-sm text-primary font-semibold mb-2">{step.step}</div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;