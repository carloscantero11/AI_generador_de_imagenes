import { useRef, useState } from "react";
import ButtonUI from "../../ui/ButtonUI";
import { generateImage } from "../../../api/generateImage";
import ButtonDownload from "../../ui/ButtonDownload";
import LoadingImage from "../../ui/LoadingImage";

// Sección principal que permite generar una imagen con IA a partir de un texto
const Hero = () => {
  const [prompt, setPrompt] = useState("");             // Texto ingresado por el usuario
  const [imageUrl, setImagenUrl] = useState("");        // URL de la imagen generada
  const [imageSize, setImageSize] = useState<number | null>(null); // Tamaño de la imagen
  const [loading, setLoading] = useState(false);        // Estado de carga

  const imageRef = useRef<HTMLDivElement>(null);        // Referencia para hacer scroll a la imagen

  // Lógica para generar imagen usando la API
  const handleGenetare = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setImagenUrl("");
    setImageSize(null);

    // Scroll hacia la zona de imagen
    setTimeout(() => {
      imageRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300); // pequeño delay para asegurar la animación

    try {
      const url = await generateImage(prompt);
      setImagenUrl(url);
      setPrompt(""); // ✅ " "

      // Calcula el tamaño de la imagen descargada
      const response = await fetch(url);
      const blob = await response.blob();
      const sizeInMB = blob.size / (1024 * 1024);
      setImageSize(sizeInMB);
    } catch (error) {
      console.error("Error al generar la imagen", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="hero" className="w-[95%] min-h-screen relative mx-auto mt-[20vh]">
      {/* Título y descripción */}
      <div className="relative z-10 text-zinc-950 flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-center bg-gradient-to-b from-blue-700 xl:h-39 lg:h-33 md:h-26 sm:h-26 to-fuchsia-600 bg-clip-text text-transparent">
          Crea una Bonita Imagen con
          <br />
          Inteligencia Artificial {" "}
        </h1>
        <p className="mt-4 text-sm md:text-[18px] font-semibold text-center text-gray-800">
        🖼️ Da vida a tus ideas con el poder de la inteligencia artificial.
          ¿Tienes una idea? 💡
          <br />
          <span className="bg-gradient-to-b from-blue-600 to-fuchsia-600 bg-clip-text text-transparent">
            | Escribe... | Imagina... | Crea... |
          </span>
        </p>

        {/* Cuadro de texto y botón */}
        <div className="flex items-end h-26 md:h-30 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-gray-100 rounded-3xl p-2 pr-5 gap-2 mt-10 border-[3px] border-white">
          <textarea
            rows={4}
            placeholder="Escribe tu imagen soñada."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="h-full resize-none rounded-lg outline-none w-full text-shadow-zinc-900 placeholder:text-md sm:placeholder:text-base px-2"
          />
          <div className="hidden sm:block">
            <ButtonUI onClick={handleGenetare} />
          </div>
        </div>
        {/* Botón para pantallas pequeñas */}
        <div className="block sm:hidden mt-14">
          <ButtonUI onClick={handleGenetare} />
        </div>
      </div>

      {/* Contenedor donde se hace scroll */}
      <div ref={imageRef} className="mb-15">

        {/* Animación de cargando la imagen */}
        {loading && <LoadingImage />}

        {/* Imagen generada */}
        {imageUrl && !loading && (
          <div className="mt-25 flex justify-center">
            <div className="relative mb-2">
              <img
                src={imageUrl}
                alt="Imagen generada"
                className="max-w-full max-h-[500px] rounded-2xl shadow-lg"
              />
              {/* Botón de descarga */}
              <ButtonDownload imageUrl={imageUrl} imageSize={imageSize} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
