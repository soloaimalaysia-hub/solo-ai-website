'use client'

const G = '#7DC400'
const DARK = '#111111'

// ── Navbar ──────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, borderBottom: '1px solid #1a1a1a', background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(12px)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo: Sol + green dot + o + AI */}
        <div style={{ display: 'flex', alignItems: 'center', fontWeight: 700, fontSize: 22, letterSpacing: '-0.5px' }}>
          <span style={{ color: '#fff' }}>Sol</span>
          <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: G, margin: '0 1px', position: 'relative', top: -4 }} />
          <span style={{ color: '#fff' }}>o</span>
          <span style={{ color: G, marginLeft: 6 }}>AI</span>
        </div>

        {/* Nav links bilingual */}
        <div style={{ display: 'flex', gap: 28, fontSize: 13, color: '#888' }}>
          {[
            ['Solutions 解决方案', '#solutions'],
            ['Pricing 价格', '#pricing'],
            ['Become Agent 成为将军', '#agent'],
            ['Contact 联系', '#contact'],
          ].map(([label, href]) => (
            <a key={label} href={href}
              style={{ color: '#888', textDecoration: 'none', transition: 'color 0.2s', whiteSpace: 'nowrap' }}
              onMouseEnter={e => (e.currentTarget.style.color = G)}
              onMouseLeave={e => (e.currentTarget.style.color = '#888')}>
              {label}
            </a>
          ))}
        </div>

        <a href="#contact" className="btn-primary" style={{ padding: '8px 20px', borderRadius: 20, background: G, color: '#0A0A0A', fontWeight: 600, fontSize: 13, textDecoration: 'none' }}>
          Get Started 开始
        </a>
      </div>
    </nav>
  )
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 40px 80px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(125,196,0,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Badge */}
      <div style={{ display: 'inline-block', background: '#111', border: '1px solid #2a2a2a', borderRadius: 20, padding: '6px 16px', fontSize: 12, color: G, marginBottom: 24, letterSpacing: 1 }}>
        MALAYSIA&apos;S AI EMPIRE FOR SME &nbsp;•&nbsp; 马来西亚 SME AI 帝国
      </div>

      {/* Headline */}
      <h1 style={{ fontSize: 'clamp(40px, 6.5vw, 80px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-2px', marginBottom: 16, maxWidth: 860 }}>
        AI Made <span style={{ color: G }}>Simple.</span><br />
        Business Made <span style={{ color: G }}>Better.</span>
      </h1>

      {/* EN sub */}
      <p style={{ fontSize: 16, color: '#888', maxWidth: 480, margin: '0 auto 12px', lineHeight: 1.7 }}>
        We put an AI employee inside your WhatsApp — working 24/7 so you don&apos;t have to.
      </p>

      {/* ZH sub */}
      <p style={{ fontSize: 13, color: '#555', marginBottom: 36 }}>
        把 AI 员工放进你的 WhatsApp · 24小时不休息 · 你只需专心做生意
      </p>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="#solutions" className="btn-primary" style={{ padding: '12px 28px', borderRadius: 25, background: G, color: '#0A0A0A', fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
          See It in Action 看实际演示 →
        </a>
        <a href="#agent" className="btn-outline" style={{ padding: '12px 28px', borderRadius: 25, border: '1px solid #333', color: '#fff', fontWeight: 500, fontSize: 14, textDecoration: 'none' }}>
          Become an Agent 成为将军
        </a>
      </div>
    </section>
  )
}

