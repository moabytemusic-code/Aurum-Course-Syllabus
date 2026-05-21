import React, { useState } from 'react';
import SlideContainer from '../SlideContainer';

const terms = [
  {
    term: 'Blockchain',
    definition: 'A distributed, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network.'
  },
  {
    term: 'Smart Contract',
    definition: 'Self-executing contracts with the terms of the agreement directly written into code, running on a blockchain.'
  },
  {
    term: 'DeFi',
    definition: 'Decentralized Finance. An umbrella term for a variety of financial applications in cryptocurrency or blockchain geared toward disrupting financial intermediaries.'
  },
  {
    term: 'Liquidity Pool',
    definition: 'A crowdsourced pool of cryptocurrencies or tokens locked in a smart contract that is used to facilitate trades between the assets on a decentralized exchange.'
  },
  {
    term: 'Cold Storage',
    definition: 'Keeping a reserve of cryptocurrency offline for security, often hardware wallets, preventing unauthorized access from internet-connected vectors.'
  }
];

const CryptoGlossarySlide = () => {
  const [activeTerm, setActiveTerm] = useState(0);

  return (
    <SlideContainer>
      <div style={{ display: 'flex', gap: '4rem', height: '100%', minHeight: '400px' }}>
        {/* Left column - Terms list */}
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '1rem', borderRight: '1px solid var(--glass-border)', paddingRight: '2rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Crypto <span className="text-gradient">Glossary</span>
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', overflowY: 'auto' }}>
            {terms.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTerm(idx)}
                style={{
                  textAlign: 'left',
                  padding: '1rem',
                  background: activeTerm === idx ? 'var(--accent-gold-glow)' : 'transparent',
                  border: '1px solid',
                  borderColor: activeTerm === idx ? 'var(--accent-gold)' : 'transparent',
                  borderRadius: '8px',
                  color: activeTerm === idx ? 'var(--text-primary)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  fontWeight: activeTerm === idx ? '600' : '400',
                  transition: 'all 0.2s ease'
                }}
              >
                {item.term}
              </button>
            ))}
          </div>
        </div>

        {/* Right column - Definition */}
        <div style={{ flex: '1.5', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div 
            key={activeTerm} // Force re-render for simple fade effect
            style={{ 
              animation: 'fadeIn 0.4s ease-out' 
            }}
          >
            <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--accent-gold)' }}>
              {terms[activeTerm].term}
            </h3>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--text-primary)' }}>
              {terms[activeTerm].definition}
            </p>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </SlideContainer>
  );
};

export default CryptoGlossarySlide;
