const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-socl-border/30 ">
      <div className="container-custom ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-3 text-socl-accent">hq</div>
            <p className="text-sm text-socl-muted">
              A private space for serious builders.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href="#"
              className="text-socl-muted hover:text-socl-accent transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#"
              className="text-socl-muted hover:text-socl-accent transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-socl-muted hover:text-socl-accent transition-colors text-sm"
            >
              Terms of Service
            </a>
            <a
              href="mailto:hellobuilder@joinhq.me"
              className="text-socl-muted hover:text-socl-accent transition-colors text-sm"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="border-t border-socl-border/20 mt-8 pt-8 text-center text-sm text-socl-muted">
          <p>&copy; {currentYear} headquarter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
