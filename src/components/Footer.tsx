// import { Github, Twitter, Mail } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-t from-[#eaf0fa] via-white to-white border-t border-border py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid md:grid-cols-4 gap-12 mb-12">
//           <div>
//             <div className="text-2xl font-extrabold text-card-foreground mb-4 tracking-tight">hq</div>
//             <p className="text-muted-foreground text-base mb-4">
//               Get your MVP reviewed by experienced builders who've been in your shoes.
//             </p>
//             <div className="flex gap-4 mt-2">
//               <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
//               <a href="#" aria-label="GitHub" className="hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
//               <a href="#" aria-label="Email" className="hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
//             </div>
//           </div>
//           <div>
//             <h4 className="font-semibold text-card-foreground mb-4 text-lg">Product</h4>
//             <ul className="space-y-2 text-base text-muted-foreground">
//               <li><a href="#" className="hover:text-card-foreground transition-colors">Features</a></li>
//               <li><a href="#" className="hover:text-card-foreground transition-colors">Pricing</a></li>
//               <li><a href="#" className="hover:text-card-foreground transition-colors">Reviews</a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold text-card-foreground mb-4 text-lg">Company</h4>
//             <ul className="space-y-2 text-base text-muted-foreground">
//               <li><a href="#" className="hover:text-card-foreground transition-colors">About</a></li>
//               <li><a href="#" className="hover:text-card-foreground transition-colors">Contact</a></li>
//               <li><a href="#" className="hover:text-card-foreground transition-colors">Privacy</a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold text-card-foreground mb-4 text-lg">Support</h4>
//             <ul className="space-y-2 text-base text-muted-foreground">
//               <li><a href="#" className="hover:text-card-foreground transition-colors">Help Center</a></li>
//               <li><a href="#" className="hover:text-card-foreground transition-colors">Documentation</a></li>
//               <li><a href="#" className="hover:text-card-foreground transition-colors">Contact Us</a></li>
//             </ul>
//           </div>
//         </div>
//         <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-base text-muted-foreground">
//             © 2024 Headquarters. All rights reserved.
//           </p>
//           <div className="flex gap-6 text-base text-muted-foreground">
//             <a href="#" className="hover:text-card-foreground transition-colors">Privacy Policy</a>
//             <a href="#" className="hover:text-card-foreground transition-colors">Terms of Service</a>
//             <a href="#" className="hover:text-card-foreground transition-colors">Cookies</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#eaf0fa] via-white to-white border-t border-border py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div>
            <div className="text-2xl font-extrabold text-card-foreground mb-4 tracking-tight">hq</div>
            <p className="text-muted-foreground text-base mb-4">
              Get your MVP reviewed by experienced builders who've been in your shoes.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.linkedin.com/company/headquarter-hq/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@joinhq.in"
                aria-label="Email"
                className="hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-base text-muted-foreground">
            © 2025 Headquarters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
