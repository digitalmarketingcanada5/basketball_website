import React from 'react';

// --- Icon Components ---
// Using inline SVGs for icons to keep it in a single file and match the design.

const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BasketballIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-red-600"><circle cx="12" cy="12" r="10"></circle><path d="M4.93 4.93l14.14 14.14"></path><path d="m14.14 4.93-9.21 9.21"></path><path d="M19.07 19.07 9.86 9.86"></path><path d="M4.93 19.07 19.07 4.93"></path></svg>
);
const CampIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-red-600"><path d="m16 2 4 4-12 12-4-4 12-12Z"></path><path d="M8 14 4 18"></path><path d="m20 8-4-4"></path><path d="m13 21 6-6"></path><path d="M11 3 7 7"></path></svg>
);
const TrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-red-600"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
);
const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-red-600"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
);
const ClubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-red-600"><path d="m12 5 2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z"></path><path d="M5 22v-5"></path><path d="M19 22v-5"></path><path d="M5 17h14"></path></svg>
);

const CommunityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-red-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);

const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>;
const XIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.931ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg>;
const YouTubeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M2.5 17a24.12 24.12 0 0 1 0-10C2.5 6 7.5 4 12 4s9.5 2 9.5 3v10c0 1-4.5 3-9.5 3s-9.5-2-9.5-3Z"></path><path d="m10 9 5 3-5 3Z"></path></svg>;
const TikTokIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.86-.95-6.69-2.81-1.77-1.8-2.6-4.28-2.5-6.6.09-1.88.88-3.65 2.14-4.96.91-.91 2.05-1.54 3.28-1.92.21-.07.43-.12.65-.17.02-3.48.01-6.97.02-10.45Z"></path></svg>;

// --- Reusable Components ---

const StatCard = ({ icon, value, label }) => (
    <div className="flex flex-col items-center text-center">
        <div className="mb-4">{icon}</div>
        <p className="text-4xl md:text-5xl font-bold text-white">{value}</p>
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">{label}</p>
    </div>
);


const WhyChooseUsCard = ({ icon, title, subtitle, description, highlighted }) => (
    <div className={`p-8 flex flex-col items-start ${highlighted ? 'bg-red-600' : 'bg-gray-900'} rounded-lg transition-colors duration-300 hover:bg-red-700`}>
        <div className="bg-black p-3 rounded-full mb-6">
            {React.cloneElement(icon, { className: "h-8 w-8 text-red-600" })}
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-xs font-semibold text-gray-300 mb-4">{subtitle}</p>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
);

const CoachCard = ({ imgSrc, name, title }) => (
    <div className="text-center">
        <div className="relative mb-4">
             <img src={imgSrc} alt={name} className="w-full grayscale rounded-lg" />
        </div>
        <h4 className="text-xl font-bold text-white">{name}</h4>
        <p className="text-gray-400">{title}</p>
    </div>
);

const NewsCard = ({ imgSrc, category, author, title }) => (
    <div>
        <img src={imgSrc} alt={title} className="w-full h-64 object-cover rounded-lg mb-4" />
        <div className="text-xs text-gray-400 mb-2">
            <span>BY {author}</span> / <span>{category}</span>
        </div>
        <h4 className="text-lg font-bold text-white hover:text-red-600 transition-colors cursor-pointer">{title}</h4>
    </div>
);

// --- Main App Component ---

