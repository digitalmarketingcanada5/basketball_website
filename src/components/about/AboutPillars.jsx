import React from 'react';

const RedLineIcon = () => (
  <div className="w-16 h-1 bg-red-600 my-6"></div>
);

const PillarIconContainer = ({ children, highlighted }) => (
  <div className={`mx-auto mb-6 w-24 h-24 flex items-center justify-center rounded-full ${highlighted ? 'bg-white' : 'bg-gray-800'}`}>
    {children}
  </div>
);

// Icon Components
const AcademicIcon = ({ highlighted }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 78 78">
    <path d="M43,16H59.355V66.323H43Z" transform="translate(9.839 2.871)" style={{ fill: highlighted ? 'black' : 'red' }}></path>
    <path d="M14.581,67.161A12.581,12.581,0,1,1,27.161,54.581,12.595,12.595,0,0,1,14.581,67.161Zm0-20.129a7.548,7.548,0,1,0,7.548,7.548A7.557,7.557,0,0,0,14.581,47.032Z" transform="translate(-0.742 9.581)" style={{ fill: highlighted ? 'black' : 'red' }}></path>
    <path d="M28.141,11.065A13.832,13.832,0,0,0,1,14.839V66.419h.064A13.852,13.852,0,0,0,14.839,79H79V11.065Zm34.5,50.323a1.258,1.258,0,1,1,0-2.516,3.774,3.774,0,0,0,0-7.548,1.258,1.258,0,1,1,0-2.516,3.774,3.774,0,0,0,0-7.548,1.258,1.258,0,1,1,0-2.516,3.774,3.774,0,0,0,0-7.548,1.258,1.258,0,1,1,0-2.516,3.774,3.774,0,0,0,0-7.548h6.29V68.935h-6.29a3.774,3.774,0,0,0,0-7.548ZM59.1,21.129a3.769,3.769,0,0,0,3.543,2.516,1.258,1.258,0,0,1,0,2.516,3.774,3.774,0,1,0,0,7.548,1.258,1.258,0,0,1,0,2.516,3.774,3.774,0,1,0,0,7.548,1.258,1.258,0,0,1,0,2.516,3.774,3.774,0,1,0,0,7.548,1.258,1.258,0,0,1,0,2.516,3.774,3.774,0,1,0,0,7.548,1.258,1.258,0,0,1,0,2.516A3.769,3.769,0,0,0,59.1,68.935H28.141a13.8,13.8,0,0,0,.536-3.774V21.129ZM3.516,14.839a11.323,11.323,0,0,1,22.645,0v42.39a13.806,13.806,0,0,0-22.645,0Zm0,50.323A11.323,11.323,0,1,1,14.839,76.484,11.336,11.336,0,0,1,3.516,65.161ZM76.484,76.484H22.771a13.918,13.918,0,0,0,4.379-5.032h44.3V18.613H28.677V14.839c0-.425-.026-.843-.064-1.258H76.484Z" transform="translate(-1 -1)" fill={highlighted ? "black" : "#fff"}></path>
  </svg>
);

const BasketballIcon = ({ highlighted }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 78 78">
    <path d="M54.032,37H21.323A11.336,11.336,0,0,0,10,48.323v15.1H65.355v-15.1A11.336,11.336,0,0,0,54.032,37ZM37.677,53.355a5.032,5.032,0,1,1,5.032-5.032A5.032,5.032,0,0,1,37.677,53.355Z" transform="translate(1.323 8.29)" fill={highlighted ? "black" : "red"}></path>
    <path d="M61.161,1a3.779,3.779,0,0,0-3.774,3.774v7.548a3.77,3.77,0,0,0,2.454,3.523,8.817,8.817,0,0,1-4.971,6.938V17.965a8.748,8.748,0,0,0-2.58-6.227l-.673-.673.845-.845a3.927,3.927,0,0,0-2.777-6.7,3.953,3.953,0,0,0-2.777,1.15l-9.76,9.76a3.927,3.927,0,0,0,2.777,6.7,3.953,3.953,0,0,0,2.777-1.15l2.685-2.685a3.794,3.794,0,0,1,.677,2.145V47.548h2.516V26.161H51.1a11.24,11.24,0,0,0,1.258-.074V50.065h2.516V25.5a11.339,11.339,0,0,0,7.5-9.619,3.767,3.767,0,0,0,2.569-3.559V4.774A3.779,3.779,0,0,0,61.161,1ZM40.924,18.2a1.411,1.411,0,0,1-2.408-1,1.4,1.4,0,0,1,.413-1l9.76-9.76a1.411,1.411,0,0,1,2.408,1,1.4,1.4,0,0,1-.413,1ZM51.1,23.645H48.581V19.439a6.229,6.229,0,0,0-1.413-3.925l2.671-2.671.673.674a6.248,6.248,0,0,1,1.843,4.447v5.58A8.839,8.839,0,0,1,51.1,23.645ZM62.419,12.323a1.258,1.258,0,0,1-2.516,0V4.774a1.258,1.258,0,1,1,2.516,0Z" transform="translate(8.032 -1)" fill={highlighted ? "black" : "#fff"}></path>
  </svg>
);

