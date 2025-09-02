import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import AboutHero from '../../components/about/AboutHero';
import AboutPillars from '../../components/about/AboutPillars';
import AboutPartnership from '../../components/about/AboutPartnership';

const AboutPage = () => {
    return (
        <div className="bg-black text-white font-sans">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main>
                <div className="pt-24 md:pt-32">
                    
                    <AboutHero />
                    
                    <AboutPillars />

                    <AboutPartnership />

                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AboutPage;