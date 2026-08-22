'use client';

import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  Zap, 
  Clock, 
  Building2, 
  Stethoscope, 
  Scale, 
  Briefcase,
  Terminal,
  Send,
  Calendar,
  UserCheck,
  RefreshCw,
  Database,
  Lock,
  Workflow,
  Check,
  Flame,
  ArrowUpRight
} from 'lucide-react';

// ─── CULT-UI INSPIRED: BORDER BEAM EFFECT ───
const BorderBeam = ({ className = "" }: { className?: string }) => (
  <div className={`pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] ${className}`}>
    <div className="absolute aspect-square w-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.6)_0%,transparent_70%)] animate-[spin_6s_linear_infinite]" />
  </div>
);

export default function AIAndesStudioLanding() {
  const [lang, setLang] = useState<'en' | 'es'>('en');

  // Sandbox 1 State
  const [reStep, setReStep] = useState(1);
  const [reForm, setReForm] = useState({
    intent: 'rent',
    budget: '1850',
    location: 'Luxembourg City (Kirchberg)',
    rooms: '2',
    name: 'Jean-Luc Moreau'
  });

  // Sandbox 2 State
  const [clinicStep, setClinicStep] = useState(1);
  const [clinicForm, setClinicForm] = useState({
    service: 'Nutritional & Metabolic Health',
    symptom: 'Post-viral fatigue & glucose tracking',
    timeSlot: 'Thursday 15:30 (Afternoon)',
    patient: 'Sophie Laurent'
  });

  // ROI Calculator State
  const [inquiriesPerWeek, setInquiriesPerWeek] = useState(45);
  const hoursSavedMonth = Math.round((inquiriesPerWeek * 16 * 4) / 60);
  const estimatedCostSaved = hoursSavedMonth * 45;

  // Contact State
  const [contactState, setContactState] = useState({ name: '', email: '', company: '', website: '', goal: '' });
  const [contactSent, setContactSent] = useState(false);

  const t = {
    en: {
      badge: 'Boutique Workflow Engineering · EU Focus',
      h1_1: 'We build digital systems that ',
      h1_accent: 'eliminate admin friction',
      h1_2: '.',
      heroLead: 'Replace scattered WhatsApp chats, manual spreadsheets, and delayed replies with bespoke websites, smart intake forms, and automated team dashboards.',
      btnAudit: 'Request Free Workflow Audit',
      btnDemos: 'Test Interactive Flow',
      navServices: 'Architecture',
      navDemos: 'Live Sandboxes',
      navCases: 'Outcomes',
      navCalc: 'ROI Calculator',
      navScope: 'Scope',
      navCta: 'Get Free Audit',
      
      // Architecture
      archBadge: 'The Technical Blueprint',
      archTitle: 'Engineered for operational clarity',
      archDesc: 'Every component connects directly into your team’s tools. No dead ends.',
      step1Title: '01. High-Converting Intake',
      step1Desc: 'Mobile-first intake page that dynamically adapts questions and pre-qualifies budgets before reaching your inbox.',
      step2Title: '02. Edge AI Classification',
      step2Desc: 'Extracts key parameters, flags urgency, and generates a structured executive brief in under 1.5 seconds.',
      step3Title: '03. Operational Dispatch',
      step3Desc: 'Auto-syncs to Notion/Airtable databases, locks calendar slots, and alerts your team via Telegram or WhatsApp.',

      // Sandboxes
      sandBadge: 'Live System Sandbox',
      sandTitle: 'Experience the workflow in real-time',
      sandDesc: 'Test how raw inquiries convert into structured operational records.',
      demo1Tab: 'Real Estate Workflow',
      demo2Tab: 'Clinic Triage Workflow',

      // Calculator
      calcBadge: 'Measurable ROI',
      calcTitle: 'Calculate your monthly recaptured value',
      calcDesc: 'Move the slider to match your weekly manual inquiry volume.',
      calcSliderLabel: 'Weekly manual inquiries or bookings:',
      calcHoursTitle: 'Monthly Admin Time Recaptured',
      calcValTitle: 'Monthly Operational Value Saved',

      // Scope
      scopeBadge: 'Delivery Standards',
      scopeTitle: 'Explicit scope boundaries',
      scopeDesc: 'We deliver focused systems with defined deliverables and honest execution.',
      scopeInTitle: 'What we deliver',
      scopeOutTitle: 'What we do not do',

      // Contact
      auditBadge: 'Zero-Risk Discovery',
      auditTitle: 'Request a free 3-point workflow audit',
      auditDesc: 'Tell us where your team loses the most time. We will analyze your intake flow and send 2–3 actionable improvement ideas within 24 hours.',
      auditSentTitle: 'Audit Request Received',
      auditSentDesc: 'We will inspect your business flow and deliver a 3-point actionable blueprint to your email shortly.',
      auditSubmit: 'Send Audit Request',
      footerCopy: '© 2026 AI Andes Studio. Systems & Workflow Engineering for EU Businesses.'
    },
    es: {
      badge: 'Ingeniería de Flujos para Empresas en Europa',
      h1_1: 'Creamos sistemas digitales que ',
      h1_accent: 'eliminan la carga manual',
      h1_2: '.',
      heroLead: 'Reemplaza mensajes desordenados de WhatsApp, planillas manuales y demoras por email con sitios web rápidos, formularios inteligentes y paneles operativos automatizados.',
      btnAudit: 'Solicitar Auditoría de Flujo Gratuita',
      btnDemos: 'Probar Flujo Interactivo',
      navServices: 'Arquitectura',
      navDemos: 'Demos en Vivo',
      navCases: 'Casos Reales',
      navCalc: 'Calculadora ROI',
      navScope: 'Alcance',
      navCta: 'Auditoría Gratis',

      // Architecture
      archBadge: 'Plano Técnico del Sistema',
      archTitle: 'Diseñado para claridad operativa',
      archDesc: 'Cada componente se conecta directamente con tus herramientas internas sin callejones sin salida.',
      step1Title: '01. Intake de Alta Conversión',
      step1Desc: 'Página mobile-first con formularios condicionales que pre-califican presupuestos antes de llegar a tu bandeja.',
      step2Title: '02. Clasificación con IA en Edge',
      step2Desc: 'Extrae parámetros clave, detecta urgencias y genera una ficha ejecutiva estructurada en menos de 1.5 segundos.',
      step3Title: '03. Despacho a Operaciones',
      step3Desc: 'Sincroniza directo con bases de datos (Notion/CRM), bloquea turnos de agenda y alerta al equipo por WhatsApp.',

      // Sandboxes
      sandBadge: 'Sandbox en Vivo',
      sandTitle: 'Prueba el flujo de trabajo en tiempo real',
      sandDesc: 'Observa cómo una consulta se convierte en un registro operativo ordenado.',
      demo1Tab: 'Flujo Inmobiliario',
      demo2Tab: 'Flujo Clínico / Triaje',

      // Calculator
      calcBadge: 'Retorno Medible (ROI)',
      calcTitle: 'Calcula tu ahorro mensual de tiempo y dinero',
      calcDesc: 'Mueve el control según la cantidad de consultas semanales que recibes.',
      calcSliderLabel: 'Consultas o reservas semanales:',
      calcHoursTitle: 'Tiempo Administrativo Recuperado',
      calcValTitle: 'Valor Operativo Recuperado',

      // Scope
      scopeBadge: 'Estándares de Entrega',
      scopeTitle: 'Límites de alcance explícitos',
      scopeDesc: 'Entregamos sistemas modulares con parámetros definidos y ejecución transparente.',
      scopeInTitle: 'Lo que construimos',
      scopeOutTitle: 'Lo que NO hacemos',

      // Contact
      auditBadge: 'Descubrimiento sin Riesgo',
      auditTitle: 'Solicita una auditoría de flujo en 3 puntos',
      auditDesc: 'Cuéntanos qué proceso manual te consume más tiempo. Analizaremos tu flujo y te enviaremos 2–3 propuestas concretas en 24 horas.',
      auditSentTitle: 'Solicitud Recibida',
      auditSentDesc: 'Analizaremos tu flujo y te enviaremos un diagnóstico práctico de 3 mejoras a tu correo.',
      auditSubmit: 'Enviar Solicitud de Auditoría',
      footerCopy: '© 2026 AI Andes Studio. Ingeniería de Sistemas y Flujos para Empresas.'
    }
  }[lang];

  return (
    <div className="min-h-screen bg-[#05070B] text-zinc-100 font-sans antialiased relative">
      
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none" />

      {/* ─── NAVBAR ─── */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-[#05070B]/80 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 rounded-xl bg-gradient-to-b from-zinc-800 to-zinc-950 border border-white/10 p-1.5 flex items-center justify-center shadow-lg shadow-black/80">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-sky-400" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 20h18L14 4l-4 7-3-4-4 13z" className="fill-sky-500/10" />
                <path d="M14 4l7 16H3l4-13 3 4 4-7z" />
                <circle cx="14" cy="4" r="1.5" className="fill-sky-400 stroke-none" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-space font-bold tracking-tight text-base text-white flex items-center gap-1.5">
                AI Andes <span className="text-sky-400 font-mono text-[10px] px-1.5 py-0.5 rounded bg-sky-950/80 border border-sky-800/60">STUDIO</span>
              </span>
              <span className="text-[10px] text-zinc-500 font-mono -mt-0.5 tracking-wider uppercase">Systems & Automations</span>
            </div>
          </div>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-wider text-zinc-400">
            <a href="#architecture" className="hover:text-white transition-colors">{t.navServices}</a>
            <a href="#sandboxes" className="hover:text-white transition-colors">{t.navDemos}</a>
            <a href="#outcomes" className="hover:text-white transition-colors">{t.navCases}</a>
            <a href="#roi" className="hover:text-white transition-colors">{t.navCalc}</a>
            <a href="#scope" className="hover:text-white transition-colors">{t.navScope}</a>
          </nav>

          {/* Language Switch & CTA */}
          <div className="flex items-center gap-3">
            <div className="flex items-center p-1 rounded-lg bg-zinc-900/90 border border-white/10 text-xs font-mono">
              <button 
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-md transition-all ${lang === 'en' ? 'bg-sky-500 text-zinc-950 font-bold shadow-sm' : 'text-zinc-400 hover:text-white'}`}
              >
                ENG
              </button>
              <button 
                type="button"
                onClick={() => setLang('es')}
                className={`px-2.5 py-1 rounded-md transition-all ${lang === 'es' ? 'bg-sky-500 text-zinc-950 font-bold shadow-sm' : 'text-zinc-400 hover:text-white'}`}
              >
                ESP
              </button>
            </div>

            <a 
              href="#audit"
              className="hidden sm:inline-flex text-xs uppercase tracking-wider font-mono font-semibold px-4 py-2.5 rounded-lg bg-white text-zinc-950 hover:bg-zinc-200 transition-all shadow-sm"
            >
              {t.navCta}
            </a>
          </div>

        </div>
      </header>

      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-24 pb-20 px-6 border-b border-white/[0.06] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-sky-500/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/20 bg-sky-500/[0.03] text-xs font-mono text-sky-300 mb-8 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
            {t.badge}
          </div>

          <h1 className="font-space text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-white leading-[1.08] mb-6">
            {t.h1_1}<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-zinc-300 underline decoration-sky-500/40 underline-offset-8">{t.h1_accent}</span>{t.h1_2}
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.heroLead}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#audit"
              className="relative group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold text-sm transition-all shadow-lg shadow-sky-950/60 overflow-hidden"
            >
              <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity" />
              {t.btnAudit}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#sandboxes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-zinc-900/80 border border-white/10 text-zinc-300 font-medium text-sm hover:bg-zinc-800 hover:text-white transition-all"
            >
              {t.btnDemos}
            </a>
          </div>

          {/* Key Metric Chips */}
          <div className="mt-16 pt-8 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-4 text-left font-mono">
            <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/[0.06] backdrop-blur-sm">
              <span className="text-[10px] text-zinc-500 uppercase block">Delivery Turnaround</span>
              <span className="text-sm font-semibold text-zinc-200 mt-0.5 block">5 to 14 Days</span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/[0.06] backdrop-blur-sm">
              <span className="text-[10px] text-zinc-500 uppercase block">Edge Infrastructure</span>
              <span className="text-sm font-semibold text-zinc-200 mt-0.5 block">Vercel & Next.js</span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/[0.06] backdrop-blur-sm">
              <span className="text-[10px] text-zinc-500 uppercase block">Data Integration</span>
              <span className="text-sm font-semibold text-zinc-200 mt-0.5 block">Notion / Webhooks</span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/[0.06] backdrop-blur-sm">
              <span className="text-[10px] text-zinc-500 uppercase block">Privacy Guard</span>
              <span className="text-sm font-semibold text-zinc-200 mt-0.5 block">GDPR-Aware & 2FA</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SYSTEM ARCHITECTURE BLUEPRINT ─── */}
      <section id="architecture" className="py-24 px-6 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">{t.archBadge}</div>
            <h2 className="font-space text-3xl font-bold tracking-tight text-white mb-3">{t.archTitle}</h2>
            <p className="text-sm text-zinc-400 leading-relaxed">{t.archDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="relative p-8 rounded-2xl bg-gradient-to-b from-zinc-900/50 to-[#070A10]/90 border border-white/[0.08] backdrop-blur-xl group hover:border-sky-500/40 transition-all">
              <div className="h-10 w-10 rounded-xl bg-sky-950/60 border border-sky-800/60 flex items-center justify-center text-sky-400 mb-6 font-mono font-bold text-sm">
                01
              </div>
              <h3 className="font-space text-lg font-bold text-white mb-2">{t.step1Title}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">{t.step1Desc}</p>
              <div className="text-[11px] font-mono text-sky-400 flex items-center gap-2 pt-4 border-t border-white/[0.06]">
                <Check className="w-3.5 h-3.5" /> High-speed conversion front-end
              </div>
            </div>

            <div className="relative p-8 rounded-2xl bg-gradient-to-b from-zinc-900/50 to-[#070A10]/90 border border-white/[0.08] backdrop-blur-xl group hover:border-sky-500/40 transition-all">
              <div className="h-10 w-10 rounded-xl bg-sky-950/60 border border-sky-800/60 flex items-center justify-center text-sky-400 mb-6 font-mono font-bold text-sm">
                02
              </div>
              <h3 className="font-space text-lg font-bold text-white mb-2">{t.step2Title}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">{t.step2Desc}</p>
              <div className="text-[11px] font-mono text-sky-400 flex items-center gap-2 pt-4 border-t border-white/[0.06]">
                <Check className="w-3.5 h-3.5" /> Zero manual sorting needed
              </div>
            </div>

            <div className="relative p-8 rounded-2xl bg-gradient-to-b from-zinc-900/50 to-[#070A10]/90 border border-white/[0.08] backdrop-blur-xl group hover:border-sky-500/40 transition-all">
              <div className="h-10 w-10 rounded-xl bg-sky-950/60 border border-sky-800/60 flex items-center justify-center text-sky-400 mb-6 font-mono font-bold text-sm">
                03
              </div>
              <h3 className="font-space text-lg font-bold text-white mb-2">{t.step3Title}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">{t.step3Desc}</p>
              <div className="text-[11px] font-mono text-sky-400 flex items-center gap-2 pt-4 border-t border-white/[0.06]">
                <Check className="w-3.5 h-3.5" /> Real-time operational dispatch
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE WORKFLOW SANDBOXES ─── */}
      <section id="sandboxes" className="py-24 px-6 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">{t.sandBadge}</div>
              <h2 className="font-space text-3xl font-bold tracking-tight text-white mb-2">{t.sandTitle}</h2>
              <p className="text-sm text-zinc-400 max-w-lg">{t.sandDesc}</p>
            </div>

            {/* TAB CONTROLS */}
            <div className="flex p-1.5 rounded-xl bg-zinc-900/90 border border-white/10 text-xs font-mono">
              <button 
                type="button"
                onClick={() => setReStep(1)}
                className="px-4 py-2 rounded-lg font-semibold bg-sky-500 text-zinc-950 shadow-md flex items-center gap-2"
              >
                <Building2 className="w-3.5 h-3.5" />
                {t.demo1Tab}
              </button>
            </div>
          </div>

          {/* SANDBOX CARD WITH BORDER BEAM */}
          <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-b from-[#0B0F19] to-[#06080F] border border-white/10 shadow-2xl overflow-hidden">
            <BorderBeam />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              
              {/* Form Input Column */}
              <div className="lg:col-span-6 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <span className="text-sky-300 font-bold uppercase tracking-wider">Inbound Customer Intake</span>
                  <span className="text-[10px] text-zinc-500">Live Simulation</span>
                </div>

                <div>
                  <label className="text-zinc-400 block mb-1">Client Full Name</label>
                  <input 
                    type="text" 
                    value={reForm.name} 
                    onChange={(e) => setReForm({...reForm, name: e.target.value})}
                    className="w-full bg-zinc-950/90 border border-white/10 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-zinc-400 block mb-1">Intent</label>
                    <select 
                      value={reForm.intent} 
                      onChange={(e) => setReForm({...reForm, intent: e.target.value})}
                      className="w-full bg-zinc-950/90 border border-white/10 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-sky-500"
                    >
                      <option value="rent">Property Rental</option>
                      <option value="buy">Property Purchase</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-zinc-400 block mb-1">Budget (€)</label>
                    <input 
                      type="text" 
                      value={reForm.budget} 
                      onChange={(e) => setReForm({...reForm, budget: e.target.value})}
                      className="w-full bg-zinc-950/90 border border-white/10 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-zinc-400 block mb-1">Bedrooms</label>
                    <select 
                      value={reForm.rooms} 
                      onChange={(e) => setReForm({...reForm, rooms: e.target.value})}
                      className="w-full bg-zinc-950/90 border border-white/10 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-sky-500"
                    >
                      <option value="1">1 Bed</option>
                      <option value="2">2 Beds</option>
                      <option value="3+">3+ Beds</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-zinc-400 block mb-1">Target Zone</label>
                    <input 
                      type="text" 
                      value={reForm.location} 
                      onChange={(e) => setReForm({...reForm, location: e.target.value})}
                      className="w-full bg-zinc-950/90 border border-white/10 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <button 
                  type="button" 
                  onClick={() => setReStep(2)}
                  className="w-full py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-950/60"
                >
                  <Zap className="w-4 h-4" />
                  Process Inquiry & Generate AI Brief
                </button>
              </div>

              {/* Console Output Column */}
              <div className="lg:col-span-6 p-6 rounded-2xl bg-[#05070B] border border-white/10 font-mono text-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-sky-400" />
                    <span className="text-zinc-300 font-semibold">Workflow Engine State</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                    Active
                  </span>
                </div>

                {reStep === 2 ? (
                  <div className="space-y-3 animate-in fade-in duration-300">
                    <div className="p-4 rounded-xl bg-[#091220] border border-sky-900/50 space-y-2">
                      <div className="flex items-center justify-between text-sky-300 font-bold">
                        <span>AI Executive Brief</span>
                        <span className="text-[10px] text-emerald-400">Match 96%</span>
                      </div>
                      <p className="text-zinc-300 leading-relaxed text-[11px]">
                        &quot;{reForm.name} is seeking a {reForm.rooms}-bedroom {reForm.intent} in {reForm.location} (Budget: €{reForm.budget}). Matched 3 active units. Auto-invite for viewing dispatched.&quot;
                      </p>
                    </div>

                    <div className="space-y-1.5 text-[10px] text-zinc-400 bg-zinc-900/50 p-3 rounded-lg border border-white/[0.06]">
                      <div>➔ Notion Database: Row created with tag [Urgent Followup]</div>
                      <div>➔ Calendar Link: Proposed viewing timeslot generated</div>
                      <div>➔ Agent Alert: Push notification sent to mobile</div>
                    </div>

                    <button 
                      type="button" 
                      onClick={() => setReStep(1)}
                      className="w-full py-2 rounded-lg bg-zinc-850 hover:bg-zinc-800 text-zinc-300 text-xs transition-colors"
                    >
                      Reset Scenario
                    </button>
                  </div>
                ) : (
                  <div className="py-12 text-center text-zinc-600 space-y-2">
                    <Workflow className="w-8 h-8 mx-auto stroke-zinc-700 animate-pulse" />
                    <p>Click &quot;Process Inquiry&quot; to test the live classification stream.</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── ROI CALCULATOR ─── */}
      <section id="roi" className="py-24 px-6 border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-gradient-to-b from-zinc-900/40 to-[#070A10]/90 border border-white/10 shadow-2xl backdrop-blur-xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">{t.calcBadge}</div>
            <h2 className="font-space text-2xl md:text-3xl font-bold text-white mb-2">{t.calcTitle}</h2>
            <p className="text-xs text-zinc-400">{t.calcDesc}</p>
          </div>

          <div className="space-y-8 max-w-2xl mx-auto">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-zinc-300 mb-3">
                <span>{t.calcSliderLabel}</span>
                <span className="text-sky-400 font-bold text-base px-3.5 py-1 bg-sky-950 rounded-lg border border-sky-800/80">{inquiriesPerWeek}</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="200" 
                step="5"
                value={inquiriesPerWeek}
                onChange={(e) => setInquiriesPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-1.5">
                <span>10/week</span>
                <span>100/week</span>
                <span>200+/week</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.06] font-mono text-center">
              <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.06]">
                <div className="text-xs text-zinc-400 mb-1">{t.calcHoursTitle}</div>
                <div className="text-3xl font-bold text-sky-400">~{hoursSavedMonth} <span className="text-xs text-zinc-500 font-normal">hrs / mo</span></div>
              </div>
              <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.06]">
                <div className="text-xs text-zinc-400 mb-1">{t.calcValTitle}</div>
                <div className="text-3xl font-bold text-emerald-400">~€{estimatedCostSaved.toLocaleString()} <span className="text-xs text-zinc-500 font-normal">/ mo</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AUDIT CONTACT FORM ─── */}
      <section id="audit" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-[#0D1322] to-[#070A12] border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">{t.auditBadge}</div>
              <h2 className="font-space text-2xl md:text-3xl font-bold text-white mb-3">{t.auditTitle}</h2>
              <p className="text-sm text-zinc-400 mb-8 leading-relaxed">{t.auditDesc}</p>

              {contactSent ? (
                <div className="p-8 rounded-2xl bg-zinc-950 border border-emerald-900/60 text-center font-mono space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h3 className="text-base font-bold text-white">{t.auditSentTitle}</h3>
                  <p className="text-xs text-zinc-400 max-w-md mx-auto">{t.auditSentDesc}</p>
                </div>
              ) : (
                <form 
                  onSubmit={(e) => { e.preventDefault(); setContactSent(true); }}
                  className="space-y-4 text-xs font-mono"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-zinc-400 block mb-1.5">Your Name *</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="e.g. Jean-Luc Moreau"
                        value={contactState.name}
                        onChange={(e) => setContactState({...contactState, name: e.target.value})}
                        className="w-full bg-zinc-950/90 border border-white/10 rounded-lg p-3 text-zinc-200 focus:outline-none focus:border-sky-500"
                      />
                    </div>
                    <div>
                      <label className="text-zinc-400 block mb-1.5">Work Email *</label>
                      <input 
                        required 
                        type="email" 
                        placeholder="jeanluc@firm.lu"
                        value={contactState.email}
                        onChange={(e) => setContactState({...contactState, email: e.target.value})}
                        className="w-full bg-zinc-950/90 border border-white/10 rounded-lg p-3 text-zinc-200 focus:outline-none focus:border-sky-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-zinc-400 block mb-1.5">Company / Firm Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Moreau Real Estate SARL"
                        value={contactState.company}
                        onChange={(e) => setContactState({...contactState, company: e.target.value})}
                        className="w-full bg-zinc-950/90 border border-white/10 rounded-lg p-3 text-zinc-200 focus:outline-none focus:border-sky-500"
                      />
                    </div>
                    <div>
                      <label className="text-zinc-400 block mb-1.5">Website or LinkedIn</label>
                      <input 
                        type="text" 
                        placeholder="https://moreau.lu"
                        value={contactState.website}
                        onChange={(e) => setContactState({...contactState, website: e.target.value})}
                        className="w-full bg-zinc-950/90 border border-white/10 rounded-lg p-3 text-zinc-200 focus:outline-none focus:border-sky-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-zinc-400 block mb-1.5">Which manual process causes the most friction today?</label>
                    <textarea 
                      rows={3}
                      placeholder="e.g. Client inquiries arrive through multiple channels. We lose hours manually sorting budgets and booking tours."
                      value={contactState.goal}
                      onChange={(e) => setContactState({...contactState, goal: e.target.value})}
                      className="w-full bg-zinc-950/90 border border-white/10 rounded-lg p-3 text-zinc-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold text-sm transition-all flex items-center justify-center gap-2 mt-4 shadow-lg shadow-sky-950/60 font-sans"
                  >
                    <Send className="w-4 h-4" />
                    {t.auditSubmit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-12 px-6 border-t border-white/[0.06] text-xs font-mono text-zinc-500 bg-[#040508]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-zinc-400">AI Andes Studio</span>
            <span>•</span>
            <span>{t.footerCopy}</span>
          </div>
          <div className="text-zinc-400">
            <span>Luxembourg · Switzerland · Belgium · Global B2B</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
