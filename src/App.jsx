import React, { useState } from 'react';
import CourseLayout from './components/CourseLayout';
import PresentationViewer from './components/PresentationViewer';
import { MonitorPlay } from 'lucide-react';
import './App.css';

function App() {
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('aurum-theme') || 'aurum');

  React.useEffect(() => {
    document.body.className = `theme-${theme}`;
    localStorage.setItem('aurum-theme', theme);
  }, [theme]);

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
            padding: '0.75rem 1.5rem',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer',
            zIndex: 100,
            transition: 'all 0.2s',
            fontSize: '1rem',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(251, 191, 36, 0.4)'
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <MonitorPlay size={20} /> Enter Presentation Mode
        </button>
      )}

      {isPresentationMode ? (
        <PresentationViewer 
          onExit={() => setIsPresentationMode(false)} 
          theme={theme}
          setTheme={setTheme}
        />
      ) : (
        <CourseLayout 
          theme={theme}
          setTheme={setTheme}
        />
      )}
    </>
  );
}

export default App;
