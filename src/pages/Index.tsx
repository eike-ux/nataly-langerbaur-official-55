import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AchievementsSection from '@/components/AchievementsSection';
import OlympicSection from '@/components/OlympicSection';
import MediaSection from '@/components/MediaSection';
import MediaReleasesSection from '@/components/MediaReleasesSection';
import SponsorsSection from '@/components/SponsorsSection';
import ValueSection from '@/components/ValueSection';
import EducationSection from '@/components/EducationSection';
import SocialSection from '@/components/SocialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index = () => {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <AchievementsSection />
        <OlympicSection />
        <MediaSection />
        <MediaReleasesSection />
        <SponsorsSection />
        <ValueSection />
        <EducationSection />
        <SocialSection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
};

export default Index;
