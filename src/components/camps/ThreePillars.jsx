import React from 'react';

const ThreePillars = () => {
  return (
    <section className="pt-12 pb-24 px-4 sm:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-2xl font-bold mb-4">Keep Players in the Game</h3>
          <p className="text-gray-400">
            By removing financial barriers to training and development while maintaining our 75% academic standards.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Give Athletes Elite Opportunity</h3>
          <p className="text-gray-400">
            By ensuring every player has access to CESPORTS, OBSA, and NPH competition circuits.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Create Pathways with Life Skills to Succeed</h3>
          <p className="text-gray-400">
            By connecting student-athletes to Division I scholarships and our Academic And Athletic Scholarship Bursary of $5000 available to those who qualify.
          </p>
        </div>
      </div>
      <div className="container mx-auto text-center max-w-4xl mt-12">
        <p className="text-gray-300 leading-relaxed">
          For sponsors and partners, this is an opportunity to make a tangible impact. Your support ensures that talented young athletes—regardless of financial background—have the same access to structured training, skill development, and elite competition as their peers. By investing in these camps, you help build a stronger, more inclusive basketball community where ability, dedication, and academic excellence—not cost—determine who gets to succeed.
        </p>
      </div>
    </section>
  );
};

export default ThreePillars;