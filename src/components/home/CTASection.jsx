'use client';

import React from 'react';
import { ctaSection } from '../../lib/siteData';

const CTASection = () => {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = ctaSection.brochurePath;
    link.download = 'Exceed_prep.pdf';
    link.click();
  };

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
        <button
          onClick={handleDownload}
          className="bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          {ctaSection.buttonText}
        </button>
      </div>
    </section>
  );
};

export default CTASection;