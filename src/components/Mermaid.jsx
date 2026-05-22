import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

// Initialize Mermaid with custom styles matching the Aurum theme
mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
  fontFamily: 'Outfit, sans-serif',
  themeVariables: {
    background: 'rgba(20, 20, 31, 0.6)',
    primaryColor: '#8b5cf6', // purple
    primaryTextColor: '#ffffff',
    primaryBorderColor: 'rgba(255, 255, 255, 0.1)',
    lineColor: '#60a5fa', // blue
    secondaryColor: '#fbbf24', // gold
    tertiaryColor: '#10b981', // green
    actorBorder: 'rgba(255, 255, 255, 0.2)',
    actorBkg: 'rgba(139, 92, 246, 0.1)',
    actorTextColor: '#ffffff',
    signalColor: '#60a5fa',
    signalTextColor: '#94a3b8'
  }
});

let mermaidIdCounter = 0;

const Mermaid = ({ chart }) => {
  const [svg, setSvg] = useState('');
  const [error, setError] = useState(null);
  const elementId = useRef(`mermaid-diagram-${++mermaidIdCounter}`);

  useEffect(() => {
    let isMounted = true;
    
    const renderDiagram = async () => {
      try {
        setError(null);
        // React 18/19 double-rendering can cause conflicts if we don't use unique IDs
        const uniqueId = `${elementId.current}-${Math.random().toString(36).substr(2, 9)}`;
        
        // mermaid.render will generate the SVG code
        const { svg: renderedSvg } = await mermaid.render(uniqueId, chart);
        
        if (isMounted) {
          setSvg(renderedSvg);
        }
      } catch (err) {
        console.error('Mermaid render error:', err);
        // Clear any leftover elements created by mermaid rendering
        const badElem = document.getElementById(elementId.current);
        if (badElem) badElem.remove();
        
        if (isMounted) {
          setError(err.message || 'Failed to parse/render diagram');
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
      <div style={{
        color: '#fca5a5',
        border: '1px solid rgba(239, 68, 68, 0.3)',
        padding: '1rem',
        borderRadius: '8px',
        background: 'rgba(239, 68, 68, 0.05)',
        fontSize: '0.9rem',
        margin: '1.5rem 0',
        fontFamily: 'monospace',
        whiteSpace: 'pre-wrap',
        overflowX: 'auto'
      }}>
        <strong>Diagram rendering failed:</strong>
        <pre style={{ marginTop: '0.5rem', opacity: 0.8 }}>{chart}</pre>
      </div>
    );
  }

  if (!svg) {
    return (
      <div style={{
        padding: '1.5rem',
        textAlign: 'center',
        color: 'var(--text-secondary)',
        fontSize: '0.95rem',
        background: 'rgba(20, 20, 31, 0.3)',
        borderRadius: '12px',
        border: '1px solid var(--glass-border)',
        margin: '1.5rem 0'
      }}>
        Generating visual diagram...
      </div>
    );
  }

  return (
    <div 
      className="mermaid-svg-container"
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        padding: '2rem 1.5rem', 
        background: 'rgba(20, 20, 31, 0.4)', 
        borderRadius: '16px', 
        border: '1px solid var(--glass-border)',
        margin: '2rem 0',
        overflowX: 'auto',
        boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.2)'
      }} 
      dangerouslySetInnerHTML={{ __html: svg }} 
    />
  );
};

export default Mermaid;
