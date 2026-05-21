import React from 'react';
import SlideContainer from '../SlideContainer';

const HeroSlide = () => {
  return (
    <SlideContainer className="text-center">
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '5rem', marginBottom: '1rem' }}>Aurum</h1>
        <h2 style={{ fontSize: '2rem', fontWeight: 300, letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
          Education Portal
        </h2>
      </div>
      
      <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.25rem', lineHeight: 1.8 }}>
        Empowering you with the knowledge to navigate the future of finance. 
        Discover our premium products, professional services, and master the language of cryptocurrency.
      </p>
      
      <div style={{ marginTop: '4rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-gold)' }}>01</div>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Products</div>
        </div>
        <div style={{ width: '1px', background: 'var(--glass-border)' }}></div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-purple)' }}>02</div>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Services</div>
        </div>
        <div style={{ width: '1px', background: 'var(--glass-border)' }}></div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#60a5fa' }}>03</div>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Glossary</div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default HeroSlide;
