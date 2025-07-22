const WhatYouGetSection = () => {
  const benefits = [
    {
      emoji: "📄",
      title: "A written report covering UX, positioning, clarity, and direction"
    },
    {
      emoji: "🎯",
      title: "Specific, pointed suggestions — not generic \"this looks cool\" fluff"
    },
    {
      emoji: "⏰",
      title: "Feedback delivered within 48 hours"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-foreground mb-4">What You Get</h2>
        
        <div className="space-y-8 mt-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="feature-box" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex items-start gap-6 text-left max-w-2xl mx-auto">
                <div className="w-14 h-14 icon-3d rounded-xl flex items-center justify-center flex-shrink-0 animate-fade-in-3d"
                     style={{ animationDelay: `${index * 0.3}s` }}>
                  <span className="text-2xl">{benefit.emoji}</span>
                </div>
                <div className="pt-2">
                  <p className="text-lg text-foreground font-medium">{benefit.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-xl text-muted-foreground mt-12 font-medium">
          You'll walk away knowing exactly what to fix or double down on.
        </p>
      </div>
    </section>
  );
};

export default WhatYouGetSection;