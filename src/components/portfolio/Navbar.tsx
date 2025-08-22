import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Sun, Moon, MessageCircle, User, Mail, Image, FolderOpen } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { useState } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isChatClicked, setIsChatClicked] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChatClick = () => {
    setIsChatClicked(true);
    // Open chat or contact form
    window.open('mailto:bashirakanmu@gmail.com?subject=Chat Inquiry', '_blank');
    // Reset after animation
    setTimeout(() => setIsChatClicked(false), 200);
  };

  const handleLogoClick = () => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'about', label: 'About', icon: <User className="h-4 w-4" /> },
    { id: 'portfolio', label: 'Portfolio', icon: <Image className="h-4 w-4" /> },
    { id: 'projects', label: 'Projects', icon: <FolderOpen className="h-4 w-4" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="h-4 w-4" /> }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
      <div className="flex items-center justify-between h-16 px-4">
        {/* Logo and Brand - Starting from the beginning */}
        <div 
          className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={handleLogoClick}
        >
          <div className="flex items-center space-x-2 relative">
            {/* Revolving MapPin - 180 degrees horizontal */}
            <div className="relative">
              <MapPin 
                className="h-6 w-6 text-primary drop-shadow-lg transition-all duration-1000"
                style={{
                  animation: 'rotate180 4s ease-in-out infinite alternate'
                }}
              />
            </div>
            <span className="text-xl font-bold text-foreground">Flixpin</span>
          </div>
          <Badge variant="outline" className="text-xs px-2 py-1 border-primary/30 text-primary">
            Office
          </Badge>
        </div>

        {/* Navigation Links - Centered with Glass Icons */}
        <div className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className="relative group flex items-center space-x-2 text-foreground/80 hover:text-primary transition-all duration-300 font-medium cursor-pointer px-4 py-2 rounded-lg"
            >
              {/* Glass Icon Effect */}
              <div className={`relative transition-all duration-300 ${
                hoveredItem === item.id 
                  ? 'transform scale-110' 
                  : 'transform scale-100'
              }`}>
                <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                  hoveredItem === item.id
                    ? 'bg-white/20 backdrop-blur-md border border-white/30 shadow-lg'
                    : 'bg-transparent'
                }`} />
                <div className={`relative z-10 p-2 rounded-lg transition-all duration-300 ${
                  hoveredItem === item.id
                    ? 'text-primary'
                    : 'text-foreground/60'
                }`}>
                  {item.icon}
                </div>
              </div>
              
              {/* Text */}
              <span className={`transition-all duration-300 ${
                hoveredItem === item.id
                  ? 'text-primary font-semibold'
                  : 'text-foreground/80'
              }`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {/* Theme Toggle and Chat Button - Right side */}
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleTheme}
            className="w-10 h-10 p-0 border-border/50 hover:bg-accent/10 hover:border-primary/50 transition-all duration-200 shadow-[0_4px_12px_rgba(0,0,0,0.15)] cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleChatClick}
            className={`w-10 h-10 p-0 border-border/50 hover:bg-accent/10 hover:border-primary/50 transition-all duration-200 shadow-[4px_6px_12px_rgba(0,0,0,0.15)] cursor-pointer ${
              isChatClicked ? 'bg-black text-white border-black' : ''
            }`}
          >
            <MessageCircle className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes rotate180 {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(180deg);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
