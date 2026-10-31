import React, { createContext, useContext, useState, useEffect } from "react";
import aboutImg from "../assets/images/regenerated_image_1793456215706.jpg";

export interface SiteImages {
  logo: string;
  hero: string;
  about: string;
  instagram_1: string;
  instagram_2: string;
  instagram_3: string;
  instagram_4: string;
  instagram_5: string;
  instagram_6: string;
  instagram_7: string;
  instagram_8: string;
  instagram_9: string;
  instagram_10: string;
}

export const DEFAULT_IMAGES: SiteImages = {
  logo: "/assets/aistudio/snapedit_1792858477180_02765559.png",
  hero: "/assets/aistudio/Solu__es_digitais_em_neon_azul__2__8924eb69.png",
  about: aboutImg,
  instagram_1: "/assets/gallery/site.png",
  instagram_2: "/assets/gallery/bot.png",
  instagram_3: "/assets/gallery/local.jpg",
  instagram_4: "/assets/gallery/design.png",
  instagram_5: "/assets/gallery/portfolio.png",
  instagram_6: "/assets/gallery/criativo.jpg",
  instagram_7: "/assets/gallery/criativo-2.jpg",
  instagram_8: "/assets/gallery/criativo-3.png",
  instagram_9: "/assets/gallery/criativo-4.jpg",
  instagram_10: "/assets/gallery/cloud.jpg",
};

export const PRESET_THEMES: {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  images: Partial<SiteImages>;
}[] = [
  {
    id: "original",
    name: "Padrão Cloud Creative",
    description: "Imagens oficiais com esculturas 3D em azul elétrico e cases reais.",
    coverImage: "/assets/aistudio/Solu__es_digitais_em_neon_azul__2__8924eb69.png",
    images: { ...DEFAULT_IMAGES },
  },
  {
    id: "tech-cyber",
    name: "Tech & Cyber 3D",
    description: "Estética futurista, neon azul intenso, inteligência artificial e interfaces holográficas.",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    images: {
      hero: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      about: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      instagram_1: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      instagram_2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      instagram_3: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      instagram_4: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
      instagram_5: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      instagram_6: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      instagram_7: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      instagram_8: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: "corporate-modern",
    name: "Corporativo Moderno & Clean",
    description: "Ambiente empresarial sofisticado, tecnologia minimalista e alta autoridade.",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    images: {
      hero: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      about: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
      instagram_1: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      instagram_2: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      instagram_3: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
      instagram_4: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      instagram_5: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      instagram_6: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      instagram_7: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      instagram_8: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: "creative-studio",
    name: "Creative Studio & Design",
    description: "Cores vibrantes, modelagem digital arrojada, agência boutique e design gráfico inovador.",
    coverImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    images: {
      hero: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
      about: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
      instagram_1: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
      instagram_2: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      instagram_3: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
      instagram_4: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      instagram_5: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
      instagram_6: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
      instagram_7: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      instagram_8: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
    },
  },
];

interface ImageContextType {
  images: SiteImages;
  updateImage: (key: keyof SiteImages, newUrl: string) => void;
  applyPreset: (presetId: string) => void;
  resetAllImages: () => void;
  isManagerOpen: boolean;
  setIsManagerOpen: (open: boolean) => void;
  targetKeyForEdit: keyof SiteImages | null;
  setTargetKeyForEdit: (key: keyof SiteImages | null) => void;
}

const STORAGE_KEY = "cloud_creative_custom_images_v9";

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<SiteImages>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        const merged: Record<string, string> = { ...DEFAULT_IMAGES };
        for (const [key, value] of Object.entries(parsed)) {
          if (
            value &&
            typeof value === "string" &&
            key in DEFAULT_IMAGES &&
            !value.includes("portfolio_") &&
            !value.includes("agency_team") &&
            !value.includes("hero_3d_blue_cloud") &&
            !value.includes("regenerated_image_1793456218857") &&
            !value.includes("regenerated_image_1793456221819")
          ) {
            merged[key] = value;
          }
        }
        return (merged as unknown) as SiteImages;
      }
    } catch {
      // fallback to default
    }
    return DEFAULT_IMAGES;
  });

  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const [targetKeyForEdit, setTargetKeyForEdit] = useState<keyof SiteImages | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
    } catch {
      // quota or private mode fallback
    }
  }, [images]);

  const updateImage = (key: keyof SiteImages, newUrl: string) => {
    setImages((prev) => ({
      ...prev,
      [key]: newUrl,
    }));
  };

  const applyPreset = (presetId: string) => {
    const preset = PRESET_THEMES.find((p) => p.id === presetId);
    if (preset) {
      setImages((prev) => ({
        ...prev,
        ...preset.images,
      }));
    }
  };

  const resetAllImages = () => {
    setImages(DEFAULT_IMAGES);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <ImageContext.Provider
      value={{
        images,
        updateImage,
        applyPreset,
        resetAllImages,
        isManagerOpen,
        setIsManagerOpen,
        targetKeyForEdit,
        setTargetKeyForEdit,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useSiteImages = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useSiteImages must be used within an ImageProvider");
  }
  return context;
};
