import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Flixpin Investment Platform",
      description: "A modern broker application with real-time analytics, advanced trading features, and a sleek user interface built with React and Node.js.",
      technologies: ["React", "Node.js", "WebSocket"],
      category: "Investment & Trading App",
      liveUrl: "https://walehbash.github.io/bashcrypto.github.io/",
      featured: true
    },
    {
      title: "SideSync AI Assistant",
      description: "An intelligent AI assistant platform for real estate with advanced chat capabilities, property management, and seamless user experience.",
      technologies: ["AI/ML", "React", "Real Estate"],
      category: "AI Assistant & Real Estate",
      liveUrl: "https://walehbash.github.io/SideSync.github.io/",
      featured: true
    },
    {
      title: "Creative Portfolio",
      description: "A comprehensive portfolio showcasing photography and design work with responsive layouts and interactive galleries.",
      technologies: ["React", "Photography", "Design"],
      category: "Photography & Design",
      liveUrl: "#",
      featured: false
    }
  ];

  const handleProjectClick = (projectTitle: string) => {
    console.log(`Clicked on project: ${projectTitle}`);
  };

  const handleLiveDemoClick = (url: string, projectTitle: string) => {
    if (url !== "#") {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      console.log(`Live demo not available for: ${projectTitle}`);
    }
  };

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Featured Projects</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            A selection of my <span className="italic text-primary font-semibold">recent work</span> spanning web development, AI applications, and <span className="italic">creative projects</span>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 cursor-pointer ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
              onClick={() => handleProjectClick(project.title)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors text-foreground">
                      <span className="italic">{project.title}</span>
                    </CardTitle>
                  </div>
                  {project.featured && (
                    <Badge className="bg-gradient-to-r from-primary to-accent">
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs font-medium px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="pt-4">
                  <Button 
                    className="w-full group"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLiveDemoClick(project.liveUrl, project.title);
                    }}
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;