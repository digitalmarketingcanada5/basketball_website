import React from 'react';

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-2">
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

const CampsHero = () => {
  return (
    <section className="py-12 px-4 sm:px-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img 
            src="/images/training_group.png" 
            alt="Group of young basketball players training at Exceed CADA" 
            className="rounded-lg w-full" 
          />
          {/* <button className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white font-bold py-3 px-6 rounded-full flex items-center hover:bg-red-600 transition-colors">
            <PlayIcon />
            Play Video
          </button> */}
        </div>
        <div className="text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Year-Round Training. <br />
            Real Development. <br />
            True Accessibility.
          </h2>
          <div className="w-16 h-1 bg-red-600 my-6"></div>
          <p className="text-gray-300 leading-relaxed">
            Basketball is more than just a game—it's an opportunity. <strong>Exceed CADA Camps are designed to provide young athletes with a place to train, compete, and grow without financial barriers standing in the way.</strong> Whether you're learning the fundamentals or preparing for the next level, our year-round camps ensure that every player has access to structured coaching, skill development, and real game experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CampsHero;