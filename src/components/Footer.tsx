import React from "react";
import { BrandLogo } from "./BrandLogo.tsx";
import { AGENCY_CONFIG, getWhatsAppUrl } from "../config/agency.ts";
import { MessageSquare, Instagram, Mail, ArrowUpRight, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-slate-300 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand Info (Cols 5) */}
          <div className="lg:col-span-5">
            <a href="#hero" className="inline-block mb-3">
              <BrandLogo size="md" theme="dark" imgStyle={{ marginLeft: "-50px" }} />
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mb-5 font-normal">
              A <strong>Cloud Creative</strong> é uma agência de soluções digitais para empresas. Desenvolvemos sites de alto padrão, chatbots para WhatsApp, configuração do Perfil no Google e artes para redes sociais.
            </p>

            <div className="flex items-center gap-2.5">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-neutral-900 hover:bg-white hover:text-black text-white border border-white/10 transition-colors"
                title="WhatsApp Oficial"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={AGENCY_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-neutral-900 hover:bg-white hover:text-black text-white border border-white/10 transition-colors"
                title="Instagram Oficial"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${AGENCY_CONFIG.email}`}
                className="p-2 rounded-xl bg-neutral-900 hover:bg-white hover:text-black text-white border border-white/10 transition-colors"
                title="E-mail"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Cols 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Soluções Oficiais
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#sites" className="hover:text-white transition-colors">
                  Criação de Sites
                </a>
              </li>
              <li>
                <a href="#chatbots" className="hover:text-white transition-colors">
                  Chatbots para Atendimento
                </a>
              </li>
              <li>
                <a href="#google" className="hover:text-white transition-colors">
                  Perfil no Google & Maps
                </a>
              </li>
              <li>
                <a href="#artes" className="hover:text-white transition-colors">
                  Artes para Redes Sociais
                </a>
              </li>
              <li>
                <a href="#instagram" className="hover:text-blue-400 transition-colors">
                  Galeria Instagram
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400 transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact (Cols 4) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Atendimento Comercial
            </h4>
            <div className="space-y-2.5 text-xs">
              <div>
                <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">WhatsApp Oficial:</span>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-white font-bold hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 mt-0.5 text-sm"
                >
                  <span>{AGENCY_CONFIG.whatsappDisplay}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

              <div>
                <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">Instagram Oficial:</span>
                <a
                  href={AGENCY_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1 mt-0.5"
                >
                  <span>@{AGENCY_CONFIG.instagramUsername}</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("Olá! Gostaria de pedir um orçamento com a Cloud Creative.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-slate-200 rounded-xl font-bold uppercase tracking-wider text-xs transition-colors shadow-md"
                >
                  <span>Solicitar Orçamento</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Scope */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="flex items-start gap-2 max-w-2xl text-left">
            <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <p>
              {AGENCY_CONFIG.disclaimer} Todos os direitos reservados.
            </p>
          </div>

          <div className="shrink-0 text-slate-400 font-mono">
            © {currentYear} {AGENCY_CONFIG.name}.
          </div>
        </div>

      </div>
    </footer>
  );
};
