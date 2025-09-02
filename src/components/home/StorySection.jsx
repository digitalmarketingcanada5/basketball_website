import React from 'react';
import Link from 'next/link';
import { aboutSection } from '../../lib/siteData';

const StorySection = () => {
  return (
    <section className="py-24 px-4 sm:px-8 bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="/images/our_story_image.png" 
                alt="Exceed CAD Academic Basketball Program - Our Story" 
                className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {aboutSection.title}
              </h2>
              <div className="w-16 h-1 bg-red-600"></div>
            </div>
            
            <div className="space-y-6 mb-8">
              {aboutSection.description.map((paragraph, index) => (
                <p key={index} className="text-gray-300 leading-relaxed text-lg">
                  {index === 0 && (
                    <span className="text-red-400 font-semibold">
                      Exceed CAD Academic Basketball Prep Program
                    </span>
                  )}
                  {index === 0 ? paragraph.replace('Exceed CAD Academic Basketball Prep Program', '') : paragraph}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Grades 6-12 Academic Excellence",
                "Elite Basketball Competition", 
                "Division I Scholarship Pathways",
                "Inclusive Support for All Students"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link 
              href="/about" 
              className="inline-block bg-red-600 text-white font-bold py-4 px-8 rounded-full hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {aboutSection.ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;