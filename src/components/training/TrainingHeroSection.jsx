"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const TrainingHeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollProgress = Math.min(scrollY / 600, 1);

  return (
    <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden min-h-[800px]">
      
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          transform: `translateY(${scrollProgress * 100}px)`,
          opacity: 1 - (scrollProgress * 0.4)
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3" 
          alt="Basketball Training" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto h-full flex items-center justify-center relative z-20 px-4">
        
        {/* Hero Content */}
        <div className="text-center max-w-4xl">
          
          {/* Main Title */}
          <div 
            className="mb-8 transition-all duration-500 ease-out"
            style={{
              transform: `translateY(${-scrollProgress * 30}px)`,
              opacity: 1 - (scrollProgress * 0.3)
            }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              ELITE BASKETBALL
              <span className="block text-red-600">TRAINING</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div 
            className="mb-8 transition-all duration-500 ease-out"
            style={{
              transform: `translateY(${-scrollProgress * 20}px)`,
              opacity: 1 - (scrollProgress * 0.4)
            }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-red-400 mb-4 tracking-wide">
              TRAIN WITH PURPOSE. COMPETE WITH CONFIDENCE.
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Develop real, transferable skills through structured, high-intensity training programs 
              designed for athletes who are serious about improvement.
            </p>
          </div>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-500 ease-out"
            style={{
              transform: `translateY(${-scrollProgress * 10}px)`,
              opacity: 1 - (scrollProgress * 0.5)
            }}
          >
            <Link 
              href="/contact"
              className="bg-red-600 text-white font-bold py-4 px-8 rounded-full hover:bg-red-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
            >
              JOIN TRAINING PROGRAM
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-lg text-center"
            >
              VIEW TRAINING SCHEDULE
            </Link>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      
    </section>
  );
};

export default TrainingHeroSection;