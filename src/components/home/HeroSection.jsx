"use client";
import React, { useState, useEffect } from 'react';
import { FacebookIcon, InstagramIcon, XIcon, YouTubeIcon, TikTokIcon } from '../icons';
import { heroSection, socialMediaLinks } from '../../lib/siteData';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate scroll progress (0 to 1)
  const scrollProgress = Math.min(scrollY / 400, 1);

  return (
    <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden min-h-[800px]">
      
      {/* Social Media Links - Fixed Left Side */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col">
        <ul className="space-y-4">
          {socialMediaLinks.map((social, index) => {
            const IconComponent = {
              FacebookIcon,
              InstagramIcon, 
              XIcon,
              YouTubeIcon,
              TikTokIcon
            }[social.icon];
            
            return (
              <li key={index}>
                <a 
                  href={social.url} 
                  className="p-2 inline-block text-white bg-gray-900 rounded-full hover:bg-red-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconComponent />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Main Hero Content */}
      <div className="container mx-auto h-full flex items-center justify-center relative px-4">
        
        {/* "Exceed Your Limits" Text - Behind players initially, comes forward on scroll */}
        <div 
          className="absolute inset-0 flex justify-center items-center transition-all duration-300 ease-out"
          style={{
            zIndex: scrollProgress > 0.3 ? 25 : 5,
            opacity: 0.3 + (scrollProgress * 0.7),
            transform: `scale(${0.8 + (scrollProgress * 0.3)}) translateY(${scrollProgress * -30}px)`
          }}
        >
          <img 
            src="/images/exceed_your_limits.png" 
            alt="Exceed Your Limits" 
            className="w-full max-w-5xl h-auto object-contain"
          />
        </div>

        {/* Hero Athletes - Middle layer */}
        <div 
          className="absolute inset-0 flex justify-center items-end z-20 transition-all duration-300 ease-out"
          style={{
            transform: `translateY(${scrollProgress * 20}px)`,
            opacity: 1 - (scrollProgress * 0.3)
          }}
        >
          <img 
            src="/images/hero-athletes.png" 
            alt="Exceed CAD Student Athletes" 
            className="w-full max-w-6xl h-[90%] object-contain object-bottom"
          />
        </div>

        {/* Excellence in Academics & Athletics - Top center */}
        <div 
          className="absolute top-16 lg:top-34 left-1/2 z-30 text-center transition-all duration-500 ease-out"
          style={{
            opacity: 0.7 + (scrollProgress * 0.3),
            transform: `translateX(-50%) translateY(${-10 + (scrollProgress * 5)}px)`
          }}
        >
          <p className="text-red-600 font-bold text-lg md:text-xl tracking-[0.3em] uppercase">
            {heroSection.subtitle}
          </p>
        </div>
        
      </div>
      
      {/* CTA Button - Bottom center, appears and moves up on scroll */}
      <div 
        className="absolute left-1/2 z-30 transition-all duration-500 ease-out"
        style={{
          bottom: `${120 + (scrollProgress * 50)}px`,
          opacity: scrollProgress * 1.2,
          transform: `translateX(-50%) translateY(${30 - (scrollProgress * 30)}px)`
        }}
      >
        <button className="bg-red-600 text-white font-bold py-4 px-8 rounded-full hover:bg-red-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105">
          {heroSection.ctaText}
        </button>
      </div>

      {/* Join The Movement - Bottom Right */}
      {/* <div 
        className="absolute bottom-8 right-8 z-30 transition-all duration-300"
        style={{
          opacity: 1 - (scrollProgress * 0.3)
        }}
      >
        <p className="text-white font-bold text-lg tracking-widest uppercase">
          {heroSection.socialText}
        </p>
      </div> */}
    </section>
  );
};

export default HeroSection;