// Exceed CADA Academic Basketball Prep Program - Site Data

export const siteInfo = {
  name: "Exceed CADA",
  fullName: "Exceed CADA Academic Basketball Prep Program",
  tagline: "Excellence in Academics & Athletics",
  description: "An exceptional opportunity for young individuals from diverse backgrounds to excel both academically and athletically.",
  logo: "/logo.svg", // Will need to replace with actual logo
};

export const navigation = {
  main: [
    "HOME",
    // "BASKETBALL",
    "CAMPS",
    "TRAINING",
    // "ACADEMICS", 
    // "SCHOLARSHIPS",
    // "ADMISSIONS",
    "ABOUT",
    // "GALLERY",
    "CONTACT"
  ]
};

export const heroSection = {
  title: "BUILT DIFFERENT",
  subtitle: "Excellence in Academics & Athletics",
  ctaText: "Join Grade 6-12 Program",
  backgroundImages: [
    "/images/hero-bg-1.png", // Will use placeholder images initially
    "/images/hero-bg-2.png",
    "/images/hero-players.png"
  ],
  socialText: "Join The Movement"
};

export const programs = [
  {
    id: "academic-excellence",
    title: "Academic Excellence",
    subtitle: "75% Minimum Average, IEP Support",
    description: "Maintaining rigorous academic standards with customized Individualized Education Plans (IEPs) and specialized support for diverse learning needs. Our academic counseling ensures consistent progress monitoring and success.",
    icon: "AcademicIcon",
    highlighted: false
  },
  {
    id: "elite-competition",
    title: "Elite Competition",
    subtitle: "CESPORTS, OBSA, NPH Circuits",
    description: "Compete at the highest levels through recognized leagues including CESPORTS (United States), OBSA Prep Leagues, North Pole Hoops (NPH), and National Senior Circuit (NSC). Gain exposure on national and international stages.",
    icon: "BasketballIcon",
    highlighted: true
  },
  {
    id: "scholarship-pathways",
    title: "Scholarship Pathways",
    subtitle: "Division I & Nike Scholarships",
    description: "Comprehensive support for Division I institution scholarships with $5,000 annual Nike scholarship fund. Awarded to top male and female athletes per age category based on academic and athletic achievements.",
    icon: "ScholarshipIcon",
    highlighted: false
  },
  {
    id: "inclusive-support",
    title: "Inclusive Support",
    subtitle: "Special Needs Accommodation",
    description: "Providing tailored resources and personalized coaching for participants of all backgrounds, including those with special needs. Our inclusive environment promotes growth, discipline, and respect for every student-athlete.",
    icon: "InclusiveIcon",
    highlighted: false
  },
  {
    id: "professional-coaching",
    title: "Professional Coaching",
    subtitle: "30+ Years Experience",
    description: "Led by coaches with over 30 years of elite-level experience, combining Toronto-based training methodologies with U.S. collegiate training systems. Emphasis on both offensive and defensive discipline.",
    icon: "CoachingIcon",
    highlighted: false
  },
  {
    id: "multiple-locations",
    title: "Multiple Locations",
    subtitle: "3 School Options Available",
    description: "Choose from three convenient school locations: BCR School, Amiskwaciy Academy, and Saint-Joseph. Each location offers full academic and athletic programs with specialized facilities.",
    icon: "CommunityIcon",
    highlighted: false
  }
];

export const aboutSection = {
  title: "OUR STORY",
  description: [
    "Exceed CADA Academic Basketball Prep Program is an exceptional opportunity for young individuals from diverse backgrounds, including those with special needs, to excel both academically and athletically.",
    "The program combines rigorous academic standards with comprehensive basketball training, fostering an environment that promotes growth, discipline, respect, and success. We are building the next generation of student-athletes who excel both on the court and in the classroom."
  ],
  image: "/images/about-team.jpg",
  ctaText: "Learn More"
};

export const stats = [
  {
    icon: "AcademicIcon",
    value: "75%",
    label: "Min Academic Average"
  },
  {
    icon: "ScholarshipIcon", 
    value: "$5,000",
    label: "Nike Scholarship"
  },
  {
    icon: "CommunityIcon",
    value: "3",
    label: "School Locations"
  },
  {
    icon: "UsersIcon",
    value: "6-12",
    label: "Grade Levels"
  }
];

export const programsDetail = {
  title: "DISCOVER PROGRAMS AND OPPORTUNITIES",
  subtitle: "From Training to Competition, We've Got You Covered",
  description: "Exceed CADA offers comprehensive programs tailored to meet every student-athlete's needs. Whether you're looking for academic support, elite basketball training, scholarship opportunities, or university preparation, you'll find everything you need right here.",
  images: [
    "/images/program-1.jpg",
    "/images/program-2.jpg"
  ],
  ctaText: "Learn More"
};

export const coaches = [
  {
    id: "berri-curtis",
    name: "BERRI CURTIS",
    title: "Director & Coach",
    contact: "780-932-9922",
    image: "/images/coach-berri.jpg",
    description: "Over 30 years in elite-level coaching, specializing in developing high-performance athletes with focus on excellence, leadership, and connecting youth with post-secondary institutions."
  },
  {
    id: "anthony-richardson", 
    name: "ANTHONY RICHARDSON",
    title: "Founder & Coach",
    contact: "437-286-1388",
    image: "/images/coach-anthony.jpg",
    description: "Ontario-based with Toronto roots, combining Toronto methodologies with U.S. collegiate systems. Dominant, strategic approach with emphasis on offensive and defensive discipline."
  }
];

