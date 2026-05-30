"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Download, FileText, Menu, X, Settings, MonitorPlay, Send, Video, Globe } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar({ onEnterPresentation }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPresentationDropdownOpen, setIsPresentationDropdownOpen] = useState(false);

  // Settings State (loaded from localStorage on mount)
  const [theme, setTheme] = useState("slate");
  const [textScale, setTextScale] = useState("medium");

  useEffect(() => {
    let savedTheme = localStorage.getItem("aurum-syllabus-theme") || "slate";
    const validThemes = ['slate', 'carbon', 'midnight', 'espresso', 'obsidian', 'navy', 'aurum'];
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

  const telegramChannels = [
    { name: "Aurum Main English", url: "https://t.me/aurum_official" }, // TODO: Update with real URL
    { name: "Aurum Support", url: "https://t.me/aurum_support" }, // TODO: Update with real URL
    { name: "Aurum Rise", url: "https://t.me/aurumrise" }, // TODO: Update with real URL
    { name: "Bryan Benson's Channel", url: "https://t.me/bryan_benson" } // TODO: Update with real URL
  ];

  const appsAndMedia = [
    { name: "Neo Bank App", url: "https://t.me/neobank" }, // TODO: Update with real URL
    { name: "YouTube Channel", url: "https://youtube.com/aurum" } // TODO: Update with real URL
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
            
            {/* Presentation Mode Dropdown */}
            <div className="relative">
              <Button
                onClick={() => {
                  setIsPresentationDropdownOpen(!isPresentationDropdownOpen);
                  setIsDropdownOpen(false);
                  setIsSettingsOpen(false);
                }}
                variant="outline"
                size="sm"
                className="flex items-center gap-1.5 border-[rgba(232,198,112,0.2)] text-accent-gold hover:bg-accent-gold/10 hover:border-accent-gold text-[10px] uppercase font-bold tracking-wider h-7 px-2.5"
              >
                <MonitorPlay size={12} />
                Presentation
                <ChevronDown size={12} className={`transition-transform duration-200 ${isPresentationDropdownOpen ? 'rotate-180' : ''}`} />
              </Button>

              {isPresentationDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setIsPresentationDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-3 w-72 origin-top-right rounded-2xl border border-[rgba(232,198,112,0.15)] bg-card p-4 shadow-2xl z-20 text-left space-y-3">
                    <div>
                      <h5 className="text-[10px] font-bold text-accent-gold uppercase tracking-wider mb-2 px-2">Select Presentation</h5>
                      <div className="space-y-1">
                        <button
                          onClick={() => {
                            setIsPresentationDropdownOpen(false);
                            if (onEnterPresentation) onEnterPresentation("A");
                          }}
                          className="w-full flex flex-col items-start gap-1 rounded-lg px-2.5 py-2 text-left hover:bg-background group transition-all cursor-pointer"
                        >
                          <span className="text-xs font-bold text-text-primary group-hover:text-accent-gold transition-colors flex items-center gap-1.5">
                            <MonitorPlay size={14} className="text-accent-gold" />
                            Presentation A
                          </span>
                          <span className="text-[10px] text-text-secondary pl-5 leading-normal">
                            Orientation, course introduction, and webinar presentation.
                          </span>
                        </button>

                        <button
                          onClick={() => {
                            setIsPresentationDropdownOpen(false);
                            if (onEnterPresentation) onEnterPresentation("B");
                          }}
                          className="w-full flex flex-col items-start gap-1 rounded-lg px-2.5 py-2 text-left hover:bg-background group transition-all cursor-pointer"
                        >
                          <span className="text-xs font-bold text-text-primary group-hover:text-accent-gold transition-colors flex items-center gap-1.5">
                            <MonitorPlay size={14} className="text-accent-gold" />
                            Presentation B (AI Finance)
                          </span>
                          <span className="text-[10px] text-text-secondary pl-5 leading-normal">
                            Introducing AI Finance, Neyro yields, and AurumRise mission.
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Settings Toggler */}
            <div className="relative">
              <Button 
                variant="outline"
                size="sm"
                className="flex items-center gap-1.5 border-[rgba(232,198,112,0.2)] text-text-secondary hover:text-accent-gold hover:border-accent-gold text-[10px] uppercase font-bold tracking-wider h-7 px-2.5"
                onClick={() => {
                  setIsSettingsOpen(!isSettingsOpen);
                  setIsDropdownOpen(false);
                  setIsPresentationDropdownOpen(false);
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
                          { id: 'obsidian', name: 'Obsidian' },
                          { id: 'navy', name: 'Navy' }
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

            {/* Consolidated Resources Dropdown */}
            <div className="relative">
              <Button 
                variant="default"
                size="sm"
                className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider h-7 px-2.5"
                onClick={() => {
                  setIsDropdownOpen(!isDropdownOpen);
                  setIsSettingsOpen(false);
                  setIsPresentationDropdownOpen(false);
                }}
              >
                <Download size={12} />
                Resources
                <ChevronDown size={12} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </Button>

              {isDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setIsDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-3 w-72 origin-top-right rounded-2xl border border-[rgba(232,198,112,0.15)] bg-card p-4 shadow-2xl z-20 text-left space-y-4">
                    
                    {/* PDF Guides */}
                    <div>
                      <h5 className="text-[10px] font-bold text-accent-gold uppercase tracking-wider mb-2 px-2">PDF Guides</h5>
                      <div className="space-y-1">
                        {pdfFiles.map((pdf, idx) => (
                          <a
                            key={idx}
                            href={pdf.url}
                            download
                            className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-xs text-text-secondary hover:bg-background hover:text-accent-gold transition-all"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <FileText size={14} className="text-accent-gold shrink-0" />
                            <span>{pdf.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="h-[1px] bg-[rgba(232,198,112,0.1)]" />

                    {/* Telegram Channels */}
                    <div>
                      <h5 className="text-[10px] font-bold text-accent-gold uppercase tracking-wider mb-2 px-2">Telegram Channels</h5>
                      <div className="space-y-1">
                        {telegramChannels.map((ch, idx) => (
                          <a
                            key={idx}
                            href={ch.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-xs text-text-secondary hover:bg-background hover:text-accent-gold transition-all"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <Send size={14} className="text-accent-gold shrink-0" />
                            <span>{ch.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="h-[1px] bg-[rgba(232,198,112,0.1)]" />

                    {/* Apps & Media */}
                    <div>
                      <h5 className="text-[10px] font-bold text-accent-gold uppercase tracking-wider mb-2 px-2">Apps & Media</h5>
                      <div className="space-y-1">
                        {appsAndMedia.map((item, idx) => (
                          <a
                            key={idx}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-xs text-text-secondary hover:bg-background hover:text-accent-gold transition-all"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            {item.name.toLowerCase().includes("youtube") ? (
                              <Video size={14} className="text-accent-gold shrink-0" />
                            ) : (
                              <Globe size={14} className="text-accent-gold shrink-0" />
                            )}
                            <span>{item.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>

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

            <div className="border-t border-[rgba(232,198,112,0.1)] pt-2 mt-2 space-y-1">
              <span className="block px-4 py-1.5 text-[9px] uppercase tracking-wider text-text-secondary font-bold font-sans">Presentations</span>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onEnterPresentation) onEnterPresentation("A");
                }}
                className="block w-full text-left rounded-xl px-4 py-2 hover:bg-card text-text-primary hover:text-accent-gold flex items-center gap-2 text-xs"
              >
                <MonitorPlay size={16} className="text-accent-gold" /> Presentation A
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onEnterPresentation) onEnterPresentation("B");
                }}
                className="block w-full text-left rounded-xl px-4 py-2 hover:bg-card text-text-primary hover:text-accent-gold flex items-center gap-2 text-xs"
              >
                <MonitorPlay size={16} className="text-accent-gold" /> Presentation B (AI Finance)
              </button>
            </div>
            
            {/* Mobile Settings section */}
            <div className="border-t border-[rgba(232,198,112,0.1)] pt-4 px-4 space-y-4">
              <p className="text-xs text-text-secondary font-sans uppercase tracking-wider">Display Settings</p>
              
              {/* Theme Settings */}
              <div className="space-y-1.5">
                <span className="text-[10px] text-text-secondary font-bold block">Theme Color</span>
                <div className="grid grid-cols-3 gap-2">
                  {['slate', 'carbon', 'midnight', 'espresso', 'obsidian', 'navy'].map(t => (
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

            {/* Mobile Resources section */}
            <div className="border-t border-[rgba(232,198,112,0.1)] pt-4 px-4 mt-4 space-y-4">
              <p className="text-xs text-accent-gold font-sans uppercase tracking-wider font-bold">Resources</p>
              
              {/* PDF Guides */}
              <div className="space-y-2">
                <span className="text-[10px] text-text-secondary font-bold block uppercase tracking-wider">PDF Guides</span>
                <div className="grid grid-cols-1 gap-1 pl-2">
                  {pdfFiles.map((pdf, idx) => (
                    <a
                      key={idx}
                      href={pdf.url}
                      download
                      className="flex items-center gap-2 py-1 text-sm text-text-secondary hover:text-accent-gold"
                    >
                      <Download size={14} className="text-accent-gold shrink-0" />
                      <span>{pdf.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Telegram Channels */}
              <div className="space-y-2">
                <span className="text-[10px] text-text-secondary font-bold block uppercase tracking-wider">Telegram Channels</span>
                <div className="grid grid-cols-1 gap-1 pl-2">
                  {telegramChannels.map((ch, idx) => (
                    <a
                      key={idx}
                      href={ch.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 py-1 text-sm text-text-secondary hover:text-accent-gold"
                    >
                      <Send size={14} className="text-accent-gold shrink-0" />
                      <span>{ch.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Apps & Media */}
              <div className="space-y-2">
                <span className="text-[10px] text-text-secondary font-bold block uppercase tracking-wider">Apps & Media</span>
                <div className="grid grid-cols-1 gap-1 pl-2">
                  {appsAndMedia.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 py-1 text-sm text-text-secondary hover:text-accent-gold"
                    >
                      {item.name.toLowerCase().includes("youtube") ? (
                        <Video size={14} className="text-accent-gold shrink-0" />
                      ) : (
                        <Globe size={14} className="text-accent-gold shrink-0" />
                      )}
                      <span>{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
