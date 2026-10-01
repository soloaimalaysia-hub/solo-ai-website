'use client'

import { useState, useEffect } from 'react'

const G = '#7DC400'
const LOGO = 'https://klrfpzxjsacriaqtfssf.supabase.co/storage/v1/object/public/solo-ai-assets/solo%20ai%20logo.webp'
type Lang = 'en' | 'zh'

interface FaqItem { q: string; a: string }
interface FaqCategory { icon: string; label: string; items: FaqItem[] }

const FAQ_DATA: Record<Lang, FaqCategory[]> = {
  en: [
    { icon: '🏪', label: 'Salon & Beauty', items: [
      { q: "My salon's WhatsApp is flooded with booking requests every day — staff keep missing messages. What can I do?", a: "Solo AI's May (AI CEO PA) handles WhatsApp bookings 24/7 — auto-replies, confirms time slots, and syncs to your booking system. No more missed messages. Tested result: over 90% reduction in missed bookings." },
      { q: 'Can AI automatically calculate staff commissions? We argue every month over manual calculations.', a: "Yes. May tracks every stylist's service records automatically and generates commission reports at month-end. Transparent data — staff can see their own performance. No more disputes." },
      { q: "Customers haven't visited in a long time — I want to bring them back but don't have time to message each one.", a: "May has auto win-back. Customers inactive for 30/60/90 days get an automatic WhatsApp care message + exclusive offer. You just one-tap approve." },
      { q: "I'm not tech-savvy. Is setup complicated?", a: "No tech skills needed at all. We set everything up for you in 3–5 days. Just provide your business info. May lives inside WhatsApp — no new app for you or your customers." },
      { q: 'My customers mix Malay, English, and Chinese (Rojak) on WhatsApp. Can the AI understand that?', a: "Yes. May supports Bahasa Malaysia, English, and Chinese — and understands Rojak mixed-language messages. Malaysian AI that speaks like Malaysians." },
      { q: 'I have 3 branches. Can May manage all of them?', a: "Yes. Enterprise plan supports multi-branch management — each branch has independent data but you see a unified report. One WhatsApp manages everything." },
      { q: 'Does May send me a morning briefing about today\'s appointments?', a: "Every morning at 9am, May sends a CEO Briefing to your WhatsApp: today's appointments, which staff is on duty, anything that needs your decision. One-tap to confirm." },
      { q: 'How much does it cost? Any hidden fees?', a: "Starter: from RM 5,888 (core foundation + any 3 modules). Growth: from RM 8,888 (core foundation + any 5 modules + AI landing page). Bespoke: custom pricing for cross-system integration and custom development. No hidden fees." },
    ]},
    { icon: '🍜', label: 'F&B / Restaurant', items: [
      { q: "Peak hours — my restaurant's WhatsApp reservation requests are flooding in and staff can't keep up.", a: "Chef AI (F&B version of AI CEO PA) auto-handles all WhatsApp reservations — replies within 3 seconds. Even during peak hours, never miss a customer." },
      { q: 'Can AI manage my waitlist? Customers leave when they wait too long.', a: "Yes. Chef AI auto-manages the waitlist and notifies queued customers when a table opens. Also tracks no-show records to identify frequent flakers." },
      { q: 'I want to send promos to returning customers but don\'t know who they are.', a: "Chef AI automatically tracks every customer's dining history. Returning customers, new customers, lapsed customers — auto-categorized. One-click to send exclusive offers to any group." },
      { q: 'My chef just wants to cook — doesn\'t want to deal with front-of-house.', a: "That's exactly why Chef AI exists. Reservations, customer inquiries, queue management, promo sends — all handled by AI. Chef focuses on cooking, boss focuses on profit." },
      { q: 'I have to manually calculate monthly revenue reports. Is there an automatic way?', a: "Chef AI auto-generates monthly revenue reports sent straight to your WhatsApp. Daily and weekly data too. No Excel, no manual calculation." },
      { q: 'I have Grab/Foodpanda delivery orders. Can AI help manage those?', a: "Currently Chef AI focuses on WhatsApp direct orders and dine-in reservation management. Delivery platform integration is in future planning. But your WhatsApp direct customers are the most profitable — zero platform commission." },
      { q: 'What if I want to host a special event (birthday party / private booking)?', a: "You set up event details in the backend, Chef AI automatically answers related WhatsApp inquiries, collects booking info, and sends confirmation notifications." },
      { q: 'How long to set up? Do I need to change my POS system?', a: "3–5 days setup. No changes to your POS needed. Chef AI runs independently on WhatsApp, parallel to your existing system, zero conflict." },
    ]},
    { icon: '🤖', label: 'AI Vending Machine', items: [
      { q: 'I have dozens of vending machines, thousands of transactions a day, but all the data is lost. What can I do?', a: "Solo AI's Vending System captures every transaction from every machine in real-time. Inventory, sales, popular items, restocking predictions — all automated, no more relying on manual records." },
      { q: 'Restocking timing is always off — sometimes machines run empty before we notice.', a: "AI restocking prediction engine analyzes historical sales + time patterns to tell you which machine will run low tomorrow. Combined with delivery route optimization, saves significant manpower and fuel daily." },
      { q: 'I want to set up an employee benefits program (company-subsidized coffee). Is there a system for that?', a: "Yes. Our Heraa Coffee System already powers corporate employee benefit programs: company subsidy → employees redeem via app → live display screen shows activity. Accounting gets auto-reports at month-end." },
      { q: 'What does vending machine CRM even mean?', a: "Traditional vending machines only sell — they don't know customers. AI Vending CRM helps you identify every buyer: purchase habits, preferences, visit frequency. Then AI auto-sends offers, runs loyalty points, boosts repeat purchases." },
      { q: 'What types of vending machines can this system work with?', a: "Coffee machines, snack machines, beverage machines, durian machines — any vending machine that needs inventory management + customer data + restocking prediction. System is brand-agnostic, it connects at the data layer." },
      { q: 'How is pricing calculated?', a: "Custom pricing based on number of machines and feature requirements. We offer early-adopter pricing for first-batch partners in exchange for real data feedback. Contact Captain K directly for details." },
    ]},
    { icon: '❓', label: 'General', items: [
      { q: 'What is Solo AI?', a: "Solo AI is a Malaysian-born AI systems company, purpose-built for SMEs. We create AI CEO PAs (AI Executive Assistants). You make decisions, AI executes. Currently serving Salon, F&B, Vending Machine and more." },
      { q: 'How is this different from ChatGPT?', a: "ChatGPT is a general chat tool. Solo AI's May is a custom execution system built for your industry — she doesn't just chat, she books appointments, calculates commissions, sends reminders, generates reports, follows up with customers. She lives in your WhatsApp, connected to your real business data." },
      { q: 'Is my customer data safe?', a: "Absolutely. Each client's data is stored in an independent encrypted database, never shared with other businesses. Full access controls and audit logging. Your data belongs only to you." },
      { q: 'Is there a contract lock-in period?', a: "No. Monthly payment, cancel anytime. We keep you through service quality, not contract lock-in." },
      { q: 'How long have you been around? How many clients?', a: "Solo AI has been building since 2025. Currently 6 live systems covering 1,744+ real customer records. Founded by Captain K with 20 years of entrepreneurial experience combined with AI technology to serve every client." },
      { q: "I'm not in KL. Can you set up remotely?", a: "Absolutely. All Solo AI setup is done online. As long as you have WhatsApp and internet — whether you're in KL, JB, Penang, or East Malaysia — we can get you live." },
      { q: 'What if I need custom features?', a: "Enterprise plan supports custom features. Tell us your pain points, we design the solution. From WhatsApp bots to full backend management systems — all doable." },
      { q: 'How do I get started?', a: "Three steps: ① WhatsApp us at +60 16-921 2796 → ② 15-minute online chat about your business pain points → ③ System goes live in 3–5 days. Step one is the easiest — just send a Hi." },
    ]},
  ],
  zh: [
    { icon: '🏪', label: '美容 & 发廊', items: [
      { q: '我的Salon每天WhatsApp预约爆满，员工经常漏单怎么办？', a: 'Solo AI 的 May（AI CEO PA）24/7 在 WhatsApp 自动接预约、确认时间、同步更新 Booking 系统。老板不用盯，员工不会漏。实测漏单率降低超过90%。' },
      { q: 'AI能帮我自动算员工的Commission吗？每次手算都吵架。', a: '可以。May 自动追踪每个员工的服务记录，月底自动计算佣金并生成报告。数据透明，员工看得到自己的业绩，不再有纠纷。' },
      { q: '客人很久没来了，我想叫她回来但没时间一个一个发信息。', a: 'May 有自动 Win-back 功能。超过30天/60天/90天没来的客人，May 会自动发 WhatsApp 关怀信息 + 专属优惠。老板只需要一键确认。' },
      { q: '我不懂IT，部署会不会很复杂？', a: '完全不需要懂IT。我们3-5天帮你全部设置好，你只需要提供你的业务资料。May 住在 WhatsApp 里，你和客人都不需要下载新 App。' },
      { q: '如果客人用马来文或英文混合（Rojak）在WhatsApp预约，AI能读懂吗？', a: '能。May 支持 Bahasa Malaysia、English、中文，也能理解 Rojak 混合语言。马来西亚的 AI，当然要懂马来西亚人的说话方式。' },
      { q: '我有3间分店，May能同时管吗？', a: '可以。Enterprise 方案支持多分店管理，每间店独立数据但老板看统一报告。一个 WhatsApp 管全部。' },
      { q: 'May每天早上会告诉我今天有什么预约吗？', a: '会。每天早上9点，May 发一条 CEO Briefing 到你的 WhatsApp：今天几个预约、哪个员工值班、有没有需要你决定的事情。你一键确认就好。' },
      { q: '价格是多少？有没有隐藏费用？', a: '启航版：RM 5,888 起（核心架构 + 任选3个功能模块）。成长版：RM 8,888 起（核心架构 + 任选5个模块 + AI 智能落地页）。尊享定制版：按需求客制报价。没有隐藏费用。' },
    ]},
    { icon: '🍜', label: '餐饮 / 食肆', items: [
      { q: '我的餐厅每天高峰期WhatsApp订位爆满，员工忙到没时间回复。', a: 'Chef AI（F&B版 AI CEO PA）自动处理所有 WhatsApp 订位请求，3秒内回复确认。高峰期再忙，也不会漏掉一个客人。' },
      { q: 'AI能帮我管Waitlist吗？客人等太久就走了。', a: '可以。Chef AI 自动管理 Waitlist，有位子时自动通知排队的客人。还会追踪 No-show 记录，帮你识别哪些客人经常放飞机。' },
      { q: '我想发Promo给回头客，但不知道谁是回头客。', a: 'Chef AI 自动追踪每个客人的消费记录。回头客、新客、很久没来的客人，系统自动分类。你可以一键发专属优惠给特定群组。' },
      { q: '我的厨师只想专心煮菜，不想管前台。', a: '这正是 Chef AI 的存在意义。前台预约、客人询问、排队管理、促销发送——全部 AI 处理。厨师专心做菜，老板专心赚钱。' },
      { q: '每个月的营业额报告我都要自己算，有没有自动的？', a: 'Chef AI 每月自动生成营业额报告，直接发到你的 WhatsApp。每日、每周的数据也有。不用 Excel，不用手算。' },
      { q: '我有 Grab/Foodpanda 外卖，AI能帮我管吗？', a: '目前 Chef AI 专注于 WhatsApp 直接订单和堂食预约管理。外卖平台整合在未来规划中。但你的 WhatsApp 直客是利润最高的——没有平台抽佣。' },
      { q: '如果我想办一个特别活动（生日会/包场），AI能处理吗？', a: '可以。你在后台设定好活动细节，Chef AI 自动在 WhatsApp 回复相关咨询、收集预约信息、发确认通知。' },
      { q: '设置要多久？需要改我现有的POS系统吗？', a: '3-5天设置完成。不需要改你的 POS 系统。Chef AI 独立运行在 WhatsApp，跟你的现有系统并行，零冲突。' },
    ]},
    { icon: '🤖', label: 'AI 贩卖机', items: [
      { q: '我有几十台贩卖机，每天几千单但数据全丢了，怎么办？', a: 'Solo AI 的 AI Vending 系统帮你把每一台机器的每一笔交易数据实时入库。库存、销量、热门商品、补货预测——全部自动化，不再靠人记。' },
      { q: '补货时间总是抓不准，有时候机器空了都不知道。', a: 'AI 补货预测引擎根据历史销量 + 时段分析，提前告诉你哪台机器明天会缺货。配合配送路线优化，每天省下大量人力和油费。' },
      { q: '我想做员工福利计划（公司补贴咖啡），有没有系统能管？', a: '有。我们的 Heraa Coffee System 已经帮企业做了完整的员工福利方案：公司每月补贴 → 员工用 App 兑换 → 大屏幕实时展示。会计月底自动出报表。' },
      { q: '贩卖机的CRM是什么概念？', a: '传统贩卖机只卖东西，不认识客人。AI Vending CRM 帮你认识每一个买家：消费习惯、喜欢什么、多久来一次。然后 AI 自动发优惠、做会员积分、提升复购率。' },
      { q: '这套系统能用在什么类型的贩卖机上？', a: '咖啡机、零食机、饮料机、榴莲机——任何需要库存管理 + 客户数据 + 补货预测的贩卖机都适用。系统跟机器品牌无关，接的是数据层。' },
      { q: '费用怎么算？', a: '根据机器数量和功能需求定制报价。我们提供白老鼠价给第一批合作伙伴，换取真实数据反馈。详情请直接联系 Captain K。' },
    ]},
    { icon: '❓', label: '通用问题', items: [
      { q: 'Solo AI 是什么？', a: 'Solo AI 是马来西亚本土的 AI 系统公司，专门为中小企业（SME）打造 AI CEO PA（AI执行助理）。你做决策，AI 做执行。目前服务 Salon、F&B、贩卖机等行业。' },
      { q: '跟 ChatGPT 有什么不同？', a: 'ChatGPT 是通用聊天工具。Solo AI 的 May 是专门为你的行业定制的执行系统——她不只聊天，她会预约、算佣金、发提醒、做报表、跟进客户。她住在你的 WhatsApp 里，连接你的真实业务数据。' },
      { q: '我的客户数据安全吗？', a: '安全。每个客户的数据存在独立的加密数据库，不与其他商家共享。系统有完整的权限管理和审计日志。你的数据只属于你。' },
      { q: '合约有绑定期吗？', a: '没有。月付制，随时可以取消。我们靠服务质量留住你，不靠合约绑住你。' },
      { q: '你们做了多久了？有多少客户？', a: 'Solo AI 从 2025 年开始建设，目前有 6 个上线系统，覆盖超过 1,744 个真实顾客记录。我们是创始人 Captain K 亲自带队，用 20 年的创业经验 + AI 技术服务每一个客户。' },
      { q: '我不在KL，你们能远程设置吗？', a: '完全可以。Solo AI 的设置全部通过线上完成。只要你有 WhatsApp 和网络，不管你在 KL、JB、Penang 还是 East Malaysia，我们都能帮你上线。' },
      { q: '如果我想要定制功能怎么办？', a: 'Enterprise 方案支持定制功能。你告诉我们你的痛点，我们帮你设计解决方案。从 WhatsApp Bot 到完整的后台管理系统，都可以做。' },
      { q: '怎么开始？', a: '三步：① WhatsApp 联系我们 +60 16-921 2796 → ② 15分钟线上聊你的业务痛点 → ③ 3-5天系统上线。第一步最简单——发个 Hi 就好。' },
    ]},
  ],
}

