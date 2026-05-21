import React, { useState } from 'react';
import { 
  ChevronDown, ChevronUp, BookOpen, Layers, Link as LinkIcon, Info,
  Sparkles, ShieldCheck, Zap, TrendingUp, Key, Coins, CheckCircle2 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import Mermaid from './Mermaid';

// Helper to return a premium dynamic icon based on the content of the takeaway
const getTakeawayIcon = (text) => {
  const t = text.toLowerCase();
  if (t.includes('ai') || t.includes('bot') || t.includes('neyro') || t.includes('quantum') || t.includes('ex-a1') || t.includes('algorithm')) {
    return <Zap size={22} style={{ color: 'var(--accent-gold)', marginTop: '0.15rem', flexShrink: 0 }} />;
  }
  if (t.includes('secure') || t.includes('non-custodial') || t.includes('control') || t.includes('keys') || t.includes('protection') || t.includes('confirm')) {
    return <ShieldCheck size={22} style={{ color: '#10b981', marginTop: '0.15rem', flexShrink: 0 }} />;
  }
  if (t.includes('profit') || t.includes('yield') || t.includes('earn') || t.includes('legacy') || t.includes('commission') || t.includes('income') || t.includes('sales')) {
    return <TrendingUp size={22} style={{ color: 'var(--accent-blue)', marginTop: '0.15rem', flexShrink: 0 }} />;
  }
  if (t.includes('register') || t.includes('invite') || t.includes('code') || t.includes('account') || t.includes('password')) {
    return <Key size={22} style={{ color: '#ec4899', marginTop: '0.15rem', flexShrink: 0 }} />;
  }
  if (t.includes('rwa') || t.includes('real estate') || t.includes('gold') || t.includes('physical')) {
    return <Coins size={22} style={{ color: '#fb7185', marginTop: '0.15rem', flexShrink: 0 }} />;
  }
  return <CheckCircle2 size={22} style={{ color: 'var(--accent-purple)', marginTop: '0.15rem', flexShrink: 0 }} />;
};

const CourseTopic = ({ topic, onSelectModule }) => {
  const [isDeepDiveOpen, setIsDeepDiveOpen] = useState(false);

  // Custom components for Markdown to support Tooltips, Callouts, and Mermaid
  const MarkdownComponents = {
    // Intercept links to create Info Bubbles
    a: ({ node, ...props }) => {
      const href = props.href || '';
      if (href.startsWith('#tooltip:')) {
        const tooltipText = decodeURIComponent(href.replace('#tooltip:', ''));
        return (
          <span className="info-bubble">
            {props.children}
            <span className="tooltip-text">
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', marginBottom: '0.25rem', fontWeight: 'bold' }}>
                <Info size={16} /> Definition
              </span>
              {tooltipText}
            </span>
          </span>
        );
      }
      return <a {...props} style={{ color: 'var(--accent-blue)', textDecoration: 'none' }} />;
    },
    // Intercept code blocks to render Mermaid diagrams
    code: ({ node, className, children, ...props }) => {
      const match = /language-mermaid/.exec(className || '');
      if (match) {
        return <Mermaid chart={String(children).replace(/\n$/, '')} />;
      }
      return <code className={className} {...props}>{children}</code>;
    },
    // Strip the pre wrapper if its child is a Mermaid diagram
    pre: ({ children, ...props }) => {
      const childrenArray = React.Children.toArray(children);
      const isMermaid = childrenArray.some(
        child => React.isValidElement(child) && (
          (child.props && child.props.className && child.props.className.includes('language-mermaid')) ||
          child.type === Mermaid ||
          (child.props && child.props.chart)
        )
      );
      if (isMermaid) {
        return <>{children}</>;
      }
      return <pre {...props}>{children}</pre>;
    }
  };

  return (
    <div className="topic-container" style={{ marginBottom: '4rem', paddingBottom: '2rem', borderBottom: '1px solid var(--glass-border)' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--accent-gold)' }}>
        {topic.title}
      </h2>

      {/* PRESENTER VIEW (Summary) */}
      <div className="glass-panel" style={{ marginBottom: '2rem', background: 'rgba(20, 20, 31, 0.4)' }}>
        <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-secondary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Layers size={18} /> Key Takeaways
        </h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {topic.presenterSummary.map((point, idx) => (
            <li key={idx} style={{ 
              fontSize: '1.4rem', 
              marginBottom: '1.25rem', 
              display: 'flex', 
              alignItems: 'flex-start',
              gap: '1rem',
              lineHeight: 1.45,
              color: 'var(--text-primary)'
            }}>
              {getTakeawayIcon(point)}
              <span>
                {point.includes('\n') ? (
                  <>
                    {point.split('\n')[0]}
                    <span style={{ display: 'block', fontSize: '1.05rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
                      {point.split('\n')[1]}
                    </span>
                  </>
                ) : (
                  point
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>


      {/* DIVE DEEPER ACTION */}
      <button 
        onClick={() => setIsDeepDiveOpen(!isDeepDiveOpen)}
        style={{
          background: isDeepDiveOpen ? 'rgba(255, 255, 255, 0.1)' : 'var(--accent-purple)',
          color: 'var(--text-primary)',
          border: 'none',
          padding: '1rem 2rem',
          borderRadius: '8px',
          fontSize: '1.1rem',
          fontWeight: '600',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          transition: 'all 0.3s ease'
        }}
      >
        <BookOpen size={20} />
        {isDeepDiveOpen ? 'Close Coursework' : 'Dive Deeper: View Detailed Coursework'}
        {isDeepDiveOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {/* EXPANDABLE DIVE DEEPER VIEW */}
      <AnimatePresence>
        {isDeepDiveOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ 
              marginTop: '1.5rem', 
              padding: '2rem', 
              background: 'rgba(0,0,0,0.2)', 
              borderRadius: '12px',
              borderLeft: '4px solid var(--accent-purple)',
              fontSize: '1.15rem',
              lineHeight: 1.7,
              color: 'var(--text-primary)'
            }}>
              <div className="markdown-content">
                <ReactMarkdown components={MarkdownComponents}>
                  {topic.deepDive}
                </ReactMarkdown>
              </div>

              {/* RELATED TOPICS SECTION */}
              {topic.relatedTopics && topic.relatedTopics.length > 0 && (
                <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)' }}>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <LinkIcon size={18} /> Related Items
                  </h4>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    {topic.relatedTopics.map((related, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          if (onSelectModule && related.moduleId) {
                            onSelectModule(related.moduleId);
                          }
                        }}
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--glass-border)',
                          padding: '0.75rem 1.5rem',
                          borderRadius: '20px',
                          color: 'var(--accent-blue)',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          fontSize: '1rem'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.borderColor = 'var(--accent-blue)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                          e.currentTarget.style.borderColor = 'var(--glass-border)';
                        }}
                      >
                        {related.label} →
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .markdown-content h3 {
          font-size: 1.5rem;
          margin-top: 0;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }
        .markdown-content p {
          margin-bottom: 1.5rem;
          color: #d1d5db;
        }
        .markdown-content ul {
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .markdown-content li {
          margin-bottom: 0.5rem;
          color: #d1d5db;
        }
      `}</style>
    </div>
  );
};

export default CourseTopic;
