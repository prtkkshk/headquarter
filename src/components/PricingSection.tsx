import { Button } from "@/components/ui/button";
import { Check, Clock } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-foreground mb-16">Pricing</h2>
        
        <div className="bg-card rounded-2xl p-8 shadow-card border border-border max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="text-5xl font-bold text-foreground mb-2">₹1500</div>
            <div className="text-lg text-muted-foreground">flat fee</div>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-card-foreground">No upsells</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-card-foreground">No hourly rates</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-card-foreground">Just clean, clear advice</span>
            </div>
          </div>
          
          <p className="text-muted-foreground mb-8">
            We only take 5–10 reviews per week to keep the quality high.
          </p>
          
          <Button variant="cta" size="lg" className="w-full mb-4">
            Get Your Review
          </Button>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-orange-500" />
            <span className="text-orange-500 font-medium">Only 4 review slots left this week</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;