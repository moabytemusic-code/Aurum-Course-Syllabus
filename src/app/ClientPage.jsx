"use client";

import React, { useState, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { 
  BookOpen, Layers, Info, CheckCircle2, ShieldCheck, Zap, 
  TrendingUp, Key, Coins, Search, ArrowRight, UserCheck, HelpCircle
} from "lucide-react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BackToTop from "../components/BackToTop";
import Mermaid from "../components/Mermaid";
import PresentationViewer from "../components/PresentationViewer";
import ChatWidgetEmbed from "../components/ChatWidgetEmbed";

import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";

// import { courseModules } from "../data/courseData"; // Removed static import

// Helper to return a premium dynamic icon based on content key terms
const getTakeawayIcon = (text) => {
  const t = text.toLowerCase();
  if (t.includes("ai") || t.includes("bot") || t.includes("neyro") || t.includes("quantum") || t.includes("ex-a1") || t.includes("algorithm")) {
    return <Zap size={20} className="text-accent-gold mt-1 shrink-0" />;
  }
  if (t.includes("secure") || t.includes("non-custodial") || t.includes("control") || t.includes("keys") || t.includes("protection") || t.includes("confirm")) {
    return <ShieldCheck size={20} className="text-emerald-400 mt-1 shrink-0" />;
  }
  if (t.includes("profit") || t.includes("yield") || t.includes("earn") || t.includes("legacy") || t.includes("commission") || t.includes("income") || t.includes("sales")) {
    return <TrendingUp size={20} className="text-sky-400 mt-1 shrink-0" />;
  }
  if (t.includes("register") || t.includes("invite") || t.includes("code") || t.includes("account") || t.includes("password")) {
    return <Key size={20} className="text-pink-400 mt-1 shrink-0" />;
  }
  if (t.includes("rwa") || t.includes("real estate") || t.includes("gold") || t.includes("physical")) {
    return <Coins size={20} className="text-rose-400 mt-1 shrink-0" />;
  }
  return <CheckCircle2 size={20} className="text-violet-400 mt-1 shrink-0" />;
};

export default function ClientPage({ initialCourseModules = [] }) {
  const courseModules = initialCourseModules;
  const [activeModuleId, setActiveModuleId] = useState(courseModules.length > 0 ? courseModules[0].id : null);
  const [glossarySearch, setGlossarySearch] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [expandedTopicId, setExpandedTopicId] = useState(null);
  const [isPresentationMode, setIsPresentationMode] = useState(false);

  // Markdown custom renderer components
  const MarkdownComponents = useMemo(() => ({
    a: ({ href, children }) => {
      if (href && href.startsWith("#tooltip:")) {
        const tooltipText = decodeURIComponent(href.replace("#tooltip:", ""));
        return (
          <span className="info-bubble">
            {children}
            <span className="tooltip-text">
              <span className="flex items-center gap-1.5 text-accent-gold mb-1 font-bold">
                <Info size={14} /> Definition
              </span>
              {tooltipText}
            </span>
          </span>
        );
      }
      return (
        <a href={href} className="text-accent-gold hover:text-gold-dark hover:underline transition-colors font-semibold">
          {children}
        </a>
      );
    },
    code: ({ className, children }) => {
      const match = /language-mermaid/.exec(className || "");
      if (match) {
        return <Mermaid chart={String(children).replace(/\n$/, "")} />;
      }
      return (
        <code className="bg-card px-1.5 py-0.5 rounded text-accent-gold border border-accent-gold/15 font-mono text-sm">
          {children}
        </code>
      );
    },
    pre: ({ children }) => {
      const childrenArray = React.Children.toArray(children);
      const isMermaid = childrenArray.some(
        child => React.isValidElement(child) && (
          (child.props && child.props.className && child.props.className.includes("language-mermaid")) ||
          child.type === Mermaid ||
          (child.props && child.props.chart)
        )
      );
      if (isMermaid) {
        return <>{children}</>;
      }
      return (
        <pre className="bg-card/50 p-6 rounded-2xl border border-[rgba(232,198,112,0.12)] my-6 overflow-x-auto font-mono text-sm text-[#F0EDE6] shadow-inner">
          {children}
        </pre>
      );
    },
    blockquote: ({ children }) => (
      <blockquote className="bg-accent-gold/5 border-l-4 border-accent-gold p-6 rounded-r-2xl my-6 font-sans italic text-[#A8B2C8] leading-relaxed">
        {children}
      </blockquote>
    ),
    h3: ({ children }) => <h3 className="text-2xl font-bold font-serif text-accent-gold mt-8 mb-4">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold font-serif text-[#F0EDE6] mt-6 mb-3">{children}</h4>,
    p: ({ children }) => <p className="mb-4 text-[#A8B2C8] leading-relaxed text-base">{children}</p>,
    ul: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2 text-[#A8B2C8]">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-[#A8B2C8]">{children}</ol>,
    li: ({ children }) => <li className="text-[#A8B2C8] leading-relaxed">{children}</li>,
    img: ({ src, alt }) => (
      <div className="my-8 flex flex-col items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={src} 
          alt={alt} 
          className="rounded-xl border border-[rgba(232,198,112,0.15)] shadow-2xl max-w-full h-auto transition-transform hover:scale-[1.01]" 
        />
        {alt && <span className="mt-2 text-xs text-text-secondary italic uppercase tracking-wider">{alt}</span>}
      </div>
    )
  }), []);

  // Split modules for sections
  const module1 = courseModules.find(m => m.id === "intro-aurum");
  const module2Products = courseModules.find(m => m.id === "trading-products");
  const module3Partner = courseModules.find(m => m.id === "partner-program");
  const glossaryModule = courseModules.find(m => m.id === "reference");

  // Format glossary terms as search list
  const glossaryTerms = useMemo(() => {
    if (!glossaryModule || !glossaryModule.topics[0]) return [];
    const text = glossaryModule.topics[0].deepDive;
    const termBlocks = text.split(/\n\d+\.\s+\*\*/);
    
    return termBlocks.slice(1).map((block, index) => {
      const parts = block.split(/\*\*\:\s*\n?\s*\*Definition:\*/);
      const name = parts[0] ? parts[0].trim() : `Term ${index + 1}`;
      const definitionPart = parts[1] ? parts[1].split(/\*Analogy:\*|\*Important:\*/) : [""];
      const definition = definitionPart[0] ? definitionPart[0].trim() : "";
      const analogyPart = definitionPart[1] ? definitionPart[1].trim() : "";
      
      return {
        name,
        definition,
        analogy: analogyPart,
        originalText: block
      };
    });
  }, [glossaryModule]);

  // Filtered glossary list
  const filteredGlossary = useMemo(() => {
    return glossaryTerms.filter(term => 
      term.name.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      term.definition.toLowerCase().includes(glossarySearch.toLowerCase())
    );
  }, [glossaryTerms, glossarySearch]);

  const toggleTopicExpander = (id) => {
    setExpandedTopicId(expandedTopicId === id ? null : id);
  };

  if (isPresentationMode) {
    return <PresentationViewer onExit={() => setIsPresentationMode(false)} />;
  }

  return (
    <div className="min-h-screen bg-background text-[#F0EDE6] selection:bg-accent-gold/30 selection:text-white">
      {/* Sticky Top Navbar */}
      <Navbar onEnterPresentation={() => setIsPresentationMode(true)} />

      {/* Hero Header */}
      <Hero />

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-6 md:px-8 pb-24 space-y-24">
        
        {/* Section 1: Overview */}
        <section id="overview" className="scroll-mt-24 py-12">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge variant="outline" className="mb-3 uppercase tracking-widest text-[10px] border-accent-gold/20">
              01 / Orientation
            </Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-accent-gold">
              Welcome to Aurum
            </h2>
            <Separator className="mt-4 w-12" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="text-accent-gold shrink-0" size={22} />
                  Syllabus Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-text-secondary leading-relaxed text-base">
                  Welcome to the official education portal for **Aurum**. This syllabus serves as a comprehensive training curriculum to understand our ecosystem of automated algorithms, card systems, staking strategies, and decentralized finance.
                </p>
                <div className="bg-background/40 p-6 rounded-2xl border border-[rgba(232,198,112,0.1)]">
                  <h4 className="font-serif text-lg font-bold text-accent-gold mb-3">Key Takeaways</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2.5 text-text-secondary text-sm">
                      <span className="text-accent-gold font-bold">•</span>
                      <span>Learn the difference between stagnant banking and advanced algorithm allocations.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-text-secondary text-sm">
                      <span className="text-accent-gold font-bold">•</span>
                      <span>Gain actionable guides on account verification, deposits, and bot activation.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-text-secondary text-sm">
                      <span className="text-accent-gold font-bold">•</span>
                      <span>Understand structural token utility and gold-backed vault settlement models.</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="text-accent-gold shrink-0" size={22} />
                  Founding Team
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="border-b border-[rgba(232,198,112,0.1)] pb-3">
                    <h5 className="font-serif text-base font-bold text-[#F0EDE6]">Bryan Benson</h5>
                    <span className="text-xs text-accent-gold uppercase tracking-wider font-bold">Chief Executive Officer</span>
                    <p className="text-xs text-text-secondary mt-1">Former Director at Binance, bringing institutional asset standards.</p>
                  </div>
                  <div className="border-b border-[rgba(232,198,112,0.1)] pb-3">
                    <h5 className="font-serif text-base font-bold text-[#F0EDE6]">Drei Menza</h5>
                    <span className="text-xs text-accent-gold uppercase tracking-wider font-bold">Co-Founder & Dir. of Trading Ops</span>
                    <p className="text-xs text-text-secondary mt-1">Oversees algorithmic trading bot logic and strategies.</p>
                  </div>
                  <div>
                    <h5 className="font-serif text-base font-bold text-[#F0EDE6]">Ahmad Zen</h5>
                    <span className="text-xs text-accent-gold uppercase tracking-wider font-bold">Co-Founder & Marketing Director</span>
                    <p className="text-xs text-text-secondary mt-1">Directs brand strategy, client engagement, and partner ranks.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 2: Curriculum Accordion */}
        <section id="curriculum" className="scroll-mt-24 py-12">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge variant="outline" className="mb-3 uppercase tracking-widest text-[10px] border-accent-gold/20">
              02 / Education Curriculum
            </Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-accent-gold">
              Course Modules
            </h2>
            <Separator className="mt-4 w-12" />
          </div>

          <Accordion type="single" collapsible defaultValue="module-1" className="w-full">
            
            {/* Module 1 Accordion */}
            {module1 && (
              <AccordionItem value="module-1">
                <AccordionTrigger>{module1.title}</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-12">
                    {module1.topics.map(topic => (
                      <div key={topic.id} className="border-b border-[rgba(232,198,112,0.1)] pb-10 last:border-b-0 last:pb-0">
                        <h4 className="font-serif text-xl sm:text-2xl font-bold text-accent-gold mb-4 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
                          {topic.title}
                        </h4>
                        
                        {/* Summary / Key takeaways card */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                          <Card className="lg:col-span-1 border border-accent-gold/10 bg-background/35 shadow-inner">
                            <CardHeader className="p-5">
                              <CardTitle className="text-sm uppercase tracking-wider flex items-center gap-1.5 text-text-secondary font-bold font-sans">
                                <Layers size={16} /> Key Takeaways
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="p-5 pt-0">
                              <ul className="space-y-4">
                                {topic.presenterSummary.map((point, idx) => (
                                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#F0EDE6] leading-relaxed">
                                    {getTakeawayIcon(point)}
                                    <span>
                                      {point.includes("\n") ? (
                                        <>
                                          {point.split("\n")[0]}
                                          <span className="block text-xs text-text-secondary mt-1">
                                            {point.split("\n")[1]}
                                          </span>
                                        </>
                                      ) : (
                                        point
                                      )}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>

                          {/* Action Button & Deep Dive */}
                          <div className="lg:col-span-2">
                            <div className="flex justify-start mb-4">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="flex items-center gap-2"
                                onClick={() => toggleTopicExpander(topic.id)}
                              >
                                <BookOpen size={16} />
                                {expandedTopicId === topic.id ? "Close Coursework" : "Dive Deeper: View Detailed Coursework"}
                              </Button>
                            </div>

                            {expandedTopicId === topic.id && (
                              <div className="mt-4 p-6 bg-background/50 border-l-4 border-accent-gold rounded-r-2xl overflow-hidden animate-in fade-in duration-300">
                                <div className="markdown-content">
                                  <ReactMarkdown rehypePlugins={[rehypeRaw]} components={MarkdownComponents}>
                                    {topic.deepDive}
                                  </ReactMarkdown>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )}

            {/* Module 3 Accordion */}
            {module3Partner && (
              <AccordionItem value="module-3">
                <AccordionTrigger>{module3Partner.title}</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-12">
                    {module3Partner.topics.map(topic => (
                      <div key={topic.id} className="border-b border-[rgba(232,198,112,0.1)] pb-10 last:border-b-0 last:pb-0">
                        <h4 className="font-serif text-xl sm:text-2xl font-bold text-accent-gold mb-4 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
                          {topic.title}
                        </h4>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                          <Card className="lg:col-span-1 border border-accent-gold/10 bg-background/35 shadow-inner">
                            <CardHeader className="p-5">
                              <CardTitle className="text-sm uppercase tracking-wider flex items-center gap-1.5 text-text-secondary font-bold font-sans">
                                <Layers size={16} /> Key Takeaways
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="p-5 pt-0">
                              <ul className="space-y-4">
                                {topic.presenterSummary.map((point, idx) => (
                                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#F0EDE6] leading-relaxed">
                                    {getTakeawayIcon(point)}
                                    <span>
                                      {point.includes("\n") ? (
                                        <>
                                          {point.split("\n")[0]}
                                          <span className="block text-xs text-text-secondary mt-1">
                                            {point.split("\n")[1]}
                                          </span>
                                        </>
                                      ) : (
                                        point
                                      )}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>

                          <div className="lg:col-span-2">
                            <div className="flex justify-start mb-4">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="flex items-center gap-2"
                                onClick={() => toggleTopicExpander(topic.id)}
                              >
                                <BookOpen size={16} />
                                {expandedTopicId === topic.id ? "Close Coursework" : "Dive Deeper: View Detailed Coursework"}
                              </Button>
                            </div>

                            {expandedTopicId === topic.id && (
                              <div className="mt-4 p-6 bg-background/50 border-l-4 border-accent-gold rounded-r-2xl overflow-hidden animate-in fade-in duration-300">
                                <div className="markdown-content">
                                  <ReactMarkdown rehypePlugins={[rehypeRaw]} components={MarkdownComponents}>
                                    {topic.deepDive}
                                  </ReactMarkdown>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )}

          </Accordion>
        </section>

        {/* Section 3: Products / Projects Grid */}
        <section id="projects" className="scroll-mt-24 py-12">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge variant="outline" className="mb-3 uppercase tracking-widest text-[10px] border-accent-gold/20">
              03 / Products & Technologies
            </Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-accent-gold">
              AI Algorithmic Products
            </h2>
            <p className="text-sm text-text-secondary max-w-xl mt-2 font-sans">
              Discover the core technology modules built by Aurum to automate yields, trade arbitrary flash swaps, and vault physical assets.
            </p>
            <Separator className="mt-4 w-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {module2Products && module2Products.topics.map(topic => (
              <Card key={topic.id} className="relative flex flex-col justify-between overflow-hidden group">
                {/* Visual Accent Corner Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-accent-gold/5 blur-2xl group-hover:bg-accent-gold/15 transition-all duration-300" />
                
                <div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="border-accent-gold/15 text-[10px] px-2 py-0.5">
                        Core System
                      </Badge>
                    </div>
                    <CardTitle className="text-xl sm:text-2xl text-accent-gold flex items-center gap-2 group-hover:text-gold-dark transition-colors font-serif">
                      {topic.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-xs text-text-secondary uppercase tracking-widest font-sans font-bold">Scope & Action</p>
                    <ul className="space-y-2">
                      {topic.presenterSummary.slice(0, 3).map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-text-primary leading-relaxed">
                          {getTakeawayIcon(point)}
                          <span>{point.split("\n")[0]}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>

                <div className="p-6 md:p-8 pt-0 mt-auto border-t border-[rgba(232,198,112,0.06)] flex items-center justify-between">
                  <span className="text-[10px] text-text-secondary font-mono">AURUM-DEV-{topic.id.toUpperCase().slice(0, 4)}</span>
                  <Button
                    variant="link"
                    size="sm"
                    className="p-0 h-auto flex items-center gap-1 text-xs text-accent-gold font-bold"
                    onClick={() => toggleTopicExpander(topic.id)}
                  >
                    {expandedTopicId === topic.id ? "Hide Details" : "View Full Specs"}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Direct Dropdown detailed coursework inside card flow */}
                {expandedTopicId === topic.id && (
                  <div className="col-span-full border-t border-accent-gold/20 p-6 bg-background/95 overflow-hidden animate-in slide-in-from-top duration-300">
                    <div className="markdown-content text-left text-sm max-w-none">
                      <ReactMarkdown rehypePlugins={[rehypeRaw]} components={MarkdownComponents}>
                        {topic.deepDive}
                      </ReactMarkdown>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Section 4: Glossary / FAQs */}
        <section id="glossary" className="scroll-mt-24 py-12">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge variant="outline" className="mb-3 uppercase tracking-widest text-[10px] border-accent-gold/20">
              04 / Reference & FAQ
            </Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-accent-gold">
              Glossary & FAQ
            </h2>
            <Separator className="mt-4 w-12" />
          </div>

          <Card className="max-w-4xl mx-auto border border-accent-gold/10">
            <CardHeader className="space-y-4">
              <CardTitle className="text-xl sm:text-2xl font-serif text-[#F0EDE6]">
                Frequently Asked Terms & Definitions
              </CardTitle>
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
                <input
                  type="text"
                  placeholder="Search terminology (e.g., Arbitrage, Seed Phrase, Non-Custodial...)"
                  className="w-full h-11 pl-12 pr-4 rounded-xl border border-[rgba(232,198,112,0.15)] bg-background/70 text-sm text-text-primary placeholder:text-text-secondary focus:border-accent-gold focus:outline-none focus:ring-1 focus:ring-accent-gold transition-all"
                  value={glossarySearch}
                  onChange={(e) => setGlossarySearch(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent>
              {filteredGlossary.length > 0 ? (
                <Accordion type="single" collapsible className="w-full">
                  {filteredGlossary.map((term, index) => (
                    <AccordionItem key={index} value={`term-${index}`} className="border-b border-[rgba(232,198,112,0.06)] last:border-0">
                      <AccordionTrigger className="text-base font-serif hover:text-accent-gold">
                        <div className="flex items-center gap-2">
                          <HelpCircle size={16} className="text-accent-gold shrink-0" />
                          <span>{term.name}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-4">
                        <div className="p-4 bg-background/45 border-l border-accent-gold/35 rounded text-sm text-text-secondary">
                          <span className="text-xs uppercase tracking-wider text-accent-gold font-bold block mb-1">Definition</span>
                          {term.definition}
                        </div>
                        {term.analogy && (
                          <div className="p-4 bg-accent-gold/5 border-l border-gold-dark/35 rounded text-sm text-text-secondary italic">
                            <span className="text-xs uppercase tracking-wider text-gold-dark font-bold block mb-1 not-italic">Analogy / Context</span>
                            {term.analogy}
                          </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center py-12 text-text-secondary text-sm">
                  No terminology matches your search. Try another keyword.
                </div>
              )}
            </CardContent>
          </Card>
        </section>

      </main>

      {/* Floating Back to Top Button */}
      <BackToTop />
      
      {/* AI Chatbot Widget */}
      <ChatWidgetEmbed />
    </div>
  );
}
