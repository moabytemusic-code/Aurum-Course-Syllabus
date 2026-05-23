import * as React from "react";

const Separator = React.forwardRef(
  ({ className = "", orientation = "horizontal", ...props }, ref) => (
    <div
      ref={ref}
      className={`shrink-0 bg-gradient-to-r from-transparent via-accent-gold/25 to-transparent ${
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]"
      } ${className}`}
      {...props}
    />
  )
);
Separator.displayName = "Separator";

export { Separator };
