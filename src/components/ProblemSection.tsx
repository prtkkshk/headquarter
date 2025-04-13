
import { MessagesSquare, FileQuestion, ThumbsDown } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="section-spacing bg-white/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-8">The Struggle for Actionable Feedback</h2>
          
          <p className="body-text mb-12 max-w-3xl mx-auto">
            You've spent months building your product, but when you share it online, 
            you get random opinions from people who have never built anything. 
            Social media feedback is a waste of time with no real validation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/60 p-6 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessagesSquare size={24} className="text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Social Media Noise</h3>
              <p>Useless opinions from random people with no building experience</p>
            </div>
            
            <div className="bg-white/60 p-6 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileQuestion size={24} className="text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Unstructured Feedback</h3>
              <p>Random comments that don't address the real issues with your product</p>
            </div>
            
            <div className="bg-white/60 p-6 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsDown size={24} className="text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Time Wasted</h3>
              <p>Hours spent filtering through unhelpful suggestions with no path forward</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