const CONTENT = {
  en: {
    hero_title: 'Frequently Asked Questions',
    hero_sub: 'Everything you need to know about Solo AI — your AI CEO PA for Malaysian SME.',
    cta_title: 'Still have questions?',
    cta_sub: "We'd love to hear from you. Captain K responds personally.",
    cta_btn: 'WhatsApp Us →',
    nav_cta: 'Get Started',
    footer_tag: 'AI Made Simple. Business Made Better.',
    footer_copy: '© 2026 Solo AI Malaysia · soloai.my',
    nav: [['Home','/'],[' Solutions','/#solutions'],['FAQ','/faq'],['Cases','/cases'],['AI Vending','/vending'],['Pricing','/#pricing'],['Contact','/#contact']] as [string,string][],
    all: 'All',
  },
  zh: {
    hero_title: '常见问题',
    hero_sub: '关于 Solo AI 你想知道的一切 — 马来西亚中小企 AI CEO PA。',
    cta_title: '还有其他问题？',
    cta_sub: '我们随时在线，Captain K 亲自回复。',
    cta_btn: 'WhatsApp 联系我们 →',
    nav_cta: '开始',
    footer_tag: 'AI 很简单。生意更好做。',
    footer_copy: '© 2026 Solo AI Malaysia · soloai.my',
    nav: [['首页','/'],[' 解决方案','/#solutions'],['FAQ','/faq'],['客户案例','/cases'],['贩卖机方案','/vending'],['价格','/#pricing'],['联系我们','/#contact']] as [string,string][],
    all: '全部',
  },
}

