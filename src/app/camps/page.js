import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import CampsHero from '../../components/camps/CampsHero';
import CampDetails from '../../components/camps/CampDetails';
import WhyChooseUs from '../../components/camps/WhyChooseUs';
import OpportunitySection from '../../components/camps/OpportunitySection';
import ThreePillars from '../../components/camps/ThreePillars';
import CampsCTA from '../../components/camps/CampsCTA';

const CampsPage = () => {
    return (
        <div className="bg-black text-white font-sans">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main>
                <div className="pt-24 md:pt-32">
                    
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Exceed CAD Camps</h1>

                    <CampsHero />

                    <h2 className="text-4xl md:text-5xl font-bold text-center my-16">Exceed CAD Training Programs</h2>

                    <CampDetails />

                    <WhyChooseUs />

                    <OpportunitySection />

                    <ThreePillars />

                    <CampsCTA />

                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default CampsPage;
