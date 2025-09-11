import React from 'react';
import Link from 'next/link';
import { programsDetail } from '../../lib/siteData';

const ProgramsSection = () => {
  return (
    <section className="py-24 px-4 sm:px-8 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Student athletes in classroom - Academic Excellence" 
                className="rounded-lg w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-bold text-sm">Academic Excellence</p>
              </div>
            </div>
            <div className="relative group mt-12">
              <img 
                src="/images/wilson_evolution.jpg" 
                alt="Wilson Evolution basketballs - Elite Basketball Training" 
                className="rounded-lg w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-bold text-sm">Elite Basketball Training</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {programsDetail.title}
              </h2>
              <div className="w-16 h-1 bg-red-600 mb-4"></div>
              <h3 className="text-xl font-semibold text-red-400 mb-6">
                {programsDetail.subtitle}
              </h3>
            </div>
            
            <p className="text-gray-300 mb-10 leading-relaxed text-lg">
              {programsDetail.description}
            </p>

            {/* Program Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { title: "Local Students", price: "From $9,500 - $12,500", note: "Payment plans available" },
                { title: "International Program", price: "$17,500 comprehensive", note: "Includes accommodation" },
                { title: "Junior Program", price: "Grades 6-10: $8,000", note: "Stay at home schools" },
                { title: "Academic Scholarships", price: "Academic And Athletic Scholarship Bursary of $5000", note: "Available to those who qualify" },
                { title: "Local Students Without Accommodations", price: "$3,500", note: "Receiving a $5,000 Scholarship" },
                { title: "Junior", price: "Will not need to change their present school", note: "Flexible program options" },
                { title: "Low Income Families(Boys and Girls) Participating In Local Events", price: "$1,500 for the year", note: "Junior And Senior Athletes" }
              ].map((item, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-red-600 transition-colors duration-300 group">
                  <h4 className="text-white font-bold mb-2 group-hover:text-red-400 transition-colors">{item.title}</h4>
                  <p className="text-gray-300 text-sm mb-1">{item.price}</p>
                  <p className="text-red-600 text-sm font-medium">{item.note}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-600 text-white font-bold py-4 px-8 rounded-full hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                {programsDetail.ctaText}
              </button>
              <Link 
                href="/camps" 
                className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-gray-600 hover:border-red-600 text-center"
              >
                Explore Our Camps
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;