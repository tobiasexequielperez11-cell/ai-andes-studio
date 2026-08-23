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
  Search,
  Sliders,
  CheckCircle
} from 'lucide-react';

export default function AIAndesStudioLanding() {
  const [lang, setLang] = useState<'en' | 'es'>('en');

  // Hero Terminal Tab State (Grego style)
  const [terminalTab, setTerminalTab] = useState<'stream' | 'payload' | 'routes'>('stream');

  // Roomix-style Natural Language Simulator State
  const [nlInput, setNlInput] = useState('2-bedroom apartment in Luxembourg City with balcony and parking, max €1,900/mo');
  const [nlResult, setNlResult] = useState<null | { score: number; summary: string; action: string }>(null);

  // Sandbox 1: Real Estate
  const [reStep, setReStep] = useState(1);
  const [reForm, setReForm] = useState({
    name: 'Jean-Luc Moreau',
    intent: 'rent',
    budget: '1850',
    location: 'Luxembourg (Kirchberg)',
    rooms: '2'
  });

  // Sandbox 2: Clinic
  const [clinicStep, setClinicStep] = useState(1);
  const [clinicForm, setClinicForm] = useState({
    service: 'Nutritional & Metabolic Health',
    symptom: 'Dietary transition & post-viral fatigue',
    timeSlot: 'Thursday 15:30',
    patient: 'Sophie Laurent'
  });

  const [activeSandbox, setActiveSandbox] = useState<'re' | 'clinic'>('re');

  // ROI Calculator
  const [inquiriesPerWeek, setInquiriesPerWeek] = useState(45);
  const hoursSavedMonth = Math.round((inquiriesPerWeek * 16 * 4) / 60);
  const estimatedCostSaved = hoursSavedMonth * 45;

  // Contact State
  const [contactState, setContactState] = useState({ name: '', email: '', company: '', website: '', goal: '' });
  const [contactSent, setContactSent] = useState(false);

  const t = {
    en: {
      badge: '// #1 WORKFLOW & AI INTEGRATION STUDIO FOR EU FIRMS',
      h1_1: 'We engineer digital systems that ',
      h1_accent: 'eliminate manual operations',
      h1_2: '.',
      heroLead: 'We turn fragmented WhatsApp messages, unorganized spreadsheets, and delayed email replies into high-speed web portals, intelligent intake pipelines, and automated team dashboards.',
      btnAudit: 'Request Free Workflow Audit',
      btnDemos: 'Test Live Engine',
      navServices: 'Framework',
      navDemos: 'Live Sandboxes',
      navCases: 'Outcomes',
      navCalc: 'ROI Calculator',
      navScope: 'Scope',
      navCta: 'Get Free Audit',

      // Grego Terminal Strings
      terminalHeader: 'AI ANDES ENGINE · LIVE EXECUTION TRACE',
      log1: '✔ Ingesting incoming lead payload from Luxembourg gateway...',
      log2: '✔ Parsing criteria: intent=rent, budget=€1,850, location=Kirchberg...',
      log3: '✔ Cross-matching inventory with Notion database (18 units indexed)...',
      log4: '✔ Score calculated: 96/100 (High intent · Qualified budget)',
      log5: '✔ Dispatching viewing link via automated WhatsApp API...',
      log6: '✔ Sync complete: Notion CRM record #4912 created in 1.18s',

      // Roomix Natural Language Search Bar
      nlTitle: 'Natural Language Intake Simulator',
      nlSub: 'Type or edit a client inquiry in plain language to see how the engine extracts structured parameters:',
      nlBtn: 'Parse with AI Engine',
      nlPlaceholder: 'e.g. Need a 2-room clinic appointment for metabolic consultation on Thursday afternoon...',

      // Fardo 4-Phase Framework
      fardoBadge: 'The Andes Framework',
      fardoTitle: 'Structured delivery in 4 clear phases',
      fardoDesc: 'We do not build chaotic one-off scripts. Every client engagement follows an audited 4-phase rollout.',
      p1Title: 'Phase 1 · Intake Architecture',
      p1Tasks: '12/14 tasks',
      p1Desc: 'We map your existing bottlenecks, set up the mobile-first Next.js intake frontend, and define budget qualification gates.',
      p2Title: 'Phase 2 · Edge AI & Extraction',
      p2Tasks: '16/18 tasks',
      p2Desc: 'We deploy AI parsers that extract intent, budget, urgency, and customer criteria into clean JSON in under 1.5 seconds.',
      p3Title: 'Phase 3 · Workspace Integrations',
      p3Tasks: '10/12 tasks',
      p3Desc: 'We connect bi-directional pipelines into Notion, Airtable, Cal.com calendar booking, and WhatsApp Business notifications.',
      p4Title: 'Phase 4 · Go-Live & 2FA Hardening',
      p4Tasks: '8/8 tasks',
      p4Desc: 'Operational handover, team video walkthrough, GDPR data minimization audit, and 2FA access control verification.',

      // Sandboxes
      sandBadge: 'Interactive Sandboxes',
      sandTitle: 'Simulate the workflow live',
      sandDesc: 'Experience how raw customer inquiries turn into structured, qualified records instantly.',
      demo1Tab: 'Real Estate Workflow',
      demo2Tab: 'Clinic & Triage Workflow',

      // Calculator
      calcBadge: 'Measurable ROI',
      calcTitle: 'Calculate your monthly operational savings',
      calcDesc: 'Move the slider to reflect your weekly manual inquiry volume.',
      calcSliderLabel: 'Weekly manual inquiries or bookings:',
      calcHoursTitle: 'Monthly Admin Time Recaptured',
      calcValTitle: 'Monthly Operational Value Saved',
      calcValNote: 'Based on €45/hr average professional staff cost in EU',

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
      auditSentDesc: 'We will inspect your business flow and deliver a 3-point actionable blueprint to your email shortly.',
      auditSubmit: 'Send Audit Request',
      footerCopy: '© 2026 AI Andes Studio. Systems & Workflow Engineering.'
    },
    es: {
      badge: '// ESTUDIO #1 DE INTEGRACIONES CON IA Y FLUJOS PARA EMPRESAS EN EUROPA',
      h1_1: 'Creamos sistemas digitales que ',
      h1_accent: 'eliminan la carga manual',
      h1_2: '.',
      heroLead: 'Transformamos mensajes desordenados de WhatsApp, planillas manuales y respuestas lentas por email en portales web rápidos, flujos de captación inteligentes y paneles operativos automatizados.',
      btnAudit: 'Solicitar Auditoría de Flujo Gratuita',
      btnDemos: 'Probar Motor en Vivo',
      navServices: 'Metodología',
      navDemos: 'Demos en Vivo',
      navCases: 'Casos Reales',
      navCalc: 'Calculadora ROI',
      navScope: 'Alcance',
      navCta: 'Auditoría Gratis',

      // Grego Terminal Strings
      terminalHeader: 'MOTOR AI ANDES · TRAZA DE EJECUCIÓN EN VIVO',
      log1: '✔ Ingreso de consulta detectado desde gateway en Luxemburgo...',
      log2: '✔ Parámetros extraídos: intención=alquiler, presupuesto=€1.850, zona=Kirchberg...',
      log3: '✔ Coincidencia cruzada con base de datos en Notion (18 propiedades activas)...',
      log4: '✔ Scoring calculado: 96/100 (Lead de alta prioridad · Presupuesto calificado)',
      log5: '✔ Enlace de visita despachado automáticamente vía WhatsApp API...',
      log6: '✔ Sincronización completa: Registro Notion CRM #4912 generado en 1.18s',

      // Roomix Natural Language Search Bar
      nlTitle: 'Simulador de Intake en Lenguaje Natural',
      nlSub: 'Escribe o edita una consulta en lenguaje coloquial para ver cómo el motor extrae los parámetros automáticamente:',
      nlBtn: 'Procesar con Motor IA',
      nlPlaceholder: 'ej. Busco turno en clínica para consulta de nutrición y metabolismo el jueves por la tarde...',

      // Fardo 4-Phase Framework
      fardoBadge: 'Metodología Andes',
      fardoTitle: 'Entrega estructurada en 4 fases claras',
      fardoDesc: 'No construimos scripts improvisados. Cada implementación sigue un proceso de 4 fases con entregables auditados.',
      p1Title: 'Fase 1 · Arquitectura de Intake',
      p1Tasks: '12/14 tareas',
      p1Desc: 'Mapeamos los cuellos de botella actuales, desplegamos el frontend mobile-first en Next.js y definimos filtros de calificación.',
      p2Title: 'Fase 2 · Extracción e IA en Edge',
      p2Tasks: '16/18 tareas',
      p2Desc: 'Implementamos modelos de IA que extraen intención, presupuesto y requerimientos en JSON estructurado en menos de 1.5 segundos.',
      p3Title: 'Fase 3 · Integraciones de Trabajo',
      p3Tasks: '10/12 tareas',
      p3Desc: 'Conectamos flujos bidireccionales con Notion, Airtable, agendamiento de citas en Cal.com y notificaciones por WhatsApp Business.',
      p4Title: 'Fase 4 · Puesta en Marcha & 2FA',
      p4Tasks: '8/8 tareas',
      p4Desc: 'Traspaso operativo, video explicativo al equipo, auditoría de minimización de datos (GDPR) y verificación de seguridad 2FA.',

      // Sandboxes
      sandBadge: 'Sandboxes Interactivos',
      sandTitle: 'Simula los flujos en tiempo real',
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

  // Natural Language Parse Handler
  const handleNLParse = () => {
    setNlResult({
      score: 98,
      summary: `Extracted: Intent=Rental, Area=Luxembourg City/Kirchberg, Budget=€1,900, Requirements=[Balcony, Parking, 2 Rooms]. Matched 2 verified units.`,
      action: 'Notion record generated + Instant tour link dispatched via WhatsApp API.'
    });
  };

  return (
    <div style={{ backgroundColor: '#06080E', minHeight: '100vh', color: '#F1F5F9' }}>
      
      {/* ─── TOP NOTIFICATION (GREGO/FARDO HYBRID) ─── */}
      <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.08)', borderBottom: '1px solid rgba(56, 189, 248, 0.2)', padding: '8px 16px', textAlign: 'center', fontSize: '11px', fontFamily: 'monospace', color: '#38BDF8', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#38BDF8', display: 'inline-block' }} />
        <span>{lang === 'en' ? 'Bespoke AI systems for EU businesses · Luxembourg · Switzerland · Belgium' : 'Sistemas de IA para empresas en Europa · Luxemburgo · Suiza · Bélgica'}</span>
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

          {/* Links */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '28px', fontSize: '12px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px' }} className="md:flex">
            <a href="#framework" style={{ color: '#94A3B8', textDecoration: 'none' }}>{t.navServices}</a>
            <a href="#simulator" style={{ color: '#94A3B8', textDecoration: 'none' }}>Simulator</a>
            <a href="#sandboxes" style={{ color: '#94A3B8', textDecoration: 'none' }}>{t.navDemos}</a>
            <a href="#outcomes" style={{ color: '#94A3B8', textDecoration: 'none' }}>{t.navCases}</a>
            <a href="#roi" style={{ color: '#94A3B8', textDecoration: 'none' }}>{t.navCalc}</a>
          </nav>

          {/* Controls */}
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

      {/* ─── HERO SECTION (GREGO.AI STYLE TERMINAL) ─── */}
      <section style={{ padding: '80px 24px 64px 24px', borderBottom: '1px solid #1E293B', textAlign: 'center' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '9999px', border: '1px solid rgba(56, 189, 248, 0.3)', backgroundColor: 'rgba(56, 189, 248, 0.06)', fontSize: '11px', fontFamily: 'monospace', color: '#38BDF8', marginBottom: '24px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#38BDF8', display: 'inline-block' }} />
            {t.badge}
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 5.5vw, 62px)', fontWeight: 800, lineHeight: 1.1, color: '#FFFFFF', marginBottom: '24px', letterSpacing: '-1.5px' }}>
            {t.h1_1}<span style={{ color: '#38BDF8' }}>{t.h1_accent}</span>{t.h1_2}
          </h1>

          <p style={{ fontSize: '18px', color: '#94A3B8', maxWidth: '680px', margin: '0 auto 40px auto', lineHeight: 1.6 }}>
            {t.heroLead}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '56px' }}>
            <a 
              href="#audit"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', borderRadius: '12px', backgroundColor: '#38BDF8', color: '#06080E', fontWeight: 800, fontSize: '14px', textDecoration: 'none', boxShadow: '0 0 28px rgba(56, 189, 248, 0.35)' }}
            >
              {t.btnAudit}
              <ArrowRight width="16" height="16" />
            </a>
            <a 
              href="#simulator"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', borderRadius: '12px', backgroundColor: '#0F172A', border: '1px solid #334155', color: '#E2E8F0', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}
            >
              {t.btnDemos}
            </a>
          </div>

          {/* ── GREGO.AI STYLE CODE & EXECUTION TERMINAL ── */}
          <div style={{ borderRadius: '18px', backgroundColor: '#070A12', border: '1px solid #1E293B', textAlign: 'left', maxWidth: '860px', margin: '0 auto', boxShadow: '0 24px 48px rgba(0,0,0,0.7)', overflow: 'hidden' }}>
            
            {/* Terminal Top Bar */}
            <div style={{ backgroundColor: '#0B0F19', padding: '12px 18px', borderBottom: '1px solid #1E293B', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444', display: 'inline-block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F59E0B', display: 'inline-block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }} />
                <span style={{ marginLeft: '12px', fontSize: '11px', fontFamily: 'monospace', color: '#64748B', fontWeight: 700 }}>{t.terminalHeader}</span>
              </div>
              <span style={{ fontSize: '10px', fontFamily: 'monospace', padding: '2px 8px', borderRadius: '4px', backgroundColor: 'rgba(16,185,129,0.1)', color: '#10B981', border: '1px solid rgba(16,185,129,0.3)' }}>
                ● ACTIVE STREAM
              </span>
            </div>

            {/* Terminal Content Lines */}
            <div style={{ padding: '20px 24px', fontFamily: 'monospace', fontSize: '12px', lineHeight: '2', color: '#E2E8F0' }}>
              <div style={{ color: '#10B981' }}>{t.log1}</div>
              <div style={{ color: '#38BDF8' }}>{t.log2}</div>
              <div style={{ color: '#94A3B8' }}>{t.log3}</div>
              <div style={{ color: '#F59E0B', fontWeight: 700 }}>{t.log4}</div>
              <div style={{ color: '#38BDF8' }}>{t.log5}</div>
              <div style={{ color: '#10B981', fontWeight: 700, borderTop: '1px dashed #1E293B', paddingTop: '8px', marginTop: '8px' }}>{t.log6}</div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── ROOMIX.AI STYLE NATURAL LANGUAGE SIMULATOR ─── */}
      <section id="simulator" style={{ padding: '80px 24px', borderBottom: '1px solid #1E293B', backgroundColor: '#080C14' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontFamily: 'monospace', color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
            <Sparkles width="14" height="14" />
            {t.nlTitle}
          </div>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>Experience Natural Language Processing</h2>
          <p style={{ fontSize: '14px', color: '#94A3B8', marginBottom: '32px' }}>{t.nlSub}</p>

          <div style={{ padding: '28px', borderRadius: '20px', backgroundColor: '#0B0F19', border: '1px solid #1E293B', textAlign: 'left', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ position: 'relative' }}>
                <textarea
                  rows={2}
                  value={nlInput}
                  onChange={(e) => setNlInput(e.target.value)}
                  style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: '12px', padding: '16px', color: '#FFFFFF', fontSize: '13px', fontFamily: 'monospace', outline: 'none', resize: 'none' }}
                />
              </div>

              <button
                type="button"
                onClick={handleNLParse}
                style={{ alignSelf: 'flex-start', padding: '12px 24px', borderRadius: '10px', backgroundColor: '#38BDF8', color: '#06080E', border: 'none', fontWeight: 800, fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 0 16px rgba(56, 189, 248, 0.3)' }}
              >
                <Zap width="15" height="15" />
                {t.nlBtn}
              </button>

              {nlResult && (
                <div style={{ marginTop: '12px', padding: '16px', borderRadius: '12px', backgroundColor: '#070A11', border: '1px solid rgba(56, 189, 248, 0.4)', fontFamily: 'monospace', fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#10B981', fontWeight: 800 }}>✔ Intent Extracted (Confidence: {nlResult.score}%)</span>
                    <span style={{ fontSize: '10px', color: '#94A3B8' }}>Latency: 0.9s</span>
                  </div>
                  <div style={{ color: '#E2E8F0', lineHeight: '1.5' }}>{nlResult.summary}</div>
                  <div style={{ color: '#38BDF8', fontSize: '11px', paddingTop: '6px', borderTop: '1px solid #1E293B' }}>➔ {nlResult.action}</div>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* ─── HEYFARDO.COM STYLE 4-PHASE FRAMEWORK ─── */}
      <section id="framework" style={{ padding: '80px 24px', borderBottom: '1px solid #1E293B' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          
          <div style={{ maxWidth: '640px', marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px', color: '#38BDF8', marginBottom: '8px' }}>{t.fardoBadge}</div>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px' }}>{t.fardoTitle}</h2>
            <p style={{ fontSize: '14px', color: '#94A3B8' }}>{t.fardoDesc}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            
            {/* Phase 1 */}
            <div style={{ padding: '28px', borderRadius: '18px', backgroundColor: '#0B0F19', border: '1px solid #1E293B', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#38BDF8', fontWeight: 800 }}>PHASE 01</span>
                  <span style={{ fontSize: '10px', fontFamily: 'monospace', padding: '2px 8px', borderRadius: '4px', backgroundColor: '#0F172A', color: '#94A3B8', border: '1px solid #1E293B' }}>{t.p1Tasks}</span>
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>{t.p1Title}</h3>
                <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: '1.6' }}>{t.p1Desc}</p>
              </div>
            </div>

            {/* Phase 2 */}
            <div style={{ padding: '28px', borderRadius: '18px', backgroundColor: '#0B0F19', border: '1px solid #1E293B', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#38BDF8', fontWeight: 800 }}>PHASE 02</span>
                  <span style={{ fontSize: '10px', fontFamily: 'monospace', padding: '2px 8px', borderRadius: '4px', backgroundColor: '#0F172A', color: '#94A3B8', border: '1px solid #1E293B' }}>{t.p2Tasks}</span>
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>{t.p2Title}</h3>
                <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: '1.6' }}>{t.p2Desc}</p>
              </div>
            </div>

            {/* Phase 3 */}
            <div style={{ padding: '28px', borderRadius: '18px', backgroundColor: '#0B0F19', border: '1px solid #1E293B', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#38BDF8', fontWeight: 800 }}>PHASE 03</span>
                  <span style={{ fontSize: '10px', fontFamily: 'monospace', padding: '2px 8px', borderRadius: '4px', backgroundColor: '#0F172A', color: '#94A3B8', border: '1px solid #1E293B' }}>{t.p3Tasks}</span>
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>{t.p3Title}</h3>
                <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: '1.6' }}>{t.p3Desc}</p>
              </div>
            </div>

            {/* Phase 4 */}
            <div style={{ padding: '28px', borderRadius: '18px', backgroundColor: '#0B0F19', border: '1px solid #1E293B', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#38BDF8', fontWeight: 800 }}>PHASE 04</span>
                  <span style={{ fontSize: '10px', fontFamily: 'monospace', padding: '2px 8px', borderRadius: '4px', backgroundColor: '#0F172A', color: '#94A3B8', border: '1px solid #1E293B' }}>{t.p4Tasks}</span>
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>{t.p4Title}</h3>
                <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: '1.6' }}>{t.p4Desc}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE SANDBOXES (REAL ESTATE & CLINIC) ─── */}
      <section id="sandboxes" style={{ padding: '80px 24px', borderBottom: '1px solid #1E293B', backgroundColor: '#080C14' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px', gap: '20px' }}>
            <div style={{ maxWidth: '576px' }}>
              <div style={{ fontSize: '12px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px', color: '#38BDF8', marginBottom: '8px' }}>{t.sandBadge}</div>
              <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>{t.sandTitle}</h2>
              <p style={{ fontSize: '14px', color: '#94A3B8' }}>{t.sandDesc}</p>
            </div>

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
                    <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>Client Full Name</label>
                    <input 
                      type="text" 
                      value={reForm.name} 
                      onChange={(e) => setReForm({...reForm, name: e.target.value})}
                      style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: '8px', padding: '12px', color: '#FFFFFF', outline: 'none' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>Intent</label>
                      <select 
                        value={reForm.intent} 
                        onChange={(e) => setReForm({...reForm, intent: e.target.value})}
                        style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: '8px', padding: '12px', color: '#FFFFFF', outline: 'none' }}
                      >
                        <option value="rent">Property Rental</option>
                        <option value="buy">Property Purchase</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>Budget (€)</label>
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
                      <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>Bedrooms</label>
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
                      <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>Target Zone</label>
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
                    Process Inquiry & Generate AI Brief
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
                          <span>AI Executive Brief</span>
                          <span style={{ fontSize: '10px', color: '#10B981' }}>Match 96%</span>
                        </div>
                        <p style={{ color: '#E2E8F0', lineHeight: 1.6, fontSize: '12px' }}>
                          &quot;{reForm.name} is seeking a {reForm.rooms}-bedroom {reForm.intent} in {reForm.location} (Budget: €{reForm.budget}). Matched 3 active units. Auto-invite for viewing dispatched.&quot;
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
                        Reset Scenario
                      </button>
                    </div>
                  ) : (
                    <div style={{ padding: '56px 0', textAlign: 'center', color: '#64748B', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                      <Workflow width="36" height="36" stroke="#475569" />
                      <p>Click &quot;Process Inquiry&quot; to test the live classification stream.</p>
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
                    <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>Medical / Health Specialty</label>
                    <select 
                      value={clinicForm.service} 
                      onChange={(e) => setClinicForm({...clinicForm, service: e.target.value})}
                      style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: '8px', padding: '12px', color: '#FFFFFF', outline: 'none' }}
                    >
                      <option value="Nutritional & Metabolic Health">Nutritional & Metabolic Health</option>
                      <option value="Dental Aesthetics & Implantology">Dental Aesthetics & Implantology</option>
                      <option value="Physiotherapy & Rehabilitation">Physiotherapy & Rehabilitation</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>Chief Complaint / Goal</label>
                    <input 
                      type="text" 
                      value={clinicForm.symptom} 
                      onChange={(e) => setClinicForm({...clinicForm, symptom: e.target.value})}
                      style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: '8px', padding: '12px', color: '#FFFFFF', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>Selected Time Window</label>
                    <select 
                      value={clinicForm.timeSlot} 
                      onChange={(e) => setClinicForm({...clinicForm, timeSlot: e.target.value})}
                      style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: '8px', padding: '12px', color: '#FFFFFF', outline: 'none' }}
                    >
                      <option value="Thursday 10:00 (Morning)">Morning (09:00 - 12:30)</option>
                      <option value="Thursday 15:30 (Afternoon)">Afternoon (14:30 - 18:30)</option>
                    </select>
                  </div>

                  <button 
                    type="button" 
                    onClick={() => setClinicStep(2)}
                    style={{ width: '100%', padding: '16px', borderRadius: '12px', backgroundColor: '#38BDF8', color: '#06080E', border: 'none', fontWeight: 800, fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '8px', boxShadow: '0 0 20px rgba(56,189,248,0.3)' }}
                  >
                    <UserCheck width="16" height="16" />
                    Execute Automated Triage & Booking
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
                          <span>Patient Pre-Allocated</span>
                          <span style={{ fontSize: '10px', color: '#38BDF8' }}>Automated Triage Confirmed</span>
                        </div>
                        <p style={{ color: '#E2E8F0', lineHeight: 1.6, fontSize: '12px' }}>
                          &quot;Patient registered for {clinicForm.service}. Motivo: {clinicForm.symptom}. Turno bloqueado para {clinicForm.timeSlot}. Confirmación por SMS despachada.&quot;
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
                        Reset Scenario
                      </button>
                    </div>
                  ) : (
                    <div style={{ padding: '56px 0', textAlign: 'center', color: '#64748B', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                      <Workflow width="36" height="36" stroke="#475569" />
                      <p>Click &quot;Execute Automated Triage & Booking&quot; to test the live clinical stream.</p>
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
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#38BDF8' }}>~{hoursSavedMonth} <span style={{ fontSize: '12px', color: '#64748B', fontWeight: 400 }}>hrs / month</span></div>
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
                <li>• Mobile-first web portals and intelligent intake flows</li>
                <li>• 1.5s Edge AI entity extraction and priority scoring</li>
                <li>• Bi-directional Notion and Airtable CRM integrations</li>
                <li>• 2FA security setups with European GDPR data minimization</li>
              </ul>
            </div>

            <div style={{ padding: '32px', borderRadius: '20px', backgroundColor: '#0B0F19', border: '1px solid #1E293B' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#94A3B8', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'monospace', textTransform: 'uppercase' }}>
                <ShieldCheck width="16" height="16" color="#64748B" /> {t.scopeOutTitle}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '12px', fontFamily: 'monospace', color: '#94A3B8', lineHeight: '1.6' }}>
                <li>• No chaotic, black-box custom software without clear delivery phases</li>
                <li>• No unsupervised AI agents operating without human approval</li>
                <li>• We do not replace certified ERP systems (e.g. SAP, Datev, Sage)</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ─── AUDIT CONTACT FORM ─── */}
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
                  <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>Your Name *</label>
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
                  <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>Work Email *</label>
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
                  <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>Company / Firm Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Moreau Real Estate SARL"
                    value={contactState.company}
                    onChange={(e) => setContactState({...contactState, company: e.target.value})}
                    style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: '8px', padding: '12px 14px', color: '#FFFFFF', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>Website or LinkedIn</label>
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
                <label style={{ color: '#94A3B8', display: 'block', marginBottom: '6px' }}>Which manual process causes the most friction today?</label>
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
