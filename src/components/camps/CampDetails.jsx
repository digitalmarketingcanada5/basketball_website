import React from 'react';

const DotCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-red-600 mr-3 mt-1 flex-shrink-0">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="3" fill="black"></circle>
  </svg>
);

const CampDetails = () => {
  return (
    <section className="pb-12 px-4 sm:px-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Camp #1: Grades 5 to University Athletes</h3>
          <p className="text-gray-400 font-semibold mb-4">Building Skills. Creating Access. Providing an Outlet.</p>
          <p className="text-gray-300 mb-6">
            For younger athletes, basketball is about <strong>learning, confidence, and having a place to develop.</strong> This camp provides an environment where players can:
          </p>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start">
              <DotCircleIcon /> 
              Refine their fundamentals—shooting, ball-handling, passing, and defense.
            </li>
            <li className="flex items-start">
              <DotCircleIcon /> 
              Learn teamwork and sportsmanship in a structured setting.
            </li>
            <li className="flex items-start">
              <DotCircleIcon /> 
              Develop confidence on and off the court.
            </li>
            <li className="flex items-start">
              <DotCircleIcon /> 
              Access training year-round without financial barriers.
            </li>
          </ul>
          <p className="mt-6 text-gray-300 font-semibold">
            EXCEED is committed to <strong>making basketball affordable and accessible</strong>, ensuring that every young athlete who wants to improve has a place to do so.
          </p>
          <div className="w-16 h-1 bg-red-600 mt-8"></div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Camp #2: Grades 7 to 5th Year Athletes</h3>
          <p className="text-gray-400 font-semibold mb-4">Focused Training. Real Feedback. Elite Preparation.</p>
          <p className="text-gray-300 mb-6">
            For athletes from Grade 7 through 5th year post-secondary, <strong>the competition gets tougher, and expectations rise.</strong> This camp is built for those ready to take the next step, offering:
          </p>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start">
              <DotCircleIcon /> 
              Detailed player feedback and assessments to track progress.
            </li>
            <li className="flex items-start">
              <DotCircleIcon /> 
              Skill refinement with game-specific training for elite-level competition.
            </li>
            <li className="flex items-start">
              <DotCircleIcon /> 
              Basketball IQ development—learning how to read the game, make better decisions, and execute under pressure.
            </li>
            <li className="flex items-start">
              <DotCircleIcon /> 
              Year-round training opportunities to ensure players stay sharp and competitive.
            </li>
          </ul>
          <p className="mt-6 text-gray-300 font-semibold">
            This camp is designed for <strong>serious players who want to enter elite basketball with confidence.</strong>
          </p>
          <div className="w-16 h-1 bg-red-600 mt-8"></div>
        </div>
      </div>
    </section>
  );
};

export default CampDetails;