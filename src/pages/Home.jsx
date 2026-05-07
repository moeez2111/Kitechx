import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const FOUNDERS = [
  { name: 'Muqadas Sharif',       role: 'Co-Founder & Strategist', initials: 'MS' },
  { name: 'Muhammad Ashir',       role: 'CTO & Architect',      initials: 'AS' },
  { name: 'Muhammad Moeez Asim', role: 'CEO & Lead Developer', initials: 'MA' },
  { name: 'Rizwan Ameen',         role: 'COO & Project Manager', initials: 'RA' },
  { name: 'Muhammad Shoaib Aslam',role: 'Head of Design',        initials: 'SA' },
  { name: 'Suleman Anjum',        role: 'Marketing Director',    initials: 'SU' },
  
]

const FEATURED_SERVICES = [
  {
    icon: '⚡',
    label: 'MERN Stack Development',
    desc: 'Full-stack web apps with MongoDB, Express, React & Node.js — fast, scalable, modern architecture built for growth.',
    color: 'rgba(91,63,248,0.10)',
  },
  {
    icon: '📈',
    label: 'SEO Optimization',
    desc: 'Dominate search rankings with data-driven SEO strategies, technical audits, and on-page mastery that deliver real ROI.',
    color: 'rgba(0,196,154,0.10)',
  },
  {
    icon: '🎨',
    label: 'Graphics & Branding',
    desc: 'Stunning logos, brand identities, UI/UX design, and marketing visuals that convert visitors into loyal customers.',
    color: 'rgba(255,60,120,0.08)',
  },
]

export default function Home() {
  return (
    <main className="page-enter">
      {/* HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="hero">
        {/* Background Video */}
        <div className="video-background">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="video-element"
            poster="/assets/hero-fallback.jpg" // High-res image shown while video loads
          >
            <source src="/kitechx_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlays to ensure text readability */}
          <div className="video-overlay" />
          <div className="hero-pattern" />
        </div>

        <div className="hero-content">
          {/* LEFT */}
          <div className="hero-left">
            <div className="hero-tag">✦ Digital Innovation Agency — Est. 2024</div>
            <h1 className="hero-title">
              WE BUILD<br />
              <span className="highlight">TOMORROW'S</span><br />
              DIGITAL WORLD
            </h1>
            <p className="hero-subtitle">
              From code to cloud — KITECHX transforms your boldest ideas into
              powerful, scalable digital products that dominate markets across
              USA, UK, Europe &amp; the Middle East.
            </p>
            <div className="hero-actions">
              <Link to="/services" className="btn-primary">Explore Services →</Link>
              <Link to="/contact" className="btn-outline-white">Start a Project</Link>
            </div>
          </div>

          {/* RIGHT — decorative cards */}
          <div className="hero-right">
            <div className="hero-visual">
              <div className="hero-card hero-card-sm card-top">
                <div className="sm-label">Projects Done</div>
                <div className="sm-value" style={{ color: '#fff' }}>50+</div>
              </div>

              <div className="hero-card hero-card-main">
                <div className="card-icon">⚡</div>
                <h3>Full-Stack Digital Agency</h3>
                <p>Web · AI · SEO · Design · Marketing</p>
              </div>

              <div className="hero-card hero-card-sm card-bottom">
                <div className="sm-label">Happy Clients</div>
                <div className="sm-value">30+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="stats-inner">
          {[
            { n: '50+', l: 'Projects Delivered' },
            { n: '30+', l: 'Happy Clients' },
            { n: '10+', l: 'Countries Served' },
            { n: '9',   l: 'Core Services' },
            { n: '6',   l: 'Expert Founders' },
          ].map(s => (
            <div key={s.l} className="stat-item">
              <div className="stat-number">{s.n}</div>
              <div className="stat-label">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FOUNDERS SECTION */}
      <section className="founders-section">
        <div className="blob blob-purple" style={{ width: 500, height: 500, top: '50%', left: '-100px', transform: 'translateY(-50%)' }} />
        <div className="section-header" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-tag">✦ The Visionaries</div>
          <h2 className="section-title">Meet The <span>Founders</span></h2>
          <p>Six talented minds united by one mission — to build extraordinary digital experiences.</p>
        </div>

        <div className="founders-grid">
          {FOUNDERS.map((f, i) => (
            <div key={f.name} className="founder-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="founder-avatar">
                <div className="founder-initials">{f.initials}</div>
              </div>
              <div className="founder-name">{f.name}</div>
              <div className="founder-role">{f.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="home-services">
        <div className="blob blob-teal" style={{ width: 600, height: 600, right: '-150px', top: '30%' }} />
        <div className="section-header" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-tag">✦ What We Offer</div>
          <h2 className="section-title">Services That <span>Drive Growth</span></h2>
          <p>From development to marketing — we're your full-stack digital partner.</p>
        </div>

        <div className="home-services-grid" style={{ position: 'relative', zIndex: 1 }}>
          {FEATURED_SERVICES.map(s => (
            <div key={s.label} className="home-service-card">
              <div className="hs-icon-wrap" style={{ background: s.color }}>
                {s.icon}
              </div>
              <div className="hs-arrow">→</div>
              <h3>{s.label}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="explore-btn-wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Link to="/services" className="btn-outline">
            Explore All 9 Services →
          </Link>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="blob blob-purple" style={{ width: 400, height: 400, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        <div className="cta-box">
          <h2>READY TO LAUNCH?</h2>
          <p>Let's build something extraordinary together. Your vision, our execution.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-cta-white">Start Your Project →</Link>
            <Link to="/about" className="btn-cta-outline">Learn About Us</Link>
          </div>
        </div>
      </section>
    </main>
  )
}