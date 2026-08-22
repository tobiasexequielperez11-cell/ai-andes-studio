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
  ArrowUpRight,
  Sliders,
  Activity,
  Cpu,
  TrendingUp,
  MessageSquare,
  Globe2,
  FileCheck2,
  ChevronRight
} from 'lucide-react';

export default function AIAndesStudioLanding() {
  const [lang, setLang] = useState<'en' | 'es'>('en');

  // Interactive Live Pipeline Simulator in Hero
  const [heroFlowStep, setHeroFlowStep] = useState<number>(2);

  // Demo 1: Real Estate State
  const [reStep, setReStep] = useState(1);
  const [reForm, setReForm] = useState({
    name: 'Jean-Luc Moreau',
    intent: 'rent',
    budget: '1850',
    location: 'Luxembourg (Kirchberg)',
    rooms: '2'
  });

  // Demo 2: Clinic State
  const [clinicStep, setClinicStep] = useState(1);
  const [clinicForm, setClinicForm] = useState({
    service: 'Nutritional & Metabolic Health',
    symptom: 'Dietary transition & chronic fatigue',
    timeSlot: 'Thursday 15:30 (Afternoon)',
    patient: 'Sophie Laurent'
  });

  // ROI Calculator State
  const [inquiriesPerWeek, setInquiriesPerWeek] = useState(40);
  const hoursSavedMonth = Math.round((inquiriesPerWeek * 16 * 4) / 60);
  const estimatedCostSaved = hoursSavedMonth * 45;

  // Contact State
  const [contactState, setContactState] = useState({ name: '', email: '', company: '', website: '', goal: '' });
  const [contactSent, setContactSent] = useState(false);

  const t = {
    en: {
      badge: 'Boutique Workflow Engineering for EU Businesses',
      h1_1: 'We engineer digital systems that ',
      h1_accent: 'eliminate admin friction',
      h1_2: '.',
      heroLead: 'We replace scattered WhatsApp messages, manual spreadsheets, and delayed email replies with bespoke websites, smart intake forms, and automated team dashboards.',
      btnAudit: 'Request Free Workflow Audit',
      btnDemos: 'Test Live Sandboxes',
      navServices: 'Architecture',
      navDemos: 'Live Sandboxes',
      navCases: 'Outcomes',
      navCalc: 'ROI Calculator',
      navScope: 'Scope',
      navCta: 'Get Free Audit',

      // Hero Pipeline Visual
      pStep1: 'Client Submission',
      pStep1Sub: 'Web / WhatsApp Form',
      pStep2: 'Edge AI Extraction',
      pStep2Sub: 'Scoring & Qualification',
      pStep3: 'Operational Dispatch',
      pStep3Sub: 'Notion / CRM / Calendar',

      // Architecture
      archBadge: 'System Architecture',
      archTitle: 'How we connect your operations end-to-end',
      archDesc: 'No dead ends. Every customer interaction is instantly parsed and pushed to your internal workspace.',
      step1Title: '01. Frictionless Intake',
      step1Desc: 'Mobile-first intake page that dynamically adapts questions and pre-qualifies budgets before reaching your team.',
      step2Title: '02. Edge AI Extraction & Scoring',
      step2Desc: 'Extracts key parameters, flags urgent requests, and drafts a structured executive summary in under 1.5 seconds.',
      step3Title: '03. Operational Auto-Dispatch',
      step3Desc: 'Syncs data to Notion/Airtable databases, locks calendar slots, and alerts your team via Telegram or WhatsApp.',

      // Sandboxes
      sandBadge: 'Interactive Sandboxes',
      sandTitle: 'Test the workflow in real-time',
      sandDesc: 'Experience how raw customer inquiries turn into structured, qualified records instantly.',
      demo1Tab: 'Real Estate Workflow',
      demo2Tab: 'Clinic & Triage Workflow',

      // Calculator
      calcBadge: 'Measurable Impact',
      calcTitle: 'Estimate your monthly operational savings',
      calcDesc: 'Move the slider to reflect your weekly manual inquiry volume.',
      calcSliderLabel: 'Weekly manual inquiries or bookings:',
      calcHoursTitle: 'Monthly Admin Time Recaptured',
      calcValTitle: 'Monthly Operational Value Saved',
      calcValNote: 'Based on €45/hr average professional staff cost in EU',

      // Outcomes
      casesBadge: 'Proven Outcomes',
      casesTitle: 'Real operational transformations',
      case1Title: 'Boutique Real Estate Agency (Luxembourg)',
      case1Before: 'Agents spent 3+ hours daily sorting messy email inquiries and calling unqualified renters.',
      case1After: 'Smart intake qualifies leads automatically, summarizes budgets, and books viewings in under 2 minutes.',
      case1Stat: '14 hrs/week saved per agent',
      case2Title: 'Specialized Private Clinic (Brussels)',
      case2Before: 'Staff manually logged patient symptoms and changes on paper, suffering an 18% no-show rate.',
      case2After: 'Online symptom triage with automated calendar sync and 24h WhatsApp reminders. No-shows dropped to <3%.',
      case2Stat: 'No-show rate dropped to 2.8%',

      // Scope
      scopeBadge: 'Delivery Standards',
      scopeTitle: 'Explicit scope boundaries',
      scopeDesc: 'We deliver focused systems with defined deliverables and honest execution.',
      scopeInTitle: 'What we engineer',
      scopeOutTitle: 'What we do not do',

      // Audit Form
      auditBadge: 'Zero-Risk Discovery',
      auditTitle: 'Request your free 3-point workflow audit',
      auditDesc: 'Tell us which manual task consumes the most time. We will inspect your flow and deliver 2–3 actionable improvement ideas within 24 hours.',
      auditSentTitle: 'Audit Request Received',
      auditSentDesc: 'We will analyze your workflow and email you a tailored 3-point improvement blueprint shortly.',
      auditSubmit: 'Send Audit Request',
      footerCopy: '© 2026 AI Andes Studio. Systems & Workflow Engineering.'
    },
    es: {
      badge: 'Ingeniería de Flujos y Sistemas para Empresas en Europa',
      h1_1: 'Creamos sistemas digitales que ',
      h1_accent: 'eliminan la carga manual',
      h1_2: '.',
      heroLead: 'Reemplazamos mensajes desordenados de WhatsApp, planillas manuales y respuestas lentas por email con sitios web rápidos, formularios inteligentes y paneles operativos automatizados.',
      btnAudit: 'Solicitar Auditoría de Flujo Gratuita',
      btnDemos: 'Probar Sandboxes en Vivo',
      navServices: 'Arquitectura',
      navDemos: 'Demos en Vivo',
      navCases: 'Casos Reales',
      navCalc: 'Calculadora ROI',
      navScope: 'Alcance',
      navCta: 'Auditoría Gratis',

      // Hero Pipeline Visual
      pStep1: 'Ingreso del Cliente',
      pStep1Sub: 'Formulario Web / WhatsApp',
      pStep2: 'Extracción con IA en Edge',
      pStep2Sub: 'Scoring y Calificación',
      pStep3: 'Despacho a Operaciones',
      pStep3Sub: 'Notion / CRM / Agenda',

      // Architecture
      archBadge: 'Arquitectura del Sistema',
      archTitle: 'Cómo conectamos tu operación de punta a punta',
      archDesc: 'Sin callejones sin salida. Cada interacción del cliente se procesa y se envía a tus herramientas de gestión interna.',
      step1Title: '01. Intake de Alta Conversión',
      step1Desc: 'Página mobile-first con formularios condicionales que pre-califican presupuestos antes de llegar a tu bandeja.',
      step2Title: '02. Extracción & Scoring con IA',
      step2Desc: 'Extrae parámetros clave, detecta urgencias y genera una ficha ejecutiva estructurada en menos de 1.5 segundos.',
      step3Title: '03. Despacho a Operaciones',
      step3Desc: 'Sincroniza directo con bases de datos (Notion/CRM), bloquea turnos de agenda y alerta al equipo por WhatsApp.',

      // Sandboxes
      sandBadge: 'Sandboxes Interactivos',
      sandTitle: 'Prueba el flujo de trabajo en tiempo real',
      sandDesc: 'Observa cómo una consulta se convierte en un registro operativo calificado al instante.',
      demo1Tab: 'Flujo Inmobiliario',
      demo2Tab: 'Flujo Clínico / Triaje',

      // Calculator
      calcBadge: 'Retorno Medible (ROI)',
      calcTitle: 'Calcula tu ahorro mensual de tiempo y dinero',
      calcDesc: 'Mueve el control según la cantidad de consultas semanales que recibes.',
      calcSliderLabel: 'Consultas o reservas semanales:',
      calcHoursTitle: 'Tiempo Administrativo Recuperado',
      calcValTitle: 'Valor Operativo Recuperado',
      calcValNote: 'Calculado sobre un costo administrativo promedio de €45/hr en Europa',

      // Outcomes
      casesBadge: 'Resultados Demostrables',
      casesTitle: 'Transformaciones operativas reales',
      case1Title: 'Inmobiliaria Boutique (Luxemburgo)',
      case1Before: 'Los agentes perdían más de 3 horas diarias ordenando emails y respondiendo a inquilinos no calificados.',
      case1After: 'El intake inteligente filtra consultas, resume presupuestos y agenda visitas en menos de 2 minutos.',
      case1Stat: '14 hs/semana ahorradas por agente',
      case2Title: 'Clínica Privada Especializada (Bruselas)',
      case2Before: 'El personal anotaba síntomas y cambios de turno a mano, sufriendo un 18% de inasistencias.',
      case2After: 'Triaje de síntomas online con sincronización de agenda y recordatorios 24h por WhatsApp. Inasistencias < 3%.',
      case2Stat: 'Inasistencias reducidas a 2.8%',

      // Scope
      scopeBadge: 'Estándares de Entrega',
      scopeTitle: 'Límites de alcance explícitos',
      scopeDesc: 'Entregamos sistemas modulares con parámetros definidos y ejecución transparente.',
      scopeInTitle: 'Lo que construimos',
      scopeOutTitle: 'Lo que NO hacemos',

      // Audit Form
      auditBadge: 'Descubrimiento sin Riesgo',
      auditTitle: 'Solicita una auditoría de flujo en 3 puntos',
      auditDesc: 'Cuéntanos qué proceso manual te consume más tiempo. Analizaremos tu flujo y te enviaremos 2–3 propuestas concretas en 24 horas.',
      auditSentTitle: 'Solicitud Recibida',
      auditSentDesc: 'Analizaremos tu flujo y te enviaremos un diagnóstico práctico de 3 mejoras a tu correo.',
      auditSubmit: 'Enviar Solicitud de Auditoría',
      footerCopy: '© 2026 AI Andes Studio. Ingeniería de Sistemas y Flujos.'
    }
  }[lang];

  return (
    <div className="min-h-screen bg-[#06080E] text-zinc-100 font-sans antialiased relative overflow-x-hidden">
      
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf808_1px,transparent_1px),linear-gradient(to_bottom,#38bdf808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Ambient Lighting Spheres */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-500/10 blur-[150px] pointer-events-none rounded-full animate-pulse-slow" />
      <div className="absolute top-[800px] -left-40 w-[500px] h-[300px] bg-blue-600/5 blur-[140px] pointer-events-none rounded-full" />

      {/* ─── NAVBAR ─── */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-[#06080E]/85 border-b border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo with Glow */}
          <div className="flex items-center gap-3.5">
            <div className="relative h-10 w-10 rounded-xl bg-gradient-to-b from-zinc-800 to-zinc-950 border border-sky-500/30 p-2 flex items-center justify-center shadow-lg shadow-sky-950/40">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-sky-400" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 20h18L14 4l-4 7-3-4-4 13z" className="fill-sky-400/10" />
                <path d="M14 4l7 16H3l4-13 3 4 4-7z" />
                <circle cx="14" cy="4" r="1.5" className="fill-sky-400 stroke-none" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-space font-bold tracking-tight text-base text-white flex items-center gap-2">
                AI Andes <span className="text-sky-400 font-mono text-[10px] px-2 py-0.5 rounded-full bg-sky-950/90 border border-sky-800/80 font-bold">STUDIO</span>
              </span>
              <span className="text-[10px] text-zinc-400 font-mono tracking-wider uppercase">Systems & Automations</span>
            </div>
          </div>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-zinc-400">
            <a href="#architecture" className="hover:text-white transition-colors">{t.navServices}</a>
            <a href="#sandboxes" className="hover:text-white transition-colors">{t.navDemos}</a>
            <a href="#outcomes" className="hover:text-white transition-colors">{t.navCases}</a>
            <a href="#roi" className="hover:text-white transition-colors">{t.navCalc}</a>
            <a href="#scope" className="hover:text-white transition-colors">{t.navScope}</a>
          </nav>

          {/* Language Switch & CTA */}
          <div className="flex items-center gap-3.5">
            <div className="flex items-center p-1 rounded-xl bg-zinc-900/90 border border-white/10 text-xs font-mono font-semibold">
              <button 
                type="button"
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-lg transition-all ${lang === 'en' ? 'bg-sky-500 text-zinc-950 font-bold shadow-md' : 'text-zinc-400 hover:text-white'}`}
              >
                ENG
              </button>
              <button 
                type="button"
                onClick={() => setLang('es')}
                className={`px-3 py-1 rounded-lg transition-all ${lang === 'es' ? 'bg-sky-500 text-zinc-950 font-bold shadow-md' : 'text-zinc-400 hover:text-white'}`}
              >
                ESP
              </button>
            </div>

            <a 
              href="#audit"
              className="hidden sm:inline-flex text-xs uppercase tracking-wider font-mono font-bold px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-400 to-sky-500 text-zinc-950 hover:brightness-110 transition-all shadow-[0_0_20px_rgba(56,189,248,0.25)]"
            >
              {t.navCta}
            </a>
          </div>

        </div>
      </header>

      {/* ─── HERO SECTION WITH INTERACTIVE SYSTEM PIPELINE ─── */}
      <section className="relative pt-24 pb-20 px-6 border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/[0.05] text-xs font-mono text-sky-300 mb-8 backdrop-blur-md shadow-inner">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            {t.badge}
          </div>

          <h1 className="font-space text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.06] mb-6">
            {t.h1_1}<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-zinc-300 underline decoration-sky-500/40 underline-offset-8">{t.h1_accent}</span>{t.h1_2}
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            {t.heroLead}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a 
              href="#audit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-400 to-sky-500 hover:brightness-110 text-zinc-950 font-bold text-sm transition-all shadow-[0_0_30px_rgba(56,189,248,0.35)] group"
            >
              {t.btnAudit}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#sandboxes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-zinc-900/90 border border-white/10 text-zinc-300 font-medium text-sm hover:bg-zinc-800 hover:text-white transition-all backdrop-blur-sm"
            >
              {t.btnDemos}
            </a>
          </div>

          {/* ── LIVE INTERACTIVE PIPELINE VISUALIZER IN HERO ── */}
          <div className="max-w-4xl mx-auto p-6 md:p-8 rounded-3xl bg-gradient-to-b from-[#0B0F19]/90 to-[#06080E]/95 border border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] text-xs font-mono text-zinc-400 mb-6">
              <div className="flex items-center gap-2">
                <Workflow className="w-4 h-4 text-sky-400" />
                <span className="text-zinc-200 font-semibold">Live System Flow Blueprint</span>
              </div>
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-sky-950 border border-sky-800 text-sky-300 font-mono">
                Click nodes to simulate flow
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left font-mono">
              
              {/* Flow Node 1 */}
              <button 
                type="button"
                onClick={() => setHeroFlowStep(1)}
                className={`p-5 rounded-2xl border text-left transition-all ${heroFlowStep === 1 ? 'bg-sky-950/40 border-sky-500 shadow-[0_0_20px_rgba(56,189,248,0.2)]' : 'bg-zinc-900/30 border-white/[0.08] hover:border-white/20'}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="h-8 w-8 rounded-lg bg-zinc-800 flex items-center justify-center text-sky-400">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">01</span>
                </div>
                <div className="font-bold text-sm text-white">{t.pStep1}</div>
                <div className="text-xs text-zinc-400 mt-1">{t.pStep1Sub}</div>
              </button>

              {/* Flow Node 2 */}
              <button 
                type="button"
                onClick={() => setHeroFlowStep(2)}
                className={`p-5 rounded-2xl border text-left transition-all ${heroFlowStep === 2 ? 'bg-sky-950/40 border-sky-500 shadow-[0_0_20px_rgba(56,189,248,0.2)]' : 'bg-zinc-900/30 border-white/[0.08] hover:border-white/20'}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="h-8 w-8 rounded-lg bg-zinc-800 flex items-center justify-center text-sky-400">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">02</span>
                </div>
                <div className="font-bold text-sm text-white">{t.pStep2}</div>
                <div className="text-xs text-zinc-400 mt-1">{t.pStep2Sub}</div>
              </button>

              {/* Flow Node 3 */}
              <button 
                type="button"
                onClick={() => setHeroFlowStep(3)}
                className={`p-5 rounded-2xl border text-left transition-all ${heroFlowStep === 3 ? 'bg-sky-950/40 border-sky-500 shadow-[0_0_20px_rgba(56,189,248,0.2)]' : 'bg-zinc-900/30 border-white/[0.08] hover:border-white/20'}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="h-8 w-8 rounded-lg bg-zinc-800 flex items-center justify-center text-sky-400">
                    <Database className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">03</span>
                </div>
                <div className="font-bold text-sm text-white">{t.pStep3}</div>
                <div className="text-xs text-zinc-400 mt-1">{t.pStep3Sub}</div>
              </button>

            </div>

            {/* Simulated Live Action Log */}
            <div className="mt-5 p-4 rounded-xl bg-zinc-950 border border-white/[0.06] font-mono text-xs text-left text-zinc-300 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>
                  {heroFlowStep === 1 && 'Step 1 Active: Form captures structured budget & intent via mobile.'}
                  {heroFlowStep === 2 && 'Step 2 Active: Edge AI extracts criteria & calculates lead score (96/100) in 1.2s.'}
                  {heroFlowStep === 3 && 'Step 3 Active: Record written to Notion CRM & viewing auto-scheduled in Google Calendar.'}
                </span>
              </div>
              <span className="text-[10px] text-zinc-500">Latency: 1.2s</span>
            </div>
          </div>

        </div>
      </section>

      {/* ─── ARCHITECTURE BENTO GRID ─── */}
      <section id="architecture" className="py-24 px-6 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">{t.archBadge}</div>
            <h2 className="font-space text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">{t.archTitle}</h2>
            <p className="text-sm text-zinc-400 leading-relaxed">{t.archDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#0D121E] to-[#070A10] border border-white/[0.08] backdrop-blur-xl group hover:border-sky-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-sky-950/80 border border-sky-800/80 flex items-center justify-center text-sky-400 mb-6 font-mono font-bold text-base shadow-inner">
                  01
                </div>
                <h3 className="font-space text-xl font-bold text-white mb-2">{t.step1Title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">{t.step1Desc}</p>
              </div>
              <div className="text-xs font-mono text-sky-400 flex items-center gap-2 pt-4 border-t border-white/[0.06]">
                <Check className="w-4 h-4" /> High-speed conversion front-end
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#0D121E] to-[#070A10] border border-white/[0.08] backdrop-blur-xl group hover:border-sky-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-sky-950/80 border border-sky-800/80 flex items-center justify-center text-sky-400 mb-6 font-mono font-bold text-base shadow-inner">
                  02
                </div>
                <h3 className="font-space text-xl font-bold text-white mb-2">{t.step2Title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">{t.step2Desc}</p>
              </div>
              <div className="text-xs font-mono text-sky-400 flex items-center gap-2 pt-4 border-t border-white/[0.06]">
                <Check className="w-4 h-4" /> Zero manual sorting needed
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#0D121E] to-[#070A10] border border-white/[0.08] backdrop-blur-xl group hover:border-sky-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-sky-950/80 border border-sky-800/80 flex items-center justify-center text-sky-400 mb-6 font-mono font-bold text-base shadow-inner">
                  03
                </div>
                <h3 className="font-space text-xl font-bold text-white mb-2">{t.step3Title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">{t.step3Desc}</p>
              </div>
              <div className="text-xs font-mono text-sky-400 flex items-center gap-2 pt-4 border-t border-white/[0.06]">
                <Check className="w-4 h-4" /> Real-time operational dispatch
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE SANDBOX ─── */}
      <section id="sandboxes" className="py-24 px-6 border-b border-white/[0.06] bg-[#090D15]/60">
        <div className="max-w-6xl mx-auto">
          
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">{t.sandBadge}</div>
            <h2 className="font-space text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">{t.sandTitle}</h2>
            <p className="text-sm text-zinc-400">{t.sandDesc}</p>
          </div>

          <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-b from-[#0D1322] to-[#06080F] border border-white/10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Form Input Column */}
              <div className="lg:col-span-6 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-sky-300 font-bold uppercase tracking-wider">Inbound Lead Simulation</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">Live Component</span>
                </div>

                <div>
                  <label className="text-zinc-400 block mb-1 font-medium">Client Full Name</label>
                  <input 
                    type="text" 
                    value={reForm.name} 
                    onChange={(e) => setReForm({...reForm, name: e.target.value})}
                    className="w-full bg-zinc-950 border border-white/10 rounded-xl p-3 text-zinc-200 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-zinc-400 block mb-1 font-medium">Intent</label>
                    <select 
                      value={reForm.intent} 
                      onChange={(e) => setReForm({...reForm, intent: e.target.value})}
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl p-3 text-zinc-200 focus:outline-none focus:border-sky-500"
                    >
                      <option value="rent">Property Rental</option>
                      <option value="buy">Property Purchase</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-zinc-400 block mb-1 font-medium">Budget (€)</label>
                    <input 
                      type="text" 
                      value={reForm.budget} 
                      onChange={(e) => setReForm({...reForm, budget: e.target.value})}
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl p-3 text-zinc-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-zinc-400 block mb-1 font-medium">Bedrooms</label>
                    <select 
                      value={reForm.rooms} 
                      onChange={(e) => setReForm({...reForm, rooms: e.target.value})}
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl p-3 text-zinc-200 focus:outline-none focus:border-sky-500"
                    >
                      <option value="1">1 Bed</option>
                      <option value="2">2 Beds</option>
                      <option value="3+">3+ Beds</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-zinc-400 block mb-1 font-medium">Target Zone</label>
                    <input 
                      type="text" 
                      value={reForm.location} 
                      onChange={(e) => setReForm({...reForm, location: e.target.value})}
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl p-3 text-zinc-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <button 
                  type="button" 
                  onClick={() => setReStep(2)}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-400 to-sky-500 hover:brightness-110 text-zinc-950 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-950/60 font-sans"
                >
                  <Zap className="w-4 h-4" />
                  Process Inquiry & Generate AI Brief
                </button>
              </div>

              {/* Console Output Column */}
              <div className="lg:col-span-6 p-6 rounded-2xl bg-[#05070B] border border-white/10 font-mono text-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-sky-400" />
                    <span className="text-zinc-200 font-semibold">Workflow Engine State</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                    Active
                  </span>
                </div>

                {reStep === 2 ? (
                  <div className="space-y-3 animate-in fade-in duration-300">
                    <div className="p-4 rounded-xl bg-[#091220] border border-sky-900/60 space-y-2">
                      <div className="flex items-center justify-between text-sky-300 font-bold">
                        <span>AI Executive Brief</span>
                        <span className="text-[10px] text-emerald-400 font-mono">Match 96%</span>
                      </div>
                      <p className="text-zinc-200 leading-relaxed text-[11px]">
                        &quot;{reForm.name} is seeking a {reForm.rooms}-bedroom {reForm.intent} in {reForm.location} (Budget: €{reForm.budget}). Matched 3 active units. Auto-invite for viewing dispatched.&quot;
                      </p>
                    </div>

                    <div className="space-y-1.5 text-[10px] text-zinc-400 bg-zinc-900/60 p-3 rounded-lg border border-white/[0.06]">
                      <div>➔ Notion Database: Row created with tag [Urgent Followup]</div>
                      <div>➔ Calendar Link: Proposed viewing timeslot generated</div>
                      <div>➔ Agent Alert: Push notification sent to mobile</div>
                    </div>

                    <button 
                      type="button" 
                      onClick={() => setReStep(1)}
                      className="w-full py-2.5 rounded-lg bg-zinc-850 hover:bg-zinc-800 text-zinc-300 text-xs transition-colors"
                    >
                      Reset Scenario
                    </button>
                  </div>
                ) : (
                  <div className="py-14 text-center text-zinc-500 space-y-2">
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
        <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-gradient-to-b from-[#0D1322] to-[#070A10] border border-white/10 shadow-2xl backdrop-blur-xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">{t.calcBadge}</div>
            <h2 className="font-space text-3xl font-bold text-white mb-2">{t.calcTitle}</h2>
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
                <span>10 / wk</span>
                <span>100 / wk</span>
                <span>200+ / wk</span>
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
                <div className="text-[10px] text-zinc-500 mt-1">{t.calcValNote}</div>
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
              <h2 className="font-space text-3xl font-bold text-white mb-3">{t.auditTitle}</h2>
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
                        className="w-full bg-zinc-950 border border-white/10 rounded-xl p-3.5 text-zinc-200 focus:outline-none focus:border-sky-500"
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
                        className="w-full bg-zinc-950 border border-white/10 rounded-xl p-3.5 text-zinc-200 focus:outline-none focus:border-sky-500"
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
                        className="w-full bg-zinc-950 border border-white/10 rounded-xl p-3.5 text-zinc-200 focus:outline-none focus:border-sky-500"
                      />
                    </div>
                    <div>
                      <label className="text-zinc-400 block mb-1.5">Website or LinkedIn</label>
                      <input 
                        type="text" 
                        placeholder="https://moreau.lu"
                        value={contactState.website}
                        onChange={(e) => setContactState({...contactState, website: e.target.value})}
                        className="w-full bg-zinc-950 border border-white/10 rounded-xl p-3.5 text-zinc-200 focus:outline-none focus:border-sky-500"
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
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl p-3.5 text-zinc-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-400 to-sky-500 hover:brightness-110 text-zinc-950 font-bold text-sm transition-all flex items-center justify-center gap-2 mt-4 shadow-[0_0_25px_rgba(56,189,248,0.35)] font-sans"
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
            <span className="font-semibold text-zinc-300">AI Andes Studio</span>
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
