import React from 'react';

const RedLineIcon = () => (
  <div className="w-16 h-1 bg-red-600 my-6"></div>
);

const AboutPartnership = () => {
  return (
    <section className="py-12 px-4 sm:px-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Our Partners & Community</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Building Futures Together</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            At Exceed CADA, our partnerships extend beyond traditional sponsorships. We collaborate with educational institutions, community organizations, and basketball leagues to create comprehensive pathways for student-athlete success. Through these strategic alliances, we're able to maintain our high academic standards while providing elite athletic training opportunities.
          </p>
          <RedLineIcon />
          
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-lg text-white mb-2">Educational Partnerships</h4>
              <p className="text-gray-300 text-sm">BCR School, Amiskwaciy Academy, and Saint-Joseph provide comprehensive academic programs that support our 75% minimum academic average requirement.</p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg text-white mb-2">Competition Circuits</h4>
              <p className="text-gray-300 text-sm">Direct partnerships with CESPORTS (United States), OBSA Prep Leagues, and North Pole Hoops (NPH) ensure our athletes compete at the highest levels.</p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg text-white mb-2">Nike Scholarship Program</h4>
              <p className="text-gray-300 text-sm">Annual $5,000 scholarship fund supporting top male and female athletes per age category based on academic and athletic achievements.</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-center">
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-red-600 text-2xl font-bold mb-2">3</div>
            <div className="text-gray-300 text-sm">School Locations</div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-red-600 text-2xl font-bold mb-2">75%</div>
            <div className="text-gray-300 text-sm">Min Academic Average</div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-red-600 text-2xl font-bold mb-2">$5K</div>
            <div className="text-gray-300 text-sm">Nike Scholarships</div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-red-600 text-2xl font-bold mb-2">30+</div>
            <div className="text-gray-300 text-sm">Years Experience</div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-red-600 text-2xl font-bold mb-2">6-12</div>
            <div className="text-gray-300 text-sm">Grade Levels</div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-red-600 text-2xl font-bold mb-2">D1</div>
            <div className="text-gray-300 text-sm">Pathways</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPartnership;