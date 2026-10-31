import React, { useState, useRef } from "react";
import { useSiteImages, PRESET_THEMES, SiteImages } from "../context/ImageContext.tsx";
import { X, Sparkles, Upload, Link2, RotateCcw, Check, Image as ImageIcon, CheckCircle2 } from "lucide-react";

export const ImageManagerModal: React.FC = () => {
  const {
    images,
    updateImage,
    applyPreset,
    resetAllImages,
    isManagerOpen,
    setIsManagerOpen,
    targetKeyForEdit,
    setTargetKeyForEdit,
  } = useSiteImages();

  const [activeTab, setActiveTab] = useState<"presets" | "individual">("presets");
  const [selectedKey, setSelectedKey] = useState<keyof SiteImages>(targetKeyForEdit || "hero");
  const [customUrlInput, setCustomUrlInput] = useState("");
  const [successToast, setSuccessToast] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isManagerOpen) return null;

  const showToast = (message: string) => {
    setSuccessToast(message);
    setTimeout(() => {
      setSuccessToast(null);
    }, 2500);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          updateImage(selectedKey, reader.result);
          showToast(`Imagem "${selectedKey}" atualizada com sucesso!`);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customUrlInput.trim()) return;
    updateImage(selectedKey, customUrlInput.trim());
    setCustomUrlInput("");
    showToast(`Imagem "${selectedKey}" atualizada via link!`);
  };

  const handlePresetSelect = (presetId: string, presetName: string) => {
    applyPreset(presetId);
    showToast(`Tema "${presetName}" aplicado em todo o site!`);
  };

  const handleReset = () => {
    resetAllImages();
    showToast("Todas as imagens originais foram restauradas!");
  };

  const imageItems: { key: keyof SiteImages; label: string; section: string }[] = [
    { key: "hero", label: "Destaque Principal (Hero 3D)", section: "Hero" },
    { key: "logo", label: "Logo Oficial da Agência", section: "Identidade" },
    { key: "about", label: "Equipe & Bastidores (Sobre)", section: "Sobre" },
    { key: "instagram_1", label: "Post Instagram 01 (3D)", section: "Instagram" },
    { key: "instagram_2", label: "Post Instagram 02 (Web)", section: "Instagram" },
    { key: "instagram_3", label: "Post Instagram 03 (Equipe)", section: "Instagram" },
    { key: "instagram_4", label: "Post Instagram 04 (Chatbot)", section: "Instagram" },
    { key: "instagram_5", label: "Post Instagram 05 (Catálogo)", section: "Instagram" },
    { key: "instagram_6", label: "Post Instagram 06 (Social)", section: "Instagram" },
    { key: "instagram_7", label: "Post Instagram 07 (Google Maps)", section: "Instagram" },
    { key: "instagram_8", label: "Post Instagram 08 (Performance)", section: "Instagram" },
    { key: "instagram_9", label: "Post Instagram 09 (Mídia & Social)", section: "Instagram" },
    { key: "instagram_10", label: "Post Instagram 10 (Ecossistema Cloud)", section: "Instagram" },
  ];

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={() => {
        setIsManagerOpen(false);
        setTargetKeyForEdit(null);
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Gerenciador de Imagens do Site"
    >
      <div
        className="relative bg-neutral-950 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4.5 border-b border-slate-800/90 bg-black/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
              <ImageIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-black text-white uppercase tracking-tight flex items-center gap-2">
                Personalizar Imagens do Site
                <span className="text-[10px] font-bold bg-blue-600/30 text-blue-300 px-2 py-0.5 rounded-full border border-blue-500/30">
                  Ao Vivo
                </span>
              </h3>
              <p className="text-xs text-slate-400 font-normal">
                Alterne pacotes visuais inteiros ou envie fotos do seu computador/celular.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleReset}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
              title="Restaurar imagens originais padrão"
            >
              <RotateCcw className="w-3.5 h-3.5 text-blue-400" />
              <span>Restaurar Originais</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setIsManagerOpen(false);
                setTargetKeyForEdit(null);
              }}
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 transition-colors"
              aria-label="Fechar janela"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-3 pb-2 border-b border-slate-900 bg-neutral-950">
          <button
            type="button"
            onClick={() => setActiveTab("presets")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === "presets"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                : "text-slate-400 hover:text-white hover:bg-slate-900"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pacotes Temáticos (Trocar Todas)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("individual")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === "individual"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                : "text-slate-400 hover:text-white hover:bg-slate-900"
            }`}
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Substituir Fotos Individuais / Upload</span>
          </button>
        </div>

        {/* Success Toast */}
        {successToast && (
          <div className="px-6 py-2 bg-emerald-950/80 border-b border-emerald-800 text-emerald-300 text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{successToast}</span>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)] space-y-6">
          {/* TAB 1: PRESETS / THEMES */}
          {activeTab === "presets" && (
            <div className="space-y-4">
              <div className="text-xs text-slate-300">
                Selecione um tema para trocar <strong>automaticamente todas as imagens</strong> da agência em 1 clique:
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PRESET_THEMES.map((theme) => (
                  <div
                    key={theme.id}
                    className="relative rounded-2xl bg-slate-950 border border-slate-800/90 overflow-hidden p-4 flex flex-col justify-between hover:border-blue-500/80 transition-all group shadow-lg"
                  >
                    <div className="relative aspect-16/9 rounded-xl overflow-hidden bg-black mb-3.5 border border-slate-800">
                      <img
                        src={theme.coverImage}
                        alt={theme.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                        <span className="text-[10px] font-black uppercase tracking-wider text-blue-300">
                          {theme.id === "original" ? "Oficial" : "Coleção Curada"}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-black text-white uppercase">{theme.name}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {theme.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => handlePresetSelect(theme.id, theme.name)}
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white shadow-md shadow-blue-600/25 transition-all"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Aplicar Este Pacote</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: INDIVIDUAL IMAGE UPLOADER */}
          {activeTab === "individual" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Image Selection List */}
              <div className="lg:col-span-5 space-y-1.5 max-h-[420px] overflow-y-auto pr-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">
                  Escolha o elemento visual para alterar:
                </span>
                {imageItems.map((item) => {
                  const isSelected = selectedKey === item.key;
                  return (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setSelectedKey(item.key)}
                      className={`w-full flex items-center gap-3 p-2.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? "bg-blue-600/20 border-blue-500 text-white shadow-md"
                          : "bg-slate-950 border-slate-900 text-slate-300 hover:border-slate-800 hover:text-white"
                      }`}
                    >
                      <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-black border border-slate-800">
                        <img
                          src={images[item.key]}
                          alt={item.label}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-blue-400 block">
                          {item.section}
                        </span>
                        <span className="text-xs font-bold truncate block">
                          {item.label}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Editor & Actions for Selected Image */}
              <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-900">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">
                        Editando agora:
                      </span>
                      <h4 className="text-sm font-black text-white">
                        {imageItems.find((i) => i.key === selectedKey)?.label}
                      </h4>
                    </div>
                  </div>

                  {/* Preview Image */}
                  <div className="relative aspect-16/10 rounded-xl overflow-hidden bg-black border border-slate-800 mb-4 flex items-center justify-center">
                    <img
                      src={images[selectedKey]}
                      alt="Preview"
                      className="w-full h-full object-contain max-h-[220px]"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-white border border-slate-800">
                      Visualização Atual
                    </div>
                  </div>

                  {/* Upload Controls */}
                  <div className="space-y-3">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileUpload}
                    />

                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/20 transition-all hover:scale-101 active:scale-98"
                    >
                      <Upload className="w-4 h-4" />
                      <span>Fazer Upload do Seu Dispositivo (PNG / JPG)</span>
                    </button>

                    <form onSubmit={handleApplyUrl} className="flex gap-2">
                      <div className="relative flex-1">
                        <Link2 className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input
                          type="url"
                          placeholder="Ou cole o link direto da imagem (https://...)"
                          value={customUrlInput}
                          onChange={(e) => setCustomUrlInput(e.target.value)}
                          className="w-full bg-black border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-blue-500"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl border border-slate-700 transition-colors shrink-0"
                      >
                        Aplicar URL
                      </button>
                    </form>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-400">
                  <span>As alterações são salvas automaticamente em seu navegador.</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-3.5 border-t border-slate-900 bg-neutral-950 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>As mudanças refletem instantaneamente em todo o site.</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleReset}
              className="sm:hidden w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-300 bg-slate-900 border border-slate-800"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restaurar Originais</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setIsManagerOpen(false);
                setTargetKeyForEdit(null);
              }}
              className="w-full sm:w-auto px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-slate-200 transition-colors"
            >
              Concluir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
