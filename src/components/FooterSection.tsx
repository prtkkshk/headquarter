
import { Sparkles, Github, Twitter, Linkedin } from "lucide-react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-socl-border/20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-socl-accent/5 to-transparent opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-3 flex items-center text-gradient">
              <Sparkles className="text-socl-accent mr-1 h-5 w-5" />
              SOCL
            </div>
            <p className="text-sm text-socl-muted">A private space for serious builders.</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="#" className="text-socl-muted hover:text-socl-accent transition-colors text-sm relative group">
              <span>About</span>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-socl-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-socl-muted hover:text-socl-accent transition-colors text-sm relative group">
              <span>Privacy Policy</span>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-socl-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-socl-muted hover:text-socl-accent transition-colors text-sm relative group">
              <span>Terms of Service</span>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-socl-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="mailto:hello@socl.io" className="text-socl-muted hover:text-socl-accent transition-colors text-sm relative group">
              <span>Contact Us</span>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-socl-accent group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-socl-border/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-socl-muted">&copy; {currentYear} SOCL. All rights reserved.</p>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-socl-highlightBg border border-socl-border/30 text-socl-muted hover:text-socl-accent hover:border-socl-accent/50 transition-all duration-300">
              <Twitter size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-socl-highlightBg border border-socl-border/30 text-socl-muted hover:text-socl-accent hover:border-socl-accent/50 transition-all duration-300">
              <Github size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-socl-highlightBg border border-socl-border/30 text-socl-muted hover:text-socl-accent hover:border-socl-accent/50 transition-all duration-300">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
