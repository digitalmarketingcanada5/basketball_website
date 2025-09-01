import React from 'react';

const CoachCard = ({ imgSrc, name, title, contact }) => (
  <div className="text-center">
    <div className="relative mb-4">
      <img src={imgSrc} alt={name} className="w-full grayscale rounded-lg" />
    </div>
    <h4 className="text-xl font-bold text-white">{name}</h4>
    <p className="text-gray-400 mb-2">{title}</p>
    {contact && (
      <p className="text-red-600 font-semibold text-sm">{contact}</p>
    )}
  </div>
);

export default CoachCard;