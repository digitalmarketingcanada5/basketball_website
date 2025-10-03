import React from 'react';
import Link from 'next/link';

const TrainingCTASection = () => {
  const ctaStats = [
    {
      number: "100+",
      label: "Athletes Trained",
      description: "Successfully developed"
    },
    {
      number: "85%",
      label: "College Placement",
      description: "Academic scholarship rate"
    },
    {
      number: "15+",
      label: "Years Experience",
      description: "Elite level coaching"
    },
    {
      number: "24/7",
      label: "Support System",
      description: "Academic & athletic"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-8 bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {ctaStats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4 p-6 bg-black rounded-full w-24 h-24 mx-auto flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                <span className="text-2xl md:text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                {stat.label}
              </h3>
              <p className="text-sm text-gray-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="text-center bg-black p-16 rounded-lg relative overflow-hidden">
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-red-600 rounded-full"></div>
            <div className="absolute top-20 right-20 w-16 h-16 bg-red-600 rounded-full"></div>
            <div className="absolute bottom-10 left-20 w-12 h-12 border-2 border-red-600 rotate-45"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-red-600 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              READY TO 
              <span className="block text-red-600">EXCEED YOUR LIMITS?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the EXCEED Academic Basketball Prep Program and take the first step 
              toward achieving excellence both on the court and in the classroom.
            </p>

            {/* Contact Information */}
            <div className="grid grid-cols-1 gap-8 mb-12 max-w-md mx-auto">
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <h4 className="text-xl font-bold text-white mb-3">Training & Academic Inquiries</h4>
                <p className="text-gray-300 mb-2">Coach Richards</p>
                <a href="tel:+14167798878" className="text-red-400 font-bold text-lg hover:text-red-300 transition-colors">
                  +1 (416) 779‑8878
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/contact"
                className="bg-red-600 text-white font-bold py-5 px-10 rounded-full hover:bg-red-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
              >
                SCHEDULE EVALUATION
              </Link>
              <a 
                href="/EXCEED_CAD_ACADEMIC_CONTRACT.pdf"
                download
                className="border-2 border-red-600 text-red-600 font-bold py-5 px-10 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 text-lg text-center inline-block"
              >
                DOWNLOAD CONTRACT
              </a>
              <Link 
                href="/contact"
                className="border-2 border-gray-600 text-gray-300 font-bold py-5 px-10 rounded-full hover:border-white hover:text-white transition-all duration-300 text-lg text-center"
              >
                CONTACT ADMISSIONS
              </Link>
            </div>

            {/* Additional Info */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <p className="text-gray-400 mb-4">
                <strong className="text-white">Training Sessions Available:</strong> 
                Contact coaches for personalized training schedules
              </p>
              <p className="text-gray-400">
                <strong className="text-white">Locations:</strong> 
                BCR School, Amiskwaciy Academy, Saint-Joseph - Edmonton, AB | Great Lyn Academy - Ontario
              </p>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="mt-16 text-center">
          <p className="text-2xl font-bold text-red-400 mb-4">
            "Excellence is not achieved overnight. It's built through dedication, discipline, and the pursuit of academic and athletic greatness."
          </p>
          <p className="text-gray-400 font-medium">
            — Coach Richards, EXCEED Head Coach
          </p>
        </div>

      </div>
    </section>
  );
};

export default TrainingCTASection;