export const pricingOptions = [
  {
    id: "local-with-accommodation",
    title: "Local Students (With Accommodation)",
    price: "$12,500",
    deposit: "$5,300",
    monthlyPayments: "8 payments of $900",
    deadline: "Rolling Admissions - Apply Now",
    features: [
      "Full academic program enrollment",
      "Complete basketball training",
      "Accommodation provided",
      "All meals included",
      "Academic counseling"
    ]
  },
  {
    id: "local-without-accommodation",
    title: "Local Students (Without Accommodation)", 
    price: "$9,500",
    deposit: "$3,500",
    monthlyPayments: "8 payments of $750",
    deadline: "Rolling Admissions - Apply Now",
    features: [
      "Full academic program enrollment",
      "Complete basketball training", 
      "Academic counseling",
      "Summer courses included"
    ]
  },
  {
    id: "international",
    title: "International Students",
    price: "$17,500", 
    deposit: "$5,000",
    monthlyPayments: "8 payments of $1,562.50",
    deadline: "Rolling Admissions - Apply Now",
    features: [
      "Full academic program enrollment",
      "Complete basketball training",
      "Accommodation provided",
      "Visa support assistance",
      "Cultural integration support"
    ]
  },
  {
    id: "junior-program",
    title: "Junior Program (Grades 6-10)",
    price: "$8,000",
    deposit: "$1,500", 
    secondPayment: "$1,000",
    deadline: "Rolling Admissions - Apply Now",
    features: [
      "Basketball training program",
      "Skill development focus",
      "Remain at home schools",
      "Flexible payment plans"
    ]
  }
];

export const schools = [
  {
    id: "bcr-school",
    name: "BCR School",
    address: "6227 119 Ave",
    city: "Edmonton, AB",
    programs: ["Grades 8-12", "Full Academic Program"]
  },
  {
    id: "amiskwaciy-academy",
    name: "Amiskwaciy Academy", 
    address: "101 Airport Rd",
    city: "Edmonton, AB",
    programs: ["Grades 8-12", "Full Academic Program"]
  },
  {
    id: "saint-joseph",
    name: "Saint-Joseph",
    address: "10830 109 St", 
    city: "Edmonton, AB",
    programs: ["Grades 8-12", "Full Academic Program"]
  }
];

export const contact = {
  primary: [
    {
      name: "Coach Richardson",
      phone: "437-286-1388",
      role: "Founder & Coach"
    },
    {
      name: "Coach B (Berri Curtis)",
      phone: "780-932-9922", 
      role: "Director & Coach"
    }
  ],
  general: {
    email: "infocadaexceed@yahoo.com",
    adminEmail: "infoexceedprep@gmail.com",
    phone: "780-938-8935"
  },
  social: {
    instagram: "@excee_d8"
  }
};

export const ctaSection = {
  title: "READY TO EXCEL? START YOUR JOURNEY!",
  subtitle: "Applications now open - Limited spaces available",
  buttonText: "APPLY NOW"
};

export const news = [
  {
    id: "academic-excellence-2024",
    title: "Exceed CADA Achieves 95% University Acceptance Rate",
    category: "ACADEMICS", 
    author: "ADMIN",
    date: "December 2024",
    image: "/images/news-1.jpg",
    excerpt: "Our rigorous academic program continues to prepare students for post-secondary success with personalized IEPs and dedicated support."
  },
  {
    id: "nike-scholarship-winners",
    title: "2024 Nike Scholarship Recipients Announced",
    category: "SCHOLARSHIPS",
    author: "ADMIN", 
    date: "November 2024",
    image: "/images/news-2.jpg",
    excerpt: "Celebrating our outstanding student-athletes who earned the prestigious $5,000 Nike scholarships for academic and athletic excellence."
  },
  {
    id: "cesports-championship",
    title: "Exceed CADA Teams Dominate CESPORTS Championships",
    category: "BASKETBALL",
    author: "ADMIN",
    date: "October 2024", 
    image: "/images/news-3.jpg",
    excerpt: "Our elite training methodology pays off as multiple teams advance to championship rounds in US competition circuits."
  },
  {
    id: "new-coach-announcement",
    title: "Welcome Coach Richardson: 30+ Years of Excellence",
    category: "COACHING",
    author: "ADMIN",
    date: "September 2024",
    image: "/images/news-4.jpg",
    excerpt: "Introducing our newest coaching addition who brings Toronto training methodologies and US collegiate expertise to our program."
  }
];

export const socialMediaLinks = [
  {
    platform: "Facebook",
    url: "/",
    icon: "FacebookIcon"
  },
  {
    platform: "Instagram", 
    url: "/",
    icon: "InstagramIcon"
  },
  {
    platform: "X (Twitter)",
    url: "/",
    icon: "XIcon"
  },
  {
    platform: "YouTube",
    url: "/", 
    icon: "YouTubeIcon"
  },
];