
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-socl-background/80 backdrop-blur-md shadow-lg py-3" : "py-5"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="text-2xl font-bold text-gradient">SOCL</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-socl-text/80 hover:text-socl-accent transition-colors">How It Works</a>
          <a href="#features" className="text-socl-text/80 hover:text-socl-accent transition-colors">Features</a>
          <a href="#faq" className="text-socl-text/80 hover:text-socl-accent transition-colors">FAQ</a>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-socl-accent/20 to-transparent rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <a 
              href="https://tally.so/r/mRrZ5K" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative cta-button"
            >
              Join the Waitlist
            </a>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none text-socl-text" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-socl-cardBg/90 backdrop-blur-md shadow-lg py-4">
          <div className="container-custom flex flex-col space-y-4">
            <a 
              href="#how-it-works" 
              className="text-socl-text/80 hover:text-socl-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#features" 
              className="text-socl-text/80 hover:text-socl-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#faq" 
              className="text-socl-text/80 hover:text-socl-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="https://tally.so/r/mRrZ5K" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button inline-block text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
