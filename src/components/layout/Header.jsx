'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Logo, MenuIcon } from '../icons';
import { navigation } from '../../lib/siteData';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to determine the correct href for each nav item
  const getNavHref = (navItem) => {
    switch(navItem) {
      case 'HOME':
        return '/';
      case 'TRAINING':
        return '/training';
      case 'CAMPS':
        return '/camps';
      // case 'ACADEMICS':
      case 'ABOUT': 
        return '/about';
      case 'GALLERY':
        return '/'; // Redirect to home until pages are built
      case 'CONTACT':
        return '/contact';
      default:
        return '/';
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 py-4 px-4 sm:px-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Logo />
          <div className="hidden md:block">
            <h3 className="text-white font-bold text-lg">EXCEED</h3>
            <p className="text-gray-400 text-xs">Academic Basketball Prep</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-bold">
          {navigation.main.map(item => (
            <Link 
              key={item} 
              href={getNavHref(item)}
              className="text-white hover:text-red-600 transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <MenuIcon />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-0 bg-exceed-navy bg-opacity-95 z-40">
          <div className="flex flex-col h-full pt-20">
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 p-2 text-white"
              onClick={closeMobileMenu}
              aria-label="Close mobile menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col items-center space-y-8 text-lg font-bold">
              {navigation.main.map(item => (
                <Link 
                  key={item} 
                  href={getNavHref(item)}
                  className="text-white hover:text-red-600 transition-colors py-2"
                  onClick={closeMobileMenu}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;