import React from "react";
import { getWhatsAppUrl } from "../config/agency.ts";
import { ArrowRight, Code, Laptop, Bot, Palette } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal.tsx";
import { useSiteImages } from "../context/ImageContext.tsx";
import aboutImg from "../assets/images/regenerated_image_1793456215706.jpg";

export const AboutSection: React.FC = () => {
  const { images } = useSiteImages();
  const capabilities = [
    { title: "Estratégia & Planejamento", icon: Laptop },
    { title: "Desenvolvimento Web", icon: Code },
    { title: "Automação & Chatbots", icon: Bot },
    { title: "Design para Redes Sociais", icon: Palette },
  ];

  return (
    <section className="py-16 md:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Bold Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <ScrollReveal animation="fade-down" delay={60}>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-blue-600 mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>SOBRE A CLOUD CREATIVE</span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={120}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-black leading-tight text-balance">
                CRIAMOS EXPERIÊNCIAS DIGITAIS QUE DESTACAM A SUA EMPRESA
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={180}>
              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                A <strong>Cloud Creative</strong> une tecnologia, design e inteligência de atendimento para negócios que buscam autoridade no ambiente digital. Atuamos com escopos transparentes, prazos pontuais em dias úteis e foco absoluto na valorização da sua marca.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={220}>
              <div className="mt-5">
                <a
                  href={getWhatsAppUrl("Olá! Gostaria de conversar com a equipe da Cloud Creative.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-black uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md shadow-blue-600/20 transition-all hover:-translate-y-0.5"
                >
                  <span>Fale Conosco</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </ScrollReveal>

            {/* 4 Specialties Grid with smaller, sleeker frames */}
            <ScrollReveal animation="fade-up" delay={260} className="w-full">
              <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {capabilities.map((cap, i) => {
                  const Icon = cap.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-blue-400 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold text-slate-900">
                        {cap.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Sleeker Dark Card + Compact Photo */}
          <div className="lg:col-span-5 flex flex-col gap-4 w-full">
            
            {/* Dark Stat Card */}
            <ScrollReveal animation="fade-left" delay={150} className="w-full">
              <div className="w-full rounded-xl bg-black text-white p-5 shadow-lg border border-slate-800 flex items-center justify-between gap-4">
                <div>
                  <span className="text-3xl sm:text-4xl font-black font-mono text-blue-500 tracking-tight">
                    100%
                  </span>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">
                    Foco em Resultados
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed max-w-xs font-normal">
                  Soluções sob medida, código limpo e atendimento direto com quem executa o projeto.
                </p>
              </div>
            </ScrollReveal>

            {/* Photo frame */}
            <ScrollReveal animation="fade-left" delay={250} className="w-full">
              <div className="w-full rounded-xl overflow-hidden shadow-md border border-slate-200 bg-slate-100 group h-64 sm:h-72">
                <img
                  src={images.about || aboutImg}
                  alt="Soluções Digitais Cloud Creative"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
};
