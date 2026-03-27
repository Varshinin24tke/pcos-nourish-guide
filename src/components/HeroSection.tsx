import heroIllustration from "@/assets/hero-illustration.png";
import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-rose py-16 md:py-24">
      <div className="container flex flex-col-reverse items-center gap-10 md:flex-row md:gap-16">
        <div className="flex-1 text-center md:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <Heart size={14} /> PCOS Wellness
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Nourish Your Body with{" "}
            <span className="text-primary">PCOS-Friendly</span> Nutrition
          </h1>
          <br/> 
          <br/>
          <p className="mb-8 max-w-lg text-lg text-muted-foreground">
            Diet guidance, educational resources, and lifestyle
            tips for managing PCOS naturally.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
           
            
          </div>
        </div>
        <div className="flex-1">
          <img
            src={heroIllustration}
            alt="Women discussing healthy nutrition for PCOS"
            className="mx-auto w-full max-w-md animate-fade-up"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
