'use client'

import { useState, useEffect, useRef } from 'react'

const G = '#7DC400'

// ── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, borderBottom: '1px solid #1a1a1a', background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(12px)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img
          src="https://klrfpzxjsacriaqtfssf.supabase.co/storage/v1/object/public/solo-ai-assets/solo%20ai%20logo.webp"
          alt="Solo AI"
          style={{ height: 36, width: 'auto', objectFit: 'contain' }}
        />
        <div style={{ display: 'flex', gap: 28, fontSize: 13 }}>
          {[['Solutions 解决方案','#solutions'],['Live Demo 现场演示','#demo'],['Pricing 价格','#pricing'],['Contact 联系我们','#contact']].map(([l,h]) => (
            <a key={l} href={h} style={{ color: '#888', textDecoration: 'none' }}
              onMouseEnter={e=>(e.currentTarget.style.color=G)} onMouseLeave={e=>(e.currentTarget.style.color='#888')}>{l}</a>
          ))}
        </div>
        <a href="#contact" style={{ padding: '8px 20px', borderRadius: 20, background: G, color: '#0A0A0A', fontWeight: 600, fontSize: 13, textDecoration: 'none' }}>Get Started 开始</a>
      </div>
    </nav>
  )
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 40px 80px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(125,196,0,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ display: 'inline-block', background: '#111', border: '1px solid #2a2a2a', borderRadius: 20, padding: '6px 16px', fontSize: 12, color: G, marginBottom: 24, letterSpacing: 1 }}>
        MALAYSIA&apos;S AI EMPIRE FOR SME &nbsp;•&nbsp; 马来西亚 SME AI 帝国
      </div>
      <h1 style={{ fontSize: 'clamp(40px,6.5vw,80px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-2px', marginBottom: 16, maxWidth: 860 }}>
        AI Made <span style={{ color: G }}>Simple.</span><br />Business Made <span style={{ color: G }}>Better.</span>
      </h1>
      <p style={{ fontSize: 16, color: '#888', maxWidth: 480, margin: '0 auto 12px', lineHeight: 1.7 }}>
        We put an AI employee inside your WhatsApp — working 24/7 so you don&apos;t have to.
      </p>
      <p style={{ fontSize: 13, color: '#555', marginBottom: 36 }}>把 AI 员工放进你的 WhatsApp · 24小时不休息 · 你只需专心做生意</p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="#demo" style={{ padding: '12px 28px', borderRadius: 25, background: G, color: '#0A0A0A', fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>See It in Action 看实际演示 →</a>
        <a href="#contact" style={{ padding: '12px 28px', borderRadius: 25, border: '1px solid #333', color: '#fff', fontWeight: 500, fontSize: 14, textDecoration: 'none' }}>Get Free Demo 免费体验</a>
      </div>
    </section>
  )
}

// ── Ticker ────────────────────────────────────────────────────────────────────
function Ticker() {
  const items = ['6 Live Systems 6个系统上线','WhatsApp AI 24/7','1,744 Real Customers 真实顾客','Saloon · Durian · Campus · Tourism','Built for Malaysia SME 专为大马中小企业','Southeast Asia Vision 东南亚愿景','6 Live Systems 6个系统上线','WhatsApp AI 24/7','1,744 Real Customers 真实顾客','Saloon · Durian · Campus · Tourism','Built for Malaysia SME 专为大马中小企业','Southeast Asia Vision 东南亚愿景']
  return (
    <div style={{ background:'#111', borderTop:'1px solid #1a1a1a', borderBottom:'1px solid #1a1a1a', padding:'14px 0', overflow:'hidden' }}>
      <div className="ticker-track">
        {items.map((item,i) => (
          <span key={i} style={{ display:'inline-flex', alignItems:'center', gap:12, padding:'0 24px', fontSize:12, color:'#555', whiteSpace:'nowrap' }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:G, display:'inline-block' }} />{item}
          </span>
        ))}
      </div>
    </div>
  )
}

