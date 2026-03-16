import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ContentSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
