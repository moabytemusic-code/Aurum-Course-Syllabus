import React, { useState } from 'react';
import SidebarSyllabus from './SidebarSyllabus';
import CourseTopic from './CourseTopic';
import { courseModules } from '../data/courseData';
import { motion, AnimatePresence } from 'framer-motion';

const CourseLayout = ({ theme, setTheme }) => {
  const [activeModuleId, setActiveModuleId] = useState(courseModules[0].id);

  const activeModule = courseModules.find(m => m.id === activeModuleId);

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <SidebarSyllabus 
        activeModuleId={activeModuleId} 
        onSelectModule={setActiveModuleId} 
        theme={theme}
        setTheme={setTheme}
      />
      
      <div style={{ 
        marginLeft: '320px', 
        width: 'calc(100% - 320px)',
        padding: '4rem 6rem',
        overflowY: 'auto',
        height: '100vh'
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModuleId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            style={{ maxWidth: '900px', margin: '0 auto' }}
          >
            <div style={{ marginBottom: '4rem' }}>
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
