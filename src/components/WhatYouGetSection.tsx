import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Gift } from "lucide-react";

const WhatYouGetSection = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  const benefits = [
    {
      emoji: "📋",
      title: "A written report covering UX, positioning, clarity, and direction"
    },
    {
      emoji: "🎯",
      title: "Specific, pointed suggestions, not generic 'this looks cool' fluff"
    },
    {
      emoji: "⏰",
      title: "Feedback delivered within 48 hours"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center mb-4">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
            <Gift className="w-7 h-7 text-primary" />
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-2 tracking-tight flex items-center gap-2">
            What You Get
          </h2>
        </div>
        <Separator className="my-8 max-w-xs mx-auto bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`feature-box bg-white/95 shadow-xl border border-border rounded-2xl p-8 flex flex-col items-center ${loaded ? 'feature-box-loaded' : ''}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="feature-emoji-bg">
                <span className="text-2xl">{benefit.emoji}</span>
              </div>
              <p className="text-lg text-foreground font-medium text-center mt-2">{benefit.title}</p>
            </div>
          ))}
          {!loaded && Array.from({length: 3}).map((_,i) => (
            <div key={i} className="feature-box-skeleton" />
          ))}
        </div>
        <p className="text-xl text-muted-foreground mt-16 font-medium">
          You'll walk away knowing exactly what to fix or double down on.
        </p>
      </div>
    </section>
  );
};

export default WhatYouGetSection;