'use client'

import { useState, useEffect } from 'react'

const G = '#7DC400'
const LOGO = 'https://klrfpzxjsacriaqtfssf.supabase.co/storage/v1/object/public/solo-ai-assets/solo%20ai%20logo.webp'
type Lang = 'en' | 'zh'

const CONTENT = {
  en: {
    nav: [['Home','/'],[' Solutions','/#solutions'],['FAQ','/faq'],['Cases','/cases'],['AI Vending','/vending'],['Pricing','/#pricing'],['Contact','/#contact']] as [string,string][],
    nav_cta: 'Get Started',
    badge: 'AI VENDING MACHINE SYSTEM',
    hero_title_1: 'Give Every Machine',
    hero_title_2: 'an AI Brain',
    hero_sub: 'Real-time CRM, smart restocking, member wallets & analytics — built for vending machine operators who want to stop losing data and start knowing their customers.',
    hero_cta: 'Get a Demo →',
    hero_cta2: 'Contact Us',
    pain_eyebrow: 'THE PROBLEM',
    pain_title: 'Your Machines Are Running Blind',
    pains: [
      { icon: '📊', title: 'Data Black Hole', desc: 'Thousands of transactions a day — all data lost. No records, no insights, no way to improve.' },
      { icon: '🚚', title: 'Restocking Blind Spot', desc: "Machines run empty before you notice. Restocking timing is always guesswork, wasting manpower and fuel." },
      { icon: '👤', title: "Don't Know Your Customers", desc: "Machines only sell — they don't build relationships. No loyalty, no repeat purchase strategy, no CRM." },
    ],
    sol_eyebrow: 'THE SOLUTION',
    sol_title: 'AI-Powered Vending Intelligence',
    solutions: [
      { icon: 'ti-users', title: 'AI CRM & Member System', desc: 'Member wallet, WhatsApp login, purchase tracking, auto-offers. Know every customer by name.', features: ['Member wallet & loyalty points','WhatsApp-based registration','Purchase history tracking','Auto-targeted promotions'] },
      { icon: 'ti-chart-bar', title: 'Smart Restocking Prediction', desc: 'AI analyzes historical sales + time patterns to predict which machine needs restocking tomorrow.', features: ['Demand forecasting by machine','Low-stock early warnings','Delivery route optimization','Save manpower & fuel daily'] },
      { icon: 'ti-screen-share', title: 'Live Display Screen', desc: 'Real-time transaction feed on a big screen. Connect to any TV or projector for brand showcase.', features: ['Real-time transaction display','Brand & promo showcase','Plug into any TV/projector','Gamification elements'] },
      { icon: 'ti-dashboard', title: 'Admin Dashboard', desc: 'See all machines at a glance. Sales analytics, member management, financial reports — all in one place.', features: ['Fleet-wide overview','Sales & revenue analytics','Member database','Auto financial reports'] },
    ],
    case_eyebrow: 'REAL CASE STUDY',
    case_title: 'Heraa Coffee System',
    case_bg: 'Background',
    case_bg_text: 'Vending machine factory partnership — 60 machines, thousands of daily transactions, all data previously lost.',
    case_challenge: 'Challenge',
    case_challenge_text: 'Build a complete CRM + analytics system from zero within 24 hours for a trade show demo.',
    case_result: 'What We Built',
    case_features: ['Member wallet & balance system','Live transaction display screen','Full admin management dashboard','Gamification & engagement features','WhatsApp push notifications','Complete data analytics'],
    case_proof: 'Result: Fable5 stress test — all 6 closed-loop scenarios passed.',
    scene_eyebrow: 'USE CASES',
    scene_title: 'Works With Any Vending Machine',
    scenes: [
      { icon: '☕', title: 'Coffee Machines', desc: 'Employee benefits, loyalty programs, consumption tracking for office & co-working spaces.' },
      { icon: '🍈', title: 'Durian Machines', desc: 'Seasonal inventory management, grade tracking, customer preference data for premium products.' },
      { icon: '🥤', title: 'Beverage & Snack', desc: 'High-frequency purchase tracking, auto-promotions, inventory optimization for retail locations.' },
      { icon: '🏢', title: 'Corporate Benefits', desc: 'Company-subsidized purchases, employee wallet top-ups, monthly accounting auto-reports.' },
    ],
    price_eyebrow: 'PRICING',
    price_title: 'Custom Pricing Based on Your Fleet',
    price_sub: 'Early-adopter pricing available for first-batch partners. Real data feedback in exchange for exclusive rates.',
    price_cta: 'WhatsApp Captain K →',
    footer_tag: 'AI Made Simple. Business Made Better.',
    footer_copy: '© 2026 Solo AI Malaysia · soloai.my',
  },
  zh: {
    nav: [['首页','/'],[' 解决方案','/#solutions'],['FAQ','/faq'],['客户案例','/cases'],['贩卖机方案','/vending'],['价格','/#pricing'],['联系我们','/#contact']] as [string,string][],
    nav_cta: '开始',
    badge: 'AI 贩卖机系统',
    hero_title_1: '让每一台机器',
    hero_title_2: '都有 AI 大脑',
    hero_sub: '实时 CRM · 智能补货 · 会员钱包 · 数据分析 — 专为贩卖机运营商打造，不再丢数据，开始认识你的客人。',
    hero_cta: '获取演示 →',
    hero_cta2: '联系我们',
    pain_eyebrow: '问题所在',
    pain_title: '你的机器在盲跑',
    pains: [
      { icon: '📊', title: '数据黑洞', desc: '每天几千单，数据全丢。没有记录、没有洞察、无法改进。' },
      { icon: '🚚', title: '补货盲区', desc: '机器空了才知道。补货时间全靠猜，浪费人力和油费。' },
      { icon: '👤', title: '不认识客人', desc: '机器只卖东西，不做关系。没有忠诚度、没有复购策略、没有CRM。' },
    ],
    sol_eyebrow: '解决方案',
    sol_title: 'AI 驱动的贩卖机智能系统',
    solutions: [
      { icon: 'ti-users', title: 'AI CRM & 会员系统', desc: '会员钱包 · WhatsApp登录 · 消费追踪 · 自动优惠。认识每一个客人。', features: ['会员钱包 & 积分系统','WhatsApp 注册登录','消费历史追踪','自动精准促销'] },
      { icon: 'ti-chart-bar', title: '智能补货预测', desc: 'AI 根据历史销量 + 时段分析，提前预测哪台机器明天缺货。', features: ['按机器需求预测','缺货提前预警','配送路线优化','每天省人力和油费'] },
      { icon: 'ti-screen-share', title: '实时大屏幕', desc: '交易数据实时跳动。接任何电视或投影仪，品牌展示利器。', features: ['实时交易展示','品牌 & 促销展示','接入任何电视/投影仪','游戏化互动元素'] },
      { icon: 'ti-dashboard', title: 'Admin 管理后台', desc: '一眼看全部机器。销量分析、会员管理、财务报表——一站搞定。', features: ['全机器总览','销量 & 收入分析','会员数据库','自动财务报表'] },
    ],
    case_eyebrow: '真实案例',
    case_title: 'Heraa Coffee 系统',
    case_bg: '背景',
    case_bg_text: '贩卖机工厂合作 — 60台机器，每天数千笔交易，数据全部丢失。',
    case_challenge: '挑战',
    case_challenge_text: '24小时内从零建成完整的 CRM + 数据分析系统，用于展销会 Demo。',
    case_result: '我们建了什么',
    case_features: ['会员钱包 & 余额系统','实时交易大屏幕','完整 Admin 管理后台','游戏化 & 互动功能','WhatsApp 推送通知','完整数据分析'],
    case_proof: '成果：Fable5 压力测试 — 6个闭环场景全部通过。',
    scene_eyebrow: '适用场景',
    scene_title: '适用于任何贩卖机',
    scenes: [
      { icon: '☕', title: '咖啡贩卖机', desc: '员工福利、忠诚计划、办公室和共享空间消费追踪。' },
      { icon: '🍈', title: '榴莲贩卖机', desc: '季节性库存管理、等级追踪、高端产品客户偏好数据。' },
      { icon: '🥤', title: '饮料/零食机', desc: '高频消费追踪、自动促销、零售点库存优化。' },
      { icon: '🏢', title: '企业员工福利', desc: '公司补贴消费、员工钱包充值、月底会计自动报表。' },
    ],
    price_eyebrow: '价格',
    price_title: '根据机器数量定制报价',
    price_sub: '白老鼠优惠价开放中 — 给第一批合作伙伴，换取真实数据反馈。',
    price_cta: 'WhatsApp 联系 Captain K →',
    footer_tag: 'AI 很简单。生意更好做。',
    footer_copy: '© 2026 Solo AI Malaysia · soloai.my',
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

export default function VendingPage() {
  const [lang, setLang] = useLangState()
  const c = CONTENT[lang]
  const isMobile = useIsMobile()

  const vendingSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Solo AI Vending Machine System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, WhatsApp',
    description: 'AI-powered vending machine management: real-time CRM, smart restocking predictions, member wallet, analytics dashboard.',
    featureList: ['Real-time Transaction Tracking','AI Restocking Prediction','Member Wallet & Loyalty','WhatsApp Notifications','Live Display Screen','Admin Dashboard & Analytics'],
    audience: { '@type': 'BusinessAudience', audienceType: 'Vending Machine Operators, F&B Brands, Corporate Employee Benefits' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vendingSchema) }} />

      {/* Navbar */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, borderBottom: '1px solid #1a1a1a', background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 16px' : '0 40px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/"><img src={LOGO} alt="Solo AI" style={{ height: 32, width: 'auto', objectFit: 'contain', flexShrink: 0 }} /></a>
          {!isMobile && (
            <div style={{ display: 'flex', gap: 24, fontSize: 13 }}>
              {c.nav.map(([label, href]) => (
                <a key={label+href} href={href} style={{ color: href === '/vending' ? G : '#888', textDecoration: 'none', fontWeight: href === '/vending' ? 600 : 400 }}
                  onMouseEnter={e => (e.currentTarget.style.color = G)}
                  onMouseLeave={e => { if (href !== '/vending') e.currentTarget.style.color = '#888' }}>{label}</a>
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
      <section style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 'clamp(120px,15vw,160px) clamp(16px,5vw,40px) 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', width: 'min(600px,160vw)', height: 'min(600px,160vw)', borderRadius: '50%', background: 'radial-gradient(circle, rgba(125,196,0,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ display: 'inline-block', background: '#111', border: '1px solid #2a2a2a', borderRadius: 20, padding: '6px 16px', fontSize: 12, color: G, marginBottom: 24, letterSpacing: 1 }}>{c.badge}</div>
        <h1 style={{ fontSize: 'clamp(36px,6vw,72px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-2px', marginBottom: 20, maxWidth: 800 }}>
          {c.hero_title_1} <span style={{ color: G }}>{c.hero_title_2}</span>
        </h1>
        <p style={{ fontSize: 16, color: '#888', maxWidth: 600, margin: '0 auto 36px', lineHeight: 1.8 }}>{c.hero_sub}</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="/#contact" style={{ padding: '12px 28px', borderRadius: 25, background: G, color: '#0A0A0A', fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>{c.hero_cta}</a>
          <a href="https://wa.me/60169212796" target="_blank" rel="noopener noreferrer" style={{ padding: '12px 28px', borderRadius: 25, border: '1px solid #333', color: '#fff', fontWeight: 500, fontSize: 14, textDecoration: 'none' }}>{c.hero_cta2}</a>
        </div>
      </section>

      {/* Pain Points */}
      <section style={{ padding: isMobile ? '40px 16px' : '60px 40px', borderTop: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, color: G, letterSpacing: 2, marginBottom: 8 }}>{c.pain_eyebrow}</div>
          <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 700, marginBottom: 36, letterSpacing: '-0.5px' }}>{c.pain_title}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: 16 }}>
            {c.pains.map(p => (
              <div key={p.title} className="solution-card" style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: 16, padding: 28, position: 'relative', overflow: 'hidden' }}>
                <div className="card-top-line" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: '#ff4444' }} />
                <div style={{ fontSize: 36, marginBottom: 16 }}>{p.icon}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{p.title}</div>
                <div style={{ fontSize: 13, color: '#666', lineHeight: 1.7 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section style={{ padding: isMobile ? '50px 16px' : '80px 40px', background: '#080808', borderTop: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, color: G, letterSpacing: 2, marginBottom: 8 }}>{c.sol_eyebrow}</div>
          <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 700, marginBottom: 36, letterSpacing: '-0.5px' }}>{c.sol_title}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2,1fr)', gap: 20 }}>
            {c.solutions.map(s => (
              <div key={s.title} className="solution-card" style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: 16, padding: 28, position: 'relative', overflow: 'hidden' }}>
                <div className="card-top-line" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: G }} />
                <div style={{ marginBottom: 14 }}><i className={`ti ${s.icon}`} style={{ fontSize: 36, color: G }} /></div>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{s.title}</div>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7, marginBottom: 18 }}>{s.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {s.features.map(f => (
                    <div key={f} style={{ display: 'flex', gap: 8, fontSize: 12, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>
                      <span style={{ color: G, flexShrink: 0, fontWeight: 700 }}>✓</span><span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study - Heraa Coffee */}
      <section style={{ padding: isMobile ? '50px 16px' : '80px 40px', borderTop: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: 11, color: G, letterSpacing: 2, marginBottom: 8 }}>{c.case_eyebrow}</div>
          <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 700, marginBottom: 32, letterSpacing: '-0.5px' }}>{c.case_title}</h2>

          <div style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: 16, padding: isMobile ? 24 : 36, marginBottom: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 24, marginBottom: 28 }}>
              <div>
                <div style={{ fontSize: 11, color: G, letterSpacing: 2, marginBottom: 8 }}>{c.case_bg}</div>
                <p style={{ fontSize: 14, color: '#999', lineHeight: 1.7 }}>{c.case_bg_text}</p>
              </div>
              <div>
                <div style={{ fontSize: 11, color: G, letterSpacing: 2, marginBottom: 8 }}>{c.case_challenge}</div>
                <p style={{ fontSize: 14, color: '#999', lineHeight: 1.7 }}>{c.case_challenge_text}</p>
              </div>
            </div>

            <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: 24 }}>
              <div style={{ fontSize: 11, color: G, letterSpacing: 2, marginBottom: 16 }}>{c.case_result}</div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: 10 }}>
                {c.case_features.map(f => (
                  <div key={f} style={{ display: 'flex', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                    <span style={{ color: G, fontWeight: 700, flexShrink: 0 }}>✓</span><span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ borderLeft: `2px solid ${G}`, padding: '12px 16px', background: 'rgba(125,196,0,0.06)', borderRadius: '0 8px 8px 0' }}>
            <p style={{ fontSize: 13, color: '#b9e188', fontWeight: 600 }}>{c.case_proof}</p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section style={{ padding: isMobile ? '50px 16px' : '80px 40px', background: '#080808', borderTop: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, color: G, letterSpacing: 2, marginBottom: 8 }}>{c.scene_eyebrow}</div>
          <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 700, marginBottom: 36, letterSpacing: '-0.5px' }}>{c.scene_title}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: 16 }}>
            {c.scenes.map(s => (
              <div key={s.title} className="solution-card" style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: 16, padding: isMobile ? 20 : 24, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div className="card-top-line" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: G }} />
                <div style={{ fontSize: 40, marginBottom: 12 }}>{s.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{s.title}</div>
                <div style={{ fontSize: 12, color: '#666', lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section style={{ padding: 'clamp(50px,8vw,80px) clamp(16px,5vw,40px)', textAlign: 'center', borderTop: '1px solid #1a1a1a' }}>
        <div style={{ fontSize: 11, color: G, letterSpacing: 2, marginBottom: 12 }}>{c.price_eyebrow}</div>
        <h2 style={{ fontSize: 'clamp(24px,3.5vw,36px)', fontWeight: 700, marginBottom: 12 }}>{c.price_title}</h2>
        <p style={{ fontSize: 14, color: '#888', marginBottom: 32, maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.7 }}>{c.price_sub}</p>
        <a href="https://wa.me/60169212796" target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-block', padding: '14px 36px', borderRadius: 25, background: G, color: '#0A0A0A', fontWeight: 700, fontSize: 15, textDecoration: 'none',
        }}>{c.price_cta}</a>
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
