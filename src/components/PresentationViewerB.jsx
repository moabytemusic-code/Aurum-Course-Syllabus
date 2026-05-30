import { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  ChevronLeft, ChevronRight, X, Sparkles, ShieldCheck, Zap, 
  TrendingUp, Key, Coins, CheckCircle2, AlertCircle, TrendingDown,
  HelpCircle, ShieldAlert, Layers, Users, Cpu, ArrowRightLeft,
  CreditCard, Award, Unlock, GraduationCap
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import SlideContainer from './SlideContainer';

// Style objects are now defined in CSS (index.css) to support responsive scaling.
// Empty definitions kept to avoid breaking existing slide JSX references.
const liStyle = {};
const iconStyle = { flexShrink: 0 };
const strongStyle = {};
const spanStyle = {};

const PresentationViewerB = ({ onExit }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slides = useMemo(() => {
    return [
      // Slide 1: Welcome & Mission Hook
      <SlideContainer key="slide-1" className="text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '55vh' }}>
        <div style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(251,191,36,0.1)', padding: '0.5rem 1.25rem', borderRadius: '30px', border: '1px solid rgba(251,191,36,0.2)' }}>
          <Sparkles size={18} style={{ color: 'var(--accent-gold)' }} aria-hidden="true" />
          <span style={{ fontSize: '0.9rem', color: 'var(--accent-gold)', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase' }}>The AurumRise Mission</span>
        </div>
        <h1 className="text-gradient" style={{ fontSize: '4rem', marginBottom: '1.5rem', lineHeight: 1.25, fontWeight: 700, maxWidth: '950px' }}>
          Taking the Charge for Humanity: Democratizing AI Finance & Crypto
        </h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.5, fontWeight: 300 }}>
          Why AurumRise stepped forward to bridge the financial divide, educate the public, and restore capital control to individuals worldwide.
        </p>
      </SlideContainer>,

      // Slide 2: Who & What is this Syllabus For?
      <SlideContainer key="slide-2">
        <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <GraduationCap size={36} style={{ color: 'var(--accent-gold)' }} aria-hidden="true" /> Who & What Was This Syllabus Designed For?
        </h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={liStyle}>
            <Users size={28} style={{ ...iconStyle, color: 'var(--accent-blue)' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>Savers Blocked by Complexity</strong>
              <span style={spanStyle}>Designed specifically for everyday individuals who find blockchain, DeFi, and algorithmic finance intimidating or unreachable.</span>
            </div>
          </li>
          <li style={liStyle}>
            <GraduationCap size={28} style={{ ...iconStyle, color: 'var(--accent-purple)' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>An Onboarding Masterclass</strong>
              <span style={spanStyle}>A structured, step-by-step curriculum designed to take you from absolute zero to confident operator of decentralized tools.</span>
            </div>
          </li>
          <li style={liStyle}>
            <Unlock size={28} style={{ ...iconStyle, color: '#10b981' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>Sovereign Wealth Management</strong>
              <span style={spanStyle}>Built for anyone seeking to eliminate banks as middlemen, control their private keys, and safely utilize automated trading.</span>
            </div>
          </li>
        </ul>
      </SlideContainer>,

      // Slide 3: The Charge for Humanity (Why AurumRise?)
      <SlideContainer key="slide-3">
        <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Sparkles size={36} style={{ color: 'var(--accent-gold)' }} aria-hidden="true" /> The Humanitarian Stand: Why We Must Act Now
        </h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={liStyle}>
            <TrendingDown size={28} style={{ ...iconStyle, color: '#f87171' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>The Silent Theft: Inflation & Banking Decay</strong>
              <span style={spanStyle}>Traditional monetary systems are structurally designed to devalue your labor. Ordinary citizens pay the price while institutions profit.</span>
            </div>
          </li>
          <li style={liStyle}>
            <Cpu size={28} style={{ ...iconStyle, color: 'var(--accent-purple)' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>The AI Financial Gap</strong>
              <span style={spanStyle}>Institutional hedge funds have monopolized automated algorithmic trading for decades. We are placing these same tools directly in your hands.</span>
            </div>
          </li>
          <li style={liStyle}>
            <ShieldCheck size={28} style={{ ...iconStyle, color: '#10b981' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>A Safe Path to Financial Literacy</strong>
              <span style={spanStyle}>Unregulated crypto is full of high-risk traps and custody scams. AurumRise provides an educational sanctuary focused on non-custodial safety.</span>
            </div>
          </li>
        </ul>
      </SlideContainer>,

      // Slide 4: Leading the Way to Financial Literacy & Freedom
      <SlideContainer key="slide-4">
        <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <GraduationCap size={36} style={{ color: 'var(--accent-gold)' }} aria-hidden="true" /> Leading the Way to Financial Literacy & Freedom
        </h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={liStyle}>
            <GraduationCap size={28} style={{ ...iconStyle, color: 'var(--accent-blue)' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>True Financial Literacy</strong>
              <span style={spanStyle}>We don't just provide tools; we teach you how to use them. Our step-by-step masterclasses guide you through Web3 architecture, wallet safety, and risk management.</span>
            </div>
          </li>
          <li style={liStyle}>
            <Unlock size={28} style={{ ...iconStyle, color: '#10b981' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>Real Financial Freedom</strong>
              <span style={spanStyle}>Gain independence from centralized institutions. By holding your own keys and trading with non-custodial software, you achieve complete ownership over your wealth.</span>
            </div>
          </li>
          <li style={liStyle}>
            <TrendingUp size={28} style={{ ...iconStyle, color: 'var(--accent-purple)' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>Bridging the Tech Gap</strong>
              <span style={spanStyle}>Making complex blockchain networks and trading algorithms simple and accessible to anyone, regardless of prior technical background or experience.</span>
            </div>
          </li>
        </ul>
      </SlideContainer>,

      // Slide 5: The Education Portal
      <SlideContainer key="slide-5">
        <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <GraduationCap size={36} style={{ color: 'var(--accent-gold)' }} aria-hidden="true" /> The Education Portal: Build Knowledge Before Capital
        </h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={liStyle}>
            <CheckCircle2 size={28} style={{ ...iconStyle, color: '#10b981' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>Interactive Digital Syllabus</strong>
              <span style={spanStyle}>An engaging, clickable database with instant visual tooltips and interactive glossary definitions for complex terms.</span>
            </div>
          </li>
          <li style={liStyle}>
            <Users size={28} style={{ ...iconStyle, color: 'var(--accent-blue)' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>Live Zoom Masterclasses</strong>
              <span style={spanStyle}>Connect directly with technical trainers and onboarding coordinators during live webinars to ask questions and learn together.</span>
            </div>
          </li>
          <li style={liStyle}>
            <Cpu size={28} style={{ ...iconStyle, color: 'var(--accent-purple)' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>AI-Powered Study Assistant</strong>
              <span style={spanStyle}>Ask questions directly to the chatbot at the bottom of the portal. It serves as your personal 24/7 tutor on your journey.</span>
            </div>
          </li>
        </ul>
      </SlideContainer>,

      // Slide 6: Neyro AI Agent (Safety First)
      <SlideContainer key="slide-6">
        <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <ShieldCheck size={36} style={{ color: '#10b981' }} aria-hidden="true" /> Neyro AI Agent: Keep 100% Control of Your Money
        </h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={liStyle}>
            <Key size={28} style={{ ...iconStyle, color: '#ec4899' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>100% Non-Custodial Security</strong>
              <span style={spanStyle}>Your money never leaves your personal, secure wallet. Neyro operates via secure APIs—you retain full capital control.</span>
            </div>
          </li>
          <li style={liStyle}>
            <Cpu size={28} style={{ ...iconStyle, color: 'var(--accent-purple)' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>Disciplined Autonomous Execution</strong>
              <span style={spanStyle}>The AI agent continuously scans the markets and executes trades on your behalf 24/7 without fatigue.</span>
            </div>
          </li>
          <li style={liStyle}>
            <Sparkles size={28} style={{ ...iconStyle, color: 'var(--accent-gold)' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>Quantum Alpha Beta Trial</strong>
              <span style={spanStyle}>Participate in the active beta trial strategy with 0% performance fees, keeping 100% of all generated gains.</span>
            </div>
          </li>
        </ul>
      </SlideContainer>,

      // Slide 7: EX-A1 Bot (Arbitrage)
      <SlideContainer key="slide-7">
        <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <ArrowRightLeft size={36} style={{ color: 'var(--accent-blue)' }} aria-hidden="true" /> EX-A1 Bot: Capturing Low-Risk Market Inefficiencies
        </h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={liStyle}>
            <TrendingUp size={28} style={{ ...iconStyle, color: 'var(--accent-blue)' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>High-Speed Spot Arbitrage</strong>
              <span style={spanStyle}>Exploits momentary price discrepancies for the same asset between different global exchanges for low-risk gains.</span>
            </div>
          </li>
          <li style={liStyle}>
            <Layers size={28} style={{ ...iconStyle, color: 'var(--accent-purple)' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>Hands-Free Passive Tiers</strong>
              <span style={spanStyle}>Start with deposit packages scaling from 100 USDT (Basic) to Comfort, up to 25,000 USDT (VIP).</span>
            </div>
          </li>
          <li style={liStyle}>
            <Coins size={28} style={{ ...iconStyle, color: 'var(--accent-gold)' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>Lucrative Profit Sharing</strong>
              <span style={spanStyle}>Receive daily profit payouts scaling up to 85% of total generated bot gains based on your selected package tier.</span>
            </div>
          </li>
        </ul>
      </SlideContainer>,

      // Slide 8: Real World Assets (RWA Gold)
      <SlideContainer key="slide-8">
        <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Coins size={36} aria-hidden="true" /> RWA Gold: Physical Vault Security + Active Yield
        </h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={liStyle}>
            <ShieldCheck size={28} style={{ ...iconStyle, color: '#10b981' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>Swiss Vaulted Gold backing (50%)</strong>
              <span style={spanStyle}>Half of your capital is immediately allocated to physical gold bullion stored safely in Swiss vaults with a 30% wholesale discount.</span>
            </div>
          </li>
          <li style={liStyle}>
            <TrendingUp size={28} style={{ ...iconStyle, color: 'var(--accent-blue)' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>AI-Driven Yield Execution (50%)</strong>
              <span style={spanStyle}>The remaining half is placed in XAUT/USDC active yield pools, targeting a consistent 7-10% monthly interest.</span>
            </div>
          </li>
          <li style={liStyle}>
            <Coins size={28} style={{ ...iconStyle, color: 'var(--accent-gold)' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>Physical Gold Delivery</strong>
              <span style={spanStyle}>Keep your holdings digital, or request secure physical delivery of your gold bars directly to your doorstep after 12 months.</span>
            </div>
          </li>
        </ul>
      </SlideContainer>,

      // Slide 9: Aurum Token & Staking Tiers
      <SlideContainer key="slide-9">
        <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Coins size={36} style={{ color: 'var(--accent-gold)' }} aria-hidden="true" /> High-Yield Staking: Grow Your Staked Assets
        </h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={liStyle}>
            <Zap size={28} style={{ ...iconStyle, color: 'var(--accent-blue)' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>Short-Term Options</strong>
              <span style={spanStyle}>Lock your Aurum Utility Tokens for 1 month at a 2.00% APY, or 3 months at a 12.00% APY.</span>
            </div>
          </li>
          <li style={liStyle}>
            <TrendingUp size={28} style={{ ...iconStyle, color: 'var(--accent-purple)' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>Medium-Term Options</strong>
              <span style={spanStyle}>Secure higher returns by locking for 6 months at a 36.00% APY, or 9 months at a 72.00% APY.</span>
            </div>
          </li>
          <li style={liStyle}>
            <Award size={28} style={{ ...iconStyle, color: 'var(--accent-gold)' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>Maximum Compound Option (12 Months)</strong>
              <span style={spanStyle}>Stake for 12 months to receive a high 120.00% APY, multiplying your tokens by 2.2x over the locking period.</span>
            </div>
          </li>
        </ul>
      </SlideContainer>,

      // Slide 10: Everyday Utility (Card & Flash)
      <SlideContainer key="slide-10">
        <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <CreditCard size={36} aria-hidden="true" /> Everyday Utility: Aurum Card & Aurum Flash
        </h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={liStyle}>
            <CheckCircle2 size={28} style={{ ...iconStyle, color: '#10b981' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>Instant Fiat-Crypto Conversion</strong>
              <span style={spanStyle}>Use the Aurum Mastercard to spend crypto balances anywhere Mastercard is accepted worldwide with zero checkout friction.</span>
            </div>
          </li>
          <li style={liStyle}>
            <Zap size={28} style={{ ...iconStyle, color: 'var(--accent-gold)' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>Zero-Capital DeFi Arbitrage</strong>
              <span style={spanStyle}>Aurum Flash licenses allow advanced users to tap into flash loan capital to execute multi-step arbitrage loops instantly.</span>
            </div>
          </li>
          <li style={liStyle}>
            <Layers size={28} style={{ ...iconStyle, color: 'var(--accent-purple)' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>Premium Cashbacks & Tiers</strong>
              <span style={spanStyle}>Unlock premium card tiers (Nova, Imperium, World Elite) for increasing cashbacks, lounge benefits, and high limits.</span>
            </div>
          </li>
        </ul>
      </SlideContainer>,

      // Slide 11: The Partner Program (Organization)
      <SlideContainer key="slide-11">
        <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Users size={36} aria-hidden="true" /> The Partner Program: Unlock Generational Revenue
        </h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={liStyle}>
            <Coins size={28} style={{ ...iconStyle, color: 'var(--accent-gold)' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>Instant Direct Commissions</strong>
              <span style={spanStyle}>Earn up to 18.5% immediately on all platform license activations and deposit package purchases via your invite link.</span>
            </div>
          </li>
          <li style={liStyle}>
            <TrendingUp size={28} style={{ ...iconStyle, color: 'var(--accent-blue)' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>Daily Profitshare Overrides</strong>
              <span style={spanStyle}>Receive up to 30% daily overrides on the automated trading profits generated by your direct and structural clients.</span>
            </div>
          </li>
          <li style={liStyle}>
            <Award size={28} style={{ ...iconStyle, color: 'var(--accent-purple)' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>Rank-Up & Shareholder Bonuses</strong>
              <span style={spanStyle}>Unlock lump-sum cash bonuses up to 3,000,000 USDT and quarterly shares in the global Shareholder Pool (up to 3.125%).</span>
            </div>
          </li>
        </ul>
      </SlideContainer>,

      // Slide 12: Legacy Tiers & Career Growth
      <SlideContainer key="slide-12">
        <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Award size={36} aria-hidden="true" /> 15 Levels of Career Progression: From Nova to Alpha
        </h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={liStyle}>
            <CheckCircle2 size={28} style={{ ...iconStyle, color: '#10b981' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>Structured Legacy Volume (LV)</strong>
              <span style={spanStyle}>Advance ranks based on total team sales volume. Each rank unlocks deeper commissions and profit differentials.</span>
            </div>
          </li>
          <li style={liStyle}>
            <Users size={28} style={{ ...iconStyle, color: 'var(--accent-blue)' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>Generous Differential Overrides</strong>
              <span style={spanStyle}>Earn the percentage difference between your rank level and your downline partners across your entire structure, endlessly deep.</span>
            </div>
          </li>
          <li style={liStyle}>
            <Sparkles size={28} style={{ ...iconStyle, color: 'var(--accent-gold)' }} aria-hidden="true" />
            <div>
              <strong style={strongStyle}>Global Masters Retreats & masterclasses</strong>
              <span style={spanStyle}>Qualify for fully funded luxury retreats, private mastermind summits, and direct strategy access with corporate executives.</span>
            </div>
          </li>
        </ul>
      </SlideContainer>,
      
      // Slide 13: How to Get Started
      <SlideContainer key="slide-13" className="text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem', color: 'var(--accent-gold)' }}>
          3 Simple Steps to Activate Your Wealth Engine
        </h2>
        <div className="cta-grid">
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '2rem 1.5rem', borderRadius: '16px' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(96,165,250,0.1)', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>1</div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>Get Invite Code</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.5, fontWeight: 300 }}>Contact the partner who invited you to this webinar to secure your registration link.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '2rem 1.5rem', borderRadius: '16px' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(139,92,246,0.1)', color: 'var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>2</div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>Activate License</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.5, fontWeight: 300 }}>Register, complete standard KYC, and activate your annual account access for 19.99 USDT.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '2rem 1.5rem', borderRadius: '16px' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(251,191,36,0.1)', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>3</div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>Deploy Wealth AI</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.5, fontWeight: 300 }}>Connect Neyro to your wallet or activate an EX-A1 Bot package to start growing your assets.</p>
          </div>
        </div>
      </SlideContainer>,

      // Slide 14: Q&A
      <SlideContainer key="slide-14" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <HelpCircle size={36} aria-hidden="true" /> Q&A Session
        </h2>
        <div className="qa-grid">
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', padding: '1.75rem', borderRadius: '16px', display: 'flex', gap: '1.25rem' }}>
            <div style={{ background: 'rgba(96,165,250,0.1)', color: 'var(--accent-blue)', padding: '0.75rem', borderRadius: '12px', height: 'fit-content' }}>
              <Unlock size={24} aria-hidden="true" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '0.75rem', color: 'var(--text-primary)', fontWeight: '600' }}>Is my capital locked up?</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.5, fontWeight: 300 }}>
                With Neyro AI Agent, your money never leaves your wallet—it is fully liquid and you can stop the agent at any time. EX-A1 packages operate on a 365-day cycle, but support early withdrawal with a standard fee.
              </p>
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', padding: '1.75rem', borderRadius: '16px', display: 'flex', gap: '1.25rem' }}>
            <div style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981', padding: '0.75rem', borderRadius: '12px', height: 'fit-content' }}>
              <ShieldCheck size={24} aria-hidden="true" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '0.75rem', color: 'var(--text-primary)', fontWeight: '600' }}>Is this safe/regulated?</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.5, fontWeight: 300 }}>
                Yes, Aurum is built on transparency. All trading rules are governed by audited smart contracts on the Polygon blockchain. Standard KYC is required to prevent fraud, and our leadership team includes former Binance directors.
              </p>
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', padding: '1.75rem', borderRadius: '16px', display: 'flex', gap: '1.25rem' }}>
            <div style={{ background: 'rgba(139,92,246,0.1)', color: 'var(--accent-purple)', padding: '0.75rem', borderRadius: '12px', height: 'fit-content' }}>
              <GraduationCap size={24} aria-hidden="true" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '0.75rem', color: 'var(--text-primary)', fontWeight: '600' }}>Do I need trading experience?</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.5, fontWeight: 300 }}>
                None. Our technology is designed to be plug-and-play. The algorithms execute autonomously. Our portal provides a step-by-step masterclass to walk you through the setup in under 10 minutes.
              </p>
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', padding: '1.75rem', borderRadius: '16px', display: 'flex', gap: '1.25rem' }}>
            <div style={{ background: 'rgba(251,191,36,0.1)', color: 'var(--accent-gold)', padding: '0.75rem', borderRadius: '12px', height: 'fit-content' }}>
              <Coins size={24} aria-hidden="true" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '0.75rem', color: 'var(--text-primary)', fontWeight: '600' }}>Where does the gold come from?</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.5, fontWeight: 300 }}>
                The gold is tethered to XAUT (Tether Gold), backed by real physical gold bullion stored in Swiss vaults. You can audit vault allocations on-chain, and after 12 months, you can redeem your tokens for physical gold bars.
              </p>
            </div>
          </div>
        </div>
      </SlideContainer>,

      // Slide 15: Conclusion
      <SlideContainer key="slide-15" className="text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '55vh' }}>
        <div style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(16,185,129,0.1)', padding: '0.5rem 1.25rem', borderRadius: '30px', border: '1px solid rgba(16,185,129,0.2)' }}>
          <ShieldCheck size={18} style={{ color: '#10b981' }} aria-hidden="true" />
          <span style={{ fontSize: '0.9rem', color: '#10b981', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Take Back Control</span>
        </div>
        <h1 className="text-gradient" style={{ fontSize: '3.8rem', marginBottom: '1.5rem', lineHeight: 1.25, fontWeight: 700, maxWidth: '900px' }}>
          Your Wealth, Your Terms: Claim Your Financial Freedom Today
        </h1>
        <p style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto 2.5rem', lineHeight: 1.6, fontWeight: 300 }}>
          The tools have been democratized, and the step-by-step roadmap is right here in front of you. Don't let inflation erode your hard work—step onto the bridge to AI Finance.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button 
            onClick={onExit}
            style={{ background: 'var(--accent-gold)', color: 'black', border: 'none', padding: '1rem 2rem', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 0 20px rgba(251,191,36,0.3)', transition: 'all 0.2s' }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Start Learning Now
          </button>
        </div>
      </SlideContainer>
    ];
  }, [onExit]);

  const goToNextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  }, [slides.length]);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        goToNextSlide();
      } else if (e.key === 'ArrowLeft') {
        goToPrevSlide();
      } else if (e.key === 'Escape') {
        onExit();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide, onExit]);

  return (
    <div className="presentation-container">
      <div className="app-background" style={{ zIndex: 0 }}></div>
      
      <button 
        onClick={onExit}
        className="exit-presentation-btn"
      >
        <X size={20} aria-hidden="true" /> Exit Presentation
      </button>

      <div className="slide-content">
        <AnimatePresence mode="wait">
          {slides[currentSlideIndex]}
        </AnimatePresence>
      </div>

      <div className="presentation-controls">
        <button 
          className="control-btn" 
          onClick={goToPrevSlide}
          disabled={currentSlideIndex === 0}
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} aria-hidden="true" />
        </button>
        
        <span className="progress-indicator">
          {String(currentSlideIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>

        <button 
          className="next-btn-combined" 
          onClick={goToNextSlide}
          disabled={currentSlideIndex === slides.length - 1}
          aria-label="Next Slide"
        >
          Next Slide <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default PresentationViewerB;
