import Hero from "../components/home/hero/Hero";
import Gallery from "../components/home/gallery/gallery";
import About from "../components/home/about/About";

// Página principal
const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Gallery />
      <About />
    </div>
  );
};

export default HomePage;
