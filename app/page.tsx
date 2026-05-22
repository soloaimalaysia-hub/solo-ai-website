'use client'

import { useState, useEffect, useRef, createContext, useContext } from 'react'

const G = '#7DC400'
const LOGO = 'https://klrfpzxjsacriaqtfssf.supabase.co/storage/v1/object/public/solo-ai-assets/solo%20ai%20logo.webp'

// ── Bilingual Content ─────────────────────────────────────────────────────────
const CONTENT = {
  en: {
    badge: "MALAYSIA'S AI EMPIRE FOR SME",
    hero_p1: 'AI Made ', hero_h1: 'Simple.', hero_p2: 'Business Made ', hero_h2: 'Better.',
    hero_sub: "We put an AI employee inside your WhatsApp — working 24/7 so you don't have to.",
    btn1: 'Try Live Demo →', btn2: 'Contact Us',
    nav: [['Solutions','#solutions'],['Live Demo','#demo'],['Pricing','#pricing'],['Contact','#contact']] as [string,string][],
    nav_cta: 'Get Started',
    stat_labels: ['Live Systems','Customer Records','AI Always On','Industries'],
    sol_eyebrow: 'OUR SOLUTIONS',
    sol_title: 'One Empire. Four Verticals.',
    sol_sub: 'Each vertical operates independently — powered by one AI brain.',
    sol_descs: [
      'May handles bookings, commissions, customer follow-ups via WhatsApp 24/7.',
      'B2B2C marketplace with daily price index. AI matches orchards with wholesalers.',
      'University club management with double-authorization and finance tracking.',
      'Driver-merchant commission platform. AI reads receipts and auto-calculates payouts.',
    ],
    live_txt: 'Live',
    demo_eyebrow: 'LIVE DEMO',
    demo_title: 'See It. Feel It. Believe It.',
    demo_sub: 'Real conversation demo — this is what Solo AI does every day.',
    tab_saloon: '💅 Saloon (May · EN)',
    tab_fnb: '🍽️ F&B (Chef AI · BM)',
    may_panel_title: 'What May does for your Saloon 💅',
    fnb_panel_title: 'What Chef AI does for your F&B 🍽️',
    may_features: [
      'Replies customer enquiries instantly — 24/7',
      'Books appointments automatically',
      'Reminds customers before appointment',
      "Alerts you when customers haven't visited in 30 days",
      'Sends birthday greetings with special offers',
      'Owner checks all reports via WhatsApp',
      'No extra staff expenses',
    ],
    fnb_features: [
      'Replies customer enquiries instantly — 24/7',
      'Books tables automatically',
      'Sends menu & promotions to customers',
      'Reminds customers before reservation',
      'Daily sales report via WhatsApp',
      'Chef focuses on cooking, AI handles bookings',
      'No extra staff expenses',
    ],
    from_txt: 'Starting from',
    setup_txt: 'one-time setup',
    demo_cta: 'Get Free Demo →',
    replay_btn: '↺ Replay', playing_txt: 'Playing...',
    why_eyebrow: 'WHY SOLO AI',
    why_title: 'Not just software. A business partner.',
    why_sub: 'We are your AI business partner — invested in your growth.',
    why_cards: [
      { icon:'⚡', title:'Live in 3–5 Days', desc:'We set everything up for you. No technical knowledge needed. Just your business info and we handle the rest.' },
      { icon:'📊', title:'Knows Your Business', desc:"Your AI knows your services, prices, staff, and customers. It speaks your language and represents your brand." },
      { icon:'💬', title:'WhatsApp Native', desc:"No new apps for your customers. Everything happens in WhatsApp — the app they already use every day." },
      { icon:'📋', title:'Boss Dashboard', desc:"Check bookings, revenue, staff performance and customer stats anytime from your phone." },
    ],
    cmp_header: ['FEATURE','Traditional Way','Solo AI'],
    cmp_rows: [
      { f:'Staff answers',       t:'Manual phone calls',     s:'✓ Answered instantly' },
      { f:'Staff commissions',   t:'Calculated by hand',     s:'✓ Auto-calculated monthly' },
      { f:'Customer follow-up',  t:'Never happens',          s:'✓ Auto 30-day reminder' },
      { f:'Booking system',      t:'None / multi-platform',  s:'✓ From RM 299/month' },
      { f:'Monthly reports',     t:'Manual or none',         s:'✓ Auto via WhatsApp' },
    ],
    pricing_eyebrow: 'PRICING',
    pricing_title: 'Transparent Pricing. No Surprises.',
    pricing_sub: 'No hidden fees · Cancel anytime',
    recommended: 'RECOMMENDED',
    contact_eyebrow: 'CONTACT US',
    contact_title: "Let's Talk.",
    contact_sub: 'Leave your details and Captain K will follow up personally.',
    wa_label: 'WhatsApp', email_label: 'Email', loc_label: 'Location', resp_label: 'Response Time',
    loc_val: 'Selangor, Malaysia', resp_val: 'Within 24 hours',
    form_title: 'Get a Free Demo',
    name_label: 'Your Name *',       name_ph: 'e.g. Sarah Lim',
    phone_label: 'WhatsApp Number *', phone_ph: 'e.g. 0123456789',
    ind_label: 'Your Business Type', ind_ph: 'Select industry...',
    opt: ['Saloon / Beauty','F&B / Restaurant','Retail','Other'],
    ch_label: "What's your biggest challenge?",
    ch_ph: 'e.g. Too many WhatsApp messages to handle...',
    submit_btn: 'Send Request →', sending_txt: 'Sending...',
    ok_title: 'Request Received!', ok_msg: "We'll WhatsApp you within 24 hours.",
    footer_tag: 'AI Made Simple. Business Made Better.',
    footer_copy: '© 2026 Solo AI Malaysia · soloai.my',
  },
  zh: {
    badge: '马来西亚中小企业 AI 帝国',
    hero_p1: 'AI 很', hero_h1: '简单。', hero_p2: '生意更', hero_h2: '好做。',
    hero_sub: '我们把 AI 员工放进你的 WhatsApp — 24小时不休息，你只需专心做生意',
    btn1: '现场体验 →', btn2: '联系我们',
    nav: [['解决方案','#solutions'],['现场演示','#demo'],['价格','#pricing'],['联系我们','#contact']] as [string,string][],
    nav_cta: '开始',
    stat_labels: ['上线系统','顾客数据','AI 永不休息','垂直行业'],
    sol_eyebrow: '我们的解决方案',
    sol_title: '一个帝国。四个垂直业务。',
    sol_sub: '每个系统独立运作 · 共用同一个 AI 大脑',
    sol_descs: [
      'May 24小时自动处理预约\n员工提成自动计算\n顾客跟进全自动',
      'B2B2C 榴莲市场\n每日价格指数\nAI 自动撮合供需',
      '大学俱乐部管理系统\n双重签核制度\n财务透明追踪',
      '司机带货抽佣系统\nAI 读取收据\n自动计算佣金',
    ],
    live_txt: '上线中',
    demo_eyebrow: '现场演示',
    demo_title: '看实际演示 · 相信眼见为实',
    demo_sub: '真实对话演示 · 这就是 Solo AI 每天在做的事',
    tab_saloon: '💅 美容院 (May · EN)',
    tab_fnb: '🍽️ 餐饮 (Chef AI · BM)',
    may_panel_title: 'May 为你的美容院做什么 💅',
    fnb_panel_title: 'Chef AI 为你的餐饮做什么 🍽️',
    may_features: [
      '24/7 即刻回复顾客询问',
      '自动处理预约',
      '预约前自动提醒顾客',
      '30天未到访自动追踪提醒',
      '自动发送生日祝贺与专属优惠',
      '老板随时用 WhatsApp 查报告',
      '无需额外员工成本',
    ],
    fnb_features: [
      '24/7 即刻回复顾客询问',
      '自动预订桌位',
      '向顾客发送菜单与促销',
      '预订前自动提醒顾客',
      '每日销售报告 via WhatsApp',
      '厨师专注烹饪，AI 处理预订',
      '无需额外员工成本',
    ],
    from_txt: '起步价格',
    setup_txt: '一次性设置费',
    demo_cta: '免费体验 →',
    replay_btn: '↺ 重播', playing_txt: '播放中...',
    why_eyebrow: '为什么选我们',
    why_title: '不只是软件 · 是你的 AI 商业伙伴',
    why_sub: '我们是你的 AI 生意伙伴 · 与你的成长同行',
    why_cards: [
      { icon:'⚡', title:'3–5 天上线', desc:'我们全程为你设置，无需技术知识，只需提供你的生意信息，其余交给我们。' },
      { icon:'📊', title:'了解你的生意', desc:'AI 熟悉你的服务、价格、员工和顾客，用你的语言代表你的品牌。' },
      { icon:'💬', title:'WhatsApp 原生', desc:'顾客无需下载新 App，一切在 WhatsApp 里完成，就像日常聊天一样自然。' },
      { icon:'📋', title:'老板看板', desc:'随时用手机查看预约、收入、员工表现和顾客数据。' },
    ],
    cmp_header: ['功能','传统方式','Solo AI'],
    cmp_rows: [
      { f:'员工接待',   t:'电话人工接待',   s:'✓ 即刻自动回复' },
      { f:'提成计算',   t:'手工计算',       s:'✓ 每月自动计算' },
      { f:'顾客追踪',   t:'没有',           s:'✓ 30天自动提醒' },
      { f:'预约系统',   t:'没有 / 多平台',  s:'✓ 从 RM 299/月起' },
      { f:'月报',       t:'手动或没有',     s:'✓ WhatsApp 自动发送' },
    ],
    pricing_eyebrow: '价格',
    pricing_title: '透明定价 · 没有隐藏收费',
    pricing_sub: '没有隐藏费用 · 随时取消',
    recommended: '推荐',
    contact_eyebrow: '联系我们',
    contact_title: '我们来聊聊。',
    contact_sub: '留下你的资料，Captain K 亲自跟进。',
    wa_label: 'WhatsApp', email_label: '电邮', loc_label: '地点', resp_label: '回复时间',
    loc_val: '雪兰莪，马来西亚', resp_val: '24小时内回复',
    form_title: '免费体验',
    name_label: '你的名字 *',   name_ph: '你的名字',
    phone_label: '手机号码 *',   phone_ph: '手机号码',
    ind_label: '选择行业',       ind_ph: '选择行业...',
    opt: ['美容院 / 发廊','餐饮 / 食肆','零售','其他'],
    ch_label: '告诉我们更多',
    ch_ph: '告诉我们更多...',
    submit_btn: '发送 →', sending_txt: '发送中...',
    ok_title: '收到了！🎉', ok_msg: '我们会在24小时内 WhatsApp 你。',
    footer_tag: 'AI 很简单。生意更好做。',
    footer_copy: '© 2026 Solo AI Malaysia · soloai.my',
  },
} as const

