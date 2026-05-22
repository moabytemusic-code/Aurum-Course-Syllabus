import React, { useState } from 'react';
import CourseLayout from './components/CourseLayout';
import PresentationViewer from './components/PresentationViewer';
import { MonitorPlay } from 'lucide-react';
import './App.css';

function App() {
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('aurum-theme') || 'slate');
  const [textScale, setTextScale] = useState(() => localStorage.getItem('aurum-text-scale') || 'medium');
  const [glowEnabled, setGlowEnabled] = useState(() => {
    const saved = localStorage.getItem('aurum-glow-enabled');
    return saved === null ? true : saved === 'true';
  });

  React.useEffect(() => {
    const presentationClass = isPresentationMode ? 'presentation-mode' : '';
    document.body.className = `theme-${theme} text-scale-${textScale} ${glowEnabled ? '' : 'glow-disabled'} ${presentationClass}`;
    localStorage.setItem('aurum-theme', theme);
    localStorage.setItem('aurum-text-scale', textScale);
    localStorage.setItem('aurum-glow-enabled', String(glowEnabled));
  }, [theme, textScale, glowEnabled, isPresentationMode]);

  return (
    <>
      <div className="app-background"></div>
      
      {/* Global toggle button available in Course Layout mode */}
      {!isPresentationMode && (
        <button
          onClick={() => setIsPresentationMode(true)}
          style={{
            position: 'fixed',
            top: '2rem',
            right: '2rem',
            background: 'var(--accent-gold)',
            color: '#000',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            cursor: 'pointer',
            zIndex: 100,
            transition: 'all 0.2s',
            fontSize: '0.85rem',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(251, 191, 36, 0.4)'
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <MonitorPlay size={16} /> Enter Presentation Mode
        </button>
      )}

      {isPresentationMode ? (
        <PresentationViewer 
          onExit={() => setIsPresentationMode(false)} 
          theme={theme}
          setTheme={setTheme}
          textScale={textScale}
          setTextScale={setTextScale}
          glowEnabled={glowEnabled}
          setGlowEnabled={setGlowEnabled}
        />
      ) : (
        <CourseLayout 
          theme={theme}
          setTheme={setTheme}
          textScale={textScale}
          setTextScale={setTextScale}
          glowEnabled={glowEnabled}
          setGlowEnabled={setGlowEnabled}
        />
      )}
    </>
  );
}

export default App;
