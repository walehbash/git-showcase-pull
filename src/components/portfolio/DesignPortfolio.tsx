import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DesignPortfolio = () => {
  const designs = [
    {
      id: 1,
      title: "Sports Design - Messi",
      category: "Sports Graphics",
      image: "/lovable-uploads/66061ebb-3c9c-408e-b58c-9cda948bbb58.png",
      description: "Professional sports graphic design featuring dynamic typography and athlete photography"
    },
    {
      id: 2,
      title: "Fly on the Sky",
      category: "Creative Design",
      image: "/lovable-uploads/f0a91ded-3fbe-439b-8070-ffff1e27ea5c.png",
      description: "Artistic composition with natural elements and creative typography"
    },
    {
      id: 3,
      title: "EA Sports Campaign",
      category: "Sports Marketing",
      image: "/lovable-uploads/ddc91473-faff-4ce8-b712-3a673e9cbceb.png",
      description: "Bold sports marketing design with striking portrait photography"
    },
    {
      id: 4,
      title: "Ad Template - Landscape",
      category: "Advertisement",
      image: "/lovable-uploads/cc6b2543-3b98-4e8c-81ed-8df51575f96e.png",
      description: "Professional ad template with dramatic landscape photography"
    },
    {
      id: 5,
      title: "Wedding Dress Campaign",
      category: "Fashion Marketing",
      image: "/lovable-uploads/9a8f0285-b870-410d-9bd2-40a37b266a7a.png",
      description: "Elegant fashion advertising with sophisticated typography"
    },
    {
      id: 6,
      title: "Big Sale Campaign",
      category: "Promotional Design",
      image: "/lovable-uploads/6282582b-db83-4cf2-afcc-d51ebb1c6ddb.png",
      description: "Eye-catching promotional design with bold color scheme"
    },
    {
      id: 7,
      title: "Corporate Ad Template",
      category: "Corporate Design",
      image: "/lovable-uploads/527d6a90-b8b2-4f63-8a2c-034ac51e983c.png",
      description: "Professional corporate advertising with clean, modern aesthetics"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Design Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my graphic design work featuring various campaigns, advertisements, and creative compositions using Photoshop and Illustrator.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design) => (
            <Card key={design.id} className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={design.image} 
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <Badge variant="secondary" className="text-xs">
                    {design.category}
                  </Badge>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {design.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {design.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignPortfolio;