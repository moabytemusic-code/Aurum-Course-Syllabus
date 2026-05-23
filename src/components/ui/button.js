import * as React from "react";

const Button = React.forwardRef(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const Comp = "button";

    const variants = {
      default: "bg-gradient-to-r from-accent-gold to-gold-dark text-[#0A1428] font-bold shadow-lg hover:brightness-110 active:scale-[0.98]",
      outline: "border-2 border-accent-gold text-accent-gold font-bold hover:bg-accent-gold/10 active:scale-[0.98]",
      ghost: "text-[#A8B2C8] hover:text-[#F0EDE6] hover:bg-card/50",
      link: "text-accent-gold underline-offset-4 hover:underline",
      gold: "bg-accent-gold/10 border border-accent-gold/20 text-accent-gold hover:bg-accent-gold/20 font-bold",
    };

    const sizes = {
      default: "h-11 px-6 py-2 rounded-xl text-sm md:text-base",
      sm: "h-9 rounded-lg px-4 text-xs md:text-sm",
      lg: "h-12 rounded-xl px-8 text-base md:text-lg",
      icon: "h-10 w-10 rounded-lg",
    };

    return (
      <Comp
        className={`inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold disabled:pointer-events-none disabled:opacity-50 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
