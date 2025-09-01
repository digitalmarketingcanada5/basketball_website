import React from 'react';

const ProgramCard = ({ icon, title, subtitle, description, highlighted = false }) => (
  <div className={`relative p-8 flex flex-col items-start min-h-[320px] ${
    highlighted ? 'bg-red-600' : 'bg-gray-900'
  } rounded-lg transition-all duration-300 hover:bg-red-700 hover:transform hover:scale-105 group border border-gray-800 hover:border-red-600`}>
    
    {/* Icon */}
    <div className={`${highlighted ? 'bg-black' : 'bg-red-600'} p-4 rounded-full mb-6 transition-all duration-300 group-hover:bg-black`}>
      {React.cloneElement(icon, { 
        className: `h-8 w-8 ${highlighted ? 'text-red-600' : 'text-white'} group-hover:text-red-600` 
      })}
    </div>
    
    {/* Content */}
    <div className="flex-1">
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className={`text-sm font-semibold mb-4 ${
        highlighted ? 'text-red-100' : 'text-gray-300'
      } group-hover:text-red-100 transition-colors`}>
        {subtitle}
      </p>
      <p className={`text-sm leading-relaxed ${
        highlighted ? 'text-red-50' : 'text-gray-400'
      } group-hover:text-red-50 transition-colors`}>
        {description}
      </p>
    </div>
    
    {/* Hover Effect */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
  </div>
);

export default ProgramCard;