'use client';

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Workflow, 
  Zap, 
  Building2, 
  Stethoscope,
  ChevronRight,
  Database,
  Cpu,
  Layers,
  Send,
  CheckCircle2
} from 'lucide-react';

export default function AgencyLandingPage() {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const [isScrolled, setIsScrolled] = useState(false);

  // Hero interactive state
  const [heroTab, setHeroTab] = useState<'trace' | 'json' | 'sync'>('trace');
  const [nlQuery, setNlQuery] = useState('Looking for a 2-bedroom rental in Luxembourg Kirchberg, budget max €1,900/mo, urgent moving date');
  const [nlScore, setNlScore] = useState(98);
  
  // Sandbox states
  const [sandboxTab, setSandboxTab] = useState<'real_estate' | 'clinic'>('real_estate');
  const [reStep, setReStep] = useState(1);
  const [clStep, setClStep] = useState(1);

  // ROI state
  const [weeklyVolume, setWeeklyVolume] = useState(45);
  
  // Contact state
  const [contactDone, setContactDone] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = {
    en: {
      badge: 'Boutique Workflow Engineering',
      h1_1: 'We replace friction with ',
      h1_accent: 'fluid precision',
      h1_2: '.',
      lead: 'We engineer $150k-tier operational pipelines. No generic templates, no manual data entry. Just bespoke AI intake engines tailored for European businesses.',
      cta1: 'Request Free Audit',
      cta2: 'Explore Engine',
      
      tabTrace: 'Execution Trace',
      tabJson: 'Extracted Payload',
      tabSync: 'Notion Sync',
      
      nlTitle: 'Natural Language Intake',
      nlDesc: 'Witness how plain text becomes structured operational data in 120ms.',
      nlPreset1: 'Real Estate (LU)',
      nlPreset2: 'Clinic (BE)',
      nlPreset3: 'Legal (CH)',
      
      fardoBadge: 'The Methodology',
      fardoTitle: 'Audited delivery phases',
      phase1: 'Phase 01 · Intake Architecture',
      phase2: 'Phase 02 · Edge AI Extraction',
      phase3: 'Phase 03 · Workspace Pipelines',
      phase4: 'Phase 04 · Handover & 2FA',
      
      roiBadge: 'Measurable Impact',
      roiTitle: 'Calculate your operational leverage',
      
      auditBadge: 'Zero-Risk Discovery',
      auditTitle: 'Request a workflow audit',
      auditDesc: 'Share your most painful manual process. We’ll deliver a 3-point architectural blueprint in 24h.'
    },
    es: {
      badge: 'Ingeniería de Flujos Boutique',
      h1_1: 'Reemplazamos fricción por ',
      h1_accent: 'precisión fluida',
      h1_2: '.',
      lead: 'Diseñamos pipelines operativos de alto nivel. Sin plantillas genéricas, sin carga manual. Motores de IA a medida para empresas en Europa.',
      cta1: 'Auditoría Gratuita',
      cta2: 'Explorar Motor',
      
      tabTrace: 'Traza de Ejecución',
      tabJson: 'Payload Extraído',
      tabSync: 'Sincronización Notion',
      
      nlTitle: 'Captación en Lenguaje Natural',
      nlDesc: 'Observá cómo el texto libre se convierte en datos operativos en 120ms.',
      nlPreset1: 'Inmobiliaria (LU)',
      nlPreset2: 'Clínica (BE)',
      nlPreset3: 'Legal (CH)',
      
      fardoBadge: 'La Metodología',
      fardoTitle: 'Fases de entrega auditadas',
      phase1: 'Fase 01 · Arquitectura de Intake',
      phase2: 'Fase 02 · Extracción Edge AI',
      phase3: 'Fase 03 · Pipelines de Trabajo',
      phase4: 'Fase 04 · Traspaso y 2FA',
      
      roiBadge: 'Impacto Medible',
      roiTitle: 'Calculá tu apalancamiento operativo',
      
      auditBadge: 'Descubrimiento Sin Riesgo',
      auditTitle: 'Solicitá una auditoría de flujo',
      auditDesc: 'Compartinos tu proceso manual más doloroso. Entregaremos un plan arquitectónico de 3 puntos en 24hs.'
    }
  }[lang];

  return (
    <div className="relative w-full overflow-x-hidden selection:bg-amber-500/20 selection:text-amber-300">
      
      {/* Background Textures */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      <div className="ethereal-glow-amber top-[-20%] left-[-10%] opacity-40"></div>
      <div className="ethereal-glow-emerald bottom-[-10%] right-[-10%] opacity-20"></div>

      {/* Floating Island Nav */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-[var(--ease-fluid)] ${isScrolled ? 'w-[calc(100%-2rem)] md:w-[600px] backdrop-blur-3xl bg-[var(--color-base-800)]/80' : 'w-[calc(100%-2rem)] md:w-[800px] bg-transparent'}`}>
        <div className="double-bezel-outer !p-1.5">
          <div className="double-bezel-inner flex items-center justify-between px-4 py-2 bg-[var(--color-base-900)]/60 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <Workflow className="w-4 h-4 text-amber-500" />
              </div>
              <span className="font-display font-bold text-sm tracking-tight text-white">AI Andes <span className="text-amber-500 font-mono text-[10px] ml-1 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">STUDIO</span></span>
            </div>
            
            <div className="flex items-center gap-2 p-1 rounded-full bg-black/40 border border-white/5">
              <button 
                onClick={() => setLang('en')}
                className={`px-3 py-1 text-[11px] font-mono font-medium rounded-full transition-all duration-300 ${lang === 'en' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLang('es')}
                className={`px-3 py-1 text-[11px] font-mono font-medium rounded-full transition-all duration-300 ${lang === 'es' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 w-full pt-40 pb-32 md:pt-56 md:pb-48 px-4 md:px-8 max-w-[1400px] mx-auto">
        
        {/* Asymmetrical Editorial Hero */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center mb-40">
          
          {/* Left: Typography Block */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 ease-[var(--ease-fluid)]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-500 font-mono text-[10px] uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
              {t.badge}
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tighter text-white">
              {t.h1_1}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">{t.h1_accent}</span><br/>
              {t.h1_2}
            </h1>
            
            <p className="text-slate-400 text-lg leading-relaxed max-w-md font-sans">
              {t.lead}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#audit" className="btn-premium group">
                {t.cta1}
                <span className="btn-premium-icon-wrapper">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>
          </div>

          {/* Right: Living Canvas / Z-Axis Mockup */}
          <div className="md:col-span-6 lg:col-span-7 relative animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-200 ease-[var(--ease-fluid)]">
            <div className="double-bezel-outer">
              <div className="double-bezel-inner min-h-[400px] bg-[var(--color-base-900)] flex flex-col relative overflow-hidden">
                
                {/* Internal Window Chrome */}
                <div className="h-12 border-b border-white/5 bg-white/[0.02] flex items-center px-4 justify-between">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <div className="flex gap-1 p-1 bg-black/40 rounded-lg border border-white/5">
                    {['trace', 'json', 'sync'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setHeroTab(tab as any)}
                        className={`px-3 py-1 text-[10px] font-mono rounded-md transition-all duration-300 ${heroTab === tab ? 'bg-white/10 text-amber-400' : 'text-slate-500 hover:text-slate-300'}`}
                      >
                        {tab === 'trace' ? t.tabTrace : tab === 'json' ? t.tabJson : t.tabSync}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Canvas Body */}
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  {heroTab === 'trace' && (
                    <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
                      <div className="flex gap-4 items-start p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                        <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                          <span className="text-amber-500 font-mono text-xs">01</span>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">Client Inquiry Intercepted</div>
                          <div className="text-xs text-slate-500 mt-1 font-mono">source: web_widget_lu</div>
                        </div>
                      </div>
                      
                      <div className="w-[1px] h-4 bg-gradient-to-b from-amber-500/20 to-transparent ml-8"></div>
                      
                      <div className="flex gap-4 items-start p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
                          <Cpu className="w-4 h-4 text-amber-400" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">Edge NLP Extraction</div>
                          <div className="text-xs text-amber-500/70 mt-1 font-mono">latency: 114ms · confidence: 98.4%</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {heroTab === 'json' && (
                    <div className="flex-1 bg-black/40 rounded-xl p-6 font-mono text-[11px] md:text-xs text-emerald-400 leading-relaxed overflow-x-auto border border-white/5">
                      <pre>
{`{
  "id": "req_8f92ma",
  "intent": "property_rental",
  "client": {
    "name": "Jean-Luc Moreau",
    "budget": 1900,
    "currency": "EUR",
    "location": "Luxembourg_Kirchberg"
  },
  "action_chain": [
    "notion_db_insert",
    "whatsapp_agent_alert"
  ]
}`}
                      </pre>
                    </div>
                  )}

                  {heroTab === 'sync' && (
                    <div className="flex flex-col justify-center h-full gap-4">
                      <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-between">
                        <span className="font-mono text-xs text-slate-300">Notion CRM Database</span>
                        <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono rounded border border-emerald-500/20">UPDATED</span>
                      </div>
                      <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-between">
                        <span className="font-mono text-xs text-slate-300">Agent WhatsApp Ping</span>
                        <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono rounded border border-emerald-500/20">DISPATCHED</span>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Roomix-Style Natural Language Interface */}
        <section className="py-24 md:py-32">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 mb-4 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest font-mono text-slate-400">
              {t.nlTitle}
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">{t.nlDesc}</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button onClick={() => { setNlQuery('Looking for a 2-bedroom rental in Luxembourg Kirchberg, budget max €1,900/mo'); setNlScore(98); }} className="px-4 py-2 rounded-full border border-white/10 bg-[var(--color-base-800)] text-xs font-mono text-slate-300 hover:border-amber-500/50 hover:text-white transition-all">
                {t.nlPreset1}
              </button>
              <button onClick={() => { setNlQuery('Need a consultation for metabolic health and chronic fatigue on Thursday afternoon'); setNlScore(95); }} className="px-4 py-2 rounded-full border border-white/10 bg-[var(--color-base-800)] text-xs font-mono text-slate-300 hover:border-emerald-500/50 hover:text-white transition-all">
                {t.nlPreset2}
              </button>
              <button onClick={() => { setNlQuery('Corporate contract review for Swiss subsidiary, urgent 48h deadline'); setNlScore(92); }} className="px-4 py-2 rounded-full border border-white/10 bg-[var(--color-base-800)] text-xs font-mono text-slate-300 hover:border-blue-500/50 hover:text-white transition-all">
                {t.nlPreset3}
              </button>
            </div>

            <div className="double-bezel-outer !p-2">
              <div className="double-bezel-inner p-6 md:p-8 flex flex-col gap-6">
                <textarea 
                  className="w-full bg-black/20 border border-white/5 rounded-xl p-4 text-white font-sans text-lg focus:outline-none focus:border-amber-500/50 transition-colors resize-none h-32"
                  value={nlQuery}
                  onChange={(e) => setNlQuery(e.target.value)}
                />
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-amber-500" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-400">Confidence Score</div>
                      <div className="text-lg font-bold text-white">{nlScore}%</div>
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-white text-black font-semibold rounded-full hover:scale-95 transition-transform duration-200 ease-out">
                    Extract Payload
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HeyFardo Methodology */}
        <section className="py-24 md:py-32">
          <div className="mb-16 md:mb-24">
            <div className="inline-block px-3 py-1 mb-4 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest font-mono text-slate-400">
              {t.fardoBadge}
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">{t.fardoTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[ 
              { step: t.phase1, pct: 100, color: 'text-emerald-500', bg: 'bg-emerald-500' },
              { step: t.phase2, pct: 100, color: 'text-emerald-500', bg: 'bg-emerald-500' },
              { step: t.phase3, pct: 85, color: 'text-amber-500', bg: 'bg-amber-500' },
              { step: t.phase4, pct: 0, color: 'text-slate-600', bg: 'bg-slate-600' }
            ].map((phase, i) => (
              <div key={i} className="p-6 rounded-[2rem] bg-[var(--color-base-800)] border border-white/5 flex flex-col justify-between min-h-[200px]">
                <div>
                  <div className={`text-[10px] font-mono mb-4 ${phase.color}`}>{phase.step}</div>
                  <div className="text-2xl font-bold text-white mb-2">{phase.pct}%</div>
                </div>
                <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden">
                  <div className={`h-full ${phase.bg} transition-all duration-1000`} style={{ width: `${phase.pct}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Sandboxes */}
        <section className="py-24 md:py-32 border-t border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Interactive Sandboxes</h2>
              <p className="text-slate-400 max-w-xl">Test the live parameter extraction logic we deploy for our clients.</p>
            </div>
            <div className="flex p-1 bg-black/30 rounded-xl border border-white/5 w-max">
              <button onClick={() => setSandboxTab('real_estate')} className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${sandboxTab === 'real_estate' ? 'bg-white/10 text-white' : 'text-slate-500'}`}>
                Real Estate
              </button>
              <button onClick={() => setSandboxTab('clinic')} className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${sandboxTab === 'clinic' ? 'bg-white/10 text-white' : 'text-slate-500'}`}>
                Medical Triage
              </button>
            </div>
          </div>

          <div className="double-bezel-outer !p-2">
            <div className="double-bezel-inner p-8 bg-[var(--color-base-800)] grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Form Side */}
              <div className="flex flex-col gap-6">
                <div className="text-sm font-mono text-amber-500 border-b border-white/5 pb-4">
                  {sandboxTab === 'real_estate' ? 'Inbound Property Request' : 'Patient Triage Form'}
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-500 mb-2 uppercase tracking-wider">Client Name</label>
                    <input type="text" defaultValue="Sophie Laurent" className="w-full bg-black/20 border border-white/5 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/30 transition-colors" />
                  </div>
                  
                  {sandboxTab === 'real_estate' ? (
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono text-slate-500 mb-2 uppercase tracking-wider">Intent</label>
                        <select className="w-full bg-black/20 border border-white/5 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/30 appearance-none">
                          <option>Property Rental</option>
                          <option>Purchase</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono text-slate-500 mb-2 uppercase tracking-wider">Budget (€/mo)</label>
                        <input type="text" defaultValue="1850" className="w-full bg-black/20 border border-white/5 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/30" />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-[11px] font-mono text-slate-500 mb-2 uppercase tracking-wider">Symptoms / Focus</label>
                      <input type="text" defaultValue="Chronic fatigue & dietary transition" className="w-full bg-black/20 border border-white/5 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/30" />
                    </div>
                  )}
                  
                  <button onClick={() => sandboxTab === 'real_estate' ? setReStep(2) : setClStep(2)} className="w-full mt-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-lg py-3 transition-all active:scale-95 text-sm">
                    Run Workflow Engine
                  </button>
                </div>
              </div>

              {/* Output Side */}
              <div className="bg-black/30 rounded-2xl p-6 border border-white/5 font-mono flex flex-col">
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Terminal className="w-3 h-3" /> System Output
                </div>
                
                {((sandboxTab === 'real_estate' && reStep === 2) || (sandboxTab === 'clinic' && clStep === 2)) ? (
                  <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs leading-relaxed">
                      ➔ Structuring unstructured text... [OK]<br/>
                      ➔ Checking portfolio matching... [Found: 3]<br/>
                      ➔ Injecting record to Notion... [OK]<br/>
                      ➔ Dispatching WhatsApp link... [Delivered]
                    </div>
                    <button 
                      onClick={() => sandboxTab === 'real_estate' ? setReStep(1) : setClStep(1)}
                      className="text-[11px] text-slate-500 hover:text-white transition-colors"
                    >
                      [ Reset Simulator ]
                    </button>
                  </div>
                ) : (
                  <div className="flex-1 flex items-center justify-center text-xs text-slate-600">
                    Awaiting execution...
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section id="roi" className="py-24">
          <div className="double-bezel-outer max-w-2xl mx-auto !p-2">
            <div className="double-bezel-inner p-10 bg-[var(--color-base-800)] text-center">
              <div className="text-[10px] font-mono text-amber-500 uppercase tracking-widest mb-4">{t.roiBadge}</div>
              <h2 className="text-3xl font-display font-bold text-white mb-12">{t.roiTitle}</h2>
              
              <div className="mb-12">
                <div className="flex justify-between text-xs font-mono text-slate-400 mb-4">
                  <span>Weekly Manual Inquiries</span>
                  <span className="text-white bg-white/10 px-3 py-1 rounded-md">{weeklyVolume}</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="200" 
                  value={weeklyVolume}
                  onChange={(e) => setWeeklyVolume(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-amber-500"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-black/30 border border-white/5">
                  <div className="text-xs font-mono text-slate-500 mb-2">Hours Recaptured</div>
                  <div className="text-3xl font-bold text-amber-500">{Math.round(weeklyVolume * 16 * 4 / 60)}h <span className="text-sm text-slate-600">/mo</span></div>
                </div>
                <div className="p-6 rounded-2xl bg-black/30 border border-white/5">
                  <div className="text-xs font-mono text-slate-500 mb-2">Value Recovered</div>
                  <div className="text-3xl font-bold text-emerald-500">€{Math.round(weeklyVolume * 16 * 4 / 60) * 45} <span className="text-sm text-slate-600">/mo</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Audit Form */}
        <section id="audit" className="py-32">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold text-white mb-4">{t.auditTitle}</h2>
              <p className="text-slate-400">{t.auditDesc}</p>
            </div>
            
            {contactDone ? (
              <div className="p-12 rounded-[2rem] bg-emerald-500/5 border border-emerald-500/20 text-center animate-in fade-in zoom-in-95 duration-500">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Request Received</h3>
                <p className="text-slate-400 text-sm">We will analyze your flow and email the blueprint shortly.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setContactDone(true); }} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <input required type="text" placeholder="Your Name" className="w-full bg-[var(--color-base-800)] border border-white/5 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-amber-500/30 transition-colors" />
                  </div>
                  <div>
                    <input required type="email" placeholder="Work Email" className="w-full bg-[var(--color-base-800)] border border-white/5 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-amber-500/30 transition-colors" />
                  </div>
                </div>
                <div>
                  <textarea required rows={4} placeholder="Describe the manual process causing the most friction..." className="w-full bg-[var(--color-base-800)] border border-white/5 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-amber-500/30 transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full btn-premium justify-center !py-4 text-base">
                  Submit Audit Request
                  <span className="btn-premium-icon-wrapper !w-6 !h-6">
                    <Send className="w-3 h-3" />
                  </span>
                </button>
              </form>
            )}
          </div>
        </section>

      </main>

      {/* High-End Minimal Footer */}
      <footer className="border-t border-white/5 py-12 px-8 text-center text-[11px] font-mono text-slate-600 bg-[var(--color-base-900)] relative z-10">
        AI Andes Studio © 2026. Systems engineered for precision.
      </footer>

    </div>
  );
}
