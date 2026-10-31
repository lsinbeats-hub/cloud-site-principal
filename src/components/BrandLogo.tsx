import React from "react";
import { useSiteImages } from "../context/ImageContext.tsx";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  theme?: "dark" | "light" | "blue";
  showText?: boolean;
  imgStyle?: React.CSSProperties;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  size = "lg",
  showText = false,
  imgStyle,
}) => {
  const { images } = useSiteImages();

  // Tamanhos ampliados para exibição nítida e destacada do logo horizontal
  const sizeMap = {
    sm: "h-10 w-16",
    md: "h-14 w-24",
    lg: "h-20 w-36 sm:h-24 sm:w-44",
    xl: "h-26 w-52",
  };

  // Logo dinâmico da agência gerenciado pelo ImageContext
  const imageSrc = images.logo || "/assets/aistudio/snapedit_1792858477180_02765559.png";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Imagem do Logo anexada pelo usuário */}
      <div
        className={`${sizeMap[size]} shrink-0 flex items-center justify-center transition-transform duration-200 hover:scale-105`}
      >
        <img
          src={imageSrc}
          alt="Cloud Creative"
          className="h-full w-full object-contain"
          style={imgStyle}
          loading="eager"
        />
      </div>

      {/* Renderiza o texto apenas se explicitamente solicitado */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-black tracking-tight text-xl sm:text-2xl text-white">
            CLOUD <span>CREATIVE</span>
          </span>
          <span
            className="text-[10px] sm:text-[11px] font-black tracking-widest uppercase mt-1 text-blue-200"
          >
            Soluções Digitais
          </span>
        </div>
      )}
    </div>
  );
};
