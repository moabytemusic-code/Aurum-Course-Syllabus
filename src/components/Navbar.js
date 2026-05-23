"use client";

import React, { useState } from "react";
import { ChevronDown, Download, FileText, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pdfFiles = [
    { name: "Platform Guide", url: "/English. Guide to Using the Aurum Platform .pdf" },
    { name: "Partner Program", url: "/English.AURUM Partner Program_copy.pdf" },
    { name: "Aurum Token", url: "/english_Aurum_Token.pdf" },
    { name: "Guest Presentation", url: "/English. Aurum Guest Presentation.pdf" }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[rgba(232,198,112,0.12)] bg-[#0A1428]/85 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-serif text-3xl font-bold tracking-widest bg-gradient-to-r from-accent-gold to-gold-dark bg-clip-text text-transparent">
              AURUM
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 font-sans text-xs font-bold tracking-widest text-text-secondary uppercase">
            <a href="#overview" className="hover:text-accent-gold transition-colors">Overview</a>
            <a href="#curriculum" className="hover:text-accent-gold transition-colors">Curriculum</a>
            <a href="#projects" className="hover:text-accent-gold transition-colors">Products</a>
            <a href="#glossary" className="hover:text-accent-gold transition-colors">Glossary & FAQ</a>
          </div>

          {/* PDF Download Button */}
          <div className="hidden md:block relative">
            <Button 
              variant="default" 
              className="flex items-center gap-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <Download size={18} />
              Download PDF Guides
              <ChevronDown size={16} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </Button>

            {isDropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setIsDropdownOpen(false)}
                />
                <div className="absolute right-0 mt-3 w-64 origin-top-right rounded-2xl border border-[rgba(232,198,112,0.15)] bg-card p-2 shadow-2xl z-20">
                  {pdfFiles.map((pdf, idx) => (
                    <a
                      key={idx}
                      href={pdf.url}
                      download
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-text-secondary hover:bg-[#0A1428] hover:text-accent-gold transition-all"
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
        <div className="border-b border-[rgba(232,198,112,0.15)] bg-[#0A1428] md:hidden">
          <div className="space-y-1 px-4 pb-6 pt-3 font-sans text-sm font-bold uppercase tracking-wider text-text-secondary">
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
            <div className="border-t border-[rgba(232,198,112,0.1)] pt-4 px-4">
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
