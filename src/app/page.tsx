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
  ChevronRight,
  Flame,
  LayoutDashboard
} from 'lucide-react';

export default function AIAndesStudioLanding() {
  const [lang, setLang] = useState<'en' | 'es'>('en');

  // Hero Mockup Tab State
  const [heroMockupTab, setHeroMockupTab] = useState<'flow' | 'crm' | 'logs'>('flow');
  const [heroActiveNode, setHeroActiveNode] = useState<number>(2);

  // Sandbox 1 State (Real Estate)
  const [reStep, setReStep] = useState(1);
  const [reForm, setReForm] = useState({
    name: 'Jean-Luc Moreau',
    intent: 'rent',
    budget: '1850',
    location: 'Luxembourg (Kirchberg)',
    rooms: '2'
  });

  // Sandbox 2 State (Clinic)
  const [clinicStep, setClinicStep] = useState(1);
  const [clinicForm, setClinicForm] = useState({
    service: 'Nutritional & Metabolic Health',
    symptom: 'Dietary transition & chronic fatigue',
    timeSlot: 'Thursday 15:30 (Afternoon)',
    patient: 'Sophie Laurent'
  });

  // Active Demo Sandbox Tab
  const [activeSandbox, setActiveSandbox] = useState<'re' | 'clinic'>('re');

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
      heroLead: 'Replace scattered WhatsApp chats, manual spreadsheets, and delayed email replies with bespoke websites, smart intake forms, and automated team dashboards.',
      btnAudit: 'Request Free Workflow Audit',
      btnDemos: 'Test Live Sandboxes',
      navServices: 'Architecture',
      navDemos: 'Live Sandboxes',
      navCases: 'Outcomes',
      navCalc: 'ROI Calculator',
      navScope: 'Scope',
      navCta: 'Get Free Audit',

      // Hero Window Mockup
      mockupTitle: 'AI Andes Studio · Operational Engine v2.4',
      tabPipeline: 'Visual Flow Pipeline',
      tabCRM: 'Live CRM Stream',
      tabLogs: 'Edge Latency Logs',
      pStep1: 'Client Submission',
      pStep1Sub: 'Web / WhatsApp Form',
      pStep2: 'Edge AI Extraction',
      pStep2Sub: 'Scoring & Qualification',
      pStep3: 'Operational Dispatch',
      pStep3Sub: 'Notion / CRM / Calendar',

      // Architecture Bento
      archBadge: 'Bento System Architecture',
      archTitle: 'How we connect your operations end-to-end',
      archDesc: 'Every component connects directly into your team’s execution tools. No dead ends.',
      bento1Title: 'High-Converting Web & Intake',
      bento1Desc: 'Bespoke Next.js front-end with dynamic forms that pre-qualify budgets and eliminate tire-kickers.',
      bento2Title: 'Edge AI Reasoning Engine',
      bento2Desc: 'Structured parameter extraction, urgency detection, and executive summaries in under 1.2s.',
      bento3Title: 'Automated Operations Dispatch',
      bento3Desc: 'Real-time two-way synchronization with Notion, Airtable, Google Calendar, and WhatsApp alerts.',
      bento4Title: 'Enterprise Security & Hygiene',
      bento4Desc: 'Strict data minimization, 2FA enforcement, and zero unneeded PII storage (GDPR-aligned).',

      // Sandboxes
      sandBadge: 'Interactive Sandbox Playground',
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

      // Cases
      casesBadge: 'Demonstrated Outcomes',
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
      calcBadge: 'Measurable Business Impact',
      calcTitle: 'Calculate your monthly recaptured value',
      calcDesc: 'Move the slider to reflect your weekly manual inquiry volume.',
      calcSliderLabel: 'Weekly manual inquiries or bookings:',
      calcHoursTitle: 'Monthly Admin Time Recaptured',
      calcHoursVal: 'hrs / month',
      calcValTitle: 'Monthly Operational Value Saved',
      calcValNote: 'Based on €45/hr average professional staff cost in EU',

      // Scope
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

      // Contact Form
      auditBadge: 'Start with Zero Risk',
      auditTitle: 'Request a free 3-point workflow audit',
      auditDesc: 'Tell us which manual task consumes the most time. We will inspect your flow and deliver 2–3 actionable improvement ideas within 24 hours.',
      auditSentTitle: 'Audit Request Received',
      auditSentDesc: 'We will inspect your business flow and deliver a 3-point actionable blueprint to your email shortly.',
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

      // Hero Window Mockup
      mockupTitle: 'AI Andes Studio · Motor Operativo v2.4',
      tabPipeline: 'Tubería de Flujo Visual',
      tabCRM: 'Flujo CRM en Vivo',
      tabLogs: 'Logs de Latencia Edge',
      pStep1: 'Ingreso del Cliente',
      pStep1Sub: 'Formulario Web / WhatsApp',
      pStep2: 'Extracción con IA en Edge',
      pStep2Sub: 'Scoring y Calificación',
      pStep3: 'Despacho a Operaciones',
      pStep3Sub: 'Notion / CRM / Agenda',

      // Architecture Bento
      archBadge: 'Arquitectura Bento',
      archTitle: 'Cómo conectamos tu operación de punta a punta',
      archDesc: 'Sin callejones sin salida. Cada interacción del cliente se procesa y se envía a tus herramientas de gestión interna.',
      bento1Title: 'Web & Captación de Alta Conversión',
      bento1Desc: 'Front-end en Next.js a medida con formularios dinámicos que pre-califican presupuestos y filtran curiosos.',
      bento2Title: 'Motor de Razonamiento con IA en Edge',
      bento2Desc: 'Extracción de parámetros clave, detección de urgencias y resumen ejecutivo en menos de 1.2 segundos.',
      bento3Title: 'Despacho Operativo Automatizado',
      bento3Desc: 'Sincronización en tiempo real con Notion, Airtable, Google Calendar y alertas inmediatas por WhatsApp.',
      bento4Title: 'Seguridad e Higiene Empresarial',
      bento4Desc: 'Minimización estricta de datos, autenticación 2FA y almacenamiento limpio acorde a normativas GDPR.',

      // Sandboxes
      sandBadge: 'Playground Interactivo',
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

      // Cases
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

      // Calculator
      calcBadge: 'Retorno Medible (ROI)',
      calcTitle: 'Calcula tu ahorro mensual de tiempo y dinero',
      calcDesc: 'Mueve el control según la cantidad de consultas semanales que recibes.',
      calcSliderLabel: 'Consultas o reservas semanales:',
      calcHoursTitle: 'Tiempo Administrativo Recuperado',
      calcValTitle: 'Valor Operativo Recuperado',
      calcValNote: 'Calculado sobre un costo administrativo promedio de €45/hr en Europa',

      // Scope
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

      // Contact Form
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
    <div style={{ backgroundColor: '#06080E', minHeight: '100vh', color: '#F1F5F9', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      
      {/* ─── TOP NOTIFICATION BANNER ─── */}
      <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.08)', borderBottom: '1px solid rgba(56, 189, 248, 0.2)', padding: '8px 16px', textAlign: 'center', fontSize: '11px', fontFamily: 'monospace', color: '#38BDF8', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#38BDF8', display: 'inline-block' }} />
        <span>{lang === 'en' ? 'Bespoke AI systems for EU businesses · Q3/Q4 2026 intake open' : 'Sistemas con IA para empresas en Europa · Cupos abiertos Q3/Q4 2026'}</span>
      </div>

      {/* ─── NAVBAR ─── */}
      <header style={{ backgroundColor: 'rgba(6, 8, 14, 0.95)', borderBottom: '1px solid #1E293B', position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(16px)' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo with Explicit 38px Box */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: '#0F172A', border: '1px solid #38BDF8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 0 16px rgba(56, 189, 248, 0.25)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 20h18L14 4l-4 7-3-4-4 13z" fill="rgba(56, 189, 248, 0.15)" />
                <path d="M14 4l7 16H3l4-13 3 4 4-7z" />
                <circle cx="14" cy="4" r="1.5" fill="#38BDF8" stroke="none" />
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 800, fontSize: '16px', color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '6px' }}>
                AI Andes <span style={{ color: '#38BDF8', fontSize: '10px', padding: '2px 6px', borderRadius: '4px', backgroundColor: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.3)', fontFamily: 'monospace', fontWeight: 700 }}>STUDIO</span>
              </span>
              <span style={{ fontSize: '10px', color: '#94A3B8', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px' }}>Systems & Automations</span>
            </div>
          </div>

          {/* Nav Links */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '28px', fontSize: '12px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px' }} className="md:flex">
            <a href="#architecture" style={{ color: '#94A3B8', textDecoration: 'none' }}>{t.navServices}</a>
            <a href="#sandboxes" style={{ color: '#94A3B8', textDecoration: 'none' }}>{t.navDemos}</a>
            <a href="#outcomes" style={{ color: '#94A3B8', textDecoration: 'none' }}>{t.navCases}</a>
            <a href="#roi" style={{ color: '#94A3B8', textDecoration: 'none' }}>{t.navCalc}</a>
            <a href="#scope" style={{ color: '#94A3B8', textDecoration: 'none' }}>{t.navScope}</a>
          </nav>

          {/* Language Switch & CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', padding: '3px', borderRadius: '8px', backgroundColor: '#0F172A', border: '1px solid #1E293B', fontSize: '12px', fontFamily: 'monospace' }}>
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
              style={{ padding: '9px 18px', borderRadius: '8px', backgroundColor: '#38BDF8', color: '#06080E', fontWeight: 800, fontSize: '12px', textDecoration: 'none', textTransform: 'uppercase', fontFamily: 'monospace', display: 'none', boxShadow: '0 0 16px rgba(56, 189, 248, 0.25)' }}
              className="sm:inline-block"
            >
              {t.navCta}
            </a>
          </div>

        </div>
      </header>

      {/* ─── HERO SECTION WITH PRODUCT MOCKUP WINDOW ─── */}
      <section style={{ padding: '80px 24px 64px 24px', borderBottom: '1px solid #1E293B', textAlign: 'center' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '9999px', border: '1px solid rgba(56, 189, 248, 0.3)', backgroundColor: 'rgba(56, 189, 248, 0.06)', fontSize: '12px', fontFamily: 'monospace', color: '#38BDF8', marginBottom: '24px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#38BDF8', display: 'inline-block' }} />
            {t.badge}
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 5.5vw, 60px)', fontWeight: 800, lineHeight: 1.12, color: '#FFFFFF', marginBottom: '24px', letterSpacing: '-1.5px' }}>
            {t.h1_1}<span style={{ color: '#38BDF8', borderBottom: '2px solid rgba(56,189,248,0.4)', paddingBottom: '2px' }}>{t.h1_accent}</span>{t.h1_2}
          </h1>

          <p style={{ fontSize: '18px', color: '#94A3B8', maxWidth: '680px', margin: '0 auto 40px auto', lineHeight: 1.6 }}>
            {t.heroLead}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '64px' }}>
            <a 
              href="#audit"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', borderRadius: '12px', backgroundColor: '#38BDF8', color: '#06080E', fontWeight: 800, fontSize: '14px', textDecoration: 'none', boxShadow: '0 0 28px rgba(56, 189, 248, 0.35)' }}
            >
              {t.btnAudit}
              <ArrowRight width="16" height="16" />
            </a>
            <a 
              href="#sandboxes"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', borderRadius: '12px', backgroundColor: '#0F172A', border: '1px solid #334155', color: '#E2E8F0', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}
            >
              {t.btnDemos}
            </a>
          </div>

          {/* ── FIGMA-STYLE APP CANVAS MOCKUP (MACOS WINDOW) ── */}
          <div style={{ borderRadius: '20px', backgroundColor: '#0B0F19', border: '1px solid #1E293B', textAlign: 'left', maxWidth: '896px', margin: '0 auto', boxShadow: '0 24px 48px rgba(0,0,0,0.6)', overflow: 'hidden' }}>
            
            {/* Window Titlebar */}
            <div style={{ backgroundColor: '#070A12', padding: '12px 18px', borderBottom: '1px solid #1E293B', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444', display: 'inline-block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F59E0B', display: 'inline-block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }} />
                <span style={{ marginLeft: '12px', fontSize: '11px', fontFamily: 'monospace', color: '#64748B' }}>{t.mockupTitle}</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', fontSize: '11px', fontFamily: 'monospace' }}>
                <button 
                  type="button" 
                  onClick={() => setHeroMockupTab('flow')}
                  style={{ padding: '3px 10px', borderRadius: '5px', border: 'none', cursor: 'pointer', backgroundColor: heroMockupTab === 'flow' ? '#1E293B' : 'transparent', color: heroMockupTab === 'flow' ? '#38BDF8' : '#64748B' }}
                >
                  {t.tabPipeline}
                </button>
                <button 
                  type="button" 
                  onClick={() => setHeroMockupTab('crm')}
                  style={{ padding: '3px 10px', borderRadius: '5px', border: 'none', cursor: 'pointer', backgroundColor: heroMockupTab === 'crm' ? '#1E293B' : 'transparent', color: heroMockupTab === 'crm' ? '#38BDF8' : '#64748B' }}
                >
                  {t.tabCRM}
                </button>
                <button 
                  type="button" 
                  onClick={() => setHeroMockupTab('logs')}
                  style={{ padding: '3px 10px', borderRadius: '5px', border: 'none', cursor: 'pointer', backgroundColor: heroMockupTab === 'logs' ? '#1E293B' : 'transparent', color: heroMockupTab === 'logs' ? '#38BDF8' : '#64748B' }}
                >
                  {t.tabLogs}
                </button>
              </div>
            </div>

            {/* Window Body Canvas */}
            <div style={{ padding: '24px' }}>
              {heroMockupTab === 'flow' && (
                <div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', fontFamily: 'monospace', fontSize: '12px' }}>
                    <button 
                      type="button" 
                      onClick={() => setHeroActiveNode(1)}
                      style={{ padding: '16px', borderRadius: '12px', border: heroActiveNode === 1 ? '1px solid #38BDF8' : '1px solid #1E293B', backgroundColor: heroActiveNode === 1 ? 'rgba(56, 189, 248, 0.12)' : '#070A11', textAlign: 'left', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '6px' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '10px', color: '#38BDF8', fontWeight: 800 }}>NODE 01</span>
                        <UserCheck width="14" height="14" color="#38BDF8" />
                      </div>
                      <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '13px' }}>{t.pStep1}</div>
                      <div style={{ fontSize: '11px', color: '#94A3B8' }}>{t.pStep1Sub}</div>
                    </button>

                    <button 
                      type="button" 
                      onClick={() => setHeroActiveNode(2)}
                      style={{ padding: '16px', borderRadius: '12px', border: heroActiveNode === 2 ? '1px solid #38BDF8' : '1px solid #1E293B', backgroundColor: heroActiveNode === 2 ? 'rgba(56, 189, 248, 0.12)' : '#070A11', textAlign: 'left', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '6px' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '10px', color: '#38BDF8', fontWeight: 800 }}>NODE 02</span>
                        <Zap width="14" height="14" color="#38BDF8" />
                      </div>
                      <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '13px' }}>{t.pStep2}</div>
                      <div style={{ fontSize: '11px', color: '#94A3B8' }}>{t.pStep2Sub}</div>
                    </button>

                    <button 
                      type="button" 
                      onClick={() => setHeroActiveNode(3)}
                      style={{ padding: '16px', borderRadius: '12px', border: heroActiveNode === 3 ? '1px solid #38BDF8' : '1px solid #1E293B', backgroundColor: heroActiveNode === 3 ? 'rgba(56, 189, 248, 0.12)' : '#070A11', textAlign: 'left', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '6px' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '10px', color: '#38BDF8', fontWeight: 800 }}>NODE 03</span>
                        <Database width="14" height="14" color="#38BDF8" />
                      </div>
                      <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '13px' }}>{t.pStep3}</div>
                      <div style={{ fontSize: '11px', color: '#94A3B8' }}>{t.pStep3Sub}</div>
                    </button>
                  </div>

                  {/* Node Live Feedback Box */}
                  <div style={{ marginTop: '16px', padding: '14px 18px', borderRadius: '10px', backgroundColor: '#070A11', border: '1px solid #1E293B', fontFamily: 'monospace', fontSize: '12px', color: '#CBD5E1', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block', flexShrink: 0 }} />
                      <span>
                        {heroActiveNode === 1 && 'Node 1 Active: Web intake form capturing customer budget & criteria in Luxembourg.'}
                        {heroActiveNode === 2 && 'Node 2 Active: Edge AI extracted 4 parameters & calculated lead priority score (96/100).'}
                        {heroActiveNode === 3 && 'Node 3 Active: Record pushed to Notion database & automated calendar tour scheduled.'}
                      </span>
                    </div>
                    <span style={{ color: '#64748B', fontSize: '11px' }}>Execution: 1.2s</span>
                  </div>
                </div>
              )}

              {heroMockupTab === 'crm' && (
                <div style={{ fontFamily: 'monospace', fontSize: '12px', color: '#E2E8F0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ padding: '10px 14px', borderRadius: '8px', backgroundColor: '#070A11', border: '1px solid #1E293B', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>[2026-08-22 15:45] Jean-Luc Moreau · €1,850/mo Kirchberg · Status: Auto-Scheduled</span>
                    <span style={{ color: '#10B981', fontSize: '10px' }}>MATCHED</span>
                  </div>
                  <div style={{ padding: '10px 14px', borderRadius: '8px', backgroundColor: '#070A11', border: '1px solid #1E293B', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>[2026-08-22 15:20] Dr. Sophie Laurent · Clinical Consultation · Status: Sync Confirmed</span>
                    <span style={{ color: '#38BDF8', fontSize: '10px' }}>CAL.COM</span>
                  </div>
                </div>
              )}

              {heroMockupTab === 'logs' && (
                <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#94A3B8', backgroundColor: '#070A11', padding: '14px', borderRadius: '8px', border: '1px solid #1E293B', lineHeight: '1.8' }}>
                  <div>[Vercel Edge Gateway] 200 OK · Paris (cdg1) ➔ Frankfurt (fra1) · 18ms</div>
                  <div>[AI Parsing Pipeline] Extracted payload tokens: 142 · Latency: 1,180ms</div>
                  <div>[Notion Webhook Dispatch] Database ID: d439907c-8382 · HTTP 201 Created</div>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* ─── BENTO GRID SYSTEM ARCHITECTURE ─── */}
      <section id="architecture" style={{ padding: '80px 24px', borderBottom: '1px solid #1E293B' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          
          <div style={{ maxWidth: '600px', marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px', color: '#38BDF8', marginBottom: '8px' }}>{t.archBadge}</div>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px' }}>{t.archTitle}</h2>
            <p style={{ fontSize: '14px', color: '#94A3B8' }}>{t.archDesc}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            
            {/* Bento 1 */}
            <div style={{ padding: '32px', borderRadius: '18px', backgroundColor: '#0B0F19', border: '1px solid #1E293B', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.3)', color: '#38BDF8', fontFamily: 'monospace', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  01
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>{t.bento1Title}</h3>
                <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: '1.6', marginBottom: '24px' }}>{t.bento1Desc}</p>
              </div>
              <div style={{ fontSize: '12px', fontFamily: 'monospace', color: '#38BDF8', display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '16px', borderTop: '1px solid #1E293B' }}>
                <Check width="14" height="14" /> Next.js & Mobile-First
              </div>
            </div>

            {/* Bento 2 */}
            <div style={{ padding: '32px', borderRadius: '18px', backgroundColor: '#0B0F19', border: '1px solid #1E293B', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.3)', color: '#38BDF8', fontFamily: 'monospace', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  02
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>{t.bento2Title}</h3>
                <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: '1.6', marginBottom: '24px' }}>{t.bento2Desc}</p>
              </div>
              <div style={{ fontSize: '12px', fontFamily: 'monospace', color: '#38BDF8', display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '16px', borderTop: '1px solid #1E293B' }}>
                <Check width="14" height="14" /> ~1.2s Latency Parsing
              </div>
            </div>

            {/* Bento 3 */}
            <div style={{ padding: '32px', borderRadius: '18px', backgroundColor: '#0B0F19', border: '1px solid #1E293B', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.3)', color: '#38BDF8', fontFamily: 'monospace', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  03
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>{t.bento3Title}</h3>
                <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: '1.6', marginBottom: '24px' }}>{t.bento3Desc}</p>
              </div>
              <div style={{ fontSize: '12px', fontFamily: 'monospace', color: '#38BDF8', display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '16px', borderTop: '1px solid #1E293B' }}>
                <Check width="14" height="14" /> Notion, Airtable, Webhooks
              </div>
            </div>

            {/* Bento 4 */}
            <div style={{ padding: '32px', borderRadius: '18px', backgroundColor: '#0B0F19', border: '1px solid #1E293B', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.3)', color: '#38BDF8', fontFamily: 'monospace', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  04
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>{t.bento4Title}</h3>
                <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: '1.6', marginBottom: '24px' }}>{t.bento4Desc}</p>
              </div>
              <div style={{ fontSize: '12px', fontFamily: 'monospace', color: '#38BDF8', display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '16px', borderTop: '1px solid #1E293B' }}>
                <Check width="14" height="14" /> GDPR-Aware & 2FA Setup
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE SANDBOX PLAYGROUND ─── */}
      <section id="sandboxes" style={{ padding: '80px 24px', borderBottom: '1px solid #1E293B', backgroundColor: '#080C14' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px', gap: '20px' }}>
            <div style={{ maxWidth: '576px' }}>
              <div style={{ fontSize: '12px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px', color: '#38BDF8', marginBottom: '8px' }}>{t.sandBadge}</div>
              <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>{t.sandTitle}</h2>
              <p style={{ fontSize: '14px', color: '#94A3B8' }}>{t.sandDesc}</p>
            </div>

            {/* Sandbox Tabs */}
            <div style={{ display: 'flex', padding: '4px', borderRadius: '12px', backgroundColor: '#0F172A', border: '1px solid #1E293B', fontSize: '12px', fontFamily: 'monospace' }}>
              <button 
                type="button" 
                onClick={() => setActiveSandbox('re')}
                style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer', backgroundColor: activeSandbox === 're' ? '#38BDF8' : 'transparent', color: activeSandbox === 're' ? '#06080E' : '#94A3B8', fontWeight: activeSandbox === 're' ? 800 : 500, display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <Building2 width="14" height="14" />
                {t.demo1Tab}
              </button>
              <button 
                type="button" 
                onClick={() => setActiveSandbox('clinic')}
                style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer', backgroundColor: activeSandbox === 'clinic' ? '#38BDF8' : 'transparent', color: activeSandbox === 'clinic' ? '#06080E' : '#94A3B8', fontWeight: activeSandbox === 'clinic' ? 800 : 500, display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <Stethoscope width="14" height="14" />
                {t.demo2Tab}
              </button>
            </div>
          </div>

          <div style={{ padding: '36px', borderRadius: '24px', backgroundColor: '#0B0F19', border: '1px solid #1E293B', boxShadow: '0 24px 48px rgba(0,0,0,0.5)' }}>
            
            {activeSandbox === 're' ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '36px' }}>
                
                {/* Form Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontFamily: 'monospace', fontSize: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid #1E293B', fontWeight: 800, color: '#FFFFFF' }}>
                    <span style={{ color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '1px' }}>Inbound Property Intake</span>
                    <span style={{ fontSize: '10px', padding: '2px 8px', borderRadius: '4px', backgroundColor: '#0F172A', color: '#94A3B8' }}>Live Sandbox</span>
                  </div>

                  <div>
                    <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>{t.reNameLabel}</label>
                    <input 
                      type="text" 
                      value={reForm.name} 
                      onChange={(e) => setReForm({...reForm, name: e.target.value})}
                      style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: '8px', padding: '12px', color: '#FFFFFF', outline: 'none' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>{t.reIntentLabel}</label>
                      <select 
                        value={reForm.intent} 
                        onChange={(e) => setReForm({...reForm, intent: e.target.value})}
                        style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: '8px', padding: '12px', color: '#FFFFFF', outline: 'none' }}
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
                        style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: '8px', padding: '12px', color: '#FFFFFF', outline: 'none' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>{t.reRoomsLabel}</label>
                      <select 
                        value={reForm.rooms} 
                        onChange={(e) => setReForm({...reForm, rooms: e.target.value})}
                        style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: '8px', padding: '12px', color: '#FFFFFF', outline: 'none' }}
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
                        style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: '8px', padding: '12px', color: '#FFFFFF', outline: 'none' }}
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
                <div style={{ padding: '24px', borderRadius: '16px', backgroundColor: '#070A11', border: '1px solid #1E293B', fontFamily: 'monospace', fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid #1E293B', fontWeight: 800 }}>
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
                      <div style={{ padding: '18px', borderRadius: '12px', backgroundColor: '#0F172A', border: '1px solid rgba(56, 189, 248, 0.3)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#38BDF8', fontWeight: 800 }}>
                          <span>{t.reResultTitle}</span>
                          <span style={{ fontSize: '10px', color: '#10B981' }}>{t.reResultScore}</span>
                        </div>
                        <p style={{ color: '#E2E8F0', lineHeight: 1.6, fontSize: '12px' }}>
                          {t.reResultText(reForm.name, reForm.rooms, reForm.intent, reForm.location, reForm.budget)}
                        </p>
                      </div>

                      <div style={{ padding: '12px 16px', borderRadius: '8px', backgroundColor: 'rgba(15, 23, 42, 0.6)', border: '1px solid #1E293B', fontSize: '11px', color: '#94A3B8', display: 'flex', flexDirection: 'column', gap: '6px' }}>
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
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid #1E293B', fontWeight: 800, color: '#FFFFFF' }}>
                    <span style={{ color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '1px' }}>Patient Intake Portal</span>
                    <span style={{ fontSize: '10px', padding: '2px 8px', borderRadius: '4px', backgroundColor: '#0F172A', color: '#94A3B8' }}>GDPR Triage</span>
                  </div>

                  <div>
                    <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>{t.clSrvLabel}</label>
                    <select 
                      value={clinicForm.service} 
                      onChange={(e) => setClinicForm({...clinicForm, service: e.target.value})}
                      style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: '8px', padding: '12px', color: '#FFFFFF', outline: 'none' }}
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
                      style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: '8px', padding: '12px', color: '#FFFFFF', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>{t.clTimeLabel}</label>
                    <select 
                      value={clinicForm.timeSlot} 
                      onChange={(e) => setClinicForm({...clinicForm, timeSlot: e.target.value})}
                      style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: '8px', padding: '12px', color: '#FFFFFF', outline: 'none' }}
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
                <div style={{ padding: '24px', borderRadius: '16px', backgroundColor: '#070A11', border: '1px solid #1E293B', fontFamily: 'monospace', fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid #1E293B', fontWeight: 800 }}>
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
                      <div style={{ padding: '18px', borderRadius: '12px', backgroundColor: '#0F172A', border: '1px solid rgba(56, 189, 248, 0.3)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#38BDF8', fontWeight: 800 }}>
                          <span>{t.clResultTitle}</span>
                          <span style={{ fontSize: '10px', color: '#38BDF8' }}>{t.clResultTag}</span>
                        </div>
                        <p style={{ color: '#E2E8F0', lineHeight: 1.6, fontSize: '12px' }}>
                          {t.clResultText(clinicForm.service, clinicForm.symptom, clinicForm.timeSlot)}
                        </p>
                      </div>

                      <div style={{ padding: '12px 16px', borderRadius: '8px', backgroundColor: 'rgba(15, 23, 42, 0.6)', border: '1px solid #1E293B', fontSize: '11px', color: '#94A3B8', display: 'flex', flexDirection: 'column', gap: '6px' }}>
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
      <section id="outcomes" style={{ padding: '80px 24px', borderBottom: '1px solid #1E293B' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          
          <div style={{ maxWidth: '600px', marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px', color: '#38BDF8', marginBottom: '8px' }}>{t.casesBadge}</div>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px' }}>{t.casesTitle}</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            
            {/* Case 1 */}
            <div style={{ padding: '32px', borderRadius: '20px', backgroundColor: '#0B0F19', border: '1px solid #1E293B', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
            <div style={{ padding: '32px', borderRadius: '20px', backgroundColor: '#0B0F19', border: '1px solid #1E293B', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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

      {/* ─── ROI / COST SAVINGS CALCULATOR ─── */}
      <section id="roi" style={{ padding: '80px 24px', borderBottom: '1px solid #1E293B' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px', borderRadius: '24px', backgroundColor: '#0B0F19', border: '1px solid #1E293B', boxShadow: '0 24px 48px rgba(0,0,0,0.5)' }}>
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 36px auto' }}>
            <div style={{ fontSize: '12px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px', color: '#38BDF8', marginBottom: '8px' }}>{t.calcBadge}</div>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>{t.calcTitle}</h2>
            <p style={{ fontSize: '13px', color: '#94A3B8' }}>{t.calcDesc}</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', maxWidth: '560px', margin: '0 auto' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', fontFamily: 'monospace', color: '#CBD5E1', marginBottom: '10px' }}>
                <span>{t.calcSliderLabel}</span>
                <span style={{ color: '#38BDF8', fontWeight: 800, fontSize: '15px', padding: '4px 12px', backgroundColor: '#070A11', borderRadius: '6px', border: '1px solid #1E293B' }}>{inquiriesPerWeek}</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="200" 
                step="5"
                value={inquiriesPerWeek}
                onChange={(e) => setInquiriesPerWeek(Number(e.target.value))}
                style={{ width: '100%', height: '8px', backgroundColor: '#070A11', borderRadius: '8px', outline: 'none', cursor: 'pointer', accentColor: '#38BDF8' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontFamily: 'monospace', color: '#64748B', marginTop: '8px' }}>
                <span>10 / wk</span>
                <span>100 / wk</span>
                <span>200+ / wk</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', paddingTop: '20px', borderTop: '1px solid #1E293B', fontFamily: 'monospace', textAlign: 'center' }}>
              <div style={{ padding: '20px', borderRadius: '14px', backgroundColor: '#070A11', border: '1px solid #1E293B' }}>
                <div style={{ fontSize: '11px', color: '#94A3B8', marginBottom: '6px' }}>{t.calcHoursTitle}</div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#38BDF8' }}>~{hoursSavedMonth} <span style={{ fontSize: '12px', color: '#64748B', fontWeight: 400 }}>{t.calcHoursVal}</span></div>
              </div>
              <div style={{ padding: '20px', borderRadius: '14px', backgroundColor: '#070A11', border: '1px solid #1E293B' }}>
                <div style={{ fontSize: '11px', color: '#94A3B8', marginBottom: '6px' }}>{t.calcValTitle}</div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#10B981' }}>~€{estimatedCostSaved.toLocaleString()} <span style={{ fontSize: '12px', color: '#64748B', fontWeight: 400 }}>/ mo</span></div>
              </div>
            </div>
            <div style={{ textAlign: 'center', fontSize: '11px', fontFamily: 'monospace', color: '#64748B' }}>{t.calcValNote}</div>
          </div>
        </div>
      </section>

      {/* ─── SCOPE & TRANSPARENCY ─── */}
      <section id="scope" style={{ padding: '80px 24px', borderBottom: '1px solid #1E293B' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px', color: '#38BDF8', marginBottom: '8px' }}>{t.scopeBadge}</div>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px' }}>{t.scopeTitle}</h2>
            <p style={{ fontSize: '14px', color: '#94A3B8' }}>{t.scopeDesc}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            
            <div style={{ padding: '32px', borderRadius: '20px', backgroundColor: '#0B0F19', border: '1px solid #1E293B' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#10B981', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'monospace', textTransform: 'uppercase' }}>
                <CheckCircle2 width="16" height="16" /> {t.scopeInTitle}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '12px', fontFamily: 'monospace', color: '#CBD5E1', lineHeight: '1.6' }}>
                <li>{t.scopeIn1}</li>
                <li>{t.scopeIn2}</li>
                <li>{t.scopeIn3}</li>
                <li>{t.scopeIn4}</li>
              </ul>
            </div>

            <div style={{ padding: '32px', borderRadius: '20px', backgroundColor: '#0B0F19', border: '1px solid #1E293B' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#94A3B8', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'monospace', textTransform: 'uppercase' }}>
                <ShieldCheck width="16" height="16" color="#64748B" /> {t.scopeOutTitle}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '12px', fontFamily: 'monospace', color: '#94A3B8', lineHeight: '1.6' }}>
                <li>{t.scopeOut1}</li>
                <li>{t.scopeOut2}</li>
                <li>{t.scopeOut3}</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ─── AUDIT INTAKE FORM ─── */}
      <section id="audit" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', padding: '40px', borderRadius: '24px', backgroundColor: '#0B0F19', border: '1px solid #1E293B', boxShadow: '0 24px 48px rgba(0,0,0,0.5)' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div style={{ fontSize: '12px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px', color: '#38BDF8', marginBottom: '8px' }}>{t.auditBadge}</div>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>{t.auditTitle}</h2>
            <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: '1.6' }}>{t.auditDesc}</p>
          </div>

          {contactSent ? (
            <div style={{ padding: '32px', borderRadius: '16px', backgroundColor: '#070A11', border: '1px solid rgba(16, 185, 129, 0.4)', textAlign: 'center', fontFamily: 'monospace' }}>
              <CheckCircle2 width="36" height="36" color="#10B981" style={{ margin: '0 auto 12px auto' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#FFFFFF', marginBottom: '6px' }}>{t.auditSentTitle}</h3>
              <p style={{ fontSize: '12px', color: '#94A3B8', maxWidth: '420px', margin: '0 auto' }}>{t.auditSentDesc}</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setContactSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '12px', fontFamily: 'monospace' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>{t.auditName}</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="e.g. Jean-Luc Moreau"
                    value={contactState.name}
                    onChange={(e) => setContactState({...contactState, name: e.target.value})}
                    style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: '8px', padding: '12px 14px', color: '#FFFFFF', outline: 'none' }}
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
                    style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: '8px', padding: '12px 14px', color: '#FFFFFF', outline: 'none' }}
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
                    style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: '8px', padding: '12px 14px', color: '#FFFFFF', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>{t.auditWebsite}</label>
                  <input 
                    type="text" 
                    placeholder="https://moreau.lu"
                    value={contactState.website}
                    onChange={(e) => setContactState({...contactState, website: e.target.value})}
                    style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: '8px', padding: '12px 14px', color: '#FFFFFF', outline: 'none' }}
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
                  style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: '8px', padding: '12px 14px', color: '#FFFFFF', outline: 'none' }}
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
      <footer style={{ padding: '36px 24px', borderTop: '1px solid #1E293B', fontSize: '12px', fontFamily: 'monospace', color: '#64748B', backgroundColor: '#05070B' }}>
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
