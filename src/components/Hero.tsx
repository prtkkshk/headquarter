import { Button } from "@/components/ui/button";
import { Star, Users } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-28 bg-gradient-to-b from-white via-[#f7faff] to-[#eaf0fa] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        {/* Subtle background pattern or gradient */}
        <div className="w-full h-full bg-gradient-to-br from-transparent via-blue-50 to-blue-100 opacity-60" />
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-8 leading-tight tracking-tight">
          Get Your MVP Reviewed by <span className="bg-gradient-primary bg-clip-text text-transparent">Experienced Builders</span>
        </h1>
        <p className="text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto font-medium">
          Skip the social media noise. Get candid feedback from builders who've actually shipped products and scaled startups.
        </p>
        <p>
          <br />
          <br />
        </p>
        {/* <p className="text-lg text-muted-foreground mb-12">
          Just <span className="font-bold text-primary">₹1500</span>. No upsells, no nonsense — only insights that help you ship better.
        </p> */}
        <Button
          asChild
          variant="cta"
          size="lg"
          className="mb-10 shadow-lg shadow-primary/20 hover:scale-105 transition-transform text-lg px-10 py-6"
        >
          <a href="https://form.typeform.com/to/zeKKt4Dm" target="_blank" rel="noopener noreferrer">
            Review My MVP
          </a>
        </Button>
        {/* <div className="flex items-center justify-center gap-8 text-base text-muted-foreground mb-12">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>1,152+ products reviewed</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 fill-primary text-primary" />
            <span>4.9/5 review score</span>
          </div>
        </div> */}
        {/* Testimonial Card Preview */}
        <div className="mt-10 bg-white/90 rounded-2xl shadow-xl p-8 max-w-lg mx-auto border border-border flex flex-col items-start gap-4 animate-fade-in-3d">
          <div className="flex items-center gap-4 mb-2">
            <Avatar>
              <AvatarFallback>RG</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-card-foreground">Rohan Gupta</span>
                <Badge variant="secondary">Product Lead, XYZ co.</Badge>
              </div>
              <span className="text-xs text-muted-foreground">Structured Review</span>
            </div>
          </div>
          <div className="space-y-2 text-left w-full">
            <div className="bg-muted/60 rounded-lg p-3">
              <span className="text-sm font-medium text-primary block mb-1">Needs Focus</span>
              <p className="text-sm text-muted-foreground">The product tries to do too much too early. Start by nailing one use case for one type of user, then expand.</p>
            </div>
            <div className="bg-muted/60 rounded-lg p-3">
              <span className="text-sm font-medium text-primary block mb-1">Product Vision</span>
              <p className="text-sm text-muted-foreground">The discovery feature is the most promising, it solves a real pain and shows clear utility. Consider making that the hero experience and streamlining everything else around it.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;