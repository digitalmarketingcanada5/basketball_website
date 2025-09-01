import React from 'react';

const StatCard = ({ icon, value, label }) => (
  <div className="flex flex-col items-center text-center">
    <div className="mb-4">{icon}</div>
    <p className="text-4xl md:text-5xl font-bold text-white">{value}</p>
    <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">{label}</p>
  </div>
);

export default StatCard;