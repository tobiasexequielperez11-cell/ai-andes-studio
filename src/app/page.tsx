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
  ExternalLink,
  ChevronRight,
  Terminal,
  Send,
  Sliders,
  Calendar,
  MessageSquare,
  FileText,
  UserCheck,
  TrendingUp,
  Cpu,
  RefreshCw,
  Database,
  Lock,
  Globe,
  ArrowDownRight,
  Activity,
  Check,
  Workflow
} from 'lucide-react';

export default function AIAndesStudioLanding() {
  // ─── LANGUAGE STATE ───
  const [lang, setLang] = useState<'en' | 'es'>('en');

  // ─── DEMO 1: REAL ESTATE STATE ───
  const [reStep, setReStep] = useState(1);
  const [reForm, setReForm] = useState({
    intent: 'rent',
    budget: '1600',
    location: 'Luxembourg City / Kirchberg',
    rooms: '2',
    name: 'Jean-Luc Moreau'
  });

  // ─── DEMO 2: CLINIC STATE ───
  const [clinicStep, setClinicStep] = useState(1);
  const [clinicForm, setClinicForm] = useState({
    service: 'Nutritional & Metabolic Health',
    symptom: 'Dietary transition & chronic fatigue',
    timeSlot: 'Thursday 15:30',
    patient: 'Sophie Laurent'
  });

  // ─── ROI CALCULATOR ───
  const [inquiriesPerWeek, setInquiriesPerWeek] = useState(40);
  const hoursSavedMonth = Math.round((inquiriesPerWeek * 16 * 4) / 60);
  const estimatedCostSaved = hoursSavedMonth * 45;

  // ─── CONTACT STATE ───
  const [contactState, setContactState] = useState({ name: '', email: '', company: '', website: '', goal: '' });
  const [contactSent, setContactSent] = useState(false);

  // ─── CONTENT DICTIONARY ───
  const dict = {
    en: {
      badge: 'Boutique Workflow Engineering for EU Businesses',
      h1_1: 'We build digital systems that ',
      h1_accent: 'eliminate admin friction',
      h1_2: '.',
      heroLead: 'Turn messy WhatsApp chats, manual spreadsheets and delayed email replies into fast websites, smart intake forms, and automated operational pipelines.',
      btnAudit: 'Request Free Workflow Audit',
      btnDemos: 'Explore Live Sandboxes',
      navServices: 'Capabilities',
      navDemos: 'Live Flow Sandboxes',
      navCases: 'Outcomes',
      navCalc: 'ROI Calculator',
      navScope: 'Scope & Trust',
      navCta: 'Get Free Audit',
      
      // Architecture Blueprint Section
      archBadge: 'System Architecture',
      archTitle: 'How we connect your operations end-to-end',
      archDesc: 'No isolated pages. Every customer touchpoint connects directly into your team’s execution tools.',
      step1Title: '01. Capture & Structure',
      step1Desc: 'Mobile-first landing page with dynamic, conditional forms that qualify leads before they ever reach your inbox.',
      step2Title: '02. AI Processing & Scoring',
      step2Desc: 'Instant extraction of budget, urgency, and requirements. Automatically summarized into an executive brief.',
      step3Title: '03. Operational Dispatch',
      step3Desc: 'Clean internal dashboards, automated calendar bookings, and instant team notifications via Telegram, WhatsApp or Email.',

      // Sandboxes
      sandBadge: 'Interactive Simulation',
      sandTitle: 'Test the workflow in real-time',
      sandDesc: 'Experience how a client inquiry transforms into an actionable operations record in under 2 seconds.',
      demo1Tab: 'Real Estate Workflow',
      demo2Tab: 'Clinic & Triage Workflow',

      // Real estate fields
      reNameLabel: 'Client Name',
      reIntentLabel: 'Inquiry Intent',
      reRent: 'Rent Property',
      reBuy: 'Buy Property',
      reBudgetLabel: 'Target Budget (€/mo or Total)',
      reRoomsLabel: 'Bedrooms',
      reZoneLabel: 'Target Location',
      reRunBtn: 'Process Inquiry & Generate AI Brief',
      reResultTitle: 'AI Executive Brief Generated',
      reResultScore: 'High Intent Lead · Match 96%',
      reResultText: (n: string, r: string, i: string, loc: string, b: string) => `"${n} submitted a ${r}-bedroom ${i} request in ${loc} with a budget of €${b}. Matched 3 active units in portfolio. Auto-invite for viewing dispatched."`,
      reResetBtn: 'Test Another Scenario',

      // Clinic fields
      clSrvLabel: 'Medical / Health Specialty',
      clSrv1: 'Nutritional & Metabolic Health',
      clSrv2: 'Dental Aesthetics & Implantology',
      clSrv3: 'Physiotherapy & Rehabilitation',
      clSymLabel: 'Chief Complaint / Goal',
      clTimeLabel: 'Selected Time Window',
      clTime1: 'Morning (09:00 - 12:30)',
      clTime2: 'Afternoon (14:30 - 18:30)',
      clRunBtn: 'Execute Automated Triage & Booking',
      clResultTitle: 'Patient Pre-Allocated',
      clResultTag: 'Automated Triage Confirmed',
      clResultText: (srv: string, sym: string, slot: string) => `"Patient booked for ${srv}. Stated focus: ${sym}. Calendar slot held for ${slot}. Automated SMS confirmation dispatched."`,
      clResetBtn: 'Test Another Triage',

      // Cases
      casesBadge: 'Demonstrated Value',
      casesTitle: 'Real operational transformations',
      case1Title: 'Boutique Real Estate Agency (Luxembourg)',
      case1Before: 'Agents spent 3+ hours daily sorting messy email inquiries and calling unqualified renters.',
      case1After: 'Smart intake qualifies leads automatically, summarizes budgets, and books viewings in under 2 minutes.',
      case1Stat: '14 hrs/week saved per agent',
      case2Title: 'Specialized Private Clinic (Brussels)',
      case2Before: 'Staff manually logged patient symptoms and changes on paper, suffering an 18% no-show rate.',
      case2After: 'Online symptom triage with automated calendar sync and 24h WhatsApp reminders. No-shows dropped to <3%.',
      case2Stat: 'No-show rate dropped to 2.8%',

      // Calculator
      calcBadge: 'Business Impact',
      calcTitle: 'Estimate your monthly time & cost savings',
      calcDesc: 'Move the slider to match your current volume of manual inquiries, bookings, or client requests per week.',
      calcSliderLabel: 'Weekly client inquiries or bookings:',
      calcHoursTitle: 'Monthly Admin Time Recaptured',
      calcHoursVal: 'hrs / month',
      calcValTitle: 'Monthly Value Recovered',
      calcValDesc: 'Based on €45/hr average professional staff cost in EU',

      // Scope
      scopeBadge: 'Honest Delivery',
      scopeTitle: 'Clear scope boundaries',
      scopeDesc: 'We build focused, high-leverage workflows with defined deliverables.',
      scopeInTitle: 'What we engineer',
      scopeIn1: '• Bespoke Next.js websites & high-converting intake pages',
      scopeIn2: '• Automated data pipelines (Notion, Airtable, Webhooks, APIs)',
      scopeIn3: '• Internal dashboards & client tracking status pipelines',
      scopeIn4: '• Privacy-first setup with 2FA and strict data minimization',
      scopeOutTitle: 'What we do not do',
      scopeOut1: '• No endless, undefined monolithic custom software',
      scopeOut2: '• No black-box unsupervised AI: all workflows have human checkpoints',
      scopeOut3: '• We do not replace certified ERPs or government accounting tools',

      // Contact
      auditBadge: 'Start with Clarity',
      auditTitle: 'Request a free 3-point workflow audit',
      auditDesc: 'Tell us where your operations lose the most time. We will inspect your flow and email you 2–3 actionable improvement ideas within 24 hours.',
      auditSentTitle: 'Audit Request Received',
      auditSentDesc: 'We are analyzing your input and will deliver a practical 3-point improvement blueprint to your email shortly.',
      auditName: 'Your Name *',
      auditEmail: 'Work Email *',
      auditCompany: 'Business Name',
      auditWebsite: 'Website or LinkedIn',
      auditTask: 'Which manual process causes the most friction today?',
      auditSubmit: 'Send Audit Request',
      footerCopy: '© 2026 AI Andes Studio. Systems & Workflow Engineering.',
      footerTag: 'Focus: Luxembourg, Switzerland, Belgium & Global B2B'
    },
    es: {
      badge: 'Ingeniería de Flujos y Sistemas para Empresas en Europa',
      h1_1: 'Creamos sistemas digitales que ',
      h1_accent: 'eliminan la carga manual',
      h1_2: '.',
      heroLead: 'Transforma mensajes desordenados de WhatsApp, planillas manuales y respuestas lentas por email en sitios web rápidos, formularios inteligentes y paneles operativos automatizados.',
      btnAudit: 'Solicitar Auditoría de Flujo Gratuita',
      btnDemos: 'Probar Sandboxes en Vivo',
      navServices: 'Capacidades',
      navDemos: 'Demos en Vivo',
      navCases: 'Casos Reales',
      navCalc: 'Calculadora ROI',
      navScope: 'Alcance',
      navCta: 'Auditoría Gratis',

      // Architecture Blueprint Section
      archBadge: 'Arquitectura del Sistema',
      archTitle: 'Cómo conectamos tu operación de punta a punta',
      archDesc: 'Sin páginas aisladas. Cada punto de contacto con el cliente se conecta directamente a tus herramientas de gestión interna.',
      step1Title: '01. Captura & Estructuración',
      step1Desc: 'Sitio web mobile-first con formularios condicionales inteligentes que califican las consultas antes de que lleguen a tu bandeja.',
      step2Title: '02. Procesamiento & Scoring IA',
      step2Desc: 'Extracción instantánea de presupuesto, urgencia y requerimientos. Resumen ejecutivo generado automáticamente.',
      step3Title: '03. Despacho Operativo',
      step3Desc: 'Paneles internos limpios, agendamiento automático y alertas instantáneas a tu equipo por Telegram, WhatsApp o Email.',

      // Sandboxes
      sandBadge: 'Simulación Interactiva',
      sandTitle: 'Prueba el flujo de trabajo en tiempo real',
      sandDesc: 'Observa cómo una consulta de un cliente se convierte en un registro operativo ordenado en menos de 2 segundos.',
      demo1Tab: 'Flujo Inmobiliario',
      demo2Tab: 'Flujo Clínica / Triaje',

      // Real estate fields
      reNameLabel: 'Nombre del Cliente',
      reIntentLabel: 'Tipo de Consulta',
      reRent: 'Alquiler',
      reBuy: 'Compra',
      reBudgetLabel: 'Presupuesto (€/mes o Total)',
      reRoomsLabel: 'Ambientes / Habitaciones',
      reZoneLabel: 'Zona / Ciudad',
      reRunBtn: 'Procesar Consulta y Generar Ficha IA',
      reResultTitle: 'Ficha Ejecutiva Generada',
      reResultScore: 'Lead de Alta Prioridad · Coincidencia 96%',
      reResultText: (n: string, r: string, i: string, loc: string, b: string) => `"${n} solicitó ${i === 'rent' ? 'alquiler' : 'compra'} de ${r} habitaciones en ${loc} con presupuesto de €${b}. Coincide con 3 propiedades disponibles. Invitación a visita despachada automáticamente."`,
      reResetBtn: 'Probar Otro Escenario',

      // Clinic fields
      clSrvLabel: 'Especialidad Médica / Salud',
      clSrv1: 'Salud Nutricional y Metabólica',
      clSrv2: 'Estética Dental e Implantología',
      clSrv3: 'Fisioterapia y Rehabilitación',
      clSymLabel: 'Motivo de Consulta / Síntoma',
      clTimeLabel: 'Franja Horaria Seleccionada',
      clTime1: 'Mañana (09:00 - 12:30)',
      clTime2: 'Tarde (14:30 - 18:30)',
      clRunBtn: 'Ejecutar Triaje y Reserva Automática',
      clResultTitle: 'Paciente Pre-Asignado',
      clResultTag: 'Triaje Automatizado Confirmado',
      clResultText: (srv: string, sym: string, slot: string) => `"Paciente registrado para ${srv}. Motivo: ${sym}. Turno bloqueado para ${slot}. Confirmación por SMS despachada."`,
      clResetBtn: 'Probar Otro Triaje',

      // Cases
      casesBadge: 'Valor Demostrable',
      casesTitle: 'Transformaciones operativas reales',
      case1Title: 'Inmobiliaria Boutique (Luxemburgo)',
      case1Before: 'Los agentes perdían más de 3 horas diarias ordenando emails y respondiendo a inquilinos no calificados.',
      case1After: 'El intake inteligente filtra consultas, resume presupuestos y agenda visitas en menos de 2 minutos.',
      case1Stat: '14 hs/semana ahorradas por agente',
      case2Title: 'Clínica Privada Especializada (Bruselas)',
      case2Before: 'El personal anotaba síntomas y cambios de turno a mano, sufriendo un 18% de inasistencias.',
      case2After: 'Triaje de síntomas online con sincronización de agenda y recordatorios 24h por WhatsApp. Inasistencias < 3%.',
      case2Stat: 'Inasistencias reducidas a 2.8%',

      // Calculator
      calcBadge: 'Impacto en el Negocio',
      calcTitle: 'Calcula tu ahorro mensual de tiempo y dinero',
      calcDesc: 'Mueve el control según la cantidad de consultas o reservas manuales que recibes por semana.',
      calcSliderLabel: 'Consultas o reservas semanales:',
      calcHoursTitle: 'Tiempo Administrativo Recuperado',
      calcHoursVal: 'hs / mes',
      calcValTitle: 'Valor Operativo Recuperado',
      calcValDesc: 'Calculado sobre un costo administrativo promedio de €45/hr en Europa',

      // Scope
      scopeBadge: 'Entrega Honesta',
      scopeTitle: 'Límites de alcance claros',
      scopeDesc: 'Construimos sistemas de alto impacto con entregables transparentes y definidos.',
      scopeInTitle: 'Lo que desarrollamos',
      scopeIn1: '• Sitios web Next.js a medida y páginas de captación optimizadas',
      scopeIn2: '• Pipelines de datos automáticos (Notion, Airtable, Webhooks, APIs)',
      scopeIn3: '• Paneles internos y tableros de seguimiento operativo',
      scopeIn4: '• Configuración segura con 2FA y minimización de datos',
      scopeOutTitle: 'Lo que NO hacemos',
      scopeOut1: '• No hacemos desarrollo de software monolítico indefinido sin etapas claras',
      scopeOut2: '• No vendemos IA de caja negra sin supervisión: todo flujo tiene control humano',
      scopeOut3: '• No reemplazamos ERPs certificados ni sistemas contables oficiales',

      // Contact
      auditBadge: 'Comienza con Claridad',
      auditTitle: 'Solicita una auditoría de flujo gratuita en 3 puntos',
      auditDesc: 'Cuéntanos qué proceso manual te consume más tiempo. Analizaremos tu flujo y te enviaremos 2–3 propuestas concretas en 24 horas.',
      auditSentTitle: 'Solicitud Recibida con Éxito',
      auditSentDesc: 'Estamos analizando tu caso y te enviaremos un diagnóstico práctico de 3 mejoras a tu correo.',
      auditName: 'Tu Nombre *',
      auditEmail: 'Email de Trabajo *',
      auditCompany: 'Nombre de la Empresa',
      auditWebsite: 'Sitio Web o LinkedIn',
      auditTask: '¿Qué proceso manual genera más fricción hoy?',
      auditSubmit: 'Enviar Solicitud de Auditoría',
      footerCopy: '© 2026 AI Andes Studio. Ingeniería de Sistemas y Flujos.',
      footerTag: 'Foco: Luxemburgo, Suiza, Bélgica y Clientes Globales B2B'
    }
  };

  const t = dict[lang];

  // ─── ACTIVE DEMO TAB ───
  const [activeDemo, setActiveDemo] = useState<'re' | 'clinic'>('re');

  return (
    <div className="min-h-screen bg-[#07090E] text-zinc-100 selection:bg-sky-500/30 selection:text-white font-sans antialiased">
      
      {/* ─── NAVIGATION BAR ─── */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07090E]/90 border-b border-zinc-850/80">
        <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 rounded-xl bg-gradient-to-b from-zinc-800 to-zinc-950 border border-zinc-700/80 p-1.5 flex items-center justify-center shadow-lg shadow-black/60">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-sky-400" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 20h18L14 4l-4 7-3-4-4 13z" className="fill-sky-500/10" />
                <path d="M14 4l7 16H3l4-13 3 4 4-7z" />
                <circle cx="14" cy="4" r="1" className="fill-sky-400 stroke-none" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-base text-white flex items-center gap-1.5">
                AI Andes <span className="text-sky-400 font-mono text-[10px] px-1.5 py-0.5 rounded bg-sky-950/80 border border-sky-800/60">STUDIO</span>
              </span>
              <span className="text-[10px] text-zinc-500 font-mono -mt-0.5 tracking-wider uppercase">Systems & Automations</span>
            </div>
          </div>

          {/* LINKS */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-wider text-zinc-400">
            <a href="#architecture" className="hover:text-white transition-colors">{t.navServices}</a>
            <a href="#sandboxes" className="hover:text-white transition-colors">{t.navDemos}</a>
            <a href="#outcomes" className="hover:text-white transition-colors">{t.navCases}</a>
            <a href="#roi" className="hover:text-white transition-colors">{t.navCalc}</a>
            <a href="#scope" className="hover:text-white transition-colors">{t.navScope}</a>
          </nav>

          {/* LANGUAGE SWITCH & CTA */}
          <div className="flex items-center gap-3">
            <div className="flex items-center p-1 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs font-mono font-semibold">
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
              className="hidden sm:inline-flex text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-lg bg-zinc-100 text-zinc-950 hover:bg-white hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all font-mono"
            >
              {t.navCta}
            </a>
          </div>

        </div>
      </header>

      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-24 pb-20 px-6 border-b border-zinc-850 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-sky-500/10 blur-[140px] pointer-events-none rounded-full" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-900/60 bg-sky-950/30 text-xs font-mono text-sky-300 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            {t.badge}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
            {t.h1_1}<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-zinc-300">{t.h1_accent}</span>{t.h1_2}
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            {t.heroLead}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#audit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold text-sm transition-all shadow-lg shadow-sky-950/60 group"
            >
              {t.btnAudit}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#sandboxes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-300 font-medium text-sm hover:bg-zinc-800 hover:text-white transition-all"
            >
              {t.btnDemos}
            </a>
          </div>

          {/* Quick Metrics Rail */}
          <div className="mt-16 pt-8 border-t border-zinc-900 grid grid-cols-2 md:grid-cols-4 gap-4 text-left font-mono">
            <div className="p-3.5 rounded-xl bg-[#0B0F17] border border-zinc-850">
              <span className="text-[10px] text-zinc-500 uppercase block">Delivery Speed</span>
              <span className="text-sm font-semibold text-zinc-200">5 to 14 Days</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0B0F17] border border-zinc-850">
              <span className="text-[10px] text-zinc-500 uppercase block">Deployment</span>
              <span className="text-sm font-semibold text-zinc-200">Edge Global (Vercel)</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0B0F17] border border-zinc-850">
              <span className="text-[10px] text-zinc-500 uppercase block">Integration</span>
              <span className="text-sm font-semibold text-zinc-200">Notion / Webhooks</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0B0F17] border border-zinc-850">
              <span className="text-[10px] text-zinc-500 uppercase block">Compliance</span>
              <span className="text-sm font-semibold text-zinc-200">GDPR-Aware & 2FA</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONNECTED ARCHITECTURE BLUEPRINT (NO GENERIC BOXES) ─── */}
      <section id="architecture" className="py-24 px-6 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">{t.archBadge}</div>
            <h2 className="text-3xl font-bold tracking-tight text-white mb-3">{t.archTitle}</h2>
            <p className="text-sm text-zinc-400 leading-relaxed">{t.archDesc}</p>
          </div>

          {/* Flow Connector Line on Desktop */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="relative p-8 rounded-2xl bg-[#0B0F19] border border-zinc-800/90 flex flex-col justify-between group hover:border-sky-500/50 transition-all">
              <div>
                <div className="h-10 w-10 rounded-lg bg-sky-950/60 border border-sky-800/60 flex items-center justify-center text-sky-400 mb-6 font-mono font-bold text-sm">
                  01
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{t.step1Title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">{t.step1Desc}</p>
              </div>
              <div className="pt-4 border-t border-zinc-850 flex items-center gap-2 text-[11px] font-mono text-sky-400">
                <Check className="w-3.5 h-3.5" /> High-speed conversion front-end
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative p-8 rounded-2xl bg-[#0B0F19] border border-zinc-800/90 flex flex-col justify-between group hover:border-sky-500/50 transition-all">
              <div>
                <div className="h-10 w-10 rounded-lg bg-sky-950/60 border border-sky-800/60 flex items-center justify-center text-sky-400 mb-6 font-mono font-bold text-sm">
                  02
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{t.step2Title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">{t.step2Desc}</p>
              </div>
              <div className="pt-4 border-t border-zinc-850 flex items-center gap-2 text-[11px] font-mono text-sky-400">
                <Check className="w-3.5 h-3.5" /> Zero manual sorting needed
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative p-8 rounded-2xl bg-[#0B0F19] border border-zinc-800/90 flex flex-col justify-between group hover:border-sky-500/50 transition-all">
              <div>
                <div className="h-10 w-10 rounded-lg bg-sky-950/60 border border-sky-800/60 flex items-center justify-center text-sky-400 mb-6 font-mono font-bold text-sm">
                  03
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{t.step3Title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">{t.step3Desc}</p>
              </div>
              <div className="pt-4 border-t border-zinc-850 flex items-center gap-2 text-[11px] font-mono text-sky-400">
                <Check className="w-3.5 h-3.5" /> Real-time operational dispatch
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE SANDBOXES (WORKFLOW DEMOS) ─── */}
      <section id="sandboxes" className="py-24 px-6 border-b border-zinc-900 bg-[#090D15]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">{t.sandBadge}</div>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-2">{t.sandTitle}</h2>
              <p className="text-sm text-zinc-400 max-w-lg">{t.sandDesc}</p>
            </div>

            {/* DEMO SELECTOR TABS */}
            <div className="flex p-1.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs font-mono">
              <button 
                type="button"
                onClick={() => setActiveDemo('re')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${activeDemo === 're' ? 'bg-sky-500 text-zinc-950 shadow-md' : 'text-zinc-400 hover:text-white'}`}
              >
                <Building2 className="w-3.5 h-3.5" />
                {t.demo1Tab}
              </button>
              <button 
                type="button"
                onClick={() => setActiveDemo('clinic')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${activeDemo === 'clinic' ? 'bg-sky-500 text-zinc-950 shadow-md' : 'text-zinc-400 hover:text-white'}`}
              >
                <Stethoscope className="w-3.5 h-3.5" />
                {t.demo2Tab}
              </button>
            </div>
          </div>

          {/* SANDBOX CONTAINER */}
          <div className="p-8 md:p-10 rounded-3xl bg-[#0D1322] border border-zinc-800 shadow-2xl">
            {activeDemo === 're' ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Form Input Column */}
                <div className="lg:col-span-6 space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                    <span className="text-sky-300 font-bold uppercase tracking-wider">Inbound Customer Form</span>
                    <span className="text-[10px] text-zinc-500">Live Intake Simulation</span>
                  </div>

                  <div>
                    <label className="text-zinc-400 block mb-1">{t.reNameLabel}</label>
                    <input 
                      type="text" 
                      value={reForm.name} 
                      onChange={(e) => setReForm({...reForm, name: e.target.value})}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-zinc-400 block mb-1">{t.reIntentLabel}</label>
                      <select 
                        value={reForm.intent} 
                        onChange={(e) => setReForm({...reForm, intent: e.target.value})}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-sky-500"
                      >
                        <option value="rent">{t.reRent}</option>
                        <option value="buy">{t.reBuy}</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-zinc-400 block mb-1">{t.reBudgetLabel}</label>
                      <input 
                        type="text" 
                        value={reForm.budget} 
                        onChange={(e) => setReForm({...reForm, budget: e.target.value})}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-sky-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-zinc-400 block mb-1">{t.reRoomsLabel}</label>
                      <select 
                        value={reForm.rooms} 
                        onChange={(e) => setReForm({...reForm, rooms: e.target.value})}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-sky-500"
                      >
                        <option value="1">1 Bed</option>
                        <option value="2">2 Beds</option>
                        <option value="3+">3+ Beds</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-zinc-400 block mb-1">{t.reZoneLabel}</label>
                      <input 
                        type="text" 
                        value={reForm.location} 
                        onChange={(e) => setReForm({...reForm, location: e.target.value})}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-sky-500"
                      />
                    </div>
                  </div>

                  <button 
                    type="button" 
                    onClick={() => setReStep(2)}
                    className="w-full py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-950"
                  >
                    <Zap className="w-4 h-4" />
                    {t.reRunBtn}
                  </button>
                </div>

                {/* Live Console Output Column */}
                <div className="lg:col-span-6 p-6 rounded-2xl bg-zinc-950 border border-zinc-800 font-mono text-xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-850">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-sky-400" />
                      <span className="text-zinc-300 font-semibold">Workflow Engine State</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                      Edge Worker: Active
                    </span>
                  </div>

                  {reStep === 2 ? (
                    <div className="space-y-3 animate-in fade-in duration-300">
                      <div className="p-3.5 rounded-xl bg-[#091220] border border-sky-900/50 space-y-2">
                        <div className="flex items-center justify-between text-sky-300 font-bold">
                          <span>{t.reResultTitle}</span>
                          <span className="text-[10px] text-emerald-400">{t.reResultScore}</span>
                        </div>
                        <p className="text-zinc-300 leading-relaxed text-[11px]">
                          {t.reResultText(reForm.name, reForm.rooms, reForm.intent, reForm.location, reForm.budget)}
                        </p>
                      </div>

                      <div className="space-y-1.5 text-[10px] text-zinc-400 bg-zinc-900/60 p-3 rounded-lg border border-zinc-850">
                        <div>➔ Notion Database: Row created with tag [Urgent Followup]</div>
                        <div>➔ Calendar Link: Proposed viewing timeslot generated</div>
                        <div>➔ Agent Alert: Push notification sent to mobile</div>
                      </div>

                      <button 
                        type="button" 
                        onClick={() => setReStep(1)}
                        className="w-full py-2 rounded-lg bg-zinc-850 hover:bg-zinc-800 text-zinc-300 text-xs transition-colors"
                      >
                        {t.reResetBtn}
                      </button>
                    </div>
                  ) : (
                    <div className="py-12 text-center text-zinc-600 space-y-2">
                      <Workflow className="w-8 h-8 mx-auto stroke-zinc-700 animate-pulse" />
                      <p>Click &quot;{t.reRunBtn}&quot; to trigger the live classification workflow.</p>
                    </div>
                  )}
                </div>

              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Clinic Form Column */}
                <div className="lg:col-span-6 space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                    <span className="text-sky-300 font-bold uppercase tracking-wider">Patient Intake Portal</span>
                    <span className="text-[10px] text-zinc-500">GDPR-Compliant Triage</span>
                  </div>

                  <div>
                    <label className="text-zinc-400 block mb-1">{t.clSrvLabel}</label>
                    <select 
                      value={clinicForm.service} 
                      onChange={(e) => setClinicForm({...clinicForm, service: e.target.value})}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-sky-500"
                    >
                      <option value="Nutritional & Metabolic Health">{t.clSrv1}</option>
                      <option value="Dental Aesthetics & Implantology">{t.clSrv2}</option>
                      <option value="Physiotherapy & Rehabilitation">{t.clSrv3}</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-zinc-400 block mb-1">{t.clSymLabel}</label>
                    <input 
                      type="text" 
                      value={clinicForm.symptom} 
                      onChange={(e) => setClinicForm({...clinicForm, symptom: e.target.value})}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="text-zinc-400 block mb-1">{t.clTimeLabel}</label>
                    <select 
                      value={clinicForm.timeSlot} 
                      onChange={(e) => setClinicForm({...clinicForm, timeSlot: e.target.value})}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-sky-500"
                    >
                      <option value="Thursday 10:00 (Morning)">{t.clTime1}</option>
                      <option value="Thursday 15:30 (Afternoon)">{t.clTime2}</option>
                    </select>
                  </div>

                  <button 
                    type="button" 
                    onClick={() => setClinicStep(2)}
                    className="w-full py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-950"
                  >
                    <UserCheck className="w-4 h-4" />
                    {t.clRunBtn}
                  </button>
                </div>

                {/* Clinic Console Output */}
                <div className="lg:col-span-6 p-6 rounded-2xl bg-zinc-950 border border-zinc-800 font-mono text-xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-850">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-sky-400" />
                      <span className="text-zinc-300 font-semibold">Clinical Pipeline Stream</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                      Sync: Cal.com API
                    </span>
                  </div>

                  {clinicStep === 2 ? (
                    <div className="space-y-3 animate-in fade-in duration-300">
                      <div className="p-3.5 rounded-xl bg-[#091220] border border-sky-900/50 space-y-2">
                        <div className="flex items-center justify-between text-sky-300 font-bold">
                          <span>{t.clResultTitle}</span>
                          <span className="text-[10px] text-sky-400">{t.clResultTag}</span>
                        </div>
                        <p className="text-zinc-300 leading-relaxed text-[11px]">
                          {t.clResultText(clinicForm.service, clinicForm.symptom, clinicForm.timeSlot)}
                        </p>
                      </div>

                      <div className="space-y-1.5 text-[10px] text-zinc-400 bg-zinc-900/60 p-3 rounded-lg border border-zinc-850">
                        <div>➔ Calendar Reservation: Slot reserved for 45 mins</div>
                        <div>➔ Automated Reminder: 24h WhatsApp notification queued</div>
                        <div>➔ Staff Dashboard: Intake notes logged without duplicate data</div>
                      </div>

                      <button 
                        type="button" 
                        onClick={() => setClinicStep(1)}
                        className="w-full py-2 rounded-lg bg-zinc-850 hover:bg-zinc-800 text-zinc-300 text-xs transition-colors"
                      >
                        {t.clResetBtn}
                      </button>
                    </div>
                  ) : (
                    <div className="py-12 text-center text-zinc-600 space-y-2">
                      <Workflow className="w-8 h-8 mx-auto stroke-zinc-700 animate-pulse" />
                      <p>Click &quot;{t.clRunBtn}&quot; to test the automated triage flow.</p>
                    </div>
                  )}
                </div>

              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── OUTCOMES & CASE STUDIES ─── */}
      <section id="outcomes" className="py-24 px-6 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-16">
            <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">{t.casesBadge}</div>
            <h2 className="text-3xl font-bold tracking-tight text-white">{t.casesTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Case 1 */}
            <div className="p-8 rounded-2xl bg-[#0B0F19] border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-white text-base">{t.case1Title}</h3>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-sky-950 border border-sky-800 text-sky-300 font-semibold">
                    {t.case1Stat}
                  </span>
                </div>
                <div className="space-y-4 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-900/30 text-zinc-400">
                    <span className="text-red-400 font-bold block mb-1">❌ MANUAL STATE:</span>
                    {t.case1Before}
                  </div>
                  <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-900/30 text-zinc-200">
                    <span className="text-emerald-400 font-bold block mb-1">✅ AI ANDES SYSTEM:</span>
                    {t.case1After}
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="p-8 rounded-2xl bg-[#0B0F19] border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-white text-base">{t.case2Title}</h3>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-sky-950 border border-sky-800 text-sky-300 font-semibold">
                    {t.case2Stat}
                  </span>
                </div>
                <div className="space-y-4 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-900/30 text-zinc-400">
                    <span className="text-red-400 font-bold block mb-1">❌ MANUAL STATE:</span>
                    {t.case2Before}
                  </div>
                  <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-900/30 text-zinc-200">
                    <span className="text-emerald-400 font-bold block mb-1">✅ AI ANDES SYSTEM:</span>
                    {t.case2After}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── ROI CALCULATOR ─── */}
      <section id="roi" className="py-24 px-6 border-b border-zinc-900 bg-[#090D15]">
        <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-[#0D1322] border border-zinc-800 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">{t.calcBadge}</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{t.calcTitle}</h2>
            <p className="text-xs text-zinc-400">{t.calcDesc}</p>
          </div>

          <div className="space-y-8 max-w-2xl mx-auto">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-zinc-300 mb-3">
                <span>{t.calcSliderLabel}</span>
                <span className="text-sky-400 font-bold text-base px-3.5 py-1 bg-sky-950 rounded-lg border border-sky-800">{inquiriesPerWeek}</span>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800 font-mono text-center">
              <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800">
                <div className="text-xs text-zinc-400 mb-1">{t.calcHoursTitle}</div>
                <div className="text-3xl font-bold text-sky-400">~{hoursSavedMonth} <span className="text-xs text-zinc-500 font-normal">{t.calcHoursVal}</span></div>
              </div>
              <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800">
                <div className="text-xs text-zinc-400 mb-1">{t.calcValTitle}</div>
                <div className="text-3xl font-bold text-emerald-400">~€{estimatedCostSaved.toLocaleString()} <span className="text-xs text-zinc-500 font-normal">/ month</span></div>
                <div className="text-[10px] text-zinc-500 mt-1">{t.calcValDesc}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SCOPE & TRANSPARENCY ─── */}
      <section id="scope" className="py-24 px-6 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">{t.scopeBadge}</div>
            <h2 className="text-3xl font-bold tracking-tight text-white mb-3">{t.scopeTitle}</h2>
            <p className="text-sm text-zinc-400">{t.scopeDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-[#0B0F19] border border-zinc-800">
              <h3 className="text-sm font-bold text-emerald-400 mb-4 flex items-center gap-2 font-mono uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" /> {t.scopeInTitle}
              </h3>
              <ul className="space-y-3 text-xs text-zinc-300 font-mono leading-relaxed">
                <li>{t.scopeIn1}</li>
                <li>{t.scopeIn2}</li>
                <li>{t.scopeIn3}</li>
                <li>{t.scopeIn4}</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[#0B0F19] border border-zinc-800">
              <h3 className="text-sm font-bold text-zinc-400 mb-4 flex items-center gap-2 font-mono uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-zinc-500" /> {t.scopeOutTitle}
              </h3>
              <ul className="space-y-3 text-xs text-zinc-400 font-mono leading-relaxed">
                <li>{t.scopeOut1}</li>
                <li>{t.scopeOut2}</li>
                <li>{t.scopeOut3}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AUDIT CONTACT FORM ─── */}
      <section id="audit" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl bg-[#0D1322] border border-zinc-800 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">{t.auditBadge}</div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{t.auditTitle}</h2>
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
                      <label className="text-zinc-400 block mb-1.5">{t.auditName}</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="e.g. Jean-Luc Dupont"
                        value={contactState.name}
                        onChange={(e) => setContactState({...contactState, name: e.target.value})}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-zinc-200 focus:outline-none focus:border-sky-500"
                      />
                    </div>
                    <div>
                      <label className="text-zinc-400 block mb-1.5">{t.auditEmail}</label>
                      <input 
                        required 
                        type="email" 
                        placeholder="jeanluc@firm.lu"
                        value={contactState.email}
                        onChange={(e) => setContactState({...contactState, email: e.target.value})}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-zinc-200 focus:outline-none focus:border-sky-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-zinc-400 block mb-1.5">{t.auditCompany}</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Dupont Real Estate SARL"
                        value={contactState.company}
                        onChange={(e) => setContactState({...contactState, company: e.target.value})}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-zinc-200 focus:outline-none focus:border-sky-500"
                      />
                    </div>
                    <div>
                      <label className="text-zinc-400 block mb-1.5">{t.auditWebsite}</label>
                      <input 
                        type="text" 
                        placeholder="https://dupont.lu"
                        value={contactState.website}
                        onChange={(e) => setContactState({...contactState, website: e.target.value})}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-zinc-200 focus:outline-none focus:border-sky-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-zinc-400 block mb-1.5">{t.auditTask}</label>
                    <textarea 
                      rows={3}
                      placeholder="e.g. Inquiries arrive manually via email and WhatsApp. We spend too much time sorting budgets and manually booking appointments."
                      value={contactState.goal}
                      onChange={(e) => setContactState({...contactState, goal: e.target.value})}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-zinc-200 focus:outline-none focus:border-sky-500"
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
      <footer className="py-12 px-6 border-t border-zinc-900 text-xs font-mono text-zinc-500 bg-[#05070B]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-zinc-400">AI Andes Studio</span>
            <span>•</span>
            <span>{t.footerCopy}</span>
          </div>
          <div className="text-zinc-400">
            <span>{t.footerTag}</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