type Lang = 'en' | 'zh'
const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: 'en', setLang: () => {} })
const useLang = () => useContext(LangCtx)

// ── Lang Toggle ───────────────────────────────────────────────────────────────
function LangToggle() {
  const { lang, setLang } = useLang()
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {(['en', 'zh'] as Lang[]).map(l => (
        <button key={l} onClick={() => setLang(l)} style={{
          padding: '5px 13px', borderRadius: 14, fontSize: 12, fontWeight: 700,
          cursor: 'pointer', transition: 'all 0.15s',
          background: lang === l ? G : 'transparent',
          color: lang === l ? '#0A0A0A' : '#666',
          border: lang === l ? 'none' : '1px solid #333',
        }}>{l === 'en' ? 'EN' : '中文'}</button>
      ))}
    </div>
  )
}

// ── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
  const { lang } = useLang()
  const c = CONTENT[lang]
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, borderBottom: '1px solid #1a1a1a', background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(12px)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img src={LOGO} alt="Solo AI" style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
        <div style={{ display: 'flex', gap: 24, fontSize: 13 }}>
          {c.nav.map(([label, href]) => (
            <a key={href} href={href} style={{ color: '#888', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = G)}
              onMouseLeave={e => (e.currentTarget.style.color = '#888')}>{label}</a>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <LangToggle />
          <a href="#contact" style={{ padding: '8px 20px', borderRadius: 20, background: G, color: '#0A0A0A', fontWeight: 600, fontSize: 13, textDecoration: 'none' }}>{c.nav_cta}</a>
        </div>
      </div>
    </nav>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  const { lang } = useLang()
  const c = CONTENT[lang]
  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 40px 80px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(125,196,0,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ display: 'inline-block', background: '#111', border: '1px solid #2a2a2a', borderRadius: 20, padding: '6px 16px', fontSize: 12, color: G, marginBottom: 24, letterSpacing: 1 }}>
        {c.badge}
      </div>
      <h1 style={{ fontSize: 'clamp(40px,6.5vw,80px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-2px', marginBottom: 24, maxWidth: 860 }}>
        {c.hero_p1}<span style={{ color: G }}>{c.hero_h1}</span><br />{c.hero_p2}<span style={{ color: G }}>{c.hero_h2}</span>
      </h1>
      <p style={{ fontSize: 16, color: '#888', maxWidth: 500, margin: '0 auto 36px', lineHeight: 1.8 }}>{c.hero_sub}</p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="#demo" style={{ padding: '12px 28px', borderRadius: 25, background: G, color: '#0A0A0A', fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>{c.btn1}</a>
        <a href="#contact" style={{ padding: '12px 28px', borderRadius: 25, border: '1px solid #333', color: '#fff', fontWeight: 500, fontSize: 14, textDecoration: 'none' }}>{c.btn2}</a>
      </div>
    </section>
  )
}

// ── Ticker ────────────────────────────────────────────────────────────────────
function Ticker() {
  const items = [
    '6 Live Systems · 6个系统上线', 'WhatsApp AI 24/7', '1,744 Real Customers · 真实顾客',
    'Saloon · Durian · Campus · Tourism', 'Built for Malaysia SME · 专为大马中小企业',
    'Southeast Asia Vision · 东南亚愿景', '6 Live Systems · 6个系统上线', 'WhatsApp AI 24/7',
    '1,744 Real Customers · 真实顾客', 'Saloon · Durian · Campus · Tourism',
    'Built for Malaysia SME · 专为大马中小企业', 'Southeast Asia Vision · 东南亚愿景',
  ]
  return (
    <div style={{ background: '#111', borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a', padding: '14px 0', overflow: 'hidden' }}>
      <div className="ticker-track">
        {items.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '0 24px', fontSize: 12, color: '#555', whiteSpace: 'nowrap' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: G, display: 'inline-block' }} />{item}
          </span>
        ))}
      </div>
    </div>
  )
}

