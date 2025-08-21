import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    { icon: "💻", title: "Fullstack Development", desc: "React, Node.js, TypeScript" },
    { icon: "🎨", title: "Photoshop & Illustrator", desc: "Professional design work" },
    { icon: "📸", title: "Photography", desc: "Creative visual storytelling" },
    { icon: "🎯", title: "UI/UX Design", desc: "User-centered experiences" }
  ];

  const technologies = [
    "React", "Node.js", "TypeScript", "Tailwind CSS", "Figma", "Webflow", 
    "Photoshop", "Illustrator", "Photography", "UI/UX Design"
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">About Me</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            I'm a <span className="italic text-primary font-semibold">passionate fullstack developer</span> and creative professional with expertise in modern web technologies and digital design. 
            As <span className="italic">co-owner at Flixpin</span>, I combine technical skills with artistic vision to create <span className="italic">compelling digital experiences</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50">
              <CardContent className="space-y-4">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="font-semibold text-lg text-foreground">{skill.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed italic">{skill.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6 text-foreground italic">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-sm px-4 py-2 font-medium hover:bg-primary/10 transition-colors">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;