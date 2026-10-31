import React from "react";
import { CreditCard, FileEdit, Clock3 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal.tsx";

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      icon: CreditCard,
      title: "Pagamento Inicial",
      desc: "Confirmação do início do projeto e reserva de cronograma com a equipe.",
    },
    {
      num: "02",
      icon: FileEdit,
      title: "Materiais & Briefing",
      desc: "Envio das informações, fotos e logo da empresa para aprovação do escopo.",
    },
    {
      num: "03",
      icon: Clock3,
      title: "Desenvolvimento & Entrega",
      desc: "Contagem oficial em dias úteis com execução sob medida e ajustes previstos.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-black text-white border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-down" delay={50}>
          <div className="max-w-3xl mb-10 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-blue-400 mb-2">
              <span>METODOLOGIA EFICIENTE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight uppercase">
              Como Começa o Seu Projeto
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Três etapas objetivas e transparentes para iniciar a evolução digital da sua marca.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Step Process Cards with Smaller, Sleeker Frames */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="relative p-5 rounded-xl bg-slate-950 border border-slate-800/90 hover:border-blue-500/60 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black font-mono text-xs shadow-sm">
                      {st.num}
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 text-slate-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5">
                    {st.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-900 text-[10px] text-blue-400 font-bold uppercase tracking-wider">
                  Etapa {st.num}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