export default function App() {
    return (
        <div className="bg-black text-white font-sans">
            {/* Header */}
            <header className="absolute top-0 left-0 w-full z-50 py-4 px-4 sm:px-8">
                <div className="container mx-auto flex justify-between items-center">
                    <Logo />
                    <nav className="hidden lg:flex items-center space-x-6 text-sm font-bold">
                        {['HOME', 'GALA', 'TOURNAMENTS', 'SPONSORSHIPS', 'TRAINING', 'CAMPS', 'CLUB TEAMS', 'SHOP', 'ABOUT', 'CONTACT'].map(item => (
                            <a key={item} href="#" className="hover:text-red-600 transition-colors">{item}</a>
                        ))}
                    </nav>
                     <button className="lg:hidden p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                 <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden min-h-[700px] md:min-h-[800px]">
                    <div className="container mx-auto h-full flex items-center pt-16 lg:pt-0">
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full h-full">
                            <div className="hidden lg:flex justify-center items-center h-full">
                               <ul className="space-y-6">
                                    <li><a href="#" className="p-3 inline-block text-white bg-gray-900 rounded-full hover:bg-red-600 transition-colors"><FacebookIcon /></a></li>
                                    <li><a href="#" className="p-3 inline-block text-white bg-gray-900 rounded-full hover:bg-red-600 transition-colors"><InstagramIcon /></a></li>
                                    <li><a href="#" className="p-3 inline-block text-white bg-gray-900 rounded-full hover:bg-red-600 transition-colors"><XIcon /></a></li>
                                    <li><a href="#" className="p-3 inline-block text-white bg-gray-900 rounded-full hover:bg-red-600 transition-colors"><YouTubeIcon /></a></li>
                                    <li><a href="#" className="p-3 inline-block text-white bg-gray-900 rounded-full hover:bg-red-600 transition-colors"><TikTokIcon /></a></li>
                                </ul>
                            </div>
                            <div className="relative w-full h-full flex items-center justify-center">
                                {/* Layered images for text effect */}
                                <img src="https://ymathletics.com/wp-content/uploads/2024/12/bnr-v.2.1.png" alt="Built Different background layer" className="absolute inset-0 w-full h-full object-contain z-10"/>
                                <img src="https://ymathletics.com/wp-content/uploads/2024/12/bnr-v.2.2.b.png" alt="Built Different mid layer" className="absolute inset-0 w-full h-full object-contain z-10"/>
                                <img src="https://ymathletics.com/wp-content/uploads/2024/12/bnr-v.2.3.b.png" alt="Built Different top layer" className="absolute inset-0 w-full h-full object-contain z-10"/>
                                <img src="https://ymathletics.com/wp-content/uploads/2025/02/bnr-v3.1.png" alt="Built Different final layer" className="absolute inset-0 w-full h-full object-contain z-10"/>

                                {/* Player Images - layered on top of the text images */}
                                <div className="absolute inset-0 flex justify-center items-end z-20">
                                    <img src="https://images.unsplash.com/photo-1605711216682-0348c0db1748?q=80&w=1887&auto=format&fit=crop" alt="Basketball Player 1" className="h-[70%] max-h-[500px] object-contain translate-x-1/4" />
                                    <img src="https://images.unsplash.com/photo-1521414022893-68e1f56aab2e?q=80&w=1887&auto=format&fit=crop" alt="Basketball Player 2" className="h-[80%] max-h-[550px] object-contain -translate-x-1/4" />
                                </div>
                                
                                 <p className="absolute bottom-10 right-10 z-30 text-lg font-bold uppercase tracking-widest">Join The Movement</p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Why Choose Us Section */}
                <section className="py-24 px-4 sm:px-8">
                    <div className="container mx-auto">
                        <h2 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Why Choose Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                            <WhyChooseUsCard 
                                icon={<BasketballIcon />}
                                title="Skills and Training Development"
                                subtitle="Master the Fundamentals, Rise to Excellence"
                                description="Our expert-led programs focus on enhancing basketball skills and fostering mental resilience. Whether you’re a beginner or an advanced player, our tailored training ensures growth on and off the court."
                            />
                            <WhyChooseUsCard 
                                icon={<CampIcon />}
                                title="Camps"
                                subtitle="Inclusive, Extraordinary, and Transformative"
                                description="YM Athletics’ basketball camps create a space where every child can thrive. Learn teamwork, leadership, and life skills in a supportive environment."
                            />
                            <WhyChooseUsCard 
                                icon={<TrophyIcon />}
                                title="Tournaments"
                                subtitle="Compete, Grow, Shine"
                                description="Step onto the court at our high-quality tournaments and showcase your skills. Gain recognition and experience in a dynamic and supportive environment."
                                highlighted
                            />
                             <WhyChooseUsCard 
                                icon={<HeartIcon />}
                                title="Sponsorship Programs"
                                subtitle="Community-Driven, Athlete-Focused"
                                description="Through partnerships with businesses and organizations, we remove barriers for young athletes. Our sponsorship programs provide financial aid, expert coaching, and access to elite facilities."
                            />
                             <WhyChooseUsCard 
                                icon={<ClubIcon />}
                                title="Club Teams"
                                subtitle="Reach New Heights with YM Athletics"
                                description="Our club teams offer young athletes the chance to compete at a higher level while gaining exposure and refining their skills. Represent YM Athletics on a national stage."
                            />
                             <WhyChooseUsCard 
                                icon={<CommunityIcon />}
                                title="Community Impact"
                                subtitle="Building Futures Beyond the Court"
                                description="At YM Athletics, we believe basketball is a catalyst for change. By fostering confidence, teamwork, and resilience, we’re shaping leaders who inspire their communities."
                            />
                        </div>
                    </div>
                </section>
                
                {/* Our Story Section */}
                <section className="py-24 px-4 sm:px-8">
                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <img src="https://placehold.co/600x400/111111/FFFFFF?text=Team+Photo" alt="Our Story" className="rounded-lg" />
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">OUR STORY</h2>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                <strong>YM Athletics is a New Jersey-based premier basketball organization serving the areas around Philadelphia, PA.</strong> Its mission revolves around making basketball accessible to young athletes of all skill levels while fostering growth on and off the court.
                            </p>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                We are the fastest-growing basketball program in the NJ/PA/DE tri-state region—come join the movement.
                            </p>
                            <button className="bg-red-600 text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                 <section className="py-24 px-4 sm:px-8 bg-gray-900">
                    <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <StatCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>} value="1925" label="Working Hours" />
                        <StatCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>} value="2064" label="Happy Clients" />
                        <StatCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>} value="5" label="Scholarships" />
                        <StatCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>} value="308" label="Sponsorships" />
                    </div>
                </section>
                
                 {/* Discover Programs Section */}
                <section className="py-24 px-4 sm:px-8">
                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                         <div className="grid grid-cols-2 gap-4">
                             <img src="https://placehold.co/400x500/111111/FFFFFF?text=Player" alt="Program 1" className="rounded-lg w-full h-full object-cover" />
                             <img src="https://placehold.co/400x500/111111/FFFFFF?text=Action+Shot" alt="Program 2" className="rounded-lg w-full h-full object-cover mt-12" />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">DISCOVER PROGRAMS AND OPPORTUNITIES NEAR YOU</h2>
                            <h3 className="text-xl font-semibold text-gray-300 mb-4">From Training to Tournaments, We've Got You Covered</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                YM Athletics offers a range of programs tailored to meet every young athlete’s needs. Whether you’re looking for skill-building training sessions, basketball camps, competitive tournaments, or club teams opportunities, you’ll find everything you need right here.
                            </p>
                            <button className="bg-red-600 text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                </section>

                {/* Our Coaches Section */}
                <section className="py-24 px-4 sm:px-8 bg-gray-900">
                    <div className="container mx-auto">
                        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">OUR COACHES</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <CoachCard imgSrc="https://placehold.co/400x500/333333/FFFFFF?text=Coach" name="EDWIN DRUMMOND" title="Director & Coach" />
                            <CoachCard imgSrc="https://placehold.co/400x500/333333/FFFFFF?text=Coach" name="VICTOR ROZIER" title="Founder & Coach" />
                            <CoachCard imgSrc="https://placehold.co/400x500/333333/FFFFFF?text=Coach" name="DUIANE FORD" title="Founder & Coach" />
                            <CoachCard imgSrc="https://placehold.co/400x500/333333/FFFFFF?text=Coach" name="KENDALL REESE" title="Director & Coach" />
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-red-600 py-12 px-4 sm:px-8">
                    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">GOT QUESTIONS? WE'RE HERE FOR YOU!</h2>
                        <button className="bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors">
                            CONTACT US
                        </button>
                    </div>
                </section>

                {/* Recent News Section */}
                <section className="py-24 px-4 sm:px-8">
                    <div className="container mx-auto">
                        <div className="flex justify-between items-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">RECENT NEWS</h2>
                            <button className="hidden sm:block border border-white text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:text-black transition-colors">
                                Show More
                            </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <NewsCard imgSrc="https://placehold.co/400x400/111111/FFFFFF?text=News" category="NEWS" author="ADMIN" title="The Power of Competition: How YM Athletics' Tournaments Help Young Athletes Thrive" />
                            <NewsCard imgSrc="https://placehold.co/400x400/111111/FFFFFF?text=News" category="NEWS" author="ADMIN" title="Mastering the Basics: How YM Athletics Helps Your Child Build a Strong Basketball Foundation" />
                            <NewsCard imgSrc="https://placehold.co/400x400/111111/FFFFFF?text=News" category="NEWS" author="ADMIN" title="Empowering Young Athletes: How YM Athletics' Camps Boost Confidence and Skills" />
                            <NewsCard imgSrc="https://placehold.co/400x400/111111/FFFFFF?text=News" category="NEWS" author="ADMIN" title="Rising Stars: Highlights and Stories from YM Athletics Summer Shootout 2024" />
                        </div>
                         <button className="sm:hidden mt-8 w-full border border-white text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:text-black transition-colors">
                                Show More
                        </button>
                    </div>
                </section>

            </main>
            
            {/* Footer */}
            <footer className="py-16 px-4 sm:px-8 border-t border-gray-800">
                <div className="container mx-auto flex flex-col items-center">
                    <Logo />
                    <h3 className="text-2xl font-bold mt-4">YM ATHLETICS</h3>
                     <nav className="flex flex-wrap justify-center items-center space-x-6 text-sm font-bold mt-8">
                        {['HOME', 'GALA', 'TOURNAMENTS', 'SPONSORSHIPS', 'TRAINING', 'CAMPS', 'SHOP', 'ABOUT', 'CONTACT'].map(item => (
                            <a key={item} href="#" className="hover:text-red-600 transition-colors my-1">{item}</a>
                        ))}
                    </nav>
                </div>
            </footer>
        </div>
    );
}