// ── Solutions ─────────────────────────────────────────────────────────────────
const SOLUTIONS = [
  { icon:'💅', name:'Solo AI Worker — Saloon', tag:'BEAUTY & WELLNESS', desc:'May / Farah handles bookings, staff commissions, customer follow-ups via WhatsApp. 自动预约·员工提成·顾客跟进', live:true },
  { icon:'🍈', name:'DurianTech — SBM + DURIANEX', tag:'AGRICULTURE', desc:'B2B2C durian marketplace with daily price index. AI matches orchard owners with wholesalers. 榴莲市场·每日价格指数·AI撮合交易', live:true },
  { icon:'🎓', name:'UniClub OS', tag:'EDUCATION', desc:'University club management with double-authorisation, finance tracking, and public club pages. 大学俱乐部管理系统·双重签核', live:true },
  { icon:'🚗', name:'GoKaki', tag:'TOURISM', desc:'Driver-merchant commission platform. AI reads receipts, auto-calculates payouts for tour guides. 司机带货抽佣系统·AI读单据', live:true },
]

function Solutions() {
  return (
    <section id="solutions" style={{ padding:'60px 40px', background:'#0A0A0A' }}>
      <div style={{ maxWidth:1280, margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:1, background:'#1a1a1a', border:'1px solid #1a1a1a', borderRadius:16, overflow:'hidden', marginBottom:48 }}>
          {[{num:'6',label:'Live Systems 上线系统'},{num:'1,744',label:'Customer Records 顾客数据'},{num:'24/7',label:'AI Always On 永不休息'},{num:'4+',label:'Industries 垂直行业'}].map((s,i) => (
            <div key={i} style={{ background:'#111', padding:28, textAlign:'center' }}>
              <div style={{ fontSize:32, fontWeight:800, color:G, marginBottom:6 }}>{s.num}</div>
              <div style={{ fontSize:11, color:'#555' }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize:11, color:G, letterSpacing:2, marginBottom:8 }}>OUR SOLUTIONS · 我们的解决方案</div>
        <h2 style={{ fontSize:'clamp(26px,3.5vw,40px)', fontWeight:700, marginBottom:8, letterSpacing:'-0.5px' }}>One Empire. Four Verticals.</h2>
        <p style={{ fontSize:14, color:'#666', marginBottom:32, lineHeight:1.7 }}>每个垂直系统独立运作 · 共用同一个 AI 大脑</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:16 }}>
          {SOLUTIONS.map(s => (
            <div key={s.name} className="solution-card" style={{ background:'#111', border:'1px solid #1a1a1a', borderRadius:16, padding:24, position:'relative', overflow:'hidden' }}>
              <div className="card-top-line" style={{ position:'absolute', top:0, left:0, right:0, height:2, background:G }} />
              <div style={{ fontSize:28, marginBottom:12 }}>{s.icon}</div>
              <div style={{ fontSize:15, fontWeight:600, marginBottom:4, color:'#fff' }}>{s.name}</div>
              <div style={{ fontSize:10, color:G, background:'#0d1a00', padding:'2px 8px', borderRadius:10, display:'inline-block', marginBottom:10 }}>{s.tag}</div>
              <p style={{ fontSize:12, color:'#666', lineHeight:1.65, marginBottom:14 }}>{s.desc}</p>
              <div style={{ display:'flex', alignItems:'center', gap:6, fontSize:11, color:G }}>
                <span className="live-dot" style={{ display:'inline-block', width:5, height:5, borderRadius:'50%', background:G }} />Live · 上线中
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── LIVE DEMO ─────────────────────────────────────────────────────────────────
const SALOON_MSGS = [
  { from:'user', name:'Sarah Lim', text:'Hi, do you have slots tomorrow for a haircut?' },
  { from:'may',  text:'Hi Sarah! Yes, we have:\n10:00am / 2:00pm / 4:30pm\nWhich time works for you? 😊' },
  { from:'user', name:'Sarah Lim', text:'5pm please! How much does it cost?' },
  { from:'may',  text:'About 45–60 mins, from RM 50.\nMay I have your full name? 😊' },
  { from:'user', name:'Sarah Lim', text:'Sarah Lim' },
  { from:'may',  text:'Confirmed! ✅\nSarah Lim\nTomorrow · 5:00pm · Haircut\nSee you tomorrow! 🎉' },
]

const FNB_MSGS = [
  { from:'user', name:'Hafiz', text:'Boleh tempah meja untuk 4 orang malam ini?' },
  { from:'may',  text:'Hai Hafiz! Boleh! Malam ini ada slot:\n7:00pm / 8:30pm / 9:00pm\nYang mana sesuai? 😊' },
  { from:'user', name:'Hafiz', text:'8:30pm boleh. Ada set dinner?' },
  { from:'may',  text:'Ada! Set Dinner RM 88/orang:\n✓ Appetizer + Main + Dessert\n✓ 1 Free Mocktail\nMahu saya tempahkan? 😊' },
  { from:'user', name:'Hafiz', text:'Ya, tempahkan.' },
  { from:'may',  text:'Ditempah! ✅\nHafiz · 4 orang\nMalam ini · 8:30pm · Set Dinner\nJumpa nanti! 🍽️' },
]

const MAY_FEATURES = [
  '✓ Replies customer enquiries instantly — 24/7',
  '✓ Books appointments automatically',
  '✓ Reminds customers before appointment',
  '✓ Alerts you when customers haven\'t visited in 30 days',
  '✓ Sends birthday greetings with special offers',
  '✓ Owner checks all reports via WhatsApp',
  '✓ No extra staff expenses',
]

function ChatBubble({ msg, visible }: { msg: typeof SALOON_MSGS[0], visible: boolean }) {
  const isMay = msg.from === 'may'
  return (
    <div style={{ display: visible ? 'flex' : 'none', flexDirection: 'column', alignItems: isMay ? 'flex-start' : 'flex-end', marginBottom: 10, animation: 'fadeIn 0.3s ease' }}>
      {!isMay && <div style={{ fontSize: 10, color: '#888', marginBottom: 3, marginRight: 4 }}>{msg.name}</div>}
      {isMay && <div style={{ fontSize: 10, color: G, marginBottom: 3, marginLeft: 4, fontWeight: 600 }}>May 🤖</div>}
      <div style={{
        maxWidth: 240, padding: '9px 13px', borderRadius: isMay ? '4px 14px 14px 14px' : '14px 4px 14px 14px',
        background: isMay ? '#1a2e00' : '#2a2a2a',
        border: isMay ? `1px solid rgba(125,196,0,0.3)` : '1px solid #333',
        fontSize: 13, color: '#fff', lineHeight: 1.55, whiteSpace: 'pre-line',
      }}>
        {msg.text}
      </div>
    </div>
  )
}

function DemoSection() {
  const [tab, setTab] = useState<'saloon'|'fnb'>('saloon')
  const [visibleCount, setVisibleCount] = useState(0)
  const [playing, setPlaying] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const msgs = tab === 'saloon' ? SALOON_MSGS : FNB_MSGS

  function playDemo() {
    setVisibleCount(0)
    setPlaying(true)
    let i = 0
    function next() {
      i++
      setVisibleCount(i)
      if (i < msgs.length) timerRef.current = setTimeout(next, 1200)
      else setPlaying(false)
    }
    timerRef.current = setTimeout(next, 400)
  }

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setVisibleCount(0)
    setPlaying(false)
    timerRef.current = setTimeout(() => playDemo(), 500)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  const featureList = tab === 'saloon' ? MAY_FEATURES : [
    '✓ Jawab pertanyaan pelanggan segera — 24/7',
    '✓ Tempah meja secara automatik',
    '✓ Hantar menu & promosi kepada pelanggan',
    '✓ Ingatkan pelanggan sebelum tempahan',
    '✓ Laporan jualan harian via WhatsApp',
    '✓ Chef fokus masak, AI uruskan tempahan',
    '✓ Tiada kos kakitangan tambahan',
  ]

  return (
    <section id="demo" style={{ padding: '80px 40px', background: '#080808', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontSize: 11, color: G, letterSpacing: 2, marginBottom: 8 }}>LIVE DEMO · 现场演示</div>
        <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 700, marginBottom: 8, letterSpacing: '-0.5px' }}>See It. Feel It. Believe It.</h2>
        <p style={{ fontSize: 14, color: '#666', marginBottom: 32 }}>真实对话演示 · 这就是 Solo AI 每天在做的事</p>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 28 }}>
          {[['saloon','💅 Saloon (May · EN)'],['fnb','🍽️ F&B (Chef AI · BM)']].map(([key, label]) => (
            <button key={key} onClick={() => setTab(key as 'saloon'|'fnb')} style={{
              padding: '8px 20px', borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: 'pointer',
              background: tab === key ? G : 'transparent',
              color: tab === key ? '#0A0A0A' : '#666',
              border: tab === key ? 'none' : '1px solid #333',
              transition: 'all 0.2s',
            }}>{label}</button>
          ))}
        </div>

        {/* Demo content */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>
          {/* Chat window */}
          <div style={{ background: '#0d0d0d', border: '1px solid #1a1a1a', borderRadius: 16, overflow: 'hidden' }}>
            {/* WA header */}
            <div style={{ background: '#111', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: '1px solid #1a1a1a' }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#1a2e00', border: `2px solid ${G}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🤖</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{tab === 'saloon' ? 'May · Saloon AI' : 'Chef AI · F&B'}</div>
                <div style={{ fontSize: 11, color: G }}>● Online · Always Ready</div>
              </div>
            </div>
            {/* Messages */}
            <div style={{ padding: '16px 14px', minHeight: 280, maxHeight: 380, overflowY: 'auto' }}>
              {msgs.map((msg, i) => (
                <ChatBubble key={i} msg={msg} visible={i < visibleCount} />
              ))}
              {playing && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '8px 12px' }}>
                  {[0,1,2].map(i => (
                    <span key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: G, display: 'inline-block', animation: `pulse-green ${0.6 + i * 0.2}s ease-in-out infinite` }} />
                  ))}
                </div>
              )}
            </div>
            {/* Replay */}
            <div style={{ padding: '10px 14px', borderTop: '1px solid #1a1a1a', display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={playDemo} disabled={playing} style={{ padding: '6px 16px', borderRadius: 12, background: playing ? '#222' : G, color: playing ? '#555' : '#0A0A0A', fontSize: 12, fontWeight: 700, border: 'none', cursor: playing ? 'default' : 'pointer' }}>
                {playing ? 'Playing...' : '↺ Replay'}
              </button>
            </div>
          </div>

          {/* Features panel */}
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 20 }}>
              {tab === 'saloon' ? 'What May does for your Saloon 💅' : 'Apa Chef AI buat untuk F&B anda 🍽️'}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
              {featureList.map((f, i) => (
                <div key={i} style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, display: 'flex', gap: 8 }}>
                  <span style={{ color: G, flexShrink: 0 }}>✓</span>
                  <span>{f.replace('✓ ','')}</span>
                </div>
              ))}
            </div>
            {/* CTA mini pricing */}
            <div style={{ background: '#111', border: `1px solid rgba(125,196,0,0.25)`, borderRadius: 12, padding: '16px 18px' }}>
              <div style={{ fontSize: 11, color: '#555', marginBottom: 4 }}>Starting from 从</div>
              <div style={{ fontSize: 26, fontWeight: 800, color: G }}>RM 299<span style={{ fontSize: 13, color: '#555', fontWeight: 400 }}>/month 月</span></div>
              <div style={{ fontSize: 11, color: '#555', marginBottom: 14 }}>+ RM 1,888 one-time setup · 一次性设置费</div>
              <a href="#contact" style={{ display: 'block', textAlign: 'center', padding: '10px', borderRadius: 10, background: G, color: '#0A0A0A', fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>
                Get Free Demo 免费体验 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Why Solo AI ───────────────────────────────────────────────────────────────
const WHY_CARDS = [
  { icon: '⚡', title: 'Live in 3–5 Days · 3-5天上线', desc: 'We set everything up for you. No technical knowledge needed. Just your business info and we handle the rest.' },
  { icon: '📊', title: 'Knows Your Business · 了解你的生意', desc: 'Your AI knows your services, prices, staff, and customers. It speaks your language and represents your brand.' },
  { icon: '💬', title: 'WhatsApp Native · WhatsApp 原生', desc: 'No new apps for your customers. Everything happens in WhatsApp — the app they already use every day.' },
  { icon: '📋', title: 'Boss Dashboard · 老板看板', desc: 'Check bookings, revenue, staff performance and customer stats anytime from your phone.' },
]

const COMPARE_ROWS = [
  { feature: 'Staff answers 员工接待', trad: '电话人工接待', solo: '✓ Answered instantly' },
  { feature: 'Staff commissions 提成计算', trad: '手工计算', solo: '✓ Auto-calculated monthly' },
  { feature: 'Customer follow-up 顾客追踪', trad: 'None happens · 没有', solo: '✓ Auto 30-day reminder' },
  { feature: 'Booking app 预约方式', trad: 'None / multi-platform', solo: '✓ From RM 299/month' },
  { feature: 'Monthly reports 月报', trad: 'Manual or none · 没有', solo: '✓ Auto via WhatsApp' },
]

function WhySoloAI() {
  return (
    <section style={{ padding: '80px 40px', background: '#0A0A0A', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontSize: 11, color: G, letterSpacing: 2, marginBottom: 8 }}>WHY SOLO AI · 为什么选我们</div>
        <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 700, marginBottom: 8, letterSpacing: '-0.5px' }}>Not just software. A business partner.</h2>
        <p style={{ fontSize: 14, color: '#666', marginBottom: 40 }}>不只是软件 · 我们是你的生意伙伴</p>

        {/* 4 cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16, marginBottom: 48 }}>
          {WHY_CARDS.map(c => (
            <div key={c.title} className="solution-card" style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: 14, padding: '24px 20px', position: 'relative', overflow: 'hidden' }}>
              <div className="card-top-line" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: G }} />
              <div style={{ fontSize: 28, marginBottom: 14 }}>{c.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{c.title}</div>
              <div style={{ fontSize: 12, color: '#666', lineHeight: 1.65 }}>{c.desc}</div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div style={{ background: '#0d0d0d', border: '1px solid #1a1a1a', borderRadius: 16, overflow: 'hidden' }}>
          {/* Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#111', borderBottom: '1px solid #1a1a1a' }}>
            <div style={{ padding: '14px 20px', fontSize: 12, fontWeight: 700, color: '#555', textTransform: 'uppercase', letterSpacing: 1 }}>FEATURE</div>
            <div style={{ padding: '14px 20px', fontSize: 12, fontWeight: 700, color: '#555', textTransform: 'uppercase', letterSpacing: 1, borderLeft: '1px solid #1a1a1a' }}>Traditional Way 传统方式</div>
            <div style={{ padding: '14px 20px', fontSize: 12, fontWeight: 700, color: G, textTransform: 'uppercase', letterSpacing: 1, borderLeft: '1px solid #1a1a1a' }}>Solo AI</div>
          </div>
          {COMPARE_ROWS.map((row, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: i < COMPARE_ROWS.length - 1 ? '1px solid #1a1a1a' : undefined }}>
              <div style={{ padding: '13px 20px', fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{row.feature}</div>
              <div style={{ padding: '13px 20px', fontSize: 13, color: '#555', borderLeft: '1px solid #1a1a1a' }}>{row.trad}</div>
              <div style={{ padding: '13px 20px', fontSize: 13, color: G, fontWeight: 600, borderLeft: '1px solid #1a1a1a' }}>{row.solo}</div>
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
    { tag:'STARTER · 基础版', price:'RM 299', period:'/month 月', setup:'+ RM 1,888 one-time setup · 一次性设置费', featured:false, features:['May AI WhatsApp Assistant','Auto booking management','Customer database','Monthly reports 月报','3 months support'], btn:'Get Started 开始', filled:false },
    { tag:'PROFESSIONAL · 专业版', price:'RM 499', period:'/month 月', setup:'+ RM 3,888 one-time setup · 一次性设置费', featured:true, features:['Everything in Starter','Staff commission auto-calc 提成自动算','Advanced customer analytics','Custom AI personality 个性化AI','Multi-staff accounts','Priority support 优先支持'], btn:'Get Started 开始 →', filled:true },
    { tag:'ENTERPRISE · 企业版', price:'Custom', period:' 定制', setup:'Multi-location · Multi-industry · 多门店多行业', featured:false, features:['Everything in Professional','Multi-branch 多分店','Custom integrations','Dedicated account manager','SEA expansion ready 东南亚扩张'], btn:'Contact Us 联系我们', filled:false },
  ]
  return (
    <section id="pricing" style={{ padding:'60px 40px', background:'#080808', borderTop:'1px solid #1a1a1a' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <div style={{ fontSize:11, color:G, letterSpacing:2, marginBottom:8 }}>PRICING · 价格</div>
        <h2 style={{ fontSize:'clamp(26px,3.5vw,40px)', fontWeight:700, marginBottom:8, letterSpacing:'-0.5px' }}>Transparent Pricing. No Surprises.</h2>
        <p style={{ fontSize:14, color:'#666', marginBottom:36 }}>透明定价 · 没有隐藏收费</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:16 }}>
          {plans.map(p => (
            <div key={p.tag} className="price-card" style={{ background:'#111', border:`1.5px solid ${p.featured ? G : '#1a1a1a'}`, borderRadius:16, padding:28, position:'relative', boxShadow:p.featured?`0 0 40px rgba(125,196,0,0.1)`:undefined }}>
              {p.featured && <div style={{ position:'absolute', top:-12, left:'50%', transform:'translateX(-50%)', background:G, color:'#0A0A0A', fontSize:10, fontWeight:700, padding:'3px 12px', borderRadius:10 }}>RECOMMENDED 推荐</div>}
              <div style={{ fontSize:12, color:'#666', marginBottom:4, letterSpacing:1 }}>{p.tag}</div>
              <div style={{ fontSize:36, fontWeight:800, color:'#fff', marginBottom:4 }}>{p.price}<span style={{ fontSize:14, color:'#555', fontWeight:400 }}>{p.period}</span></div>
              <div style={{ fontSize:11, color:'#555', marginBottom:20 }}>{p.setup}</div>
              <div style={{ height:1, background:'#1a1a1a', marginBottom:20 }} />
              <ul style={{ listStyle:'none', marginBottom:24, display:'flex', flexDirection:'column' }}>
                {p.features.map(f => (
                  <li key={f} style={{ fontSize:12, color:'#777', padding:'5px 0', borderBottom:'1px solid #1a1a1a', display:'flex', alignItems:'center', gap:8 }}>
                    <span style={{ color:G, fontSize:10, fontWeight:700 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href="#contact" style={{ display:'block', textAlign:'center', padding:'10px', borderRadius:20, fontSize:13, fontWeight:600, textDecoration:'none', background:p.filled?G:'transparent', border:p.filled?'none':'1px solid #333', color:p.filled?'#0A0A0A':'#fff' }}>
                {p.btn}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Contact ───────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name:'', phone:'', service:'', challenge:'' })
  const [done, setDone] = useState(false)
  const [sending, setSending] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.phone) return
    setSending(true)
    await new Promise(r => setTimeout(r, 800))
    setSending(false)
    setDone(true)
  }

  return (
    <section id="contact" style={{ padding:'80px 40px', background:'#0A0A0A', borderTop:'1px solid #1a1a1a' }}>
      <div style={{ maxWidth:1000, margin:'0 auto' }}>
        <div style={{ fontSize:11, color:G, letterSpacing:2, marginBottom:8 }}>CONTACT US · 联系我们</div>
        <h2 style={{ fontSize:'clamp(26px,3.5vw,40px)', fontWeight:700, marginBottom:8, letterSpacing:'-0.5px' }}>Let&apos;s Talk. 我们来聊聊。</h2>
        <p style={{ fontSize:14, color:'#666', marginBottom:40 }}>每一个 SME 老板都值得拥有一个 AI 员工 · Book your free demo today</p>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'start' }}>
          {/* Left — contact info */}
          <div>
            <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
              {[
                { icon:'💬', label:'WhatsApp', val:'+60 16-921 2796', href:'https://wa.me/60169212796' },
                { icon:'📧', label:'Email', val:'hello@soloai.my', href:'mailto:hello@soloai.my' },
                { icon:'📍', label:'Location', val:'Selangor, Malaysia', href:undefined },
                { icon:'⏱️', label:'Response Time', val:'Within 24 hours · 24小时内回复', href:undefined },
              ].map(c => (
                <div key={c.label} style={{ display:'flex', alignItems:'flex-start', gap:14 }}>
                  <div style={{ width:40, height:40, borderRadius:10, background:'#111', border:'1px solid #1a1a1a', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, flexShrink:0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize:11, color:'#555', marginBottom:3, textTransform:'uppercase', letterSpacing:1 }}>{c.label}</div>
                    {c.href
                      ? <a href={c.href} style={{ fontSize:14, color:'#fff', fontWeight:600, textDecoration:'none' }} onMouseEnter={e=>(e.currentTarget.style.color=G)} onMouseLeave={e=>(e.currentTarget.style.color='#fff')}>{c.val}</a>
                      : <div style={{ fontSize:14, color:'#fff', fontWeight:600 }}>{c.val}</div>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div style={{ background:'#111', border:'1px solid #1a1a1a', borderRadius:16, padding:28 }}>
            {done ? (
              <div style={{ textAlign:'center', padding:'40px 0' }}>
                <div style={{ fontSize:48, marginBottom:16 }}>🎉</div>
                <h3 style={{ fontSize:20, fontWeight:700, color:'#fff', marginBottom:8 }}>Request Received! 收到了！</h3>
                <p style={{ fontSize:13, color:'#666', lineHeight:1.7 }}>We&apos;ll WhatsApp you within 24 hours.<br />我们会在24小时内 WhatsApp 你。</p>
              </div>
            ) : (
              <form onSubmit={submit}>
                <h3 style={{ fontSize:16, fontWeight:700, color:'#fff', marginBottom:20 }}>Get a Free Demo · 免费体验</h3>
                <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
                  {[
                    { label:'Your Name 你的名字 *', ph:'e.g. Sarah Lim', key:'name', type:'text' },
                    { label:'WhatsApp Number *', ph:'e.g. 0123456789', key:'phone', type:'tel' },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ display:'block', fontSize:11, color:'#666', marginBottom:6, textTransform:'uppercase', letterSpacing:1 }}>{f.label}</label>
                      <input required type={f.type} placeholder={f.ph}
                        value={form[f.key as keyof typeof form]}
                        onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                        style={{ width:'100%', padding:'10px 14px', borderRadius:8, border:'1px solid #1a1a1a', background:'#0A0A0A', color:'#fff', fontSize:13, outline:'none', fontFamily:'inherit' }}
                        onFocus={e => (e.currentTarget.style.borderColor = G)} onBlur={e => (e.currentTarget.style.borderColor = '#1a1a1a')} />
                    </div>
                  ))}
                  <div>
                    <label style={{ display:'block', fontSize:11, color:'#666', marginBottom:6, textTransform:'uppercase', letterSpacing:1 }}>Your Business Type 行业</label>
                    <select value={form.service} onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
                      style={{ width:'100%', padding:'10px 14px', borderRadius:8, border:'1px solid #1a1a1a', background:'#0A0A0A', color: form.service ? '#fff' : '#555', fontSize:13, outline:'none', fontFamily:'inherit' }}>
                      <option value="">Select · 选择...</option>
                      <option value="saloon">Saloon / Beauty 美容院</option>
                      <option value="fnb">F&amp;B / Restaurant 餐饮</option>
                      <option value="retail">Retail 零售</option>
                      <option value="other">Other 其他</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display:'block', fontSize:11, color:'#666', marginBottom:6, textTransform:'uppercase', letterSpacing:1 }}>What&apos;s your biggest challenge? 你最大的烦恼是什么？</label>
                    <textarea rows={3} placeholder="e.g. Too many WhatsApp messages to handle..."
                      value={form.challenge} onChange={e => setForm(p => ({ ...p, challenge: e.target.value }))}
                      style={{ width:'100%', padding:'10px 14px', borderRadius:8, border:'1px solid #1a1a1a', background:'#0A0A0A', color:'#fff', fontSize:13, outline:'none', resize:'none', fontFamily:'inherit' }}
                      onFocus={e => (e.currentTarget.style.borderColor = G)} onBlur={e => (e.currentTarget.style.borderColor = '#1a1a1a')} />
                  </div>
                  <button type="submit" disabled={sending} style={{ padding:'12px', borderRadius:10, background: sending ? '#444' : G, color: sending ? '#888' : '#0A0A0A', fontWeight:700, fontSize:14, border:'none', cursor: sending ? 'default' : 'pointer' }}>
                    {sending ? 'Sending... 发送中...' : 'Send Request 发送 →'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ padding:'24px 40px', borderTop:'1px solid #1a1a1a', background:'#050505', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12 }}>
      <div style={{ fontSize:12, color:'#444' }}>
        <img
          src="https://klrfpzxjsacriaqtfssf.supabase.co/storage/v1/object/public/solo-ai-assets/solo%20ai%20logo.webp"
          alt="Solo AI"
          style={{ height: 28, width: 'auto', objectFit: 'contain', marginBottom: 6 }}
        />
        <div>AI Made Simple. Business Made Better.</div>
        <div style={{ marginTop:4 }}>© 2026 Solo AI Malaysia · soloai.my</div>
      </div>
      <div style={{ display:'flex', gap:20, flexWrap:'wrap' }}>
        {['Saloon','DurianTech','UniClub OS','GoKaki','+60169212796'].map(l => (
          <span key={l} style={{ fontSize:12, color:'#444', cursor:'pointer' }}
            onMouseEnter={e=>(e.currentTarget.style.color=G)} onMouseLeave={e=>(e.currentTarget.style.color='#444')}>{l}</span>
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
      <Solutions />
      <DemoSection />
      <WhySoloAI />
      <Pricing />
      <Contact />
      <Footer />
    </>
  )
}
