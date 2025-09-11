import React from 'react';

const RedLineIcon = () => (
  <div className="w-16 h-1 bg-red-600 my-6"></div>
);

const AboutHero = () => {
  return (
    <section className="py-12 px-4 sm:px-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative flex justify-center items-center">
          <div className="absolute w-full h-full border-4 border-gray-800 rounded-full scale-110"></div>
          <div className="absolute w-full h-full bg-red-600 rounded-full scale-75 blur-2xl opacity-30"></div>
          <img 
            src="/images/about_us.png" 
            alt="EXCEED Team" 
            className="rounded-full w-full max-w-md z-10" 
          />
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">BUILT DIFFERENT</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Basketball is more than a game at EXCEED—it's a pathway to academic and athletic excellence. Based in Edmonton, Alberta, we proudly serve young student-athletes from diverse backgrounds, offering programs that combine rigorous academic standards with elite basketball training. Our approach is transformative: provide exceptional opportunities that are accessible, inclusive, and designed to develop future leaders both in the classroom and on the court.
          </p>
          <RedLineIcon />
          <h4 className="font-bold text-xl mb-2">Our Why</h4>
          <p className="text-gray-300 leading-relaxed mb-6">
            We believe every student-athlete deserves the chance to excel academically and athletically, regardless of their background or circumstances. EXCEED was founded to create an educational ecosystem where academic excellence meets basketball mastery, where a 75% minimum academic average is maintained alongside elite athletic training. By making quality education and basketball development accessible, we're not just shaping players—we're empowering future leaders.
          </p>
          <h4 className="font-bold text-xl mb-2">Our Mission</h4>
          <p className="text-gray-300 leading-relaxed mb-6">
            Our mission is to build confident, capable student-athletes who embody academic excellence, sportsmanship, and leadership. Through innovative education, comprehensive basketball training, elite competition opportunities, and scholarship pathways, EXCEED is redefining what it means to be a student-athlete. We create lifelong success stories, ensuring education and basketball remain transformative forces in the lives of all who participate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;