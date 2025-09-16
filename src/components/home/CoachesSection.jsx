"use client";
import React from 'react';
import CoachCard from '../ui/CoachCard';
import { coaches } from '../../lib/siteData';

const CoachesSection = () => {
  return (
    <section className="py-24 px-4 sm:px-8 bg-slate-900">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            OUR COACHES
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>
        
        <div className="flex justify-center">
          {coaches.map((coach, index) => (
            <div key={coach.id} className="group max-w-md w-full">
              
              {/* Coach Card */}
              <div className="text-center mb-6">
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img 
                    src="/images/coach.png"
                    alt={coach.name} 
                    className="w-full h-[300px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {coach.name}
                </h4>
                <p className="text-gray-400 mb-3 font-semibold">{coach.title}</p>
                <a href={`tel:${coach.contact}`} className="text-red-600 font-bold text-lg hover:text-red-400 transition-colors">
                  {coach.contact}
                </a>
              </div>

              {/* Coach Description */}
              <div className="bg-black p-6 rounded-lg border border-gray-800 group-hover:border-red-600 transition-colors duration-300">
                <p className="text-gray-300 leading-relaxed">
                  {coach.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Coach Info */}
        <div className="mt-20 text-center bg-black p-12 rounded-lg">
          <h3 className="text-2xl font-bold text-white mb-6">
            Excellence Through Experience
          </h3>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed text-lg">
            All our coaches have personally navigated and overcome barriers to achieving academic degrees while facing adversity. 
            They aim to help young people achieve success in both sport and academics, preparing them for adult life with 
            over <span className="text-red-400 font-semibold">30 years of combined elite-level coaching experience</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;