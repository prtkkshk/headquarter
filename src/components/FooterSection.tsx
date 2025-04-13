
const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-3">SOCL</div>
            <p className="text-sm opacity-80">A private space for serious builders.</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="#" className="hover:opacity-75 transition-opacity text-sm">
              About
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity text-sm">
              Privacy Policy
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity text-sm">
              Terms of Service
            </a>
            <a href="mailto:hello@socl.io" className="hover:opacity-75 transition-opacity text-sm">
              Contact Us
            </a>
          </div>
        </div>
        
        <div className="border-t border-socl-text/10 mt-8 pt-8 text-center text-sm opacity-70">
          <p>&copy; {currentYear} SOCL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
