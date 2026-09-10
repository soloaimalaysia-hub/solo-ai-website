'use client'

import { useState, useEffect } from 'react'

const BG = '#0A0A0C', SURFACE = '#15151A', SURFACE2 = '#1B1B21', LINE = '#26262C'
const GOLD = '#F5A623', GOLD_LT = '#FCD98A', PURPLE = '#8B5CF6', PURPLE_LT = '#C4B0F7'
const INK = '#EDEDF0', INK_MUTE = '#9A99A3', INK_FAINT = '#86838D'
const RED = '#E5757A', GREEN = '#7FCB8F'
const MONO = "'JetBrains Mono', monospace"
const SANS = "'Noto Sans SC','PingFang SC','Microsoft YaHei',sans-serif"

type PlanTier = 'basic' | 'growth' | 'bespoke'
type Status = 'wait' | 'build' | 'review' | 'live'

interface Row {
  name: string; industry: string
  agentInitials: string; agentName: string
  plan: PlanTier; completeness: number; status: Status; builder: string
}

// TODO(mock): 目前是假资料，等 Supabase 项目建好后改成真实查询
const MOCK_ROWS: Row[] = [
  { name: '城中五金批发行', industry: 'B2B 批发贸易', agentInitials: 'AT', agentName: 'Alex Tan', plan: 'growth', completeness: 60, status: 'wait', builder: '—' },
  { name: 'Glow Saloon 美容美发', industry: '美容美发 / Saloon', agentInitials: 'AT', agentName: 'Alex Tan', plan: 'bespoke', completeness: 35, status: 'wait', builder: '—' },
  { name: '翠湖茶餐室', industry: 'F&B 饮食业', agentInitials: 'AT', agentName: 'Alex Tan', plan: 'basic', completeness: 100, status: 'build', builder: '大牛' },
  { name: '泰美轩海鲜楼', industry: 'F&B 饮食业', agentInitials: 'SL', agentName: 'Serene Lim', plan: 'basic', completeness: 100, status: 'build', builder: '大牛' },
  { name: '文冬园主直供', industry: '农业 / 供应链', agentInitials: 'SL', agentName: 'Serene Lim', plan: 'growth', completeness: 100, status: 'review', builder: '大牛' },
  { name: '合发鸡肉批发', industry: 'B2B 批发贸易', agentInitials: 'AT', agentName: 'Alex Tan', plan: 'growth', completeness: 100, status: 'live', builder: '大牛' },
]

const PLAN_STYLE: Record<PlanTier, { bg: string; color: string; border: string; label: string }> = {
  basic: { bg: '#1E1E24', color: INK_MUTE, border: LINE, label: 'Basic' },
  growth: { bg: 'rgba(245,166,35,.12)', color: GOLD_LT, border: '#4a3417', label: 'Growth' },
  bespoke: { bg: 'rgba(139,92,246,.12)', color: PURPLE_LT, border: '#362c52', label: 'Bespoke' },
}

const STATUS_STYLE: Record<Status, { dot: string; label: string }> = {
  wait: { dot: INK_FAINT, label: '待分派' },
  build: { dot: GOLD, label: '建置中' },
  review: { dot: PURPLE, label: '待镇岳审核' },
  live: { dot: GREEN, label: '已上线' },
}

function useWidth() {
  const [w, setW] = useState(1280)
  useEffect(() => { const c = () => setW(window.innerWidth); c(); window.addEventListener('resize', c); return () => window.removeEventListener('resize', c) }, [])
  return w
}

