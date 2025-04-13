
const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-socl-border/20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-socl-accent/5 to-transparent opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-3 text-gradient">SOCL</div>
            <p className="text-sm text-socl-muted">A private space for serious builders.</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="#" className="text-socl-muted hover:text-socl-accent transition-colors text-sm">
              About
            </a>
            <a href="#" className="text-socl-muted hover:text-socl-accent transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-socl-muted hover:text-socl-accent transition-colors text-sm">
              Terms of Service
            </a>
            <a href="mailto:hello@socl.io" className="text-socl-muted hover:text-socl-accent transition-colors text-sm">
              Contact Us
            </a>
          </div>
        </div>
        
        <div className="border-t border-socl-border/10 mt-8 pt-8 text-center text-sm text-socl-muted">
          <p>&copy; {currentYear} SOCL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
