"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

const AccordionContext = React.createContext(null);

const Accordion = ({ children, type = "single", collapsible = true, defaultValue, ...props }) => {
  const [activeItems, setActiveItems] = React.useState(
    defaultValue ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : []
  );

  const toggleItem = React.useCallback(
    (value) => {
      setActiveItems((prev) => {
        if (type === "single") {
          const isActive = prev.includes(value);
          if (isActive) {
            return collapsible ? [] : prev;
          }
          return [value];
        } else {
          const isActive = prev.includes(value);
          if (isActive) {
            return prev.filter((item) => item !== value);
          }
          return [...prev, value];
        }
      });
    },
    [type, collapsible]
  );

  return (
    <AccordionContext.Provider value={{ activeItems, toggleItem }}>
      <div className="space-y-4" {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = React.forwardRef(({ className = "", value, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`rounded-2xl border border-[rgba(232,198,112,0.12)] bg-card overflow-hidden transition-all duration-300 hover:border-accent-gold/30 ${className}`}
      {...props}
    >
      <AccordionContext.Consumer>
        {(context) => {
          if (!context) throw new Error("AccordionItem must be used within Accordion");
          const isExpanded = context.activeItems.includes(value);
          return React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, { value, isExpanded });
            }
            return child;
          });
        }}
      </AccordionContext.Consumer>
    </div>
  );
});
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className = "", children, value, isExpanded, ...props }, ref) => {
    const context = React.useContext(AccordionContext);
    if (!context) throw new Error("AccordionTrigger must be used within AccordionItem");

    return (
      <button
        ref={ref}
        type="button"
        onClick={() => context.toggleItem(value)}
        className={`flex w-full items-center justify-between px-6 py-5 md:px-8 text-left font-serif text-lg md:text-xl font-bold text-accent-gold transition-all hover:text-gold-dark cursor-pointer ${className}`}
        {...props}
      >
        {children}
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-text-secondary transition-transform duration-300 ${
            isExpanded ? "rotate-180 text-accent-gold" : ""
          }`}
        />
      </button>
    );
  }
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(
  ({ className = "", children, isExpanded, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-[5000px] border-t border-[rgba(232,198,112,0.08)] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden`}
        {...props}
      >
        <div className={`p-6 md:p-8 pt-6 ${className}`}>{children}</div>
      </div>
    );
  }
);
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
