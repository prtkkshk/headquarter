const WhoReviewsSection = () => {
  const reviewers = [
    { emoji: "👥", title: "Experienced Founders", description: "Built and scaled multiple products" },
    { emoji: "🏆", title: "Product Veterans", description: "Deep expertise across SaaS, consumer & devtools" },
    { emoji: "⚡", title: "Actionable Insights", description: "Structured feedback, not vague opinions" }
  ];
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-card-foreground mb-6">Who Reviews It?</h2>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Your product is reviewed by a small, handpicked team of founders and product folks — 
          people who've built and shipped products across SaaS, consumer, and devtools.
        </p>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Each review is structured, no-fluff, and focused on real improvements — not vague opinions.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {reviewers.map((reviewer, index) => (
            <div key={index} className="feature-box text-center" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="w-16 h-16 icon-3d rounded-xl flex items-center justify-center mx-auto mb-4 animate-fade-in-3d"
                   style={{ animationDelay: `${index * 0.2}s` }}>
                <span className="text-2xl">{reviewer.emoji}</span>
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">{reviewer.title}</h3>
              <p className="text-sm text-muted-foreground">{reviewer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoReviewsSection;