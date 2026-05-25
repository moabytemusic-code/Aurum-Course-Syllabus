'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { BookOpen, Loader2 } from 'lucide-react';

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
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#00ff88] rounded-full blur-[150px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#2d8cf0] rounded-full blur-[150px] opacity-10 pointer-events-none" />

      <div className="relative z-10 w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-md">
        <div className="flex justify-center mb-6">
          <div className="bg-[#2d8cf0]/20 p-3 rounded-xl border border-[#2d8cf0]/30">
            <BookOpen className="text-[#2d8cf0]" size={32} />
          </div>
        </div>

        <h1 className="text-3xl font-black text-center mb-2">Create Your Account</h1>
        <p className="text-center text-white/50 mb-8 text-sm">
          Activate your 10-visit free pass to the Education Portal.
        </p>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-xl text-sm font-semibold mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <input 
              type="text" 
              placeholder="First Name (Optional)" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#00ff88]/50 focus:ring-1 focus:ring-[#00ff88]/50 transition-all"
            />
          </div>
          <div>
            <input 
              type="email" 
              required
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#00ff88]/50 focus:ring-1 focus:ring-[#00ff88]/50 transition-all"
            />
          </div>
          <div>
            <input 
              type="password" 
              required
              placeholder="Choose a Secure Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#00ff88]/50 focus:ring-1 focus:ring-[#00ff88]/50 transition-all"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-black font-black text-lg py-4 rounded-xl hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all flex justify-center items-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? <Loader2 className="animate-spin" size={24} /> : 'Activate My Access'}
          </button>
        </form>
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
