import React from "react";
import { Badge } from "./ui/badge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-accent-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-gold-dark/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-5xl px-6 md:px-8 text-center relative z-10">
        <Badge variant="outline" className="mb-6 uppercase tracking-widest text-xs py-1 px-4 border-accent-gold/30 bg-accent-gold/5">
          Aurum Education Portal
        </Badge>
        
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F0EDE6] leading-[1.15] max-w-4xl mx-auto">
          The Automated <span className="bg-gradient-to-r from-accent-gold to-gold-dark bg-clip-text text-transparent">Wealth Engine</span>
        </h1>
        
        <p className="mt-4 font-serif text-xl sm:text-2xl text-accent-gold/80 italic font-medium max-w-3xl mx-auto">
          How to Bridge Fiat, AI Trading, and Vaulted Gold
        </p>

        <div className="mt-8 flex justify-center">
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-accent-gold to-transparent" />
        </div>

        <p className="mt-8 text-base sm:text-lg md:text-xl text-[#A8B2C8] max-w-3xl mx-auto font-sans leading-relaxed">
          A simple, secure guide to generating automated yield while keeping 100% control of your capital. Explore modules on AI trading bots, tokenomics, staking models, and affiliate networks.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a href="#curriculum">
            <button className="h-11 px-6 rounded-xl text-sm font-sans font-bold bg-gradient-to-r from-accent-gold to-gold-dark text-[#0A1428] hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer shadow-lg">
              Explore Curriculum
            </button>
          </a>
          <a href="#projects">
            <button className="h-11 px-6 rounded-xl text-sm font-sans font-bold border border-accent-gold text-accent-gold hover:bg-accent-gold/10 active:scale-[0.98] transition-all cursor-pointer">
              View AI Products
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
