// Botón para descargar una imagen con tooltip del tamaño
import { ImageDownIcon } from "lucide-react";

interface Props {
  imageUrl: string;      // URL de la imagen a descargar
  imageSize: number | null; // Tamaño de la imagen en MB
}

const ButtonDownload: React.FC<Props> = ({ imageUrl, imageSize }) => {
  // Formato legible para el tamaño
  const readableSize = imageSize ? `${imageSize.toFixed(2)} MB` : "Cargando...";

  // Maneja la descarga de la imagen
  const handleDownload = async () => {
    try {
      const response = await fetch(imageUrl); // Descarga la imagen
      const blob = await response.blob();     // La convierte en blob
      const blobUrl = URL.createObjectURL(blob); // Crea URL temporal

      const a = document.createElement("a");  // Crea elemento <a>
      a.href = blobUrl;
      a.download = "imagen-generada.jpg";
      document.body.appendChild(a);
      a.click();          // Dispara la descarga
      a.remove();
      URL.revokeObjectURL(blobUrl); // Limpia la URL temporal
    } catch (err) {
      console.error("Error al descargar la imagen", err);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="cursor-pointer group/download absolute bottom-5 left-5 flex gap-1 px-3 py-3 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 font-semibold shadow-lg shadow-cyan-200 active:shadow-inner transition-all duration-300"
    >
      <ImageDownIcon className="h-7 w-7 text-white" />
      
      <div className="absolute text-xs scale-0 rounded-2xl py-2 px-2 bg-[#0c0e9b]  mb-3 w-20 text-center font-bold bottom-full left-1 group-hover/download:scale-100 origin-bottom transition-all duration-300 shadow-lg before:content-[''] before:absolute before:top-full before:left-2/4 before:w-3 before:h-3 before:border-solid before:bg-[#0c0e9b] before:rotate-45 before:-translate-y-2/4 before:-translate-x-2/4">
        {readableSize}
         {" "}Descargar
      </div>
    </button>
  );
};

export default ButtonDownload;
