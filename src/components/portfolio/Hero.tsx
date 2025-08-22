import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10 flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <Badge variant="outline" className="text-primary border-primary/30 px-4 py-2 font-medium bg-background/80 backdrop-blur-sm shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
              Available for Projects
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-foreground">
              Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">
                Bashir Olawale
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed font-semibold">
              Co-owner at Flixpin · Fullstack Developer · Photographer · Photoshop & Illustrator Expert
            </p>
            <p className="text-lg text-foreground/90 max-w-2xl mx-auto leading-relaxed font-medium">
              Crafting digital experiences with code, creativity, and innovation. From web development to visual design, I bring ideas to life.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:shadow-xl transition-all duration-300 px-8 py-3 text-base font-semibold text-white shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300 px-8 py-3 text-base font-semibold bg-background/80 backdrop-blur-sm shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
              onClick={() => scrollToSection('contact')}
            >
              Work With Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;