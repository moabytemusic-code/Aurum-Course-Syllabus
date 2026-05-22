import { useState } from 'react';
import { courseModules } from '../data/courseData';
import { Book, Settings, ChevronDown, ChevronUp } from 'lucide-react';
import ThemePicker from './ThemePicker';
import { motion, AnimatePresence } from 'framer-motion';

const SidebarSyllabus = ({ 
  activeModuleId, 
  onSelectModule, 
  theme, 
  setTheme,
  textScale,
  setTextScale,
  glowEnabled,
  setGlowEnabled,
  isOpen
}) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '1.8rem', margin: 0, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Book size={24} color="var(--accent-gold)" />
          Aurum <span className="text-gradient">Portal</span>
        </h1>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Course Syllabus</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {courseModules.map((module) => (
          <div key={module.id}>
            <button 
              onClick={() => onSelectModule(module.id)}
              style={{
                width: '100%',
                textAlign: 'left',
                background: activeModuleId === module.id ? 'var(--accent-gold-glow)' : 'transparent',
                border: '1px solid',
                borderColor: activeModuleId === module.id ? 'var(--accent-gold)' : 'transparent',
                padding: '1rem',
                borderRadius: '8px',
                color: activeModuleId === module.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                cursor: 'pointer',
                fontWeight: activeModuleId === module.id ? '600' : '500',
                fontSize: '1rem',
                transition: 'all 0.2s ease',
                marginBottom: '0.5rem'
              }}
            >
              {module.title}
            </button>
            
            {/* Show topic previews if active */}
            {activeModuleId === module.id && (
              <div style={{ paddingLeft: '1rem', borderLeft: '2px solid rgba(255,255,255,0.1)', marginLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {module.topics.map(topic => (
                  <div key={topic.id} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    • {topic.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ 
        marginTop: 'auto', 
        paddingTop: '1rem', 
        borderTop: '1px solid var(--glass-border)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <button 
          onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            width: '100%',
            background: 'none',
            border: 'none',
            padding: '0.5rem 0',
            cursor: 'pointer',
            color: 'var(--text-primary)'
          }}
          aria-label="Toggle Settings Panel"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Settings size={18} style={{ color: 'var(--accent-gold)' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Settings</span>
          </div>
          {isSettingsOpen ? <ChevronUp size={16} style={{ color: 'var(--text-secondary)' }} /> : <ChevronDown size={16} style={{ color: 'var(--text-secondary)' }} />}
        </button>

        <AnimatePresence initial={false}>
          {isSettingsOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingBottom: '0.5rem' }}
            >
              {/* Theme Preference */}
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Theme</label>
                <ThemePicker currentTheme={theme} onChangeTheme={setTheme} />
              </div>

              {/* Text Size Preference */}
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Text Size</label>
                <div style={{ display: 'flex', gap: '0.35rem' }}>
                  {['small', 'medium', 'large'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setTextScale(size)}
                      style={{
                        flex: 1,
                        background: textScale === size ? 'var(--accent-gold-glow)' : 'rgba(255,255,255,0.02)',
                        border: '1px solid',
                        borderColor: textScale === size ? 'var(--accent-gold)' : 'var(--glass-border)',
                        color: textScale === size ? 'var(--text-primary)' : 'var(--text-secondary)',
                        padding: '0.35rem',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        textTransform: 'capitalize',
                        transition: 'all 0.2s'
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Glow Effects Preference */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Ambient Glow</label>
                <button
                  onClick={() => setGlowEnabled(!glowEnabled)}
                  style={{
                    background: glowEnabled ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)',
                    border: 'none',
                    width: '34px',
                    height: '18px',
                    borderRadius: '9px',
                    cursor: 'pointer',
                    position: 'relative',
                    padding: 0,
                    transition: 'background 0.3s'
                  }}
                  aria-label="Toggle ambient glow"
                >
                  <div style={{
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    background: '#000',
                    position: 'absolute',
                    top: '2px',
                    left: glowEnabled ? '18px' : '2px',
                    transition: 'left 0.3s'
                  }} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SidebarSyllabus;
