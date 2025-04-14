import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollRef = useRef<number>(0);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollState = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;

      // Only update state if we've scrolled more than 10px
      if (Math.abs(scrollDelta) > 10) {
        setIsScrolled(currentScrollY > 10);
        lastScrollY = currentScrollY;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        animationFrameRef.current =
          window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out before:absolute before:inset-0 before:transition-opacity before:duration-300 ${
        isScrolled
          ? "before:bg-socl-background/90 before:backdrop-blur-xl before:opacity-100 py-3 shadow-md"
          : "before:opacity-0 py-5"
      }`}
    >
      <div className="container-custom flex justify-between items-center relative z-10">
        {/* <div className="text-2xl font-bold relative">
          <span className="bg-gradient-to-r from-socl-primary to-socl-accent bg-clip-text text-transparent">
            hq
          </span>
          
          <div className="absolute -inset-1 bg-gradient-to-r from-socl-primary/20 to-socl-accent/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div> */}
        <div className="text-2xl font-bold relative">
          <img
            src="/image-removebg-preview.png"
            alt="hq"
            className="h-10 w-auto"
          />
          {/* Logo glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-socl-primary/20 to-socl-accent/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["How It Works", "Features", "FAQ"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="relative text-socl-text/80 hover:text-white transition-colors duration-300 group"
            >
              <span>{item}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-socl-primary to-socl-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="https://tally.so/r/mRrZ5K"
            target="_blank"
            rel="noopener noreferrer"
            className="relative cta-button group overflow-hidden"
          >
            <span className="relative z-10">Join the Waitlist</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-socl-accent to-socl-primary"></div>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none text-socl-text relative overflow-hidden group"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="relative z-10">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
          <div className="absolute inset-0 bg-socl-primary/10 scale-0 rounded-full group-hover:scale-100 transition-transform duration-300"></div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-socl-cardBg backdrop-blur-xl shadow-lg border-b border-socl-border/20 transition-all duration-300 ease-out ${
          mobileMenuOpen
            ? "max-h-80 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden`}
      >
        <div className="container-custom flex flex-col space-y-4 py-4">
          {["How It Works", "Features", "FAQ"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-socl-text/80 hover:text-white transition-colors py-2 group flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="w-1 h-0 group-hover:h-full bg-socl-primary mr-2 transition-all duration-300"></span>
              {item}
            </a>
          ))}
          <a
            href="https://tally.so/r/mRrZ5K"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-block text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="relative z-10">Join the Waitlist</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
