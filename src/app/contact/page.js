import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ContactHero from '../../components/contact/ContactHero';
import ContactInfo from '../../components/contact/ContactInfo';

const ContactPage = () => {
    return (
        <div className="bg-black text-white font-sans">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main>
                <div className="pt-24 md:pt-32">
                    
                    <ContactHero />
                    
                    <ContactInfo />

                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ContactPage;