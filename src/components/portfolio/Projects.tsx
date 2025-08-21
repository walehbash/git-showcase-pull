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

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of my recent work spanning web development, AI applications, and creative projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
              project.featured ? 'lg:col-span-1' : ''
            }`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
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
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="pt-4">
                  <Button asChild className="w-full group">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <span>Live Demo</span>
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
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