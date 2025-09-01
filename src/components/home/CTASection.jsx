import React from 'react';
import { ctaSection } from '../../lib/siteData';

const CTASection = () => {
  return (
    <section className="bg-red-600 py-12 px-4 sm:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {ctaSection.title}
          </h2>
          <p className="text-red-100 text-lg">
            {ctaSection.subtitle}
          </p>
        </div>
        <button className="bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors">
          {ctaSection.buttonText}
        </button>
      </div>
    </section>
  );
};

export default CTASection;