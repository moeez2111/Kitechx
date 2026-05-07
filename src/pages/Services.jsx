import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

const SERVICES = [
  {
    icon: '⚡',
    emoji: '🖥️',
    label: 'MERN Stack Development',
    category: 'Web Development',
    desc: 'Full-stack web apps built with MongoDB, Express, React & Node.js — fast, scalable, and modern. We architect solutions that grow with your business.',
    features: ['Custom React SPA & dashboards', 'RESTful & GraphQL APIs', 'MongoDB database design', 'Real-time features with Socket.io'],
    color: 'rgba(91,63,248,0.10)',
    bg: 'linear-gradient(135deg, #f0eeff 0%, #e8e0ff 100%)',
    imgBg: 'linear-gradient(145deg, #ede8ff, #d8d0ff)',
  },
  {
    icon: '📈',
    emoji: '📊',
    label: 'SEO Optimization',
    category: 'Digital Marketing',
    desc: 'Dominate search rankings with our data-driven SEO strategies. From technical audits to link building — we deliver measurable organic growth.',
    features: ['Technical SEO audits', 'On-page & off-page optimization', 'Keyword research & strategy', 'Monthly analytics reporting'],
    color: 'rgba(0,196,154,0.10)',
    bg: 'linear-gradient(135deg, #e6fff9 0%, #d0fff0 100%)',
    imgBg: 'linear-gradient(145deg, #e0fff6, #c8ffec)',
  },
  {
    icon: '🎨',
    emoji: '✏️',
    label: 'Graphics & Branding',
    category: 'Design',
    desc: 'Stunning logos, brand identities, UI/UX design, and marketing visuals that make your brand unforgettable and convert visitors into customers.',
    features: ['Logo & brand identity', 'UI/UX prototyping', 'Social media design kits', 'Print & marketing collateral'],
    color: 'rgba(255,60,120,0.08)',
    bg: 'linear-gradient(135deg, #fff0f5 0%, #ffe0ec 100%)',
    imgBg: 'linear-gradient(145deg, #ffe8f0, #ffd0e5)',
  },
  {
    icon: '🎬',
    emoji: '🎞️',
    label: 'AI Animated Videos',
    category: 'Video Production',
    desc: 'Next-gen animated explainer videos and product demos powered by cutting-edge AI tools — crafted to convert, captivate, and communicate.',
    features: ['AI-generated animations', 'Professional voiceovers', 'Product explainer videos', 'Social media video ads'],
    color: 'rgba(245,166,35,0.10)',
    bg: 'linear-gradient(135deg, #fffbea 0%, #fff3cc 100%)',
    imgBg: 'linear-gradient(145deg, #fff8e0, #fff0c0)',
  },
  {
    icon: '🔧',
    emoji: '⚙️',
    label: 'PHP & Laravel Development',
    category: 'Backend Development',
    desc: 'Robust, enterprise-grade backend systems and RESTful APIs using PHP & Laravel. Secure, scalable, and perfectly architected for your needs.',
    features: ['Custom Laravel applications', 'CRM & ERP systems', 'Payment gateway integration', 'Admin panels & dashboards'],
    color: 'rgba(91,63,248,0.08)',
    bg: 'linear-gradient(135deg, #f4f0ff 0%, #ebe4ff 100%)',
    imgBg: 'linear-gradient(145deg, #ece8ff, #ddd6ff)',
  },
  {
    icon: '🌐',
    emoji: '💻',
    label: 'WordPress Websites',
    category: 'CMS Development',
    desc: 'Beautiful, fast, and SEO-optimized WordPress websites for any business — from portfolio sites to full e-commerce stores with WooCommerce.',
    features: ['Custom theme development', 'WooCommerce stores', 'Plugin development', 'Speed & performance optimization'],
    color: 'rgba(0,196,154,0.08)',
    bg: 'linear-gradient(135deg, #e8fff8 0%, #d5ffe f 100%)',
    imgBg: 'linear-gradient(145deg, #e0fff8, #ccffee)',
  },
  {
    icon: '☁️',
    emoji: '🚀',
    label: 'Deployment & DevOps',
    category: 'Cloud Infrastructure',
    desc: 'Seamless cloud deployment on AWS, Vercel, and DigitalOcean with CI/CD pipelines, auto-scaling, and 99.9% uptime monitoring.',
    features: ['AWS & DigitalOcean setup', 'CI/CD pipeline automation', 'Docker & container deployment', '24/7 uptime monitoring'],
    color: 'rgba(107,143,255,0.10)',
    bg: 'linear-gradient(135deg, #eef2ff 0%, #e2e9ff 100%)',
    imgBg: 'linear-gradient(145deg, #e8eeff, #d8e4ff)',
  },
  {
    icon: '🛡️',
    emoji: '🔒',
    label: 'Maintenance & Security',
    category: 'Support',
    desc: 'Continuous website monitoring, security hardening, updates, and backups — so you can focus on your business while we keep you protected.',
    features: ['Monthly security audits', 'Automated backups', 'Performance monitoring', 'Bug fixes & updates'],
    color: 'rgba(255,60,120,0.07)',
    bg: 'linear-gradient(135deg, #fff4f7 0%, #ffe8ee 100%)',
    imgBg: 'linear-gradient(145deg, #ffeaf0, #ffd8e6)',
  },
  {
    icon: '📣',
    emoji: '📱',
    label: 'Social Media Marketing',
    category: 'Marketing',
    desc: 'Strategic content creation, paid ads management, and growth hacking across all major platforms — turning followers into customers.',
    features: ['Content strategy & creation', 'Paid social campaigns', 'Community management', 'Analytics & reporting'],
    color: 'rgba(245,166,35,0.08)',
    bg: 'linear-gradient(135deg, #fffaea 0%, #fff5d0 100%)',
    imgBg: 'linear-gradient(145deg, #fff8e0, #fff2c0)',
  },
]

