import { aboutImage } from "../../../../data/dataHome";

const About = () => {
  return (
    <section id="sobreNosotros" className="w-full px-5 py-20 bg-gradient-to-l from-[#fce3ff] to-[#cde9f5]">
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Imagen */}
        <div className="order-2 md:order-1">
          {aboutImage.map((img, i) => (
            <img
            key={i}
            src={img.image}
            width={400}
            height={400}
            className="rounded-4xl "
          />
          ))}
          
        </div>

        {/* Contenido */}
        <div className="order-1 md:order-2">
          {/* Subtítulo */}
          <h1 className="text-zinc-600 mb-4 font-semibold text-lg capitalize">
            ¿Quiénes somos?
          </h1>

          {/* Título principal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-950 mb-4">
            Transformamos tus ideas en imágenes con IA
          </h1>

          {/* Párrafo de descripción del servicio */}
          <p className="text-gray-800 mb-8 text-base mt-5">
            Somos una plataforma diseñada para liberar tu creatividad.
            Utilizamos inteligencia artificial para convertir simples
            descripciones en obras visuales sorprendentes. No necesitas ser un
            diseñador: solo escribe lo que imaginas, y deja que nuestra IA lo
            traiga a la vida. ¡Explora un mundo donde las ideas se vuelven arte en cuestión de segundos!
          </p>

          {/* Botón de para acceder al generador de imagenes */}
          <div className="flex justify-center">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-50 h-13 text-white text-lg font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-lg hover:scale-105 duration-200 hover:drop-shadow-md hover:shadow-[#44e9ff] cursor-pointer px-6 py-3 text-center"
            >
              Prueba nuestra IA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
