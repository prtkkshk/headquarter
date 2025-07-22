import { Button } from "@/components/ui/button";
import { Star, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Get Your MVP Reviewed by{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Experienced Builders
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
          Skip the social media noise. Get candid feedback from founders who've actually 
          shipped products and scaled startups.
        </p>
        
        <p className="text-lg text-muted-foreground mb-12">
          Just ₹1500. No upsells, no nonsense — only insights that help you ship better.
        </p>
        
        <Button variant="cta" size="lg" className="mb-8">
          Review My MVP
        </Button>
        
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>1,152+ products reviewed</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span>4.9/5 review score</span>
          </div>
        </div>
        
        {/* Review Card Preview */}
        <div className="mt-16 bg-card rounded-lg shadow-card p-6 max-w-md mx-auto border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold text-primary-foreground">SR</span>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-card-foreground">Structured Review</h3>
              <p className="text-sm text-muted-foreground">Rohan Gupta</p>
            </div>
          </div>
          
          <div className="space-y-3 text-left">
            <div>
              <span className="text-sm font-medium text-primary">Product Vision</span>
              <p className="text-sm text-muted-foreground mt-1">
                Clear onboarding flow, but positioning could be more focused.
              </p>
            </div>
            
            <div>
              <span className="text-sm font-medium text-secondary">UX/UI</span>
              <p className="text-sm text-muted-foreground mt-1">
                Navigation feels intuitive, minor responsive improvements needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;