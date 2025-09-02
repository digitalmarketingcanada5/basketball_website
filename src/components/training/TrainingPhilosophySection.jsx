import React from 'react';
import Link from 'next/link';

const TrainingPhilosophySection = () => {
  return (
    <section className="py-24 px-4 sm:px-8 bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Training Philosophy" 
                className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -right-8 bg-red-600 p-6 rounded-lg shadow-xl">
              <div className="text-center text-white">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm font-medium">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                YOUR GAME WON'T IMPROVE 
                <span className="block text-red-400">ON ITS OWN</span>
              </h2>
              <div className="w-16 h-1 bg-red-600 mb-6"></div>
              <h3 className="text-xl font-semibold text-red-400 mb-6">
                LET'S WORK.
              </h3>
            </div>
            
            <div className="space-y-6 mb-8">
              <p className="text-gray-300 leading-relaxed text-lg">
                No matter where you are in your basketball journey, <strong className="text-white">training is what separates players who want to improve from those who actually do.</strong>
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                Exceed CAD offers structured, <strong className="text-red-400">high-intensity training programs</strong> designed to help young athletes refine their skills, improve their game IQ, and <strong className="text-white">become the kind of player that makes an impact on the court.</strong>
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                Whether you're looking to sharpen your fundamentals, improve your conditioning, or gain a competitive edge, our training sessions are built to help you <strong className="text-white">develop real, transferable skills that matter in actual gameplay.</strong>
              </p>
              
              <div className="bg-black p-6 rounded-lg border-l-4 border-red-600">
                <p className="text-white font-bold text-xl mb-2">
                  If you're ready to put in the work,
                </p>
                <p className="text-red-400 font-bold text-xl">
                  this is where it starts.
                </p>
              </div>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Academic Excellence",
                "Elite Basketball Training", 
                "Character Development",
                "College Preparation"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link 
              href="/contact"
              className="inline-block bg-red-600 text-white font-bold py-4 px-8 rounded-full hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              START YOUR TRAINING JOURNEY
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingPhilosophySection;