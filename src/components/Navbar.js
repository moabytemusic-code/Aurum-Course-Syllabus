"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Download, FileText, Menu, X, Settings, MonitorPlay } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar({ onEnterPresentation }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Settings State (loaded from localStorage on mount)
  const [theme, setTheme] = useState("slate");
  const [textScale, setTextScale] = useState("medium");

  useEffect(() => {
    let savedTheme = localStorage.getItem("aurum-syllabus-theme") || "slate";
    const validThemes = ['slate', 'carbon', 'midnight', 'espresso', 'obsidian', 'aurum'];
    if (!validThemes.includes(savedTheme)) savedTheme = 'slate';
    const savedScale = localStorage.getItem("aurum-syllabus-scale") || "medium";
    
    setTheme(savedTheme);
    setTextScale(savedScale);
    document.body.className = `theme-${savedTheme} text-scale-${savedScale}`;
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("aurum-syllabus-theme", newTheme);
    // Replace theme- class in body className
    const currentClass = document.body.className;
    const cleanClass = currentClass.replace(/theme-\w+/, "").trim();
    document.body.className = `${cleanClass} theme-${newTheme}`.trim();
  };

  const handleScaleChange = (newScale) => {
    setTextScale(newScale);
    localStorage.setItem("aurum-syllabus-scale", newScale);
    // Replace text-scale- class in body className
    const currentClass = document.body.className;
    const cleanClass = currentClass.replace(/text-scale-\w+/, "").trim();
    document.body.className = `${cleanClass} text-scale-${newScale}`.trim();
  };

  const pdfFiles = [
    { name: "Platform Guide", url: "https://www.welcometoaurum.com/English. Guide to Using the Aurum Platform .pdf" },
    { name: "Partner Program", url: "https://www.welcometoaurum.com/English.AURUM Partner Program_copy.pdf" },
    { name: "Aurum Token", url: "https://www.welcometoaurum.com/english_Aurum_Token.pdf" },
    { name: "Guest Presentation", url: "https://www.welcometoaurum.com/English. Aurum Guest Presentation.pdf" }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[rgba(232,198,112,0.12)] bg-background/85 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-serif text-3xl font-bold tracking-widest bg-gradient-to-r from-accent-gold to-gold-dark bg-clip-text text-transparent">
              AURUM
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 font-sans text-[10px] font-bold tracking-widest text-text-secondary uppercase">
            <a href="https://www.welcometoaurum.com/partner/dashboard" className="hover:text-accent-gold transition-colors font-bold text-accent-gold">Dashboard</a>
            <a href="#overview" className="hover:text-accent-gold transition-colors">Overview</a>
            <a href="#curriculum" className="hover:text-accent-gold transition-colors">Curriculum</a>
            <a href="#projects" className="hover:text-accent-gold transition-colors">Products</a>
            <a href="#glossary" className="hover:text-accent-gold transition-colors">Glossary & FAQ</a>
          </div>

          {/* PDF Download Button & Settings Button */}
          <div className="hidden md:flex items-center gap-4 relative">
            
            {/* Presentation Mode Button */}
            <Button
              onClick={onEnterPresentation}
              variant="outline"
              size="sm"
              className="flex items-center gap-1.5 border-[rgba(232,198,112,0.2)] text-accent-gold hover:bg-accent-gold/10 hover:border-accent-gold text-[10px] uppercase font-bold tracking-wider h-7 px-2.5"
            >
              <MonitorPlay size={12} />
              Presentation
            </Button>

            {/* Settings Toggler */}
            <div className="relative">
              <Button 
                variant="outline"
                size="sm"
                className="flex items-center gap-1.5 border-[rgba(232,198,112,0.2)] text-text-secondary hover:text-accent-gold hover:border-accent-gold text-[10px] uppercase font-bold tracking-wider h-7 px-2.5"
                onClick={() => {
                  setIsSettingsOpen(!isSettingsOpen);
                  setIsDropdownOpen(false);
                }}
              >
                <Settings size={12} />
                Display
              </Button>

              {isSettingsOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setIsSettingsOpen(false)}
                  />
                  <div className="absolute right-0 mt-3 w-64 origin-top-right rounded-2xl border border-[rgba(232,198,112,0.15)] bg-card p-4 shadow-2xl z-20 space-y-4 text-left">
                    <h4 className="text-xs uppercase tracking-wider font-bold text-accent-gold mb-2 font-sans">Display Settings</h4>
                    
                    {/* Theme Select */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-wider text-text-secondary font-bold font-sans">Theme Color</label>
                      <div className="grid grid-cols-3 gap-1.5">
                        {[
                          { id: 'slate', name: 'Slate' },
                          { id: 'carbon', name: 'Carbon' },
                          { id: 'midnight', name: 'Midnight' },
                          { id: 'espresso', name: 'Espresso' },
                          { id: 'obsidian', name: 'Obsidian' }
                        ].map(t => (
                          <button
                            key={t.id}
                            onClick={() => handleThemeChange(t.id)}
                            className={`px-2 py-1 text-[10px] rounded border transition-all cursor-pointer font-sans ${
                              theme === t.id 
                                ? 'border-accent-gold bg-accent-gold/15 text-accent-gold font-bold' 
                                : 'border-[rgba(232,198,112,0.1)] bg-background text-text-secondary hover:border-accent-gold/50'
                            }`}
                          >
                            {t.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Text Size Select */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-wider text-text-secondary font-bold font-sans">Text Size</label>
                      <div className="grid grid-cols-3 gap-1.5">
                        {[
                          { id: 'small', name: 'Small' },
                          { id: 'medium', name: 'Medium' },
                          { id: 'large', name: 'Large' }
                        ].map(s => (
                          <button
                            key={s.id}
                            onClick={() => handleScaleChange(s.id)}
                            className={`px-2 py-1 text-[10px] rounded border transition-all cursor-pointer font-sans ${
                              textScale === s.id 
                                ? 'border-accent-gold bg-accent-gold/15 text-accent-gold font-bold' 
                                : 'border-[rgba(232,198,112,0.1)] bg-background text-text-secondary hover:border-accent-gold/50'
                            }`}
                          >
                            {s.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Download Guide PDF */}
            <div className="relative">
              <Button 
                variant="default"
                size="sm"
                className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider h-7 px-2.5"
                onClick={() => {
                  setIsDropdownOpen(!isDropdownOpen);
                  setIsSettingsOpen(false);
                }}
              >
                <Download size={12} />
                Guides
                <ChevronDown size={12} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </Button>

              {isDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setIsDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-3 w-64 origin-top-right rounded-2xl border border-[rgba(232,198,112,0.15)] bg-card p-2 shadow-2xl z-20 text-left">
                    {pdfFiles.map((pdf, idx) => (
                      <a
                        key={idx}
                        href={pdf.url}
                        download
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-text-secondary hover:bg-background hover:text-accent-gold transition-all"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <FileText size={16} className="text-accent-gold" />
                        <span>{pdf.name}</span>
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>

          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-xl p-2.5 text-text-secondary hover:bg-card hover:text-accent-gold"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-b border-[rgba(232,198,112,0.15)] bg-background md:hidden">
          <div className="space-y-1 px-4 pb-6 pt-3 font-sans text-sm font-bold uppercase tracking-wider text-text-secondary">
            <a
              href="https://www.welcometoaurum.com/partner/dashboard"
              className="block rounded-xl px-4 py-3 hover:bg-card text-accent-gold"
            >
              Dashboard ↗
            </a>
            <a
              href="#overview"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block rounded-xl px-4 py-3 hover:bg-card hover:text-accent-gold"
            >
              Overview
            </a>
            <a
              href="#curriculum"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block rounded-xl px-4 py-3 hover:bg-card hover:text-accent-gold"
            >
              Curriculum
            </a>
            <a
              href="#projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block rounded-xl px-4 py-3 hover:bg-card hover:text-accent-gold"
            >
              Products
            </a>
            <a
              href="#glossary"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block rounded-xl px-4 py-3 hover:bg-card hover:text-accent-gold"
            >
              Glossary & FAQ
            </a>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (onEnterPresentation) onEnterPresentation();
              }}
              className="block w-full text-left rounded-xl px-4 py-3 hover:bg-card text-accent-gold flex items-center gap-2"
            >
              <MonitorPlay size={18} /> Presentation Mode
            </button>
            
            {/* Mobile Settings section */}
            <div className="border-t border-[rgba(232,198,112,0.1)] pt-4 px-4 space-y-4">
              <p className="text-xs text-text-secondary font-sans uppercase tracking-wider">Display Settings</p>
              
              {/* Theme Settings */}
              <div className="space-y-1.5">
                <span className="text-[10px] text-text-secondary font-bold block">Theme Color</span>
                <div className="grid grid-cols-3 gap-2">
                  {['slate', 'carbon', 'midnight', 'espresso', 'obsidian'].map(t => (
                    <button
                      key={t}
                      onClick={() => handleThemeChange(t)}
                      className={`flex-1 py-1.5 text-xs rounded border capitalize transition-all font-sans ${
                        theme === t 
                          ? 'border-accent-gold bg-accent-gold/15 text-accent-gold font-bold' 
                          : 'border-[rgba(232,198,112,0.1)] bg-card text-text-secondary'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Text Sizing */}
              <div className="space-y-1.5">
                <span className="text-[10px] text-text-secondary font-bold block">Text Size</span>
                <div className="flex gap-2">
                  {['small', 'medium', 'large'].map(s => (
                    <button
                      key={s}
                      onClick={() => handleScaleChange(s)}
                      className={`flex-1 py-1.5 text-xs rounded border capitalize transition-all font-sans ${
                        textScale === s 
                          ? 'border-accent-gold bg-accent-gold/15 text-accent-gold font-bold' 
                          : 'border-[rgba(232,198,112,0.1)] bg-card text-text-secondary'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile PDF section */}
            <div className="border-t border-[rgba(232,198,112,0.1)] pt-4 px-4 mt-4">
              <p className="text-xs text-text-secondary font-sans uppercase mb-2 tracking-wider">Download PDFs</p>
              <div className="grid grid-cols-1 gap-2">
                {pdfFiles.map((pdf, idx) => (
                  <a
                    key={idx}
                    href={pdf.url}
                    download
                    className="flex items-center gap-2 rounded-xl py-2 text-sm text-text-secondary hover:text-accent-gold"
                  >
                    <Download size={14} className="text-accent-gold" />
                    <span>{pdf.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
