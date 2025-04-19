import GalleryCard from "./galleryCard";
import { galleryImage } from "../../../../data/dataHome";

// Alturas variables para las imagenes
const imageHeights = [
  "h-52",
  "h-62",
  "h-64",
  "h-80",
  "h-60",
  "h-96",
  "h-48",
  "h-96",
  "h-64",
  "h-60",
  "h-96",
  "h-68",
  "h-56",
];

// Componente de galeria
const Gallery = () => {
  return (
    // Sección con diseño en columnas para mostrar imágenes
    <section className="w-full min-h-screen px-5 py-20 bg-gradient-to-b from-[#f7f7f7] to-[#fef4fd]" id="galeria">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Galería de Imágenes
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          Imagina sin límites. Nosotros lo ilustramos.
        </p>

        {/* Imagenes */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImage.map((src, index) => (
            <GalleryCard
              key={index}
              src={src.image}
              alt={`inspiracion-${index}`}
              className={`${imageHeights[index % imageHeights.length]}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