const WHY_POINTS = [
  { icon: '🎯', title: 'Results-Driven Approach', desc: 'Every decision is backed by data and geared toward measurable outcomes for your business.' },
  { icon: '⚡', title: 'Rapid Delivery', desc: 'Agile sprints with weekly updates — we move fast without sacrificing quality.' },
  { icon: '🤝', title: 'Dedicated Team', desc: 'A dedicated point of contact and expert team assigned to every project.' },
  { icon: '🔍', title: 'Full Transparency', desc: 'Live dashboards, regular reports, and zero surprises. You are always in the loop.' },
]

const PROCESS = [
  { icon: '🔍', title: 'Discovery', desc: 'Goals, audience, and requirements.', n: '01' },
  { icon: '✏️', title: 'Design', desc: 'Wireframes & UI/UX prototypes.', n: '02' },
  { icon: '⚙️', title: 'Develop', desc: 'Agile sprints, weekly demos.', n: '03' },
  { icon: '🧪', title: 'Test', desc: 'QA, performance & security.', n: '04' },
  { icon: '🚀', title: 'Deploy', desc: 'Launch with CI/CD & monitoring.', n: '05' },
]

const TICKER_ITEMS = [
  'MERN STACK', '◆', 'SEO MASTERY', '◆', 'AI VIDEOS', '◆', 'BRANDING', '◆',
  'LARAVEL', '◆', 'WORDPRESS', '◆', 'DEVOPS', '◆', 'SOCIAL MEDIA', '◆',
  'MERN STACK', '◆', 'SEO MASTERY', '◆', 'AI VIDEOS', '◆', 'BRANDING', '◆',
  'LARAVEL', '◆', 'WORDPRESS', '◆', 'DEVOPS', '◆', 'SOCIAL MEDIA', '◆',
]

