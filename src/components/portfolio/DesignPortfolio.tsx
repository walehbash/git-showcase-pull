import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { X, ExternalLink } from "lucide-react";

const DesignPortfolio = () => {
  const [selectedDesign, setSelectedDesign] = useState<number | null>(null);

  const designs = [
    {
      id: 1,
      title: "Sports Design - Messi",
      category: "Sports Graphics",
      image: "/lovable-uploads/66061ebb-3c9c-408e-b58c-9cda948bbb58.png",
      description: "Professional sports graphic design featuring dynamic typography and athlete photography",
      details: "This sports design showcases professional athlete photography with dynamic typography and modern layout techniques. Created using Adobe Photoshop and Illustrator, it demonstrates expertise in sports marketing and brand design."
    },
    {
      id: 2,
      title: "Fly on the Sky",
      category: "Creative Design",
      image: "/lovable-uploads/f0a91ded-3fbe-439b-8070-ffff1e27ea5c.png",
      description: "Artistic composition with natural elements and creative typography",
      details: "A creative design featuring natural elements and artistic typography. This piece demonstrates creative thinking and innovative design approaches using modern design tools."
    },
    {
      id: 3,
      title: "EA Sports Campaign",
      category: "Sports Marketing",
      image: "/lovable-uploads/ddc91473-faff-4ce8-b712-3a673e9cbceb.png",
      description: "Bold sports marketing design with striking portrait photography",
      details: "Bold sports marketing campaign design featuring striking portrait photography and powerful visual elements. This design captures the energy and excitement of sports marketing."
    },
    {
      id: 4,
      title: "Ad Template - Landscape",
      category: "Advertisement",
      image: "/lovable-uploads/cc6b2543-3b98-4e8c-81ed-8df51575f96e.png",
      description: "Professional ad template with dramatic landscape photography",
      details: "Professional advertisement template showcasing dramatic landscape photography. This template demonstrates expertise in creating compelling visual narratives for advertising campaigns."
    },
    {
      id: 5,
      title: "Wedding Dress Campaign",
      category: "Fashion Marketing",
      image: "/lovable-uploads/9a8f0285-b870-410d-9bd2-40a37b266a7a.png",
      description: "Elegant fashion advertising with sophisticated typography",
      details: "Elegant fashion advertising campaign featuring sophisticated typography and refined design elements. This piece showcases expertise in luxury brand marketing and fashion photography."
    },
    {
      id: 6,
      title: "Big Sale Campaign",
      category: "Promotional Design",
      image: "/lovable-uploads/6282582b-db83-4cf2-afcc-d51ebb1c6ddb.png",
      description: "Eye-catching promotional design with bold color scheme",
      details: "Eye-catching promotional design featuring bold color schemes and attention-grabbing visual elements. This design demonstrates expertise in creating compelling promotional materials."
    },
    {
      id: 7,
      title: "Corporate Ad Template",
      category: "Corporate Design",
      image: "/lovable-uploads/527d6a90-b8b2-4f63-8a2c-034ac51e983c.png",
      description: "Professional corporate advertising with clean, modern aesthetics",
      details: "Professional corporate advertising template featuring clean, modern aesthetics and sophisticated design principles. This template showcases expertise in corporate branding and professional design."
    }
  ];

  const handleCardClick = (designId: number) => {
    setSelectedDesign(designId);
  };

  const closeModal = () => {
    setSelectedDesign(null);
  };

  const selectedDesignData = selectedDesign ? designs.find(d => d.id === selectedDesign) : null;

  return (
    <>
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Design Portfolio</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              A showcase of my <span className="italic text-primary font-semibold">graphic design work</span> featuring various campaigns, advertisements, and creative compositions using <span className="italic">Photoshop and Illustrator</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designs.map((design) => (
              <Card 
                key={design.id} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-border/50 cursor-pointer"
                onClick={() => handleCardClick(design.id)}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg relative">
                  <img 
                    src={design.image} 
                    alt={design.title}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <Badge variant="secondary" className="text-xs font-medium px-3 py-1 bg-white/90 text-black">
                      View Details
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 group-hover:bg-gradient-to-r group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500">
                  <div className="space-y-4">
                    <Badge variant="secondary" className="text-xs font-medium px-3 py-1 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {design.category}
                    </Badge>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300 text-foreground">
                      <span className="italic">{design.title}</span>
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {design.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedDesign && selectedDesignData && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Image */}
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={selectedDesignData.image} 
                  alt={selectedDesignData.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      {selectedDesignData.category}
                    </Badge>
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      {selectedDesignData.title}
                    </h2>
                  </div>
                </div>

                <p className="text-foreground/80 leading-relaxed">
                  {selectedDesignData.details}
                </p>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => window.open(selectedDesignData.image, '_blank')}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Full Size
                  </button>
                  <button
                    onClick={() => window.open('mailto:bashirakanmu@gmail.com?subject=Inquiry about ' + selectedDesignData.title, '_blank')}
                    className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Inquire About This Design
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DesignPortfolio;