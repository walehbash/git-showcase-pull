import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10 flex items-center justify-center px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <Badge variant="outline" className="text-primary border-primary/30 px-4 py-2 font-medium">
              Available for Projects
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent italic">
                Akanmu Bashir Olawale
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium">
              <span className="italic">Co-owner at Flixpin</span> · Fullstack Developer · Photographer · <span className="italic">Photoshop & Illustrator Expert</span>
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              <span className="italic">Crafting digital experiences</span> with code, creativity, and innovation. From web development to visual design, I bring ideas to life.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-xl transition-all duration-300 px-8 py-3 text-base font-semibold">
              <span className="italic">View Projects</span>
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 px-8 py-3 text-base font-semibold">
              Work With Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;