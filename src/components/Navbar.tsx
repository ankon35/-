import React, { useState, useEffect } from 'react';
import { CAFE_INFO } from '../data/cafeData';
import { Phone, Calendar, Menu as MenuIcon, X, MapPin } from 'lucide-react';

export interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ambiance', href: '#ambiance' },
    { name: 'Menu', href: '#menu' },
    { name: 'Our Story', href: '#story' },
    { name: 'Location & Hours', href: '#location' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#faf8f5]/95 backdrop-blur-md shadow-sm py-3 border-b border-[#e8f0eb]' 
          : 'bg-[#faf8f5] py-4 border-b border-[#ece7de]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none" id="brand-logo-link">
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#15803d] shadow-sm group-hover:scale-105 transition-transform duration-200">
            <img 
              src="assets/Logo.jpg" 
              alt="Aurora Café & Bistro" 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.endsWith('/assets/Logo.jpg')) {
                  target.src = '/assets/Logo.jpg';
                }
              }}
            />
            {/* Online Green Indicator Dot as in Facebook screenshot */}
            <span 
              className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#16a34a] border-2 border-white rounded-full" 
              title="Open Now" 
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#173829]">
                Aurora
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#15803d] bg-[#e8f0eb] px-1.5 py-0.5 rounded">
                Café & Bistro
              </span>
            </div>
            <p className="text-[11px] text-[#526359] flex items-center gap-1 font-medium">
              <MapPin className="w-3 h-3 text-[#15803d]" /> Full Market, Khulna
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7" id="desktop-nav-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#2d4a3e] hover:text-[#15803d] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#15803d] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Quick Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Quick Call */}
          <a
            href={`tel:${CAFE_INFO.phone}`}
            id="nav-call-button"
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#173829] bg-[#e8f0eb] hover:bg-[#d8e6df] rounded-full transition-colors"
            title="Call Aurora Café"
          >
            <Phone className="w-3.5 h-3.5 text-[#15803d]" />
            <span>{CAFE_INFO.phone}</span>
          </a>

          {/* Reserve Table Button */}
          <button
            id="nav-reserve-button"
            onClick={onOpenReservation}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#15803d] hover:bg-[#166534] rounded-full shadow-sm transition-all hover:shadow hover:-translate-y-0.5 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Table</span>
          </button>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`tel:${CAFE_INFO.phone}`}
            id="mobile-phone-btn"
            className="p-2 text-[#173829] bg-white border border-[#d8e6df] rounded-full"
            aria-label="Call Aurora Café"
          >
            <Phone className="w-4 h-4 text-[#15803d]" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className="p-2 text-[#173829] hover:text-[#15803d] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf8f5] border-b border-[#e8f0eb] px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#2d4a3e] hover:text-[#15803d] py-2 border-b border-[#f0ece3]"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-[#15803d] hover:bg-[#166534] rounded-xl"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table</span>
              </button>

              <a
                href={`tel:${CAFE_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-[#173829] bg-[#e8f0eb] rounded-xl"
              >
                <Phone className="w-4 h-4 text-[#15803d]" />
                <span>Call {CAFE_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
