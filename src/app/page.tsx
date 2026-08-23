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
  Terminal,
  Activity,
  Cpu,
  TrendingUp,
  Layers,
  ChevronRight,
  MessageSquare,
  Sparkles,
  Sliders,
  CheckCircle,
  Clock,
  ArrowUpRight,
  Code2,
  FileText,
  SlidersHorizontal,
  Bot,
  Flame,
  LayoutDashboard
} from 'lucide-react';

export default function AIAndesStudioLanding() {
  const [lang, setLang] = useState<'en' | 'es'>('en');

  // Hero Window Tab State
  const [heroTab, setHeroTab] = useState<'flow' | 'json' | 'crm'>('flow');
  const [activeHeroNode, setActiveHeroNode] = useState<number>(2);

  // Natural Language Search State (Roomix Style)
  const [nlQuery, setNlQuery] = useState('Looking for a 2-bedroom rental in Luxembourg Kirchberg, budget max €1,900/mo, urgent moving date');
  const [nlOutput, setNlOutput] = useState<{ score: number; intent: string; budget: string; location: string; action: string } | null>({
    score: 98,
    intent: 'Property Rental · 2 Beds',
    budget: '€1,900 / month',
    location: 'Luxembourg City (Kirchberg)',
    action: 'Matched 3 verified properties · Instant tour link dispatched via WhatsApp API'
  });

  // Sandbox State
  const [sandboxTab, setSandboxTab] = useState<'re' | 'clinic'>('re');
  const [reStep, setReStep] = useState(1);
  const [reForm, setReForm] = useState({
    name: 'Jean-Luc Moreau',
    intent: 'rent',
    budget: '1850',
    location: 'Luxembourg (Kirchberg)',
    rooms: '2'
  });

  const [clinicStep, setClinicStep] = useState(1);
  const [clinicForm, setClinicForm] = useState({
    service: 'Nutritional & Metabolic Health',
    symptom: 'Dietary transition & chronic fatigue',
    timeSlot: 'Thursday 15:30',
    patient: 'Sophie Laurent'
  });

  // ROI Calculator
  const [weeklyVolume, setWeeklyVolume] = useState(45);
  const hoursSaved = Math.round((weeklyVolume * 16 * 4) / 60);
  const eurosSaved = hoursSaved * 45;

  // Contact Form
  const [contactState, setContactState] = useState({ name: '', email: '', company: '', website: '', goal: '' });
  const [contactDone, setContactDone] = useState(false);

  const t = {
    en: {
      topBanner: 'Bespoke AI systems for European businesses · Luxembourg · Switzerland · Belgium',
      badge: 'Boutique Workflow Engineering for EU Firms',
      h1_1: 'We engineer digital systems that ',
      h1_accent: 'eliminate admin friction',
      h1_2: '.',
      heroLead: 'We replace scattered WhatsApp messages, manual spreadsheets, and delayed email replies with bespoke websites, smart intake forms, and automated team dashboards.',
      btnAudit: 'Request Free Workflow Audit',
      btnDemos: 'Test Live Engine',
      metric1: '5–14 Days Turnaround',
      metric2: 'Vercel Edge Global',
      metric3: 'GDPR-Aligned & 2FA',
      navFramework: 'Methodology',
      navSimulator: 'NL Simulator',
      navSandboxes: 'Live Sandboxes',
      navOutcomes: 'Outcomes',
      navRoi: 'ROI Calculator',
      navScope: 'Scope',
      navCta: 'Free Audit',

      // Hero Mockup
      windowHost: 'engine.ai-andes.studio · v2.4',
      tabFlow: 'Live Flow Pipeline',
      tabJson: 'JSON Extraction',
      tabCrm: 'Notion CRM Stream',
      node1Title: '01. Client Intake',
      node1Sub: 'Web / WhatsApp Portal',
      node2Title: '02. Edge AI Reasoning',
      node2Sub: 'Score: 96% · Intent Parsed',
      node3Title: '03. Operational Dispatch',
      node3Sub: 'Notion / Cal.com / Alerts',

      // Roomix Natural Language
      nlBadge: 'Natural Language Intake Engine',
      nlTitle: 'Experience how plain text turns into structured data',
      nlDesc: 'Click a business scenario or edit the input to test the live parameter extraction:',
      preset1: '🏢 Real Estate (Luxembourg)',
      preset2: '🏥 Medical Clinic (Brussels)',
      preset3: '⚖️ Legal Firm (Zurich)',
      nlBtn: 'Parse Inquiry in 1.2s',

      // Fardo Framework
      fardoBadge: 'The Andes Methodology',
      fardoTitle: 'Structured delivery across 4 clear phases',
      fardoDesc: 'Every project follows an audited roadmap with verifiable milestones and complete handover documentation.',
      p1Title: 'Phase 1 · Intake Architecture',
      p1Tasks: '12 of 14 tasks completed (85%)',
      p1Desc: 'We map operational bottlenecks, deploy the Next.js intake interface, and establish budget qualification filters.',
      p2Title: 'Phase 2 · Edge AI Extraction',
      p2Tasks: '16 of 18 tasks completed (90%)',
      p2Desc: 'We build AI parsers that extract intent, budget, urgency, and customer criteria into structured payloads in under 1.5s.',
      p3Title: 'Phase 3 · Workspace Pipelines',
      p3Tasks: '10 of 12 tasks completed (80%)',
      p3Desc: 'We connect live two-way pipelines into Notion, Airtable, Cal.com calendar scheduling, and automated WhatsApp alerts.',
      p4Title: 'Phase 4 · Go-Live & 2FA Setup',
      p4Tasks: '8 of 8 tasks completed (100%)',
      p4Desc: 'Operational handover, team video walkthrough, GDPR data minimization verification, and 2FA access control.',

      // Sandboxes
      sandBadge: 'Interactive Sandboxes',
      sandTitle: 'Test our automation workflows in real-time',
      sandDesc: 'Experience how raw customer inquiries turn into structured, qualified records instantly.',
      demo1Tab: 'Real Estate Workflow',
      demo2Tab: 'Clinic & Triage Workflow',

      // Real Estate Form
      reNameLabel: 'Client Full Name',
      reIntentLabel: 'Inquiry Intent',
      reRent: 'Property Rental',
      reBuy: 'Property Purchase',
      reBudgetLabel: 'Target Budget (€/mo or Total)',
      reRoomsLabel: 'Bedrooms',
      reZoneLabel: 'Target Zone / City',
      reRunBtn: 'Process Inquiry & Generate AI Brief',
      reResultTitle: 'AI Executive Brief Generated',
      reResultScore: 'High Intent Lead · Match 96%',
      reResultText: (n: string, r: string, i: string, loc: string, b: string) => `"${n} submitted a ${r}-bedroom ${i} request in ${loc} with a budget of €${b}. Matched 3 active units in portfolio. Auto-invite for viewing dispatched."`,
      reResetBtn: 'Test Another Scenario',

      // Clinic Form
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

      // Calculator
      calcBadge: 'Measurable Financial ROI',
      calcTitle: 'Calculate your monthly operational savings',
      calcDesc: 'Move the slider to match the volume of manual inquiries or bookings your team handles weekly.',
      calcLabel: 'Weekly manual inquiries or bookings:',
      calcHours: 'Admin Time Recaptured',
      calcVal: 'Estimated Value Recovered',
      calcNote: 'Based on €45/hr average professional staff cost in Western Europe',

      // Cases
      caseBadge: 'Demonstrated Outcomes',
      caseTitle: 'Real operational transformations',
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
      scopeIn1: '• Bespoke Next.js websites & high-converting intake pages',
      scopeIn2: '• Automated data pipelines (Notion, Airtable, Webhooks, APIs)',
      scopeIn3: '• Internal dashboards & client tracking status pipelines',
      scopeIn4: '• Privacy-first setup with 2FA and strict data minimization',
      scopeOutTitle: 'What we do not do',
      scopeOut1: '• No endless, undefined monolithic custom software',
      scopeOut2: '• No black-box unsupervised AI: all workflows have human checkpoints',
      scopeOut3: '• We do not replace certified ERPs or government accounting tools',

      // Audit Form
      auditBadge: 'Zero-Risk Discovery',
      auditTitle: 'Request your free 3-point workflow audit',
      auditDesc: 'Tell us which manual task consumes the most time in your business. We will inspect your flow and email you 2–3 actionable improvement ideas within 24 hours.',
      auditSentTitle: 'Audit Request Received',
      auditSentDesc: 'We will inspect your business flow and deliver a 3-point actionable blueprint to your email shortly.',
      auditName: 'Your Name *',
      auditEmail: 'Work Email *',
      auditCompany: 'Company / Firm Name',
      auditWebsite: 'Website or LinkedIn',
      auditTask: 'Which manual process causes the most friction today?',
      auditSubmit: 'Send Audit Request',
      footerCopy: '© 2026 AI Andes Studio. Systems & Workflow Engineering for EU Businesses.'
    },
    es: {
      topBanner: 'Sistemas de IA para empresas en Europa · Luxemburgo · Suiza · Bélgica',
      badge: 'Ingeniería de Flujos para Empresas en Europa',
      h1_1: 'Transformamos la fricción manual en ',
      h1_accent: 'precisión automatizada',
      h1_2: '.',
      heroLead: 'Reemplazamos mensajes desordenados de WhatsApp, planillas manuales y respuestas lentas por email con portales web rápidos, flujos de captación inteligentes y paneles operativos automatizados.',
      btnAudit: 'Solicitar Auditoría de Flujo Gratuita',
      btnDemos: 'Probar Motor en Vivo',
      metric1: 'Entrega en 5 a 14 Días',
      metric2: 'Vercel Edge Global',
      metric3: 'Alineado a GDPR y 2FA',
      navFramework: 'Metodología',
      navSimulator: 'Simulador NL',
      navSandboxes: 'Demos en Vivo',
      navOutcomes: 'Casos Reales',
      navRoi: 'Calculadora ROI',
      navScope: 'Alcance',
      navCta: 'Auditoría Gratis',

      // Hero Mockup
      windowHost: 'motor.ai-andes.studio · v2.4',
      tabFlow: 'Tubería de Flujo en Vivo',
      tabJson: 'Extracción JSON',
      tabCrm: 'Flujo Notion CRM',
      node1Title: '01. Ingreso del Cliente',
      node1Sub: 'Portal Web / WhatsApp',
      node2Title: '02. Razonamiento IA en Edge',
      node2Sub: 'Score: 96% · Parámetros Listos',
      node3Title: '03. Despacho a Operaciones',
      node3Sub: 'Notion / Cal.com / Alertas',

      // Roomix Natural Language
      nlBadge: 'Motor de Intake en Lenguaje Natural',
      nlTitle: 'Prueba cómo el texto libre se convierte en datos estructurados',
      nlDesc: 'Haz clic en un escenario de negocio o escribe una consulta para probar la extracción en vivo:',
      preset1: '🏢 Inmobiliaria (Luxemburgo)',
      preset2: '🏥 Clínica Médica (Bruselas)',
      preset3: '⚖️ Estudio Legal (Zúrich)',
      nlBtn: 'Procesar Consulta en 1.2s',

      // Fardo Framework
      fardoBadge: 'Metodología Andes',
      fardoTitle: 'Entrega estructurada en 4 fases claras',
      fardoDesc: 'No creamos scripts improvisados. Cada proyecto sigue una hoja de ruta auditada con entregables verificables.',
      p1Title: 'Fase 1 · Arquitectura de Intake',
      p1Tasks: '12 de 14 tareas completadas (85%)',
      p1Desc: 'Mapeamos los cuellos de botella actuales, desplegamos el frontend en Next.js y definimos filtros de calificación.',
      p2Title: 'Fase 2 · Extracción e IA en Edge',
      p2Tasks: '16 de 18 tareas completadas (90%)',
      p2Desc: 'Implementamos modelos de IA que extraen intención, presupuesto y requerimientos en JSON estructurado en menos de 1.5s.',
      p3Title: 'Fase 3 · Integraciones de Trabajo',
      p3Tasks: '10 de 12 tareas completadas (80%)',
      p3Desc: 'Conectamos flujos bidireccionales con Notion, Airtable, agendamiento de citas en Cal.com y notificaciones por WhatsApp.',
      p4Title: 'Fase 4 · Puesta en Marcha & 2FA',
      p4Tasks: '8 de 8 tareas completadas (100%)',
      p4Desc: 'Traspaso operativo, video explicativo al equipo, verificación de minimización de datos (GDPR) y seguridad 2FA.',

      // Sandboxes
      sandBadge: 'Sandboxes Interactivos',
      sandTitle: 'Prueba nuestros flujos de automatización en tiempo real',
      sandDesc: 'Observa cómo una consulta se convierte en un registro operativo calificado al instante.',
      demo1Tab: 'Flujo Inmobiliario',
      demo2Tab: 'Flujo Clínico / Triaje',

      // Real Estate Form
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

      // Clinic Form
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

      // Calculator
      calcBadge: 'Retorno Medible (ROI)',
      calcTitle: 'Calcula tu ahorro mensual de tiempo y dinero',
      calcDesc: 'Mueve el control según la cantidad de consultas o reservas manuales que recibes por semana.',
      calcSliderLabel: 'Consultas o reservas semanales:',
      calcHours: 'Tiempo Administrativo Recuperado',
      calcVal: 'Valor Operativo Recuperado',
      calcNote: 'Calculado sobre un costo administrativo promedio de €45/hr en Europa',

      // Cases
      caseBadge: 'Resultados Demostrables',
      caseTitle: 'Transformaciones operativas reales',
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
      scopeIn1: '• Sitios web Next.js a medida y páginas de captación optimizadas',
      scopeIn2: '• Pipelines de datos automáticos (Notion, Airtable, Webhooks, APIs)',
      scopeIn3: '• Paneles internos y tableros de seguimiento operativo',
      scopeIn4: '• Configuración segura con 2FA y minimización de datos',
      scopeOutTitle: 'Lo que NO hacemos',
      scopeOut1: '• No hacemos desarrollo de software monolítico indefinido sin etapas claras',
      scopeOut2: '• No vendemos IA de caja negra sin supervisión: todo flujo tiene control humano',
      scopeOut3: '• No reemplazamos ERPs certificados ni sistemas contables oficiales',

      // Audit Form
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

  // Presets Loader
  const loadPreset = (type: string) => {
    if (type === 're') {
      setNlQuery('Looking for a 2-bedroom rental in Luxembourg Kirchberg, budget max €1,900/mo, urgent moving date');
      setNlOutput({
        score: 98,
        intent: 'Property Rental · 2 Bedrooms',
        budget: '€1,900 / month',
        location: 'Luxembourg City (Kirchberg)',
        action: 'Matched 3 portfolio properties · Instant viewing link dispatched via WhatsApp'
      });
    } else if (type === 'clinic') {
      setNlQuery('Need a consultation for metabolic health and chronic fatigue on Thursday afternoon, patient Sophie Laurent');
      setNlOutput({
        score: 95,
        intent: 'Nutritional & Metabolic Health',
        budget: 'Standard Consultation (€120)',
        location: 'Brussels Clinic (Avenue Louise)',
        action: 'Appointment held for Thursday 15:30 · Confirmation SMS queued'
      });
    } else if (type === 'legal') {
      setNlQuery('Corporate contract review for Swiss subsidiary, urgent 48h deadline, document length 14 pages');
      setNlOutput({
        score: 92,
        intent: 'Corporate Document Audit',
        budget: 'Priority Expedited Intake',
        location: 'Zurich Financial District',
        action: 'Checklist created in Notion · Partner alerted with document brief'
      });
    }
  };

  return (
    <div style={{ backgroundColor: '#05070E', minHeight: '100vh', color: '#F1F5F9', position: 'relative', overflowX: 'hidden' }}>
      
      {/* ─── ATMOSPHERIC LIGHTING HALOS ─── */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '800px', height: '400px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 80%)', filter: 'blur(120px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '900px', right: '-150px', width: '600px', height: '400px', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)', filter: 'blur(140px)', pointerEvents: 'none', zIndex: 0 }} />

      {/* ─── TOP NOTIFICATION STRIP ─── */}
      <div style={{ position: 'relative', zIndex: 50, backgroundColor: 'rgba(56, 189, 248, 0.06)', borderBottom: '1px solid rgba(56, 189, 248, 0.18)', padding: '9px 16px', textAlign: 'center', fontSize: '11px', fontFamily: 'monospace', color: '#38BDF8', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#38BDF8', display: 'inline-block', boxShadow: '0 0 8px #38BDF8' }} />
        <span>{t.topBanner}</span>
      </div>

      {/* ─── NAVBAR WITH GLASS EFFECT ─── */}
      <header style={{ backgroundColor: 'rgba(5, 7, 14, 0.85)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(20px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo Box */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: '#0B1120', border: '1px solid rgba(56, 189, 248, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 0 20px rgba(56, 189, 248, 0.2)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 20h18L14 4l-4 7-3-4-4 13z" fill="rgba(56, 189, 248, 0.15)" />
                <path d="M14 4l7 16H3l4-13 3 4 4-7z" />
                <circle cx="14" cy="4" r="1.5" fill="#38BDF8" stroke="none" />
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 800, fontSize: '16px', color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '6px', letterSpacing: '-0.3px' }}>
                AI Andes <span style={{ color: '#38BDF8', fontSize: '10px', padding: '2px 6px', borderRadius: '4px', backgroundColor: 'rgba(56,189,248,0.12)', border: '1px solid rgba(56,189,248,0.3)', fontFamily: 'monospace', fontWeight: 700 }}>STUDIO</span>
              </span>
              <span style={{ fontSize: '10px', color: '#64748B', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px' }}>Systems & Automations</span>
            </div>
          </div>

          {/* Nav Links */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '28px', fontSize: '12px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px' }} className="md:flex">
            <a href="#simulator" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }}>{t.navSimulator}</a>
            <a href="#framework" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }}>{t.navFramework}</a>
            <a href="#sandboxes" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }}>{t.navSandboxes}</a>
            <a href="#outcomes" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }}>{t.navOutcomes}</a>
            <a href="#roi" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }}>{t.navRoi}</a>
          </nav>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', padding: '3px', borderRadius: '8px', backgroundColor: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '12px', fontFamily: 'monospace' }}>
              <button 
                type="button" 
                onClick={() => setLang('en')}
                style={{ padding: '4px 10px', borderRadius: '6px', border: 'none', cursor: 'pointer', backgroundColor: lang === 'en' ? '#38BDF8' : 'transparent', color: lang === 'en' ? '#06080E' : '#94A3B8', fontWeight: lang === 'en' ? 800 : 500 }}
              >
                ENG
              </button>
              <button 
                type="button" 
                onClick={() => setLang('es')}
                style={{ padding: '4px 10px', borderRadius: '6px', border: 'none', cursor: 'pointer', backgroundColor: lang === 'es' ? '#38BDF8' : 'transparent', color: lang === 'es' ? '#06080E' : '#94A3B8', fontWeight: lang === 'es' ? 800 : 500 }}
              >
                ESP
              </button>
            </div>

            <a 
              href="#audit"
              style={{ padding: '10px 20px', borderRadius: '10px', backgroundColor: '#38BDF8', color: '#06080E', fontWeight: 800, fontSize: '12px', textDecoration: 'none', textTransform: 'uppercase', fontFamily: 'monospace', display: 'none', boxShadow: '0 0 20px rgba(56, 189, 248, 0.35)' }}
              className="sm:inline-block"
            >
              {t.navCta}
            </a>
          </div>

        </div>
      </header>

      {/* ─── 2-COLUMN ASYMMETRIC HERO SECTION ─── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '80px 24px 64px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px', alignItems: 'center' }}>
          
          {/* Left Column: Core Value Proposition */}
          <div style={{ textAlign: 'left' }}>
            
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '9999px', border: '1px solid rgba(56, 189, 248, 0.35)', backgroundColor: 'rgba(56, 189, 248, 0.06)', fontSize: '11px', fontFamily: 'monospace', color: '#38BDF8', marginBottom: '20px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#38BDF8', display: 'inline-block', boxShadow: '0 0 8px #38BDF8' }} />
              {t.badge}
            </div>

            <h1 style={{ fontSize: 'clamp(34px, 4.2vw, 56px)', fontWeight: 800, lineHeight: 1.08, color: '#FFFFFF', marginBottom: '22px', letterSpacing: '-1.5px' }}>
              {t.h1_1}<span style={{ color: '#38BDF8', textShadow: '0 0 30px rgba(56,189,248,0.3)' }}>{t.h1_accent}</span>{t.h1_2}
            </h1>

            <p style={{ fontSize: '16px', color: '#94A3B8', lineHeight: 1.65, marginBottom: '32px', maxWidth: '520px' }}>
              {t.heroLead}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '40px' }}>
              <a 
                href="#audit"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 30px', borderRadius: '12px', backgroundColor: '#38BDF8', color: '#06080E', fontWeight: 800, fontSize: '14px', textDecoration: 'none', boxShadow: '0 0 28px rgba(56, 189, 248, 0.4)' }}
              >
                {t.btnAudit}
                <ArrowRight width="16" height="16" />
              </a>
              <a 
                href="#simulator"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 26px', borderRadius: '12px', backgroundColor: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255, 255, 255, 0.12)', color: '#E2E8F0', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}
              >
                {t.btnDemos}
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontFamily: 'monospace', fontSize: '11px', color: '#64748B', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#CBD5E1' }}>
                <Check width="14" height="14" color="#38BDF8" /> {t.metric1}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#CBD5E1' }}>
                <Check width="14" height="14" color="#38BDF8" /> {t.metric2}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#CBD5E1' }}>
                <Check width="14" height="14" color="#38BDF8" /> {t.metric3}
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity App Mockup (Linear / Grego style) */}
          <div style={{ borderRadius: '20px', backgroundColor: '#070A14', border: '1px solid rgba(56, 189, 248, 0.25)', boxShadow: '0 24px 60px rgba(0,0,0,0.8), 0 0 40px rgba(56, 189, 248, 0.12)', overflow: 'hidden' }}>
            
            {/* Window Top Chrome */}
            <div style={{ backgroundColor: '#0B1120', padding: '12px 18px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444', display: 'inline-block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F59E0B', display: 'inline-block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }} />
                <span style={{ marginLeft: '10px', fontSize: '11px', fontFamily: 'monospace', color: '#64748B' }}>{t.windowHost}</span>
              </div>
              <div style={{ display: 'flex', gap: '6px', fontSize: '11px', fontFamily: 'monospace' }}>
                <button 
                  type="button" 
                  onClick={() => setHeroTab('flow')}
                  style={{ padding: '4px 10px', borderRadius: '5px', border: 'none', cursor: 'pointer', backgroundColor: heroTab === 'flow' ? '#1E293B' : 'transparent', color: heroTab === 'flow' ? '#38BDF8' : '#64748B', fontWeight: heroTab === 'flow' ? 700 : 400 }}
                >
                  {t.tabFlow}
                </button>
                <button 
                  type="button" 
                  onClick={() => setHeroTab('json')}
                  style={{ padding: '4px 10px', borderRadius: '5px', border: 'none', cursor: 'pointer', backgroundColor: heroTab === 'json' ? '#1E293B' : 'transparent', color: heroTab === 'json' ? '#38BDF8' : '#64748B', fontWeight: heroTab === 'json' ? 700 : 400 }}
                >
                  {t.tabJson}
                </button>
                <button 
                  type="button" 
                  onClick={() => setHeroTab('crm')}
                  style={{ padding: '4px 10px', borderRadius: '5px', border: 'none', cursor: 'pointer', backgroundColor: heroTab === 'crm' ? '#1E293B' : 'transparent', color: heroTab === 'crm' ? '#38BDF8' : '#64748B', fontWeight: heroTab === 'crm' ? 700 : 400 }}
                >
                  {t.tabCrm}
                </button>
              </div>
            </div>

            {/* Window Content */}
            <div style={{ padding: '22px' }}>
              {heroTab === 'flow' && (
                <div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', fontFamily: 'monospace', fontSize: '12px', marginBottom: '16px' }}>
                    <button 
                      type="button" 
                      onClick={() => setActiveHeroNode(1)}
                      style={{ padding: '14px', borderRadius: '12px', border: activeHeroNode === 1 ? '1px solid #38BDF8' : '1px solid rgba(255,255,255,0.08)', backgroundColor: activeHeroNode === 1 ? 'rgba(56, 189, 248, 0.12)' : '#070A11', textAlign: 'left', cursor: 'pointer' }}
                    >
                      <div style={{ fontSize: '10px', color: '#38BDF8', fontWeight: 800, marginBottom: '4px' }}>STEP 01</div>
                      <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '12px' }}>{t.node1Title}</div>
                      <div style={{ fontSize: '10px', color: '#94A3B8', marginTop: '4px' }}>{t.node1Sub}</div>
                    </button>

                    <button 
                      type="button" 
                      onClick={() => setActiveHeroNode(2)}
                      style={{ padding: '14px', borderRadius: '12px', border: activeHeroNode === 2 ? '1px solid #38BDF8' : '1px solid rgba(255,255,255,0.08)', backgroundColor: activeHeroNode === 2 ? 'rgba(56, 189, 248, 0.12)' : '#070A11', textAlign: 'left', cursor: 'pointer' }}
                    >
                      <div style={{ fontSize: '10px', color: '#38BDF8', fontWeight: 800, marginBottom: '4px' }}>STEP 02</div>
                      <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '12px' }}>{t.node2Title}</div>
                      <div style={{ fontSize: '10px', color: '#94A3B8', marginTop: '4px' }}>{t.node2Sub}</div>
                    </button>

                    <button 
                      type="button" 
                      onClick={() => setActiveHeroNode(3)}
                      style={{ padding: '14px', borderRadius: '12px', border: activeHeroNode === 3 ? '1px solid #38BDF8' : '1px solid rgba(255,255,255,0.08)', backgroundColor: activeHeroNode === 3 ? 'rgba(56, 189, 248, 0.12)' : '#070A11', textAlign: 'left', cursor: 'pointer' }}
                    >
                      <div style={{ fontSize: '10px', color: '#38BDF8', fontWeight: 800, marginBottom: '4px' }}>STEP 03</div>
                      <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '12px' }}>{t.node3Title}</div>
                      <div style={{ fontSize: '10px', color: '#94A3B8', marginTop: '4px' }}>{t.node3Sub}</div>
                    </button>
                  </div>

                  {/* Node State Feedback */}
                  <div style={{ padding: '14px 16px', borderRadius: '10px', backgroundColor: '#090E1A', border: '1px solid rgba(56, 189, 248, 0.25)', fontFamily: 'monospace', fontSize: '11px', color: '#E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }} />
                      <span>
                        {activeHeroNode === 1 && 'Node 1 Active: Web intake form capturing customer budget & criteria in Luxembourg.'}
                        {activeHeroNode === 2 && 'Node 2 Active: Edge AI extracted 4 parameters & calculated lead priority score (96/100).'}
                        {activeHeroNode === 3 && 'Node 3 Active: Record pushed to Notion database & automated calendar tour scheduled.'}
                      </span>
                    </div>
                    <span style={{ color: '#64748B' }}>18ms</span>
                  </div>
                </div>
              )}

              {heroTab === 'json' && (
                <div style={{ fontFamily: 'monospace', fontSize: '11px', lineHeight: '1.6', color: '#CBD5E1', backgroundColor: '#090E1A', padding: '16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <pre style={{ margin: 0 }}>{`{
  "client": "Jean-Luc Moreau",
  "location": "Luxembourg_Kirchberg",
  "intent": "property_rental",
  "budget_eur": 1850,
  "scoring": { "confidence": 0.98, "priority": "HIGH" },
  "action_chain": ["notion_crm_write", "whatsapp_api_dispatch"]
}`}</pre>
                </div>
              )}

              {heroTab === 'crm' && (
                <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#94A3B8', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ padding: '10px 14px', borderRadius: '8px', backgroundColor: '#090E1A', border: '1px solid rgba(255,255,255,0.08)', color: '#10B981', display: 'flex', justifyContent: 'space-between' }}>
                    <span>➔ Notion CRM: Record #4912 [Priority Qualified]</span>
                    <span>CREATED</span>
                  </div>
                  <div style={{ padding: '10px 14px', borderRadius: '8px', backgroundColor: '#090E1A', border: '1px solid rgba(255,255,255,0.08)', color: '#38BDF8', display: 'flex', justifyContent: 'space-between' }}>
                    <span>➔ Cal.com: Tuesday 15:30 Viewing Slot Locked</span>
                    <span>CONFIRMED</span>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* ─── ROOMIX-STYLE NATURAL LANGUAGE SIMULATOR WITH PRESETS ─── */}
      <section id="simulator" style={{ padding: '80px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', backgroundColor: '#070A12' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontFamily: 'monospace', color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
            <Sparkles width="14" height="14" />
            {t.nlBadge}
          </div>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>{t.nlTitle}</h2>
          <p style={{ fontSize: '14px', color: '#94A3B8', marginBottom: '24px' }}>{t.nlDesc}</p>

          {/* Quick Presets Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '20px', fontFamily: 'monospace', fontSize: '11px' }}>
            <button 
              type="button" 
              onClick={() => loadPreset('re')}
              style={{ padding: '7px 14px', borderRadius: '9999px', backgroundColor: '#0B1120', border: '1px solid rgba(56, 189, 248, 0.3)', color: '#E2E8F0', cursor: 'pointer' }}
            >
              {t.preset1}
            </button>
            <button 
              type="button" 
              onClick={() => loadPreset('clinic')}
              style={{ padding: '7px 14px', borderRadius: '9999px', backgroundColor: '#0B1120', border: '1px solid rgba(56, 189, 248, 0.3)', color: '#E2E8F0', cursor: 'pointer' }}
            >
              {t.preset2}
            </button>
            <button 
              type="button" 
              onClick={() => loadPreset('legal')}
              style={{ padding: '7px 14px', borderRadius: '9999px', backgroundColor: '#0B1120', border: '1px solid rgba(56, 189, 248, 0.3)', color: '#E2E8F0', cursor: 'pointer' }}
            >
              {t.preset3}
            </button>
          </div>

          {/* Simulator Bar Card */}
          <div style={{ padding: '24px', borderRadius: '20px', backgroundColor: '#0B101D', border: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'left', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <textarea
                rows={2}
                value={nlQuery}
                onChange={(e) => setNlQuery(e.target.value)}
                style={{ width: '100%', backgroundColor: '#06080E', border: '1px solid #334155', borderRadius: '10px', padding: '14px', color: '#FFFFFF', fontSize: '13px', fontFamily: 'monospace', outline: 'none', resize: 'none' }}
              />

              <button
                type="button"
                onClick={() => loadPreset('re')}
                style={{ alignSelf: 'flex-start', padding: '12px 24px', borderRadius: '8px', backgroundColor: '#38BDF8', color: '#06080E', border: 'none', fontWeight: 800, fontSize: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 0 16px rgba(56, 189, 248, 0.3)', fontFamily: 'monospace' }}
              >
                <Zap width="14" height="14" />
                {t.nlBtn}
              </button>

              {nlOutput && (
                <div style={{ marginTop: '10px', padding: '16px', borderRadius: '10px', backgroundColor: '#06080E', border: '1px solid rgba(56, 189, 248, 0.4)', fontFamily: 'monospace', fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#10B981', fontWeight: 800 }}>✔ Parameter Extraction Verified (Confidence: {nlOutput.score}%)</span>
                    <span style={{ fontSize: '10px', color: '#94A3B8' }}>Latency: 1.1s</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px', color: '#E2E8F0', padding: '8px 0' }}>
                    <div>• Intent: <span style={{ color: '#38BDF8' }}>{nlOutput.intent}</span></div>
                    <div>• Budget: <span style={{ color: '#38BDF8' }}>{nlOutput.budget}</span></div>
                    <div>• Target Zone: <span style={{ color: '#38BDF8' }}>{nlOutput.location}</span></div>
                  </div>
                  <div style={{ color: '#10B981', fontSize: '11px', paddingTop: '6px', borderTop: '1px solid #1E293B' }}>➔ {nlOutput.action}</div>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ─── HEYFARDO-STYLE 4-PHASE METHODOLOGY WITH PROGRESS METERS ─── */}
      <section id="framework" style={{ padding: '80px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          
          <div style={{ maxWidth: '640px', marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px', color: '#38BDF8', marginBottom: '8px' }}>{t.fardoBadge}</div>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px' }}>{t.fardoTitle}</h2>
            <p style={{ fontSize: '14px', color: '#94A3B8' }}>{t.fardoDesc}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            
            {/* Phase 1 */}
            <div style={{ padding: '28px', borderRadius: '18px', backgroundColor: '#0B101D', border: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#38BDF8', fontWeight: 800 }}>PHASE 01</span>
                  <span style={{ fontSize: '10px', fontFamily: 'monospace', padding: '2px 8px', borderRadius: '4px', backgroundColor: '#0F172A', color: '#38BDF8', border: '1px solid #1E293B' }}>ACTIVE</span>
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>{t.p1Title}</h3>
                <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: '1.6', marginBottom: '20px' }}>{t.p1Desc}</p>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontFamily: 'monospace', color: '#64748B', marginBottom: '6px' }}>
                  <span>Tasks Status</span>
                  <span>{t.p1Tasks}</span>
                </div>
                <div style={{ width: '100%', height: '4px', backgroundColor: '#1E293B', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '85%', height: '100%', backgroundColor: '#38BDF8' }} />
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div style={{ padding: '28px', borderRadius: '18px', backgroundColor: '#0B101D', border: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#38BDF8', fontWeight: 800 }}>PHASE 02</span>
                  <span style={{ fontSize: '10px', fontFamily: 'monospace', padding: '2px 8px', borderRadius: '4px', backgroundColor: '#0F172A', color: '#38BDF8', border: '1px solid #1E293B' }}>ACTIVE</span>
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>{t.p2Title}</h3>
                <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: '1.6', marginBottom: '20px' }}>{t.p2Desc}</p>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontFamily: 'monospace', color: '#64748B', marginBottom: '6px' }}>
                  <span>Tasks Status</span>
                  <span>{t.p2Tasks}</span>
                </div>
                <div style={{ width: '100%', height: '4px', backgroundColor: '#1E293B', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '90%', height: '100%', backgroundColor: '#38BDF8' }} />
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div style={{ padding: '28px', borderRadius: '18px', backgroundColor: '#0B101D', border: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#38BDF8', fontWeight: 800 }}>PHASE 03</span>
                  <span style={{ fontSize: '10px', fontFamily: 'monospace', padding: '2px 8px', borderRadius: '4px', backgroundColor: '#0F172A', color: '#38BDF8', border: '1px solid #1E293B' }}>ACTIVE</span>
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>{t.p3Title}</h3>
                <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: '1.6', marginBottom: '20px' }}>{t.p3Desc}</p>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontFamily: 'monospace', color: '#64748B', marginBottom: '6px' }}>
                  <span>Tasks Status</span>
                  <span>{t.p3Tasks}</span>
                </div>
                <div style={{ width: '100%', height: '4px', backgroundColor: '#1E293B', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '80%', height: '100%', backgroundColor: '#38BDF8' }} />
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div style={{ padding: '28px', borderRadius: '18px', backgroundColor: '#0B101D', border: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#10B981', fontWeight: 800 }}>PHASE 04</span>
                  <span style={{ fontSize: '10px', fontFamily: 'monospace', padding: '2px 8px', borderRadius: '4px', backgroundColor: 'rgba(16,185,129,0.1)', color: '#10B981', border: '1px solid rgba(16,185,129,0.3)' }}>VERIFIED</span>
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>{t.p4Title}</h3>
                <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: '1.6', marginBottom: '20px' }}>{t.p4Desc}</p>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontFamily: 'monospace', color: '#64748B', marginBottom: '6px' }}>
                  <span>Tasks Status</span>
                  <span>{t.p4Tasks}</span>
                </div>
                <div style={{ width: '100%', height: '4px', backgroundColor: '#1E293B', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '100%', backgroundColor: '#10B981' }} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE SANDBOXES (REAL ESTATE & CLINIC) ─── */}
      <section id="sandboxes" style={{ padding: '80px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', backgroundColor: '#070A12' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px', gap: '20px' }}>
            <div style={{ maxWidth: '576px' }}>
              <div style={{ fontSize: '12px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px', color: '#38BDF8', marginBottom: '8px' }}>{t.sandBadge}</div>
              <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>{t.sandTitle}</h2>
              <p style={{ fontSize: '14px', color: '#94A3B8' }}>{t.sandDesc}</p>
            </div>

            <div style={{ display: 'flex', padding: '4px', borderRadius: '12px', backgroundColor: '#0B1120', border: '1px solid rgba(255,255,255,0.08)', fontSize: '12px', fontFamily: 'monospace' }}>
              <button 
                type="button" 
                onClick={() => setSandboxTab('re')}
                style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer', backgroundColor: sandboxTab === 're' ? '#38BDF8' : 'transparent', color: sandboxTab === 're' ? '#06080E' : '#94A3B8', fontWeight: sandboxTab === 're' ? 800 : 500, display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <Building2 width="14" height="14" />
                {t.demo1Tab}
              </button>
              <button 
                type="button" 
                onClick={() => setSandboxTab('clinic')}
                style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer', backgroundColor: sandboxTab === 'clinic' ? '#38BDF8' : 'transparent', color: sandboxTab === 'clinic' ? '#06080E' : '#94A3B8', fontWeight: sandboxTab === 'clinic' ? 800 : 500, display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <Stethoscope width="14" height="14" />
                {t.demo2Tab}
              </button>
            </div>
          </div>

          <div style={{ padding: '36px', borderRadius: '24px', backgroundColor: '#0B101D', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 24px 48px rgba(0,0,0,0.5)' }}>
            
            {sandboxTab === 're' ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '36px' }}>
                
                {/* Form Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontFamily: 'monospace', fontSize: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.08)', fontWeight: 800, color: '#FFFFFF' }}>
                    <span style={{ color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '1px' }}>Inbound Property Intake</span>
                    <span style={{ fontSize: '10px', padding: '2px 8px', borderRadius: '4px', backgroundColor: '#070A11', color: '#94A3B8' }}>Live Sandbox</span>
                  </div>

                  <div>
                    <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>{t.reNameLabel}</label>
                    <input 
                      type="text" 
                      value={reForm.name} 
                      onChange={(e) => setReForm({...reForm, name: e.target.value})}
                      style={{ width: '100%', backgroundColor: '#06080E', border: '1px solid #334155', borderRadius: '8px', padding: '12px', color: '#FFFFFF', outline: 'none' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>{t.reIntentLabel}</label>
                      <select 
                        value={reForm.intent} 
                        onChange={(e) => setReForm({...reForm, intent: e.target.value})}
                        style={{ width: '100%', backgroundColor: '#06080E', border: '1px solid #334155', borderRadius: '8px', padding: '12px', color: '#FFFFFF', outline: 'none' }}
                      >
                        <option value="rent">{t.reRent}</option>
                        <option value="buy">{t.reBuy}</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>{t.reBudgetLabel}</label>
                      <input 
                        type="text" 
                        value={reForm.budget} 
                        onChange={(e) => setReForm({...reForm, budget: e.target.value})}
                        style={{ width: '100%', backgroundColor: '#06080E', border: '1px solid #334155', borderRadius: '8px', padding: '12px', color: '#FFFFFF', outline: 'none' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>{t.reRoomsLabel}</label>
                      <select 
                        value={reForm.rooms} 
                        onChange={(e) => setReForm({...reForm, rooms: e.target.value})}
                        style={{ width: '100%', backgroundColor: '#06080E', border: '1px solid #334155', borderRadius: '8px', padding: '12px', color: '#FFFFFF', outline: 'none' }}
                      >
                        <option value="1">1 Bed</option>
                        <option value="2">2 Beds</option>
                        <option value="3+">3+ Beds</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>{t.reZoneLabel}</label>
                      <input 
                        type="text" 
                        value={reForm.location} 
                        onChange={(e) => setReForm({...reForm, location: e.target.value})}
                        style={{ width: '100%', backgroundColor: '#06080E', border: '1px solid #334155', borderRadius: '8px', padding: '12px', color: '#FFFFFF', outline: 'none' }}
                      />
                    </div>
                  </div>

                  <button 
                    type="button" 
                    onClick={() => setReStep(2)}
                    style={{ width: '100%', padding: '16px', borderRadius: '12px', backgroundColor: '#38BDF8', color: '#06080E', border: 'none', fontWeight: 800, fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '8px', boxShadow: '0 0 20px rgba(56,189,248,0.3)' }}
                  >
                    <Zap width="16" height="16" />
                    {t.reRunBtn}
                  </button>
                </div>

                {/* Live Console Output */}
                <div style={{ padding: '24px', borderRadius: '16px', backgroundColor: '#06080E', border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.08)', fontWeight: 800 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFFFFF' }}>
                      <Terminal width="16" height="16" color="#38BDF8" />
                      Workflow Engine State
                    </div>
                    <span style={{ fontSize: '10px', padding: '3px 8px', borderRadius: '4px', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10B981', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                      Active
                    </span>
                  </div>

                  {reStep === 2 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div style={{ padding: '18px', borderRadius: '12px', backgroundColor: '#0B1120', border: '1px solid rgba(56, 189, 248, 0.3)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#38BDF8', fontWeight: 800 }}>
                          <span>{t.reResultTitle}</span>
                          <span style={{ fontSize: '10px', color: '#10B981' }}>{t.reResultScore}</span>
                        </div>
                        <p style={{ color: '#E2E8F0', lineHeight: 1.6, fontSize: '12px' }}>
                          {t.reResultText(reForm.name, reForm.rooms, reForm.intent, reForm.location, reForm.budget)}
                        </p>
                      </div>

                      <div style={{ padding: '12px 16px', borderRadius: '8px', backgroundColor: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255,255,255,0.08)', fontSize: '11px', color: '#94A3B8', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div>➔ Notion Database: Row created with tag [Urgent Followup]</div>
                        <div>➔ Calendar Link: Proposed viewing timeslot generated</div>
                        <div>➔ Agent Alert: Push notification sent to mobile</div>
                      </div>

                      <button 
                        type="button" 
                        onClick={() => setReStep(1)}
                        style={{ width: '100%', padding: '12px', borderRadius: '8px', backgroundColor: '#1E293B', color: '#E2E8F0', border: 'none', fontSize: '12px', cursor: 'pointer', fontWeight: 600 }}
                      >
                        {t.reResetBtn}
                      </button>
                    </div>
                  ) : (
                    <div style={{ padding: '56px 0', textAlign: 'center', color: '#64748B', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                      <Workflow width="36" height="36" stroke="#475569" />
                      <p>Click &quot;{t.reRunBtn}&quot; to test the live classification stream.</p>
                    </div>
                  )}
                </div>

              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '36px' }}>
                
                {/* Clinic Form Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontFamily: 'monospace', fontSize: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.08)', fontWeight: 800, color: '#FFFFFF' }}>
                    <span style={{ color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '1px' }}>Patient Intake Portal</span>
                    <span style={{ fontSize: '10px', padding: '2px 8px', borderRadius: '4px', backgroundColor: '#070A11', color: '#94A3B8' }}>GDPR Triage</span>
                  </div>

                  <div>
                    <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>{t.clSrvLabel}</label>
                    <select 
                      value={clinicForm.service} 
                      onChange={(e) => setClinicForm({...clinicForm, service: e.target.value})}
                      style={{ width: '100%', backgroundColor: '#06080E', border: '1px solid #334155', borderRadius: '8px', padding: '12px', color: '#FFFFFF', outline: 'none' }}
                    >
                      <option value="Nutritional & Metabolic Health">{t.clSrv1}</option>
                      <option value="Dental Aesthetics & Implantology">{t.clSrv2}</option>
                      <option value="Physiotherapy & Rehabilitation">{t.clSrv3}</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>{t.clSymLabel}</label>
                    <input 
                      type="text" 
                      value={clinicForm.symptom} 
                      onChange={(e) => setClinicForm({...clinicForm, symptom: e.target.value})}
                      style={{ width: '100%', backgroundColor: '#06080E', border: '1px solid #334155', borderRadius: '8px', padding: '12px', color: '#FFFFFF', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>{t.clTimeLabel}</label>
                    <select 
                      value={clinicForm.timeSlot} 
                      onChange={(e) => setClinicForm({...clinicForm, timeSlot: e.target.value})}
                      style={{ width: '100%', backgroundColor: '#06080E', border: '1px solid #334155', borderRadius: '8px', padding: '12px', color: '#FFFFFF', outline: 'none' }}
                    >
                      <option value="Thursday 10:00 (Morning)">{t.clTime1}</option>
                      <option value="Thursday 15:30 (Afternoon)">{t.clTime2}</option>
                    </select>
                  </div>

                  <button 
                    type="button" 
                    onClick={() => setClinicStep(2)}
                    style={{ width: '100%', padding: '16px', borderRadius: '12px', backgroundColor: '#38BDF8', color: '#06080E', border: 'none', fontWeight: 800, fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '8px', boxShadow: '0 0 20px rgba(56,189,248,0.3)' }}
                  >
                    <UserCheck width="16" height="16" />
                    {t.clRunBtn}
                  </button>
                </div>

                {/* Clinic Console Output */}
                <div style={{ padding: '24px', borderRadius: '16px', backgroundColor: '#06080E', border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.08)', fontWeight: 800 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFFFFF' }}>
                      <Terminal width="16" height="16" color="#38BDF8" />
                      Clinical Triage Stream
                    </div>
                    <span style={{ fontSize: '10px', padding: '3px 8px', borderRadius: '4px', backgroundColor: 'rgba(56, 189, 248, 0.1)', color: '#38BDF8', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                      Sync: Cal.com API
                    </span>
                  </div>

                  {clinicStep === 2 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div style={{ padding: '18px', borderRadius: '12px', backgroundColor: '#0B1120', border: '1px solid rgba(56, 189, 248, 0.3)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#38BDF8', fontWeight: 800 }}>
                          <span>{t.clResultTitle}</span>
                          <span style={{ fontSize: '10px', color: '#38BDF8' }}>{t.clResultTag}</span>
                        </div>
                        <p style={{ color: '#E2E8F0', lineHeight: 1.6, fontSize: '12px' }}>
                          {t.clResultText(clinicForm.service, clinicForm.symptom, clinicForm.timeSlot)}
                        </p>
                      </div>

                      <div style={{ padding: '12px 16px', borderRadius: '8px', backgroundColor: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255,255,255,0.08)', fontSize: '11px', color: '#94A3B8', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div>➔ Calendar Reservation: Slot locked for 45 mins</div>
                        <div>➔ Automated Reminder: 24h WhatsApp notification queued</div>
                        <div>➔ Staff Dashboard: Intake notes logged without duplicate data</div>
                      </div>

                      <button 
                        type="button" 
                        onClick={() => setClinicStep(1)}
                        style={{ width: '100%', padding: '12px', borderRadius: '8px', backgroundColor: '#1E293B', color: '#E2E8F0', border: 'none', fontSize: '12px', cursor: 'pointer', fontWeight: 600 }}
                      >
                        {t.clResetBtn}
                      </button>
                    </div>
                  ) : (
                    <div style={{ padding: '56px 0', textAlign: 'center', color: '#64748B', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                      <Workflow width="36" height="36" stroke="#475569" />
                      <p>Click &quot;{t.clRunBtn}&quot; to test the live clinical booking stream.</p>
                    </div>
                  )}
                </div>

              </div>
            )}

          </div>
        </div>
      </section>

      {/* ─── MEASURABLE OUTCOMES (BEFORE VS AFTER) ─── */}
      <section id="outcomes" style={{ padding: '80px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          
          <div style={{ maxWidth: '600px', marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px', color: '#38BDF8', marginBottom: '8px' }}>{t.caseBadge}</div>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px' }}>{t.caseTitle}</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            
            {/* Case 1 */}
            <div style={{ padding: '32px', borderRadius: '20px', backgroundColor: '#0B101D', border: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>{t.case1Title}</h3>
                  <span style={{ fontSize: '11px', fontFamily: 'monospace', padding: '4px 10px', borderRadius: '6px', backgroundColor: '#0F172A', color: '#38BDF8', border: '1px solid rgba(56,189,248,0.3)', fontWeight: 700 }}>
                    {t.case1Stat}
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '12px', fontFamily: 'monospace' }}>
                  <div style={{ padding: '14px', borderRadius: '10px', backgroundColor: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)', color: '#94A3B8' }}>
                    <span style={{ color: '#EF4444', fontWeight: 800, display: 'block', marginBottom: '4px' }}>❌ MANUAL STATE:</span>
                    {t.case1Before}
                  </div>
                  <div style={{ padding: '14px', borderRadius: '10px', backgroundColor: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.2)', color: '#E2E8F0' }}>
                    <span style={{ color: '#10B981', fontWeight: 800, display: 'block', marginBottom: '4px' }}>✅ AI ANDES SYSTEM:</span>
                    {t.case1After}
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div style={{ padding: '32px', borderRadius: '20px', backgroundColor: '#0B101D', border: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>{t.case2Title}</h3>
                  <span style={{ fontSize: '11px', fontFamily: 'monospace', padding: '4px 10px', borderRadius: '6px', backgroundColor: '#0F172A', color: '#38BDF8', border: '1px solid rgba(56,189,248,0.3)', fontWeight: 700 }}>
                    {t.case2Stat}
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '12px', fontFamily: 'monospace' }}>
                  <div style={{ padding: '14px', borderRadius: '10px', backgroundColor: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)', color: '#94A3B8' }}>
                    <span style={{ color: '#EF4444', fontWeight: 800, display: 'block', marginBottom: '4px' }}>❌ MANUAL STATE:</span>
                    {t.case2Before}
                  </div>
                  <div style={{ padding: '14px', borderRadius: '10px', backgroundColor: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.2)', color: '#E2E8F0' }}>
                    <span style={{ color: '#10B981', fontWeight: 800, display: 'block', marginBottom: '4px' }}>✅ AI ANDES SYSTEM:</span>
                    {t.case2After}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── ROI CALCULATOR ─── */}
      <section id="roi" style={{ padding: '80px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px', borderRadius: '24px', backgroundColor: '#0B101D', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 24px 48px rgba(0,0,0,0.5)' }}>
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 36px auto' }}>
            <div style={{ fontSize: '12px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px', color: '#38BDF8', marginBottom: '8px' }}>{t.calcBadge}</div>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>{t.calcTitle}</h2>
            <p style={{ fontSize: '13px', color: '#94A3B8' }}>{t.calcDesc}</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', maxWidth: '560px', margin: '0 auto' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', fontFamily: 'monospace', color: '#CBD5E1', marginBottom: '10px' }}>
                <span>{t.calcLabel}</span>
                <span style={{ color: '#38BDF8', fontWeight: 800, fontSize: '15px', padding: '4px 12px', backgroundColor: '#06080E', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)' }}>{weeklyVolume}</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="200" 
                step="5"
                value={weeklyVolume}
                onChange={(e) => setWeeklyVolume(Number(e.target.value))}
                style={{ width: '100%', height: '8px', backgroundColor: '#06080E', borderRadius: '8px', outline: 'none', cursor: 'pointer', accentColor: '#38BDF8' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontFamily: 'monospace', color: '#64748B', marginTop: '8px' }}>
                <span>10 / wk</span>
                <span>100 / wk</span>
                <span>200+ / wk</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', textAlign: 'center' }}>
              <div style={{ padding: '20px', borderRadius: '14px', backgroundColor: '#06080E', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '11px', color: '#94A3B8', marginBottom: '6px' }}>{t.calcHours}</div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#38BDF8' }}>~{hoursSaved} <span style={{ fontSize: '12px', color: '#64748B', fontWeight: 400 }}>hrs / mo</span></div>
              </div>
              <div style={{ padding: '20px', borderRadius: '14px', backgroundColor: '#06080E', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '11px', color: '#94A3B8', marginBottom: '6px' }}>{t.calcVal}</div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#10B981' }}>~€{eurosSaved.toLocaleString()} <span style={{ fontSize: '12px', color: '#64748B', fontWeight: 400 }}>/ mo</span></div>
              </div>
            </div>
            <div style={{ textAlign: 'center', fontSize: '11px', fontFamily: 'monospace', color: '#64748B' }}>{t.calcNote}</div>
          </div>
        </div>
      </section>

      {/* ─── AUDIT CONTACT FORM ─── */}
      <section id="audit" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', padding: '40px', borderRadius: '24px', backgroundColor: '#0B101D', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 24px 48px rgba(0,0,0,0.5)' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div style={{ fontSize: '12px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px', color: '#38BDF8', marginBottom: '8px' }}>{t.auditBadge}</div>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>{t.auditTitle}</h2>
            <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.6 }}>{t.auditDesc}</p>
          </div>

          {contactDone ? (
            <div style={{ padding: '32px', borderRadius: '16px', backgroundColor: '#06080E', border: '1px solid rgba(16, 185, 129, 0.4)', textAlign: 'center', fontFamily: 'monospace' }}>
              <CheckCircle2 width="36" height="36" color="#10B981" style={{ margin: '0 auto 12px auto' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#FFFFFF', marginBottom: '6px' }}>{t.auditSentTitle}</h3>
              <p style={{ fontSize: '12px', color: '#94A3B8', maxWidth: '420px', margin: '0 auto' }}>{t.auditSentDesc}</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setContactDone(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '12px', fontFamily: 'monospace' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>{t.auditName}</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="e.g. Jean-Luc Moreau"
                    value={contactState.name}
                    onChange={(e) => setContactState({...contactState, name: e.target.value})}
                    style={{ width: '100%', backgroundColor: '#06080E', border: '1px solid #334155', borderRadius: '8px', padding: '12px 14px', color: '#FFFFFF', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>{t.auditEmail}</label>
                  <input 
                    required 
                    type="email" 
                    placeholder="jeanluc@firm.lu"
                    value={contactState.email}
                    onChange={(e) => setContactState({...contactState, email: e.target.value})}
                    style={{ width: '100%', backgroundColor: '#06080E', border: '1px solid #334155', borderRadius: '8px', padding: '12px 14px', color: '#FFFFFF', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>{t.auditCompany}</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Moreau Real Estate SARL"
                    value={contactState.company}
                    onChange={(e) => setContactState({...contactState, company: e.target.value})}
                    style={{ width: '100%', backgroundColor: '#06080E', border: '1px solid #334155', borderRadius: '8px', padding: '12px 14px', color: '#FFFFFF', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>{t.auditWebsite}</label>
                  <input 
                    type="text" 
                    placeholder="https://moreau.lu"
                    value={contactState.website}
                    onChange={(e) => setContactState({...contactState, website: e.target.value})}
                    style={{ width: '100%', backgroundColor: '#06080E', border: '1px solid #334155', borderRadius: '8px', padding: '12px 14px', color: '#FFFFFF', outline: 'none' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>{t.auditTask}</label>
                <textarea 
                  rows={3}
                  placeholder="e.g. Inquiries arrive manually via email and WhatsApp. We spend too much time sorting budgets and manually booking appointments."
                  value={contactState.goal}
                  onChange={(e) => setContactState({...contactState, goal: e.target.value})}
                  style={{ width: '100%', backgroundColor: '#06080E', border: '1px solid #334155', borderRadius: '8px', padding: '12px 14px', color: '#FFFFFF', outline: 'none' }}
                />
              </div>

              <button 
                type="submit"
                style={{ width: '100%', padding: '16px', borderRadius: '12px', backgroundColor: '#38BDF8', color: '#06080E', border: 'none', fontWeight: 800, fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '10px', boxShadow: '0 0 24px rgba(56, 189, 248, 0.35)' }}
              >
                <Send width="16" height="16" />
                {t.auditSubmit}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ padding: '36px 24px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '12px', fontFamily: 'monospace', color: '#64748B', backgroundColor: '#05070E' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontWeight: 700, color: '#CBD5E1' }}>AI Andes Studio</span>
            <span>•</span>
            <span>{t.footerCopy}</span>
          </div>
          <div style={{ color: '#94A3B8' }}>Luxembourg · Switzerland · Belgium · Global B2B</div>
        </div>
      </footer>

    </div>
  );
}