const ScholarshipIcon = ({ highlighted }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 50.323 78">
    <path d="M58.29,51.554V23.645A21.215,21.215,0,0,0,49.6,6.439a17.542,17.542,0,0,0-25.394,0,21.22,21.22,0,0,0-8.691,17.208V51.554A3.769,3.769,0,0,0,13,55.1v2.516h2.516V55.1a1.258,1.258,0,1,1,2.516,0v2.516h2.516V55.1a3.769,3.769,0,0,0-2.516-3.543V23.645a18.947,18.947,0,0,1,1.4-7.148,17.607,17.607,0,1,0,35.086,2.116,17.809,17.809,0,0,0-.14-2.117,18.953,18.953,0,0,1,1.4,7.15V51.554A3.769,3.769,0,0,0,53.258,55.1v2.516h2.516V55.1a1.258,1.258,0,0,1,2.516,0v2.516h2.516V55.1a3.769,3.769,0,0,0-2.516-3.543ZM36.9,3.516A11.323,11.323,0,1,1,25.581,14.839,11.336,11.336,0,0,1,36.9,3.516Zm0,30.194A15.064,15.064,0,0,1,23.368,11.968a13.839,13.839,0,1,0,27.071,0A15.064,15.064,0,0,1,36.9,33.71Z" transform="translate(0.258)" fill={highlighted ? "black" : "#fff"}></path>
    <path d="M17.032,67.645A5.037,5.037,0,0,1,12,62.613V45H22.065V62.613A5.037,5.037,0,0,1,17.032,67.645Z" transform="translate(0 11.355)" fill={highlighted ? "black" : "red"}></path>
  </svg>
);

const CommunityIcon = ({ highlighted }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 78 78">
    <path d="M20.5,71A19.5,19.5,0,1,1,40,51.5,19.522,19.522,0,0,1,20.5,71Z" transform="translate(0 8)" fill={highlighted ? "black" : "red"}></path>
    <path d="M7.516,32.536H5c0-.874.033-1.755.1-2.613l2.509.194C7.546,30.911,7.516,31.725,7.516,32.536Z" transform="translate(1.032 7.464)" fill={highlighted ? "black" : "#fff"}></path>
    <path d="M38.886,5A34.187,34.187,0,0,0,5.317,33.744l2.487.384A31.652,31.652,0,0,1,38.886,7.516Z" transform="translate(1.114 1.032)" fill={highlighted ? "black" : "#fff"}></path>
    <path d="M40,1A39.008,39.008,0,0,0,2.882,51.978l2.4-.771a36.455,36.455,0,0,1,41-47.14c.006.235.018.469.018.707a45.371,45.371,0,0,1-19.193,37l1.452,2.054A47.89,47.89,0,0,0,48.806,4.774c0-.059,0-.118-.005-.177A36.262,36.262,0,0,1,59.944,9.474c.116,1.407.185,2.789.185,4.106A50.257,50.257,0,0,1,37.767,55.4l1.4,2.091a52.77,52.77,0,0,0,23.478-43.91c0-.716-.021-1.453-.054-2.2A36.713,36.713,0,0,1,72.683,23.812l0,.121c.011.322.023.645.023.97A50.358,50.358,0,0,1,28.983,74.775c-.063-.02-.127-.033-.19-.053l-.028.086-.069.01.019.148-.693,2.151A39,39,0,1,0,40,1Zm0,75.484a36.666,36.666,0,0,1-4.791-.338A52.917,52.917,0,0,0,75,29.734a36.464,36.464,0,0,1-35,46.75Z" transform="translate(0)" fill={highlighted ? "black" : "#fff"}></path>
  </svg>
);

