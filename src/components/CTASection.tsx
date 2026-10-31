import React from "react";
import { getWhatsAppUrl } from "../config/agency.ts";
import { MessageSquare, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal.tsx";

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Black Window with ScrollReveal */}
        <ScrollReveal animation="zoom-in" delay={100}>
          <div className="bg-black text-white rounded-3xl p-8 sm:p-14 border-2 border-white/30 shadow-2xl text-center relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black bg-white px-3.5 py-1.5 rounded-full mb-6 shadow-sm">
            <span>Cloud Creative</span>
            <span aria-hidden="true">·</span>
            <span>Soluções Digitais</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Vamos tirar sua ideia do papel?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed font-normal">
            Fale com a Cloud Creative e peça o seu orçamento. Transformamos sua presença digital com sites, automações e design sob medida.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl("Olá! Gostaria de conversar com a Cloud Creative e pedir um orçamento para minha empresa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-black uppercase tracking-wider text-black bg-white hover:bg-slate-200 active:bg-slate-300 rounded-xl shadow-2xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 text-blue-600" />
              <span>Pedir Orçamento no WhatsApp</span>
            </a>

            <a
              href="#sites"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 border border-white/20 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Ver Tabela de Serviços</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="mt-6 text-xs text-slate-400 font-medium">
            Atendimento direto sem intermediários · Prazos contados em dias úteis
          </p>

        </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
