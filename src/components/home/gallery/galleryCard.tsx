import React from "react";

interface GalleryCardProps {
  src: string;
  alt: string;
  className?: string;
}

// Componente que muestra una imagen en la galería
const GalleryCard: React.FC<GalleryCardProps> = ({
  src,
  alt,
  className = "",
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full rounded-[46px] break-inside-avoid shadow-md hover:scale-[1.02] transition-transform duration-300 object-cover ${className}`}
    />
  );
};

export default GalleryCard;
