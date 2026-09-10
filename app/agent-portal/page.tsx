'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const BG = '#0A0A0C', SURFACE = '#15151A', SURFACE2 = '#1B1B21', LINE = '#26262C'
const GOLD = '#F5A623', GOLD_LT = '#FCD98A', PURPLE = '#8B5CF6', PURPLE_LT = '#C4B0F7'
const INK = '#EDEDF0', INK_MUTE = '#9A99A3', INK_FAINT = '#86838D'
const MONO = "'JetBrains Mono', monospace"
const SANS = "'Noto Sans SC','PingFang SC','Microsoft YaHei',sans-serif"

const STAGES = ['资料收集中', '已提交', '建置中', '已上线']

type PlanTier = 'basic' | 'growth' | 'bespoke'

interface ClientRow {
  name: string
  industry: string
  plan: PlanTier
  stage: number // 0-3, index into STAGES = current/now stage
  updated: string
}

// TODO(mock): 目前是假资料，等 Supabase 项目建好后改成真实查询
const MOCK_CLIENTS: ClientRow[] = [
  { name: '合发鸡肉批发', industry: 'B2B 批发贸易', plan: 'growth', stage: 3, updated: '8月 12日' },
  { name: '翠湖茶餐室', industry: 'F&B 饮食业', plan: 'basic', stage: 2, updated: '8月 28日' },
  { name: 'Glow Saloon 美容美发', industry: '美容美发 / Saloon', plan: 'bespoke', stage: 0, updated: '8月 30日' },
  { name: '文冬园主直供', industry: '农业 / 供应链', plan: 'growth', stage: 3, updated: '7月 22日' },
  { name: '泰美轩海鲜楼', industry: 'F&B 饮食业', plan: 'basic', stage: 2, updated: '8月 25日' },
  { name: '城中五金批发行', industry: 'B2B 批发贸易', plan: 'growth', stage: 0, updated: '8月 29日' },
]

const PLAN_STYLE: Record<PlanTier, { bg: string; color: string; border: string; label: string }> = {
  basic: { bg: '#1E1E24', color: INK_MUTE, border: LINE, label: 'Basic' },
  growth: { bg: 'rgba(245,166,35,.12)', color: GOLD_LT, border: '#4a3417', label: 'Growth' },
  bespoke: { bg: 'rgba(139,92,246,.12)', color: PURPLE_LT, border: '#362c52', label: 'Bespoke' },
}

function useIsMobile() {
  const [m, setM] = useState(false)
  useEffect(() => { const c = () => setM(window.innerWidth < 800); c(); window.addEventListener('resize', c); return () => window.removeEventListener('resize', c) }, [])
  return m
}

function Badge({ plan }: { plan: PlanTier }) {
  const s = PLAN_STYLE[plan]
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', fontFamily: MONO, fontSize: 10.5, fontWeight: 700, padding: '4px 9px', borderRadius: 100, background: s.bg, color: s.color, border: `1px solid ${s.border}`, width: 'fit-content' }}>
      {s.label}
    </span>
  )
}

function Pipeline({ stage }: { stage: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {STAGES.map((_, i) => {
        const done = i < stage
        const now = i === stage
        return (
          <div key={i} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <div style={{
              width: now ? 11 : 9, height: now ? 11 : 9, borderRadius: '50%', flexShrink: 0,
              background: done ? PURPLE : now ? GOLD : SURFACE2,
              border: `1.5px solid ${done ? PURPLE : now ? GOLD : INK_FAINT}`,
            }} />
            {i < STAGES.length - 1 && <div style={{ flex: 1, height: 1.5, background: done ? PURPLE : LINE, margin: '0 3px' }} />}
          </div>
        )
      })}
    </div>
  )
}

