import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PCOSOverview from "@/components/PCOSOverview";
import SymptomsSection from "@/components/SymptomsSection";
import DietRecommendations from "@/components/DietRecommendations";
import FoodsToAvoid from "@/components/FoodsToAvoid";
import VideoSection from "@/components/VideoSection";
import LifestyleSection from "@/components/LifestyleSection";
import DietTool from "@/components/DietTool";
import InsightsSection from "@/components/InsightsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PCOSOverview />
      <SymptomsSection />
      <DietRecommendations />
      <FoodsToAvoid />
      <VideoSection />
      <LifestyleSection />
      <DietTool />
      <InsightsSection />
      <Footer />
    </div>
  );
};

export default Index;
