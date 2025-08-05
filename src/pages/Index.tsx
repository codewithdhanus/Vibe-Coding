import { NavigationBar } from '@/components/NavigationBar';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <NavigationBar />
      <HeroSection />
      <FeaturesSection />
    </div>
  );
};

export default Index;
