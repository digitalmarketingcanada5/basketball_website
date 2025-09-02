import React from 'react';
import Link from 'next/link';

const SkillDevelopmentSection = () => {
  const skillCategories = [
    {
      title: "Shooting Mechanics & Shot Creation",
      description: "Improve accuracy, consistency, and decision-making under pressure",
      skills: [
        "Form shooting and muscle memory",
        "Catch and shoot techniques", 
        "Off-the-dribble shooting",
        "Shot selection and range extension",
        "Shooting under defensive pressure"
      ],
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Ball Handling & Control",
      description: "Develop tight, effective handles that allow you to break down defenders",
      skills: [
        "Two-ball dribbling drills",
        "Change of pace and direction",
        "Protecting the ball in traffic",
        "Advanced combo moves",
        "Game-speed ball handling"
      ],
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Passing & Court Vision",
      description: "Learn how to move the ball with precision and read the defense",
      skills: [
        "Entry passes and timing",
        "Reading defensive rotations",
        "No-look and advanced passes",
        "Creating assist opportunities",
        "Leading teammates effectively"
      ],
      icon: "👁️",
      image: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Defensive Techniques",
      description: "Strengthen footwork, reaction time, and on-ball defense",
      skills: [
        "Stance and positioning",
        "Lateral movement and slides",
        "Anticipation and steals",
        "Help defense and rotations",
        "Rebounding fundamentals"
      ],
      icon: "🛡️",
      image: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Finishing at the Rim",
      description: "Master layups, contact finishes, and scoring in traffic",
      skills: [
        "Ambidextrous finishing",
        "Contact absorption",
        "Creative finishing angles",
        "Post moves and footwork",
        "Drawing fouls effectively"
      ],
      icon: "🔥",
      image: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Mental Game & Leadership",
      description: "Develop basketball IQ, confidence, and team leadership skills",
      skills: [
        "Game situation awareness",
        "Pressure management",
        "Communication on court",
        "Decision making skills",
        "Building team chemistry"
      ],
      icon: "🧠",
      image: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-8 bg-black">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SKILL DEVELOPMENT AREAS
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive skill training covering every aspect of basketball development. 
            Each area is designed to build upon the others, creating well-rounded players.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Icon and Title Overlay */}
                <div className="absolute bottom-4 left-6 flex items-center space-x-3">
                  <div className="text-3xl">{category.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills List */}
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-start space-x-3 group/item">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2.5 flex-shrink-0 group-hover/item:bg-red-400 transition-colors"></div>
                      <span className="text-gray-400 text-sm group-hover/item:text-gray-300 transition-colors">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Border Effect */}
              <div className="h-1 bg-gradient-to-r from-red-600 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Training Schedule CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-red-600 to-red-700 p-12 rounded-lg">
          <h3 className="text-3xl font-bold text-white mb-4">
            Train Like a Champion
          </h3>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Our training programs run year-round with flexible scheduling to fit your academic commitments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-red-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
            >
              VIEW TRAINING SCHEDULE
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-red-600 transition-all duration-300 text-lg text-center"
            >
              BOOK EVALUATION SESSION
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillDevelopmentSection;