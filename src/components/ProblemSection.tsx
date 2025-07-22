const ProblemSection = () => {
  const problems = [
    {
      emoji: "💬",
      title: "Random Opinions",
      description: "Feedback from people who've never built anything themselves."
    },
    {
      emoji: "📊",
      title: "No Structure",
      description: "Comments like 'this looks nice' don't tell you what to improve."
    },
    {
      emoji: "⏰",
      title: "Time Wasted",
      description: "Hours spent fishing through unhelpful suggestions."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          The Problem with Social Media Feedback
        </h2>
        <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
          Building in public is great, but social media feedback rarely helps you improve.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="feature-box" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-16 h-16 icon-3d rounded-xl flex items-center justify-center mx-auto mb-6 animate-fade-in-3d" 
                   style={{ animationDelay: `${index * 0.2}s` }}>
                <span className="text-2xl">{problem.emoji}</span>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;