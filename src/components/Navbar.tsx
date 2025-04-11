
import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full py-4 border-b border-gray-200 bg-white/80 backdrop-blur-md fixed top-0 z-50">
      <div className="container flex items-center justify-between">
        <Link to="/" className="font-bold text-xl text-blue-600">
          YourBrand
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex space-x-6 items-center">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-16 w-full bg-white shadow-md transition-all duration-300 ease-in-out",
          isMenuOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"
        )}
      >
        <div className="container py-4 flex flex-col space-y-3">
          <Link 
            to="/" 
            className="text-gray-600 py-2 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-gray-600 py-2 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/services" 
            className="text-gray-600 py-2 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/contact" 
            className="text-gray-600 py-2 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
