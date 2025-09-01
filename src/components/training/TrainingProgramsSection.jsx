import React from 'react';

const TrainingProgramsSection = () => {
  const trainingPrograms = [
    {
      id: 1,
      title: "Game-Focused Skill Development",
      description: "Master the fundamentals that translate directly to game situations. Every drill, every rep is designed with real gameplay scenarios in mind.",
      icon: "🏀",
      features: [
        "Shooting mechanics under pressure",
        "Ball handling in traffic",
        "Game-speed decision making",
        "Situational awareness"
      ],
      color: "bg-red-600"
    },
    {
      id: 2, 
      title: "Physical Conditioning & Fitness",
      description: "Build the strength, speed, and endurance needed to compete at the highest level throughout an entire game.",
      icon: "💪",
      features: [
        "Basketball-specific conditioning",
        "Strength and power development",
        "Injury prevention protocols", 
        "Recovery and nutrition guidance"
      ],
      color: "bg-gray-900"
    },
    {
      id: 3,
      title: "Mental Toughness & Game IQ",
      description: "Develop the mental skills and court awareness that separate good players from great ones.",
      icon: "🧠",
      features: [
        "Pressure situation training",
        "Leadership development",
        "Game film analysis",
        "Competitive mindset building"
      ],
      color: "bg-gray-900"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-8 bg-slate-900">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            TRAINING PROGRAMS
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Three core pillars of development that create complete, well-rounded basketball players
          </p>
        </div>

        {/* Training Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {trainingPrograms.map((program, index) => (
            <div 
              key={program.id} 
              className={`${program.color} p-8 rounded-lg transition-all duration-300 hover:transform hover:scale-105 group relative overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="absolute top-4 right-4 text-6xl opacity-50">{program.icon}</div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Number Badge */}
                <div className="flex items-center mb-4">
                  <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-3">
                    {program.id}
                  </div>
                  <div className="text-3xl">{program.icon}</div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                  {program.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-600 rounded-lg transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-black p-12 rounded-lg">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Take Your Game to the Next Level?
          </h3>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Join our comprehensive training program and start seeing real results in your game performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 text-white font-bold py-4 px-8 rounded-full hover:bg-red-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              REGISTER FOR TRAINING
            </button>
            <button className="border-2 border-gray-600 text-gray-300 font-bold py-4 px-8 rounded-full hover:border-white hover:text-white transition-all duration-300 text-lg">
              SCHEDULE CONSULTATION
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrainingProgramsSection;