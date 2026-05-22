import React from 'react';

const themes = [
  { id: 'aurum', name: 'Aurum Premium', color1: '#fbbf24', color2: '#8b5cf6' },
  { id: 'emerald', name: 'Cyber Emerald', color1: '#10b981', color2: '#06b6d4' },
  { id: 'ruby', name: 'Obsidian Ruby', color1: '#ef4444', color2: '#ec4899' },
  { id: 'amethyst', name: 'Mystic Amethyst', color1: '#d946ef', color2: '#6366f1' },
];

const ThemePicker = ({ currentTheme, onChangeTheme, isDarkBackdrop = false }) => {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.75rem',
      background: isDarkBackdrop ? 'rgba(10, 10, 15, 0.6)' : 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      border: '1px solid var(--glass-border)',
      padding: '0.5rem 0.8rem',
      borderRadius: '30px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    }}>
      {themes.map((theme) => {
        const isActive = currentTheme === theme.id;
        return (
          <div key={theme.id} style={{ position: 'relative' }} className="theme-btn-wrapper">
            <button
              onClick={() => onChangeTheme(theme.id)}
              title={theme.name}
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${theme.color1} 50%, ${theme.color2} 50%)`,
                border: isActive ? `2px solid #ffffff` : '1px solid rgba(255,255,255,0.2)',
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1)',
                boxShadow: isActive 
                  ? `0 0 10px ${theme.color1}` 
                  : '0 2px 5px rgba(0,0,0,0.3)',
                padding: 0,
                display: 'block',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.2)';
                if (isActive) {
                  e.currentTarget.style.boxShadow = `0 0 14px ${theme.color1}`;
                } else {
                  e.currentTarget.style.boxShadow = `0 0 8px ${theme.color1}88`;
                }
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = isActive 
                  ? `0 0 10px ${theme.color1}` 
                  : '0 2px 5px rgba(0,0,0,0.3)';
              }}
              aria-label={`Switch to ${theme.name}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ThemePicker;
