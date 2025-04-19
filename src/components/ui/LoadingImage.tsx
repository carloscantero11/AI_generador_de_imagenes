// Componente visual de carga para imágenes

import { Image } from "lucide-react";

const LoadingImage = () => {
  return (
    <div className=" sm:size-125 h-80 rounded animate-pulse mt-25 mx-auto mb-15">
      <div className="flex items-center justify-center h-full w-auto mb-4 bg-gray-300  dark:bg-gray-400 rounded-2xl">
        <Image className="w-10 h-10 text-gray-200 dark:text-gray-600" />
      </div>
    </div>
  );
};

export default LoadingImage;
