import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import DesignPortfolio from "@/components/portfolio/DesignPortfolio";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <DesignPortfolio />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
