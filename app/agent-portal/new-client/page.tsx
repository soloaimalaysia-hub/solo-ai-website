'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function useIsMobile() {
  const [m, setM] = useState(false)
  useEffect(() => { const c = () => setM(window.innerWidth < 600); c(); window.addEventListener('resize', c); return () => window.removeEventListener('resize', c) }, [])
  return m
}

const BG = '#0A0A0C', SURFACE = '#15151A', LINE = '#26262C'
const GOLD = '#F5A623', GOLD_LT = '#FCD98A', PURPLE = '#8B5CF6'
const INK = '#EDEDF0', INK_MUTE = '#9A99A3', INK_FAINT = '#86838D'
const MONO = "'JetBrains Mono', monospace"
const SANS = "'Noto Sans SC','PingFang SC','Microsoft YaHei',sans-serif"

type PlanKey = 'basic' | 'growth' | 'bespoke'

const PLANS: { key: PlanKey; name: string; price: string; limit: number | null }[] = [
  { key: 'basic', name: 'Basic', price: 'RM 3,888 · 任选3项', limit: 3 },
  { key: 'growth', name: 'Growth', price: 'RM 5,888 · 任选5项', limit: 5 },
  { key: 'bespoke', name: 'Bespoke', price: '客制报价', limit: null },
]

interface ExtraField { label: string; placeholder?: string; type: 'text' | 'upload' }
interface ModuleDef { name: string; extra: ExtraField[] }

// 模块化收资料对照 — 出处：Agent_Portal_架构说明.html 第04节
const MODULES: ModuleDef[] = [
  { name: '会员与钱包', extra: [
    { label: '会员分级规则', type: 'text', placeholder: '例：银卡/金卡/黑卡' },
    { label: '积分兑换比例', type: 'text', placeholder: '例：RM1 = 1积分' },
  ]},
  { name: 'AI WhatsApp 智能对话引擎', extra: [
    { label: '常见问答 / 开场白文案', type: 'text', placeholder: '有现成文案可贴上来' },
    { label: '现有 WhatsApp 号码', type: 'text', placeholder: '+60 12-345 6789' },
  ]},
  { name: '佣金与分销结算', extra: [
    { label: '佣金比例规则', type: 'text', placeholder: '例：首单18%、续费6%' },
    { label: '分销层级结构', type: 'text', placeholder: '有几层、怎么分' },
  ]},
  { name: 'AI智能配对与预约', extra: [
    { label: '员工名单', type: 'upload' },
    { label: '排班规则', type: 'text', placeholder: '例：每周排班、休息日' },
    { label: '服务项目列表', type: 'upload' },
  ]},
  { name: '活动与现场引流', extra: [
    { label: '近期活动计划', type: 'text', placeholder: '有确定日期可以先写' },
    { label: '现场物料需求', type: 'text', placeholder: '例：大屏幕、二维码立牌' },
  ]},
  { name: '电商交易订单', extra: [
    { label: '产品数量（大概）', type: 'text', placeholder: '例：约80个SKU' },
    { label: '产品目录 / 价格表', type: 'upload' },
  ]},
  { name: '管理后台与数据分析', extra: [
    { label: '需要哪些角色权限', type: 'text', placeholder: '例：老板/店长/前台' },
    { label: '谁登入后台', type: 'text', placeholder: '姓名 + 联系方式' },
  ]},
  { name: '供应链与企业架构', extra: [
    { label: '仓库据点资料', type: 'text', placeholder: '地址、数量' },
    { label: '现有库存数据', type: 'upload' },
    { label: '法人结构', type: 'text', placeholder: '单一公司 / 多法人' },
  ]},
  { name: 'AI评估与安全权限', extra: [
    { label: '合规 / 审计要求（如有）', type: 'text', placeholder: '没有可留空' },
  ]},
]

