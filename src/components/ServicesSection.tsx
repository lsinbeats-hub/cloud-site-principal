import React from "react";
import {
  SITES_PACKAGES,
  SITES_MAINTENANCE,
  CHATBOT_PACKAGES,
  GOOGLE_PACKAGES,
  SOCIAL_PACKAGES,
  getWhatsAppUrl,
} from "../config/agency.ts";
import { Check, ArrowRight, Laptop, Bot, Search, Palette, AlertCircle } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal.tsx";

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicos" className="bg-black text-white py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ============================================================ */}
        {/* SERVIÇO 01 — CRIAÇÃO DE SITES */}
        {/* ============================================================ */}
        <div id="sites" className="pt-2">
          
          <ScrollReveal animation="fade-up" delay={60}>
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-blue-400 mb-1.5">
                <Laptop className="w-3.5 h-3.5 text-blue-500" />
                <span>SERVIÇO 01 · DESENVOLVIMENTO WEB</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                Criação de Websites & Landing Pages
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                Páginas de alta conversão com design exclusivo, arquitetura pensada para vendas e facilidade para contato ou pedidos pelo WhatsApp.
              </p>
            </div>
          </ScrollReveal>

          {/* Pricing Cards com Tamanho Reduzido */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
            {SITES_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between p-4 sm:p-4.5 rounded-xl transition-all duration-200 ${
                  pkg.recommended
                    ? "bg-slate-950 border-2 border-blue-500 shadow-lg shadow-blue-500/10"
                    : "bg-slate-950 border border-slate-800/90 hover:border-slate-700"
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-blue-600 text-white text-[8px] font-black uppercase tracking-widest rounded-full shadow-xs">
                    {pkg.badge || "Mais Escolhido"}
                  </div>
                )}

                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-bold text-white leading-tight">{pkg.name}</h3>
                    <span className="text-[9px] font-semibold text-slate-400 bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded shrink-0">
                      {pkg.deliveryTime}
                    </span>
                  </div>

                  <div className="mt-2 mb-2">
                    <span className="text-xl sm:text-2xl font-black text-white tracking-tight font-mono">
                      {pkg.price}
                    </span>
                    <span className="text-[10px] text-slate-400 ml-1.5">investimento único</span>
                  </div>

                  <p className="text-[11px] text-slate-300 leading-relaxed mb-3 font-normal">
                    {pkg.description}
                  </p>

                  <div className="pt-2.5 border-t border-slate-800/80">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Itens inclusos no projeto:
                    </p>
                    <ul className="space-y-1.5">
                      {pkg.features.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                          <Check className="w-3 h-3 text-blue-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-2.5 border-t border-slate-900">
                  <a
                    href={getWhatsAppUrl(`Olá! Tenho interesse na contratação do ${pkg.name} (${pkg.price}) com a Cloud Creative.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all ${
                      pkg.recommended
                        ? "bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-600/20"
                        : "bg-white text-black hover:bg-slate-200"
                    }`}
                  >
                    <span>Quero criar meu site</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Manutenção de Sites (Moldura Menor) */}
          <div className="mt-5 p-4 rounded-xl bg-slate-950 border border-slate-800/90">
            <div className="max-w-xl mb-3">
              <span className="text-[9px] font-bold uppercase tracking-widest text-blue-400">
                SERVIÇO OPCIONAL · CONTRATADO À PARTE
              </span>
              <h3 className="text-base font-bold text-white mt-0.5">
                Planos de manutenção de sites
              </h3>
              <p className="text-[11px] text-slate-400">
                Mantenha seu site sempre atualizado e verificado todo mês.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
              {SITES_MAINTENANCE.map((m) => (
                <div
                  key={m.id}
                  className={`p-3 rounded-lg bg-black border ${
                    m.recommended ? "border-blue-500/80" : "border-slate-800"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white text-xs">{m.name}</span>
                    {m.recommended && (
                      <span className="text-[8px] font-bold text-blue-400 bg-blue-950 px-1 py-0.5 rounded-xs">
                        Recomendado
                      </span>
                    )}
                  </div>

                  <div className="text-lg font-black text-white font-mono mb-0.5">
                    {m.price}
                  </div>

                  <div className="text-[10px] text-blue-400 font-semibold mb-2">
                    {m.hours}
                  </div>

                  <ul className="space-y-1 border-t border-slate-900 pt-1.5">
                    {m.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-[10px] text-slate-300">
                        <Check className="w-2.5 h-2.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-900 flex items-start gap-2 text-[10px] text-slate-400">
              <AlertCircle className="w-3 h-3 text-blue-400 shrink-0 mt-0.5" />
              <p>
                As horas não acumulam. Novas páginas, reformulações completas e excedentes são orçados à parte.
              </p>
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* SERVIÇO 02 — CHATBOTS PARA ATENDIMENTO */}
        {/* ============================================================ */}
        <div id="chatbots" className="pt-2 border-t border-slate-900">
          
          <ScrollReveal animation="fade-up" delay={60}>
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-blue-400 mb-1.5">
                <Bot className="w-3.5 h-3.5 text-blue-500" />
                <span>SERVIÇO 02 · AUTOMAÇÃO DE ATENDIMENTO</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                Chatbots Inteligentes para WhatsApp
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                Atendimento organizado e ágil 24/7. Automatize a triagem, esclareça dúvidas frequentes e direcione clientes qualificados.
              </p>
            </div>
          </ScrollReveal>

          {/* Pricing Cards com Tamanho Reduzido */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
            {CHATBOT_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between p-4 sm:p-4.5 rounded-xl transition-all duration-200 ${
                  pkg.recommended
                    ? "bg-slate-950 border-2 border-blue-500 shadow-lg shadow-blue-500/10"
                    : "bg-slate-950 border border-slate-800/90 hover:border-slate-700"
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-blue-600 text-white text-[8px] font-black uppercase tracking-widest rounded-full shadow-xs">
                    {pkg.badge || "IA Avançada"}
                  </div>
                )}

                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-white leading-tight">{pkg.name}</h3>
                      <span className="text-[10px] text-blue-400 font-semibold mt-0.5 block">
                        {pkg.id === "bot-ia" ? "Com Inteligência Artificial" : "Menu Estruturado de Opções"}
                      </span>
                    </div>
                    <span className="text-[9px] font-semibold text-slate-400 bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded shrink-0">
                      Implantação: {pkg.deliveryTime}
                    </span>
                  </div>

                  <div className="mt-2 mb-2">
                    <span className="text-xl sm:text-2xl font-black text-white tracking-tight font-mono">
                      {pkg.price}
                    </span>
                    <span className="text-[10px] text-slate-400 ml-1.5">implantação única</span>
                  </div>

                  <p className="text-[11px] text-slate-300 leading-relaxed mb-3 font-normal">
                    {pkg.description}
                  </p>

                  <div className="pt-2.5 border-t border-slate-800/80">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Recursos inclusos na implantação:
                    </p>
                    <ul className="space-y-1.5">
                      {pkg.features.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                          <Check className="w-3 h-3 text-blue-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3.5 p-2.5 rounded-lg bg-black border border-slate-900 text-[10px]">
                    <span className="font-bold text-white block">
                      Manutenção opcional: {pkg.id === "bot-ia" ? "R$ 200/mês" : "R$ 100/mês"}
                    </span>
                    <span className="text-slate-400 block mt-0.5">
                      {pkg.id === "bot-ia"
                        ? "Suporte em dias úteis, atualização semanal e revisão da IA."
                        : "Suporte semanal e atualização mensal de informações."}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-2.5 border-t border-slate-900">
                  <a
                    href={getWhatsAppUrl(`Olá! Tenho interesse na contratação do ${pkg.name} (${pkg.price}) da Cloud Creative.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all ${
                      pkg.recommended
                        ? "bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-600/20"
                        : "bg-white text-black hover:bg-slate-200"
                    }`}
                  >
                    <span>Quero automatizar meu atendimento</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 pt-2 flex items-start gap-1.5 text-[10px] text-slate-400">
            <AlertCircle className="w-3 h-3 text-blue-400 shrink-0 mt-0.5" />
            <p>
              Consumo de tokens de IA, plataformas e taxas oficiais do WhatsApp cobrados separadamente quando aplicáveis.
            </p>
          </div>

        </div>

        {/* ============================================================ */}
        {/* SERVIÇO 03 — PERFIL DA EMPRESA NO GOOGLE */}
        {/* ============================================================ */}
        <div id="google" className="pt-2 border-t border-slate-900">
          
          <ScrollReveal animation="fade-up" delay={60}>
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-blue-400 mb-1.5">
                <Search className="w-3.5 h-3.5 text-blue-500" />
                <span>SERVIÇO 03 · VISIBILIDADE LOCAL</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                Perfil da Empresa no Google & Maps
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                Destaque sua empresa na Busca e no Google Maps para que clientes encontrem seu telefone, rotas e horários com agilidade.
              </p>
            </div>
          </ScrollReveal>

          {/* Pricing Cards com Tamanho Reduzido */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
            {GOOGLE_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="flex flex-col justify-between p-4 sm:p-4.5 rounded-xl bg-slate-950 border border-slate-800/90 hover:border-blue-500/80 transition-all duration-200"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-bold text-white leading-tight">{pkg.name}</h3>
                    <span className="text-[9px] font-semibold text-slate-400 bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded shrink-0">
                      {pkg.deliveryTime}
                    </span>
                  </div>

                  <div className="mt-2 mb-2">
                    <span className="text-xl sm:text-2xl font-black text-white tracking-tight font-mono">
                      {pkg.price}
                    </span>
                    <span className="text-[10px] text-slate-400 ml-1.5">taxa única de configuração</span>
                  </div>

                  <p className="text-[11px] text-slate-300 leading-relaxed mb-3 font-normal">
                    {pkg.description}
                  </p>

                  <div className="pt-2.5 border-t border-slate-800/80">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Itens inclusos no serviço:
                    </p>
                    <ul className="space-y-1.5">
                      {pkg.features.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                          <Check className="w-3 h-3 text-blue-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-2.5 border-t border-slate-900">
                  <a
                    href={getWhatsAppUrl(`Olá! Tenho interesse no serviço de ${pkg.name} (${pkg.price}) para o Perfil no Google com a Cloud Creative.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-[11px] font-bold uppercase tracking-wider bg-white text-black hover:bg-slate-200 transition-all"
                  >
                    <span>Quero melhorar meu perfil no Google</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 pt-2 flex items-start gap-1.5 text-[10px] text-slate-400">
            <AlertCircle className="w-3 h-3 text-blue-400 shrink-0 mt-0.5" />
            <p>
              Sem cobrança mensal. A verificação final segue as diretrizes oficiais do Google.
            </p>
          </div>

        </div>

        {/* ============================================================ */}
        {/* SERVIÇO 04 — CRIAÇÃO DE ARTES PARA REDES SOCIAIS */}
        {/* ============================================================ */}
        <div id="artes" className="pt-2 border-t border-slate-900">
          
          <ScrollReveal animation="fade-up" delay={60}>
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-blue-400 mb-1.5">
                <Palette className="w-3.5 h-3.5 text-blue-500" />
                <span>SERVIÇO 04 · DESIGN ESTRATÉGICO</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                Criação de Artes para Redes Sociais
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                Design que gera retenção e valoriza suas ofertas. Peças estáticas sob medida para feed e Stories para divulgar produtos e promoções.
              </p>
            </div>
          </ScrollReveal>

          {/* Pricing Cards com Tamanho Reduzido */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
            {SOCIAL_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between p-4 sm:p-4.5 rounded-xl transition-all duration-200 ${
                  pkg.recommended
                    ? "bg-slate-950 border-2 border-blue-500 shadow-lg shadow-blue-500/10"
                    : "bg-slate-950 border border-slate-800/90 hover:border-slate-700"
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-blue-600 text-white text-[8px] font-black uppercase tracking-widest rounded-full shadow-xs">
                    {pkg.badge || "Mais Pedido"}
                  </div>
                )}

                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-bold text-white leading-tight">{pkg.name}</h3>
                    <span className="text-[9px] font-semibold text-slate-400 bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded shrink-0">
                      {pkg.deliveryTime}
                    </span>
                  </div>

                  <div className="mt-2 mb-2">
                    <span className="text-xl sm:text-2xl font-black text-white tracking-tight font-mono">
                      {pkg.price}
                    </span>
                    <span className="text-[10px] text-slate-400 ml-1.5">por pacote</span>
                  </div>

                  <p className="text-[11px] text-slate-300 leading-relaxed mb-3 font-normal">
                    {pkg.description}
                  </p>

                  <div className="pt-2.5 border-t border-slate-800/80">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Incluso no pedido:
                    </p>
                    <ul className="space-y-1.5">
                      {pkg.features.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                          <Check className="w-3 h-3 text-blue-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-2.5 border-t border-slate-900">
                  <a
                    href={getWhatsAppUrl(`Olá! Tenho interesse na contratação de ${pkg.name} (${pkg.price}) para redes sociais com a Cloud Creative.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all ${
                      pkg.recommended
                        ? "bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-600/20"
                        : "bg-white text-black hover:bg-slate-200"
                    }`}
                  >
                    <span>Quero minhas artes</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 pt-2 flex items-start gap-1.5 text-[10px] text-slate-400">
            <AlertCircle className="w-3 h-3 text-blue-400 shrink-0 mt-0.5" />
            <p>
              Arquivos entregues em PNG/JPG de alta definição com uma rodada de ajustes simples. Não inclui vídeos ou logotipos.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
