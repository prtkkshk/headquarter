import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tag, Clock } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 px-4 bg-white/90">
      <div className="max-w-4xl mx-auto text-center">
        <div id="pricing-section-heading" className="flex flex-col items-center mb-4">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
            <Tag className="w-7 h-7 text-primary" />
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-2 tracking-tight flex items-center gap-2">
            Pricing
          </h2>
        </div>
        <Separator className="my-8 max-w-xs mx-auto bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />
        <div className="bg-white/95 rounded-2xl p-10 shadow-2xl border border-border max-w-md mx-auto flex flex-col items-center animate-fade-in-3d">
          <Badge variant="secondary" className="mb-4 px-4 py-1 text-base">Best Value</Badge>
          <div className="text-5xl font-extrabold text-foreground mb-2 tracking-tight">₹1500</div>
          <div className="text-lg text-muted-foreground mb-6">flat fee</div>
          <div className="space-y-4 mb-8 w-full">
            <div className="flex items-center gap-3 justify-center">
              <span className="text-primary text-lg">✔</span>
              <span className="text-card-foreground">No upsells</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <span className="text-primary text-lg">✔</span>
              <span className="text-card-foreground">No hourly rates</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <span className="text-primary text-lg">✔</span>
              <span className="text-card-foreground">Just clean, clear advice</span>
            </div>
          </div>
          <p className="text-muted-foreground mb-8 text-base">
            We only take <span className="font-semibold text-primary">10 reviews per week</span> to keep the quality high.
          </p>
          <Button
            asChild
            variant="cta"
            size="lg"
            className="w-full mb-4 shadow-lg shadow-primary/20 hover:scale-105 transition-transform text-lg px-10 py-6"
          >
            <a href="https://form.typeform.com/to/zeKKt4Dm" target="_blank" rel="noopener noreferrer">
              Submit for Review
            </a>
          </Button>
          <div className="flex items-center justify-center gap-2 text-sm text-orange-600 font-semibold bg-orange-50 rounded-full px-4 py-2 mt-2 animate-fade-in-3d">
            <Clock className="w-4 h-4 text-orange-500" />
            Only 4 review slots left this week
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;