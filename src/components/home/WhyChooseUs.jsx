import React from 'react';
import ProgramCard from '../ui/ProgramCard';
import { 
  AcademicIcon, 
  BasketballIcon, 
  ScholarshipIcon, 
  InclusiveIcon, 
  CoachingIcon, 
  CommunityIcon 
} from '../icons';
import { programs } from '../../lib/siteData';

const WhyChooseUs = () => {
  const iconComponents = {
    AcademicIcon: <AcademicIcon />,
    BasketballIcon: <BasketballIcon />,
    ScholarshipIcon: <ScholarshipIcon />,
    InclusiveIcon: <InclusiveIcon />,
    CoachingIcon: <CoachingIcon />,
    CommunityIcon: <CommunityIcon />
  };

  return (
    <section className="py-24 px-4 sm:px-8 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">
            Why Choose EXCEED
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {programs.map((program) => (
            <div key={program.id} className="group">
              <ProgramCard
                icon={iconComponents[program.icon]}
                title={program.title}
                subtitle={program.subtitle}
                description={program.description}
                highlighted={program.highlighted}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;