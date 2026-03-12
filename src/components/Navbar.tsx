import { Heart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-lg font-bold font-display">
          <Heart size={20} className="text-primary" /> PCOS Nourish
        </a>
        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          <a href="#pcos-overview" className="text-muted-foreground transition-colors hover:text-primary">About PCOS</a>
          <a href="#diet-tool" className="text-muted-foreground transition-colors hover:text-primary">Diet Plan</a>
          <a href="#diet-tool" className="rounded-full bg-primary px-5 py-2 text-primary-foreground transition-all hover:opacity-90">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
