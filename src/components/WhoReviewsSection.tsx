import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const WhoReviewsSection = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  const reviewers = [
    { emoji: "👥", title: "Experienced Builders", description: "Built and scaled multiple products", badge: "Founder" },
    { emoji: "🏆", title: "Product Veterans", description: "Deep expertise across SaaS, consumer & beyond", badge: "Product Lead" },
    { emoji: "⚡", title: "Actionable Insights", description: "Structured feedback, not vague opinions", badge: "Product Strategist" }
  ];
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-[#f7faff] to-[#eaf0fa]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center mb-4">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
            <Users className="w-7 h-7 text-primary" />
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-2 tracking-tight flex items-center gap-2">
            Who Reviews It?
          </h2>
        </div>
        <Separator className="my-8 max-w-xs mx-auto bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto font-medium">
        Your product is reviewed by a handpicked team of founders and product leaders, people who've built and scaled products across SaaS, consumer, marketplaces, and more.
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
        Each review is structured, sharp, and focused on real improvements, not vague opinions.
        </p>
        <div className="grid md:grid-cols-3 gap-10 mt-8">
          {reviewers.map((reviewer, index) => (
            <div
              key={index}
              className={`feature-box bg-white/95 shadow-xl border border-border rounded-2xl p-8 flex flex-col items-center ${loaded ? 'feature-box-loaded' : ''}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="feature-emoji-bg">
                <span className="text-2xl">{reviewer.emoji}</span>
              </div>
              <h3 className="font-semibold text-lg text-card-foreground mb-2">{reviewer.title}</h3>
              <Badge variant="secondary" className="mb-2">{reviewer.badge}</Badge>
              <p className="text-sm text-muted-foreground">{reviewer.description}</p>
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

export default WhoReviewsSection;