const CoachingIcon = ({ highlighted }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 55.355 78">
    <g id="roller" transform="translate(0 78) rotate(-90)">
      <path d="M13.839,0H0V2.516H3.774V7.548H0v2.516H13.839A5.032,5.032,0,1,0,13.839,0Zm0,7.548H6.29V2.516h7.548a2.516,2.516,0,1,1,0,5.032Z" transform="translate(59.129 22.645)" fill={highlighted ? "black" : "#fff"}></path>
      <path d="M18.871,2.516V0H5.032a5.032,5.032,0,1,0,0,10.065H18.871V7.548H15.1V2.516Zm-6.29,5.032H5.032a2.516,2.516,0,1,1,0-5.032h7.548Z" transform="translate(0 22.645)" fill={highlighted ? "black" : "#fff"}></path>
      <path d="M5.032,0H0V22.645H5.032a3.779,3.779,0,0,0,3.774-3.774V3.774A3.779,3.779,0,0,0,5.032,0Z" transform="translate(51.581 16.355)" fill={highlighted ? "black" : "red"}></path>
      <path d="M8.806,0H3.774A3.779,3.779,0,0,0,0,3.774v15.1a3.779,3.779,0,0,0,3.774,3.774H8.806Z" transform="translate(17.613 16.355)" fill={highlighted ? "black" : "red"}></path>
      <path d="M20.129,0a7.546,7.546,0,0,0-6.29,3.384A7.545,7.545,0,0,0,0,7.548V47.806a7.545,7.545,0,0,0,13.839,4.164,7.545,7.545,0,0,0,13.839-4.164V7.548A7.556,7.556,0,0,0,20.129,0ZM7.548,52.839a5.037,5.037,0,0,1-5.032-5.032V7.548a5.032,5.032,0,0,1,10.065,0V47.806A5.037,5.037,0,0,1,7.548,52.839Zm17.613-5.032a5.032,5.032,0,1,1-10.065,0V7.548a5.032,5.032,0,1,1,10.065,0Z" transform="translate(25.161)" fill={highlighted ? "black" : "#fff"}></path>
    </g>
  </svg>
);

const ExcellenceIcon = ({ highlighted }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 78.413 78.413">
    <path d="M56.059,187.383H71.236V176H8v30.353H56.059Z" transform="translate(-6.735 -148.176)" fill={highlighted ? "black" : "red"}></path>
    <path d="M65.766,37.942v-21.5a8.864,8.864,0,0,0-8.853-8.853V0H8.853V7.588A8.864,8.864,0,0,0,0,16.441V69.56a8.864,8.864,0,0,0,8.853,8.853h68.1L78.4,69.767l.018-31.826ZM75.883,68.712a36.115,36.115,0,0,1-12.648,2.111,36.1,36.1,0,0,1-12.646-2.11V40.471H75.883ZM22.765,48.059a2.529,2.529,0,0,1-5.059,0V37.942a2.529,2.529,0,1,1,5.059,0ZM15.177,45.53H12.647V40.471h2.529Zm10.118-5.059H40.471V45.53H25.294ZM43,37.942a2.529,2.529,0,1,1,5.059,0V48.059a2.529,2.529,0,1,1-5.059,0Zm7.588,0a5.059,5.059,0,1,0-10.118,0H25.294a5.059,5.059,0,1,0-10.118,0H10.118V48.059h5.059a5.059,5.059,0,0,0,10.118,0H40.471a5.064,5.064,0,0,0,5.059,5.059,5.007,5.007,0,0,0,2.529-.7v4.5H7.588v2.529H48.059v2.529H2.529V59.442H5.059V56.913H2.529V29.089H5.059V26.559H2.529V24.03H63.236v2.529H7.588v2.529H63.236v8.853ZM11.383,2.529h2.529V3.794h2.529V2.529h2.529V3.794H21.5V2.529H24.03V3.794h2.529V2.529h2.529V3.794h2.529V2.529h2.529V3.794h2.529V2.529h2.529V3.794h2.529V2.529h2.529V3.794h2.529V2.529h2.529V7.588H51.854V6.324H49.324V7.588H46.795V6.324H44.265V7.588H41.736V6.324H39.206V7.588H36.677V6.324H34.148V7.588H31.618V6.324H29.089V7.588H26.559V6.324H24.03V7.588H21.5V6.324H18.971V7.588H16.441V6.324H13.912V7.588H11.383ZM8.853,10.118H56.913a6.331,6.331,0,0,1,6.324,6.324V21.5H2.529V16.441A6.331,6.331,0,0,1,8.853,10.118Zm0,65.766A6.331,6.331,0,0,1,2.529,69.56V64.5h45.53V69.56L49.1,75.883Zm42.807,0-.726-4.359a39.825,39.825,0,0,0,12.3,1.83,39.81,39.81,0,0,0,12.3-1.831l-.726,4.361Z" fill={highlighted ? "black" : "#fff"}></path>
  </svg>
);

