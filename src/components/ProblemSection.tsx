
import { MessagesSquare, FileQuestion, ThumbsDown } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="section-spacing relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-socl-background to-socl-background"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-8 text-gradient">The Struggle for Actionable Feedback</h2>
          
          <p className="body-text mb-12 max-w-3xl mx-auto">
            You've spent months building your product, but when you share it online, 
            you get random opinions from people who have never built anything. 
            Social media feedback is a waste of time with no real validation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect p-6 rounded-xl shadow-lg card-hover backdrop-blur-lg">
              <div className="w-14 h-14 bg-socl-highlightBg rounded-full flex items-center justify-center mx-auto mb-4 border border-socl-border/50 shadow-inner">
                <MessagesSquare size={24} className="text-socl-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-socl-accent">Social Media Noise</h3>
              <p className="text-socl-muted">Useless opinions from random people with no building experience</p>
            </div>
            
            <div className="glass-effect p-6 rounded-xl shadow-lg card-hover backdrop-blur-lg">
              <div className="w-14 h-14 bg-socl-highlightBg rounded-full flex items-center justify-center mx-auto mb-4 border border-socl-border/50 shadow-inner">
                <FileQuestion size={24} className="text-socl-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-socl-accent">Unstructured Feedback</h3>
              <p className="text-socl-muted">Random comments that don't address the real issues with your product</p>
            </div>
            
            <div className="glass-effect p-6 rounded-xl shadow-lg card-hover backdrop-blur-lg">
              <div className="w-14 h-14 bg-socl-highlightBg rounded-full flex items-center justify-center mx-auto mb-4 border border-socl-border/50 shadow-inner">
                <ThumbsDown size={24} className="text-socl-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-socl-accent">Time Wasted</h3>
              <p className="text-socl-muted">Hours spent filtering through unhelpful suggestions with no path forward</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
