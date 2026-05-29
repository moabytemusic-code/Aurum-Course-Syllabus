'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { BookOpen, Loader2, Calendar, ShieldCheck, CheckCircle2, ArrowRight, Clock, Award } from 'lucide-react';

function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const passedEmail = searchParams.get('email');
    if (passedEmail) {
      setEmail(passedEmail);
    }
  }, [searchParams]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/syllabus/api/freemium-register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, first_name: firstName })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to create account.');
      }

      // Success, redirect to portal
      router.push('/');
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white grid grid-cols-1 lg:grid-cols-5 font-sans">
      
      {/* LEFT COLUMN: Value Stack & Onboarding Webinars */}
      <div className="lg:col-span-3 bg-gradient-to-br from-[#070b19] via-[#05060f] to-[#0c0817] p-8 md:p-12 lg:p-16 flex flex-col justify-between border-r border-white/5 relative overflow-hidden">
        {/* Neon blur backdrops */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#00ff88]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#2d8cf0]/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Top Header */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="bg-gradient-to-tr from-[#2d8cf0] to-[#00ff88] p-2.5 rounded-xl shadow-lg shadow-emerald-500/10">
            <BookOpen className="text-black" size={20} />
          </div>
          <span className="font-serif font-black tracking-wider text-sm bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            AURUM EDUCATION PORTAL
          </span>
        </div>

        {/* Core Content */}
        <div className="relative z-10 my-12 max-w-2xl space-y-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Award size={12} /> Freemium Syllabus Access Active
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              Master AI-Driven <br />
              <span className="bg-gradient-to-r from-[#e8c670] to-[#ffd700] bg-clip-text text-transparent">Wealth Management</span>
            </h1>
            <p className="text-[#a8b2c8] text-base sm:text-lg max-w-lg leading-relaxed">
              Activate your free pass to study our ecosystem of automated algorithms, card systems, and decentralized finance.
            </p>
          </div>

          {/* Benefits Bullet Points */}
          <div className="space-y-4">
            <div className="flex gap-3.5 items-start">
              <div className="bg-[#2d8cf0]/10 p-1.5 rounded-lg border border-[#2d8cf0]/20 mt-0.5">
                <ShieldCheck className="text-[#2d8cf0]" size={16} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#f0ede6]">100% Custody Safe Values</h3>
                <p className="text-xs text-[#a8b2c8] mt-0.5">Learn to configure non-custodial tools like Neyro where capital stays in your wallet.</p>
              </div>
            </div>
            <div className="flex gap-3.5 items-start">
              <div className="bg-[#00ff88]/10 p-1.5 rounded-lg border border-[#00ff88]/20 mt-0.5">
                <CheckCircle2 className="text-[#00ff88]" size={16} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#f0ede6]">Syllabus Database Access</h3>
                <p className="text-xs text-[#a8b2c8] mt-0.5">Gain a 10-visit free pass to read, search, and copy definitions of the entire training curriculum.</p>
              </div>
            </div>
          </div>

          {/* Webinars Calendar Block */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#ffd700]/5 rounded-full blur-xl" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#e8c670] flex items-center gap-2 mb-4">
              <Calendar size={16} /> Live Orientation & Onboarding Schedule
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1 bg-black/30 p-3.5 rounded-xl border border-white/5">
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Tuesday • 8PM EST</span>
                <h4 className="text-xs font-bold text-white">Orientation Webinar</h4>
                <p className="text-[10px] text-[#a8b2c8] flex items-center gap-1"><Clock size={10} /> 45 Mins • Zoom</p>
              </div>
              <div className="space-y-1 bg-black/30 p-3.5 rounded-xl border border-white/5">
                <span className="text-[10px] text-sky-400 font-bold uppercase tracking-wider">Wednesday • 8PM EST</span>
                <h4 className="text-xs font-bold text-white">Web3 Onboarding</h4>
                <p className="text-[10px] text-[#a8b2c8] flex items-center gap-1"><Clock size={10} /> 60 Mins • Zoom</p>
              </div>
              <div className="space-y-1 bg-black/30 p-3.5 rounded-xl border border-white/5">
                <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">Sunday • 9PM EST</span>
                <h4 className="text-xs font-bold text-white">Ask Me Anything (AMA)</h4>
                <p className="text-[10px] text-[#a8b2c8] flex items-center gap-1"><Clock size={10} /> 30 Mins • Zoom</p>
              </div>
            </div>
            <p className="text-[10px] text-white/40 mt-3 text-center italic">
              * Zoom links and passcodes are accessible directly in the portal upon activation.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="relative z-10 border-t border-white/5 pt-6 text-xs text-white/40 flex flex-col sm:flex-row justify-between gap-2">
          <span>Led by former Binance & TradSec Executives.</span>
          <span>© 2026 Aurum Foundation. All rights reserved.</span>
        </div>
      </div>

      {/* RIGHT COLUMN: Form */}
      <div className="lg:col-span-2 bg-[#050505] p-8 md:p-12 lg:p-16 flex items-center justify-center relative">
        <div className="w-full max-w-md space-y-8 relative z-10">
          
          <div className="text-center lg:text-left space-y-2">
            <h2 className="text-3xl font-serif font-bold text-white">Activate Access</h2>
            <p className="text-sm text-[#a8b2c8]">Create your secure pass to start studying.</p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-xs font-bold leading-relaxed">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] text-white/50 uppercase tracking-widest font-bold pl-1">First Name</label>
              <input 
                type="text" 
                placeholder="e.g. John" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 h-12 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] focus:bg-black/80 transition-all"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-white/50 uppercase tracking-widest font-bold pl-1">Email Address</label>
              <input 
                type="email" 
                required
                placeholder="e.g. name@proton.me" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 h-12 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] focus:bg-black/80 transition-all"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-white/50 uppercase tracking-widest font-bold pl-1">Choose Password</label>
              <input 
                type="password" 
                required
                placeholder="Min 6 characters" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 h-12 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] focus:bg-black/80 transition-all"
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-black font-black text-sm h-14 rounded-xl hover:shadow-[0_0_25px_rgba(0,255,136,0.35)] transition-all flex justify-center items-center gap-2 mt-6 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer uppercase tracking-wider"
            >
              {loading ? (
                <Loader2 className="animate-spin text-black" size={20} />
              ) : (
                <>
                  Activate My Access <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <p className="text-[10px] text-center text-white/30 px-6 leading-relaxed">
            By activating access, you reserve a free pass to standard modules. We do not sell your personal data.
          </p>

        </div>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <React.Suspense fallback={
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6">
        <Loader2 className="animate-spin text-[#2d8cf0]" size={32} />
      </div>
    }>
      <RegisterForm />
    </React.Suspense>
  );
}