function StatCard({ n, l, color }: { n: number; l: string; color?: string }) {
  return (
    <div style={{ background: SURFACE, border: `1px solid ${LINE}`, borderRadius: 10, padding: '18px 20px' }}>
      <div style={{ fontSize: 28, fontWeight: 900, lineHeight: 1, marginBottom: 8, color: color || INK }}>{n}</div>
      <div style={{ fontSize: 12.5, color: INK_MUTE }}>{l}</div>
    </div>
  )
}

export default function AgentDashboardPage() {
  const isMobile = useIsMobile()
  const [tab, setTab] = useState<'all' | number>('all')
  const [expanded, setExpanded] = useState<string | null>(null)

  const counts = {
    all: MOCK_CLIENTS.length,
    collecting: MOCK_CLIENTS.filter(c => c.stage === 0).length,
    submitted: MOCK_CLIENTS.filter(c => c.stage === 1).length,
    building: MOCK_CLIENTS.filter(c => c.stage === 2).length,
    live: MOCK_CLIENTS.filter(c => c.stage === 3).length,
  }

  const filtered = tab === 'all' ? MOCK_CLIENTS : MOCK_CLIENTS.filter(c => c.stage === tab)

  const tabs: { key: 'all' | number; label: string; count: number }[] = [
    { key: 'all', label: '全部', count: counts.all },
    { key: 0, label: '资料收集中', count: counts.collecting },
    { key: 1, label: '已提交', count: counts.submitted },
    { key: 2, label: '建置中', count: counts.building },
    { key: 3, label: '已上线', count: counts.live },
  ]

  return (
    <div style={{ background: BG, color: INK, fontFamily: SANS, minHeight: '100vh', lineHeight: 1.6 }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: isMobile ? '0 18px 60px' : '0 32px 80px' }}>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 0', borderBottom: `1px solid ${LINE}`, marginBottom: 36 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, background: `linear-gradient(135deg, ${GOLD}, ${PURPLE})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 13, color: '#0A0A0C' }}>S</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14 }}>Solo AI Empire</div>
              <div style={{ fontFamily: MONO, fontSize: 10.5, color: INK_FAINT }}>AGENT PORTAL</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div>
              <div style={{ fontSize: 13, color: INK, textAlign: 'right' }}>Alex Tan</div>
              <div style={{ fontFamily: MONO, fontSize: 10.5, color: INK_FAINT, textAlign: 'right' }}>AGENT</div>
            </div>
            <div style={{ width: 34, height: 34, borderRadius: '50%', background: SURFACE2, border: `1px solid ${LINE}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: GOLD_LT }}>AT</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 32, gap: 20, flexWrap: 'wrap' }}>
          <div>
            <h1 style={{ fontSize: 26, fontWeight: 900, margin: '0 0 6px' }}>早上好，Alex</h1>
            <div style={{ fontFamily: MONO, fontSize: 12, color: INK_FAINT }}>2026年8月31日 · 星期一</div>
          </div>
          <Link href="/agent-portal/new-client" style={{ textDecoration: 'none' }}>
            <button style={{ background: GOLD, color: '#241A05', border: 'none', fontWeight: 700, fontSize: 13.5, padding: '12px 22px', borderRadius: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>＋ 新增客户</button>
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: 14, marginBottom: 36 }}>
          <StatCard n={counts.all} l="总客户数" />
          <StatCard n={counts.collecting} l="资料收集中" />
          <StatCard n={counts.building} l="建置中" color={GOLD} />
          <StatCard n={counts.live} l="已上线" color={PURPLE_LT} />
        </div>

        <div style={{ display: 'flex', gap: 6, marginBottom: 20, borderBottom: `1px solid ${LINE}`, overflowX: 'auto' }}>
          {tabs.map(t => (
            <div
              key={String(t.key)} onClick={() => setTab(t.key)}
              role="tab" aria-selected={tab === t.key} tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setTab(t.key) } }}
              style={{
                fontSize: 13, color: tab === t.key ? GOLD_LT : INK_MUTE, padding: '10px 16px', cursor: 'pointer',
                borderBottom: `2px solid ${tab === t.key ? GOLD : 'transparent'}`, whiteSpace: 'nowrap', fontWeight: tab === t.key ? 700 : 400,
              }}>{t.label} ({t.count})</div>
          ))}
        </div>

        {!isMobile && (
          <div style={{ display: 'grid', gridTemplateColumns: '2.1fr 1fr 2fr 1.1fr 24px', gap: 16, padding: '0 20px 10px', fontFamily: MONO, fontSize: 10.5, color: INK_FAINT }}>
            <div>客户</div><div>方案</div><div>进度</div><div>更新时间</div><div />
          </div>
        )}

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: INK_FAINT, border: `1px dashed ${LINE}`, borderRadius: 10 }}>
            <div style={{ fontSize: 28, marginBottom: 10 }}>📋</div>
            <div style={{ fontSize: 14, color: INK_MUTE }}>这个状态下还没有客户</div>
            <div style={{ fontSize: 12.5, marginTop: 4 }}>点右上角「＋ 新增客户」开始第一笔</div>
          </div>
        )}

        {filtered.map(c => {
          const isOpen = expanded === c.name
          const toggle = () => setExpanded(isOpen ? null : c.name)
          return (
            <div key={c.name} style={{ marginBottom: 10, background: SURFACE, border: `1px solid ${isOpen ? PURPLE : LINE}`, borderRadius: 10, overflow: 'hidden' }}>
              <div
                onClick={toggle}
                role="button" tabIndex={0} aria-expanded={isOpen}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle() } }}
                style={{
                  display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '2.1fr 1fr 2fr 1.1fr 24px', gap: isMobile ? 10 : 16, alignItems: 'center',
                  padding: '16px 20px', cursor: 'pointer',
                }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <span style={{ fontSize: 14.5, fontWeight: 700, color: INK }}>{c.name}</span>
                  <span style={{ fontSize: 12, color: INK_FAINT }}>{c.industry}</span>
                </div>
                <Badge plan={c.plan} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Pipeline stage={c.stage} />
                  {isMobile && <div style={{ fontSize: 10, color: INK_FAINT, marginTop: 6 }}>{STAGES[c.stage]}</div>}
                </div>
                <div style={{ fontFamily: MONO, fontSize: 11.5, color: INK_FAINT }}>{c.updated}</div>
                {!isMobile && <div style={{ color: isOpen ? PURPLE_LT : INK_FAINT, fontSize: 16, transform: isOpen ? 'rotate(90deg)' : 'none', transition: 'transform .15s' }}>›</div>}
              </div>
              {isOpen && (
                <div style={{ padding: '4px 20px 18px', borderTop: `1px solid ${LINE}` }}>
                  <div style={{ fontSize: 12, color: INK_FAINT, marginTop: 14, marginBottom: 10, fontFamily: MONO }}>客户详情（占位 — Phase 2 接真实数据）</div>
                  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 10, fontSize: 13 }}>
                    <div><span style={{ color: INK_FAINT }}>行业：</span>{c.industry}</div>
                    <div><span style={{ color: INK_FAINT }}>方案：</span>{PLAN_STYLE[c.plan].label}</div>
                    <div><span style={{ color: INK_FAINT }}>目前阶段：</span>{STAGES[c.stage]}</div>
                    <div><span style={{ color: INK_FAINT }}>最后更新：</span>{c.updated}</div>
                  </div>
                </div>
              )}
            </div>
          )
        })}

        <div style={{ display: 'flex', gap: 20, margin: '28px 0 0', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 11.5, color: INK_FAINT }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: PURPLE }} />已完成阶段
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 11.5, color: INK_FAINT }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: GOLD }} />目前阶段
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 11.5, color: INK_FAINT }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: SURFACE2, border: `1.5px solid ${INK_FAINT}` }} />未开始
          </div>
          <div style={{ fontFamily: MONO, fontSize: 11.5, color: INK_FAINT }}>资料收集中 → 已提交 → 建置中 → 已上线</div>
        </div>
      </div>
    </div>
  )
}
