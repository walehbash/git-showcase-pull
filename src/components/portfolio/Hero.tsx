import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10 flex items-center justify-center px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="outline" className="text-primary border-primary/20">
              Available for Projects
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Akanmu Bashir Olawale
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Co-owner at Flixpin · Fullstack Developer · Photographer · Photoshop & Illustrator Expert
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Crafting digital experiences with code, creativity, and innovation. From web development to visual design, I bring ideas to life.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300">
              View Projects
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
              Work With Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;