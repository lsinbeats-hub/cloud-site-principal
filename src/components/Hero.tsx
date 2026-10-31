import React from "react";
import { getWhatsAppUrl } from "../config/agency.ts";
import { ArrowRight, MessageSquare } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal.tsx";
import { useSiteImages } from "../context/ImageContext.tsx";

export const Hero: React.FC = () => {
  const { images } = useSiteImages();
  return (
    <section id="hero" className="relative pt-24 md:pt-32 bg-black text-white overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[450px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 left-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 md:pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copywriting & CTAs */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start text-left">
            {/* Badge */}
            <ScrollReveal animation="fade-down" delay={50}>
              <div className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-blue-400 mb-4 bg-slate-950 px-3.5 py-1.5 rounded-full border border-slate-800">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span>CLOUD CREATIVE STUDIO · SOLUÇÕES DIGITAIS</span>
              </div>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal animation="fade-up" delay={120}>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight text-white leading-[1.05] text-balance text-left">
                PRESENÇA DIGITAL <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-sky-300">
                  QUE GERA RESULTADOS
                </span>
              </h1>
            </ScrollReveal>

            {/* Subtitle */}
            <ScrollReveal animation="fade-up" delay={180}>
              <p className="mt-5 text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed font-normal text-left">
                Desenvolvemos websites de alta conversão, automações inteligentes para WhatsApp, visibilidade no Google e design estratégico para empresas que querem acelerar seu crescimento.
              </p>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal animation="fade-up" delay={240}>
              <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 w-full sm:w-auto">
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-black uppercase tracking-wider text-black bg-blue-500 hover:bg-blue-400 active:bg-blue-600 rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5"
                >
                  <span>Conheça Nossos Serviços</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={getWhatsAppUrl("Olá! Gostaria de conversar com a Cloud Creative sobre soluções digitais para minha empresa.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-black uppercase tracking-wider text-white bg-slate-950 hover:bg-slate-900 border border-slate-800 rounded-xl transition-all hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Quick Metrics Bar */}
            <ScrollReveal animation="fade-up" delay={300} className="w-full">
              <div className="mt-8 pt-6 border-t border-slate-900 w-full flex flex-wrap items-center justify-start gap-5 sm:gap-7 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-black font-mono text-sm sm:text-base">R$ 650</span>
                  <span className="text-[11px] text-slate-400">Sites a partir de</span>
                </div>
                <span className="text-slate-800">|</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-black font-mono text-sm sm:text-base">R$ 500</span>
                  <span className="text-[11px] text-slate-400">Bots a partir de</span>
                </div>
                <span className="text-slate-800">|</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-blue-400 font-black font-mono text-sm sm:text-base">100%</span>
                  <span className="text-[11px] text-slate-400">Prazos em dias úteis</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Imagem Soluções Digitais Neon bem maior */}
          <div className="lg:col-span-6 xl:col-span-7 relative flex items-center justify-center lg:justify-end w-full">
            <ScrollReveal animation="fade-left" delay={200} className="w-full flex items-center justify-center">
              <div className="relative w-full flex items-center justify-center group">
                {/* Glow expandido azul de fundo */}
                <div className="absolute inset-0 bg-blue-500/30 rounded-3xl blur-3xl -z-10 transform scale-110 pointer-events-none" />
                <img
                  src={images.hero || "/assets/aistudio/Solu__es_digitais_em_neon_azul__2__8924eb69.png"}
                  alt="Soluções Digitais Cloud Creative - Sites, Chatbots, Design e Google Meu Negócio"
                  className="w-full sm:w-[110%] lg:w-[125%] xl:w-[135%] max-w-none h-auto object-contain drop-shadow-[0_0_55px_rgba(59,130,246,0.45)] transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="eager"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* Marquee Banner Strip below Hero */}
      <div className="w-full bg-blue-600 text-black py-2.5 overflow-hidden border-y border-blue-500 shadow-sm">
        <div className="flex items-center gap-6 whitespace-nowrap text-[11px] font-black uppercase tracking-wider overflow-x-auto no-scrollbar px-4 justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span>CRIAÇÃO DE SITES</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span>CHATBOTS COM IA</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span>PERFIL NO GOOGLE & MAPS</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span>ARTES PARA REDES SOCIAIS</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span>AUTOMAÇÃO DE ATENDIMENTO</span>
          </div>
        </div>
      </div>

    </section>
  );
};
