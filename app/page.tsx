'use client'

import { useState, useEffect, useRef, createContext, useContext } from 'react'

const G = '#7DC400'
const LOGO = 'https://klrfpzxjsacriaqtfssf.supabase.co/storage/v1/object/public/solo-ai-assets/solo%20ai%20logo.webp'

// ── Bilingual Content ─────────────────────────────────────────────────────────
const CONTENT = {
  en: {
    badge: "MALAYSIA'S AI CEO PA FOR SME",
    hero_p1: 'AI Made ', hero_h1: 'Simple.', hero_p2: 'Business Made ', hero_h2: 'Better.',
    hero_sub: "Your AI CEO PA, living inside WhatsApp — you stay in charge, she handles the work.",
    btn1: 'See Live Demo →', btn2: 'Contact Us',
    nav: [['Solutions','#solutions'],['Live Demo','#demo'],['Pricing','#pricing'],['Contact','#contact']] as [string,string][],
    nav_cta: 'Get Started',
    stat_labels: ['Live Systems','Customer Records','AI Always On','Industries'],
    sol_eyebrow: 'OUR SOLUTIONS',
    sol_title: 'Your Industry. Your AI CEO PA.',
    sol_sub: 'May runs your front office, sends you daily briefings, and executes only with your approval.',
    sol_descs: [
      'May handles bookings, commissions & win-backs — briefing you daily, executing with your one-tap approval.',
      'Chef AI manages reservations, promos & daily revenue. Your restaurant, always at full attention.',
    ] as string[],
    sol_also_powers: 'Solo AI also powers',
    live_txt: 'Live',
    demo_eyebrow: 'LIVE DEMO',
    demo_title: 'You Confirm. May Executes.',
    demo_sub: 'Real conversations. Real decisions. One tap from your phone.',
    tab_labels: ['🆕 New Customer','💝 Regular','🔄 Win-back','💰 Commission','🌙 After-hours','☀️ Daily Briefing'] as string[],
    may_label: 'May 🤖',
    boss_label: 'May → You 📱',
    boss_panel_header: 'Boss · Decision Panel',
    replay_btn: '↺ Replay', playing_txt: 'Playing...',
    demo_cta: 'Get Free Demo →',
    may_features: [
      'Handles all bookings & enquiries 24/7',
      'Sends you a daily 9am CEO briefing',
      'Flags only the decisions that need you',
      'Auto-calculates & prepares staff commissions',
      'Win-back inactive customers automatically',
      'Sends birthday & anniversary offers',
    ] as string[],
    fnb_features: [
      'Handles all reservations & enquiries 24/7',
      'Daily revenue & booking briefing at 9am',
      'Manages waitlist & no-show alerts',
      'Sends promos to returning customers automatically',
      'Chef focuses on cooking — May handles the floor',
      'Monthly revenue report to your WhatsApp',
    ] as string[],
    from_txt: 'Starting from',
    setup_txt: 'one-time setup',
    why_eyebrow: 'WHY SOLO AI',
    why_title: 'Not just software. An AI CEO PA.',
    why_sub: 'You stay in charge. May does the work.',
    why_cards: [
      { icon:'⚡', title:'Live in 3–5 Days', desc:'We set everything up for you. No technical knowledge needed. Just your business info and we handle the rest.' },
      { icon:'🧠', title:'You Confirm, She Executes', desc:"May handles routine work automatically. For decisions that matter — she asks first. One tap. Done." },
      { icon:'💬', title:'WhatsApp Native', desc:"No new apps. May lives where you and your customers already are — inside WhatsApp." },
      { icon:'📊', title:'Daily CEO Briefing', desc:"Every morning: revenue, bookings, staff performance, and decisions that need your approval — one WhatsApp message." },
    ],
    cmp_header: ['FEATURE','Old Way','With May'],
    cmp_rows: [
      { f:'Customer replies',   t:'Manual calls / staff',   s:'✓ Instant · 24/7' },
      { f:'Staff commissions',  t:'Calculated by hand',     s:'✓ Auto-calculated & sent' },
      { f:'Customer follow-up', t:'Never happens',          s:'✓ Auto win-back & birthday' },
      { f:'Daily briefing',     t:'None',                   s:'✓ 9am WhatsApp summary' },
      { f:'Monthly reports',    t:'Manual or none',         s:'✓ Auto via WhatsApp' },
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
    name_label: 'Your Name *',        name_ph: 'e.g. Sarah Lim',
    phone_label: 'WhatsApp Number *', phone_ph: 'e.g. 0123456789',
    ind_label: 'Your Business Type',  ind_ph: 'Select industry...',
    opt: ['Saloon / Beauty','F&B / Restaurant','Retail','Other'],
    ch_label: "What's your biggest challenge?",
    ch_ph: 'e.g. Too many WhatsApp messages to handle...',
    submit_btn: 'Send Request →', sending_txt: 'Sending...',
    ok_title: 'Request Received!', ok_msg: "We'll WhatsApp you within 24 hours.",
    footer_tag: 'AI Made Simple. Business Made Better.',
    footer_copy: '© 2026 Solo AI Malaysia · soloai.my',
  },
  zh: {
    badge: '马来西亚中小企 AI CEO PA 平台',
    hero_p1: 'AI 很', hero_h1: '简单。', hero_p2: '生意更', hero_h2: '好做。',
    hero_sub: '你的 AI CEO PA，住进你的 WhatsApp — 你拍板，她执行',
    btn1: '看演示 →', btn2: '联系我们',
    nav: [['解决方案','#solutions'],['现场演示','#demo'],['价格','#pricing'],['联系我们','#contact']] as [string,string][],
    nav_cta: '开始',
    stat_labels: ['上线系统','顾客数据','AI 永不休息','垂直行业'],
    sol_eyebrow: '我们的解决方案',
    sol_title: '你的行业。你的 AI CEO PA。',
    sol_sub: 'May 管前台、每日汇报、只有你批准后才执行',
    sol_descs: [
      'May 24小时处理预约、提成、顾客追踪 — 每日简报，你一键批准就搞定',
      'Chef AI 管预订、促销、每日收入追踪 — 你的餐厅，永不错失一单',
    ] as string[],
    sol_also_powers: 'Solo AI 同时驱动',
    live_txt: '上线中',
    demo_eyebrow: '现场演示',
    demo_title: '你确认。May 执行。',
    demo_sub: '真实对话，真实决策，手机一按搞定',
    tab_labels: ['🆕 新顾客','💝 回头客','🔄 追回','💰 提成','🌙 下班','☀️ 每日简报'] as string[],
    may_label: 'May 🤖',
    boss_label: 'May → 你 📱',
    boss_panel_header: '老板 · 决策面板',
    replay_btn: '↺ 重播', playing_txt: '播放中...',
    demo_cta: '免费体验 →',
    may_features: [
      '24/7 即刻处理所有预约与询问',
      '每天 9am 发送 CEO 运营简报',
      '只把需要你决策的事抬到你面前',
      '自动计算并准备员工提成',
      '自动追回流失顾客',
      '自动发送生日 & 纪念日优惠',
    ] as string[],
    fnb_features: [
      '24/7 即刻处理所有预订与询问',
      '每天早报：收入、预订、状态',
      '自动管理候位与爽约预警',
      '向回头客自动发送促销',
      '厨师专注烹饪，May 管前台',
      '月收入报告 via WhatsApp',
    ] as string[],
    from_txt: '起步价格',
    setup_txt: '一次性设置费',
    why_eyebrow: '为什么选我们',
    why_title: '不只是软件，是你的 AI CEO PA',
    why_sub: '你掌舵，May 做事',
    why_cards: [
      { icon:'⚡', title:'3–5 天上线', desc:'我们全程为你设置，无需技术知识，只需提供你的生意信息，其余交给我们。' },
      { icon:'🧠', title:'你确认，她执行', desc:'日常工作 May 自动处理。需要你决策的，她来问你——一按批准，搞定。' },
      { icon:'💬', title:'WhatsApp 原生', desc:'无需下载新 App。May 住进你和顾客都在用的 WhatsApp。' },
      { icon:'📊', title:'每日 CEO 简报', desc:'每天早上：收入、预约、员工表现，以及今天需要你拍板的决定——一条 WhatsApp 全搞定。' },
    ],
    cmp_header: ['功能','旧方式','用 May 之后'],
    cmp_rows: [
      { f:'顾客回复',   t:'人工电话/员工',   s:'✓ 即刻 · 24/7' },
      { f:'提成计算',   t:'手工计算',         s:'✓ 自动计算并发送' },
      { f:'顾客追踪',   t:'没有',             s:'✓ 自动追回 & 生日' },
      { f:'每日简报',   t:'没有',             s:'✓ 9am WhatsApp 简报' },
      { f:'月报',       t:'手动或没有',       s:'✓ 自动 WhatsApp 发送' },
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

// ── Demo Scenarios Data ───────────────────────────────────────────────────────
interface ChatMsg { r: 0|1; t: string }
interface BossPanel {
  flag: string; title: string; detail: string
  ok: string; no: string; okMsg: string; noMsg: string
}
interface DemoScenario {
  key: string
  status: string
  messages: ChatMsg[]
  boss: BossPanel
  result: string
}

const DEMO_SCENARIOS: DemoScenario[] = [
  {
    key: 'new_customer',
    status: 'Your AI CEO PA · online',
    messages: [
      { r:1, t:'Hi! How much for balayage? Long hair' },
      { r:0, t:'Hi there! For long hair, balayage starts from RM320 — includes toning & styling. Free slot this week?' },
      { r:1, t:'Saturday got slot ke?' },
      { r:0, t:'Saturday got 11am and 3pm. Which one? And your name?' },
      { r:1, t:"11am. I'm Priya" },
      { r:0, t:'Got it! Holding 11am — confirming with the boss first…' },
    ],
    boss: {
      flag: 'New booking',
      title: 'Approval needed',
      detail: 'Priya · Saturday 11am\nBalayage (long hair) · ~3 hrs · est. RM320',
      ok: 'Confirm booking', no: 'Offer another slot',
      okMsg: 'Confirmed ✓  Priya notified, added to your calendar.',
      noMsg: 'May will offer Priya other slots.',
    },
    result: 'New customer, booked in 5 messages. You did nothing but tap once.',
  },
  {
    key: 'regular',
    status: 'Your AI CEO PA · online',
    messages: [
      { r:1, t:'Hi May, same as always boleh?' },
      { r:0, t:'Sarah! Your usual — full colour touch-up + trim with Kak Alicia, right?' },
      { r:1, t:'Yes exactly' },
      { r:0, t:'Kak Alicia is free Sat 2pm or Sun 11am. Which one?' },
      { r:1, t:'Saturday lah' },
      { r:0, t:'Noted! Locking it with the boss now…' },
    ],
    boss: {
      flag: 'She remembered everything',
      title: 'Approval needed',
      detail: 'Sarah · Saturday 2pm\nWith Kak Alicia (her regular stylist)\nFull colour touch-up + trim',
      ok: 'Confirm', no: 'Change stylist',
      okMsg: 'Done ✓  Sarah set for Sat 2pm with Kak Alicia.',
      noMsg: 'May will ask Sarah her stylist preference.',
    },
    result: "She remembered Sarah's stylist, service & day. No file opened. Just done.",
  },
  {
    key: 'win_back',
    status: 'reaching out automatically…',
    messages: [
      { r:0, t:"[Auto-sent 10:05am] Hi Mei! It's been 6 weeks — your colour might need a touch-up. We miss you 💚 Free any day this week?" },
      { r:1, t:'Eh ya la! Thursday can?' },
      { r:0, t:'Thursday got 1pm and 4pm. Which suits?' },
      { r:1, t:'1pm can' },
      { r:0, t:'Holding 1pm — confirming your slot with the boss…' },
    ],
    boss: {
      flag: 'Lost client coming back',
      title: 'Approval needed',
      detail: 'Mei · Thursday 1pm\n45 days no visit\nMay reached out automatically — you did nothing',
      ok: 'Confirm slot', no: 'Reschedule',
      okMsg: 'Confirmed ✓  Mei is back. Thursday 1pm locked in.',
      noMsg: 'May will offer Mei other slots.',
    },
    result: "45 days gone. One message from May. Back. You never even knew she'd lapsed.",
  },
  {
    key: 'commission',
    status: 'Your AI CEO PA · online',
    messages: [
      { r:1, t:'May, berapa Alicia punya komisyen bulan ni?' },
      { r:0, t:'Alicia · June 2026\n23 clients served\nRevenue: RM 4,850\nCommission (30%): RM 1,455\n\nTop service: Balayage (8)\nBusiest day: Saturday' },
    ],
    boss: {
      flag: 'Payroll',
      title: 'Commission — approve?',
      detail: 'Alicia · June 2026\nRM 1,455  (30% of RM 4,850)\nRecord as paid?',
      ok: 'Approve payment', no: 'Hold — check first',
      okMsg: 'Recorded ✓  Alicia notified of her commission.',
      noMsg: 'Held. May will remind you tomorrow.',
    },
    result: 'Two hours of spreadsheets. Now: 8 seconds and one tap.',
  },
  {
    key: 'after_hours',
    status: 'online · 11:14pm',
    messages: [
      { r:1, t:'[11:14pm] hi is it too late? want to book tmrw' },
      { r:0, t:'Never too late! Tomorrow got 10am, 12pm and 3pm. What service?' },
      { r:1, t:'hair treatment and trim' },
      { r:0, t:"About 1.5 hours. 10am works best — what's your name?" },
      { r:1, t:'Lina' },
      { r:0, t:'Got it Lina! Holding 10am — the boss will see this in the morning…' },
    ],
    boss: {
      flag: 'Booked while you slept',
      title: 'Approval (next morning)',
      detail: 'Lina · Tomorrow 10am\nTreatment + trim (~1.5 hrs)\nInquiry came in at 11:14pm',
      ok: 'Confirm', no: 'Decline',
      okMsg: 'Confirmed ✓  Lina notified for 10am.',
      noMsg: 'Lina notified slot unavailable. May suggests alternatives.',
    },
    result: 'You were asleep. You woke up to a confirmed booking. Zero missed inquiries.',
  },
  {
    key: 'daily_briefing',
    status: 'your morning briefing…',
    messages: [
      { r:0, t:'Morning boss ☀️ Yesterday: RM 3,240 (▲12% vs last Wed). 18 appointments, 2 no-shows. Top service: Balayage. Two things 👇' },
      { r:0, t:'1) Wei Ling is your top stylist — RM 9,800, 64 clients.\n2) Aminah is down 18% this month — worth a quick chat.' },
      { r:1, t:"Any customers I'm about to lose?" },
      { r:0, t:"Yes — 5 VIP clients haven't visited in 40+ days. Together they're worth ~RM 2,400 a round. Shall I win them back?" },
    ],
    boss: {
      flag: 'Daily Briefing · she watches everything',
      title: 'Win-back — your approval',
      detail: "5 VIP clients · 40+ days no visit\nSend a personalised 'we miss you' offer to all 5?",
      ok: 'Yes, send to all 5', no: 'Let me pick',
      okMsg: "Sent ✓  5 offers out. I'll report who books back.",
      noMsg: 'Opening the list for you to choose.',
    },
    result: "She read every number — and handed you the one decision that mattered. That's a PA, not a chatbot.",
  },
]

// ── Solution meta ─────────────────────────────────────────────────────────────
const SOL_PRIMARY = [
  { icon: 'ti-scissors', nameEn: 'May — Salon AI CEO PA',    nameZh: 'May — 美容院 AI CEO PA',   tag: 'BEAUTY & WELLNESS', tagZh: '美容 & 健康', featIdx: 0 },
  { icon: 'ti-chef-hat', nameEn: 'Chef AI — F&B CEO PA',     nameZh: 'Chef AI — 餐饮 AI CEO PA', tag: 'FOOD & BEVERAGE',   tagZh: '餐饮行业',    featIdx: 1 },
]
const SOL_ALSO = [
  { icon: 'ti-leaf',   nameEn: 'DurianTech',  nameZh: 'DurianTech',  tag: 'Agriculture' },
  { icon: 'ti-school', nameEn: 'UniClub OS',  nameZh: 'UniClub OS',  tag: 'Education' },
  { icon: 'ti-car',    nameEn: 'GoKaki',      nameZh: 'GoKaki',      tag: 'Tourism' },
]

// ── Lang context ──────────────────────────────────────────────────────────────
type Lang = 'en' | 'zh'
const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: 'en', setLang: () => {} })
const useLang = () => useContext(LangCtx)

// ── Mobile detection hook ─────────────────────────────────────────────────────
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isMobile
}

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
  const isMobile = useIsMobile()
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, borderBottom: '1px solid #1a1a1a', background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(12px)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 16px' : '0 40px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img src={LOGO} alt="Solo AI" style={{ height: 32, width: 'auto', objectFit: 'contain', flexShrink: 0 }} />
        {!isMobile && (
          <div style={{ display: 'flex', gap: 24, fontSize: 13 }}>
            {c.nav.map(([label, href]) => (
              <a key={href} href={href} style={{ color: '#888', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = G)}
                onMouseLeave={e => (e.currentTarget.style.color = '#888')}>{label}</a>
            ))}
          </div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 8 : 12 }}>
          <LangToggle />
          <a href="#contact" style={{ padding: isMobile ? '7px 14px' : '8px 20px', borderRadius: 20, background: G, color: '#0A0A0A', fontWeight: 600, fontSize: 13, textDecoration: 'none', whiteSpace: 'nowrap' }}>{c.nav_cta}</a>
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
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 'clamp(100px,15vw,120px) clamp(16px,5vw,40px) 80px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%,-50%)', width: 'min(700px,180vw)', height: 'min(700px,180vw)', borderRadius: '50%', background: 'radial-gradient(circle, rgba(125,196,0,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
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
    '6 Live Systems · 6个系统上线', 'May · AI CEO PA 24/7', '1,744 Real Customers · 真实顾客',
    'Salon · F&B · Durian · Campus', 'You Confirm · She Executes · 你拍板她执行',
    'Built for Malaysia SME · 专为大马中小企', '6 Live Systems · 6个系统上线', 'May · AI CEO PA 24/7',
    '1,744 Real Customers · 真实顾客', 'Salon · F&B · Durian · Campus',
    'You Confirm · She Executes · 你拍板她执行', 'Built for Malaysia SME · 专为大马中小企',
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
function Solutions() {
  const { lang } = useLang()
  const c = CONTENT[lang]
  const isZh = lang === 'zh'
  const isMobile = useIsMobile()
  const allFeatures = [c.may_features, c.fnb_features]

  return (
    <section id="solutions" style={{ padding: isMobile ? '40px 16px' : '60px 40px', background: '#0A0A0A' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Stats bar */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: 1, background: '#1a1a1a', border: '1px solid #1a1a1a', borderRadius: 16, overflow: 'hidden', marginBottom: 40 }}>
          {[{ num:'6', i:0 },{ num:'1,744', i:1 },{ num:'24/7', i:2 },{ num:'4+', i:3 }].map(s => (
            <div key={s.i} style={{ background: '#111', padding: isMobile ? '20px 12px' : 28, textAlign: 'center' }}>
              <div style={{ fontSize: isMobile ? 26 : 32, fontWeight: 800, color: G, marginBottom: 6 }}>{s.num}</div>
              <div style={{ fontSize: 11, color: '#555' }}>{c.stat_labels[s.i]}</div>
            </div>
          ))}
        </div>

        <div style={{ fontSize: 11, color: G, letterSpacing: 2, marginBottom: 8 }}>{c.sol_eyebrow}</div>
        <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 700, marginBottom: 8, letterSpacing: '-0.5px' }}>{c.sol_title}</h2>
        <p style={{ fontSize: 14, color: '#666', marginBottom: 36, lineHeight: 1.7 }}>{c.sol_sub}</p>

        {/* 2 primary industry cards */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit,minmax(300px,1fr))', gap: 20, marginBottom: 32 }}>
          {SOL_PRIMARY.map((s, i) => {
            const features = allFeatures[i]
            return (
              <div key={s.nameEn} className="solution-card" style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: 16, padding: 28, position: 'relative', overflow: 'hidden' }}>
                <div className="card-top-line" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: G }} />
                <div style={{ marginBottom: 14 }}><i className={`ti ${s.icon}`} style={{ fontSize: 36, color: G }} /></div>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4, color: '#fff' }}>{isZh ? s.nameZh : s.nameEn}</div>
                <div style={{ fontSize: 10, color: G, background: '#0d1a00', padding: '2px 8px', borderRadius: 10, display: 'inline-block', marginBottom: 14 }}>{isZh ? s.tagZh : s.tag}</div>
                <p style={{ fontSize: 12, color: '#666', lineHeight: 1.75, marginBottom: 18 }}>{c.sol_descs[i]}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 18 }}>
                  {features.map((f, fi) => (
                    <div key={fi} style={{ display: 'flex', gap: 8, fontSize: 12, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>
                      <span style={{ color: G, flexShrink: 0, fontWeight: 700 }}>✓</span><span>{f}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: G }}>
                  <span className="live-dot" style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', background: G }} />{c.live_txt}
                </div>
              </div>
            )
          })}
        </div>

        {/* Credibility strip */}
        <div style={{ background: '#0d0d0d', border: '1px solid #1a1a1a', borderRadius: 12, padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 11, color: '#444', letterSpacing: 1, flexShrink: 0 }}>{c.sol_also_powers}:</span>
          {SOL_ALSO.map(s => (
            <div key={s.nameEn} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <i className={`ti ${s.icon}`} style={{ fontSize: 14, color: '#555' }} />
              <span style={{ fontSize: 12, color: '#555' }}>{isZh ? s.nameZh : s.nameEn}</span>
              <span style={{ fontSize: 10, color: '#333', background: '#1a1a1a', padding: '1px 6px', borderRadius: 6 }}>{s.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Live Demo (CEO PA Split-Screen) ───────────────────────────────────────────
function DemoSection() {
  const { lang } = useLang()
  const c = CONTENT[lang]
  const isZh = lang === 'zh'
  const isMobile = useIsMobile()
  const [activeTab, setActiveTab] = useState(0)
  const [visibleCount, setVisibleCount] = useState(0)
  const [typingIdx, setTypingIdx]   = useState(-1)
  const [playing, setPlaying]       = useState(false)
  const [panelVisible, setPanelVisible] = useState(false)
  const [actionState, setActionState]   = useState<null|'ok'|'no'>(null)
  const timerRefs = useRef<ReturnType<typeof setTimeout>[]>([])
  const chatRef   = useRef<HTMLDivElement>(null)

  const scenario   = DEMO_SCENARIOS[activeTab]
  const isGoldTab  = scenario.key === 'daily_briefing'

  function clearAll() { timerRefs.current.forEach(clearTimeout); timerRefs.current = [] }

  function scrollBottom() {
    setTimeout(() => { if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight }, 30)
  }

  function playDemo() {
    clearAll()
    setVisibleCount(0); setTypingIdx(-1); setPlaying(true)
    setPanelVisible(false); setActionState(null)
    const ms = DEMO_SCENARIOS[activeTab].messages
    const ts: ReturnType<typeof setTimeout>[] = []
    let t = 400
    ms.forEach((msg, i) => {
      if (msg.r === 1) {
        ts.push(setTimeout(() => { setVisibleCount(i + 1); scrollBottom() }, t))
        t += 850
      } else {
        ts.push(setTimeout(() => { setTypingIdx(i); scrollBottom() }, t))
        t += msg.t.length > 80 ? 2100 : 1500
        ts.push(setTimeout(() => { setVisibleCount(i + 1); setTypingIdx(-1); scrollBottom() }, t))
        t += 620
      }
    })
    ts.push(setTimeout(() => { setPlaying(false); setPanelVisible(true) }, t + 300))
    timerRefs.current = ts
  }

  useEffect(() => {
    clearAll()
    setVisibleCount(0); setTypingIdx(-1); setPlaying(false); setPanelVisible(false); setActionState(null)
    timerRefs.current = [setTimeout(playDemo, 600)]
    return clearAll
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab])

  const boss        = scenario.boss
  const detailLines = boss.detail.split('\n')

  return (
    <section id="demo" style={{ padding: isMobile ? '50px 16px' : '80px 40px', background: '#080808', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontSize: 11, color: G, letterSpacing: 2, marginBottom: 8 }}>{c.demo_eyebrow}</div>
        <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 700, marginBottom: 8, letterSpacing: '-0.5px' }}>{c.demo_title}</h2>
        <p style={{ fontSize: 14, color: '#666', marginBottom: 32 }}>{c.demo_sub}</p>

        {/* 6 scenario tabs */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 24, overflowX: 'auto', paddingBottom: 4, msOverflowStyle: 'none' }}>
          {DEMO_SCENARIOS.map((s, i) => {
            const isActive = activeTab === i
            const isGold   = s.key === 'daily_briefing'
            return (
              <button key={s.key} onClick={() => setActiveTab(i)} style={{
                padding: '7px 14px', borderRadius: 18, fontSize: 12, fontWeight: 600,
                cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0, transition: 'all 0.2s',
                background: isActive ? (isGold ? '#1a1500' : G) : 'transparent',
                color:      isActive ? (isGold ? '#FFD700' : '#0A0A0A') : '#555',
                border:     isActive ? (isGold ? '1px solid rgba(255,215,0,0.4)' : 'none') : '1px solid #2a2a2a',
                boxShadow:  isActive && isGold ? '0 0 16px rgba(255,215,0,0.12)' : undefined,
              }}>
                {c.tab_labels[i]}
              </button>
            )
          })}
        </div>

        {/* Split-screen: chat left, boss panel right */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 20, alignItems: 'start' }}>

          {/* ── LEFT: Chat + Result ── */}
          <div>
            <div style={{ background: '#0d0d0d', border: '1px solid #1a1a1a', borderRadius: 16, overflow: 'hidden' }}>
              {/* Chat header */}
              <div style={{ background: '#111', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: '1px solid #1a1a1a' }}>
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'radial-gradient(circle at 34% 30%, #b9e188, #7DC400 72%)', border: `2px solid ${G}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#11260a', fontSize: 16, flexShrink: 0 }}>M</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>May · AI CEO PA</div>
                  <div style={{ fontSize: 11, color: G, display: 'flex', alignItems: 'center', gap: 5 }}>
                    <span style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', background: G, boxShadow: `0 0 5px ${G}`, flexShrink: 0 }} />
                    {scenario.status}
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div ref={chatRef} style={{ padding: '16px 14px', minHeight: 260, maxHeight: isMobile ? 280 : 340, overflowY: 'auto' }}>
                {scenario.messages.map((msg, i) => {
                  const isVisible = i < visibleCount
                  const isTyping  = typingIdx === i
                  if (!isVisible && !isTyping) return null
                  if (isTyping) {
                    return (
                      <div key={`typing-${i}`} style={{ display: 'flex', marginBottom: 10 }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '10px 14px', background: 'rgba(125,196,0,0.1)', border: '1px solid rgba(125,196,0,0.22)', borderRadius: '4px 14px 14px 14px' }}>
                          {[0, 1, 2].map(j => <span key={j} style={{ width: 5, height: 5, borderRadius: '50%', background: G, display: 'inline-block', animation: `bop ${0.6 + j * 0.18}s ease-in-out infinite` }} />)}
                        </div>
                      </div>
                    )
                  }
                  const isRight = msg.r === 1
                  return (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: isRight ? 'flex-end' : 'flex-start', marginBottom: 10 }}>
                      <div style={{
                        maxWidth: '84%', padding: '9px 13px',
                        borderRadius: isRight ? '14px 4px 14px 14px' : '4px 14px 14px 14px',
                        background: isRight ? '#2a2a2a' : 'rgba(125,196,0,0.1)',
                        border: isRight ? '1px solid #333' : '1px solid rgba(125,196,0,0.22)',
                        fontSize: 13, color: isRight ? '#ddd' : '#e4f1d6', lineHeight: 1.6, whiteSpace: 'pre-line',
                      }}>{msg.t}</div>
                    </div>
                  )
                })}
              </div>

              {/* Replay */}
              <div style={{ padding: '10px 14px', borderTop: '1px solid #1a1a1a', display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={playDemo} disabled={playing} style={{ padding: '6px 16px', borderRadius: 12, background: playing ? '#222' : G, color: playing ? '#555' : '#0A0A0A', fontSize: 12, fontWeight: 700, border: 'none', cursor: playing ? 'default' : 'pointer' }}>
                  {playing ? c.playing_txt : c.replay_btn}
                </button>
              </div>
            </div>

            {/* Result text — appears after scenario ends */}
            {panelVisible && (
              <div style={{ marginTop: 10, borderLeft: `2px solid ${G}`, padding: '11px 15px', background: 'rgba(125,196,0,0.06)', color: '#cfe2bb', fontSize: 12, lineHeight: 1.55, borderRadius: '0 8px 8px 0' }}>
                {scenario.result}
              </div>
            )}
          </div>

          {/* ── RIGHT: Boss Decision Panel ── */}
          <div style={{
            background: isGoldTab ? 'linear-gradient(165deg, #131500, #0a0a00)' : 'linear-gradient(165deg, #101829, #0a1020)',
            border: isGoldTab ? '1px solid rgba(255,215,0,0.15)' : '1px solid rgba(255,255,255,0.08)',
            borderRadius: 16, overflow: 'hidden', position: 'relative', minHeight: 220,
          }}>
            {/* Top shimmer line */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${isGoldTab ? 'rgba(255,215,0,0.9)' : G}, transparent)`, opacity: 0.55 }} />
            <div style={{ padding: 17 }}>
              {panelVisible ? (
                <div>
                  <div style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: isGoldTab ? '#FFD700' : G, marginBottom: 9 }}>{boss.flag}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 11 }}>
                    <div style={{ width: 27, height: 27, borderRadius: '50%', background: 'radial-gradient(circle at 34% 30%, #b9e188, #7DC400 72%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: '#11260a', fontWeight: 700, flexShrink: 0 }}>M</div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: '#eef1ee', lineHeight: 1.4 }}>{boss.title}</div>
                  </div>
                  <p style={{ fontSize: 12, color: '#aab3c0', lineHeight: 1.7, marginBottom: 15 }}>
                    <strong style={{ color: '#e8f0df', fontWeight: 500 }}>{detailLines[0]}</strong>
                    {detailLines.slice(1).map((line, li) => <span key={li}><br />{line}</span>)}
                  </p>
                  {actionState ? (
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <span style={{ fontSize: 16, lineHeight: 1.2 }}>{actionState === 'ok' ? '✅' : '❌'}</span>
                      <span style={{ fontSize: 12, lineHeight: 1.55, color: actionState === 'ok' ? '#b9e188' : '#e0917a' }}>
                        {actionState === 'ok' ? boss.okMsg : boss.noMsg}
                      </span>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button onClick={() => setActionState('ok')} style={{ flex: 1, padding: '9px 14px', borderRadius: 9, fontSize: 12, fontWeight: 500, cursor: 'pointer', background: G, color: '#11260a', border: `1px solid ${G}`, fontFamily: 'inherit', transition: '.15s' }}>
                        {boss.ok}
                      </button>
                      <button onClick={() => setActionState('no')} style={{ flex: 1, padding: '9px 14px', borderRadius: 9, fontSize: 12, fontWeight: 500, cursor: 'pointer', background: 'transparent', color: '#aab3c0', border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'inherit', transition: '.15s' }}>
                        {boss.no}
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <p style={{ fontSize: 12, color: '#5c6678', textAlign: 'center', margin: '48px 0' }}>
                  {isZh ? 'May 正在处理中…' : 'May is working on it…'}
                </p>
              )}
            </div>
          </div>

        </div>

        {/* CTA under demo */}
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <a href="#contact" style={{ display: 'inline-block', padding: '12px 32px', borderRadius: 25, background: G, color: '#0A0A0A', fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
            {c.demo_cta}
          </a>
        </div>
      </div>
    </section>
  )
}

// ── Why Solo AI ───────────────────────────────────────────────────────────────
function WhySoloAI() {
  const { lang } = useLang()
  const c = CONTENT[lang]
  const isMobile = useIsMobile()
  return (
    <section style={{ padding: isMobile ? '50px 16px' : '80px 40px', background: '#0A0A0A', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontSize: 11, color: G, letterSpacing: 2, marginBottom: 8 }}>{c.why_eyebrow}</div>
        <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 700, marginBottom: 8, letterSpacing: '-0.5px' }}>{c.why_title}</h2>
        <p style={{ fontSize: 14, color: '#666', marginBottom: 40 }}>{c.why_sub}</p>
        {/* 4 cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(220px,100%),1fr))', gap: 16, marginBottom: 48 }}>
          {c.why_cards.map(card => (
            <div key={card.title} className="solution-card" style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: 14, padding: '24px 20px', position: 'relative', overflow: 'hidden' }}>
              <div className="card-top-line" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: G }} />
              <div style={{ fontSize: 28, marginBottom: 14 }}>{card.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{card.title}</div>
              <div style={{ fontSize: 12, color: '#666', lineHeight: 1.65 }}>{card.desc}</div>
            </div>
          ))}
        </div>
        {/* Comparison table — scrollable on mobile */}
        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', borderRadius: 16 }}>
          <div style={{ background: '#0d0d0d', border: '1px solid #1a1a1a', borderRadius: 16, overflow: 'hidden', minWidth: 480 }}>
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
      </div>
    </section>
  )
}

