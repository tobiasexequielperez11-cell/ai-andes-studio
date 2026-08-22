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
      heroLead: 'Replace scattered WhatsApp chats, manual spreadsheets, and delayed email replies with bespoke websites, smart intake forms, and automated team dashboards.',
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
      scopeInTitle: 'What we engineer',
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
    <div style={{ backgroundColor: '#06080E', minHeight: '100vh', color: '#F1F5F9' }}>
      
      {/* ─── NAVBAR ─── */}
      <header style={{ backgroundColor: 'rgba(6, 8, 14, 0.95)', borderBottom: '1px solid #1E293B', position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo with Explicit 36px Box */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: '#0F172A', border: '1px solid #38BDF8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 20h18L14 4l-4 7-3-4-4 13z" fill="rgba(56, 189, 248, 0.15)" />
                <path d="M14 4l7 16H3l4-13 3 4 4-7z" />
                <circle cx="14" cy="4" r="1.5" fill="#38BDF8" stroke="none" />
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 700, fontSize: 16, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: 6 }}>
                AI Andes <span style={{ color: '#38BDF8', fontSize: 10, padding: '2px 6px', borderRadius: 4, backgroundColor: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.3)', fontFamily: 'monospace', fontWeight: 700 }}>STUDIO</span>
              </span>
              <span style={{ fontSize: 10, color: '#94A3B8', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: 1 }}>Systems & Automations</span>
            </div>
          </div>

          {/* Links */}
          <nav style={{ display: 'none', alignItems: 'center', gap: 24, fontSize: 12, fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: 1 }} className="md:flex">
            <a href="#architecture" style={{ color: '#94A3B8', textDecoration: 'none' }}>{t.navServices}</a>
            <a href="#sandboxes" style={{ color: '#94A3B8', textDecoration: 'none' }}>{t.navDemos}</a>
            <a href="#outcomes" style={{ color: '#94A3B8', textDecoration: 'none' }}>{t.navCases}</a>
            <a href="#roi" style={{ color: '#94A3B8', textDecoration: 'none' }}>{t.navCalc}</a>
            <a href="#scope" style={{ color: '#94A3B8', textDecoration: 'none' }}>{t.navScope}</a>
          </nav>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', padding: 4, borderRadius: 8, backgroundColor: '#0F172A', border: '1px solid #1E293B', fontSize: 12, fontFamily: 'monospace' }}>
              <button 
                type="button" 
                onClick={() => setLang('en')}
                style={{ padding: '4px 10px', borderRadius: 6, border: 'none', cursor: 'pointer', backgroundColor: lang === 'en' ? '#38BDF8' : 'transparent', color: lang === 'en' ? '#0F172A' : '#94A3B8', fontWeight: lang === 'en' ? 700 : 500 }}
              >
                ENG
              </button>
              <button 
                type="button" 
                onClick={() => setLang('es')}
                style={{ padding: '4px 10px', borderRadius: 6, border: 'none', cursor: 'pointer', backgroundColor: lang === 'es' ? '#38BDF8' : 'transparent', color: lang === 'es' ? '#0F172A' : '#94A3B8', fontWeight: lang === 'es' ? 700 : 500 }}
              >
                ESP
              </button>
            </div>

            <a 
              href="#audit"
              style={{ padding: '8px 16px', borderRadius: 8, backgroundColor: '#38BDF8', color: '#090D16', fontWeight: 700, fontSize: 12, textDecoration: 'none', textTransform: 'uppercase', fontFamily: 'monospace', display: 'none' }}
              className="sm:inline-block"
            >
              {t.navCta}
            </a>
          </div>

        </div>
      </header>

      {/* ─── HERO SECTION ─── */}
      <section style={{ padding: '80px 24px 64px 24px', borderBottom: '1px solid #1E293B', textAlign: 'center' }}>
        <div style={{ maxWidth: 896, margin: '0 auto' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 9999, border: '1px solid rgba(56, 189, 248, 0.3)', backgroundColor: 'rgba(56, 189, 248, 0.05)', fontSize: 12, fontFamily: 'monospace', color: '#38BDF8', marginBottom: 24 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#38BDF8', display: 'inline-block' }} />
            {t.badge}
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, lineHeight: 1.15, color: '#FFFFFF', marginBottom: 24, letterSpacing: -1 }}>
            {t.h1_1}<span style={{ color: '#38BDF8' }}>{t.h1_accent}</span>{t.h1_2}
          </h1>

          <p style={{ fontSize: 18, color: '#94A3B8', maxWidth: 672, margin: '0 auto 40px auto', lineHeight: 1.6 }}>
            {t.heroLead}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 56 }}>
            <a 
              href="#audit"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 28px', borderRadius: 12, backgroundColor: '#38BDF8', color: '#090D16', fontWeight: 700, fontSize: 14, textDecoration: 'none', boxShadow: '0 0 24px rgba(56, 189, 248, 0.35)' }}
            >
              {t.btnAudit}
              <ArrowRight width="16" height="16" />
            </a>
            <a 
              href="#sandboxes"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 28px', borderRadius: 12, backgroundColor: '#0F172A', border: '1px solid #334155', color: '#E2E8F0', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}
            >
              {t.btnDemos}
            </a>
          </div>

          {/* Interactive Pipeline Visualizer */}
          <div style={{ padding: 24, borderRadius: 16, backgroundColor: '#0B0F19', border: '1px solid #1E293B', textAlign: 'left', maxWidth: 800, margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 16, borderBottom: '1px solid #1E293B', fontSize: 12, fontFamily: 'monospace', color: '#94A3B8', marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, color: '#FFFFFF' }}>
                <Workflow width="16" height="16" color="#38BDF8" />
                Live Workflow Execution Blueprint
              </div>
              <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 4, backgroundColor: '#0F172A', color: '#38BDF8', border: '1px solid rgba(56,189,248,0.3)' }}>
                Simulated Latency: ~1.2s
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, fontFamily: 'monospace', fontSize: 12 }}>
              <button 
                type="button" 
                onClick={() => setHeroStep(1)}
                style={{ padding: 16, borderRadius: 12, border: heroStep === 1 ? '1px solid #38BDF8' : '1px solid #1E293B', backgroundColor: heroStep === 1 ? 'rgba(56, 189, 248, 0.1)' : '#070A11', textAlign: 'left', cursor: 'pointer' }}
              >
                <div style={{ fontSize: 10, color: '#38BDF8', fontWeight: 700, marginBottom: 4 }}>NODE 01</div>
                <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: 13 }}>{t.pStep1}</div>
                <div style={{ fontSize: 11, color: '#94A3B8', marginTop: 4 }}>{t.pStep1Sub}</div>
              </button>

              <button 
                type="button" 
                onClick={() => setHeroStep(2)}
                style={{ padding: 16, borderRadius: 12, border: heroStep === 2 ? '1px solid #38BDF8' : '1px solid #1E293B', backgroundColor: heroStep === 2 ? 'rgba(56, 189, 248, 0.1)' : '#070A11', textAlign: 'left', cursor: 'pointer' }}
              >
                <div style={{ fontSize: 10, color: '#38BDF8', fontWeight: 700, marginBottom: 4 }}>NODE 02</div>
                <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: 13 }}>{t.pStep2}</div>
                <div style={{ fontSize: 11, color: '#94A3B8', marginTop: 4 }}>{t.pStep2Sub}</div>
              </button>

              <button 
                type="button" 
                onClick={() => setHeroStep(3)}
                style={{ padding: 16, borderRadius: 12, border: heroStep === 3 ? '1px solid #38BDF8' : '1px solid #1E293B', backgroundColor: heroStep === 3 ? 'rgba(56, 189, 248, 0.1)' : '#070A11', textAlign: 'left', cursor: 'pointer' }}
              >
                <div style={{ fontSize: 10, color: '#38BDF8', fontWeight: 700, marginBottom: 4 }}>NODE 03</div>
                <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: 13 }}>{t.pStep3}</div>
                <div style={{ fontSize: 11, color: '#94A3B8', marginTop: 4 }}>{t.pStep3Sub}</div>
              </button>
            </div>

            <div style={{ marginTop: 16, padding: 12, borderRadius: 8, backgroundColor: '#070A11', border: '1px solid #1E293B', fontFamily: 'monospace', fontSize: 12, color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block', flexShrink: 0 }} />
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
      <section id="architecture" style={{ padding: '80px 24px', borderBottom: '1px solid #1E293B' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto' }}>
          <div style={{ maxWidth: 576, marginBottom: 48 }}>
            <div style={{ fontSize: 12, fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: 1, color: '#38BDF8', marginBottom: 8 }}>{t.archBadge}</div>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: '#FFFFFF', marginBottom: 8 }}>{t.archTitle}</h2>
            <p style={{ fontSize: 14, color: '#94A3B8' }}>{t.archDesc}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            <div style={{ padding: 32, borderRadius: 16, backgroundColor: '#0B0F19', border: '1px solid #1E293B', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.3)', color: '#38BDF8', fontFamily: 'monospace', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  01
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#FFFFFF', marginBottom: 8 }}>{t.step1Title}</h3>
                <p style={{ fontSize: 13, color: '#94A3B8', lineHeight: 1.6, marginBottom: 24 }}>{t.step1Desc}</p>
              </div>
              <div style={{ fontSize: 12, fontFamily: 'monospace', color: '#38BDF8', display: 'flex', alignItems: 'center', gap: 8, paddingTop: 16, borderTop: '1px solid #1E293B' }}>
                <Check width="14" height="14" /> High-speed conversion front-end
              </div>
            </div>

            <div style={{ padding: 32, borderRadius: 16, backgroundColor: '#0B0F19', border: '1px solid #1E293B', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.3)', color: '#38BDF8', fontFamily: 'monospace', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  02
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#FFFFFF', marginBottom: 8 }}>{t.step2Title}</h3>
                <p style={{ fontSize: 13, color: '#94A3B8', lineHeight: 1.6, marginBottom: 24 }}>{t.step2Desc}</p>
              </div>
              <div style={{ fontSize: 12, fontFamily: 'monospace', color: '#38BDF8', display: 'flex', alignItems: 'center', gap: 8, paddingTop: 16, borderTop: '1px solid #1E293B' }}>
                <Check width="14" height="14" /> Zero manual sorting needed
              </div>
            </div>

            <div style={{ padding: 32, borderRadius: 16, backgroundColor: '#0B0F19', border: '1px solid #1E293B', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.3)', color: '#38BDF8', fontFamily: 'monospace', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  03
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#FFFFFF', marginBottom: 8 }}>{t.step3Title}</h3>
                <p style={{ fontSize: 13, color: '#94A3B8', lineHeight: 1.6, marginBottom: 24 }}>{t.step3Desc}</p>
              </div>
              <div style={{ fontSize: 12, fontFamily: 'monospace', color: '#38BDF8', display: 'flex', alignItems: 'center', gap: 8, paddingTop: 16, borderTop: '1px solid #1E293B' }}>
                <Check width="14" height="14" /> Real-time operational dispatch
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE SANDBOX ─── */}
      <section id="sandboxes" style={{ padding: '80px 24px', borderBottom: '1px solid #1E293B', backgroundColor: '#080C14' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto' }}>
          
          <div style={{ maxWidth: 576, marginBottom: 48 }}>
            <div style={{ fontSize: 12, fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: 1, color: '#38BDF8', marginBottom: 8 }}>{t.sandBadge}</div>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: '#FFFFFF', marginBottom: 8 }}>{t.sandTitle}</h2>
            <p style={{ fontSize: 14, color: '#94A3B8' }}>{t.sandDesc}</p>
          </div>

          <div style={{ padding: 32, borderRadius: 20, backgroundColor: '#0B0F19', border: '1px solid #1E293B', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
              
              {/* Form Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'monospace', fontSize: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 12, borderBottom: '1px solid #1E293B', fontWeight: 700, color: '#FFFFFF' }}>
                  <span style={{ color: '#38BDF8', textTransform: 'uppercase', letterSpacing: 1 }}>Inbound Customer Intake</span>
                  <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 4, backgroundColor: '#0F172A', color: '#94A3B8' }}>Live Component</span>
                </div>

                <div>
                  <label style={{ color: '#94A3B8', display: 'block', marginBottom: 6 }}>Client Full Name</label>
                  <input 
                    type="text" 
                    value={reForm.name} 
                    onChange={(e) => setReForm({...reForm, name: e.target.value})}
                    style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: 8, padding: 10, color: '#FFFFFF', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div>
                    <label style={{ color: '#94A3B8', display: 'block', marginBottom: 6 }}>Intent</label>
                    <select 
                      value={reForm.intent} 
                      onChange={(e) => setReForm({...reForm, intent: e.target.value})}
                      style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: 8, padding: 10, color: '#FFFFFF', outline: 'none' }}
                    >
                      <option value="rent">Property Rental</option>
                      <option value="buy">Property Purchase</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ color: '#94A3B8', display: 'block', marginBottom: 6 }}>Budget (€)</label>
                    <input 
                      type="text" 
                      value={reForm.budget} 
                      onChange={(e) => setReForm({...reForm, budget: e.target.value})}
                      style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: 8, padding: 10, color: '#FFFFFF', outline: 'none' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div>
                    <label style={{ color: '#94A3B8', display: 'block', marginBottom: 6 }}>Bedrooms</label>
                    <select 
                      value={reForm.rooms} 
                      onChange={(e) => setReForm({...reForm, rooms: e.target.value})}
                      style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: 8, padding: 10, color: '#FFFFFF', outline: 'none' }}
                    >
                      <option value="1">1 Bed</option>
                      <option value="2">2 Beds</option>
                      <option value="3+">3+ Beds</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ color: '#94A3B8', display: 'block', marginBottom: 6 }}>Target Zone</label>
                    <input 
                      type="text" 
                      value={reForm.location} 
                      onChange={(e) => setReForm({...reForm, location: e.target.value})}
                      style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: 8, padding: 10, color: '#FFFFFF', outline: 'none' }}
                    />
                  </div>
                </div>

                <button 
                  type="button" 
                  onClick={() => setReStep(2)}
                  style={{ width: '100%', padding: '14px', borderRadius: 10, backgroundColor: '#38BDF8', color: '#090D16', border: 'none', fontWeight: 700, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 8 }}
                >
                  <Zap width="16" height="16" />
                  Process Inquiry & Generate AI Brief
                </button>
              </div>

              {/* Output Column */}
              <div style={{ padding: 24, borderRadius: 16, backgroundColor: '#070A11', border: '1px solid #1E293B', fontFamily: 'monospace', fontSize: 12, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 12, borderBottom: '1px solid #1E293B', fontWeight: 700 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#FFFFFF' }}>
                    <Terminal width="16" height="16" color="#38BDF8" />
                    Workflow Engine State
                  </div>
                  <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 4, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10B981', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                    Active
                  </span>
                </div>

                {reStep === 2 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div style={{ padding: 16, borderRadius: 10, backgroundColor: '#0F172A', border: '1px solid rgba(56, 189, 248, 0.3)', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#38BDF8', fontWeight: 700 }}>
                        <span>AI Executive Brief</span>
                        <span style={{ fontSize: 10, color: '#10B981' }}>Match 96%</span>
                      </div>
                      <p style={{ color: '#E2E8F0', lineHeight: 1.5, fontSize: 12 }}>
                        &quot;{reForm.name} is seeking a {reForm.rooms}-bedroom {reForm.intent} in {reForm.location} (Budget: €{reForm.budget}). Matched 3 active units. Auto-invite for viewing dispatched.&quot;
                      </p>
                    </div>

                    <div style={{ padding: 12, borderRadius: 8, backgroundColor: 'rgba(15, 23, 42, 0.5)', border: '1px solid #1E293B', fontSize: 11, color: '#94A3B8', display: 'flex', flexDirection: 'column', gap: 4 }}>
                      <div>➔ Notion Database: Row created with tag [Urgent Followup]</div>
                      <div>➔ Calendar Link: Proposed viewing timeslot generated</div>
                      <div>➔ Agent Alert: Push notification sent to mobile</div>
                    </div>

                    <button 
                      type="button" 
                      onClick={() => setReStep(1)}
                      style={{ width: '100%', padding: '10px', borderRadius: 8, backgroundColor: '#1E293B', color: '#E2E8F0', border: 'none', fontSize: 12, cursor: 'pointer' }}
                    >
                      Reset Scenario
                    </button>
                  </div>
                ) : (
                  <div style={{ padding: '48px 0', textAlign: 'center', color: '#64748B', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                    <Workflow width="32" height="32" stroke="#475569" />
                    <p>Click &quot;Process Inquiry&quot; to test the live classification stream.</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── ROI CALCULATOR ─── */}
      <section id="roi" style={{ padding: '80px 24px', borderBottom: '1px solid #1E293B' }}>
        <div style={{ maxWidth: 768, margin: '0 auto', padding: 36, borderRadius: 20, backgroundColor: '#0B0F19', border: '1px solid #1E293B', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
          <div style={{ textAlign: 'center', maxWidth: 576, margin: '0 auto 32px auto' }}>
            <div style={{ fontSize: 12, fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: 1, color: '#38BDF8', marginBottom: 8 }}>{t.calcBadge}</div>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: '#FFFFFF', marginBottom: 8 }}>{t.calcTitle}</h2>
            <p style={{ fontSize: 13, color: '#94A3B8' }}>{t.calcDesc}</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 512, margin: '0 auto' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 12, fontFamily: 'monospace', color: '#CBD5E1', marginBottom: 8 }}>
                <span>{t.calcSliderLabel}</span>
                <span style={{ color: '#38BDF8', fontWeight: 700, fontSize: 14, padding: '4px 10px', backgroundColor: '#070A11', borderRadius: 6, border: '1px solid #1E293B' }}>{inquiriesPerWeek}</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="200" 
                step="5"
                value={inquiriesPerWeek}
                onChange={(e) => setInquiriesPerWeek(Number(e.target.value))}
                style={{ width: '100%', height: 6, backgroundColor: '#070A11', borderRadius: 8, outline: 'none', cursor: 'pointer', accentColor: '#38BDF8' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, fontFamily: 'monospace', color: '#64748B', marginTop: 6 }}>
                <span>10 / wk</span>
                <span>100 / wk</span>
                <span>200+ / wk</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, paddingTop: 16, borderTop: '1px solid #1E293B', fontFamily: 'monospace', textAlign: 'center' }}>
              <div style={{ padding: 16, borderRadius: 12, backgroundColor: '#070A11', border: '1px solid #1E293B' }}>
                <div style={{ fontSize: 11, color: '#94A3B8', marginBottom: 4 }}>{t.calcHoursTitle}</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: '#38BDF8' }}>~{hoursSavedMonth} <span style={{ fontSize: 12, color: '#64748B', fontWeight: 400 }}>hrs / mo</span></div>
              </div>
              <div style={{ padding: 16, borderRadius: 12, backgroundColor: '#070A11', border: '1px solid #1E293B' }}>
                <div style={{ fontSize: 11, color: '#94A3B8', marginBottom: 4 }}>{t.calcValTitle}</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: '#10B981' }}>~€{estimatedCostSaved.toLocaleString()} <span style={{ fontSize: 12, color: '#64748B', fontWeight: 400 }}>/ mo</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AUDIT CONTACT FORM ─── */}
      <section id="audit" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', padding: 36, borderRadius: 20, backgroundColor: '#0B0F19', border: '1px solid #1E293B', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ fontSize: 12, fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: 1, color: '#38BDF8', marginBottom: 8 }}>{t.auditBadge}</div>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: '#FFFFFF', marginBottom: 8 }}>{t.auditTitle}</h2>
            <p style={{ fontSize: 13, color: '#94A3B8', lineHeight: 1.6 }}>{t.auditDesc}</p>
          </div>

          {contactSent ? (
            <div style={{ padding: 24, borderRadius: 12, backgroundColor: '#070A11', border: '1px solid rgba(16, 185, 129, 0.3)', textAlign: 'center', fontFamily: 'monospace' }}>
              <CheckCircle2 width="32" height="32" color="#10B981" style={{ margin: '0 auto 12px auto' }} />
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#FFFFFF', marginBottom: 4 }}>{t.auditSentTitle}</h3>
              <p style={{ fontSize: 12, color: '#94A3B8' }}>{t.auditSentDesc}</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setContactSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: 12, fontFamily: 'monospace' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                <div>
                  <label style={{ color: '#94A3B8', display: 'block', marginBottom: 6 }}>{t.auditName}</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="e.g. Jean-Luc Moreau"
                    value={contactState.name}
                    onChange={(e) => setContactState({...contactState, name: e.target.value})}
                    style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: 8, padding: 12, color: '#FFFFFF', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ color: '#94A3B8', display: 'block', marginBottom: 6 }}>{t.auditEmail}</label>
                  <input 
                    required 
                    type="email" 
                    placeholder="jeanluc@firm.lu"
                    value={contactState.email}
                    onChange={(e) => setContactState({...contactState, email: e.target.value})}
                    style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: 8, padding: 12, color: '#FFFFFF', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                <div>
                  <label style={{ color: '#94A3B8', display: 'block', marginBottom: 6 }}>{t.auditCompany}</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Moreau Real Estate"
                    value={contactState.company}
                    onChange={(e) => setContactState({...contactState, company: e.target.value})}
                    style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: 8, padding: 12, color: '#FFFFFF', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ color: '#94A3B8', display: 'block', marginBottom: 6 }}>{t.auditWebsite}</label>
                  <input 
                    type="text" 
                    placeholder="https://moreau.lu"
                    value={contactState.website}
                    onChange={(e) => setContactState({...contactState, website: e.target.value})}
                    style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: 8, padding: 12, color: '#FFFFFF', outline: 'none' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ color: '#94A3B8', display: 'block', marginBottom: 6 }}>{t.auditTask}</label>
                <textarea 
                  rows={3}
                  placeholder="e.g. Inquiries arrive manually via email and WhatsApp. We spend too much time sorting budgets and manually booking appointments."
                  value={contactState.goal}
                  onChange={(e) => setContactState({...contactState, goal: e.target.value})}
                  style={{ width: '100%', backgroundColor: '#070A11', border: '1px solid #334155', borderRadius: 8, padding: 12, color: '#FFFFFF', outline: 'none' }}
                />
              </div>

              <button 
                type="submit"
                style={{ width: '100%', padding: '16px', borderRadius: 10, backgroundColor: '#38BDF8', color: '#090D16', border: 'none', fontWeight: 700, fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 8 }}
              >
                <Send width="16" height="16" />
                {t.auditSubmit}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ padding: '32px 24px', borderTop: '1px solid #1E293B', fontSize: 12, fontFamily: 'monospace', color: '#64748B', backgroundColor: '#05070B' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <div>{t.footerCopy}</div>
          <div style={{ color: '#94A3B8' }}>Luxembourg · Switzerland · Belgium · Global B2B</div>
        </div>
      </footer>

    </div>
  );
}
