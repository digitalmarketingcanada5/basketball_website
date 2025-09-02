import React from 'react';
import Link from 'next/link';
import { Logo, MenuIcon } from '../icons';
import { navigation } from '../../lib/siteData';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 py-4 px-4 sm:px-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Logo />
          <div className="hidden md:block">
            <h3 className="text-white font-bold text-lg">EXCEED CAD</h3>
            <p className="text-gray-400 text-xs">Academic Basketball Prep</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-bold">
          {navigation.main.map(item => {
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

            return (
              <Link 
                key={item} 
                href={getNavHref(item)}
                className="text-white hover:text-red-600 transition-colors"
              >
                {item}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2">
          <MenuIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;