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
  Sparkles,
  Sliders
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
    intent: 'Property Rental · 2 Bedrooms',
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

      // Calculator
      calcBadge: 'Measurable Financial ROI',
      calcTitle: 'Calculate your monthly operational savings',
      calcDesc: 'Move the slider to match the volume of manual inquiries or bookings your team handles weekly.',
      calcSliderLabel: 'Weekly manual inquiries or bookings:',
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

      // Calculator
      calcBadge: 'Retorno Medible (ROI)',
      calcTitle: 'Calcula tu ahorro mensual de tiempo y dinero',
      calcDesc: 'Mueve el control según la cantidad de consultas semanales que recibes.',
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
      scopeOutTitle: 'Lo que NO hacemos',
      scopeIn1: '• Sitios web Next.js a medida y páginas de captación optimizadas',
      scopeIn2: '• Pipelines de datos automáticos (Notion, Airtable, Webhooks, APIs)',
      scopeIn3: '• Paneles internos y tableros de seguimiento operativo',
      scopeIn4: '• Configuración segura con 2FA y minimización de datos',
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
    <div style={{ backgroundColor: '#06080E', minHeight: '100vh', color: '#F1F5F9' }}>
      
      {/* ─── TOP NOTIFICATION STRIP ─── */}
      <div style={{ backgroundColor: 'rgba(245, 158, 11, 0.08)', borderBottom: '1px solid rgba(245, 158, 11, 0.2)', padding: '8px 16px', textAlign: 'center', fontSize: '11px', fontFamily: 'monospace', color: '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F59E0B', display: 'inline-block', boxShadow: '0 0 8px #F59E0B' }} />
        <span>{t.topBanner}</span>
      </div>

      {/* ─── FIXED TOP NAVBAR (CORREGIDO: NO FLOTANTE EN EL MEDIO) ─── */}
      <header style={{ backgroundColor: 'rgba(6, 8, 14, 0.95)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(16px)' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#0F172A', border: '1px solid #F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 0 16px rgba(245, 158, 11, 0.25)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 20h18L14 4l-4 7-3-4-4 13z" fill="rgba(245, 158, 11, 0.15)" />
                <path d="M14 4l7 16H3l4-13 3 4 4-7z" />
                <circle cx="14" cy="4" r="1.5" fill="#F59E0B" stroke="none" />
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 800, fontSize: '15px', color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '6px' }}>
                AI Andes <span style={{ color: '#F59E0B', fontSize: '10px', padding: '2px 6px', borderRadius: '4px', backgroundColor: 'rgba(245, 158, 11, 0.12)', border: '1px solid rgba(245, 158, 11, 0.3)', fontFamily: 'monospace', fontWeight: 700 }}>STUDIO</span>
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '24px', fontSize: '12px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px' }} className="md:flex">
            <a href="#simulator" style={{ color: '#94A3B8', textDecoration: 'none' }}>{t.navSimulator}</a>
            <a href="#framework" style={{ color: '#94A3B8', textDecoration: 'none' }}>{t.navFramework}</a>
            <a href="#sandboxes" style={{ color: '#94A3B8', textDecoration: 'none' }}>{t.navSandboxes}</a>
            <a href="#outcomes" style={{ color: '#94A3B8', textDecoration: 'none' }}>{t.navOutcomes}</a>
            <a href="#roi" style={{ color: '#94A3B8', textDecoration: 'none' }}>{t.navRoi}</a>
          </nav>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', padding: '3px', borderRadius: '8px', backgroundColor: '#0F172A', border: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '12px', fontFamily: 'monospace' }}>
              <button 
                type="button" 
                onClick={() => setLang('en')}
                style={{ padding: '4px 10px', borderRadius: '6px', border: 'none', cursor: 'pointer', backgroundColor: lang === 'en' ? '#F59E0B' : 'transparent', color: lang === 'en' ? '#06080E' : '#94A3B8', fontWeight: lang === 'en' ? 800 : 500 }}
              >
                ENG
              </button>
              <button 
                type="button" 
                onClick={() => setLang('es')}
                style={{ padding: '4px 10px', borderRadius: '6px', border: 'none', cursor: 'pointer', backgroundColor: lang === 'es' ? '#F59E0B' : 'transparent', color: lang === 'es' ? '#06080E' : '#94A3B8', fontWeight: lang === 'es' ? 800 : 500 }}
              >
                ESP
              </button>
            </div>

            <a 
              href="#audit"
              className="btn-interaction sm:inline-block"
              style={{ padding: '8px 16px', borderRadius: '8px', backgroundColor: '#F59E0B', color: '#06080E', fontWeight: 800, fontSize: '12px', textDecoration: 'none', textTransform: 'uppercase', fontFamily: 'monospace', display: 'none', boxShadow: '0 0 16px rgba(245, 158, 11, 0.3)' }}
            >
              {t.navCta}
            </a>
          </div>

        </div>
      </header>

      {/* ─── 2-COLUMN HERO (PADDINGS CALIBRADOS: SIN ESPACIOS VACÍOS) ─── */}
      <section style={{ padding: '56px 24px 48px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
          
          {/* Left Column */}
          <div style={{ textAlign: 'left' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 12px', borderRadius: '9999px', border: '1px solid rgba(245, 158, 11, 0.35)', backgroundColor: 'rgba(245, 158, 11, 0.06)', fontSize: '11px', fontFamily: 'monospace', color: '#F59E0B', marginBottom: '16px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F59E0B', display: 'inline-block' }} />
              {t.badge}
            </div>

            <h1 style={{ fontSize: 'clamp(30px, 3.8vw, 50px)', fontWeight: 800, lineHeight: 1.1, color: '#FFFFFF', marginBottom: '18px', letterSpacing: '-1px' }}>
              {t.h1_1}<span style={{ color: '#F59E0B' }}>{t.h1_accent}</span>{t.h1_2}
            </h1>

            <p style={{ fontSize: '15px', color: '#94A3B8', lineHeight: 1.6, marginBottom: '28px', maxWidth: '480px' }}>
              {t.heroLead}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
              <a 
                href="#audit"
                className="btn-interaction"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 26px', borderRadius: '10px', backgroundColor: '#F59E0B', color: '#06080E', fontWeight: 800, fontSize: '13px', textDecoration: 'none', boxShadow: '0 0 20px rgba(245, 158, 11, 0.35)' }}
              >
                {t.btnAudit}
                <ArrowRight width="15" height="15" />
              </a>
              <a 
                href="#simulator"
                className="btn-interaction"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 22px', borderRadius: '10px', backgroundColor: '#0F172A', border: '1px solid rgba(255, 255, 255, 0.12)', color: '#E2E8F0', fontWeight: 600, fontSize: '13px', textDecoration: 'none' }}
              >
                {t.btnDemos}
              </a>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontFamily: 'monospace', fontSize: '11px', color: '#64748B', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#CBD5E1' }}>
                <Check width="13" height="13" color="#F59E0B" /> {t.metric1}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#CBD5E1' }}>
                <Check width="13" height="13" color="#F59E0B" /> {t.metric2}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#CBD5E1' }}>
                <Check width="13" height="13" color="#F59E0B" /> {t.metric3}
              </div>
            </div>
          </div>

          {/* Right Column: Grego Style Inspector */}
          <div style={{ borderRadius: '16px', backgroundColor: '#070A12', border: '1px solid rgba(245, 158, 11, 0.25)', boxShadow: '0 20px 40px rgba(0,0,0,0.7)', overflow: 'hidden' }}>
            <div style={{ backgroundColor: '#0B1120', padding: '10px 16px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#EF4444', display: 'inline-block' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#F59E0B', display: 'inline-block' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }} />
                <span style={{ marginLeft: '8px', fontSize: '11px', fontFamily: 'monospace', color: '#64748B' }}>{t.windowHost}</span>
              </div>
              <div style={{ display: 'flex', gap: '4px', fontSize: '10px', fontFamily: 'monospace' }}>
                <button type="button" onClick={() => setHeroTab('flow')} style={{ padding: '3px 8px', borderRadius: '4px', border: 'none', cursor: 'pointer', backgroundColor: heroTab === 'flow' ? '#1E293B' : 'transparent', color: heroTab === 'flow' ? '#F59E0B' : '#64748B', fontWeight: 700 }}>Flow</button>
                <button type="button" onClick={() => setHeroTab('json')} style={{ padding: '3px 8px', borderRadius: '4px', border: 'none', cursor: 'pointer', backgroundColor: heroTab === 'json' ? '#1E293B' : 'transparent', color: heroTab === 'json' ? '#F59E0B' : '#64748B', fontWeight: 700 }}>JSON</button>
                <button type="button" onClick={() => setHeroTab('crm')} style={{ padding: '3px 8px', borderRadius: '4px', border: 'none', cursor: 'pointer', backgroundColor: heroTab === 'crm' ? '#1E293B' : 'transparent', color: heroTab === 'crm' ? '#F59E0B' : '#64748B', fontWeight: 700 }}>CRM</button>
              </div>
            </div>

            <div style={{ padding: '18px', fontFamily: 'monospace', fontSize: '11px', lineHeight: '1.8' }}>
              {heroTab === 'flow' && (
                <div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '12px' }}>
                    <button type="button" onClick={() => setActiveHeroNode(1)} style={{ padding: '10px', borderRadius: '8px', border: activeHeroNode === 1 ? '1px solid #F59E0B' : '1px solid rgba(255,255,255,0.08)', backgroundColor: activeHeroNode === 1 ? 'rgba(245, 158, 11, 0.12)' : '#070A11', textAlign: 'left', cursor: 'pointer' }}>
                      <div style={{ fontSize: '9px', color: '#F59E0B', fontWeight: 800 }}>STEP 01</div>
                      <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '11px' }}>{t.node1Title}</div>
                    </button>
                    <button type="button" onClick={() => setActiveHeroNode(2)} style={{ padding: '10px', borderRadius: '8px', border: activeHeroNode === 2 ? '1px solid #F59E0B' : '1px solid rgba(255,255,255,0.08)', backgroundColor: activeHeroNode === 2 ? 'rgba(245, 158, 11, 0.12)' : '#070A11', textAlign: 'left', cursor: 'pointer' }}>
                      <div style={{ fontSize: '9px', color: '#F59E0B', fontWeight: 800 }}>STEP 02</div>
                      <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '11px' }}>{t.node2Title}</div>
                    </button>
                    <button type="button" onClick={() => setActiveHeroNode(3)} style={{ padding: '10px', borderRadius: '8px', border: activeHeroNode === 3 ? '1px solid #F59E0B' : '1px solid rgba(255,255,255,0.08)', backgroundColor: activeHeroNode === 3 ? 'rgba(245, 158, 11, 0.12)' : '#070A11', textAlign: 'left', cursor: 'pointer' }}>
                      <div style={{ fontSize: '9px', color: '#F59E0B', fontWeight: 800 }}>STEP 03</div>
                      <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '11px' }}>{t.node3Title}</div>
                    </button>
                  </div>
                  <div style={{ padding: '10px 14px', borderRadius: '8px', backgroundColor: '#090E1A', border: '1px solid rgba(245, 158, 11, 0.25)', color: '#E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span>{activeHeroNode === 1 && 'Node 1: Customer submitted rental budget via mobile portal.'}{activeHeroNode === 2 && 'Node 2: Edge AI parsed parameters & scored lead at 96% in 1.2s.'}{activeHeroNode === 3 && 'Node 3: Record written to Notion & tour link dispatched.'}</span>
                    <span style={{ color: '#10B981', fontWeight: 700 }}>18ms</span>
                  </div>
                </div>
              )}
              {heroTab === 'json' && (
                <div style={{ color: '#CBD5E1', lineHeight: '1.5' }}>
                  <pre style={{ margin: 0 }}>{`{ "client": "Jean-Luc Moreau", "budget_eur": 1850, "qualification": 0.96, "action": "whatsapp_dispatch" }`}</pre>
                </div>
              )}
              {heroTab === 'crm' && (
                <div style={{ color: '#94A3B8', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ color: '#10B981' }}>➔ Notion CRM: Lead #4912 [Priority Qualified] CREATED</div>
                  <div style={{ color: '#F59E0B' }}>➔ Cal.com: Viewing Slot Locked for Tuesday 15:30</div>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ─── ROOMIX STYLE SIMULATOR (PADDINGS AJUSTADOS) ─── */}
      <section id="simulator" style={{ padding: '48px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', backgroundColor: '#070A12' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontFamily: 'monospace', color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
            <Sparkles width="13" height="13" />
            {t.nlBadge}
          </div>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#FFFFFF', marginBottom: '6px' }}>{t.nlTitle}</h2>
          <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '18px' }}>{t.nlDesc}</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '16px', fontFamily: 'monospace', fontSize: '11px' }}>
            <button type="button" onClick={() => loadPreset('re')} style={{ padding: '5px 12px', borderRadius: '9999px', backgroundColor: '#0B1120', border: '1px solid rgba(245, 158, 11, 0.3)', color: '#E2E8F0', cursor: 'pointer' }}>{t.preset1}</button>
            <button type="button" onClick={() => loadPreset('clinic')} style={{ padding: '5px 12px', borderRadius: '9999px', backgroundColor: '#0B1120', border: '1px solid rgba(245, 158, 11, 0.3)', color: '#E2E8F0', cursor: 'pointer' }}>{t.preset2}</button>
            <button type="button" onClick={() => loadPreset('legal')} style={{ padding: '5px 12px', borderRadius: '9999px', backgroundColor: '#0B1120', border: '1px solid rgba(245, 158, 11, 0.3)', color: '#E2E8F0', cursor: 'pointer' }}>{t.preset3}</button>
          </div>

          <div style={{ padding: '20px', borderRadius: '16px', backgroundColor: '#0B101D', border: '1px solid rgba(255, 255, 255, 0.08)', textAlign: 'left' }}>
            <textarea
              rows={2}
              value={nlQuery}
              onChange={(e) => setNlQuery(e.target.value)}
              style={{ width: '100%', backgroundColor: '#06080E', border: '1px solid #334155', borderRadius: '8px', padding: '12px', color: '#FFFFFF', fontSize: '12px', fontFamily: 'monospace', outline: 'none', resize: 'none', marginBottom: '12px' }}
            />
            <button
              type="button"
              onClick={() => loadPreset('re')}
              className="btn-interaction"
              style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#F59E0B', color: '#06080E', border: 'none', fontWeight: 800, fontSize: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'monospace' }}
            >
              <Zap width="14" height="14" />
              {t.nlBtn}
            </button>

            {nlOutput && (
              <div style={{ marginTop: '12px', padding: '14px', borderRadius: '8px', backgroundColor: '#06080E', border: '1px solid rgba(245, 158, 11, 0.4)', fontFamily: 'monospace', fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#10B981', fontWeight: 800 }}>
                  <span>✔ Parameter Extraction Verified (Score: {nlOutput.score}%)</span>
                  <span style={{ color: '#94A3B8' }}>Latency: 1.1s</span>
                </div>
                <div style={{ color: '#E2E8F0' }}>• Intent: <span style={{ color: '#F59E0B' }}>{nlOutput.intent}</span> | Budget: <span style={{ color: '#F59E0B' }}>{nlOutput.budget}</span> | Zone: <span style={{ color: '#F59E0B' }}>{nlOutput.location}</span></div>
                <div style={{ color: '#10B981', fontSize: '11px', borderTop: '1px solid #1E293B', paddingTop: '4px' }}>➔ {nlOutput.action}</div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ─── HEYFARDO FRAMEWORK (COMPACTO Y ELEGANTE) ─── */}
      <section id="framework" style={{ padding: '48px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          
          <div style={{ maxWidth: '560px', marginBottom: '32px' }}>
            <div style={{ fontSize: '11px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px', color: '#F59E0B', marginBottom: '6px' }}>{t.fardoBadge}</div>
            <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#FFFFFF', marginBottom: '6px' }}>{t.fardoTitle}</h2>
            <p style={{ fontSize: '13px', color: '#94A3B8' }}>{t.fardoDesc}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            <div style={{ padding: '20px', borderRadius: '14px', backgroundColor: '#0B101D', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontFamily: 'monospace', color: '#F59E0B', fontWeight: 800, marginBottom: '8px' }}>
                <span>PHASE 01</span>
                <span style={{ color: '#94A3B8' }}>ACTIVE</span>
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', marginBottom: '6px' }}>{t.p1Title}</h3>
              <p style={{ fontSize: '12px', color: '#94A3B8', lineHeight: 1.5, marginBottom: '14px' }}>{t.p1Desc}</p>
              <div style={{ width: '100%', height: '4px', backgroundColor: '#1E293B', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: '85%', height: '100%', backgroundColor: '#F59E0B' }} />
              </div>
            </div>

            <div style={{ padding: '20px', borderRadius: '14px', backgroundColor: '#0B101D', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontFamily: 'monospace', color: '#F59E0B', fontWeight: 800, marginBottom: '8px' }}>
                <span>PHASE 02</span>
                <span style={{ color: '#94A3B8' }}>ACTIVE</span>
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', marginBottom: '6px' }}>{t.p2Title}</h3>
              <p style={{ fontSize: '12px', color: '#94A3B8', lineHeight: 1.5, marginBottom: '14px' }}>{t.p2Desc}</p>
              <div style={{ width: '100%', height: '4px', backgroundColor: '#1E293B', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: '90%', height: '100%', backgroundColor: '#F59E0B' }} />
              </div>
            </div>

            <div style={{ padding: '20px', borderRadius: '14px', backgroundColor: '#0B101D', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontFamily: 'monospace', color: '#F59E0B', fontWeight: 800, marginBottom: '8px' }}>
                <span>PHASE 03</span>
                <span style={{ color: '#94A3B8' }}>ACTIVE</span>
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', marginBottom: '6px' }}>{t.p3Title}</h3>
              <p style={{ fontSize: '12px', color: '#94A3B8', lineHeight: 1.5, marginBottom: '14px' }}>{t.p3Desc}</p>
              <div style={{ width: '100%', height: '4px', backgroundColor: '#1E293B', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: '80%', height: '100%', backgroundColor: '#F59E0B' }} />
              </div>
            </div>

            <div style={{ padding: '20px', borderRadius: '14px', backgroundColor: '#0B101D', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontFamily: 'monospace', color: '#10B981', fontWeight: 800, marginBottom: '8px' }}>
                <span>PHASE 04</span>
                <span style={{ color: '#10B981' }}>VERIFIED</span>
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', marginBottom: '6px' }}>{t.p4Title}</h3>
              <p style={{ fontSize: '12px', color: '#94A3B8', lineHeight: 1.5, marginBottom: '14px' }}>{t.p4Desc}</p>
              <div style={{ width: '100%', height: '4px', backgroundColor: '#1E293B', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: '#10B981' }} />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── SANDBOXES (ESPACIADO COMPACTO) ─── */}
      <section id="sandboxes" style={{ padding: '48px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', backgroundColor: '#070A12' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '11px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px', color: '#F59E0B', marginBottom: '4px' }}>{t.sandBadge}</div>
              <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#FFFFFF' }}>{t.sandTitle}</h2>
            </div>

            <div style={{ display: 'flex', padding: '3px', borderRadius: '10px', backgroundColor: '#0B1120', border: '1px solid rgba(255,255,255,0.08)', fontSize: '11px', fontFamily: 'monospace' }}>
              <button type="button" onClick={() => setSandboxTab('re')} style={{ padding: '6px 14px', borderRadius: '6px', border: 'none', cursor: 'pointer', backgroundColor: sandboxTab === 're' ? '#F59E0B' : 'transparent', color: sandboxTab === 're' ? '#06080E' : '#94A3B8', fontWeight: 800 }}>Real Estate</button>
              <button type="button" onClick={() => setSandboxTab('clinic')} style={{ padding: '6px 14px', borderRadius: '6px', border: 'none', cursor: 'pointer', backgroundColor: sandboxTab === 'clinic' ? '#F59E0B' : 'transparent', color: sandboxTab === 'clinic' ? '#06080E' : '#94A3B8', fontWeight: 800 }}>Medical Triage</button>
            </div>
          </div>

          <div style={{ padding: '28px', borderRadius: '18px', backgroundColor: '#0B101D', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            {sandboxTab === 're' ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '12px', fontFamily: 'monospace' }}>
                  <input type="text" value={reForm.name} onChange={(e) => setReForm({...reForm, name: e.target.value})} style={{ width: '100%', backgroundColor: '#06080E', border: '1px solid #334155', borderRadius: '6px', padding: '10px', color: '#FFFFFF' }} />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <select value={reForm.intent} onChange={(e) => setReForm({...reForm, intent: e.target.value})} style={{ width: '100%', backgroundColor: '#06080E', border: '1px solid #334155', borderRadius: '6px', padding: '10px', color: '#FFFFFF' }}><option value="rent">Rental</option><option value="buy">Purchase</option></select>
                    <input type="text" value={reForm.budget} onChange={(e) => setReForm({...reForm, budget: e.target.value})} style={{ width: '100%', backgroundColor: '#06080E', border: '1px solid #334155', borderRadius: '6px', padding: '10px', color: '#FFFFFF' }} />
                  </div>
                  <button type="button" onClick={() => setReStep(2)} className="btn-interaction" style={{ width: '100%', padding: '12px', borderRadius: '8px', backgroundColor: '#F59E0B', color: '#06080E', border: 'none', fontWeight: 800, fontSize: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}><Zap width="14" height="14" /> Run Workflow Engine</button>
                </div>

                <div style={{ padding: '18px', borderRadius: '12px', backgroundColor: '#06080E', border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: '11px' }}>
                  {reStep === 2 ? (
                    <div style={{ color: '#E2E8F0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ color: '#10B981', fontWeight: 800 }}>✔ AI Summary Generated (Match 96%)</div>
                      <p style={{ lineHeight: 1.5 }}>&quot;{reForm.name} seeking {reForm.rooms}-bed {reForm.intent} in {reForm.location} (€{reForm.budget}). Calendar viewing link sent.&quot;</p>
                      <button type="button" onClick={() => setReStep(1)} style={{ padding: '8px', borderRadius: '6px', backgroundColor: '#1E293B', color: '#E2E8F0', border: 'none', cursor: 'pointer', alignSelf: 'flex-start' }}>Reset</button>
                    </div>
                  ) : (
                    <div style={{ textAlign: 'center', color: '#64748B', padding: '32px 0' }}>Awaiting execution...</div>
                  )}
                </div>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '12px', fontFamily: 'monospace' }}>
                  <select value={clinicForm.service} onChange={(e) => setClinicForm({...clinicForm, service: e.target.value})} style={{ width: '100%', backgroundColor: '#06080E', border: '1px solid #334155', borderRadius: '6px', padding: '10px', color: '#FFFFFF' }}><option value="Nutritional & Metabolic Health">Nutritional & Metabolic</option><option value="Dental Aesthetics">Dental Aesthetics</option></select>
                  <input type="text" value={clinicForm.symptom} onChange={(e) => setClinicForm({...clinicForm, symptom: e.target.value})} style={{ width: '100%', backgroundColor: '#06080E', border: '1px solid #334155', borderRadius: '6px', padding: '10px', color: '#FFFFFF' }} />
                  <button type="button" onClick={() => setClinicStep(2)} className="btn-interaction" style={{ width: '100%', padding: '12px', borderRadius: '8px', backgroundColor: '#F59E0B', color: '#06080E', border: 'none', fontWeight: 800, fontSize: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}><UserCheck width="14" height="14" /> Execute Triage</button>
                </div>

                <div style={{ padding: '18px', borderRadius: '12px', backgroundColor: '#06080E', border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: '11px' }}>
                  {clinicStep === 2 ? (
                    <div style={{ color: '#E2E8F0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ color: '#10B981', fontWeight: 800 }}>✔ Patient Pre-Allocated</div>
                      <p style={{ lineHeight: 1.5 }}>&quot;{clinicForm.service} slot held for {clinicForm.timeSlot}. SMS confirmation dispatched.&quot;</p>
                      <button type="button" onClick={() => setClinicStep(1)} style={{ padding: '8px', borderRadius: '6px', backgroundColor: '#1E293B', color: '#E2E8F0', border: 'none', cursor: 'pointer', alignSelf: 'flex-start' }}>Reset</button>
                    </div>
                  ) : (
                    <div style={{ textAlign: 'center', color: '#64748B', padding: '32px 0' }}>Awaiting triage input...</div>
                  )}
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ─── ROI CALCULATOR (COMPACTO) ─── */}
      <section id="roi" style={{ padding: '48px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', padding: '28px', borderRadius: '18px', backgroundColor: '#0B101D', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{ fontSize: '11px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px', color: '#F59E0B', marginBottom: '4px' }}>{t.calcBadge}</div>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px' }}>{t.calcTitle}</h2>
            <p style={{ fontSize: '12px', color: '#94A3B8' }}>{t.calcDesc}</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontFamily: 'monospace', color: '#CBD5E1', marginBottom: '8px' }}>
                <span>{t.calcSliderLabel}</span>
                <span style={{ color: '#F59E0B', fontWeight: 800, fontSize: '13px' }}>{weeklyVolume}</span>
              </div>
              <input 
                type="range" min="10" max="200" step="5" value={weeklyVolume} 
                onChange={(e) => setWeeklyVolume(Number(e.target.value))} 
                style={{ width: '100%', height: '6px', backgroundColor: '#06080E', borderRadius: '6px', outline: 'none', cursor: 'pointer', accentColor: '#F59E0B' }} 
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', textAlign: 'center' }}>
              <div style={{ padding: '14px', borderRadius: '10px', backgroundColor: '#06080E', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '10px', color: '#94A3B8', marginBottom: '4px' }}>{t.calcHours}</div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#F59E0B' }}>~{hoursSaved} hrs / mo</div>
              </div>
              <div style={{ padding: '14px', borderRadius: '10px', backgroundColor: '#06080E', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '10px', color: '#94A3B8', marginBottom: '4px' }}>{t.calcVal}</div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#10B981' }}>~€{eurosSaved.toLocaleString()} / mo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AUDIT CONTACT FORM (CALIBRADO) ─── */}
      <section id="audit" style={{ padding: '48px 24px' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', padding: '32px', borderRadius: '20px', backgroundColor: '#0B101D', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ fontSize: '11px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px', color: '#F59E0B', marginBottom: '4px' }}>{t.auditBadge}</div>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#FFFFFF', marginBottom: '6px' }}>{t.auditTitle}</h2>
            <p style={{ fontSize: '12px', color: '#94A3B8' }}>{t.auditDesc}</p>
          </div>

          {contactDone ? (
            <div style={{ padding: '24px', borderRadius: '12px', backgroundColor: '#06080E', border: '1px solid rgba(16, 185, 129, 0.4)', textAlign: 'center', fontFamily: 'monospace' }}>
              <CheckCircle2 width="32" height="32" color="#10B981" style={{ margin: '0 auto 8px auto' }} />
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px' }}>{t.auditSentTitle}</h3>
              <p style={{ fontSize: '12px', color: '#94A3B8' }}>{t.auditSentDesc}</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setContactDone(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '12px', fontFamily: 'monospace' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                <input required type="text" placeholder={t.auditName} value={contactState.name} onChange={(e) => setContactState({...contactState, name: e.target.value})} style={{ width: '100%', backgroundColor: '#06080E', border: '1px solid #334155', borderRadius: '6px', padding: '10px 12px', color: '#FFFFFF', outline: 'none' }} />
                <input required type="email" placeholder={t.auditEmail} value={contactState.email} onChange={(e) => setContactState({...contactState, email: e.target.value})} style={{ width: '100%', backgroundColor: '#06080E', border: '1px solid #334155', borderRadius: '6px', padding: '10px 12px', color: '#FFFFFF', outline: 'none' }} />
              </div>
              <textarea rows={2} placeholder={t.auditTask} value={contactState.goal} onChange={(e) => setContactState({...contactState, goal: e.target.value})} style={{ width: '100%', backgroundColor: '#06080E', border: '1px solid #334155', borderRadius: '6px', padding: '10px 12px', color: '#FFFFFF', outline: 'none', resize: 'none' }} />
              <button type="submit" className="btn-interaction" style={{ width: '100%', padding: '14px', borderRadius: '10px', backgroundColor: '#F59E0B', color: '#06080E', border: 'none', fontWeight: 800, fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <Send width="15" height="15" />
                {t.auditSubmit}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ padding: '24px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '11px', fontFamily: 'monospace', color: '#64748B', backgroundColor: '#05070E', textAlign: 'center' }}>
        <div>{t.footerCopy}</div>
      </footer>

    </div>
  );
}