function useIsMobile() {
  const [m, setM] = useState(false)
  useEffect(() => { const c = () => setM(window.innerWidth < 768); c(); window.addEventListener('resize', c); return () => window.removeEventListener('resize', c) }, [])
  return m
}

function useLangState(): [Lang, (l: Lang) => void] {
  const [lang, setLang] = useState<Lang>('en')
  useEffect(() => { const s = localStorage.getItem('soloai_lang') as Lang | null; if (s === 'zh') setLang('zh') }, [])
  const set = (l: Lang) => { setLang(l); localStorage.setItem('soloai_lang', l) }
  return [lang, set]
}

export default function FaqPage() {
  const [lang, setLang] = useLangState()
  const c = CONTENT[lang]
  const categories = FAQ_DATA[lang]
  const isMobile = useIsMobile()
  const [activeCat, setActiveCat] = useState(-1)
  const [openQ, setOpenQ] = useState<string | null>(null)

  const displayItems = activeCat === -1 ? categories : [categories[activeCat]]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_DATA.en.flatMap(cat => cat.items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    }))),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Navbar */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, borderBottom: '1px solid #1a1a1a', background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 16px' : '0 40px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/"><img src={LOGO} alt="Solo AI" style={{ height: 32, width: 'auto', objectFit: 'contain', flexShrink: 0 }} /></a>
          {!isMobile && (
            <div style={{ display: 'flex', gap: 24, fontSize: 13 }}>
              {c.nav.map(([label, href]) => (
                <a key={label+href} href={href} style={{ color: href === '/faq' ? G : '#888', textDecoration: 'none', fontWeight: href === '/faq' ? 600 : 400 }}
                  onMouseEnter={e => (e.currentTarget.style.color = G)}
                  onMouseLeave={e => { if (href !== '/faq') e.currentTarget.style.color = '#888' }}>{label}</a>
              ))}
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 8 : 12 }}>
            <div style={{ display: 'flex', gap: 4 }}>
              {(['en', 'zh'] as Lang[]).map(l => (
                <button key={l} onClick={() => setLang(l)} style={{
                  padding: '5px 13px', borderRadius: 14, fontSize: 12, fontWeight: 700, cursor: 'pointer', transition: 'all 0.15s',
                  background: lang === l ? G : 'transparent', color: lang === l ? '#0A0A0A' : '#666',
                  border: lang === l ? 'none' : '1px solid #333',
                }}>{l === 'en' ? 'EN' : '中文'}</button>
              ))}
            </div>
            <a href="/#contact" style={{ padding: isMobile ? '7px 14px' : '8px 20px', borderRadius: 20, background: G, color: '#0A0A0A', fontWeight: 600, fontSize: 13, textDecoration: 'none', whiteSpace: 'nowrap' }}>{c.nav_cta}</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: 'clamp(120px,15vw,160px)', paddingBottom: 40, textAlign: 'center', padding: 'clamp(120px,15vw,160px) clamp(16px,5vw,40px) 40px' }}>
        <div style={{ display: 'inline-block', background: '#111', border: '1px solid #2a2a2a', borderRadius: 20, padding: '6px 16px', fontSize: 12, color: G, marginBottom: 24, letterSpacing: 1 }}>FAQ</div>
        <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: 16 }}>{c.hero_title}</h1>
        <p style={{ fontSize: 16, color: '#888', maxWidth: 550, margin: '0 auto', lineHeight: 1.8 }}>{c.hero_sub}</p>
      </section>

      {/* Category Tabs */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '0 clamp(16px,5vw,40px) 60px' }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 32, overflowX: 'auto', paddingBottom: 4 }}>
          <button onClick={() => setActiveCat(-1)} style={{
            padding: '8px 18px', borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0, transition: 'all 0.2s',
            background: activeCat === -1 ? G : 'transparent', color: activeCat === -1 ? '#0A0A0A' : '#555', border: activeCat === -1 ? 'none' : '1px solid #2a2a2a',
          }}>{c.all}</button>
          {categories.map((cat, i) => (
            <button key={cat.label} onClick={() => setActiveCat(i)} style={{
              padding: '8px 18px', borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0, transition: 'all 0.2s',
              background: activeCat === i ? G : 'transparent', color: activeCat === i ? '#0A0A0A' : '#555', border: activeCat === i ? 'none' : '1px solid #2a2a2a',
            }}>{cat.icon} {cat.label}</button>
          ))}
        </div>

        {/* FAQ Accordion */}
        {displayItems.map(cat => (
          <div key={cat.label} style={{ marginBottom: 32 }}>
            {activeCat === -1 && (
              <h2 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
                <span>{cat.icon}</span> {cat.label}
              </h2>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {cat.items.map(item => {
                const key = item.q
                const isOpen = openQ === key
                return (
                  <div key={key} style={{ background: '#111', border: `1px solid ${isOpen ? 'rgba(125,196,0,0.3)' : '#1a1a1a'}`, borderRadius: 12, overflow: 'hidden', transition: 'border-color 0.2s' }}>
                    <button onClick={() => setOpenQ(isOpen ? null : key)} style={{
                      width: '100%', padding: '16px 20px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16,
                      background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit',
                    }}>
                      <span style={{ fontSize: 14, fontWeight: 600, color: isOpen ? G : '#ddd', lineHeight: 1.6, flex: 1 }}>{item.q}</span>
                      <span style={{ fontSize: 18, color: G, flexShrink: 0, transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.2s', lineHeight: 1 }}>+</span>
                    </button>
                    {isOpen && (
                      <div style={{ padding: '0 20px 16px', fontSize: 14, color: '#999', lineHeight: 1.8, borderTop: '1px solid #1a1a1a', paddingTop: 14 }}>
                        {item.a}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(40px,8vw,60px) clamp(16px,5vw,40px)', textAlign: 'center', borderTop: '1px solid #1a1a1a' }}>
        <h2 style={{ fontSize: 'clamp(24px,3.5vw,36px)', fontWeight: 700, marginBottom: 12 }}>{c.cta_title}</h2>
        <p style={{ fontSize: 14, color: '#888', marginBottom: 28 }}>{c.cta_sub}</p>
        <a href="https://wa.me/60169212796" target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-block', padding: '12px 32px', borderRadius: 25, background: G, color: '#0A0A0A', fontWeight: 700, fontSize: 14, textDecoration: 'none',
        }}>{c.cta_btn}</a>
      </section>

      {/* Footer */}
      <footer style={{ padding: 'clamp(20px,4vw,24px) clamp(16px,5vw,40px)', borderTop: '1px solid #1a1a1a', background: '#050505', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <div style={{ fontSize: 12, color: '#444' }}>
          <img src={LOGO} alt="Solo AI" style={{ height: 28, width: 'auto', objectFit: 'contain', marginBottom: 6 }} />
          <div>{c.footer_tag}</div>
          <div style={{ marginTop: 4 }}>{c.footer_copy} · Powered by <a href="https://soloai.my" target="_blank" rel="noopener noreferrer" style={{ color: G, textDecoration: 'none' }}>Solo AI</a></div>
        </div>
      </footer>
    </>
  )
}
