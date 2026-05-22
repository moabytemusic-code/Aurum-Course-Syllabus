import React, { useState } from 'react';
import SidebarSyllabus from './SidebarSyllabus';
import CourseTopic from './CourseTopic';
import { courseModules } from '../data/courseData';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';

const CourseLayout = ({ theme, setTheme, textScale, setTextScale, glowEnabled, setGlowEnabled }) => {
  const [activeModuleId, setActiveModuleId] = useState(courseModules[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeModule = courseModules.find(m => m.id === activeModuleId);

  return (
    <div className="layout-container">
      {/* Mobile Top Header */}
      <div className="mobile-header">
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="mobile-menu-btn"
          aria-label="Toggle Syllabus Menu"
        >
          <Menu size={24} />
        </button>
        <span style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Aurum <span className="text-gradient">Portal</span>
        </span>
      </div>

      {/* Mobile Backdrop when Sidebar is Open */}
      {isSidebarOpen && (
        <div 
          className="sidebar-backdrop"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <SidebarSyllabus 
        activeModuleId={activeModuleId} 
        onSelectModule={(id) => {
          setActiveModuleId(id);
          setIsSidebarOpen(false); // Close sidebar on selection (mobile flow)
        }} 
        theme={theme}
        setTheme={setTheme}
        textScale={textScale}
        setTextScale={setTextScale}
        glowEnabled={glowEnabled}
        setGlowEnabled={setGlowEnabled}
        isOpen={isSidebarOpen}
      />
      
      <div className="content-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModuleId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            style={{ maxWidth: '900px', margin: '0 auto' }}
          >
            <div style={{ marginBottom: '4rem' }} className="course-title-header">
              <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', borderBottom: '2px solid var(--glass-border)', paddingBottom: '1rem' }}>
                {activeModule.title}
              </h1>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {activeModule.topics.map(topic => (
                <CourseTopic 
                  key={topic.id} 
                  topic={topic} 
                  onSelectModule={setActiveModuleId} 
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CourseLayout;
