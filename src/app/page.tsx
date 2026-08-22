"use client";

import React, { useState } from 'react';
import { Bot, Home, Stethoscope, ChevronRight, ArrowRight, BrainCircuit, Zap, Shield } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <BrainCircuit className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold tracking-tight">AI Andes Studio</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
          <a href="#demos" className="hover:text-blue-600 transition-colors">Demos</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </nav>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Transform Your Business with Intelligent AI Agents
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Custom AI solutions tailored for your industry. Automate customer support, capture leads, and streamline operations 24/7.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#demos" className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200">
            View Live Demos <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#contact" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-50 transition-all flex items-center justify-center">
            Book a Consultation
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose AI Andes Studio?</h2>
            <p className="text-slate-600 text-lg">We build AI that actually understands your business context.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Responses</h3>
              <p className="text-slate-600">Never keep a customer waiting. Our agents reply in milliseconds, day or night.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure &amp; Private</h3>
              <p className="text-slate-600">Enterprise-grade security ensuring your data and customer interactions remain private.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Trained</h3>
              <p className="text-slate-600">Trained on your specific knowledge base, FAQs, and brand voice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demos Section */}
      <section id="demos" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Experience Our Industry-Specific AI</h2>
            <p className="text-slate-600 text-lg">Try out these interactive demos to see how our agents handle complex inquiries.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Real Estate Demo */}
            <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                  <Home className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Real Estate Agent</h3>
                  <p className="text-slate-500">Qualifies leads and schedules viewings</p>
                </div>
              </div>
              <RealEstateDemo />
            </div>

            {/* Clinic Demo */}
            <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center">
                  <Stethoscope className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Medical Clinic Assistant</h3>
                  <p className="text-slate-500">Answers FAQs and handles appointment requests</p>
                </div>
              </div>
              <ClinicDemo />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-blue-600 text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Workflows?</h2>
          <p className="text-blue-100 text-xl mb-10">
            Let's discuss how an AI agent can save you time and increase your conversions.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/20">
            Schedule a Free Discovery Call
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 text-center border-t border-slate-800">
        <div className="flex items-center justify-center gap-2 mb-6">
          <BrainCircuit className="w-6 h-6 text-blue-500" />
          <span className="text-lg font-bold text-white tracking-tight">AI Andes Studio</span>
        </div>
        <p>© {new Date().getFullYear()} AI Andes Studio. All rights reserved.</p>
      </footer>
    </div>
  );
};

// --- DEMO COMPONENTS ---

const ChatInterface = ({ initialMessage, handleSend, messages, setMessages }: any) => {
  const [input, setInput] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userMsg = { id: Date.now(), text: input, isUser: true };
    setMessages((prev: any) => [...prev, userMsg]);
    setInput('');
    
    // Simulate AI thinking and responding
    setTimeout(() => {
      const aiResponse = handleSend(input);
      setMessages((prev: any) => [...prev, { id: Date.now() + 1, text: aiResponse, isUser: false }]);
    }, 800);
  };

  return (
    <div className="flex flex-col h-[400px] bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
      <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
        {messages.map((msg: any) => (
          <div key={msg.id} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.isUser ? 'bg-blue-600 text-white rounded-br-sm' : 'bg-white border border-slate-200 text-slate-700 rounded-bl-sm shadow-sm'}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={onSubmit} className="p-3 bg-white border-t border-slate-200 flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..." 
          className="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900"
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center" disabled={!input.trim()}>
          <ChevronRight className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

const RealEstateDemo = () => {
  const initial = [
    { id: 1, text: "Hi! I'm the AI assistant for Andes Realty. Are you looking to buy, sell, or rent a property today?", isUser: false }
  ];
  const [messages, setMessages] = useState(initial);

  const getResponse = (input: string) => {
    const lower = input.toLowerCase();
    if (lower.includes('buy') || lower.includes('looking for')) {
      return "Exciting! We have several new listings. What's your preferred budget and preferred neighborhood?";
    }
    if (lower.includes('rent')) {
      return "We can help you find a great rental. How many bedrooms are you looking for, and when do you plan to move?";
    }
    if (lower.includes('sell')) {
      return "Selling a home is a big step. We can provide a free valuation. What is the address of the property?";
    }
    return "I'm here to help you with your real estate needs. Could you provide a bit more detail about what you're looking for?";
  };

  return <ChatInterface initialMessage={initial} handleSend={getResponse} messages={messages} setMessages={setMessages} />;
};

const ClinicDemo = () => {
  const initial = [
    { id: 1, text: "Hello! I'm the virtual assistant for Andes Medical Clinic. How can I help you today? (e.g., book appointment, opening hours, services)", isUser: false }
  ];
  const [messages, setMessages] = useState(initial);

  const getResponse = (input: string) => {
    const lower = input.toLowerCase();
    if (lower.includes('book') || lower.includes('appointment')) {
      return "I can help with that. Are you a new or returning patient? And which specialty do you need (e.g., General Practice, Pediatrics, Cardiology)?";
    }
    if (lower.includes('hour') || lower.includes('time')) {
      return "Our clinic is open Monday to Friday from 8:00 AM to 6:00 PM, and Saturdays from 9:00 AM to 1:00 PM. We are closed on Sundays.";
    }
    if (lower.includes('service') || lower.includes('specialt')) {
      return "We offer General Practice, Pediatrics, Dermatology, and Cardiology. Would you like to schedule a visit for any of these?";
    }
    return "I want to make sure you get the right information. Could you please specify if you need to book an appointment or need info about our services?";
  };

  return <ChatInterface initialMessage={initial} handleSend={getResponse} messages={messages} setMessages={setMessages} />;
};

export default LandingPage;