// ── Pricing ───────────────────────────────────────────────────────────────────
function Pricing() {
  const { lang } = useLang()
  const c = CONTENT[lang]
  const plans = [
    { tag: lang === 'en' ? 'STARTER' : '基础版', price: 'RM 299', period: lang === 'en' ? '/month' : '/月', setup: lang === 'en' ? '+ RM 1,888 one-time setup' : '+ RM 1,888 一次性设置费', featured: false, features: lang === 'en' ? ['May AI CEO PA (WhatsApp)','Auto booking management','Customer database','Monthly reports','3 months support'] : ['May AI CEO PA（WhatsApp）','自动预约管理','顾客数据库','月报','3个月支持'], btn: lang === 'en' ? 'Get Started' : '开始', filled: false },
    { tag: lang === 'en' ? 'PROFESSIONAL' : '专业版', price: 'RM 499', period: lang === 'en' ? '/month' : '/月', setup: lang === 'en' ? '+ RM 3,888 one-time setup' : '+ RM 3,888 一次性设置费', featured: true, features: lang === 'en' ? ['Everything in Starter','Daily CEO briefing','Staff commission auto-calc','Advanced customer analytics','Custom AI personality','Priority support'] : ['包含基础版所有功能','每日 CEO 简报','员工提成自动计算','高级顾客分析','个性化 AI 形象','优先支持'], btn: lang === 'en' ? 'Get Started →' : '开始 →', filled: true },
    { tag: lang === 'en' ? 'ENTERPRISE' : '企业版', price: lang === 'en' ? 'Custom' : '定制', period: '', setup: lang === 'en' ? 'Multi-location · Multi-industry' : '多门店 · 多行业', featured: false, features: lang === 'en' ? ['Everything in Professional','Multi-branch','Custom integrations','Dedicated account manager','SEA expansion ready'] : ['包含专业版所有功能','多分店管理','定制集成','专属客户经理','东南亚扩张就绪'], btn: lang === 'en' ? 'Contact Us' : '联系我们', filled: false },
  ]
  return (
    <section id="pricing" style={{ padding: 'clamp(40px,8vw,60px) clamp(16px,5vw,40px)', background: '#080808', borderTop: '1px solid #1a1a1a' }}>
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
  const isMobile = useIsMobile()
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
    { icon: '💬', label: c.wa_label,    val: '+60 16-921 2796',  href: 'https://wa.me/60169212796' },
    { icon: '📧', label: c.email_label, val: 'hello@soloai.my',  href: 'mailto:hello@soloai.my' },
    { icon: '📍', label: c.loc_label,   val: c.loc_val,          href: undefined },
    { icon: '⏱️', label: c.resp_label,  val: c.resp_val,         href: undefined },
  ]

  return (
    <section id="contact" style={{ padding: isMobile ? '50px 16px' : '80px 40px', background: '#0A0A0A', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ fontSize: 11, color: G, letterSpacing: 2, marginBottom: 8 }}>{c.contact_eyebrow}</div>
        <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 700, marginBottom: 8, letterSpacing: '-0.5px' }}>{c.contact_title}</h2>
        <p style={{ fontSize: 14, color: '#666', marginBottom: 40 }}>{c.contact_sub}</p>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 32 : 48, alignItems: 'start' }}>
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
                    { label: c.name_label,  ph: c.name_ph,  key: 'name',  type: 'text' },
                    { label: c.phone_label, ph: c.phone_ph, key: 'phone', type: 'tel'  },
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
    <footer style={{ padding: 'clamp(20px,4vw,24px) clamp(16px,5vw,40px)', borderTop: '1px solid #1a1a1a', background: '#050505', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
      <div style={{ fontSize: 12, color: '#444' }}>
        <img src={LOGO} alt="Solo AI" style={{ height: 28, width: 'auto', objectFit: 'contain', marginBottom: 6 }} />
        <div>{c.footer_tag}</div>
        <div style={{ marginTop: 4 }}>
          {c.footer_copy} · Powered by{' '}
          <a href="https://soloai.my" target="_blank" rel="noopener noreferrer" style={{ color: G, textDecoration: 'none' }}>Solo AI</a>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        {['Salon','F&B','DurianTech','UniClub OS','GoKaki','+60169212796'].map(l => (
          <span key={l} style={{ fontSize: 12, color: '#444', cursor: 'pointer' }}
            onMouseEnter={e => (e.currentTarget.style.color = G)}
            onMouseLeave={e => (e.currentTarget.style.color = '#444')}>{l}</span>
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
