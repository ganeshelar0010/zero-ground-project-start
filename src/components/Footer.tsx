
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="font-bold text-xl text-blue-600 mb-4 inline-block">
              YourBrand
            </Link>
            <p className="text-gray-600 mt-2">
              Building the future, one pixel at a time.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Features</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Documentation</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Releases</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Newsletter</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Support</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Careers</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Partners</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} YourBrand. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
              Terms of Service
            </Link>
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