// ── Ticker ────────────────────────────────────────────────────────────────────
function Ticker() {
  const items = [
    '6 Live Systems 6个系统上线', 'WhatsApp AI 24/7',
    '1,744 Real Customers 真实顾客', 'Saloon · Durian · Campus · Tourism',
    'Built for Malaysia SME 专为大马中小企业', 'Southeast Asia Vision 东南亚愿景',
    '6 Live Systems 6个系统上线', 'WhatsApp AI 24/7',
    '1,744 Real Customers 真实顾客', 'Saloon · Durian · Campus · Tourism',
    'Built for Malaysia SME 专为大马中小企业', 'Southeast Asia Vision 东南亚愿景',
  ]
  return (
    <div style={{ background: '#111', borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a', padding: '14px 0', overflow: 'hidden' }}>
      <div className="ticker-track">
        {items.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '0 24px', fontSize: 12, color: '#555', whiteSpace: 'nowrap' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: G, display: 'inline-block', flexShrink: 0 }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

// ── Stats + Solutions ─────────────────────────────────────────────────────────
const SOLUTIONS = [
  {
    icon: '💅', name: 'Solo AI Worker — Saloon', tag: 'BEAUTY & WELLNESS',
    desc: 'May / Farah handles bookings, staff commissions, customer follow-ups via WhatsApp. 自动预约·员工提成·顾客跟进',
    live: true,
  },
  {
    icon: '🍈', name: 'DurianTech — SBM + DURIANEX', tag: 'AGRICULTURE',
    desc: 'B2B2C durian marketplace with daily price index. AI matches orchard owners with wholesalers. 榴莲市场·每日价格指数·AI撮合交易',
    live: true,
  },
  {
    icon: '🎓', name: 'UniClub OS', tag: 'EDUCATION',
    desc: 'University club management with double-authorisation, finance tracking, and public club pages. 大学俱乐部管理系统·双重签核',
    live: true,
  },
  {
    icon: '🚗', name: 'GoKaki', tag: 'TOURISM',
    desc: 'Driver-merchant commission platform. AI reads receipts, auto-calculates payouts for tour guides. 司机带货抽佣系统·AI读单据',
    live: true,
  },
]

function SolutionsSection() {
  return (
    <section id="solutions" style={{ padding: '60px 40px', background: '#0A0A0A' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: '#1a1a1a', border: '1px solid #1a1a1a', borderRadius: 16, overflow: 'hidden', marginBottom: 48 }}>
          {[
            { num: '6', label: 'Live Systems 上线系统' },
            { num: '1,744', label: 'Customer Records 顾客数据' },
            { num: '24/7', label: 'AI Always On 永不休息' },
            { num: '4+', label: 'Industries 垂直行业' },
          ].map((s, i) => (
            <div key={i} style={{ background: '#111', padding: 28, textAlign: 'center' }}>
              <div style={{ fontSize: 32, fontWeight: 800, color: G, marginBottom: 6 }}>{s.num}</div>
              <div style={{ fontSize: 11, color: '#555' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Solutions header */}
        <div style={{ fontSize: 11, color: G, letterSpacing: 2, marginBottom: 8 }}>OUR SOLUTIONS · 我们的解决方案</div>
        <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, marginBottom: 8, letterSpacing: '-0.5px' }}>One Empire. Four Verticals.</h2>
        <p style={{ fontSize: 14, color: '#666', marginBottom: 32, lineHeight: 1.7 }}>每个垂直系统独立运作 · 共用同一个 AI 大脑</p>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {SOLUTIONS.map((s) => (
            <div key={s.name} className="solution-card" style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: 16, padding: 24, position: 'relative', overflow: 'hidden' }}>
              <div className="card-top-line" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: G }} />
              <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4, color: '#fff' }}>{s.name}</div>
              <div style={{ fontSize: 10, color: G, background: '#0d1a00', padding: '2px 8px', borderRadius: 10, display: 'inline-block', marginBottom: 10 }}>{s.tag}</div>
              <p style={{ fontSize: 12, color: '#666', lineHeight: 1.65, marginBottom: 14 }}>{s.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: G }}>
                <span className="live-dot" style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', background: G }} />
                Live · 上线中
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
  return (
    <section style={{ padding: '60px 40px', background: '#080808', borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontSize: 11, color: G, letterSpacing: 2, marginBottom: 8 }}>HOW IT WORKS · 如何运作</div>
        <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, marginBottom: 8, letterSpacing: '-0.5px' }}>3 Steps. That&apos;s It.</h2>
        <p style={{ fontSize: 14, color: '#666', marginBottom: 36, lineHeight: 1.7 }}>三步开始 · 最快5天上线</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr', gap: 16, alignItems: 'start' }}>
          {[
            { num: '1', title: 'We Set Up 我们设置', desc: 'We configure your AI employee with your business info, services, and staff details in 3–5 days.' },
            { num: '2', title: 'May Goes Live 上线', desc: 'Your AI assistant connects to your WhatsApp and starts handling customers automatically 24/7.' },
            { num: '3', title: 'You Focus 你专注', desc: 'You focus on your craft. Check your dashboard anytime. May handles the rest. 专心做生意，May帮你管其余的。' },
          ].reduce<React.ReactNode[]>((acc, step, i) => {
            acc.push(
              <div key={step.num} style={{ textAlign: 'center', padding: '24px 16px' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', border: `1px solid ${G}`, color: G, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, margin: '0 auto 16px' }}>{step.num}</div>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, color: '#fff' }}>{step.title}</div>
                <div style={{ fontSize: 12, color: '#555', lineHeight: 1.65 }}>{step.desc}</div>
              </div>
            )
            if (i < 2) acc.push(
              <div key={`arrow-${i}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333', fontSize: 24, paddingTop: 24 }}>→</div>
            )
            return acc
          }, [])}
        </div>
      </div>
    </section>
  )
}

// ── Pricing ───────────────────────────────────────────────────────────────────
function Pricing() {
  const plans = [
    {
      tag: 'STARTER · 基础版', price: 'RM 299', period: '/month 月',
      setup: '+ RM 1,888 one-time setup · 一次性设置费',
      featured: false,
      features: ['May AI WhatsApp Assistant', 'Auto booking management', 'Customer database', 'Monthly reports 月报', '3 months support'],
      btn: 'Get Started 开始', btnStyle: 'outline',
    },
    {
      tag: 'PROFESSIONAL · 专业版', price: 'RM 499', period: '/month 月',
      setup: '+ RM 3,888 one-time setup · 一次性设置费',
      featured: true,
      features: ['Everything in Starter', 'Staff commission auto-calc 提成自动算', 'Advanced customer analytics', 'Custom AI personality 个性化AI', 'Multi-staff accounts', 'Priority support 优先支持'],
      btn: 'Get Started 开始 →', btnStyle: 'filled',
    },
    {
      tag: 'ENTERPRISE · 企业版', price: 'Custom', period: ' 定制',
      setup: 'Multi-location · Multi-industry · 多门店多行业',
      featured: false,
      features: ['Everything in Professional', 'Multi-branch 多分店', 'Custom integrations', 'Dedicated account manager', 'SEA expansion ready 东南亚扩张'],
      btn: 'Contact Us 联系我们', btnStyle: 'outline',
    },
  ]
  return (
    <section id="pricing" style={{ padding: '60px 40px', background: '#0A0A0A' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontSize: 11, color: G, letterSpacing: 2, marginBottom: 8 }}>PRICING · 价格</div>
        <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, marginBottom: 8, letterSpacing: '-0.5px' }}>Transparent Pricing. No Surprises.</h2>
        <p style={{ fontSize: 14, color: '#666', marginBottom: 36 }}>透明定价 · 没有隐藏收费</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {plans.map(p => (
            <div key={p.tag} className="price-card" style={{
              background: '#111', border: `1px solid ${p.featured ? G : '#1a1a1a'}`,
              borderRadius: 16, padding: 28, position: 'relative',
              boxShadow: p.featured ? `0 0 40px rgba(125,196,0,0.1)` : undefined,
            }}>
              {p.featured && (
                <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: G, color: '#0A0A0A', fontSize: 10, fontWeight: 700, padding: '3px 12px', borderRadius: 10 }}>
                  RECOMMENDED 推荐
                </div>
              )}
              <div style={{ fontSize: 12, color: '#666', marginBottom: 4, letterSpacing: 1 }}>{p.tag}</div>
              <div style={{ fontSize: 36, fontWeight: 800, color: '#fff', marginBottom: 4 }}>
                {p.price}<span style={{ fontSize: 14, color: '#555', fontWeight: 400 }}>{p.period}</span>
              </div>
              <div style={{ fontSize: 11, color: '#555', marginBottom: 20 }}>{p.setup}</div>
              <div style={{ height: 1, background: '#1a1a1a', marginBottom: 20 }} />
              <ul style={{ listStyle: 'none', marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 0 }}>
                {p.features.map(f => (
                  <li key={f} style={{ fontSize: 12, color: '#777', padding: '5px 0', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: G, fontSize: 10, fontWeight: 700 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href="#contact" style={{
                display: 'block', textAlign: 'center', padding: '10px', borderRadius: 20,
                fontSize: 13, fontWeight: 600, textDecoration: 'none', cursor: 'pointer',
                background: p.btnStyle === 'filled' ? G : 'transparent',
                border: p.btnStyle === 'filled' ? 'none' : '1px solid #333',
                color: p.btnStyle === 'filled' ? '#0A0A0A' : '#fff',
              }}>
                {p.btn}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Agent Section ──────────────────────────────────────────────────────────────
function AgentSection() {
  const tiers = [
    { name: 'Solo Partner', commission: '35% setup + 15% monthly' },
    { name: 'Solo Advisor', commission: '38% setup + 18% monthly' },
    { name: 'Solo Director', commission: '40% setup + 20% monthly' },
    { name: 'Solo Master', commission: 'International · 国际' },
  ]
  return (
    <section id="agent" style={{ padding: '60px 40px', background: '#080808', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: 20, padding: 40, textAlign: 'center' }}>
          <div style={{ fontSize: 11, color: G, letterSpacing: 2, marginBottom: 12 }}>BECOME A GENERAL · 成为将军</div>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 10 }}>Join the Solo AI Empire</h2>
          <p style={{ fontSize: 13, color: '#666', marginBottom: 28, lineHeight: 1.7, maxWidth: 500, margin: '0 auto 28px' }}>
            Earn recurring commissions by introducing Solo AI to businesses in your network.<br />
            通过介绍 Solo AI 给你的人脉，赚取长期被动收入
          </p>

          {/* Tier badges */}
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 28 }}>
            {tiers.map(t => (
              <div key={t.name} className="agent-card" style={{ background: '#0A0A0A', border: '1px solid #1a1a1a', borderRadius: 20, padding: '8px 16px', fontSize: 12, color: '#888' }}>
                <strong style={{ color: G }}>{t.name}</strong> · {t.commission}
              </div>
            ))}
          </div>

          <a href="https://wa.me/60169212796?text=Hi%20Solo%20AI%2C%20I%20want%20to%20become%20an%20agent!"
            target="_blank" rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: 'inline-block', padding: '12px 28px', borderRadius: 25, background: G, color: '#0A0A0A', fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
            Apply Now 立刻申请 →
          </a>
        </div>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer id="contact" style={{ padding: '32px 40px', borderTop: '1px solid #1a1a1a', background: '#0A0A0A', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
      <div style={{ fontSize: 12, color: '#444' }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 4 }}>
          Solo<span style={{ color: G }}>AI</span>
        </div>
        <div>AI Made Simple. Business Made Better.</div>
        <div style={{ marginTop: 4 }}>© 2026 Solo AI Malaysia · soloai.my</div>
      </div>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        {['Saloon', 'DurianTech', 'UniClub OS', 'GoKaki', 'Become Agent', '+60169212796'].map(l => (
          <span key={l} style={{ fontSize: 12, color: '#444', cursor: 'pointer' }}
            onMouseEnter={e => (e.currentTarget.style.color = G)}
            onMouseLeave={e => (e.currentTarget.style.color = '#444')}>
            {l}
          </span>
        ))}
      </div>
    </footer>
  )
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <SolutionsSection />
      <HowItWorks />
      <Pricing />
      <AgentSection />
      <Footer />
    </>
  )
}