// ── Solutions ─────────────────────────────────────────────────────────────────
const SOL_META = [
  { icon: 'ti-scissors', name: 'Solo AI Worker — Saloon', tag: 'BEAUTY & WELLNESS' },
  { icon: 'ti-leaf',     name: 'DurianTech — SBM + DURIANEX', tag: 'AGRICULTURE' },
  { icon: 'ti-school',   name: 'UniClub OS', tag: 'EDUCATION' },
  { icon: 'ti-car',      name: 'GoKaki', tag: 'TOURISM' },
]

function Solutions() {
  const { lang } = useLang()
  const c = CONTENT[lang]
  return (
    <section id="solutions" style={{ padding: '60px 40px', background: '#0A0A0A' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Stats bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: '#1a1a1a', border: '1px solid #1a1a1a', borderRadius: 16, overflow: 'hidden', marginBottom: 48 }}>
          {[{ num:'6', i:0 },{ num:'1,744', i:1 },{ num:'24/7', i:2 },{ num:'4+', i:3 }].map(s => (
            <div key={s.i} style={{ background: '#111', padding: 28, textAlign: 'center' }}>
              <div style={{ fontSize: 32, fontWeight: 800, color: G, marginBottom: 6 }}>{s.num}</div>
              <div style={{ fontSize: 11, color: '#555' }}>{c.stat_labels[s.i]}</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 11, color: G, letterSpacing: 2, marginBottom: 8 }}>{c.sol_eyebrow}</div>
        <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 700, marginBottom: 8, letterSpacing: '-0.5px' }}>{c.sol_title}</h2>
        <p style={{ fontSize: 14, color: '#666', marginBottom: 32, lineHeight: 1.7 }}>{c.sol_sub}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16 }}>
          {SOL_META.map((s, i) => (
            <div key={s.name} className="solution-card" style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: 16, padding: 24, position: 'relative', overflow: 'hidden' }}>
              <div className="card-top-line" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: G }} />
              <div style={{ marginBottom: 12 }}><i className={`ti ${s.icon}`} style={{ fontSize: 32, color: G }} /></div>
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4, color: '#fff' }}>{s.name}</div>
              <div style={{ fontSize: 10, color: G, background: '#0d1a00', padding: '2px 8px', borderRadius: 10, display: 'inline-block', marginBottom: 10 }}>{s.tag}</div>
              <p style={{ fontSize: 12, color: '#666', lineHeight: 1.75, marginBottom: 14, whiteSpace: 'pre-line' }}>{c.sol_descs[i]}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: G }}>
                <span className="live-dot" style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', background: G }} />{c.live_txt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Live Demo ─────────────────────────────────────────────────────────────────
