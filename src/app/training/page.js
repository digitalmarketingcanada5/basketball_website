import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import TrainingHeroSection from '../../components/training/TrainingHeroSection';
import TrainingPhilosophySection from '../../components/training/TrainingPhilosophySection';
import TrainingProgramsSection from '../../components/training/TrainingProgramsSection';
import SkillDevelopmentSection from '../../components/training/SkillDevelopmentSection';
import TrainingCTASection from '../../components/training/TrainingCTASection';

export const metadata = {
  title: 'Training Programs - EXCEED Academic Basketball Prep',
  description: 'Elite basketball training programs combining academic excellence with high-performance athletics. Develop your skills, improve your game, and exceed your limits.',
  keywords: 'basketball training, academic basketball, elite training, skill development, basketball camps, New Jersey basketball',
};

export default function TrainingPage() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="min-h-screen">
        <TrainingHeroSection />
        <TrainingPhilosophySection />
        <TrainingProgramsSection />
        <SkillDevelopmentSection />
        <TrainingCTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}