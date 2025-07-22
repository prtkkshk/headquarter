import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Zap } from "lucide-react";

const HowItWorksSection = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
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
      emoji: "📋",
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
    <section id="how-it-works" className="py-24 px-4 bg-gradient-to-b from-[#f7faff] via-[#eaf0fa] to-white/90">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col items-center mb-4">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
            <Zap className="w-7 h-7 text-primary" />
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-2 tracking-tight flex items-center gap-2">
            How It Works
          </h2>
        </div>
        <Separator className="my-8 max-w-xs mx-auto bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />
        <p className="text-xl text-muted-foreground mb-16 font-medium">
          A simple process to get the feedback you need
        </p>
        <div className="grid md:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`feature-box bg-white/95 shadow-xl border border-border rounded-2xl p-8 flex flex-col items-center text-center ${loaded ? 'feature-box-loaded' : ''}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="feature-emoji-bg">
                <span className="text-3xl">{step.emoji}</span>
              </div>
              <div className="text-sm text-primary font-semibold mb-2">{step.step}</div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground text-base">{step.description}</p>
            </div>
          ))}
          {!loaded && Array.from({length: 4}).map((_,i) => (
            <div key={i} className="feature-box-skeleton" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;