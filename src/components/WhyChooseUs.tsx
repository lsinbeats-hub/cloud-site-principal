import React from "react";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal.tsx";

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-black text-white border-b border-slate-900 relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Copy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <ScrollReveal animation="fade-down" delay={50}>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-blue-500 mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>VANTAGENS COMERCIAIS</span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={120}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                EXCELÊNCIA TÉCNICA E COMPROMISSO COM O SEU SUCESSO
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={180}>
              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Eliminamos a complexidade técnica para que sua empresa conte com ferramentas que geram valor de verdade. Da primeira conversa à entrega, cada detalhe é conduzido com rigor de escopo e qualidade visual.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={240}>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-black uppercase tracking-wider text-black bg-blue-500 hover:bg-blue-400 rounded-xl shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5"
                >
                  <span>Ver Serviços</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#instagram"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-black uppercase tracking-wider text-white bg-slate-950 hover:bg-slate-900 border border-slate-800 rounded-xl transition-all"
                >
                  <span>Ver Instagram</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Sleeker Metrics & Blue Checklist Card */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row gap-4 items-stretch">
            <ScrollReveal animation="fade-left" delay={150} className="flex-1 flex">
              {/* Stat Box (Black Card, Smaller Frame) */}
              <div className="w-full rounded-xl bg-slate-950 border border-slate-800/90 p-5 flex flex-col justify-between">
              <div>
                <span className="text-3xl sm:text-4xl font-black font-mono text-white">
                  04
                </span>
                <span className="block text-xs font-black uppercase tracking-widest text-blue-400 mt-1">
                  Soluções Integradas
                </span>
                <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                  Sites, chatbots inteligentes, Google e design estratégico alinhados sob a mesma direção de arte.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-900 mt-5 flex items-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                <span>Escopo fechado e transparente</span>
              </div>
            </div>
            </ScrollReveal>

            {/* Checklist Box (Vibrant Blue Card, Sleek Frame) */}
            <ScrollReveal animation="fade-left" delay={250} className="flex-1 flex">
              <div className="w-full rounded-xl bg-blue-600 text-black p-5 shadow-xl shadow-blue-600/20 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-black/80 block mb-3">
                    Padrão Cloud Creative
                  </span>

                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2 text-xs font-bold text-black">
                      <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>Valores fixos sem surpresas</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs font-bold text-black">
                      <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>Prazos contados em dias úteis</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs font-bold text-black">
                      <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>Atendimento direto pelo WhatsApp</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs font-bold text-black">
                      <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>Planos de manutenção opcionais</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-black/10 mt-5 text-[10px] font-black tracking-wider uppercase text-black/90">
                  Cloud Creative · Soluções Digitais
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
};
