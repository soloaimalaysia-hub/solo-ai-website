'use client'

import { useState, useEffect } from 'react'

const BG = '#0A0A0C', SURFACE = '#15151A', SURFACE2 = '#1B1B21', LINE = '#26262C'
const GOLD = '#F5A623', GOLD_LT = '#FCD98A', PURPLE_LT = '#C4B0F7'
const INK = '#EDEDF0', INK_MUTE = '#9A99A3', INK_FAINT = '#86838D'
const MONO = "'JetBrains Mono', monospace"
const SANS = "'Noto Sans SC','PingFang SC','Microsoft YaHei',sans-serif"

const INDUSTRIES = ['请选择', '业务 / 销售', '自雇 / 生意人', '保险 / 金融顾问', '自由工作者', '其他']

function useIsMobile() {
  const [m, setM] = useState(false)
  useEffect(() => { const c = () => setM(window.innerWidth < 480); c(); window.addEventListener('resize', c); return () => window.removeEventListener('resize', c) }, [])
  return m
}

export default function AgentApplyPage() {
  const isMobile = useIsMobile()
  const [name, setName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [email, setEmail] = useState('')
  const [industry, setIndustry] = useState(INDUSTRIES[0])
  const [reason, setReason] = useState('')
  const [referral, setReferral] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [attemptedSubmit, setAttemptedSubmit] = useState(false)

  const nameValid = name.trim().length > 0
  const whatsappValid = whatsapp.trim().length > 0
  const canSubmit = nameValid && whatsappValid

  const labelStyle: React.CSSProperties = { display: 'block', fontSize: 12, color: INK_MUTE, marginBottom: 8, fontFamily: MONO }
  const inputStyle: React.CSSProperties = { width: '100%', background: SURFACE2, border: `1px solid ${LINE}`, borderRadius: 8, padding: '12px 14px', color: INK, fontSize: 14, fontFamily: SANS, boxSizing: 'border-box' }

  const submit = () => {
    if (!canSubmit) { setAttemptedSubmit(true); return }
    // TODO(mock): 目前只是前端状态，等 Supabase 项目建好后改成真实写入 + Captain K 后台审批
    setSubmitted(true)
  }

  return (
    <div style={{ background: BG, color: INK, fontFamily: SANS, minHeight: '100vh', lineHeight: 1.6 }}>
      <div style={{ maxWidth: 640, margin: '0 auto', padding: '64px 24px 20px', textAlign: 'center' }}>
        <div style={{ fontFamily: MONO, fontSize: 12, color: PURPLE_LT, letterSpacing: 1.5, marginBottom: 16 }}>AGENT招募 · AGENT APPLICATION</div>
        <h1 style={{ fontSize: 32, fontWeight: 900, margin: '0 0 14px', lineHeight: 1.25 }}>
          跟Solo AI Empire<br />一起，<span style={{ color: GOLD }}>用AI创业</span>
        </h1>
        <p style={{ fontSize: 14.5, color: INK_MUTE, maxWidth: 440, margin: '0 auto' }}>不用懂AI，不用懂技术。你的人脉、你的信任，就是你的价值。</p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 28, margin: '34px 0 8px', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 20, fontWeight: 900, color: GOLD_LT }}>15+</div>
            <div style={{ fontSize: 11, color: INK_FAINT, fontFamily: MONO }}>真实系统上线</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 20, fontWeight: 900, color: GOLD_LT }}>15-20%</div>
            <div style={{ fontSize: 11, color: INK_FAINT, fontFamily: MONO }}>首单佣金</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 20, fontWeight: 900, color: GOLD_LT }}>2层</div>
            <div style={{ fontSize: 11, color: INK_FAINT, fontFamily: MONO }}>封顶,绑定真实成交</div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 520, margin: '36px auto 90px', padding: '0 24px' }}>
        <div style={{ background: SURFACE, border: `1px solid ${LINE}`, borderRadius: 16, padding: '34px 30px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
              <p style={{ fontSize: 16, fontWeight: 700, margin: '0 0 8px', color: GOLD_LT }}>申请已提交</p>
              <p style={{ fontSize: 13, color: INK_MUTE, margin: 0 }}>1-2个工作日内，团队会通过 WhatsApp 联系你</p>
            </div>
          ) : (
            <>
              <p style={{ fontSize: 16, fontWeight: 700, margin: '0 0 4px' }}>提交申请</p>
              <p style={{ fontSize: 12.5, color: INK_FAINT, margin: '0 0 26px' }}>填好基本资料，Captain K团队会主动联系你</p>

              <div style={{ marginBottom: 18 }}>
                <label style={labelStyle}>姓名 <span style={{ color: GOLD }}>*</span></label>
                <input
                  style={{ ...inputStyle, border: `1px solid ${attemptedSubmit && !nameValid ? '#B4453E' : LINE}` }}
                  type="text" placeholder="你的全名" value={name} onChange={e => setName(e.target.value)}
                  aria-invalid={attemptedSubmit && !nameValid}
                />
                {attemptedSubmit && !nameValid && <div style={{ fontSize: 12, color: '#E5757A', marginTop: 6 }}>请填写姓名</div>}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 14, marginBottom: 18 }}>
                <div>
                  <label style={labelStyle}>WhatsApp 号码 <span style={{ color: GOLD }}>*</span></label>
                  <input
                    style={{ ...inputStyle, border: `1px solid ${attemptedSubmit && !whatsappValid ? '#B4453E' : LINE}` }}
                    type="tel" placeholder="+60 12-345 6789" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}
                    aria-invalid={attemptedSubmit && !whatsappValid}
                  />
                  {attemptedSubmit && !whatsappValid && <div style={{ fontSize: 12, color: '#E5757A', marginTop: 6 }}>请填写 WhatsApp 号码</div>}
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input style={inputStyle} type="email" placeholder="you@email.com" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
              </div>

              <div style={{ marginBottom: 18 }}>
                <label style={labelStyle}>现在的行业 / 工作</label>
                <select style={inputStyle} value={industry} onChange={e => setIndustry(e.target.value)}>
                  {INDUSTRIES.map(i => <option key={i}>{i}</option>)}
                </select>
              </div>

              <div style={{ marginBottom: 18 }}>
                <label style={labelStyle}>为什么想加入？（选填）</label>
                <textarea
                  style={{ ...inputStyle, resize: 'vertical', minHeight: 76 }}
                  placeholder="简单说说你的想法，或你手上有哪些人脉资源"
                  value={reason} onChange={e => setReason(e.target.value)}
                />
              </div>

              <div style={{ marginTop: 22, paddingTop: 20, borderTop: `1px solid ${LINE}` }}>
                <div style={{ fontFamily: MONO, fontSize: 11, color: INK_FAINT, marginBottom: 12 }}>如果是朋友介绍的</div>
                <div>
                  <label style={labelStyle}>介绍人姓名（选填）</label>
                  <input style={inputStyle} type="text" placeholder="谁介绍你加入的" value={referral} onChange={e => setReferral(e.target.value)} />
                </div>
              </div>

              <button
                onClick={submit}
                style={{ width: '100%', background: GOLD, color: '#241A05', border: 'none', fontWeight: 700, fontSize: 14.5, padding: 15, borderRadius: 9, cursor: 'pointer', marginTop: 8, opacity: canSubmit ? 1 : 0.5 }}
              >提交申请</button>
              <p style={{ textAlign: 'center', fontSize: 11.5, color: INK_FAINT, marginTop: 14 }}>提交后1-2个工作日内，团队会通过WhatsApp联系你</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
