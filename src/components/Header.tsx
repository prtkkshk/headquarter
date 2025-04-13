
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled ? "bg-socl-background/60 backdrop-blur-xl shadow-lg py-3" : "py-5"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="text-2xl font-bold text-gradient flex items-center">
          <Sparkles className="text-socl-accent mr-1 h-5 w-5" />
          SOCL
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#how-it-works" 
            className="text-socl-text/80 hover:text-socl-accent transition-colors relative group"
          >
            <span>How It Works</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-socl-accent group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="#features" 
            className="text-socl-text/80 hover:text-socl-accent transition-colors relative group"
          >
            <span>Features</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-socl-accent group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="#faq" 
            className="text-socl-text/80 hover:text-socl-accent transition-colors relative group"
          >
            <span>FAQ</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-socl-accent group-hover:w-full transition-all duration-300"></span>
          </a>
          <div className="glow-effect">
            <a 
              href="https://tally.so/r/mRrZ5K" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button"
            >
              Join the Waitlist
            </a>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none text-socl-text p-2 rounded-lg hover:bg-socl-highlightBg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 z-40 transform transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-socl-background/95 backdrop-blur-xl"></div>
        <div className="relative h-full flex flex-col p-6 pt-24">
          <nav className="flex flex-col space-y-6 text-lg">
            <a 
              href="#how-it-works" 
              className="text-socl-text hover:text-socl-accent transition-colors py-2 border-b border-socl-border/20 pb-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#features" 
              className="text-socl-text hover:text-socl-accent transition-colors py-2 border-b border-socl-border/20 pb-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#faq" 
              className="text-socl-text hover:text-socl-accent transition-colors py-2 border-b border-socl-border/20 pb-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="glow-effect inline-block mt-4">
              <a 
                href="https://tally.so/r/mRrZ5K" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-button inline-block text-center w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join the Waitlist
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
