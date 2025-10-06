import React from 'react';
import Image from 'next/image';
import { Logo, InstagramIcon } from '../icons';
import { siteInfo, navigation, contact, schools } from '../../lib/siteData';

const Footer = () => {
  return (
    <footer className="py-16 px-4 sm:px-8 border-t border-gray-800">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-start mb-6">
              <Logo />
              <h3 className="text-2xl font-bold mt-4 text-white">EXCEED</h3>
              <p className="text-gray-400 text-sm mt-2">{siteInfo.tagline}</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {siteInfo.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.main.slice(0, 6).map(item => (
                <li key={item}>
                  <a 
                    href={item === 'HOME' ? '#' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* School Locations */}
          <div>
            <h4 className="text-white font-bold mb-4">School Locations</h4>
            <ul className="space-y-3">
              {schools.map(school => (
                <li key={school.id} className="text-gray-400 text-sm">
                  <div className="font-semibold text-white">{school.name}</div>
                  <div>{school.address}</div>
                  <div>{school.city}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              {contact.primary.map((coach, index) => (
                <div key={index} className="text-gray-400 text-sm">
                  <div className="font-semibold text-white">{coach.name}</div>
                  <div>{coach.role}</div>
                  <div className="text-red-600">{coach.phone}</div>
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-800">
                <div className="text-gray-400 text-sm space-y-1">
                  <div>Email: <span className="text-red-600">{contact.general.email}</span></div>
                  <div>Phone: <span className="text-red-600">{contact.general.phone}</span></div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-400 text-sm mb-2">Follow Us:</p>
                  <div className="flex space-x-3">
                    <a
                      href="https://www.tiktok.com/@exceed.basketball?_t=ZM-90KQgfVzTbv&_r=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-5 h-5 opacity-60 hover:opacity-100 transition-opacity"
                      aria-label="Follow us on TikTok"
                    >
                      <Image
                        src="/images/tik-tok.png"
                        alt="TikTok"
                        width={20}
                        height={20}
                        className="object-contain"
                        style={{ filter: 'invert(1) brightness(2)' }}
                      />
                    </a>
                    <a
                      href="https://instagram.com/excee_d8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="Follow us on Instagram"
                    >
                      <InstagramIcon />
                    </a>
                    <a
                      href="https://www.youtube.com/@excee_d8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-5 h-5 opacity-60 hover:opacity-100 transition-opacity"
                      aria-label="Follow us on YouTube"
                    >
                      <Image
                        src="/images/youtube.png"
                        alt="YouTube"
                        width={20}
                        height={20}
                        className="object-contain"
                        style={{ filter: 'invert(1) brightness(2)' }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center pt-8 border-t border-gray-800">
          <nav className="flex flex-wrap justify-center items-center space-x-6 text-sm font-bold mb-6">
            {navigation.main.map(item => (
              <a 
                key={item} 
                href={item === 'HOME' ? '#' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="hover:text-red-600 transition-colors my-1 text-gray-400"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; 2025 EXCEED Academic Basketball Prep Program. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;