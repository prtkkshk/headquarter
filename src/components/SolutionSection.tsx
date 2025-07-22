import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  const features = [
    {
      title: "Experienced Reviewers",
      description: "Only founders and PMs who've shipped products themselves."
    },
    {
      title: "Structured Process",
      description: "Structured product analysis with detailed written feedback and prioritized improvement recommendations."
    },
    {
      title: "Fast Turnaround",
      description: "Detailed feedback delivered within 48 hours."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
          review.only
        </div>
        
        <h2 className="text-4xl font-bold text-foreground mb-4">
          A Better Way to Get Product Insights
        </h2>
        <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
          Headsquarter connects you with experienced builders who give structured, actionable 
          feedback on your MVP.
        </p>
        
        <div className="space-y-6 max-w-2xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="feature-box" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="flex items-start gap-4 text-left">
                <div className="w-10 h-10 icon-3d rounded-lg flex items-center justify-center flex-shrink-0 animate-fade-in-3d"
                     style={{ animationDelay: `${index * 0.2}s` }}>
                  <span className="text-xl">✅</span>
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-muted-foreground mt-12 mb-8">
          No fluff. No endless scrolling. Just honest, actionable feedback from people who've been in 
          your shoes.
        </p>
        
        <Button variant="cta" size="lg">
          Request Access
        </Button>
      </div>
    </section>
  );
};

export default SolutionSection;