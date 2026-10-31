import React, { useState, useRef } from "react";
import { AGENCY_CONFIG } from "../config/agency.ts";
import { useSiteImages, SiteImages, DEFAULT_IMAGES } from "../context/ImageContext.tsx";
import { Instagram, Heart, MessageCircle, ArrowUpRight, ExternalLink, X, ChevronLeft, ChevronRight, Upload, Camera } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal.tsx";

interface InstagramPost {
  id: string;
  imageKey: keyof SiteImages;
  category: string;
  caption: string;
  likes: number;
  comments: number;
  tag: string;
}

export const InstagramGallery: React.FC = () => {
  const { images, updateImage } = useSiteImages();
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);
  const [activeUploadKey, setActiveUploadKey] = useState<keyof SiteImages | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const fileBatchInputRef = useRef<HTMLInputElement>(null);
  const fileSingleInputRef = useRef<HTMLInputElement>(null);

  const posts: InstagramPost[] = [
    {
      id: "post-1",
      imageKey: "instagram_1",
      category: "Criação de Sites",
      tag: "Site Profissional",
      caption: "Sua marca precisa de um site. Mais acessos, mais visibilidade. Mais do que postar, é hora de ter presença profissional na internet com a Cloud Creative.",
      likes: 382,
      comments: 48,
    },
    {
      id: "post-2",
      imageKey: "instagram_2",
      category: "Automação & IA",
      tag: "Chatbot WhatsApp",
      caption: "5 motivos para usar Chatbot em seus atendimentos: atendimento 24/7, automação eficiente, respostas rápidas, integração fácil e escalabilidade total.",
      likes: 415,
      comments: 56,
    },
    {
      id: "post-3",
      imageKey: "instagram_3",
      category: "Presença no Google",
      tag: "Google Meu Negócio",
      caption: "Sua empresa pode ser encontrada todos os dias... sem anúncio. Com o Perfil da sua Empresa no Google, mais clientes te conhecem e escolhem seu negócio.",
      likes: 329,
      comments: 34,
    },
    {
      id: "post-4",
      imageKey: "instagram_4",
      category: "Design Estratégico",
      tag: "Design & Artes",
      caption: "Sua rede social precisa de um design. Flyers, logotipo e artes para social media com padrão visual de excelência que valorizam sua marca.",
      likes: 294,
      comments: 39,
    },
    {
      id: "post-5",
      imageKey: "instagram_5",
      category: "Portfólio Web",
      tag: "Nossos Sites",
      caption: "Portfólio Cloud Creative Studio: Transformamos ideias em experiências digitais que conectam pessoas. Conheça nossos sites.",
      likes: 462,
      comments: 61,
    },
    {
      id: "post-6",
      imageKey: "instagram_6",
      category: "Estratégia Digital",
      tag: "Retorno & Vendas",
      caption: "Quanto dinheiro você tá perdendo por não ter uma estratégia digital validada? Spoiler: muito mais que imagina.",
      likes: 371,
      comments: 47,
    },
    {
      id: "post-7",
      imageKey: "instagram_7",
      category: "Planejamento Web",
      tag: "Conversão Real",
      caption: "Ter um site sem estratégia é como abrir uma loja incrível no meio da Amazônia. Posicione sua marca no lugar certo com a Cloud Creative.",
      likes: 520,
      comments: 73,
    },
    {
      id: "post-8",
      imageKey: "instagram_8",
      category: "Branding de Impacto",
      tag: "Marcas que Ficam",
      caption: "Criamos marcas que não apenas existem, mas que impactam. Vamos construir a presença digital da sua empresa hoje?",
      likes: 388,
      comments: 41,
    },
    {
      id: "post-9",
      imageKey: "instagram_9",
      category: "Mídia & Redes",
      tag: "Social Media",
      caption: "Sua marca pode mais. Estratégia, design e mídia que fazem barulho do jeito certo, transformando seguidores em clientes fiéis.",
      likes: 435,
      comments: 52,
    },
    {
      id: "post-10",
      imageKey: "instagram_10",
      category: "Ecossistema Cloud",
      tag: "Soluções Digitais",
      caption: "Somos a Cloud Creative Studio: criatividade, estratégia e design para dar vida à sua marca no digital. Sites, Chatbots, Google e Artes.",
      likes: 612,
      comments: 85,
    },
  ];

  const handleBatchFiles = (fileList: File[]) => {
    if (fileList.length === 0) return;

    const order: (keyof SiteImages)[] = [
      "instagram_1",
      "instagram_2",
      "instagram_3",
      "instagram_4",
      "instagram_5",
      "instagram_6",
      "instagram_7",
      "instagram_8",
      "instagram_9",
      "instagram_10",
    ];

    fileList.forEach((file, index) => {
      const name = file.name.toLowerCase();
      let targetKey: keyof SiteImages | null = null;
      if (name.includes("site") && !name.includes("portfolio")) targetKey = "instagram_1";
      else if (name.includes("bot")) targetKey = "instagram_2";
      else if (name.includes("local")) targetKey = "instagram_3";
      else if (name.includes("design")) targetKey = "instagram_4";
      else if (name.includes("portfolio")) targetKey = "instagram_5";
      else if (name.includes("criativo 2") || name.includes("criativo2") || name.includes("criativo-2") || name.includes("amazonia")) targetKey = "instagram_7";
      else if (name.includes("criativo 3") || name.includes("criativo3") || name.includes("criativo-3") || name.includes("impactam")) targetKey = "instagram_8";
      else if (name.includes("criativo 4") || name.includes("criativo4") || name.includes("criativo-4") || name.includes("barulho")) targetKey = "instagram_9";
      else if (name.includes("criativo") || name.includes("dinheiro")) targetKey = "instagram_6";
      else if (name.includes("cloud")) targetKey = "instagram_10";
      else if (index < order.length) {
        targetKey = order[index];
      }

      if (targetKey) {
        const reader = new FileReader();
        const currentKey = targetKey;
        reader.onload = () => {
          if (typeof reader.result === "string") {
            updateImage(currentKey, reader.result);
          }
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleBatchUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleBatchFiles(Array.from(e.target.files || []));
  };

  const handleSingleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && activeUploadKey) {
      const reader = new FileReader();
      const currentKey = activeUploadKey;
      reader.onload = () => {
        if (typeof reader.result === "string") {
          updateImage(currentKey, reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Funções de rolagem pelas setas
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section id="instagram" className="py-16 md:py-20 bg-slate-950 text-white border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Galeria do Instagram com Setas de Navegação */}
        <ScrollReveal animation="fade-down" delay={60}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 pb-5 border-b border-slate-900">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-blue-400 mb-2">
                <Instagram className="w-3.5 h-3.5 text-blue-500" />
                <span>SIGA NOSSO INSTAGRAM</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight uppercase">
                Galeria @{AGENCY_CONFIG.instagramUsername}
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300 font-normal">
                Arraste para navegar pelas 10 postagens oficiais ou selecione suas fotos.
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
              {/* Botão de substituição em lote */}
              <button
                type="button"
                onClick={() => fileBatchInputRef.current?.click()}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                title="Substituir imagens da galeria com as suas fotos"
              >
                <Upload className="w-4 h-4" />
                <span>Carregar Fotos da Galeria</span>
              </button>

              <input
                ref={fileBatchInputRef}
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleBatchUpload}
              />

              <input
                ref={fileSingleInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleSingleUpload}
              />

              <a
                href={AGENCY_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-black bg-white hover:bg-slate-200 rounded-xl transition-all shadow-md hover:-translate-y-0.5"
              >
                <Instagram className="w-4 h-4 text-pink-600" />
                <span className="hidden sm:inline">Seguir no Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Carrossel com Setas Laterais e Rolagem Suave */}
        <div
          className={`relative group rounded-2xl transition-all duration-200 ${
            isDragging ? "ring-2 ring-blue-500 bg-blue-500/5 p-2" : ""
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDragging(true);
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDragging(false);
          }}
          onDrop={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDragging(false);
            handleBatchFiles(Array.from(e.dataTransfer.files || []));
          }}
        >
          
          {/* Botão Seta Flutuante Esquerda */}
          <button
            type="button"
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/90 hover:bg-blue-600 text-white flex items-center justify-center shadow-2xl border border-slate-700/80 transition-all duration-200 hover:scale-110 active:scale-95 opacity-90 group-hover:opacity-100"
            aria-label="Rolar anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Botão Seta Flutuante Direita */}
          <button
            type="button"
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/90 hover:bg-blue-600 text-white flex items-center justify-center shadow-2xl border border-slate-700/80 transition-all duration-200 hover:scale-110 active:scale-95 opacity-90 group-hover:opacity-100"
            aria-label="Rolar próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Container Carrossel com Rolagem Horizontal e Snap */}
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-3 px-1"
            tabIndex={0}
            role="region"
            aria-label="Carrossel de postagens do Instagram"
          >
            {posts.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="group/card relative cursor-pointer shrink-0 w-64 sm:w-72 aspect-square snap-start rounded-xl overflow-hidden bg-black border border-slate-800 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/15"
              >
                <img
                  src={images[post.imageKey] || DEFAULT_IMAGES[post.imageKey]}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                  loading="lazy"
                />

                {/* Tag Superior */}
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 bg-black/85 backdrop-blur-xs text-white rounded">
                    {post.tag}
                  </span>
                </div>

                {/* Botão de Trocar Imagem do Card específico no Hover */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveUploadKey(post.imageKey);
                    fileSingleInputRef.current?.click();
                  }}
                  className="absolute top-2.5 right-2.5 z-20 p-1.5 rounded-lg bg-black/80 hover:bg-blue-600 text-white opacity-0 group-hover/card:opacity-100 transition-all border border-white/20 shadow-md hover:scale-110"
                  title="Trocar imagem desta publicação"
                  aria-label="Trocar imagem desta publicação"
                >
                  <Camera className="w-3.5 h-3.5 text-blue-300" />
                </button>

                {/* Overlay no Hover com Likes e Comentários estilo Instagram */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover/card:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-4 text-center">
                  <div className="flex items-center gap-3 text-white text-xs font-bold font-mono mb-2">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4 text-white" />
                      <span>{post.comments}</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-200 line-clamp-2 leading-relaxed">
                    {post.caption}
                  </p>

                  <span className="mt-3 text-[10px] font-black uppercase tracking-wider text-blue-400">
                    Ver Detalhes →
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Rodapé da Galeria com Instrução */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 border-t border-slate-900 pt-4">
          <div className="flex items-center gap-2">
            <Instagram className="w-4 h-4 text-blue-400" />
            <span className="font-semibold text-slate-200">@sigacloudcreative</span>
          </div>

          <div className="text-[11px] font-mono text-slate-500">
            {posts.length} publicações em destaque
          </div>
        </div>

      </div>

      {/* Modal de Detalhes do Post Ampliado */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="relative bg-slate-950 border border-slate-800 rounded-2xl max-w-lg w-full p-5 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPost(null)}
              className="absolute top-3.5 right-3.5 p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white transition-colors"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Top Bar estilo Instagram */}
            <div className="flex items-center gap-2.5 mb-3.5">
              <div className="w-8 h-8 rounded-full bg-blue-600 p-0.5">
                <img
                  src="/assets/aistudio/Cloud_logo_80bda40e.jpeg"
                  alt="Cloud Creative"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="text-xs font-bold text-white block leading-tight">
                  @{AGENCY_CONFIG.instagramUsername}
                </span>
                <span className="text-[10px] text-slate-400">
                  {selectedPost.category} · Cloud Creative
                </span>
              </div>
            </div>

            {/* Imagem do Post */}
            <div className="relative rounded-xl overflow-hidden aspect-square bg-black border border-slate-800 mb-3.5">
              <img
                src={images[selectedPost.imageKey] || DEFAULT_IMAGES[selectedPost.imageKey]}
                alt={selectedPost.caption}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Métricas e Legenda */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                    <span className="font-bold text-white">{selectedPost.likes} curtidas</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4 text-slate-400" />
                    <span>{selectedPost.comments} comentários</span>
                  </div>
                </div>
                <span className="text-[10px] text-blue-400 font-bold uppercase font-sans">
                  {selectedPost.tag}
                </span>
              </div>

              <p className="text-xs text-slate-200 leading-relaxed pt-1 border-t border-slate-900">
                <strong>cloudcreative:</strong> {selectedPost.caption}
              </p>
            </div>

            {/* Ação: Ver no Instagram */}
            <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                Gostou dessa solução?
              </span>
              <a
                href={AGENCY_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Acessar Instagram</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
