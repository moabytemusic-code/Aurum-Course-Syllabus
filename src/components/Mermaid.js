"use client";

import { useEffect, useRef, useState } from "react";

let mermaidIdCounter = 0;

export default function Mermaid({ chart }) {
  const [svg, setSvg] = useState("");
  const [error, setError] = useState(null);
  const elementId = useRef(`mermaid-diagram-${++mermaidIdCounter}`);

  useEffect(() => {
    let isMounted = true;
    
    const renderDiagram = async () => {
      try {
        setError(null);
        // Load mermaid dynamically on the client side to avoid SSR errors
        const mermaid = (await import("mermaid")).default;
        
        mermaid.initialize({
          startOnLoad: false,
          theme: "dark",
          securityLevel: "loose",
          fontFamily: "var(--font-sans), sans-serif",
          themeVariables: {
            background: "transparent",
            primaryColor: "#D4AF37", // gold
            primaryTextColor: "#F0EDE6",
            primaryBorderColor: "rgba(232, 198, 112, 0.2)",
            lineColor: "#E8C670", // accent gold
            secondaryColor: "transparent",
            tertiaryColor: "#10b981", // green
            actorBorder: "rgba(232, 198, 112, 0.3)",
            actorBkg: "rgba(19, 34, 63, 0.8)",
            actorTextColor: "#F0EDE6",
            signalColor: "#E8C670",
            signalTextColor: "#A8B2C8"
          }
        });

        const uniqueId = `${elementId.current}-${Math.random().toString(36).substr(2, 9)}`;
        const { svg: renderedSvg } = await mermaid.render(uniqueId, chart);
        
        if (isMounted) {
          setSvg(renderedSvg);
        }
      } catch (err) {
        console.error("Mermaid render error:", err);
        const badElem = document.getElementById(elementId.current);
        if (badElem) badElem.remove();
        
        if (isMounted) {
          setError(err.message || "Failed to parse/render diagram");
        }
      }
    };

    renderDiagram();
    
    return () => {
      isMounted = false;
    };
  }, [chart]);

  if (error) {
    return (
      <div className="text-red-300 border border-red-900/50 p-4 rounded-xl bg-red-950/20 text-sm my-6 font-mono whitespace-pre-wrap overflow-x-auto">
        <strong>Diagram rendering failed:</strong>
        <pre className="mt-2 opacity-80">{chart}</pre>
      </div>
    );
  }

  if (!svg) {
    return (
      <div className="p-6 text-center text-text-secondary text-sm bg-card/30 rounded-2xl border border-[rgba(232,198,112,0.12)] my-6">
        Generating visual diagram...
      </div>
    );
  }

  return (
    <div 
      className="mermaid-svg-container flex justify-center p-8 bg-card/40 rounded-2xl border border-[rgba(232,198,112,0.12)] my-8 overflow-x-auto shadow-inner"
      dangerouslySetInnerHTML={{ __html: svg }} 
    />
  );
}
