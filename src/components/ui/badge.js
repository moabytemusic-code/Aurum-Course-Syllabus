import * as React from "react";

function Badge({ className = "", variant = "default", ...props }) {
  const variants = {
    default: "bg-accent-gold/10 border-accent-gold/30 text-accent-gold hover:bg-accent-gold/20",
    secondary: "bg-card border-[rgba(232,198,112,0.12)] text-text-secondary hover:text-text-primary",
    gold: "bg-gradient-to-r from-accent-gold to-gold-dark text-background border-none hover:opacity-90 font-bold",
    outline: "border-[rgba(232,198,112,0.2)] text-accent-gold hover:bg-accent-gold/10",
  };

  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-accent-gold ${variants[variant]} ${className}`}
      {...props}
    />
  );
}

export { Badge };
