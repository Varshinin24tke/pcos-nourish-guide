import { Heart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-lg font-bold font-display">
          <Heart size={20} className="text-primary" /> PCOS Nourish
        </a>
        
      </div>
    </nav>
  );
};

export default Navbar;