export default function AgentAdminPage() {
  const width = useWidth()
  const isMobile = width < 900
  const statCols = width < 600 ? 2 : width < 900 ? 3 : 5
  const [tab, setTab] = useState<'all' | Status>('all')
  const [panelRow, setPanelRow] = useState<string | null>(null)
  const [assignee, setAssignee] = useState('大牛')

  const counts = {
    all: MOCK_ROWS.length,
    wait: MOCK_ROWS.filter(r => r.status === 'wait').length,
    build: MOCK_ROWS.filter(r => r.status === 'build').length,
    review: MOCK_ROWS.filter(r => r.status === 'review').length,
    live: MOCK_ROWS.filter(r => r.status === 'live').length,
  }

  const filtered = tab === 'all' ? MOCK_ROWS : MOCK_ROWS.filter(r => r.status === tab)

  const tabs: { key: 'all' | Status; label: string }[] = [
    { key: 'all', label: '全部' }, { key: 'wait', label: '待分派' }, { key: 'build', label: '建置中' },
    { key: 'review', label: '待审核' }, { key: 'live', label: '已上线' },
  ]

  const thStyle: React.CSSProperties = { textAlign: 'left', fontFamily: MONO, fontSize: 10.5, color: INK_FAINT, fontWeight: 500, padding: '0 14px 10px' }
  const tdStyle: React.CSSProperties = { padding: 14, borderTop: `1px solid ${LINE}`, fontSize: 13, verticalAlign: 'middle', background: SURFACE }

  return (
    <div style={{ background: BG, color: INK, fontFamily: SANS, minHeight: '100vh', lineHeight: 1.6 }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: isMobile ? '0 18px 60px' : '0 32px 80px' }}>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 0', borderBottom: `1px solid ${LINE}`, marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, background: `linear-gradient(135deg, ${GOLD}, ${PURPLE})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 13, color: '#0A0A0C' }}>S</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14 }}>Solo AI Empire</div>
              <div style={{ fontFamily: MONO, fontSize: 10.5, color: INK_FAINT }}>TEAM ADMIN</div>
            </div>
          </div>
          <div style={{ fontFamily: MONO, fontSize: 10.5, color: PURPLE_LT, border: '1px solid #362c52', padding: '4px 10px', borderRadius: 100 }}>CAPTAIN K</div>
        </div>

        <h1 style={{ fontSize: 24, fontWeight: 900, margin: '28px 0 6px' }}>客户总览看板</h1>
        <p style={{ fontSize: 13.5, color: INK_MUTE, margin: '0 0 28px' }}>全部Agent提交的客户资料，一张表看进度</p>

        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${statCols},1fr)`, gap: 12, marginBottom: 32 }}>
          <div style={{ background: SURFACE, border: `1px solid ${LINE}`, borderRadius: 10, padding: '16px 18px' }}><div style={{ fontSize: 24, fontWeight: 900, lineHeight: 1, marginBottom: 6 }}>{counts.all}</div><div style={{ fontSize: 11.5, color: INK_MUTE }}>全部客户</div></div>
          <div style={{ background: SURFACE, border: `1px solid ${LINE}`, borderRadius: 10, padding: '16px 18px' }}><div style={{ fontSize: 24, fontWeight: 900, lineHeight: 1, marginBottom: 6, color: RED }}>{counts.wait}</div><div style={{ fontSize: 11.5, color: INK_MUTE }}>待分派</div></div>
          <div style={{ background: SURFACE, border: `1px solid ${LINE}`, borderRadius: 10, padding: '16px 18px' }}><div style={{ fontSize: 24, fontWeight: 900, lineHeight: 1, marginBottom: 6, color: GOLD }}>{counts.build}</div><div style={{ fontSize: 11.5, color: INK_MUTE }}>建置中</div></div>
          <div style={{ background: SURFACE, border: `1px solid ${LINE}`, borderRadius: 10, padding: '16px 18px' }}><div style={{ fontSize: 24, fontWeight: 900, lineHeight: 1, marginBottom: 6, color: PURPLE_LT }}>{counts.review}</div><div style={{ fontSize: 11.5, color: INK_MUTE }}>待镇岳审核</div></div>
          <div style={{ background: SURFACE, border: `1px solid ${LINE}`, borderRadius: 10, padding: '16px 18px' }}><div style={{ fontSize: 24, fontWeight: 900, lineHeight: 1, marginBottom: 6 }}>{counts.live}</div><div style={{ fontSize: 11.5, color: INK_MUTE }}>已上线</div></div>
        </div>

        <div style={{ display: 'flex', gap: 6, marginBottom: 16, borderBottom: `1px solid ${LINE}`, overflowX: 'auto' }}>
          {tabs.map(t => (
            <div
              key={t.key} onClick={() => setTab(t.key)}
              role="tab" aria-selected={tab === t.key} tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setTab(t.key) } }}
              style={{
                fontSize: 13, color: tab === t.key ? GOLD_LT : INK_MUTE, padding: '10px 16px', cursor: 'pointer',
                borderBottom: `2px solid ${tab === t.key ? GOLD : 'transparent'}`, whiteSpace: 'nowrap', fontWeight: tab === t.key ? 700 : 400,
              }}>{t.label}</div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: INK_FAINT, border: `1px dashed ${LINE}`, borderRadius: 10 }}>
            <div style={{ fontSize: 28, marginBottom: 10 }}>📋</div>
            <div style={{ fontSize: 14, color: INK_MUTE }}>这个状态下暂无客户资料</div>
          </div>
        )}

        {filtered.length > 0 && <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: isMobile ? 760 : undefined }}>
            <thead>
              <tr>
                <th style={thStyle}>客户</th><th style={thStyle}>提交Agent</th><th style={thStyle}>方案</th>
                <th style={thStyle}>资料完整度</th><th style={thStyle}>状态</th><th style={thStyle}>建置人</th><th style={thStyle} />
              </tr>
            </thead>
            <tbody>
              {filtered.map(r => {
                const plan = PLAN_STYLE[r.plan]
                const status = STATUS_STYLE[r.status]
                return (
                  <tr key={r.name}>
                    <td style={{ ...tdStyle, borderRadius: '10px 0 0 10px' }}>
                      <div style={{ fontWeight: 700, fontSize: 13.5, color: INK }}>{r.name}</div>
                      <div style={{ fontSize: 11.5, color: INK_FAINT, marginTop: 2 }}>{r.industry}</div>
                    </td>
                    <td style={tdStyle}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 24, height: 24, borderRadius: '50%', background: SURFACE2, border: `1px solid ${LINE}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: PURPLE_LT }}>{r.agentInitials}</div>
                        {r.agentName}
                      </div>
                    </td>
                    <td style={tdStyle}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', fontFamily: MONO, fontSize: 10.5, fontWeight: 700, padding: '4px 9px', borderRadius: 100, background: plan.bg, color: plan.color, border: `1px solid ${plan.border}` }}>{plan.label}</span>
                    </td>
                    <td style={tdStyle}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 60, height: 5, borderRadius: 3, background: SURFACE2, overflow: 'hidden' }}>
                          <div style={{ height: '100%', background: GOLD, width: `${r.completeness}%` }} />
                        </div>
                        <span style={{ fontFamily: MONO, fontSize: 11, color: INK_FAINT }}>{r.completeness}%</span>
                      </div>
                    </td>
                    <td style={tdStyle}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12 }}>
                        <span style={{ width: 7, height: 7, borderRadius: '50%', background: status.dot }} />{status.label}
                      </div>
                    </td>
                    <td style={tdStyle}>{r.builder}</td>
                    <td style={{ ...tdStyle, borderRadius: '0 10px 10px 0' }}>
                      <button
                        onClick={() => setPanelRow(r.name)}
                        style={{ fontFamily: MONO, fontSize: 11, color: GOLD_LT, border: '1px solid #4a3417', padding: '6px 12px', borderRadius: 6, cursor: 'pointer', background: 'transparent', whiteSpace: 'nowrap' }}>
                        {r.status === 'wait' ? '分派' : '查看'}
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>}
      </div>

      {panelRow && (() => {
        const r = MOCK_ROWS.find(row => row.name === panelRow)
        if (!r) return null
        const plan = PLAN_STYLE[r.plan]
        const status = STATUS_STYLE[r.status]
        return (
          <div
            onClick={() => setPanelRow(null)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, zIndex: 100 }}>
            <div onClick={e => e.stopPropagation()} style={{ background: SURFACE, border: `1px solid ${LINE}`, borderRadius: 14, padding: '28px 26px', maxWidth: 440, width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                <div style={{ fontSize: 17, fontWeight: 700 }}>{r.name}</div>
                <div onClick={() => setPanelRow(null)} role="button" tabIndex={0}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setPanelRow(null) } }}
                  style={{ color: INK_FAINT, fontSize: 20, cursor: 'pointer', lineHeight: 1 }}>×</div>
              </div>
              <div style={{ fontSize: 12.5, color: INK_FAINT, marginBottom: 20 }}>{r.industry}</div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: 13, marginBottom: 20 }}>
                <div><span style={{ color: INK_FAINT }}>提交Agent：</span>{r.agentName}</div>
                <div><span style={{ color: INK_FAINT }}>方案：</span><span style={{ color: plan.color }}>{plan.label}</span></div>
                <div><span style={{ color: INK_FAINT }}>资料完整度：</span>{r.completeness}%</div>
                <div><span style={{ color: INK_FAINT }}>状态：</span>{status.label}</div>
                <div><span style={{ color: INK_FAINT }}>建置人：</span>{r.builder}</div>
              </div>

              {r.status === 'wait' ? (
                <>
                  <div style={{ fontFamily: MONO, fontSize: 11, color: INK_FAINT, marginBottom: 8 }}>分派给</div>
                  <select
                    value={assignee} onChange={e => setAssignee(e.target.value)}
                    style={{ width: '100%', background: SURFACE2, border: `1px solid ${LINE}`, borderRadius: 8, padding: '10px 12px', color: INK, fontSize: 14, fontFamily: SANS, marginBottom: 16 }}>
                    <option>大牛</option>
                  </select>
                  <button
                    onClick={() => setPanelRow(null)}
                    style={{ width: '100%', background: GOLD, color: '#241A05', border: 'none', fontWeight: 700, fontSize: 13.5, padding: 12, borderRadius: 8, cursor: 'pointer' }}>
                    确认分派给 {assignee}
                  </button>
                  <p style={{ textAlign: 'center', fontSize: 11, color: INK_FAINT, marginTop: 10 }}>占位操作 — 等 Supabase 建好后接真实写入</p>
                </>
              ) : (
                <button
                  onClick={() => setPanelRow(null)}
                  style={{ width: '100%', background: 'transparent', border: `1px solid ${LINE}`, color: INK_MUTE, fontWeight: 600, fontSize: 13.5, padding: 12, borderRadius: 8, cursor: 'pointer' }}>
                  关闭
                </button>
              )}
            </div>
          </div>
        )
      })()}
    </div>
  )
}
