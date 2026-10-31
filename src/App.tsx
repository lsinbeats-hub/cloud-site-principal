import React, { useState, useEffect } from "react";
import { Header } from "./components/Header.tsx";
import { Hero } from "./components/Hero.tsx";
import { AboutSection } from "./components/AboutSection.tsx";
import { WhyChooseUs } from "./components/WhyChooseUs.tsx";
import { ServicesSection } from "./components/ServicesSection.tsx";
import { ProcessSection } from "./components/ProcessSection.tsx";
import { InstagramGallery } from "./components/InstagramGallery.tsx";
import { FAQSection } from "./components/FAQSection.tsx";
import { CTASection } from "./components/CTASection.tsx";
import { Footer } from "./components/Footer.tsx";
import { ScrollProgressBar } from "./components/ScrollProgressBar.tsx";
import { ImageProvider } from "./context/ImageContext.tsx";
import { ImageManagerModal } from "./components/ImageManagerModal.tsx";
import { getWhatsAppUrl } from "./config/agency.ts";
import { MessageSquare, ArrowUp } from "lucide-react";

function MainContent() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white antialiased">
      {/* Top Real-time Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Top Bar Header (Disappears when scrolling down) */}
      <Header />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section with 3D Emblem & Electric Blue Marquee */}
        <Hero />

        {/* About Section (Split layout with capabilities & collaboration media) */}
        <AboutSection />

        {/* Why Choose Us (Metrics & Guarantee Card) */}
        <WhyChooseUs />

        {/* The 4 Official Cloud Creative Solutions (Sites, Chatbots, Google, Artes) */}
        <ServicesSection />

        {/* Metodologia de Início (3-Step Process) */}
        <ProcessSection />

        {/* Galeria do Instagram Oficial */}
        <InstagramGallery />

        {/* Compact FAQ Section */}
        <FAQSection />

        {/* Final CTA Banner */}
        <CTASection />
      </main>

      {/* Official Footer */}
      <Footer />

      {/* Modal de Personalização e Troca de Todas as Imagens */}
      <ImageManagerModal />

      {/* Floating WhatsApp Quick Action Button (Bottom-Right) */}

      {/* Floating WhatsApp Quick Action Button (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="p-3 bg-slate-900/90 backdrop-blur-md text-slate-300 hover:text-white hover:bg-slate-800 rounded-full shadow-xl border border-slate-700 transition-all duration-200 hover:-translate-y-1 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <a
          href={getWhatsAppUrl("Olá! Gostaria de conversar com a Cloud Creative sobre as soluções digitais para minha empresa.")}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white p-3.5 sm:px-5 sm:py-3 rounded-full shadow-2xl shadow-blue-600/40 transition-all duration-200 hover:scale-105 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-400"
          aria-label="Falar no WhatsApp com a Cloud Creative"
        >
          <MessageSquare className="w-4 h-4 shrink-0" />
          <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider whitespace-nowrap">
            Falar no WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ImageProvider>
      <MainContent />
    </ImageProvider>
  );
}
