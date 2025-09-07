import React from 'react';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 mr-3 mt-1 flex-shrink-0">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-4 sm:px-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-2 gap-4">
          <img 
            src="/images/training1.png" 
            alt="Exceed CADA player training" 
            className="rounded-lg w-full object-cover" 
          />
          <div className="space-y-4">
            <img 
              src="/images/training2.png" 
              alt="Exceed CADA basketball skills" 
              className="rounded-lg w-full h-auto object-cover" 
            />
            <img 
              src="/images/team-celebration.png" 
              alt="Exceed CADA team celebration" 
              className="rounded-lg w-full h-auto object-cover" 
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Choose Exceed CADA Camps?</h2>
          <div className="w-16 h-1 bg-red-600 mb-8"></div>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start">
              <CheckIcon />
              <strong>Year-Round Availability</strong> – Our camps aren't seasonal—players train and develop continuously.
            </li>
            <li className="flex items-start">
              <CheckIcon />
              <strong>Academic Excellence Integration</strong> – We combine athletic training with our 75% minimum academic standards.
            </li>
            <li className="flex items-start">
              <CheckIcon />
              <strong>Elite Competition Preparation</strong> – Players receive structured coaching for CESPORTS, OBSA, and NPH circuits.
            </li>
            <li className="flex items-start">
              <CheckIcon />
              <strong>Scholarship Pathway Support</strong> – Direct connection to our Division I pathways and $5,000 Nike scholarship program.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;