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
  Globe
} from 'lucide-react';

export default function AIAndesStudioLanding() {
  // ─── LANGUAGE STATE (Default: 'en') ───
  const [lang, setLang] = useState<'en' | 'es'>('en');

  // ─── DEMO 1: REAL ESTATE STATE ───
  const [reStep, setReStep] = useState(1);
  const [reForm, setReForm] = useState({
    intent: 'rent',
    budget: '1450',
    location: 'Kirchberg, Luxembourg',
    rooms: '2',
    name: 'Jean-Luc Moreau'
  });

  // ─── DEMO 2: CLINIC STATE ───
  const [clinicStep, setClinicStep] = useState(1);
  const [clinicForm, setClinicForm] = useState({
    service: 'Nutritional & Metabolic Health',
    symptom: 'Fatigue & Diet Optimization',
    timeSlot: 'Thursday 15:30 (Afternoon)',
    patient: 'Sophie Laurent'
  });

  // ─── ROI CALCULATOR STATE ───
  const [inquiriesPerWeek, setInquiriesPerWeek] = useState(35);
  const hoursSavedMonth = Math.round((inquiriesPerWeek * 18 * 4) / 60);
  const estimatedCostSaved = hoursSavedMonth * 45; // €45/hr avg admin rate

  // ─── CONTACT STATE ───
  const [contactState, setContactState] = useState({ name: '', email: '', company: '', website: '', goal: '' });
  const [contactSent, setContactSent] = useState(false);

  // ─── DICTIONARY CONTENT ───
  const dict = {
    en: {
      navServices: 'Services',
      navDemos: 'Live Sandboxes',
      navCases: 'Case Breakdowns',
      navCalculator: 'ROI Calculator',
      navScope: 'Scope',
      navCta: 'Free Workflow Audit',
      heroBadge: 'AI Workflow Engineering & Custom Digital Systems',
      heroTitle1: 'Replace fragmented manual work with ',
      heroTitleHighlight: 'intelligent digital systems',
      heroTitle2: '.',
      heroDesc: 'We build high-converting websites, smart intake workflows, automated pipelines and custom internal dashboards for businesses across Europe and worldwide.',
      heroCtaMain: 'Book Free Workflow Audit',
      heroCtaSecondary: 'Test Live Sandboxes',
      stat1Title: 'Speed to Value',
      stat1Val: '5 to 14 Days Setup',
      stat2Title: 'Target Market',
      stat2Val: 'EU & International B2B',
      stat3Title: 'Stack Integrity',
      stat3Val: 'Next.js + Zod + Edge',
      stat4Title: 'Data Hygiene',
      stat4Val: 'GDPR-Aware & 2FA Ready',
      servicesBadge: 'Core Services',
      servicesTitle: 'Modular systems designed to scale',
      servicesDesc: 'We do not build generic one-off pages. Every solution connects front-end presentation with back-end automation.',
      srv1Title: 'High-Performance Web & Landing',
      srv1Desc: 'Clean, ultra-fast web interfaces built with Next.js and Tailwind. Structured to explain complex offers clearly and drive direct inbound contact.',
      srv1Item1: 'Mobile-first responsive UX',
      srv1Item2: 'Fast Edge deployment (Vercel)',
      srv1Item3: 'SEO and semantic schema ready',
      srv2Title: 'Smart Intake & Lead Scoring',
      srv2Desc: 'Forms that dynamically adapt to the user’s answers. Automatically calculates lead quality, summarizes requirements and alerts your sales team.',
      srv2Item1: 'Conditional questions & validation',
      srv2Item2: 'Instant AI executive summary',
      srv2Item3: 'Instant sync to Notion / CRM',
      srv3Title: 'Operational Dashboards & Pipelines',
      srv3Desc: 'Custom internal panels to track client statuses, document checklists and automated follow-ups without paying expensive monthly enterprise licenses.',
      srv3Item1: 'Visual status Kanban & lists',
      srv3Item2: 'Automated reminder triggers',
      srv3Item3: 'Internal document AI query assistant',
      demosBadge: 'Interactive Proof of Concept',
      demosTitle: 'Test our live automation workflows',
      demosDesc: 'Click through the simulated client journeys below to see how raw data is collected, structured by AI, and dispatched to operations.',
      demo1Title: 'Real Estate Smart Intake Pipeline',
      demo1ClientLabel: '1. Client Name & Inquiry Intent',
      demo1Rent: '● Property Rental',
      demo1Buy: '● Property Purchase',
      demo1Budget: 'Target Budget (€)',
      demo1Rooms: 'Bedrooms',
      demo1Rooms1: '1 Bedroom / Studio',
      demo1Rooms2: '2 Bedrooms',
      demo1Rooms3: '3+ Bedrooms',
      demo1Zone: 'Target Zone / City',
      demo1Btn: 'Run AI Intake & Classification',
      demo1ResTitle: 'AI Qualification: High Priority (Score 96/100)',
      demo1ResVerified: 'Verified Match',
      demo1ResText: (name: string, rooms: string, intent: string, loc: string, b: string) => `"${name} is seeking a ${rooms}-bedroom ${intent} in ${loc} (Budget: €${b}). Criteria matches 3 available listings in database."`,
      demo1ResAction: '📅 Action: Tour proposed for Tuesday',
      demo1ResNotif: '📲 Notification: Dispatched via Telegram/Email',
      demo1ResReset: 'Re-test with new data',
      demo1Foot1: 'Integrated with: Notion CRM & Webhooks',
      demo1Foot2: 'Response latency: ~1.2s',
      demo2Title: 'Clinic Smart Patient Triage',
      demo2ServiceLabel: 'Select Medical / Health Service',
      demo2Srv1: 'Nutritional & Metabolic Health',
      demo2Srv2: 'Dental Aesthetics & Implantology',
      demo2Srv3: 'Sports Physiotherapy & Rehabilitation',
      demo2SymptomLabel: 'Primary Symptom or Goal',
      demo2TimeLabel: 'Preferred Appointment Slot',
      demo2Time1: 'Morning (09:00 - 12:30)',
      demo2Time2: 'Afternoon (14:30 - 18:30)',
      demo2Btn: 'Simulate Patient Triage & Booking',
      demo2ResTitle: 'Appointment Pre-Allocated',
      demo2ResTag: 'Automated Intake',
      demo2ResText: (srv: string, sym: string, slot: string) => `"Specialty: ${srv}. Chief complaint: ${sym}. Automated confirmation SMS & Google Calendar invite queued for slot: ${slot}."`,
      demo2ResStaff: '✓ Medical staff dashboard updated with initial clinical summary.',
      demo2ResReset: 'Re-test triage',
      demo2Foot1: 'Data minimization: Zero unneeded PII',
      demo2Foot2: 'Calendar sync: Cal.com / Google API',
      casesBadge: 'Measurable Outcomes',
      casesTitle: 'Before vs. After AI Andes Studio',
      case1Tag: 'Real Estate Firm (Luxembourg)',
      case1Before: 'Leads arrived via scattered emails and WhatsApp. Agents spent 3+ hours daily sorting budgets, calling unqualified prospects, and losing urgent buyers to competitors.',
      case1After: 'Intelligent intake filters non-qualified inquiries, generates structured property briefs, and alerts the right agent in under 2 minutes. Time saved: 14 hrs/week per agent.',
      case2Tag: 'Specialized Health Clinic (Brussels)',
      case2Before: 'Secretaries handled booking changes and symptom intakes on paper notes. 18% no-show rate due to lack of automated WhatsApp/SMS reminder sequences.',
      case2After: 'Smart patient intake portal with symptom pre-categorization, automatic calendar allocation, and 24h WhatsApp confirmation. No-shows dropped to under 3%.',
      calcBadge: 'Interactive Business Impact',
      calcTitle: 'Calculate your operational savings',
      calcDesc: 'Estimate how many hours and admin costs your team recaptures by automating repetitive client intake.',
      calcLabel: 'Inquiries / Bookings received per week:',
      calcSavedTime: 'Estimated Manual Time Saved',
      calcSavedCost: 'Estimated Value Recaptured',
      calcMonth: '/ month',
      scopeBadge: 'Scope & Transparency',
      scopeTitle: 'Engineering with clear boundaries',
      scopeDesc: 'We believe in honest delivery. We build robust modular systems with defined parameters.',
      scopeIncTitle: 'Included in our deliverables',
      scopeInc1: '• Turnkey setup: Front-end Web + Forms + Operational Dashboard.',
      scopeInc2: '• Production integrations: Notion, Airtable, Webhooks, APIs & Email.',
      scopeInc3: '• Data privacy best practices: 2FA, data minimization & clean storage.',
      scopeInc4: '• Complete video walkthrough and operational handover docs.',
      scopeInc5: '• Direct technical support during go-live.',
      scopeBoundTitle: 'Explicit boundaries',
      scopeBound1: '• No unlimited undefined custom codebases without milestone scope.',
      scopeBound2: '• No "unsupervised black-box AI": workflows have human review gates.',
      scopeBound3: '• We do not replace certified ERPs or government accounting platforms.',
      scopeBound4: '• For country-specific legal compliance, we recommend local sign-off.',
      auditBadge: 'Start with Zero Risk',
      auditTitle: 'Request your free workflow audit',
      auditDesc: 'Tell us how your business currently captures inquiries. We will review your flow and send 2–3 concrete automation opportunities.',
      auditSentTitle: 'Audit Request Received',
      auditSentDesc: 'We will analyze your current flow and email you a tailored 3-point improvement proposal within 24–48 hours.',
      auditName: 'Your Name *',
      auditEmail: 'Work Email *',
      auditCompany: 'Business / Firm Name',
      auditWeb: 'Website or LinkedIn (Optional)',
      auditTask: 'What manual task consumes the most time in your business?',
      auditSubmit: 'Submit for Free Workflow Audit',
      footerCopy: '© 2026 AI Andes Studio. Built for businesses worldwide.',
      footerFocus: 'Primary Focus: EU & International B2B',
      footerSec: 'Security-conscious setup'
    },
    es: {
      navServices: 'Servicios',
      navDemos: 'Demos Interactivas',
      navCases: 'Casos de Estudio',
      navCalculator: 'Calculadora ROI',
      navScope: 'Alcance',
      navCta: 'Auditoría Gratuita',
      heroBadge: 'Ingeniería de Flujos con IA y Sistemas Digitales a Medida',
      heroTitle1: 'Reemplaza el trabajo manual disperso con ',
      heroTitleHighlight: 'sistemas digitales inteligentes',
      heroTitle2: '.',
      heroDesc: 'Desarrollamos sitios web de alta conversión, flujos de captación inteligentes, pipelines automatizados y paneles internos a medida para empresas en Europa y el mundo.',
      heroCtaMain: 'Solicitar Auditoría de Flujo Gratuita',
      heroCtaSecondary: 'Probar Demos en Vivo',
      stat1Title: 'Velocidad de Entrega',
      stat1Val: 'Setup en 5 a 14 Días',
      stat2Title: 'Mercado Objetivo',
      stat2Val: 'B2B Europa e Internacional',
      stat3Title: 'Integridad Técnica',
      stat3Val: 'Next.js + Zod + Edge',
      stat4Title: 'Higiene de Datos',
      stat4Val: 'Alineado a GDPR & 2FA',
      servicesBadge: 'Servicios Principales',
      servicesTitle: 'Sistemas modulares listos para escalar',
      servicesDesc: 'No construimos páginas genéricas aisladas. Cada solución conecta la presencia web con la automatización de procesos internos.',
      srv1Title: 'Web & Landing Pages de Alto Rendimiento',
      srv1Desc: 'Interfaces web ultra rápidas construidas en Next.js y Tailwind. Diseñadas para explicar servicios complejos con claridad y generar consultas directas.',
      srv1Item1: 'Diseño responsive Mobile-First',
      srv1Item2: 'Despliegue rápido en Vercel Edge',
      srv1Item3: 'Estructura lista para SEO y conversión',
      srv2Title: 'Intake Inteligente y Scoring de Leads',
      srv2Desc: 'Formularios que se adaptan dinámicamente a las respuestas del usuario. Califican automáticamente al cliente potencial, generan resúmenes y alertan a tu equipo.',
      srv2Item1: 'Preguntas y validaciones condicionales',
      srv2Item2: 'Resumen ejecutivo instantáneo con IA',
      srv2Item3: 'Sincronización directa con Notion / CRM',
      srv3Title: 'Paneles Operativos y Pipelines',
      srv3Desc: 'Paneles internos personalizados para gestionar estados de clientes, listas de documentos y recordatorios sin pagar costosas licencias empresariales mensuales.',
      srv3Item1: 'Tableros Kanban y listas visuales',
      srv3Item2: 'Disparadores automáticos de avisos',
      srv3Item3: 'Asistente interno para consulta de documentos',
      demosBadge: 'Prueba de Concepto Interactiva',
      demosTitle: 'Prueba nuestros flujos automatizados en vivo',
      demosDesc: 'Interactúa con los escenarios simulados a continuación para ver cómo la información se recopila, se estructura con IA y se despacha a operaciones.',
      demo1Title: 'Pipeline de Intake para Inmobiliarias',
      demo1ClientLabel: '1. Nombre del Cliente y Tipo de Operación',
      demo1Rent: '● Alquiler de Propiedad',
      demo1Buy: '● Compra de Propiedad',
      demo1Budget: 'Presupuesto Objetivo (€)',
      demo1Rooms: 'Ambientes / Habitaciones',
      demo1Rooms1: '1 Habitación / Estudio',
      demo1Rooms2: '2 Habitaciones',
      demo1Rooms3: '3+ Habitaciones',
      demo1Zone: 'Zona / Ciudad de Búsqueda',
      demo1Btn: 'Ejecutar Clasificación e Intake con IA',
      demo1ResTitle: 'Calificación IA: Alta Prioridad (Score 96/100)',
      demo1ResVerified: 'Coincidencia Verificada',
      demo1ResText: (name: string, rooms: string, intent: string, loc: string, b: string) => `"${name} busca ${intent === 'rent' ? 'alquilar' : 'comprar'} ${rooms} habitaciones en ${loc} (Presupuesto: €${b}). Cumple criterios con 3 propiedades disponibles en base de datos."`,
      demo1ResAction: '📅 Acción: Visita sugerida para el Martes',
      demo1ResNotif: '📲 Notificación: Despachada por Telegram/Email',
      demo1ResReset: 'Probar con nuevos datos',
      demo1Foot1: 'Integrado con: Notion CRM y Webhooks',
      demo1Foot2: 'Latencia de respuesta: ~1.2s',
      demo2Title: 'Triaje y Agendamiento para Clínicas',
      demo2ServiceLabel: 'Seleccionar Servicio Médico / Salud',
      demo2Srv1: 'Salud Nutricional y Metabólica',
      demo2Srv2: 'Estética Dental e Implantología',
      demo2Srv3: 'Fisioterapia y Rehabilitación Deportiva',
      demo2SymptomLabel: 'Síntoma Principal o Motivo de Consulta',
      demo2TimeLabel: 'Franja Horaria Preferida',
      demo2Time1: 'Mañana (09:00 - 12:30)',
      demo2Time2: 'Tarde (14:30 - 18:30)',
      demo2Btn: 'Simular Triaje y Reserva de Paciente',
      demo2ResTitle: 'Turno Pre-Asignado',
      demo2ResTag: 'Intake Automatizado',
      demo2ResText: (srv: string, sym: string, slot: string) => `"Especialidad: ${srv}. Motivo: ${sym}. SMS automático de confirmación e invitación de Google Calendar en cola para franja: ${slot}."`,
      demo2ResStaff: '✓ Panel del personal médico actualizado con ficha clínica inicial.',
      demo2ResReset: 'Re-probar triaje',
      demo2Foot1: 'Minimización de datos: Cero datos innecesarios',
      demo2Foot2: 'Sincronización: Cal.com / Google API',
      casesBadge: 'Resultados Medibles',
      casesTitle: 'Antes vs. Después de AI Andes Studio',
      case1Tag: 'Inmobiliaria (Luxemburgo)',
      case1Before: 'Las consultas llegaban dispersas por email y WhatsApp. Los agentes perdían más de 3 horas diarias ordenando presupuestos, llamando prospectos no calificados y perdiendo clientes ante la competencia.',
      case1After: 'El intake inteligente filtra consultas no calificadas, genera fichas estructuradas y alerta al agente adecuado en menos de 2 minutos. Tiempo ahorrado: 14 hs/semana por agente.',
      case2Tag: 'Clínica Especializada (Bruselas)',
      case2Before: 'Las secretarias gestionaban cambios de turnos y síntomas en notas de papel. 18% de inasistencia por falta de secuencias automáticas de recordatorios por WhatsApp/SMS.',
      case2After: 'Portal de pacientes con pre-clasificación de síntomas, asignación automática de calendario y confirmación por WhatsApp 24hs antes. Las inasistencias cayeron a menos del 3%.',
      calcBadge: 'Impacto Operativo Interactivo',
      calcTitle: 'Calcula tu ahorro operativo',
      calcDesc: 'Estima cuántas horas y costos administrativos recupera tu equipo automatizando el ingreso repetitivo de clientes.',
      calcLabel: 'Consultas / Reservas recibidas por semana:',
      calcSavedTime: 'Tiempo Manual Estimado Ahorrado',
      calcSavedCost: 'Valor Operativo Recuperado',
      calcMonth: '/ mes',
      scopeBadge: 'Alcance y Transparencia',
      scopeTitle: 'Ingeniería con límites claros',
      scopeDesc: 'Creemos en la entrega honesta. Construimos sistemas modulares robustos con parámetros definidos.',
      scopeIncTitle: 'Incluido en nuestras entregas',
      scopeInc1: '• Setup llave en mano: Front-end Web + Formularios + Panel Operativo.',
      scopeInc2: '• Integraciones listas: Notion, Airtable, Webhooks, APIs y Email.',
      scopeInc3: '• Buenas prácticas de privacidad: 2FA, minimización y almacenamiento limpio.',
      scopeInc4: '• Video explicativo completo y documentación de traspaso.',
      scopeInc5: '• Soporte técnico directo durante el lanzamiento.',
      scopeBoundTitle: 'Límites explícitos',
      scopeBound1: '• No hacemos desarrollo personalizado indefinido sin etapas pautadas.',
      scopeBound2: '• No vendemos "IA de caja negra sin control": los flujos tienen validación humana.',
      scopeBound3: '• No reemplazamos sistemas contables gubernamentales ni ERPs certificados.',
      scopeBound4: '• Para normativas legales locales de cada país, sugerimos validación profesional.',
      auditBadge: 'Empieza sin Riesgo',
      auditTitle: 'Solicita tu auditoría de flujo gratuita',
      auditDesc: 'Cuéntanos cómo gestionas tus consultas hoy. Analizaremos tu proceso y te enviaremos 2–3 oportunidades concretas de automatización.',
      auditSentTitle: 'Solicitud de Auditoría Recibida',
      auditSentDesc: 'Analizaremos tu flujo actual y te enviaremos una propuesta personalizada de 3 mejoras en 24–48 horas.',
      auditName: 'Tu Nombre *',
      auditEmail: 'Email de Trabajo *',
      auditCompany: 'Nombre de la Empresa / Negocio',
      auditWeb: 'Sitio Web o LinkedIn (Opcional)',
      auditTask: '¿Qué tarea manual consume más tiempo en tu operación?',
      auditSubmit: 'Enviar para Auditoría Gratuita',
      footerCopy: '© 2026 AI Andes Studio. Construido para empresas en todo el mundo.',
      footerFocus: 'Foco Principal: B2B en Europa e Internacional',
      footerSec: 'Arquitectura con foco en seguridad'
    }
  };

  const t = dict[lang];

  // ─── LOGO COMPONENT ───
  const AndesLogo = () => (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="relative h-9 w-9 rounded-xl bg-gradient-to-b from-zinc-800 to-zinc-950 border border-zinc-700/80 p-1.5 flex items-center justify-center shadow-lg shadow-black/50 group-hover:border-sky-500/50 transition-colors">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-sky-400" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 20h18L14 4l-4 7-3-4-4 13z" className="fill-sky-500/10" />
          <path d="M14 4l7 16H3l4-13 3 4 4-7z" />
          <circle cx="14" cy="4" r="1" className="fill-sky-400 stroke-none" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-bold tracking-tight text-base text-zinc-100 flex items-center gap-1.5">
          AI Andes <span className="text-sky-400 font-mono text-xs px-1.5 py-0.5 rounded bg-sky-950/80 border border-sky-800/60">STUDIO</span>
        </span>
        <span className="text-[10px] text-zinc-500 font-mono -mt-0.5 tracking-wider uppercase">Systems & Automations</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#07090E] text-zinc-100 selection:bg-sky-500/30 selection:text-white font-sans antialiased">
      
      {/* ─── NAVIGATION ─── */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07090E]/85 border-b border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
          <AndesLogo />

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
            <a href="#services" className="hover:text-zinc-100 transition-colors">{t.navServices}</a>
            <a href="#demos" className="hover:text-zinc-100 transition-colors">{t.navDemos}</a>
            <a href="#cases" className="hover:text-zinc-100 transition-colors">{t.navCases}</a>
            <a href="#calculator" className="hover:text-zinc-100 transition-colors">{t.navCalculator}</a>
            <a href="#scope" className="hover:text-zinc-100 transition-colors">{t.navScope}</a>
          </nav>

          <div className="flex items-center gap-3">
            {/* ── BILINGUAL SWITCH BUTTON ── */}
            <div className="flex items-center p-1 rounded-lg bg-zinc-900 border border-zinc-850 text-xs font-mono font-semibold">
              <button 
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded transition-colors ${lang === 'en' ? 'bg-sky-500 text-zinc-950 shadow-sm' : 'text-zinc-400 hover:text-zinc-200'}`}
              >
                ENG
              </button>
              <button 
                type="button"
                onClick={() => setLang('es')}
                className={`px-2.5 py-1 rounded transition-colors ${lang === 'es' ? 'bg-sky-500 text-zinc-950 shadow-sm' : 'text-zinc-400 hover:text-zinc-200'}`}
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-600/10 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-sky-900/60 bg-sky-950/30 text-xs font-mono text-sky-300 mb-8 backdrop-blur-md">
            <span className="inline-block w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            {t.heroBadge}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
            {t.heroTitle1}<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-zinc-200 to-zinc-400">{t.heroTitleHighlight}</span>{t.heroTitle2}
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
            {t.heroDesc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#audit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 font-semibold text-sm transition-all shadow-lg shadow-sky-950/50 group"
            >
              {t.heroCtaMain}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#demos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-300 font-medium text-sm hover:bg-zinc-800 hover:text-white transition-all"
            >
              {t.heroCtaSecondary}
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-zinc-900 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div className="p-3 rounded-lg bg-zinc-900/30 border border-zinc-850">
              <div className="text-[11px] font-mono text-zinc-500 uppercase">{t.stat1Title}</div>
              <div className="text-sm font-semibold text-zinc-200 mt-0.5">{t.stat1Val}</div>
            </div>
            <div className="p-3 rounded-lg bg-zinc-900/30 border border-zinc-850">
              <div className="text-[11px] font-mono text-zinc-500 uppercase">{t.stat2Title}</div>
              <div className="text-sm font-semibold text-zinc-200 mt-0.5">{t.stat2Val}</div>
            </div>
            <div className="p-3 rounded-lg bg-zinc-900/30 border border-zinc-850">
              <div className="text-[11px] font-mono text-zinc-500 uppercase">{t.stat3Title}</div>
              <div className="text-sm font-semibold text-zinc-200 mt-0.5">{t.stat3Val}</div>
            </div>
            <div className="p-3 rounded-lg bg-zinc-900/30 border border-zinc-850">
              <div className="text-[11px] font-mono text-zinc-500 uppercase">{t.stat4Title}</div>
              <div className="text-sm font-semibold text-zinc-200 mt-0.5">{t.stat4Val}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES BREAKDOWN ─── */}
      <section id="services" className="py-24 px-6 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">{t.servicesBadge}</div>
              <h2 className="text-3xl font-bold tracking-tight text-white">{t.servicesTitle}</h2>
            </div>
            <p className="text-sm text-zinc-400 max-w-md">{t.servicesDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#0D121D] border border-zinc-800 hover:border-sky-500/40 transition-all group">
              <div className="h-11 w-11 rounded-xl bg-zinc-900 border border-zinc-700/60 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-105 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t.srv1Title}</h3>
              <p className="text-xs text-zinc-400 mb-6 leading-relaxed">{t.srv1Desc}</p>
              <div className="space-y-2 text-xs font-mono text-zinc-400 border-t border-zinc-850 pt-4">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> {t.srv1Item1}</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> {t.srv1Item2}</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> {t.srv1Item3}</div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#0D121D] border border-zinc-800 hover:border-sky-500/40 transition-all group">
              <div className="h-11 w-11 rounded-xl bg-zinc-900 border border-zinc-700/60 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-105 transition-transform">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t.srv2Title}</h3>
              <p className="text-xs text-zinc-400 mb-6 leading-relaxed">{t.srv2Desc}</p>
              <div className="space-y-2 text-xs font-mono text-zinc-400 border-t border-zinc-850 pt-4">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> {t.srv2Item1}</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> {t.srv2Item2}</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> {t.srv2Item3}</div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#0D121D] border border-zinc-800 hover:border-sky-500/40 transition-all group">
              <div className="h-11 w-11 rounded-xl bg-zinc-900 border border-zinc-700/60 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-105 transition-transform">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t.srv3Title}</h3>
              <p className="text-xs text-zinc-400 mb-6 leading-relaxed">{t.srv3Desc}</p>
              <div className="space-y-2 text-xs font-mono text-zinc-400 border-t border-zinc-850 pt-4">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> {t.srv3Item1}</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> {t.srv3Item2}</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> {t.srv3Item3}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE SANDBOXES ─── */}
      <section id="demos" className="py-24 px-6 border-b border-zinc-900 bg-[#090D15]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">{t.demosBadge}</div>
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">{t.demosTitle}</h2>
            <p className="text-sm text-zinc-400">{t.demosDesc}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* SANDBOX 1 */}
            <div className="p-7 rounded-2xl bg-[#0D1322] border border-zinc-800 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
                  <div className="flex items-center gap-2.5">
                    <Building2 className="w-4 h-4 text-sky-400" />
                    <span className="text-sm font-semibold text-zinc-200">{t.demo1Title}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${reStep === 1 ? 'bg-sky-400' : 'bg-emerald-400'}`} />
                    <span className="text-[11px] font-mono text-zinc-400">Step {reStep} of 2</span>
                  </div>
                </div>

                {reStep === 1 ? (
                  <div className="space-y-4 text-xs font-mono">
                    <div>
                      <label className="text-zinc-400 block mb-1.5 font-medium">{t.demo1ClientLabel}</label>
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <button 
                          type="button" 
                          onClick={() => setReForm({...reForm, intent: 'rent'})}
                          className={`py-2 px-3 rounded-lg border text-left transition-all ${reForm.intent === 'rent' ? 'bg-sky-950/60 border-sky-500/80 text-sky-200' : 'border-zinc-800 bg-zinc-900/50 text-zinc-400'}`}
                        >
                          {t.demo1Rent}
                        </button>
                        <button 
                          type="button" 
                          onClick={() => setReForm({...reForm, intent: 'buy'})}
                          className={`py-2 px-3 rounded-lg border text-left transition-all ${reForm.intent === 'buy' ? 'bg-sky-950/60 border-sky-500/80 text-sky-200' : 'border-zinc-800 bg-zinc-900/50 text-zinc-400'}`}
                        >
                          {t.demo1Buy}
                        </button>
                      </div>
                      <input 
                        type="text"
                        value={reForm.name}
                        onChange={(e) => setReForm({...reForm, name: e.target.value})}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-sky-500"
                        placeholder="Prospect name"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-zinc-400 block mb-1">{t.demo1Budget}</label>
                        <input 
                          type="text" 
                          value={reForm.budget} 
                          onChange={(e) => setReForm({...reForm, budget: e.target.value})}
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-zinc-200 focus:outline-none focus:border-sky-500"
                        />
                      </div>
                      <div>
                        <label className="text-zinc-400 block mb-1">{t.demo1Rooms}</label>
                        <select 
                          value={reForm.rooms}
                          onChange={(e) => setReForm({...reForm, rooms: e.target.value})}
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-zinc-200 focus:outline-none focus:border-sky-500"
                        >
                          <option value="1">{t.demo1Rooms1}</option>
                          <option value="2">{t.demo1Rooms2}</option>
                          <option value="3+">{t.demo1Rooms3}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-zinc-400 block mb-1">{t.demo1Zone}</label>
                      <input 
                        type="text" 
                        value={reForm.location} 
                        onChange={(e) => setReForm({...reForm, location: e.target.value})}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-zinc-200 focus:outline-none focus:border-sky-500"
                      />
                    </div>

                    <button 
                      type="button"
                      onClick={() => setReStep(2)}
                      className="w-full py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md shadow-sky-950"
                    >
                      <Zap className="w-3.5 h-3.5 text-zinc-950" />
                      {t.demo1Btn}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4 text-xs font-mono">
                    <div className="p-4 rounded-xl bg-zinc-950 border border-emerald-900/40 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" /> {t.demo1ResTitle}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-300">{t.demo1ResVerified}</span>
                      </div>
                      <div className="text-zinc-300 bg-zinc-900/60 p-2.5 rounded border border-zinc-850 leading-relaxed">
                        {t.demo1ResText(reForm.name, reForm.rooms, reForm.intent, reForm.location, reForm.budget)}
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-400">
                        <div>{t.demo1ResAction}</div>
                        <div>{t.demo1ResNotif}</div>
                      </div>
                    </div>

                    <button 
                      type="button"
                      onClick={() => setReStep(1)}
                      className="w-full py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5" /> {t.demo1ResReset}
                    </button>
                  </div>
                )}
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-800 text-[11px] font-mono text-zinc-500 flex items-center justify-between">
                <span>{t.demo1Foot1}</span>
                <span>{t.demo1Foot2}</span>
              </div>
            </div>

            {/* SANDBOX 2 */}
            <div className="p-7 rounded-2xl bg-[#0D1322] border border-zinc-800 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
                  <div className="flex items-center gap-2.5">
                    <Stethoscope className="w-4 h-4 text-sky-400" />
                    <span className="text-sm font-semibold text-zinc-200">{t.demo2Title}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${clinicStep === 1 ? 'bg-sky-400' : 'bg-emerald-400'}`} />
                    <span className="text-[11px] font-mono text-zinc-400">Step {clinicStep} of 2</span>
                  </div>
                </div>

                {clinicStep === 1 ? (
                  <div className="space-y-4 text-xs font-mono">
                    <div>
                      <label className="text-zinc-400 block mb-1 font-medium">{t.demo2ServiceLabel}</label>
                      <select 
                        value={clinicForm.service}
                        onChange={(e) => setClinicForm({...clinicForm, service: e.target.value})}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-sky-500"
                      >
                        <option value="Nutritional & Metabolic Health">{t.demo2Srv1}</option>
                        <option value="Dental Aesthetics & Implantology">{t.demo2Srv2}</option>
                        <option value="Sports Physiotherapy">{t.demo2Srv3}</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-zinc-400 block mb-1 font-medium">{t.demo2SymptomLabel}</label>
                      <input 
                        type="text" 
                        value={clinicForm.symptom} 
                        onChange={(e) => setClinicForm({...clinicForm, symptom: e.target.value})}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-sky-500"
                        placeholder="e.g. chronic discomfort, preventive checkup"
                      />
                    </div>

                    <div>
                      <label className="text-zinc-400 block mb-1 font-medium">{t.demo2TimeLabel}</label>
                      <select 
                        value={clinicForm.timeSlot}
                        onChange={(e) => setClinicForm({...clinicForm, timeSlot: e.target.value})}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-sky-500"
                      >
                        <option value="Morning (09:00 - 12:30)">{t.demo2Time1}</option>
                        <option value="Afternoon (14:30 - 18:30)">{t.demo2Time2}</option>
                      </select>
                    </div>

                    <button 
                      type="button"
                      onClick={() => setClinicStep(2)}
                      className="w-full py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md shadow-sky-950"
                    >
                      <UserCheck className="w-3.5 h-3.5 text-zinc-950" />
                      {t.demo2Btn}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4 text-xs font-mono">
                    <div className="p-4 rounded-xl bg-zinc-950 border border-sky-900/40 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sky-300 font-bold flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" /> {t.demo2ResTitle}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-sky-950 border border-sky-800 text-sky-300">{t.demo2ResTag}</span>
                      </div>
                      <div className="text-zinc-300 bg-zinc-900/60 p-2.5 rounded border border-zinc-850 leading-relaxed">
                        {t.demo2ResText(clinicForm.service, clinicForm.symptom, clinicForm.timeSlot)}
                      </div>
                      <div className="text-[11px] text-zinc-400">
                        {t.demo2ResStaff}
                      </div>
                    </div>

                    <button 
                      type="button"
                      onClick={() => setClinicStep(1)}
                      className="w-full py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5" /> {t.demo2ResReset}
                    </button>
                  </div>
                )}
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-800 text-[11px] font-mono text-zinc-500 flex items-center justify-between">
                <span>{t.demo2Foot1}</span>
                <span>{t.demo2Foot2}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── CASE STUDY BREAKDOWNS ─── */}
      <section id="cases" className="py-24 px-6 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">{t.casesBadge}</div>
            <h2 className="text-3xl font-bold tracking-tight text-white">{t.casesTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-[#0D121E] border border-zinc-800">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-2.5 py-1 rounded bg-sky-950 border border-sky-800/80 text-sky-300 font-mono text-xs font-semibold">{t.case1Tag}</span>
              </div>
              <div className="space-y-4 text-xs font-mono">
                <div className="p-3.5 rounded-lg bg-red-950/20 border border-red-900/30 text-zinc-400">
                  <span className="text-red-400 font-bold block mb-1">❌ BEFORE:</span>
                  {t.case1Before}
                </div>
                <div className="p-3.5 rounded-lg bg-emerald-950/20 border border-emerald-900/30 text-zinc-200">
                  <span className="text-emerald-400 font-bold block mb-1">✅ AFTER (AI ANDES SYSTEM):</span>
                  {t.case1After}
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#0D121E] border border-zinc-800">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-2.5 py-1 rounded bg-sky-950 border border-sky-800/80 text-sky-300 font-mono text-xs font-semibold">{t.case2Tag}</span>
              </div>
              <div className="space-y-4 text-xs font-mono">
                <div className="p-3.5 rounded-lg bg-red-950/20 border border-red-900/30 text-zinc-400">
                  <span className="text-red-400 font-bold block mb-1">❌ BEFORE:</span>
                  {t.case2Before}
                </div>
                <div className="p-3.5 rounded-lg bg-emerald-950/20 border border-emerald-900/30 text-zinc-200">
                  <span className="text-emerald-400 font-bold block mb-1">✅ AFTER (AI ANDES SYSTEM):</span>
                  {t.case2After}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ROI CALCULATOR ─── */}
      <section id="calculator" className="py-24 px-6 border-b border-zinc-900 bg-[#090D15]">
        <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-[#0D1322] border border-zinc-800 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">{t.calcBadge}</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{t.calcTitle}</h2>
            <p className="text-xs text-zinc-400">{t.calcDesc}</p>
          </div>

          <div className="space-y-8 max-w-2xl mx-auto">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-zinc-300 mb-3">
                <span>{t.calcLabel}</span>
                <span className="text-sky-400 font-bold text-base px-3 py-1 bg-sky-950 rounded border border-sky-800">{inquiriesPerWeek}</span>
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
              <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-1">
                <span>10</span>
                <span>100</span>
                <span>200+</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800 font-mono text-center">
              <div className="p-5 rounded-xl bg-zinc-950/80 border border-zinc-800">
                <div className="text-xs text-zinc-400 mb-1">{t.calcSavedTime}</div>
                <div className="text-3xl font-bold text-sky-400">~{hoursSavedMonth} hrs <span className="text-xs text-zinc-500 font-normal">{t.calcMonth}</span></div>
              </div>
              <div className="p-5 rounded-xl bg-zinc-950/80 border border-zinc-800">
                <div className="text-xs text-zinc-400 mb-1">{t.calcSavedCost}</div>
                <div className="text-3xl font-bold text-emerald-400">~€{estimatedCostSaved.toLocaleString()} <span className="text-xs text-zinc-500 font-normal">{t.calcMonth}</span></div>
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
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">{t.scopeTitle}</h2>
            <p className="text-sm text-zinc-400">{t.scopeDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 rounded-2xl bg-[#0D121E] border border-zinc-800">
              <h3 className="text-base font-semibold text-emerald-400 mb-4 flex items-center gap-2 font-mono">
                <CheckCircle2 className="w-4 h-4" /> {t.scopeIncTitle}
              </h3>
              <ul className="space-y-3 text-xs text-zinc-300 font-mono leading-relaxed">
                <li>{t.scopeInc1}</li>
                <li>{t.scopeInc2}</li>
                <li>{t.scopeInc3}</li>
                <li>{t.scopeInc4}</li>
                <li>{t.scopeInc5}</li>
              </ul>
            </div>

            <div className="p-7 rounded-2xl bg-[#0D121E] border border-zinc-800">
              <h3 className="text-base font-semibold text-zinc-400 mb-4 flex items-center gap-2 font-mono">
                <ShieldCheck className="w-4 h-4 text-zinc-500" /> {t.scopeBoundTitle}
              </h3>
              <ul className="space-y-3 text-xs text-zinc-400 font-mono leading-relaxed">
                <li>{t.scopeBound1}</li>
                <li>{t.scopeBound2}</li>
                <li>{t.scopeBound3}</li>
                <li>{t.scopeBound4}</li>
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
                        placeholder="e.g. Alex Dupont"
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
                        placeholder="alex@firm.com"
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
                        placeholder="e.g. Dupont Real Estate"
                        value={contactState.company}
                        onChange={(e) => setContactState({...contactState, company: e.target.value})}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-zinc-200 focus:outline-none focus:border-sky-500"
                      />
                    </div>
                    <div>
                      <label className="text-zinc-400 block mb-1.5">{t.auditWeb}</label>
                      <input 
                        type="text" 
                        placeholder="https://..."
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
                      placeholder="e.g. Handling new client inquiries via WhatsApp, qualifying budgets and manually scheduling appointments."
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
      <footer className="py-12 px-6 border-t border-zinc-900 text-xs font-mono text-zinc-500 bg-[#06080D]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-zinc-400">AI Andes Studio</span>
            <span>•</span>
            <span>{t.footerCopy}</span>
          </div>
          <div className="flex items-center gap-6 text-zinc-400">
            <span>{t.footerFocus}</span>
            <span>{t.footerSec}</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
