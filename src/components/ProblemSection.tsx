import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle } from "lucide-react";

const ProblemSection = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
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
    <section className="py-24 px-4 bg-white/90">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col items-center mb-4">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-50 mb-2">
            <AlertTriangle className="w-7 h-7 text-red-400" />
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-2 tracking-tight flex items-center gap-2">
            The Problem with Social Media Feedback
          </h2>
        </div>
        <Separator className="my-8 max-w-xs mx-auto bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />
        <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto font-medium">
          Building in public is great, but social media feedback rarely helps you improve.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`feature-box bg-white/95 shadow-xl border border-border rounded-2xl p-8 flex flex-col items-center ${loaded ? 'feature-box-loaded' : ''}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="feature-emoji-bg">
                <span className="text-3xl">{problem.emoji}</span>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-base">
                {problem.description}
              </p>
            </div>
          ))}
          {!loaded && Array.from({length: 3}).map((_,i) => (
            <div key={i} className="feature-box-skeleton" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;