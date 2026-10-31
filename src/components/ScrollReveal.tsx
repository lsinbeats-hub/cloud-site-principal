import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "blur-in";
  delay?: number; // ms
  duration?: number; // ms
  className?: string;
  threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  className = "",
  threshold = 0.12,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const getAnimationStyles = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      transitionProperty: "opacity, transform, filter",
      transitionDuration: `${duration}ms`,
      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      transitionDelay: `${delay}ms`,
      willChange: "opacity, transform",
    };

    if (isVisible) {
      return {
        ...baseStyle,
        opacity: 1,
        transform: "none",
        filter: "none",
      };
    }

    switch (animation) {
      case "fade-up":
        return {
          ...baseStyle,
          opacity: 0,
          transform: "translateY(36px)",
        };
      case "fade-down":
        return {
          ...baseStyle,
          opacity: 0,
          transform: "translateY(-36px)",
        };
      case "fade-left":
        return {
          ...baseStyle,
          opacity: 0,
          transform: "translateX(36px)",
        };
      case "fade-right":
        return {
          ...baseStyle,
          opacity: 0,
          transform: "translateX(-36px)",
        };
      case "zoom-in":
        return {
          ...baseStyle,
          opacity: 0,
          transform: "scale(0.92)",
        };
      case "blur-in":
        return {
          ...baseStyle,
          opacity: 0,
          transform: "scale(0.97)",
          filter: "blur(8px)",
        };
      default:
        return {
          ...baseStyle,
          opacity: 0,
          transform: "translateY(30px)",
        };
    }
  };

  return (
    <div ref={elementRef} style={getAnimationStyles()} className={className}>
      {children}
    </div>
  );
};
