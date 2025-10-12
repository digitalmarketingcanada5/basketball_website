import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import RegisterPricingSection from '../../components/register/RegisterPricingSection';

export const metadata = {
  title: 'Register - EXCEED Academic Basketball Prep',
  description: 'Register for EXCEED Academic Basketball Prep Program. View pricing details and download registration forms.',
};

export default function RegisterPage() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-8 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto max-w-7xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-red-600 mb-6">
              REGISTER NOW
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join the EXCEED Academic Basketball Prep Program and take the first step
              toward achieving excellence both on the court and in the classroom.
            </p>
          </div>
        </section>

        {/* Registration Pricing Section */}
        <RegisterPricingSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
