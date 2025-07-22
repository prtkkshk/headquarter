import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Lightbulb } from "lucide-react";

const SolutionSection = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  const features = [
    {
      emoji: "🧑‍💻",
      title: "Experienced Reviewers",
      description: "Builders only - founders, PMs, tech leads, and designers with firsthand experience shipping and scaling real products."
    },
    {
      emoji: "📋",
      title: "Structured Process",
      description: "Structured product analysis with detailed written feedback and prioritized improvement recommendations."
    },
    {
      emoji: "⚡",
      title: "Fast Turnaround",
      description: "Structured, in-depth feedback delivered within 48 hours, so you can iterate faster and stay in momentum."
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#f7faff] via-[#eaf0fa] to-white/90">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col items-center mb-4">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
            <Lightbulb className="w-7 h-7 text-primary" />
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-2 tracking-tight flex items-center gap-2">
            A Better Way to Get Product Insights
          </h2>
        </div>
        <Separator className="my-8 max-w-xs mx-auto bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />
        <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto font-medium">
          Headsquarter connects you with experienced builders who give structured, actionable feedback on your MVP.
        </p>
        <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-box bg-white/95 shadow-xl border border-border rounded-2xl p-8 flex flex-col items-center ${loaded ? 'feature-box-loaded' : ''}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="feature-emoji-bg">
                <span className="text-2xl">{feature.emoji}</span>
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-base">{feature.description}</p>
            </div>
          ))}
          {!loaded && Array.from({length: 3}).map((_,i) => (
            <div key={i} className="feature-box-skeleton" />
          ))}
        </div>
        <p className="text-muted-foreground mt-16 mb-8 text-lg">
          No fluff. No endless scrolling. Just honest, actionable feedback from people who've been in your shoes.
        </p>
        <Button
          asChild
          variant="cta"
          size="lg"
          className="shadow-lg shadow-primary/20 hover:scale-105 transition-transform text-lg px-10 py-6"
        >
          <a href="https://form.typeform.com/to/zeKKt4Dm" target="_blank" rel="noopener noreferrer">
            Submit Your Product
          </a>
        </Button>
      </div>
    </section>
  );
};

export default SolutionSection;