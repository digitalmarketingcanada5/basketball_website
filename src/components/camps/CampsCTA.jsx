import React from 'react';

const CampsCTA = () => {
  return (
    <section className="bg-red-600 py-12 px-4 sm:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">
          Ready to Join Our Camps? We're Here for You!
        </h2>
        <button className="bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors">
          CONTACT US
        </button>
      </div>
    </section>
  );
};

export default CampsCTA;