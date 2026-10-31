import React, { useState } from "react";
import { getWhatsAppUrl } from "../config/agency.ts";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal.tsx";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // FAQ enxuta com as 4 dúvidas mais importantes e objetivas
  const compactFaq = [
    {
      q: "Como funciona o processo de contratação e início?",
      a: "O projeto tem início imediato após a confirmação do pagamento inicial, o envio dos materiais (textos, imagens e logo) e a aprovação do briefing. A partir desse momento, a contagem oficial em dias úteis começa a rodar.",
    },
    {
      q: "A manutenção está inclusa no valor dos serviços?",
      a: "A manutenção é um serviço opcional contratado à parte através de planos mensais (a partir de R$ 79/mês para sites e R$ 100/mês para chatbots). As horas são dedicadas para atualizações, suporte e ajustes contínuos.",
    },
    {
      q: "Como o chatbot com IA atende os clientes no WhatsApp?",
      a: "O bot avançado é treinado com as informações exclusivas da sua empresa (horários, serviços, produtos, dúvidas frequentes). Ele responde em linguagem natural instantaneamente e, quando necessário, transfere para um atendente da sua equipe.",
    },
    {
      q: "Qual é o prazo médio de entrega dos projetos?",
      a: "Sites e Landing Pages variam de 5 a 15 dias úteis conforme a complexidade. Chatbots levam de 3 a 10 dias úteis. Perfil no Google de 1 a 3 dias úteis, e artes para redes sociais de 1 a 7 dias úteis.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-black text-white border-t border-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Enxuto */}
        <ScrollReveal animation="fade-down" delay={50}>
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-blue-400 mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-blue-500" />
              <span>DÚVIDAS FREQUENTES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
              Perguntas Frequentes
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 font-normal">
              Respostas diretas e transparentes sobre contratação, prazos e escopo.
            </p>
          </div>
        </ScrollReveal>

        {/* Compact Accordion */}
        <div className="space-y-2.5">
          {compactFaq.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-slate-950 border-blue-500 shadow-md"
                    : "bg-slate-950/70 border-slate-800/80 hover:border-slate-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-5 py-3.5 text-left flex items-center justify-between gap-3 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-blue-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-bold text-white pr-2">
                    {item.q}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-blue-600 text-white rotate-180"
                        : "bg-slate-900 text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-900/80">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Bar */}
        <div className="mt-8 p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            Tem alguma dúvida específica sobre seu projeto?
          </p>
          <a
            href={getWhatsAppUrl("Olá! Gostaria de tirar uma dúvida sobre os serviços da Cloud Creative.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-[11px] font-black uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shrink-0"
          >
            <MessageSquare className="w-3 h-3" />
            <span>Falar com a Equipe</span>
          </a>
        </div>

      </div>
    </section>
  );
};
