import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Assure-toi d'importer ton CSS
import logo from '../assets/logo.png'; // Assure-toi que le chemin est correct

const TricolorBorderUp = () => (
  <div className="flex h-[3px] w-full">
    <div className="flex-1 bg-[#0F5075]"></div>
    <div className="flex-1 bg-[#E3A045]"></div>
    <div className="flex-1 bg-[#BA3A0F]"></div>
  </div>
);

const TricolorBorderDown = () => (
  <div className="flex h-[3px] w-full">
    <div className="flex-1 bg-[#BA3A0F]"></div>
    <div className="flex-1 bg-[#E3A045]"></div>
    <div className="flex-1 bg-[#0F5075]"></div>
  </div>
);


const NavBar = () => {
  return (
    <div className="nav-container font-outfit">
      {/* Bordure Supérieure */}
    <TricolorBorderUp />

      <header className="flex justify-between items-center px-6 py-4 bg-white relative">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 [z-110]">
            <img src={logo} alt="Afri Educ Tech Logo" className="w-auto h-16" />
        </Link>

        {/* LOGIQUE DU HAMBURGER */}
        <input 
          type="checkbox" 
          id="menu-toggle" 
          className="hamburger-input" 
          tabIndex="0" 
        />
        
        <label htmlFor="menu-toggle" className="hamburger-label" aria-label="Menu">
          <span></span>
        </label>

        {/* LE MENU QUI COULISSE */}
        <nav className="nav-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/schools">Our Schools</Link></li>
            <li><Link to="/tech">3D Technology</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      {/* Bordure Inférieure */}
      <TricolorBorderDown />
    </div>
  );
};

export default NavBar;