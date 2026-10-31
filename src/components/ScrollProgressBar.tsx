import React, { useState, useEffect } from "react";

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) {
        setScrollProgress(0);
        return;
      }
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-1.5 bg-black/40 backdrop-blur-xs pointer-events-none"
      role="progressbar"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progresso de rolagem da página"
    >
      <div
        className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-300 transition-all duration-75 ease-out rounded-r-full shadow-[0_0_12px_rgba(56,189,248,0.9)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
