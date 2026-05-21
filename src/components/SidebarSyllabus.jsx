import React from 'react';
import { courseModules } from '../data/courseData';
import { Book } from 'lucide-react';

const SidebarSyllabus = ({ activeModuleId, onSelectModule }) => {
  return (
    <div style={{
      width: '320px',
      height: '100vh',
      background: 'rgba(10, 10, 15, 0.95)',
      borderRight: '1px solid var(--glass-border)',
      padding: '2rem 1.5rem',
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      left: 0,
      top: 0,
      overflowY: 'auto'
    }}>
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
    </div>
  );
};

export default SidebarSyllabus;
