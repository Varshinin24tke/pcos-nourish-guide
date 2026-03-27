import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
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
      <DietRecommendations />
      <FoodsToAvoid />
      <VideoSection />
      <LifestyleSection />
      <InsightsSection />
      <Footer />
    </div>
  );
};

export default Index;
