import React from 'react';
import SlideContainer from '../SlideContainer';

const products = [
  {
    title: 'Aurum Vault',
    desc: 'Secure institutional-grade storage for digital assets.',
    icon: '🛡️',
    color: 'var(--accent-gold)'
  },
  {
    title: 'Aurum Trade Desk',
    desc: 'High-liquidity OTC trading platform for premium clients.',
    icon: '📈',
    color: 'var(--accent-purple)'
  },
  {
    title: 'Aurum Yield',
    desc: 'Staking and yield generation strategies with managed risk.',
    icon: '💎',
    color: '#60a5fa'
  }
];

const ProductShowcaseSlide = () => {
  return (
    <SlideContainer>
      <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        Products & <span className="text-gradient">Services</span>
      </h2>
      <p style={{ marginBottom: '3rem', maxWidth: '800px' }}>
        Our comprehensive suite of tools is designed to bridge the gap between traditional finance and the decentralized economy.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {products.map((product, idx) => (
          <div 
            key={idx}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--glass-border)',
              borderRadius: '16px',
              padding: '2rem',
              transition: 'transform 0.3s ease, background 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{product.icon}</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: product.color }}>{product.title}</h3>
            <p style={{ fontSize: '1rem', margin: 0 }}>{product.desc}</p>
          </div>
        ))}
      </div>
    </SlideContainer>
  );
};

export default ProductShowcaseSlide;