const SALOON_MSGS = [
  { from: 'user', name: 'Sarah Lim', text: 'Hi, do you have slots tomorrow for a haircut?' },
  { from: 'may', text: 'Hi Sarah! Yes, we have:\n10:00am / 2:00pm / 4:30pm\nWhich time works for you? 😊' },
  { from: 'user', name: 'Sarah Lim', text: '5pm please! How much does it cost?' },
  { from: 'may', text: 'About 45–60 mins, from RM 50.\nMay I have your full name? 😊' },
  { from: 'user', name: 'Sarah Lim', text: 'Sarah Lim' },
  { from: 'may', text: 'Confirmed! ✅\nSarah Lim\nTomorrow · 5:00pm · Haircut\nSee you tomorrow! 🎉' },
]
const FNB_MSGS = [
  { from: 'user', name: 'Hafiz', text: 'Boleh tempah meja untuk 4 orang malam ini?' },
  { from: 'may', text: 'Hai Hafiz! Boleh! Malam ini ada slot:\n7:00pm / 8:30pm / 9:00pm\nYang mana sesuai? 😊' },
  { from: 'user', name: 'Hafiz', text: '8:30pm boleh. Ada set dinner?' },
  { from: 'may', text: 'Ada! Set Dinner RM 88/orang:\n✓ Appetizer + Main + Dessert\n✓ 1 Free Mocktail\nMahu saya tempahkan? 😊' },
  { from: 'user', name: 'Hafiz', text: 'Ya, tempahkan.' },
  { from: 'may', text: 'Ditempah! ✅\nHafiz · 4 orang\nMalam ini · 8:30pm · Set Dinner\nJumpa nanti! 🍽️' },
]