export default function Services() {
  return (
    <main className="page-enter">
      {/* HERO */}
      <section className="services-hero">
        <div className="video-background">
          <video autoPlay loop muted playsInline className="hero-video">
          
            <source src="/services.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>
        <div className="services-hero-pattern" />
        <div className="services-hero-gradient" />
        <div className="services-hero-content">
          <div className="section-tag">✦ Our Expertise</div>
          <h1>Services That <span>Transform</span> Businesses</h1>
          <p>
            From full-stack development to AI-powered videos — KITECHX is your
            end-to-end digital partner. Nine specialized services, one unified vision.
          </p>
        </div>
      </section>

      {/* TICKER */}
      <div className="services-ticker-strip">
        <div className="services-ticker">
          {TICKER_ITEMS.map((item, i) => (
            <span key={i} className={item === '◆' ? 'ticker-sep' : ''}>{item}</span>
          ))}
        </div>
      </div>

      {/* SERVICES GRID */}
      <section className="services-main">
        <div className="section-header">
          <div className="section-tag">✦ What We Deliver</div>
          <h2 className="section-title">Nine Services, <span>One Agency</span></h2>
          <p>Each service is led by specialists with proven track records — no generalists, no compromises.</p>
        </div>

        <div className="services-grid">
          {SERVICES.map(s => (
            <div key={s.label} className="svc-card">
              {/* IMAGE AREA */}
              <div className="svc-image-wrap">
                <div className="svc-image-bg" style={{ background: s.imgBg }}>
                  <span style={{ fontSize: '6rem' }}>{s.emoji}</span>
                </div>
                <div className="svc-image-overlay" />
                <span className="svc-image-tag">{s.category}</span>
              </div>

              {/* BODY */}
              <div className="svc-body">
                <div className="svc-icon-row">
                  <div className="svc-icon" style={{ background: s.color }}>
                    {s.icon}
                  </div>
                  <span className="svc-category">{s.category}</span>
                </div>

                <h3>{s.label}</h3>
                <p>{s.desc}</p>

                <div className="svc-features">
                  {s.features.map(f => (
                    <div key={f} className="svc-feature">
                      <span className="svc-feature-dot" />
                      {f}
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="svc-cta">
                  Get a Quote →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="why-section">
        <div className="blob blob-purple" style={{ width: 500, height: 500, top: '50%', right: '-100px', transform: 'translateY(-50%)' }} />
        <div className="why-grid">
          <div className="why-left" style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-tag">✦ Why Choose Us</div>
            <h2>Built For <span>Results</span>, Not Just Deliverables</h2>
            <p>
              We don't just ship code and designs. We build long-term digital
              partnerships that deliver measurable impact for your business —
              from day one through every milestone.
            </p>
            <div className="why-points">
              {WHY_POINTS.map(wp => (
                <div key={wp.title} className="why-point">
                  <div className="why-point-icon">{wp.icon}</div>
                  <div className="why-point-text">
                    <h4>{wp.title}</h4>
                    <p>{wp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="why-right" style={{ position: 'relative', zIndex: 1 }}>
            <div className="why-stat-card">
              <div className="why-stat-num">100%</div>
              <div className="why-stat-label">Client Satisfaction Rate</div>
            </div>
            <div className="why-stat-card">
              <div className="why-stat-num">50+</div>
              <div className="why-stat-label">Projects Delivered</div>
            </div>
            <div className="why-stat-card">
              <div className="why-stat-num">10+</div>
              <div className="why-stat-label">Countries Served</div>
            </div>
            <div className="why-stat-card" style={{ gridColumn: '1/-1' }}>
              <div style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>🏆</div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', color: 'rgba(255,255,255,0.95)', marginBottom: '0.4rem' }}>
                Award-Worthy Work
              </div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
                Every project is crafted with the precision and ambition of an award entry.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section">
        <div className="section-header">
          <div className="section-tag">✦ How We Work</div>
          <h2 className="section-title">Our Battle-Tested <span>Process</span></h2>
          <p>A disciplined, transparent workflow that consistently delivers exceptional results on time.</p>
        </div>
        <div className="process-steps">
          {PROCESS.map(s => (
            <div key={s.title} className="process-step">
              <div className="step-circle">{s.icon}</div>
              <div className="step-num">{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <Link to="/contact" className="btn-primary">Start a Project →</Link>
        </div>
      </section>
    </main>
  )
}