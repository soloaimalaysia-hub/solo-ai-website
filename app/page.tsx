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
interface ChatMsg { from: 'customer'|'may_out'|'may_boss'; name?: string; text: string; time?: string }
interface PanelItem { label: string; labelZh: string; value: string; valueZh?: string; highlight?: boolean }
interface DemoScenario {
  key: string
  chatTitleEn: string; chatTitleZh: string
  messages: ChatMsg[]
  panel: {
    titleEn: string; titleZh: string
    items: PanelItem[]
    actionEn?: string; actionZh?: string
    holdEn?: string;   holdZh?: string
    noteEn?: string;   noteZh?: string
    noActionEn?: string; noActionZh?: string
  }
}

const DEMO_SCENARIOS: DemoScenario[] = [
  {
    key: 'new_customer',
    chatTitleEn: 'New Customer',
    chatTitleZh: '新顾客',
    messages: [
      { from: 'customer', name: 'Sarah Lim', text: 'Hi! Any slots Saturday for hair highlights?', time: '11:23 AM' },
      { from: 'may_out',  text: 'Hi Sarah! 👋 We have 11am, 2pm & 4pm this Saturday. Highlights ~2hrs, from RM 150. Which works? 😊', time: '11:23 AM' },
      { from: 'customer', name: 'Sarah Lim', text: '2pm please!', time: '11:24 AM' },
      { from: 'may_out',  text: '✅ Booked! Sarah Lim · Saturday 2pm · Highlights. See you then! 🌟', time: '11:24 AM' },
      { from: 'may_boss', text: '🆕 New customer secured! Sarah Lim, Sat 2pm, Highlights RM 150. First visit. Send welcome voucher?', time: '11:24 AM' },
    ],
    panel: {
      titleEn: '🆕 New Customer Alert', titleZh: '🆕 新顾客预约',
      items: [
        { label: 'Customer', labelZh: '顾客', value: 'Sarah Lim (1st visit)', valueZh: 'Sarah Lim（首次光顾）', highlight: true },
        { label: 'Service',  labelZh: '服务', value: 'Hair Highlights', valueZh: '漂染护理' },
        { label: 'Slot',     labelZh: '时间', value: 'Saturday · 2:00pm' },
        { label: 'Revenue',  labelZh: '金额', value: 'RM 150+' },
      ],
      actionEn: '✓ Send RM 15 Welcome Voucher', actionZh: '✓ 发送 RM 15 欢迎折扣',
      holdEn:   'Skip', holdZh: '跳过',
      noteEn:   'First-visit vouchers boost return rate by 40%',
      noteZh:   '首次优惠券提高 40% 回头率',
    },
  },
  {
    key: 'regular',
    chatTitleEn: 'Regular Reminder',
    chatTitleZh: '回头客提醒',
    messages: [
      { from: 'may_boss', text: "👋 Morning! Lisa Chen's last visit was 28 days ago — she usually comes monthly for Keratin Treatment. Send a gentle reminder?", time: '9:01 AM' },
    ],
    panel: {
      titleEn: '💝 Regular Customer Due', titleZh: '💝 回头客提醒',
      items: [
        { label: 'Customer',      labelZh: '顾客',      value: 'Lisa Chen', highlight: true },
        { label: 'Total visits',  labelZh: '总次数',    value: '12 visits', valueZh: '12次' },
        { label: 'Lifetime value',labelZh: '总消费',    value: 'RM 2,160' },
        { label: 'Usual service', labelZh: '常做项目',  value: 'Keratin Treatment', valueZh: '角蛋白护理' },
        { label: 'Last visit',    labelZh: '上次光顾',  value: '28 days ago', valueZh: '28天前' },
      ],
      actionEn: '✓ Send "Miss You" Reminder', actionZh: '✓ 发送"好久不见"提醒',
      holdEn:   'Skip this week', holdZh: '本周跳过',
    },
  },
  {
    key: 'win_back',
    chatTitleEn: 'Win-back',
    chatTitleZh: '追回流失',
    messages: [
      { from: 'may_boss', text: "⚠️ Win-back alert: Annie Lim hasn't visited in 45 days — she used to come monthly. Last service: Deep Conditioning. Send a win-back offer?", time: '9:15 AM' },
    ],
    panel: {
      titleEn: '🔄 Win-back Opportunity', titleZh: '🔄 追回机会',
      items: [
        { label: 'Customer',   labelZh: '顾客',   value: 'Annie Lim', highlight: true },
        { label: 'Last visit', labelZh: '上次光顾', value: '45 days ago ⚠️', valueZh: '45天前 ⚠️' },
        { label: 'Frequency',  labelZh: '通常频率', value: 'Monthly regular', valueZh: '每月回头客' },
        { label: 'Total spent',labelZh: '总消费',  value: 'RM 1,240' },
        { label: 'Offer',      labelZh: '建议优惠', value: '20% off next visit', valueZh: '下次 8折' },
      ],
      actionEn: '✓ Send 20% Win-back Offer', actionZh: '✓ 发送 8折追回优惠',
      holdEn:   'Skip this month', holdZh: '本月跳过',
    },
  },
  {
    key: 'commission',
    chatTitleEn: 'Commission Approval',
    chatTitleZh: '提成审批',
    messages: [
      { from: 'may_boss', text: '📊 Month-end commission ready:\n• Lisa: 42 services · RM 381.50\n• Amy: 35 services · RM 298.00\n• Rachel: 28 services · RM 245.75\n\nTotal payout: RM 925.25. Approve to notify staff?', time: '6:00 PM' },
    ],
    panel: {
      titleEn: '💰 Monthly Commission', titleZh: '💰 月度提成',
      items: [
        { label: 'Lisa',         labelZh: 'Lisa',   value: '42 services · RM 381.50' },
        { label: 'Amy',          labelZh: 'Amy',    value: '35 services · RM 298.00' },
        { label: 'Rachel',       labelZh: 'Rachel', value: '28 services · RM 245.75' },
        { label: 'Total payout', labelZh: '总发放', value: 'RM 925.25', highlight: true },
      ],
      actionEn: '✓ Approve & Notify Staff', actionZh: '✓ 批准并通知员工',
      holdEn:   'Review first', holdZh: '先复查',
    },
  },
  {
    key: 'after_hours',
    chatTitleEn: 'After-hours',
    chatTitleZh: '下班值守',
    messages: [
      { from: 'customer', name: 'Priya S.', text: 'Hi are you open tomorrow?', time: '11:47 PM' },
      { from: 'may_out',  text: "Hi Priya! We're closed now but open tomorrow 10am–7pm 😊 Want to book?", time: '11:47 PM' },
      { from: 'customer', name: 'Priya S.', text: 'Yes! 3pm please', time: '11:48 PM' },
      { from: 'may_out',  text: '✅ Booked! Priya · Tomorrow 3pm. See you! 🎉', time: '11:48 PM' },
      { from: 'may_boss', text: '💤 While you slept: 1 booking captured — Priya, tomorrow 3pm. Revenue secured. Nothing needed from you.', time: '11:48 PM' },
    ],
    panel: {
      titleEn: '🌙 After-hours Duty', titleZh: '🌙 下班值守',
      items: [
        { label: 'Time',          labelZh: '时间',       value: '11:47 PM (after close)', valueZh: '11:47 PM（关门后）' },
        { label: 'Response time', labelZh: '回复速度',   value: '< 1 second', valueZh: '不到 1 秒' },
        { label: 'Booking',       labelZh: '预约',       value: "Priya S. · Tomorrow 3pm", valueZh: "Priya · 明天 3pm" },
        { label: 'Your role',     labelZh: '你需要做什么', value: 'Nothing. Sleep well. 😴', valueZh: '什么都不用做。😴', highlight: true },
      ],
      noActionEn: 'May handled it while you slept. 0 action needed.',
      noActionZh: 'May 帮你搞定了。你不需要做任何事。',
    },
  },
  {
    key: 'daily_briefing',
    chatTitleEn: 'Daily Briefing',
    chatTitleZh: '每日 CEO 简报',
    messages: [
      { from: 'may_boss', text: "☀️ Good morning, Captain!\n\n📅 Today: 8 bookings confirmed\n💰 Yesterday: RM 680 collected\n⭐ Top performer: Lisa (4 services)\n\n⚠️ 2 decisions need you today:\n1. Annie win-back (45 days)\n2. May commission payout", time: '8:00 AM' },
    ],
    panel: {
      titleEn: '☀️ Morning Briefing', titleZh: '☀️ 每日早报',
      items: [
        { label: "Today's bookings",  labelZh: '今日预约',   value: '8 confirmed ✅', valueZh: '8个已确认 ✅' },
        { label: 'Yesterday revenue', labelZh: '昨日收入',   value: 'RM 680', highlight: true },
        { label: 'Top performer',     labelZh: '最佳员工',   value: 'Lisa · 4 services', valueZh: 'Lisa · 4个服务' },
        { label: 'Decisions needed',  labelZh: '待你决策',   value: '2 items below', valueZh: '2项如下' },
      ],
      actionEn: '✓ Handle Decision 1 (Annie)', actionZh: '✓ 处理决策1（Annie）',
      holdEn:   'Skip to Decision 2', holdZh: '处理决策2',
      noteEn:   '2 taps. Done. Back to your coffee ☕',
      noteZh:   '2下搞定。喝你的咖啡 ☕',
    },
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
  const allFeatures = [c.may_features, c.fnb_features]

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
        <p style={{ fontSize: 14, color: '#666', marginBottom: 36, lineHeight: 1.7 }}>{c.sol_sub}</p>

        {/* 2 primary industry cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20, marginBottom: 32 }}>
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
  const [playing, setPlaying]       = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const scenario = DEMO_SCENARIOS[activeTab]
  const msgs = scenario.messages

  function playDemo() {
    setVisibleCount(0); setPlaying(true); let i = 0
    function next() {
      i++; setVisibleCount(i)
      if (i < msgs.length) timerRef.current = setTimeout(next, 1300)
      else setPlaying(false)
    }
    timerRef.current = setTimeout(next, 400)
  }

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setVisibleCount(0); setPlaying(false)
    timerRef.current = setTimeout(() => playDemo(), 600)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab])

  const panel = scenario.panel
  const isSpecialTab = scenario.key === 'daily_briefing'

  return (
    <section id="demo" style={{ padding: '80px 40px', background: '#080808', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontSize: 11, color: G, letterSpacing: 2, marginBottom: 8 }}>{c.demo_eyebrow}</div>
        <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 700, marginBottom: 8, letterSpacing: '-0.5px' }}>{c.demo_title}</h2>
        <p style={{ fontSize: 14, color: '#666', marginBottom: 32 }}>{c.demo_sub}</p>

        {/* 6 scenario tabs — horizontal scroll on mobile */}
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

          {/* ── LEFT: WhatsApp Chat ── */}
          <div style={{ background: '#0d0d0d', border: '1px solid #1a1a1a', borderRadius: 16, overflow: 'hidden' }}>
            {/* Chat header */}
            <div style={{ background: '#111', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: '1px solid #1a1a1a' }}>
              <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#1a2e00', border: `2px solid ${G}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🤖</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>
                  May · {isZh ? scenario.chatTitleZh : scenario.chatTitleEn}
                </div>
                <div style={{ fontSize: 11, color: G }}>● Online · Always Ready</div>
              </div>
            </div>

            {/* Messages */}
            <div style={{ padding: '16px 14px', minHeight: 260, maxHeight: isMobile ? 280 : 340, overflowY: 'auto' }}>
              {msgs.map((msg, i) => {
                if (i >= visibleCount) return null
                const isCustomer = msg.from === 'customer'
                const isMayOut   = msg.from === 'may_out'
                // may_boss = notification TO the boss (orange/amber accent)
                return (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: isCustomer ? 'flex-end' : 'flex-start', marginBottom: 12 }}>
                    {isCustomer && (
                      <div style={{ fontSize: 10, color: '#555', marginBottom: 3, marginRight: 4 }}>
                        {msg.name} · {msg.time}
                      </div>
                    )}
                    {isMayOut && (
                      <div style={{ fontSize: 10, color: G, marginBottom: 3, marginLeft: 4, fontWeight: 600 }}>
                        {c.may_label} · {msg.time}
                      </div>
                    )}
                    {msg.from === 'may_boss' && (
                      <div style={{ fontSize: 10, color: '#FFA500', marginBottom: 3, marginLeft: 4, fontWeight: 600 }}>
                        {c.boss_label} · {msg.time}
                      </div>
                    )}
                    <div style={{
                      maxWidth: '84%', padding: '9px 13px',
                      borderRadius: isCustomer ? '14px 4px 14px 14px' : '4px 14px 14px 14px',
                      background:
                        isCustomer ? '#2a2a2a' :
                        isMayOut   ? '#1a2e00' :
                                     '#2e1800',   /* may_boss = dark amber bg */
                      border:
                        isCustomer ? '1px solid #333' :
                        isMayOut   ? `1px solid rgba(125,196,0,0.25)` :
                                     `1px solid rgba(255,165,0,0.2)`,
                      fontSize: 13, color: '#fff', lineHeight: 1.6, whiteSpace: 'pre-line',
                    }}>
                      {msg.text}
                    </div>
                  </div>
                )
              })}
              {playing && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '8px 12px' }}>
                  {[0,1,2].map(i => (
                    <span key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: G, display: 'inline-block', animation: `pulse-green ${0.6 + i * 0.2}s ease-in-out infinite` }} />
                  ))}
                </div>
              )}
            </div>

            {/* Replay button */}
            <div style={{ padding: '10px 14px', borderTop: '1px solid #1a1a1a', display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={playDemo} disabled={playing} style={{ padding: '6px 16px', borderRadius: 12, background: playing ? '#222' : G, color: playing ? '#555' : '#0A0A0A', fontSize: 12, fontWeight: 700, border: 'none', cursor: playing ? 'default' : 'pointer' }}>
                {playing ? c.playing_txt : c.replay_btn}
              </button>
            </div>
          </div>

          {/* ── RIGHT: Boss Decision Panel ── */}
          <div style={{ background: '#0d0d0d', border: isSpecialTab ? '1px solid rgba(255,215,0,0.15)' : '1px solid #1a1a1a', borderRadius: 16, overflow: 'hidden' }}>
            {/* Panel header */}
            <div style={{ background: isSpecialTab ? '#111500' : '#111', padding: '12px 16px', borderBottom: `1px solid ${isSpecialTab ? 'rgba(255,215,0,0.12)' : '#1a1a1a'}` }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: isSpecialTab ? '#FFD700' : '#fff' }}>
                {isZh ? panel.titleZh : panel.titleEn}
              </div>
              <div style={{ fontSize: 11, color: '#444', marginTop: 2 }}>{c.boss_panel_header}</div>
            </div>

            {/* Panel items */}
            <div style={{ padding: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 18 }}>
                {panel.items.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8,
                    padding: '8px 10px', borderRadius: 8,
                    background: item.highlight ? 'rgba(125,196,0,0.05)' : '#111',
                    border: `1px solid ${item.highlight ? 'rgba(125,196,0,0.18)' : '#1a1a1a'}`,
                  }}>
                    <div style={{ fontSize: 11, color: '#555', flexShrink: 0 }}>
                      {isZh ? item.labelZh : item.label}
                    </div>
                    <div style={{ fontSize: 12, color: item.highlight ? G : '#ccc', fontWeight: item.highlight ? 700 : 400, textAlign: 'right', lineHeight: 1.4 }}>
                      {isZh ? (item.valueZh ?? item.value) : item.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* No-action state (after-hours) */}
              {panel.noActionEn ? (
                <div style={{ background: 'rgba(125,196,0,0.05)', border: '1px solid rgba(125,196,0,0.18)', borderRadius: 10, padding: '16px', textAlign: 'center' }}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>✅</div>
                  <div style={{ fontSize: 13, color: G, fontWeight: 600, lineHeight: 1.5 }}>
                    {isZh ? panel.noActionZh : panel.noActionEn}
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {panel.actionEn && (
                    <button style={{ padding: '11px 16px', borderRadius: 10, background: G, color: '#0A0A0A', fontWeight: 700, fontSize: 13, border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                      {isZh ? panel.actionZh : panel.actionEn}
                    </button>
                  )}
                  {panel.holdEn && (
                    <button style={{ padding: '11px 16px', borderRadius: 10, background: 'transparent', color: '#555', fontWeight: 600, fontSize: 13, border: '1px solid #2a2a2a', cursor: 'pointer', textAlign: 'left' }}>
                      {isZh ? panel.holdZh : panel.holdEn}
                    </button>
                  )}
                  {panel.noteEn && (
                    <div style={{ fontSize: 11, color: '#444', textAlign: 'center', marginTop: 4, fontStyle: 'italic' }}>
                      {isZh ? panel.noteZh : panel.noteEn}
                    </div>
                  )}
                </div>
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
    { tag: lang === 'en' ? 'STARTER' : '基础版', price: 'RM 299', period: lang === 'en' ? '/month' : '/月', setup: lang === 'en' ? '+ RM 1,888 one-time setup' : '+ RM 1,888 一次性设置费', featured: false, features: lang === 'en' ? ['May AI CEO PA (WhatsApp)','Auto booking management','Customer database','Monthly reports','3 months support'] : ['May AI CEO PA（WhatsApp）','自动预约管理','顾客数据库','月报','3个月支持'], btn: lang === 'en' ? 'Get Started' : '开始', filled: false },
    { tag: lang === 'en' ? 'PROFESSIONAL' : '专业版', price: 'RM 499', period: lang === 'en' ? '/month' : '/月', setup: lang === 'en' ? '+ RM 3,888 one-time setup' : '+ RM 3,888 一次性设置费', featured: true, features: lang === 'en' ? ['Everything in Starter','Daily CEO briefing','Staff commission auto-calc','Advanced customer analytics','Custom AI personality','Priority support'] : ['包含基础版所有功能','每日 CEO 简报','员工提成自动计算','高级顾客分析','个性化 AI 形象','优先支持'], btn: lang === 'en' ? 'Get Started →' : '开始 →', filled: true },
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
    { icon: '💬', label: c.wa_label,    val: '+60 16-921 2796',  href: 'https://wa.me/60169212796' },
    { icon: '📧', label: c.email_label, val: 'hello@soloai.my',  href: 'mailto:hello@soloai.my' },
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
    <footer style={{ padding: '24px 40px', borderTop: '1px solid #1a1a1a', background: '#050505', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
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
