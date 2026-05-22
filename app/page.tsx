'use client'

const G = '#7DC400'
const B = '#0A0A0A'
const DARK = '#111111'

// ── Navbar ──────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, borderBottom: '1px solid #1a1a1a', background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(12px)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 2, fontWeight: 900, fontSize: 20, letterSpacing: '-0.5px' }}>
          <span style={{ color: '#fff' }}>Solo</span>
          <span className="live-dot" style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: G, margin: '0 2px' }} />
          <span style={{ color: G }}>AI</span>
        </div>
        {/* Nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden md:flex">
          {[
            ['Solutions', '#solutions'],
            ['Pricing', '#pricing'],
            ['Become Agent', '#agent'],
            ['Contact', '#contact'],
          ].map(([label, href]) => (
            <a key={label} href={href} style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}>
              {label}
            </a>
          ))}
        </div>
        {/* CTA */}
        <a href="#contact" className="btn-primary" style={{ padding: '9px 20px', borderRadius: 999, background: G, color: '#000', fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-block' }}>
          Get Started
        </a>
      </div>
    </nav>
  )
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 24px 80px', position: 'relative', overflow: 'hidden' }}>
      {/* BG glow */}
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(125,196,0,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Badge */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 999, border: '1px solid rgba(125,196,0,0.35)', background: 'rgba(125,196,0,0.07)', marginBottom: 32 }}>
        <span className="live-dot" style={{ display: 'inline-block', width: 7, height: 7, borderRadius: '50%', background: G }} />
        <span style={{ color: G, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>Malaysia&apos;s AI Empire for SME</span>
      </div>

      {/* Main headline */}
      <h1 style={{ fontSize: 'clamp(42px, 7vw, 88px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-3px', marginBottom: 24, maxWidth: 900 }}>
        AI Made <span style={{ color: G }}>Simple</span>.<br />
        Business Made <span style={{ color: G }}>Better</span>.
      </h1>

      {/* EN subtitle */}
      <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: 'rgba(255,255,255,0.55)', marginBottom: 8, maxWidth: 560, lineHeight: 1.7 }}>
        24/7 AI workers for Malaysian SMEs — handling WhatsApp, bookings, staff commissions &amp; analytics while you sleep.
      </p>

      {/* ZH subtitle */}
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.28)', marginBottom: 40, letterSpacing: 0.5 }}>
        让 AI 帮你工作。你专心做生意。
      </p>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="#solutions" className="btn-primary" style={{ padding: '14px 28px', borderRadius: 999, background: G, color: '#000', fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          See It in Action →
        </a>
        <a href="#agent" className="btn-outline" style={{ padding: '14px 28px', borderRadius: 999, border: '1.5px solid rgba(255,255,255,0.2)', color: '#fff', fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-block' }}>
          Become an Agent
        </a>
      </div>
    </section>
  )
}

// ── Ticker ────────────────────────────────────────────────────────────────────
const TICKER_ITEMS = [
  '6 Live Systems', 'WhatsApp AI 24/7', '1,744 Real Customers',
  'Saloon', 'Durian', 'Campus', 'Tourism', 'Built for Malaysia SME',
  'Southeast Asia Vision', 'AI Made Simple', 'Business Made Better',
]

function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]
  return (
    <div style={{ background: B, borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a', padding: '14px 0', overflow: 'hidden' }}>
      <div className="ticker-track">
        {items.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 20, whiteSpace: 'nowrap', padding: '0 20px', fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.45)', letterSpacing: 0.5 }}>
            {item}
            <span style={{ color: G, fontSize: 16 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// ── Stats Bar ─────────────────────────────────────────────────────────────────
function StatsBar() {
  const stats = [
    { num: '6', label: 'Live Systems' },
    { num: '1,744', label: 'Customer Records' },
    { num: '24/7', label: 'AI Always On' },
    { num: '4+', label: 'Industries' },
  ]
  return (
    <section style={{ background: '#0d0d0d', borderBottom: '1px solid #1a1a1a', padding: '0 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {stats.map((s, i) => (
          <div key={i} style={{ textAlign: 'center', padding: '40px 24px', borderRight: i < 3 ? '1px solid #1a1a1a' : undefined }}>
            <div style={{ fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 900, color: G, lineHeight: 1, marginBottom: 8 }}>{s.num}</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: 2, fontWeight: 600 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Solutions ─────────────────────────────────────────────────────────────────
const SOLUTIONS = [
  {
    icon: '💅',
    name: 'Solo AI Worker',
    tag: 'Saloon',
    desc: 'Farah — your 24/7 AI receptionist. Handles WhatsApp bookings, reminders, staff commissions & daily reports automatically.',
    live: true,
    color: '#C4956A',
  },
  {
    icon: '🍈',
    name: 'DurianTech',
    tag: 'SBM + DURIANEX',
    desc: 'B2B2C durian marketplace platform. Connecting suppliers, retailers and end customers across Malaysia.',
    live: true,
    color: '#F97316',
  },
  {
    icon: '🎓',
    name: 'UniClub OS',
    tag: 'Campus',
    desc: 'Complete club management SaaS for universities. Members, activities, finance, announcements & maker-checker approvals.',
    live: true,
    color: '#3B82F6',
  },
  {
    icon: '🚗',
    name: 'GoKaki',
    tag: 'Tourism',
    desc: 'AI-powered local tourism and activity booking platform. Connecting travellers with authentic Malaysian experiences.',
    live: false,
    color: '#8B5CF6',
  },
]

function Solutions() {
  return (
    <section id="solutions" style={{ padding: '96px 24px', background: B }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <div style={{ width: 3, height: 20, borderRadius: 2, background: G }} />
            <span style={{ color: G, fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase' }}>Our Solutions</span>
          </div>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 900, letterSpacing: '-1px', marginBottom: 12 }}>
            One Empire. Four Industries.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 16, maxWidth: 480 }}>
            Each product built ground-up for Malaysian SMEs. Real systems. Real customers. Real results.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {SOLUTIONS.map((s) => (
            <div key={s.name} className="solution-card" style={{ background: '#0d0d0d', border: '1px solid #1a1a1a', borderRadius: 16, padding: '28px 24px', position: 'relative', cursor: 'default' }}>
              {/* Top green line on hover */}
              <div className="card-top-line" style={{ position: 'absolute', top: 0, left: 16, right: 16, height: 2, background: G, borderRadius: '0 0 2px 2px' }} />

              {/* Icon */}
              <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>

              {/* Name + tag */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <span style={{ fontSize: 17, fontWeight: 800, color: '#fff' }}>{s.name}</span>
                <span style={{ padding: '2px 10px', borderRadius: 999, background: `${s.color}18`, color: s.color, fontSize: 11, fontWeight: 700 }}>{s.tag}</span>
              </div>

              {/* Desc */}
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 20 }}>{s.desc}</p>

              {/* Live status */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span className={s.live ? 'live-dot' : ''} style={{ display: 'inline-block', width: 7, height: 7, borderRadius: '50%', background: s.live ? G : '#666' }} />
                <span style={{ fontSize: 11, fontWeight: 600, color: s.live ? G : '#666', letterSpacing: 1 }}>{s.live ? 'LIVE' : 'COMING SOON'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── How It Works ──────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { num: '01', icon: '⚙️', title: 'We Set Up', zh: '我们设置', desc: 'Our team configures your AI worker in 3–5 days. We train it to know your services, pricing and staff.' },
    { num: '02', icon: '🚀', title: 'May Goes Live', zh: '上线', desc: 'Your AI connects to WhatsApp and starts handling customers immediately — bookings, questions, reminders.' },
    { num: '03', icon: '😌', title: 'You Focus', zh: '你专注', desc: 'Run your business. Your AI handles the rest 24/7. We monitor, optimise and support every step.' },
  ]
  return (
    <section style={{ padding: '96px 24px', background: DARK }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 56 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <div style={{ width: 3, height: 20, borderRadius: 2, background: G }} />
            <span style={{ color: G, fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase' }}>How It Works</span>
          </div>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 900, letterSpacing: '-1px' }}>
            3 Steps to Your AI Worker
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
          {steps.map((s) => (
            <div key={s.num} style={{ position: 'relative' }}>
              <div style={{ fontSize: 72, fontWeight: 900, color: 'rgba(125,196,0,0.07)', lineHeight: 1, marginBottom: -16, userSelect: 'none' }}>{s.num}</div>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 8 }}>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: '#fff' }}>{s.title}</h3>
                <span style={{ fontSize: 13, color: G, fontWeight: 600 }}>{s.zh}</span>
              </div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Pricing ───────────────────────────────────────────────────────────────────
function Pricing() {
  const plans = [
    {
      name: 'Starter',
      monthly: 'RM 299',
      setup: 'RM 1,888',
      featured: false,
      features: ['Farah AI Assistant', 'WhatsApp Auto-Reply', 'Basic Booking Management', 'Customer Records', 'Monthly Report', '3-Month Support'],
    },
    {
      name: 'Professional',
      monthly: 'RM 499',
      setup: 'RM 3,888',
      featured: true,
      features: ['Everything in Starter', 'Staff Commission Calculator', 'Advanced Analytics', 'Custom AI Personality', 'Multi-Staff Accounts', 'Priority Support', 'Quarterly Optimisation'],
    },
    {
      name: 'Enterprise',
      monthly: 'Custom',
      setup: 'Custom',
      featured: false,
      features: ['Multiple Locations', 'Dedicated AI Manager', 'Custom Integrations', 'SLA Guarantee', 'White-label Option', 'Direct Line Support'],
    },
  ]
  return (
    <section id="pricing" style={{ padding: '96px 24px', background: B }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <div style={{ width: 3, height: 20, borderRadius: 2, background: G }} />
            <span style={{ color: G, fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase' }}>Pricing</span>
          </div>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 900, letterSpacing: '-1px', marginBottom: 12 }}>
            Transparent Pricing
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 15 }}>No hidden fees. No surprises. Cancel anytime.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, alignItems: 'start' }}>
          {plans.map((p) => (
            <div key={p.name} className="price-card" style={{
              background: p.featured ? '#0d1a00' : '#0d0d0d',
              border: `1.5px solid ${p.featured ? G : '#1a1a1a'}`,
              borderRadius: 16, padding: '28px 24px',
              position: 'relative',
              boxShadow: p.featured ? `0 0 40px rgba(125,196,0,0.12)` : undefined,
            }}>
              {p.featured && (
                <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: G, color: '#000', fontSize: 11, fontWeight: 800, padding: '4px 16px', borderRadius: 999, letterSpacing: 1 }}>
                  ⭐ RECOMMENDED
                </div>
              )}
              <div style={{ fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 4 }}>{p.name}</div>
              <div style={{ fontSize: 36, fontWeight: 900, color: p.featured ? G : '#fff', marginBottom: 2 }}>{p.monthly}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>per month + {p.setup} setup</div>
              <div style={{ height: 1, background: '#1a1a1a', marginBottom: 20 }} />
              <ul style={{ listStyle: 'none', marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {p.features.map(f => (
                  <li key={f} style={{ display: 'flex', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>
                    <span style={{ color: G, fontWeight: 800, flexShrink: 0 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-primary" style={{
                display: 'block', textAlign: 'center', padding: '12px', borderRadius: 10,
                background: p.featured ? G : 'transparent',
                border: p.featured ? 'none' : '1.5px solid #333',
                color: p.featured ? '#000' : '#fff',
                fontWeight: 700, fontSize: 14, textDecoration: 'none',
              }}>
                {p.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Agent Section ──────────────────────────────────────────────────────────────
const TIERS = [
  { name: 'Solo Partner', icon: '🤝', commission: '5%', desc: 'Refer clients. Earn recurring monthly commission.' },
  { name: 'Solo Advisor', icon: '💼', commission: '10%', desc: 'Active sellers with dedicated support and marketing kit.' },
  { name: 'Solo Director', icon: '🎯', commission: '15%', desc: 'Build your own team. Override commission on team sales.' },
  { name: 'Solo Master', icon: '👑', commission: '20%', desc: 'Elite tier. Full override + co-branded partnership rights.' },
]

function AgentSection() {
  return (
    <section id="agent" style={{ padding: '96px 24px', background: DARK }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <div style={{ width: 3, height: 20, borderRadius: 2, background: G }} />
            <span style={{ color: G, fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase' }}>Become an Agent</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, letterSpacing: '-1px', marginBottom: 12 }}>
            将军招募 — Join the Empire
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 15, maxWidth: 480 }}>
            Sell AI. Earn recurring commissions. Build your own army. We handle fulfilment — you handle relationships.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 40 }}>
          {TIERS.map((t) => (
            <div key={t.name} className="agent-card" style={{ background: '#0d0d0d', border: '1px solid #1a1a1a', borderRadius: 14, padding: '24px 20px', transition: 'transform 0.25s, border-color 0.25s' }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{t.icon}</div>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#fff', marginBottom: 4 }}>{t.name}</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: G, marginBottom: 8 }}>{t.commission}</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>Commission</div>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>{t.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="https://wa.me/60169212796?text=Hi%20Solo%20AI%2C%20I%20want%20to%20become%20an%20agent!" target="_blank" rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: 'inline-block', padding: '14px 40px', borderRadius: 999, background: G, color: '#000', fontWeight: 800, fontSize: 15, textDecoration: 'none' }}>
            Apply Now via WhatsApp →
          </a>
          <p style={{ marginTop: 12, fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>Free to join. No upfront cost.</p>
        </div>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer id="contact" style={{ background: '#050505', borderTop: '1px solid #1a1a1a', padding: '56px 24px 28px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontWeight: 900, fontSize: 22, marginBottom: 12 }}>
              <span style={{ color: '#fff' }}>Solo</span>
              <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: G, margin: '0 2px' }} />
              <span style={{ color: G }}>AI</span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', lineHeight: 1.7, maxWidth: 280 }}>
              AI Made Simple. Business Made Better.<br />
              Malaysia&apos;s AI Empire for SME.
            </p>
            <div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
              <a href="https://wa.me/60169212796" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-block', padding: '8px 18px', borderRadius: 999, background: '#25D366', color: '#fff', fontWeight: 700, fontSize: 12, textDecoration: 'none' }}>
                💬 WhatsApp Us
              </a>
            </div>
          </div>
          {/* Links */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>Products</div>
            {['Saloon AI', 'DurianTech', 'UniClub OS', 'GoKaki'].map(l => (
              <div key={l} style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{l}</span>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>Contact</div>
            {[
              ['📱 WhatsApp', 'https://wa.me/60169212796'],
              ['🌐 soloai.my', '#'],
            ].map(([label, href]) => (
              <div key={label} style={{ marginBottom: 10 }}>
                <a href={href} style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>{label}</a>
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.18)' }}>© 2026 Solo AI · soloai.my · All rights reserved.</p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.18)' }}>AI Made Simple. Business Made Better.</p>
        </div>
      </div>
    </footer>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <StatsBar />
      <Solutions />
      <HowItWorks />
      <Pricing />
      <AgentSection />
      <Footer />
    </>
  )
}
