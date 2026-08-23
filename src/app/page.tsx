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
  FileText
} from 'lucide-react';

export default function AIAndesStudioLanding() {
  const [lang, setLang] = useState<'en' | 'es'>('en');

  // Hero Window State
  const [heroTab, setHeroTab] = useState<'trace' | 'payload' | 'dispatch'>('trace');

  // Natural Language Search Presets (Roomix Style)
  const [nlQuery, setNlQuery] = useState('Looking for a 2-bedroom rental in Luxembourg Kirchberg, budget max €1,900/mo, urgent moving date');
  const [nlOutput, setNlOutput] = useState<{ score: number; intent: string; budget: string; location: string; status: string } | null>({
    score: 98,
    intent: 'Rental · 2 Bedrooms',
    budget: '€1,900 / month',
    location: 'Luxembourg City (Kirchberg)',
    status: 'Matched 3 portfolio properties · Instant viewing link dispatched'
  });

  // Sandbox State
  const [sandboxTab, setSandboxTab] = useState<'re' | 'clinic'>('re');
  const [reBudget, setReBudget] = useState('1850');
  const [reRooms, setReRooms] = useState('2');
  const [reLocation, setReLocation] = useState('Luxembourg (Kirchberg)');
  const [reExecuted, setReExecuted] = useState(false);

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
      h1_1: 'Turn manual business friction into ',
      h1_accent: 'automated precision',
      h1_2: '.',
      heroLead: 'We build high-converting web portals, intelligent intake pipelines, and automated team dashboards that eliminate repetitive admin work for businesses across Europe.',
      btnAudit: 'Request Free Workflow Audit',
      btnDemos: 'Explore Live Engine',
      metric1: '5–14 Days Turnaround',
      metric2: 'Vercel Edge Global',
      metric3: 'GDPR-Aligned & 2FA',
      
      // Hero Inspector Window
      windowHost: 'engine.ai-andes.studio · v2.4',
      tabTrace: 'Execution Trace',
      tabPayload: 'JSON Extraction',
      tabDispatch: 'Notion Sync',
      
      // Natural Language
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

      // Calculator
      calcBadge: 'Measurable Financial ROI',
      calcTitle: 'Calculate your monthly operational savings',
      calcDesc: 'Move the slider to match the volume of manual inquiries or bookings your team handles weekly.',
      calcLabel: 'Weekly manual inquiries or bookings:',
      calcHours: 'Admin Time Recaptured',
      calcVal: 'Estimated Value Recovered',
      calcNote: 'Based on €45/hr average professional staff cost in Western Europe',

      // Outcomes
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

      // Hero Inspector Window
      windowHost: 'motor.ai-andes.studio · v2.4',
      tabTrace: 'Traza de Ejecución',
      tabPayload: 'Extracción JSON',
      tabDispatch: 'Sincronización Notion',

      // Natural Language
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

  // Presets Click Handler
  const loadPreset = (type: string) => {
    if (type === 're') {
      setNlQuery('Looking for a 2-bedroom rental in Luxembourg Kirchberg, budget max €1,900/mo, urgent moving date');
      setNlOutput({
        score: 98,
        intent: 'Rental · 2 Bedrooms',
        budget: '€1,900 / month',
        location: 'Luxembourg City (Kirchberg)',
        status: 'Matched 3 portfolio properties · Instant viewing link dispatched via WhatsApp'
      });
    } else if (type === 'clinic') {
      setNlQuery('Need a consultation for metabolic health and chronic fatigue on Thursday afternoon, patient Sophie Laurent');
      setNlOutput({
        score: 95,
        intent: 'Nutritional & Metabolic Health',
        budget: 'Standard Consultation (€120)',
        location: 'Brussels Clinic (Avenue Louise)',
        status: 'Appointment held for Thursday 15:30 · Confirmation SMS queued'
      });
    } else if (type === 'legal') {
      setNlQuery('Corporate contract review for Swiss subsidiary, urgent 48h deadline, document length 14 pages');
      setNlOutput({
        score: 92,
        intent: 'Corporate Document Audit',
        budget: 'Priority Expedited Intake',
        location: 'Zurich Financial District',
        status: 'Checklist created in Notion · Partner alerted with document brief'
      });
    }
  };

  return (
    <div style={{ backgroundColor: '#06080E', minHeight: '100vh', color: '#F1F5F9', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      
      {/* ─── TOP NOTIFICATION STRIP ─── */}
      <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.08)', borderBottom: '1px solid rgba(56, 189, 248, 0.2)', padding: '8px 16px', textAlign: 'center', fontSize: '11px', fontFamily: 'monospace', color: '#38BDF8', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#38BDF8', display: 'inline-block' }} />
        <span>{t.topBanner}</span>
      </div>

      {/* ─── NAVBAR ─── */}
      <header style={{ backgroundColor: 'rgba(6, 8, 14, 0.95)', borderBottom: '1px solid #1E293B', position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(16px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo with 38px Box */}
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
            <a href="#simulator" style={{ color: '#94A3B8', textDecoration: 'none' }}>Simulator</a>
            <a href="#framework" style={{ color: '#94A3B8', textDecoration: 'none' }}>{t.fardoBadge}</a>
            <a href="#outcomes" style={{ color: '#94A3B8', textDecoration: 'none' }}>{t.caseBadge}</a>
            <a href="#roi" style={{ color: '#94A3B8', textDecoration: 'none' }}>ROI</a>
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
              {t.btnAudit}
            </a>
          </div>

        </div>
      </header>

      {/* ─── 2-COLUMN HERO (LINEAR / GREGO.AI HYBRID) ─── */}
      <section style={{ padding: '80px 24px 64px 24px', borderBottom: '1px solid #1E293B' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px', alignItems: 'center' }}>
          
          {/* Left Column: Value Prop */}
          <div style={{ textAlign: 'left' }}>
            
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '9999px', border: '1px solid rgba(56, 189, 248, 0.3)', backgroundColor: 'rgba(56, 189, 248, 0.06)', fontSize: '11px', fontFamily: 'monospace', color: '#38BDF8', marginBottom: '20px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#38BDF8', display: 'inline-block' }} />
              {t.badge}
            </div>

            <h1 style={{ fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 800, lineHeight: 1.1, color: '#FFFFFF', marginBottom: '20px', letterSpacing: '-1.2px' }}>
              {t.h1_1}<span style={{ color: '#38BDF8' }}>{t.h1_accent}</span>{t.h1_2}
            </h1>

            <p style={{ fontSize: '16px', color: '#94A3B8', lineHeight: 1.6, marginBottom: '32px', maxWidth: '520px' }}>
              {t.heroLead}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '40px' }}>
              <a 
                href="#audit"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '10px', backgroundColor: '#38BDF8', color: '#06080E', fontWeight: 800, fontSize: '13px', textDecoration: 'none', boxShadow: '0 0 24px rgba(56, 189, 248, 0.35)' }}
              >
                {t.btnAudit}
                <ArrowRight width="16" height="16" />
              </a>
              <a 
                href="#simulator"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 24px', borderRadius: '10px', backgroundColor: '#0F172A', border: '1px solid #334155', color: '#E2E8F0', fontWeight: 600, fontSize: '13px', textDecoration: 'none' }}
              >
                {t.btnDemos}
              </a>
            </div>

            {/* Quick Metrics */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontFamily: 'monospace', fontSize: '11px', color: '#64748B', paddingTop: '20px', borderTop: '1px solid #1E293B' }}>
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

          {/* Right Column: Grego.ai-Style Code & System Inspector */}
          <div style={{ borderRadius: '16px', backgroundColor: '#070A12', border: '1px solid #1E293B', boxShadow: '0 24px 48px rgba(0,0,0,0.7)', overflow: 'hidden' }}>
            
            {/* Window Top Bar */}
            <div style={{ backgroundColor: '#0B0F19', padding: '12px 18px', borderBottom: '1px solid #1E293B', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444', display: 'inline-block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F59E0B', display: 'inline-block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }} />
                <span style={{ marginLeft: '8px', fontSize: '11px', fontFamily: 'monospace', color: '#64748B' }}>{t.windowHost}</span>
              </div>
              <div style={{ display: 'flex', gap: '6px', fontSize: '11px', fontFamily: 'monospace' }}>
                <button 
                  type="button" 
                  onClick={() => setHeroTab('trace')}
                  style={{ padding: '3px 8px', borderRadius: '4px', border: 'none', cursor: 'pointer', backgroundColor: heroTab === 'trace' ? '#1E293B' : 'transparent', color: heroTab === 'trace' ? '#38BDF8' : '#64748B' }}
                >
                  {t.tabTrace}
                </button>
                <button 
                  type="button" 
                  onClick={() => setHeroTab('payload')}
                  style={{ padding: '3px 8px', borderRadius: '4px', border: 'none', cursor: 'pointer', backgroundColor: heroTab === 'payload' ? '#1E293B' : 'transparent', color: heroTab === 'payload' ? '#38BDF8' : '#64748B' }}
                >
                  {t.tabPayload}
                </button>
                <button 
                  type="button" 
                  onClick={() => setHeroTab('dispatch')}
                  style={{ padding: '3px 8px', borderRadius: '4px', border: 'none', cursor: 'pointer', backgroundColor: heroTab === 'dispatch' ? '#1E293B' : 'transparent', color: heroTab === 'dispatch' ? '#38BDF8' : '#64748B' }}
                >
                  {t.tabDispatch}
                </button>
              </div>
            </div>

            {/* Window Content */}
            <div style={{ padding: '20px', fontFamily: 'monospace', fontSize: '12px', lineHeight: '1.9' }}>
              {heroTab === 'trace' && (
                <div>
                  <div style={{ color: '#10B981' }}>✔ Ingesting customer intake payload from Luxembourg portal...</div>
                  <div style={{ color: '#38BDF8' }}>✔ Parsing parameters: intent=&quot;rental&quot;, budget=&quot;€1,850&quot;, rooms=2...</div>
                  <div style={{ color: '#94A3B8' }}>✔ Cross-checking available units in Notion database...</div>
                  <div style={{ color: '#F59E0B', fontWeight: 700 }}>✔ Lead score computed: 96/100 (High intent · Qualified budget)</div>
                  <div style={{ color: '#38BDF8' }}>✔ Dispatching viewing appointment link via automated WhatsApp API...</div>
                  <div style={{ color: '#10B981', fontWeight: 700, borderTop: '1px dashed #1E293B', paddingTop: '8px', marginTop: '8px' }}>
                    ✔ Pipeline complete: Notion record #4912 created in 1.18s
                  </div>
                </div>
              )}

              {heroTab === 'payload' && (
                <div style={{ color: '#CBD5E1', fontSize: '11px', lineHeight: '1.6' }}>
                  <pre style={{ margin: 0 }}>{`{
  "client": "Jean-Luc Moreau",
  "country": "LU",
  "intent": "property_rental",
  "budget_monthly_eur": 1850,
  "zone": "Luxembourg_Kirchberg",
  "qualification_score": 0.96,
  "auto_action": "dispatch_viewing_cal_link"
}`}</pre>
                </div>
              )}

              {heroTab === 'dispatch' && (
                <div style={{ color: '#94A3B8', fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ padding: '8px 12px', borderRadius: '6px', backgroundColor: '#0B0F19', border: '1px solid #1E293B', color: '#10B981' }}>
                    ➔ Notion Database: Row inserted with tag [Priority Qualified Lead]
                  </div>
                  <div style={{ padding: '8px 12px', borderRadius: '6px', backgroundColor: '#0B0F19', border: '1px solid #1E293B', color: '#38BDF8' }}>
                    ➔ Cal.com: Slot reserved for Tuesday 15:30
                  </div>
                  <div style={{ padding: '8px 12px', borderRadius: '6px', backgroundColor: '#0B0F19', border: '1px solid #1E293B', color: '#F59E0B' }}>
                    ➔ Mobile Push: Alert dispatched to lead agent in 0.8s
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* ─── ROOMIX.AI STYLE NATURAL LANGUAGE SIMULATOR WITH PRESETS ─── */}
      <section id="simulator" style={{ padding: '80px 24px', borderBottom: '1px solid #1E293B', backgroundColor: '#080C14' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontFamily: 'monospace', color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
            <Sparkles width="14" height="14" />
            {t.nlBadge}
          </div>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>{t.nlTitle}</h2>
          <p style={{ fontSize: '14px', color: '#94A3B8', marginBottom: '24px' }}>{t.nlDesc}</p>

          {/* Quick Presets Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '20px', fontFamily: 'monospace', fontSize: '11px' }}>
            <button 
              type="button" 
              onClick={() => loadPreset('re')}
              style={{ padding: '6px 12px', borderRadius: '9999px', backgroundColor: '#0F172A', border: '1px solid #334155', color: '#E2E8F0', cursor: 'pointer' }}
            >
              {t.preset1}
            </button>
            <button 
              type="button" 
              onClick={() => loadPreset('clinic')}
              style={{ padding: '6px 12px', borderRadius: '9999px', backgroundColor: '#0F172A', border: '1px solid #334155', color: '#E2E8F0', cursor: 'pointer' }}
            >
              {t.preset2}
            </button>
            <button 
              type="button" 
              onClick={() => loadPreset('legal')}
              style={{ padding: '6px 12px', borderRadius: '9999px', backgroundColor: '#0F172A', border: '1px solid #334155', color: '#E2E8F0', cursor: 'pointer' }}
            >
              {t.preset3}
            </button>
          </div>

          {/* Simulator Bar Card */}
          <div style={{ padding: '24px', borderRadius: '18px', backgroundColor: '#0B0F19', border: '1px solid #1E293B', textAlign: 'left', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <textarea
                rows={2}
                value={nlQuery}
                onChange={(e) => setNlQuery(e.target.value)}
                style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: '10px', padding: '14px', color: '#FFFFFF', fontSize: '13px', fontFamily: 'monospace', outline: 'none', resize: 'none' }}
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
                <div style={{ marginTop: '10px', padding: '16px', borderRadius: '10px', backgroundColor: '#070A11', border: '1px solid rgba(56, 189, 248, 0.4)', fontFamily: 'monospace', fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#10B981', fontWeight: 800 }}>✔ Structured Parameter Extraction (Score: {nlOutput.score}%)</span>
                    <span style={{ fontSize: '10px', color: '#94A3B8' }}>Latency: 1.1s</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px', color: '#E2E8F0', padding: '8px 0' }}>
                    <div>• Intent: <span style={{ color: '#38BDF8' }}>{nlOutput.intent}</span></div>
                    <div>• Budget: <span style={{ color: '#38BDF8' }}>{nlOutput.budget}</span></div>
                    <div>• Target Zone: <span style={{ color: '#38BDF8' }}>{nlOutput.location}</span></div>
                  </div>
                  <div style={{ color: '#10B981', fontSize: '11px', paddingTop: '6px', borderTop: '1px solid #1E293B' }}>➔ {nlOutput.status}</div>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ─── HEYFARDO.COM STYLE 4-PHASE FRAMEWORK WITH PROGRESS BARS ─── */}
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
            <div style={{ padding: '28px', borderRadius: '18px', backgroundColor: '#0B0F19', border: '1px solid #1E293B', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
            <div style={{ padding: '28px', borderRadius: '18px', backgroundColor: '#0B0F19', border: '1px solid #1E293B', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
            <div style={{ padding: '28px', borderRadius: '18px', backgroundColor: '#0B0F19', border: '1px solid #1E293B', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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

      {/* ─── CASE STUDIES: BEFORE VS AFTER ─── */}
      <section id="outcomes" style={{ padding: '80px 24px', borderBottom: '1px solid #1E293B' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          
          <div style={{ maxWidth: '600px', marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px', color: '#38BDF8', marginBottom: '8px' }}>{t.caseBadge}</div>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px' }}>{t.caseTitle}</h2>
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

      {/* ─── ROI CALCULATOR ─── */}
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
                <span style={{ color: '#38BDF8', fontWeight: 800, fontSize: '15px', padding: '4px 12px', backgroundColor: '#070A11', borderRadius: '6px', border: '1px solid #1E293B' }}>{weeklyVolume}</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="200" 
                step="5"
                value={weeklyVolume}
                onChange={(e) => setWeeklyVolume(Number(e.target.value))}
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
                <div style={{ fontSize: '11px', color: '#94A3B8', marginBottom: '6px' }}>{t.calcHours}</div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#38BDF8' }}>~{hoursSaved} <span style={{ fontSize: '12px', color: '#64748B', fontWeight: 400 }}>hrs / month</span></div>
              </div>
              <div style={{ padding: '20px', borderRadius: '14px', backgroundColor: '#070A11', border: '1px solid #1E293B' }}>
                <div style={{ fontSize: '11px', color: '#94A3B8', marginBottom: '6px' }}>{t.calcVal}</div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#10B981' }}>~€{eurosSaved.toLocaleString()} <span style={{ fontSize: '12px', color: '#64748B', fontWeight: 400 }}>/ mo</span></div>
              </div>
            </div>
            <div style={{ textAlign: 'center', fontSize: '11px', fontFamily: 'monospace', color: '#64748B' }}>{t.calcNote}</div>
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

          {contactDone ? (
            <div style={{ padding: '32px', borderRadius: '16px', backgroundColor: '#070A11', border: '1px solid rgba(16, 185, 129, 0.4)', textAlign: 'center', fontFamily: 'monospace' }}>
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