function ChatBubble({ msg, visible }: { msg: typeof SALOON_MSGS[0]; visible: boolean }) {
  const isMay = msg.from === 'may'
  return (
    <div style={{ display: visible ? 'flex' : 'none', flexDirection: 'column', alignItems: isMay ? 'flex-start' : 'flex-end', marginBottom: 10 }}>
      {!isMay && <div style={{ fontSize: 10, color: '#888', marginBottom: 3, marginRight: 4 }}>{msg.name}</div>}
      {isMay && <div style={{ fontSize: 10, color: G, marginBottom: 3, marginLeft: 4, fontWeight: 600 }}>May 🤖</div>}
      <div style={{ maxWidth: 240, padding: '9px 13px', borderRadius: isMay ? '4px 14px 14px 14px' : '14px 4px 14px 14px', background: isMay ? '#1a2e00' : '#2a2a2a', border: isMay ? `1px solid rgba(125,196,0,0.3)` : '1px solid #333', fontSize: 13, color: '#fff', lineHeight: 1.55, whiteSpace: 'pre-line' }}>
        {msg.text}
      </div>
    </div>
  )
}

function DemoSection() {
  const { lang } = useLang()
  const c = CONTENT[lang]
  const [tab, setTab] = useState<'saloon' | 'fnb'>('saloon')
  const [visibleCount, setVisibleCount] = useState(0)
  const [playing, setPlaying] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const msgs = tab === 'saloon' ? SALOON_MSGS : FNB_MSGS

  function playDemo() {
    setVisibleCount(0); setPlaying(true); let i = 0
    function next() { i++; setVisibleCount(i); if (i < msgs.length) timerRef.current = setTimeout(next, 1200); else setPlaying(false) }
    timerRef.current = setTimeout(next, 400)
  }
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setVisibleCount(0); setPlaying(false)
    timerRef.current = setTimeout(() => playDemo(), 500)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  const features = tab === 'saloon' ? c.may_features : c.fnb_features
  const panelTitle = tab === 'saloon' ? c.may_panel_title : c.fnb_panel_title

  return (
    <section id="demo" style={{ padding: '80px 40px', background: '#080808', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontSize: 11, color: G, letterSpacing: 2, marginBottom: 8 }}>{c.demo_eyebrow}</div>
        <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 700, marginBottom: 8, letterSpacing: '-0.5px' }}>{c.demo_title}</h2>
        <p style={{ fontSize: 14, color: '#666', marginBottom: 32 }}>{c.demo_sub}</p>
        {/* Tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 28 }}>
          {(['saloon', 'fnb'] as const).map(key => (
            <button key={key} onClick={() => setTab(key)} style={{ padding: '8px 20px', borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: 'pointer', background: tab === key ? G : 'transparent', color: tab === key ? '#0A0A0A' : '#666', border: tab === key ? 'none' : '1px solid #333', transition: 'all 0.2s' }}>
              {key === 'saloon' ? c.tab_saloon : c.tab_fnb}
            </button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>
          {/* Chat window */}
          <div style={{ background: '#0d0d0d', border: '1px solid #1a1a1a', borderRadius: 16, overflow: 'hidden' }}>
            <div style={{ background: '#111', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: '1px solid #1a1a1a' }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#1a2e00', border: `2px solid ${G}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🤖</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{tab === 'saloon' ? 'May · Saloon AI' : 'Chef AI · F&B'}</div>
                <div style={{ fontSize: 11, color: G }}>● Online · Always Ready</div>
              </div>
            </div>
            <div style={{ padding: '16px 14px', minHeight: 280, maxHeight: 380, overflowY: 'auto' }}>
              {msgs.map((msg, i) => <ChatBubble key={i} msg={msg} visible={i < visibleCount} />)}
              {playing && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '8px 12px' }}>
                  {[0, 1, 2].map(i => <span key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: G, display: 'inline-block', animation: `pulse-green ${0.6 + i * 0.2}s ease-in-out infinite` }} />)}
                </div>
              )}
            </div>
            <div style={{ padding: '10px 14px', borderTop: '1px solid #1a1a1a', display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={playDemo} disabled={playing} style={{ padding: '6px 16px', borderRadius: 12, background: playing ? '#222' : G, color: playing ? '#555' : '#0A0A0A', fontSize: 12, fontWeight: 700, border: 'none', cursor: playing ? 'default' : 'pointer' }}>
                {playing ? c.playing_txt : c.replay_btn}
              </button>
            </div>
          </div>
          {/* Features panel */}
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 20 }}>{panelTitle}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
              {features.map((f, i) => (
                <div key={i} style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, display: 'flex', gap: 8 }}>
                  <span style={{ color: G, flexShrink: 0 }}>✓</span><span>{f}</span>
                </div>
              ))}
            </div>
            <div style={{ background: '#111', border: `1px solid rgba(125,196,0,0.25)`, borderRadius: 12, padding: '16px 18px' }}>
              <div style={{ fontSize: 11, color: '#555', marginBottom: 4 }}>{c.from_txt}</div>
              <div style={{ fontSize: 26, fontWeight: 800, color: G }}>RM 299<span style={{ fontSize: 13, color: '#555', fontWeight: 400 }}>/month</span></div>
              <div style={{ fontSize: 11, color: '#555', marginBottom: 14 }}>+ RM 1,888 {c.setup_txt}</div>
              <a href="#contact" style={{ display: 'block', textAlign: 'center', padding: '10px', borderRadius: 10, background: G, color: '#0A0A0A', fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>{c.demo_cta}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Why Solo AI ───────────────────────────────────────────────────────────────
function WhySoloAI() {
  const { lang } = useLang()
  const c = CONTENT[lang]
  return (
    <section style={{ padding: '80px 40px', background: '#0A0A0A', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontSize: 11, color: G, letterSpacing: 2, marginBottom: 8 }}>{c.why_eyebrow}</div>
        <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 700, marginBottom: 8, letterSpacing: '-0.5px' }}>{c.why_title}</h2>
        <p style={{ fontSize: 14, color: '#666', marginBottom: 40 }}>{c.why_sub}</p>
        {/* 4 cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16, marginBottom: 48 }}>
          {c.why_cards.map(card => (
            <div key={card.title} className="solution-card" style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: 14, padding: '24px 20px', position: 'relative', overflow: 'hidden' }}>
              <div className="card-top-line" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: G }} />
              <div style={{ fontSize: 28, marginBottom: 14 }}>{card.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{card.title}</div>
              <div style={{ fontSize: 12, color: '#666', lineHeight: 1.65 }}>{card.desc}</div>
            </div>
          ))}
        </div>
        {/* Comparison table */}
        <div style={{ background: '#0d0d0d', border: '1px solid #1a1a1a', borderRadius: 16, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#111', borderBottom: '1px solid #1a1a1a' }}>
            {c.cmp_header.map((h, i) => (
              <div key={i} style={{ padding: '14px 20px', fontSize: 12, fontWeight: 700, color: i === 2 ? G : '#555', textTransform: 'uppercase', letterSpacing: 1, borderLeft: i > 0 ? '1px solid #1a1a1a' : undefined }}>{h}</div>
            ))}
          </div>
          {c.cmp_rows.map((row, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: i < c.cmp_rows.length - 1 ? '1px solid #1a1a1a' : undefined }}>
              <div style={{ padding: '13px 20px', fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{row.f}</div>
              <div style={{ padding: '13px 20px', fontSize: 13, color: '#555', borderLeft: '1px solid #1a1a1a' }}>{row.t}</div>
              <div style={{ padding: '13px 20px', fontSize: 13, color: G, fontWeight: 600, borderLeft: '1px solid #1a1a1a' }}>{row.s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Pricing ───────────────────────────────────────────────────────────────────
function Pricing() {
  const { lang } = useLang()
  const c = CONTENT[lang]
  const plans = [
    { tag: lang === 'en' ? 'STARTER' : '基础版', price: 'RM 299', period: lang === 'en' ? '/month' : '/月', setup: lang === 'en' ? '+ RM 1,888 one-time setup' : '+ RM 1,888 一次性设置费', featured: false, features: lang === 'en' ? ['May AI WhatsApp Assistant','Auto booking management','Customer database','Monthly reports','3 months support'] : ['May AI WhatsApp 助手','自动预约管理','顾客数据库','月报','3个月支持'], btn: lang === 'en' ? 'Get Started' : '开始', filled: false },
    { tag: lang === 'en' ? 'PROFESSIONAL' : '专业版', price: 'RM 499', period: lang === 'en' ? '/month' : '/月', setup: lang === 'en' ? '+ RM 3,888 one-time setup' : '+ RM 3,888 一次性设置费', featured: true, features: lang === 'en' ? ['Everything in Starter','Staff commission auto-calc','Advanced customer analytics','Custom AI personality','Multi-staff accounts','Priority support'] : ['包含基础版所有功能','员工提成自动计算','高级顾客分析','个性化 AI 形象','多员工账号','优先支持'], btn: lang === 'en' ? 'Get Started →' : '开始 →', filled: true },
    { tag: lang === 'en' ? 'ENTERPRISE' : '企业版', price: lang === 'en' ? 'Custom' : '定制', period: '', setup: lang === 'en' ? 'Multi-location · Multi-industry' : '多门店 · 多行业', featured: false, features: lang === 'en' ? ['Everything in Professional','Multi-branch','Custom integrations','Dedicated account manager','SEA expansion ready'] : ['包含专业版所有功能','多分店管理','定制集成','专属客户经理','东南亚扩张就绪'], btn: lang === 'en' ? 'Contact Us' : '联系我们', filled: false },
  ]
  return (
    <section id="pricing" style={{ padding: '60px 40px', background: '#080808', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontSize: 11, color: G, letterSpacing: 2, marginBottom: 8 }}>{c.pricing_eyebrow}</div>
        <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 700, marginBottom: 8, letterSpacing: '-0.5px' }}>{c.pricing_title}</h2>
        <p style={{ fontSize: 14, color: '#666', marginBottom: 36 }}>{c.pricing_sub}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16 }}>
          {plans.map(p => (
            <div key={p.tag} className="price-card" style={{ background: '#111', border: `1.5px solid ${p.featured ? G : '#1a1a1a'}`, borderRadius: 16, padding: 28, position: 'relative', boxShadow: p.featured ? `0 0 40px rgba(125,196,0,0.1)` : undefined }}>
              {p.featured && <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: G, color: '#0A0A0A', fontSize: 10, fontWeight: 700, padding: '3px 12px', borderRadius: 10 }}>{c.recommended}</div>}
              <div style={{ fontSize: 12, color: '#666', marginBottom: 4, letterSpacing: 1 }}>{p.tag}</div>
              <div style={{ fontSize: 36, fontWeight: 800, color: '#fff', marginBottom: 4 }}>{p.price}<span style={{ fontSize: 14, color: '#555', fontWeight: 400 }}>{p.period}</span></div>
              <div style={{ fontSize: 11, color: '#555', marginBottom: 20 }}>{p.setup}</div>
              <div style={{ height: 1, background: '#1a1a1a', marginBottom: 20 }} />
              <ul style={{ listStyle: 'none', marginBottom: 24, display: 'flex', flexDirection: 'column' }}>
                {p.features.map(f => (
                  <li key={f} style={{ fontSize: 12, color: '#777', padding: '5px 0', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: G, fontSize: 10, fontWeight: 700 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href="#contact" style={{ display: 'block', textAlign: 'center', padding: '10px', borderRadius: 20, fontSize: 13, fontWeight: 600, textDecoration: 'none', background: p.filled ? G : 'transparent', border: p.filled ? 'none' : '1px solid #333', color: p.filled ? '#0A0A0A' : '#fff' }}>{p.btn}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Contact ───────────────────────────────────────────────────────────────────
function Contact() {
  const { lang } = useLang()
  const c = CONTENT[lang]
  const [form, setForm] = useState({ name: '', phone: '', service: '', challenge: '' })
  const [done, setDone] = useState(false)
  const [sending, setSending] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.phone) return
    setSending(true)
    await new Promise(r => setTimeout(r, 800))
    setSending(false); setDone(true)
  }

  const contactItems = [
    { icon: '💬', label: c.wa_label,   val: '+60 16-921 2796',  href: 'https://wa.me/60169212796' },
    { icon: '📧', label: c.email_label, val: 'hello@soloai.my', href: 'mailto:hello@soloai.my' },
    { icon: '📍', label: c.loc_label,   val: c.loc_val,          href: undefined },
    { icon: '⏱️', label: c.resp_label,  val: c.resp_val,         href: undefined },
  ]

  return (
    <section id="contact" style={{ padding: '80px 40px', background: '#0A0A0A', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ fontSize: 11, color: G, letterSpacing: 2, marginBottom: 8 }}>{c.contact_eyebrow}</div>
        <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 700, marginBottom: 8, letterSpacing: '-0.5px' }}>{c.contact_title}</h2>
        <p style={{ fontSize: 14, color: '#666', marginBottom: 40 }}>{c.contact_sub}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
          {/* Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {contactItems.map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: '#111', border: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: 11, color: '#555', marginBottom: 3, textTransform: 'uppercase', letterSpacing: 1 }}>{item.label}</div>
                  {item.href
                    ? <a href={item.href} style={{ fontSize: 14, color: '#fff', fontWeight: 600, textDecoration: 'none' }} onMouseEnter={e => (e.currentTarget.style.color = G)} onMouseLeave={e => (e.currentTarget.style.color = '#fff')}>{item.val}</a>
                    : <div style={{ fontSize: 14, color: '#fff', fontWeight: 600 }}>{item.val}</div>}
                </div>
              </div>
            ))}
          </div>
          {/* Form */}
          <div style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: 16, padding: 28 }}>
            {done ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{c.ok_title}</h3>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7 }}>{c.ok_msg}</p>
              </div>
            ) : (
              <form onSubmit={submit}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 20 }}>{c.form_title}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    { label: c.name_label, ph: c.name_ph, key: 'name', type: 'text' },
                    { label: c.phone_label, ph: c.phone_ph, key: 'phone', type: 'tel' },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ display: 'block', fontSize: 11, color: '#666', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>{f.label}</label>
                      <input required type={f.type} placeholder={f.ph}
                        value={form[f.key as keyof typeof form]}
                        onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #1a1a1a', background: '#0A0A0A', color: '#fff', fontSize: 13, outline: 'none', fontFamily: 'inherit' }}
                        onFocus={e => (e.currentTarget.style.borderColor = G)} onBlur={e => (e.currentTarget.style.borderColor = '#1a1a1a')} />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontSize: 11, color: '#666', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>{c.ind_label}</label>
                    <select value={form.service} onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #1a1a1a', background: '#0A0A0A', color: form.service ? '#fff' : '#555', fontSize: 13, outline: 'none', fontFamily: 'inherit' }}>
                      <option value="">{c.ind_ph}</option>
                      {['saloon', 'fnb', 'retail', 'other'].map((v, i) => (
                        <option key={v} value={v}>{c.opt[i]}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, color: '#666', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>{c.ch_label}</label>
                    <textarea rows={3} placeholder={c.ch_ph}
                      value={form.challenge} onChange={e => setForm(p => ({ ...p, challenge: e.target.value }))}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #1a1a1a', background: '#0A0A0A', color: '#fff', fontSize: 13, outline: 'none', resize: 'none', fontFamily: 'inherit' }}
                      onFocus={e => (e.currentTarget.style.borderColor = G)} onBlur={e => (e.currentTarget.style.borderColor = '#1a1a1a')} />
                  </div>
                  <button type="submit" disabled={sending} style={{ padding: '12px', borderRadius: 10, background: sending ? '#444' : G, color: sending ? '#888' : '#0A0A0A', fontWeight: 700, fontSize: 14, border: 'none', cursor: sending ? 'default' : 'pointer' }}>
                    {sending ? c.sending_txt : c.submit_btn}
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
  const { lang } = useLang()
  const c = CONTENT[lang]
  return (
    <footer style={{ padding: '24px 40px', borderTop: '1px solid #1a1a1a', background: '#050505', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
      <div style={{ fontSize: 12, color: '#444' }}>
        <img src={LOGO} alt="Solo AI" style={{ height: 28, width: 'auto', objectFit: 'contain', marginBottom: 6 }} />
        <div>{c.footer_tag}</div>
        <div style={{ marginTop: 4 }}>{c.footer_copy}</div>
      </div>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        {['Saloon', 'DurianTech', 'UniClub OS', 'GoKaki', '+60169212796'].map(l => (
          <span key={l} style={{ fontSize: 12, color: '#444', cursor: 'pointer' }}
            onMouseEnter={e => (e.currentTarget.style.color = G)} onMouseLeave={e => (e.currentTarget.style.color = '#444')}>{l}</span>
        ))}
      </div>
    </footer>
  )
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [lang, setLang] = useState<Lang>('en')
  return (
    <LangCtx.Provider value={{ lang, setLang }}>
      <Navbar />
      <Hero />
      <Ticker />
      <Solutions />
      <DemoSection />
      <WhySoloAI />
      <Pricing />
      <Contact />
      <Footer />
    </LangCtx.Provider>
  )
}
