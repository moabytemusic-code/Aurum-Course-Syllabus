"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(232,198,112,0.3)] bg-[#13223F]/80 backdrop-blur-md text-accent-gold shadow-2xl transition-all duration-300 hover:bg-accent-gold hover:text-[#0A1428] hover:scale-110 active:scale-95 cursor-pointer"
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}
