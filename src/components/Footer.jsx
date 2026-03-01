import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* LOGO & NAVIGATION SECTION */}
        <div className="flex flex-col items-center justify-center">
          
          {/* LOGO AU CENTRE */}
          <div className="mb-8 group">
            <Link to="/" className="flex flex-col items-center">
              <img src={logo} alt="Afri Educ Tech Logo" className="h-20 w-auto group-hover:scale-105 transition-transform" />
              {/* LA PETITE LIGNE TRICOLORE SOUS LE LOGO */}
              <div className="flex w-16 h-1.5 mt-2 rounded-full overflow-hidden shadow-sm">
                <div className="w-1/3 bg-[#0F5075]"></div>
                <div className="w-1/3 bg-[#E3A045]"></div>
                <div className="w-1/3 bg-[#BA3A0F]"></div>
              </div>
            </Link>
          </div>

          {/* QUICK LINKS */}
          <nav className="flex flex-wrap justify-center gap-8 mb-12">
            <Link to="/" className="text-gray-500 hover:text-[#0F5075] font-medium transition-colors">Home</Link>
            <Link to="/solutions" className="text-gray-500 hover:text-[#0F5075] font-medium transition-colors">Solutions</Link>
            <Link to="/about" className="text-gray-500 hover:text-[#0F5075] font-medium transition-colors">About Us</Link>
            <Link to="/contact" className="text-gray-500 hover:text-[#0F5075] font-medium transition-colors">Contact</Link>
          </nav>

          {/* SOCIAL MEDIA PLACEHOLDERS */}
          <div className="flex gap-6 mb-12">
            {['𝕏', 'in', 'fb'].map((icon) => (
              <a 
                key={icon} 
                href="#" 
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#BA3A0F] hover:text-[#BA3A0F] transition-all duration-300"
              >
                <span className="font-bold">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* BOTTOM COPYRIGHT SECTION */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2026 Afri Educ Tech. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;