export default function NewClientPage() {
  const router = useRouter()
  const isMobile = useIsMobile()
  const [companyName, setCompanyName] = useState('')
  const [ssm, setSsm] = useState('')
  const [bizType, setBizType] = useState('F&B 饮食业')
  const [ownerWa, setOwnerWa] = useState('')
  const [ownerEmail, setOwnerEmail] = useState('')
  const [plan, setPlan] = useState<PlanKey>('growth')
  const [selectedModules, setSelectedModules] = useState<string[]>(['AI WhatsApp 智能对话引擎', '电商交易订单'])
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({})
  const [capHit, setCapHit] = useState(false)
  const [attemptedSubmit, setAttemptedSubmit] = useState(false)

  const planDef = PLANS.find(p => p.key === plan)!
  const atCap = planDef.limit !== null && selectedModules.length >= planDef.limit
  const overCap = planDef.limit !== null && selectedModules.length > planDef.limit

  const toggleModule = (name: string) => {
    const isSelected = selectedModules.includes(name)
    if (!isSelected && atCap) {
      setCapHit(true)
      return
    }
    setCapHit(false)
    setSelectedModules(prev => isSelected ? prev.filter(m => m !== name) : [...prev, name])
  }

  const selectPlan = (key: PlanKey) => {
    setPlan(key)
    setCapHit(false)
  }

  const step1Done = companyName.trim().length > 0
  const step2Done = true
  const step3Done = selectedModules.length > 0 && !overCap
  const step4Done = step1Done && step3Done

  const segStyle = (on: boolean): React.CSSProperties => ({ flex: 1, height: 3, borderRadius: 2, background: on ? GOLD : LINE })

  const fieldStyle: React.CSSProperties = { marginBottom: 16 }
  const labelStyle: React.CSSProperties = { display: 'block', fontSize: 12, color: INK_MUTE, marginBottom: 7, fontFamily: MONO }
  const inputStyle: React.CSSProperties = { width: '100%', background: SURFACE, border: `1px solid ${LINE}`, borderRadius: 8, padding: '12px 14px', color: INK, fontSize: 14, fontFamily: SANS, boxSizing: 'border-box' }

  const submit = () => {
    if (!step1Done || !step3Done) { setAttemptedSubmit(true); return }
    router.push('/agent-portal')
  }

  return (
    <div style={{ background: BG, color: INK, fontFamily: SANS, minHeight: '100vh', lineHeight: 1.6 }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '32px 24px 100px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
          <Link href="/agent-portal" style={{ fontFamily: MONO, fontSize: 13, color: INK_FAINT, textDecoration: 'none' }}>‹ 我的客户</Link>
        </div>
        <h1 style={{ fontSize: 24, fontWeight: 900, margin: '14px 0 6px' }}>新增客户</h1>
        <p style={{ fontSize: 13.5, color: INK_MUTE, margin: '0 0 32px' }}>按步骤填写，提交后进入建置排队</p>

        <div style={{ display: 'flex', gap: 6, marginBottom: 36 }}>
          <div style={segStyle(step1Done)} />
          <div style={segStyle(step2Done)} />
          <div style={segStyle(step3Done)} />
          <div style={segStyle(step4Done)} />
        </div>

        {/* 01 基础资料 */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ fontFamily: MONO, fontSize: 12, color: GOLD, width: 20 }}>01</span>
            <span style={{ fontSize: 16, fontWeight: 700 }}>基础资料</span>
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>公司名称</label>
            <input
              style={{ ...inputStyle, border: `1px solid ${attemptedSubmit && !step1Done ? '#B4453E' : LINE}` }}
              type="text" placeholder="例：合发鸡肉批发" value={companyName}
              onChange={e => setCompanyName(e.target.value)}
              aria-invalid={attemptedSubmit && !step1Done}
            />
            {attemptedSubmit && !step1Done && <div style={{ fontSize: 12, color: '#E5757A', marginTop: 6 }}>请先填写公司名称</div>}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 14, marginBottom: 16 }}>
            <div><label style={labelStyle}>SSM 注册号</label><input style={inputStyle} type="text" placeholder="例：202601234567" value={ssm} onChange={e => setSsm(e.target.value)} /></div>
            <div>
              <label style={labelStyle}>生意类型</label>
              <select style={inputStyle} value={bizType} onChange={e => setBizType(e.target.value)}>
                <option>F&B 饮食业</option><option>美容美发 / Saloon</option><option>批发贸易 / B2B</option><option>农业 / 供应链</option>
              </select>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 14 }}>
            <div><label style={labelStyle}>老板 WhatsApp</label><input style={inputStyle} type="text" placeholder="+60 12-345 6789" value={ownerWa} onChange={e => setOwnerWa(e.target.value)} /></div>
            <div><label style={labelStyle}>老板 Email</label><input style={inputStyle} type="email" placeholder="owner@company.com" value={ownerEmail} onChange={e => setOwnerEmail(e.target.value)} /></div>
          </div>
        </div>

        {/* 02 选购方案 */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ fontFamily: MONO, fontSize: 12, color: GOLD, width: 20 }}>02</span>
            <span style={{ fontSize: 16, fontWeight: 700 }}>选购方案</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: 12 }}>
            {PLANS.map(p => {
              const sel = p.key === plan
              return (
                <div
                  key={p.key} onClick={() => selectPlan(p.key)}
                  role="radio" aria-checked={sel} tabIndex={0}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectPlan(p.key) } }}
                  style={{
                    background: SURFACE, border: `1.5px solid ${sel ? GOLD : LINE}`, borderRadius: 10, padding: 16, cursor: 'pointer',
                    ...(sel ? { background: 'rgba(245,166,35,.06)' } : {}),
                  }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4, color: sel ? GOLD_LT : INK }}>{p.name}</div>
                  <div style={{ fontFamily: MONO, fontSize: 12.5, color: INK_MUTE }}>{p.price}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* 03 勾选功能模块 */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ fontFamily: MONO, fontSize: 12, color: GOLD, width: 20 }}>03</span>
            <span style={{ fontSize: 16, fontWeight: 700 }}>
              勾选功能模块（已选 {selectedModules.length}{planDef.limit ? `/${planDef.limit}` : '项'}）
            </span>
          </div>
          {overCap && (
            <div style={{ fontSize: 12.5, color: '#E5757A', marginBottom: 10 }}>
              切换到 {planDef.name} 后超过了 {planDef.limit} 项上限，请先取消 {selectedModules.length - (planDef.limit ?? 0)} 项才能提交
            </div>
          )}
          {attemptedSubmit && !step3Done && !overCap && <div style={{ fontSize: 12, color: '#E5757A', marginBottom: 10 }}>请至少勾选一个功能模块</div>}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 10 }}>
            {MODULES.map(m => {
              const sel = selectedModules.includes(m.name)
              const disabled = !sel && atCap
              return (
                <div
                  key={m.name} onClick={() => toggleModule(m.name)}
                  role="checkbox" aria-checked={sel} aria-disabled={disabled} tabIndex={0}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleModule(m.name) } }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10, background: SURFACE,
                    border: `1px solid ${sel ? PURPLE : LINE}`, borderRadius: 8, padding: '12px 14px',
                    cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1,
                    ...(sel ? { background: 'rgba(139,92,246,.06)' } : {}),
                  }}>
                  <div style={{
                    width: 16, height: 16, borderRadius: 4, border: `1.5px solid ${sel ? PURPLE : INK_FAINT}`, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11,
                    background: sel ? PURPLE : 'transparent', color: sel ? '#fff' : 'transparent',
                  }}>✓</div>
                  <div style={{ fontSize: 13, color: INK }}>{m.name}</div>
                </div>
              )
            })}
          </div>
          {capHit && (
            <div style={{ marginTop: 10, fontSize: 12.5, color: GOLD_LT, background: 'rgba(245,166,35,.08)', border: '1px solid #4a3417', borderRadius: 8, padding: '10px 14px' }}>
              {planDef.name} 方案最多选 {planDef.limit} 项，先取消一项才能再选 — 想选更多可以换 Bespoke 客制方案
            </div>
          )}

          {MODULES.filter(m => selectedModules.includes(m.name)).map(m => (
            <div key={m.name} style={{ marginTop: 18, borderLeft: `2px solid ${PURPLE}`, borderRadius: '0 8px 8px 0', background: 'rgba(139,92,246,.05)', padding: '16px 18px' }}>
              <div style={{ fontFamily: MONO, fontSize: 10.5, color: '#C4B0F7', marginBottom: 10 }}>因为勾选了「{m.name}」，需要补充：</div>
              {m.extra.map(f => (
                <div key={f.label} style={{ marginBottom: 10 }}>
                  <label style={labelStyle}>{f.label}</label>
                  {f.type === 'upload' ? (
                    <div style={{ border: `1.5px dashed ${LINE}`, borderRadius: 8, padding: 20, textAlign: 'center', color: INK_FAINT, fontSize: 12.5 }}>
                      拖放文件到这里，或点击上传<br />支持 Excel / PDF / 图片
                    </div>
                  ) : (
                    <input
                      style={inputStyle} type="text" placeholder={f.placeholder}
                      value={fieldValues[`${m.name}::${f.label}`] || ''}
                      onChange={e => setFieldValues(v => ({ ...v, [`${m.name}::${f.label}`]: e.target.value }))}
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        <button
          onClick={submit}
          style={{ width: '100%', background: GOLD, color: '#241A05', border: 'none', fontWeight: 700, fontSize: 14.5, padding: 15, borderRadius: 9, cursor: 'pointer', marginTop: 8, opacity: step1Done && step3Done ? 1 : 0.5 }}
        >提交客户资料</button>
        <p style={{ textAlign: 'center', fontSize: 11.5, color: INK_FAINT, marginTop: 12 }}>提交后可在客户列表追踪建置进度</p>
      </div>
    </div>
  )
}