const PillarCard = ({ icon, title, description, highlighted }) => (
  <div className={`p-8 bg-gray-900 rounded-lg text-center group transition duration-300 hover:bg-gray-800 flex flex-col items-center ${highlighted ? '!bg-red-600' : ''}`}>
    <PillarIconContainer highlighted={highlighted}>
      {React.cloneElement(icon, { highlighted })}
    </PillarIconContainer>
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <p className={`text-gray-400 text-sm leading-relaxed flex-grow ${highlighted ? 'text-white' : ''}`}>{description}</p>
    <div className="mt-6 w-8 h-1 bg-gray-700 group-hover:bg-red-600 transition-colors duration-300"></div>
  </div>
);

const AboutPillars = () => {
  return (
    <section className="py-24 px-4 sm:px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">OUR PILLARS</h2>
        <div className="flex justify-center"><RedLineIcon /></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <PillarCard 
            icon={<AcademicIcon />} 
            title="Academic Excellence" 
            description="Every student-athlete's success starts with academic achievement. At EXCEED, we maintain a 75% minimum academic average while providing Individualized Education Plans (IEPs) and specialized support for diverse learning needs, ensuring both classroom and court excellence." 
          />
          <PillarCard 
            icon={<BasketballIcon />} 
            title="Elite Basketball Training" 
            description="Our comprehensive basketball program combines over 30 years of coaching expertise with modern training methodologies. From fundamental skills to elite competition preparation, we develop complete players ready for CESPORTS, Phoenix, and NPH circuits." 
            highlighted 
          />
          <PillarCard 
            icon={<ScholarshipIcon />} 
            title="Scholarship Pathways" 
            description="We create clear pathways to post-secondary success through Division I institution connections. Academic And Athletic Scholarship Bursary of $5000 are available to those who qualify. Academic and athletic merit combine to open doors for our student-athletes' futures." 
          />
          <PillarCard 
            icon={<CommunityIcon />} 
            title="Multiple School Locations" 
            description="Choose from four convenient locations: BCR School, Amiskwaciy Academy, and Saint-Joseph in Edmonton, plus Great Lyn Academy in Ontario. Each location offers full academic programs with specialized facilities, providing flexibility for families across the region." 
          />
          <PillarCard 
            icon={<CoachingIcon />} 
            title="Professional Coaching" 
            description="Led by coaches with over 30 years of elite-level experience, our program combines Toronto-based training methodologies with U.S. collegiate systems. We emphasize both offensive and defensive discipline while developing basketball IQ." 
          />
          <PillarCard 
            icon={<ExcellenceIcon />} 
            title="Join Us in Building Excellence" 
            description="At EXCEED, every lesson, practice, and game is a step toward building something extraordinary. By focusing on academic achievement, athletic excellence, and inclusive support, we're transforming what it means to be a student-athlete." 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPillars;