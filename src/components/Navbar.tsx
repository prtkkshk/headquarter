import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-socl-background/80 backdrop-blur-sm border-b border-socl-border/20">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="headquarter logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-white">headquarter</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
