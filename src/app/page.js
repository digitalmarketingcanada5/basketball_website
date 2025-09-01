import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import StorySection from '../components/home/StorySection';
import StatsSection from '../components/home/StatsSection';
import ProgramsSection from '../components/home/ProgramsSection';
import CoachesSection from '../components/home/CoachesSection';
import CTASection from '../components/home/CTASection';
import NewsSection from '../components/home/NewsSection';

export default function Home() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Our Story Section */}
        <StorySection />

        {/* Stats Section */}
        <StatsSection />

        {/* Programs Section */}
        <ProgramsSection />

        {/* Our Coaches Section */}
        <CoachesSection />

        {/* CTA Section */}
        <CTASection />

        {/* Recent News Section */}
        <NewsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
