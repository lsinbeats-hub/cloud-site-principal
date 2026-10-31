import React, { useState, useEffect } from "react";
import { BrandLogo } from "./BrandLogo.tsx";
import { getWhatsAppUrl } from "../config/agency.ts";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Quando rolar a página além do topo, o cabeçalho some suavemente
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Criação de Sites", href: "#sites" },
    { name: "Chatbots", href: "#chatbots" },
    { name: "Perfil no Google", href: "#google" },
    { name: "Artes", href: "#artes" },
    { name: "Instagram", href: "#instagram" },
    { name: "Dúvidas", href: "#faq" },
  ];

  return (
    <header
      style={{
        backgroundColor: "rgba(56, 139, 217, 0.94)",
        marginTop: "-37px",
        height: "89.0868px",
        transform: scrolled ? "translateY(-140%)" : "translateY(0)",
        opacity: scrolled ? 0 : 1,
        pointerEvents: scrolled ? "none" : "auto",
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-lg shadow-blue-500/25 border-b border-white/20 py-2.5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Apenas a Logo integrada perfeitamente ao fundo azul do cabeçalho */}
          <a
            href="#hero"
            className="flex items-center whitespace-nowrap shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white rounded-xl p-0.5"
            aria-label="Cloud Creative"
          >
            <BrandLogo
              size="lg"
              theme="blue"
              showText={false}
              imgStyle={{
                marginTop: "10px",
                transform: "scale(1.2)",
                transformOrigin: "left center",
              }}
            />
          </a>

          {/* Clean single-line service links com divisores "|" em branco */}
          <nav className="hidden lg:flex items-center gap-4 text-sm font-black uppercase tracking-wider text-white">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.name}>
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    fontSize: "14px",
                    marginTop: "16px",
                  }}
                  className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-black focus-visible:outline-hidden focus-visible:text-black drop-shadow-xs"
                >
                  {link.name}
                </a>
                {index < navLinks.length - 1 && (
                  <span
                    style={{
                      fontSize: "14px",
                      marginTop: "16px",
                    }}
                    className="text-white select-none opacity-80 font-normal"
                    aria-hidden="true"
                  >
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Botão de Ação no WhatsApp em preto com alto contraste sobre o azul */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppUrl("Olá! Gostaria de conversar com a Cloud Creative sobre as soluções digitais para minha empresa.")}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: "13px",
                fontSize: "13px",
                paddingTop: "9px",
                paddingLeft: "21px",
                height: "35.9896px",
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-black uppercase tracking-wider rounded-xl bg-black hover:bg-neutral-900 text-white shadow-xl transition-all whitespace-nowrap shrink-0 hover:scale-105 active:scale-95"
            >
              <span>Falar no WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-blue-300" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-white hover:bg-black/15 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer com fundo azul #388BD9 */}
      {mobileMenuOpen && (
        <div style={{ backgroundColor: "#388BD9" }} className="lg:hidden border-b border-[#2979c5] px-4 pt-3 pb-6 shadow-2xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-black text-white hover:bg-black/15 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-white/20">
              <a
                href={getWhatsAppUrl("Olá! Gostaria de solicitar um orçamento com a Cloud Creative.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-black uppercase tracking-wider rounded-xl bg-black hover:bg-neutral-900 text-white shadow-xl text-center"
              >
                <span>Falar no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-blue-300" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
