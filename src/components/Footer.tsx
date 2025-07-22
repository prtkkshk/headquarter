const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-xl font-bold text-card-foreground mb-4">hq</div>
            <p className="text-muted-foreground text-sm">
              Get your MVP reviewed by experienced builders who've been in your shoes.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-card-foreground transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-card-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-card-foreground transition-colors">Reviews</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-card-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-card-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-card-foreground transition-colors">Privacy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-card-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-card-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-card-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Headquarters. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-card-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-card-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-card-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;