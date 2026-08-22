'use client';

import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Building2, 
  Stethoscope, 
  Send, 
  RefreshCw, 
  Database, 
  Workflow, 
  Check, 
  UserCheck, 
  Calendar, 
  Terminal
} from 'lucide-react';

export default function AIAndesStudioLanding() {
  const [lang, setLang] = useState<'en' | 'es'>('en');

  // Hero Simulator Step
  const [heroStep, setHeroStep] = useState<number>(2);

  // Real Estate Demo
  const [reStep, setReStep] = useState(1);
  const [reForm, setReForm] = useState({
    name: 'Jean-Luc Moreau',
    intent: 'rent',
    budget: '1850',
    location: 'Luxembourg (Kirchberg)',
    rooms: '2'
  });

  // Clinic Demo
  const [clinicStep, setClinicStep] = useState(1);
  const [clinicForm, setClinicForm] = useState({
    service: 'Nutritional & Metabolic Health',
    symptom: 'Dietary transition & chronic fatigue',
    timeSlot: 'Thursday 15:30',
    patient: 'Sophie Laurent'
  });

  // ROI Calculator
  const [inquiriesPerWeek, setInquiriesPerWeek] = useState(40);
  const hoursSavedMonth = Math.round((inquiriesPerWeek * 16 * 4) / 60);
  const estimatedCostSaved = hoursSavedMonth * 45;

  // Contact Form
  const [contactState, setContactState] = useState({ name: '', email: '', company: '', website: '', goal: '' });
  const [contactSent, setContactSent] = useState(false);

  const t = {
    en: {
      badge: 'Boutique Workflow Engineering for EU Businesses',
      h1_1: 'We engineer digital systems that ',
      h1_accent: 'eliminate admin friction',
      h1_2: '.',
      heroLead: 'Replace scattered WhatsApp chats, manual spreadsheets, and delayed replies with bespoke websites, smart intake forms, and automated team dashboards.',
      btnAudit: 'Request Free Workflow Audit',
      btnDemos: 'Test Live Sandboxes',
      navServices: 'Architecture',
      navDemos: 'Live Sandboxes',
      navCases: 'Outcomes',
      navCalc: 'ROI Calculator',
      navScope: 'Scope',
      navCta: 'Get Free Audit',
      pStep1: 'Client Submission',
      pStep1Sub: 'Web / WhatsApp Form',
      pStep2: 'Edge AI Extraction',
      pStep2Sub: 'Scoring & Qualification',
      pStep3: 'Operational Dispatch',
      pStep3Sub: 'Notion / CRM / Calendar',
      archBadge: 'System Architecture',
      archTitle: 'How we connect your operations end-to-end',
      archDesc: 'No dead ends. Every customer interaction is instantly parsed and pushed to your internal workspace.',
      step1Title: '01. Frictionless Intake',
      step1Desc: 'Mobile-first intake page that dynamically adapts questions and pre-qualifies budgets before reaching your team.',
      step2Title: '02. Edge AI Extraction & Scoring',
      step2Desc: 'Extracts key parameters, flags urgent requests, and drafts a structured executive summary in under 1.5 seconds.',
      step3Title: '03. Operational Auto-Dispatch',
      step3Desc: 'Syncs data to Notion/Airtable databases, locks calendar slots, and alerts your team via Telegram or WhatsApp.',
      sandBadge: 'Interactive Sandboxes',
      sandTitle: 'Test the workflow in real-time',
      sandDesc: 'Experience how raw customer inquiries turn into structured, qualified records instantly.',
      demo1Tab: 'Real Estate Workflow',
      demo2Tab: 'Clinic & Triage Workflow',
      calcBadge: 'Measurable Impact',
      calcTitle: 'Estimate your monthly operational savings',
      calcDesc: 'Move the slider to reflect your weekly manual inquiry volume.',
      calcSliderLabel: 'Weekly manual inquiries or bookings:',
      calcHoursTitle: 'Monthly Admin Time Recaptured',
      calcValTitle: 'Monthly Operational Value Saved',
      calcValNote: 'Based on €45/hr average professional staff cost in EU',
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
      scopeBadge: 'Delivery Standards',
      scopeTitle: 'Explicit scope boundaries',
      scopeDesc: 'We deliver focused systems with defined deliverables and honest execution.',
      scopeInTitle: 'What we deliver',
      scopeIn1: '• Bespoke Next.js websites & high-converting intake pages',
      scopeIn2: '• Automated data pipelines (Notion, Airtable, Webhooks, APIs)',
      scopeIn3: '• Internal dashboards & client tracking status pipelines',
      scopeIn4: '• Privacy-first setup with 2FA and strict data minimization',
      scopeOutTitle: 'What we do not do',
      scopeOut1: '• No endless, undefined monolithic custom software',
      scopeOut2: '• No black-box unsupervised AI: all workflows have human checkpoints',
      scopeOut3: '• We do not replace certified ERPs or government accounting tools',
      auditBadge: 'Zero-Risk Discovery',
      auditTitle: 'Request your free 3-point workflow audit',
      auditDesc: 'Tell us which manual task consumes the most time. We will inspect your flow and deliver 2–3 actionable improvement ideas within 24 hours.',
      auditSentTitle: 'Audit Request Received',
      auditSentDesc: 'We will analyze your workflow and email you a tailored 3-point improvement blueprint shortly.',
      auditName: 'Your Name *',
      auditEmail: 'Work Email *',
      auditCompany: 'Company / Firm Name',
      auditWebsite: 'Website or LinkedIn',
      auditTask: 'Which manual process causes the most friction today?',
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
      pStep1: 'Ingreso del Cliente',
      pStep1Sub: 'Formulario Web / WhatsApp',
      pStep2: 'Extracción con IA en Edge',
      pStep2Sub: 'Scoring y Calificación',
      pStep3: 'Despacho a Operaciones',
      pStep3Sub: 'Notion / CRM / Agenda',
      archBadge: 'Arquitectura del Sistema',
      archTitle: 'Cómo conectamos tu operación de punta a punta',
      archDesc: 'Sin callejones sin salida. Cada interacción del cliente se procesa y se envía a tus herramientas de gestión interna.',
      step1Title: '01. Intake de Alta Conversión',
      step1Desc: 'Página mobile-first con formularios condicionales que pre-califican presupuestos antes de llegar a tu bandeja.',
      step2Title: '02. Extracción & Scoring con IA',
      step2Desc: 'Extrae parámetros clave, detecta urgencias y genera una ficha ejecutiva estructurada en menos de 1.5 segundos.',
      step3Title: '03. Despacho a Operaciones',
      step3Desc: 'Sincroniza directo con bases de datos (Notion/CRM), bloquea turnos de agenda y alerta al equipo por WhatsApp.',
      sandBadge: 'Sandboxes Interactivos',
      sandTitle: 'Prueba el flujo de trabajo en tiempo real',
      sandDesc: 'Observa cómo una consulta se convierte en un registro operativo calificado al instante.',
      demo1Tab: 'Flujo Inmobiliario',
      demo2Tab: 'Flujo Clínico / Triaje',
      calcBadge: 'Retorno Medible (ROI)',
      calcTitle: 'Calcula tu ahorro mensual de tiempo y dinero',
      calcDesc: 'Mueve el control según la cantidad de consultas semanales que recibes.',
      calcSliderLabel: 'Consultas o reservas semanales:',
      calcHoursTitle: 'Tiempo Administrativo Recuperado',
      calcValTitle: 'Valor Operativo Recuperado',
      calcValNote: 'Calculado sobre un costo administrativo promedio de €45/hr en Europa',
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
      scopeBadge: 'Estándares de Entrega',
      scopeTitle: 'Límites de alcance explícitos',
      scopeDesc: 'Entregamos sistemas modulares con parámetros definidos y ejecución transparente.',
      scopeInTitle: 'Lo que construimos',
      scopeOutTitle: 'Lo que NO hacemos',
      scopeIn1: '• Sitios web Next.js a medida y páginas de captación optimizadas',
      scopeIn2: '• Pipelines de datos automáticos (Notion, Airtable, Webhooks, APIs)',
      scopeIn3: '• Paneles internos y tableros de seguimiento operativo',
      scopeIn4: '• Configuración segura con 2FA y minimización de datos',
      scopeOut1: '• No hacemos desarrollo de software monolítico indefinido sin etapas claras',
      scopeOut2: '• No vendemos IA de caja negra sin supervisión: todo flujo tiene control humano',
      scopeOut3: '• No reemplazamos ERPs certificados ni sistemas contables oficiales',
      auditBadge: 'Descubrimiento sin Riesgo',
      auditTitle: 'Solicita una auditoría de flujo en 3 puntos',
      auditDesc: 'Cuéntanos qué proceso manual te consume más tiempo. Analizaremos tu flujo y te enviaremos 2–3 propuestas concretas en 24 horas.',
      auditSentTitle: 'Solicitud Recibida',
      auditSentDesc: 'Analizaremos tu flujo y te enviaremos un diagnóstico práctico de 3 mejoras a tu correo.',
      auditName: 'Tu Nombre *',
      auditEmail: 'Email de Trabajo *',
      auditCompany: 'Nombre de la Empresa',
      auditWebsite: 'Sitio Web o LinkedIn',
      auditTask: '¿Qué proceso manual genera más fricción hoy?',
      auditSubmit: 'Enviar Solicitud de Auditoría',
      footerCopy: '© 2026 AI Andes Studio. Ingeniería de Sistemas y Flujos.'
    }
  }[lang];

  return (
    <div className="min-h-screen bg-[#070A11] text-slate-100 antialiased font-sans">
      
      {/* ─── NAVBAR ─── */}
      <header className="sticky top-0 z-50 bg-[#070A11]/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
          
          {/* Logo with Explicit Sizing */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-slate-900 border border-sky-500/30 p-1.5 flex items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-sky-400 shrink-0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 20h18L14 4l-4 7-3-4-4 13z" className="fill-sky-400/10" />
                <path d="M14 4l7 16H3l4-13 3 4 4-7z" />
                <circle cx="14" cy="4" r="1.5" className="fill-sky-400 stroke-none" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-base text-white flex items-center gap-1.5">
                AI Andes <span className="text-sky-400 font-mono text-[10px] px-1.5 py-0.5 rounded bg-sky-950 border border-sky-800 font-bold">STUDIO</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">Systems & Automations</span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-slate-400">
            <a href="#architecture" className="hover:text-white transition-colors">{t.navServices}</a>
            <a href="#sandboxes" className="hover:text-white transition-colors">{t.navDemos}</a>
            <a href="#outcomes" className="hover:text-white transition-colors">{t.navCases}</a>
            <a href="#roi" className="hover:text-white transition-colors">{t.navCalc}</a>
            <a href="#scope" className="hover:text-white transition-colors">{t.navScope}</a>
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center p-1 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono">
              <button 
                type="button" 
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded transition-all ${lang === 'en' ? 'bg-sky-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
              >
                ENG
              </button>
              <button 
                type="button" 
                onClick={() => setLang('es')}
                className={`px-2.5 py-1 rounded transition-all ${lang === 'es' ? 'bg-sky-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
              >
                ESP
              </button>
            </div>

            <a 
              href="#audit"
              className="hidden sm:inline-flex text-xs uppercase tracking-wider font-mono font-bold px-4 py-2 rounded-lg bg-sky-500 text-slate-950 hover:bg-sky-400 transition-all shadow-md"
            >
              {t.navCta}
            </a>
          </div>

        </div>
      </header>

      {/* ─── HERO SECTION ─── */}
      <section className="pt-20 pb-16 px-6 border-b border-slate-850">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-950/40 text-xs font-mono text-sky-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            {t.badge}
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            {t.h1_1}<span className="text-sky-400">{t.h1_accent}</span>{t.h1_2}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.heroLead}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a 
              href="#audit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all shadow-lg"
            >
              {t.btnAudit}
              <ArrowRight width="16" height="16" />
            </a>
            <a 
              href="#sandboxes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 font-medium text-sm hover:bg-slate-800 hover:text-white transition-all"
            >
              {t.btnDemos}
            </a>
          </div>

          {/* Interactive Pipeline Visualizer */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl text-left">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono text-slate-400 mb-5">
              <div className="flex items-center gap-2 font-bold text-slate-200">
                <Workflow width="16" height="16" className="text-sky-400" />
                Live Workflow Execution Blueprint
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                Simulated Latency: ~1.2s
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs">
              <button 
                type="button" 
                onClick={() => setHeroStep(1)}
                className={`p-4 rounded-xl border text-left transition-all ${heroStep === 1 ? 'bg-sky-950/60 border-sky-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}
              >
                <div className="text-[10px] text-sky-400 mb-1 font-bold">NODE 01</div>
                <div className="font-bold text-white text-sm">{t.pStep1}</div>
                <div className="text-xs text-slate-400 mt-1">{t.pStep1Sub}</div>
              </button>

              <button 
                type="button" 
                onClick={() => setHeroStep(2)}
                className={`p-4 rounded-xl border text-left transition-all ${heroStep === 2 ? 'bg-sky-950/60 border-sky-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}
              >
                <div className="text-[10px] text-sky-400 mb-1 font-bold">NODE 02</div>
                <div className="font-bold text-white text-sm">{t.pStep2}</div>
                <div className="text-xs text-slate-400 mt-1">{t.pStep2Sub}</div>
              </button>

              <button 
                type="button" 
                onClick={() => setHeroStep(3)}
                className={`p-4 rounded-xl border text-left transition-all ${heroStep === 3 ? 'bg-sky-950/60 border-sky-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}
              >
                <div className="text-[10px] text-sky-400 mb-1 font-bold">NODE 03</div>
                <div className="font-bold text-white text-sm">{t.pStep3}</div>
                <div className="text-xs text-slate-400 mt-1">{t.pStep3Sub}</div>
              </button>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>
                {heroStep === 1 && 'Step 1: Inbound customer inquiry submitted via responsive Next.js form.'}
                {heroStep === 2 && 'Step 2: Edge AI extracts parameters & validates budget against portfolio in 1.2s.'}
                {heroStep === 3 && 'Step 3: Record written to Notion CRM & viewing auto-scheduled in calendar.'}
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ─── ARCHITECTURE CARDS ─── */}
      <section id="architecture" className="py-20 px-6 border-b border-slate-850">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-12">
            <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">{t.archBadge}</div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">{t.archTitle}</h2>
            <p className="text-sm text-slate-400">{t.archDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-sky-950 border border-sky-800 text-sky-400 font-mono font-bold flex items-center justify-center mb-4">
                  01
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{t.step1Title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">{t.step1Desc}</p>
              </div>
              <div className="text-xs font-mono text-sky-400 flex items-center gap-2 pt-4 border-t border-slate-800">
                <Check width="14" height="14" /> High-speed conversion front-end
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-sky-950 border border-sky-800 text-sky-400 font-mono font-bold flex items-center justify-center mb-4">
                  02
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{t.step2Title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">{t.step2Desc}</p>
              </div>
              <div className="text-xs font-mono text-sky-400 flex items-center gap-2 pt-4 border-t border-slate-800">
                <Check width="14" height="14" /> Zero manual sorting needed
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-sky-950 border border-sky-800 text-sky-400 font-mono font-bold flex items-center justify-center mb-4">
                  03
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{t.step3Title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">{t.step3Desc}</p>
              </div>
              <div className="text-xs font-mono text-sky-400 flex items-center gap-2 pt-4 border-t border-slate-800">
                <Check width="14" height="14" /> Real-time operational dispatch
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE SANDBOXES ─── */}
      <section id="sandboxes" className="py-20 px-6 border-b border-slate-850">
        <div className="max-w-6xl mx-auto">
          
          <div className="max-w-xl mb-12">
            <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">{t.sandBadge}</div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">{t.sandTitle}</h2>
            <p className="text-sm text-slate-400">{t.sandDesc}</p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Form Input */}
              <div className="lg:col-span-6 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 font-bold text-slate-200">
                  <span className="text-sky-300 uppercase tracking-wider">Inbound Customer Intake</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">Live Component</span>
                </div>

                <div>
                  <label className="text-slate-400 block mb-1">Client Full Name</label>
                  <input 
                    type="text" 
                    value={reForm.name} 
                    onChange={(e) => setReForm({...reForm, name: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-400 block mb-1">Intent</label>
                    <select 
                      value={reForm.intent} 
                      onChange={(e) => setReForm({...reForm, intent: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-sky-500"
                    >
                      <option value="rent">Property Rental</option>
                      <option value="buy">Property Purchase</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">Budget (€)</label>
                    <input 
                      type="text" 
                      value={reForm.budget} 
                      onChange={(e) => setReForm({...reForm, budget: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-400 block mb-1">Bedrooms</label>
                    <select 
                      value={reForm.rooms} 
                      onChange={(e) => setReForm({...reForm, rooms: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-sky-500"
                    >
                      <option value="1">1 Bed</option>
                      <option value="2">2 Beds</option>
                      <option value="3+">3+ Beds</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">Target Zone</label>
                    <input 
                      type="text" 
                      value={reForm.location} 
                      onChange={(e) => setReForm({...reForm, location: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <button 
                  type="button" 
                  onClick={() => setReStep(2)}
                  className="w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Zap width="14" height="14" />
                  Process Inquiry & Generate AI Brief
                </button>
              </div>

              {/* Console Output */}
              <div className="lg:col-span-6 p-5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 font-bold">
                  <div className="flex items-center gap-2 text-slate-200">
                    <Terminal width="14" height="14" className="text-sky-400" />
                    Workflow Engine State
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                    Active
                  </span>
                </div>

                {reStep === 2 ? (
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-lg bg-slate-900 border border-sky-900/60 space-y-2">
                      <div className="flex items-center justify-between text-sky-300 font-bold">
                        <span>AI Executive Brief</span>
                        <span className="text-[10px] text-emerald-400">Match 96%</span>
                      </div>
                      <p className="text-slate-200 leading-relaxed text-[11px]">
                        &quot;{reForm.name} is seeking a {reForm.rooms}-bedroom {reForm.intent} in {reForm.location} (Budget: €{reForm.budget}). Matched 3 active units. Auto-invite for viewing dispatched.&quot;
                      </p>
                    </div>

                    <div className="space-y-1 text-[10px] text-slate-400 bg-slate-900/40 p-2.5 rounded border border-slate-800">
                      <div>➔ Notion Database: Row created with tag [Urgent Followup]</div>
                      <div>➔ Calendar Link: Proposed viewing timeslot generated</div>
                      <div>➔ Agent Alert: Push notification sent to mobile</div>
                    </div>

                    <button 
                      type="button" 
                      onClick={() => setReStep(1)}
                      className="w-full py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
                    >
                      Reset Scenario
                    </button>
                  </div>
                ) : (
                  <div className="py-12 text-center text-slate-500 space-y-2">
                    <Workflow width="24" height="24" className="mx-auto stroke-slate-600 animate-pulse" />
                    <p>Click &quot;Process Inquiry&quot; to test the live classification stream.</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── ROI CALCULATOR ─── */}
      <section id="roi" className="py-20 px-6 border-b border-slate-850">
        <div className="max-w-3xl mx-auto p-6 md:p-10 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">{t.calcBadge}</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{t.calcTitle}</h2>
            <p className="text-xs text-slate-400">{t.calcDesc}</p>
          </div>

          <div className="space-y-6 max-w-xl mx-auto">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-2">
                <span>{t.calcSliderLabel}</span>
                <span className="text-sky-400 font-bold text-sm px-3 py-1 bg-slate-950 rounded border border-slate-700">{inquiriesPerWeek}</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="200" 
                step="5"
                value={inquiriesPerWeek}
                onChange={(e) => setInquiriesPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-sky-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                <span>10 / wk</span>
                <span>100 / wk</span>
                <span>200+ / wk</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800 font-mono text-center">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-xs text-slate-400 mb-1">{t.calcHoursTitle}</div>
                <div className="text-2xl font-bold text-sky-400">~{hoursSavedMonth} <span className="text-xs text-slate-500 font-normal">hrs / mo</span></div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-xs text-slate-400 mb-1">{t.calcValTitle}</div>
                <div className="text-2xl font-bold text-emerald-400">~€{estimatedCostSaved.toLocaleString()} <span className="text-xs text-slate-500 font-normal">/ mo</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AUDIT CONTACT FORM ─── */}
      <section id="audit" className="py-20 px-6">
        <div className="max-w-2xl mx-auto p-6 md:p-10 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
          <div className="text-center mb-8">
            <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">{t.auditBadge}</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{t.auditTitle}</h2>
            <p className="text-xs text-slate-400 leading-relaxed">{t.auditDesc}</p>
          </div>

          {contactSent ? (
            <div className="p-6 rounded-xl bg-slate-950 border border-emerald-900/60 text-center font-mono space-y-2">
              <CheckCircle2 width="32" height="32" className="text-emerald-400 mx-auto" />
              <h3 className="text-base font-bold text-white">{t.auditSentTitle}</h3>
              <p className="text-xs text-slate-400">{t.auditSentDesc}</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setContactSent(true); }} className="space-y-4 text-xs font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-400 block mb-1">Your Name *</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="e.g. Jean-Luc Moreau"
                    value={contactState.name}
                    onChange={(e) => setContactState({...contactState, name: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">Work Email *</label>
                  <input 
                    required 
                    type="email" 
                    placeholder="jeanluc@firm.lu"
                    value={contactState.email}
                    onChange={(e) => setContactState({...contactState, email: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-400 block mb-1">Company / Firm Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Moreau Real Estate"
                    value={contactState.company}
                    onChange={(e) => setContactState({...contactState, company: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">Website or LinkedIn</label>
                  <input 
                    type="text" 
                    placeholder="https://moreau.lu"
                    value={contactState.website}
                    onChange={(e) => setContactState({...contactState, website: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Which manual process causes the most friction today?</label>
                <textarea 
                  rows={3}
                  placeholder="e.g. Inquiries arrive manually via email and WhatsApp. We spend too much time sorting budgets and manually booking appointments."
                  value={contactState.goal}
                  onChange={(e) => setContactState({...contactState, goal: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-sky-500"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Send width="14" height="14" />
                {t.auditSubmit}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-8 px-6 border-t border-slate-800 text-xs font-mono text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© 2026 AI Andes Studio. Systems & Workflow Engineering.</div>
          <div className="text-slate-400">Luxembourg · Switzerland · Belgium · Global B2B</div>
        </div>
      </footer>

    </div>
  );
}
