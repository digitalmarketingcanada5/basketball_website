import React from 'react';
import { 
  AcademicIcon, 
  ScholarshipIcon, 
  CommunityIcon, 
  UsersIcon 
} from '../icons';
import { stats } from '../../lib/siteData';

const StatsSection = () => {
  const iconComponents = {
    AcademicIcon: <AcademicIcon />,
    ScholarshipIcon: <ScholarshipIcon />,
    CommunityIcon: <CommunityIcon />,
    UsersIcon: <UsersIcon />
  };

  return (
    <section className="py-24 px-4 sm:px-8 bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-red-600 rounded-full group-hover:bg-red-700 transition-colors duration-300">
                  {React.cloneElement(iconComponents[stat.icon], { 
                    className: "w-8 h-8 text-white" 
                  })}
                </div>
              </div>
              <div className="mb-2">
                <p className="text-5xl md:text-6xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                  {stat.value}
                </p>
              </div>
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;