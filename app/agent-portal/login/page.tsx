'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const BG = '#0A0A0C', SURFACE = '#15151A', SURFACE2 = '#1B1B21', LINE = '#26262C'
const GOLD = '#F5A623', GOLD_LT = '#FCD98A', PURPLE = '#8B5CF6', PURPLE_LT = '#C4B0F7'
const INK = '#EDEDF0', INK_MUTE = '#9A99A3', INK_FAINT = '#86838D'
const MONO = "'JetBrains Mono', monospace"
const SANS = "'Noto Sans SC','PingFang SC','Microsoft YaHei',sans-serif"

export default function AgentLoginPage() {
  const router = useRouter()
  const [step, setStep] = useState<1 | 2>(1)
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', ''])
  const [cursorIdx, setCursorIdx] = useState(0)
  const [countdown, setCountdown] = useState(60)
  const [phoneError, setPhoneError] = useState('')
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (step !== 2 || countdown <= 0) return
    const t = setTimeout(() => setCountdown(c => c - 1), 1000)
    return () => clearTimeout(t)
  }, [step, countdown])

  const sendCode = () => {
    if (phone.replace(/\D/g, '').length < 8) {
      setPhoneError('请输入完整的手机号码')
      return
    }
    setPhoneError('')
    setStep(2)
    setCountdown(60)
    setOtp(['', '', '', '', '', ''])
    setCursorIdx(0)
    setTimeout(() => inputRefs.current[0]?.focus(), 50)
  }

  const resend = () => {
    if (countdown > 0) return
    setCountdown(60)
    setOtp(['', '', '', '', '', ''])
    setCursorIdx(0)
    inputRefs.current[0]?.focus()
  }

  const handleOtpChange = (idx: number, val: string) => {
    const digit = val.replace(/\D/g, '').slice(-1)
    const next = [...otp]
    next[idx] = digit
    setOtp(next)
    if (digit && idx < 5) {
      setCursorIdx(idx + 1)
      inputRefs.current[idx + 1]?.focus()
    }
  }

  const handleOtpKeyDown = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
      setCursorIdx(idx - 1)
      inputRefs.current[idx - 1]?.focus()
    }
  }

  const filledCount = otp.filter(Boolean).length
  const canVerify = filledCount === 6

  const verify = () => {
    if (!canVerify) return
    router.push('/agent-portal')
  }

  const cardStyle: React.CSSProperties = { background: SURFACE, border: `1px solid ${LINE}`, borderRadius: 14, padding: '36px 32px' }
  const labelStyle: React.CSSProperties = { display: 'block', fontSize: 12, color: INK_MUTE, marginBottom: 8, fontFamily: MONO }
  const btnStyle: React.CSSProperties = { width: '100%', background: GOLD, color: '#241A05', border: 'none', fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 9, cursor: 'pointer' }
  const btnGhostStyle: React.CSSProperties = { ...btnStyle, background: 'transparent', border: `1px solid ${LINE}`, color: INK_MUTE, marginTop: 10 }

  return (
    <div style={{ background: BG, color: INK, fontFamily: SANS, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ width: '100%', maxWidth: 400 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 40 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: `linear-gradient(135deg, ${GOLD}, ${PURPLE})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 14, color: '#0A0A0C' }}>S</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 15 }}>Solo AI Empire</div>
            <div style={{ fontFamily: MONO, fontSize: 10.5, color: INK_FAINT }}>AGENT PORTAL</div>
          </div>
        </div>

        <div style={cardStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 26 }}>
            <div style={{ width: 22, height: 22, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: MONO, fontSize: 11, fontWeight: 700, background: GOLD, color: '#241A05', border: `1px solid ${GOLD}` }}>1</div>
            <div style={{ flex: 1, height: 1, background: step === 2 ? GOLD : LINE }} />
            <div style={{ width: 22, height: 22, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: MONO, fontSize: 11, fontWeight: 700, background: step === 2 ? GOLD : SURFACE2, color: step === 2 ? '#241A05' : INK_FAINT, border: `1px solid ${step === 2 ? GOLD : LINE}` }}>2</div>
          </div>

          {step === 1 ? (
            <>
              <h1 style={{ fontSize: 20, fontWeight: 900, margin: '0 0 8px' }}>输入手机号登入</h1>
              <p style={{ fontSize: 13.5, color: INK_MUTE, margin: '0 0 24px' }}>我们会发送 6 位数验证码到你的 WhatsApp / 短信</p>
              <label style={labelStyle}>手机号码</label>
              <div style={{ display: 'flex', gap: 8, marginBottom: 22 }}>
                <div style={{ width: 70, background: SURFACE2, border: `1px solid ${LINE}`, borderRadius: 8, padding: '12px 10px', color: INK, fontSize: 14, textAlign: 'center', fontFamily: MONO }}>+60</div>
                <input
                  type="text"
                  placeholder="12-345 6789"
                  value={phone}
                  onChange={e => { setPhone(e.target.value); if (phoneError) setPhoneError('') }}
                  onKeyDown={e => e.key === 'Enter' && sendCode()}
                  aria-invalid={!!phoneError}
                  style={{ flex: 1, background: SURFACE2, border: `1px solid ${phoneError ? '#B4453E' : LINE}`, borderRadius: 8, padding: '12px 14px', color: INK, fontSize: 15, fontFamily: SANS }}
                />
              </div>
              {phoneError && <div style={{ fontSize: 12, color: '#E5757A', marginTop: -14, marginBottom: 18 }}>{phoneError}</div>}
              <button style={btnStyle} onClick={sendCode}>发送验证码</button>
              <div style={{ textAlign: 'center', marginTop: 18, fontSize: 12.5, color: INK_FAINT }}>
                还不是 Agent？<Link href="/agent-portal/apply" style={{ color: PURPLE_LT, textDecoration: 'none' }}>申请加入 →</Link>
              </div>
            </>
          ) : (
            <>
              <h1 style={{ fontSize: 20, fontWeight: 900, margin: '0 0 8px' }}>输入验证码</h1>
              <p style={{ fontSize: 13.5, color: INK_MUTE, margin: '0 0 24px' }}>验证码已发送到 <strong style={{ color: INK }}>+60 {phone || '12-345 6789'}</strong></p>

              <label style={labelStyle}>6位数验证码</label>
              <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                {otp.map((d, i) => (
                  <input
                    key={i}
                    ref={el => { inputRefs.current[i] = el }}
                    value={d}
                    onChange={e => handleOtpChange(i, e.target.value)}
                    onKeyDown={e => handleOtpKeyDown(i, e)}
                    onFocus={() => setCursorIdx(i)}
                    maxLength={1}
                    style={{
                      width: 48, height: 56, background: SURFACE2, borderRadius: 8, textAlign: 'center',
                      fontSize: 20, fontWeight: 700, fontFamily: MONO, color: d ? GOLD_LT : INK,
                      border: `1px solid ${d ? GOLD : cursorIdx === i ? PURPLE : LINE}`, outline: 'none',
                    }}
                  />
                ))}
              </div>
              <div style={{ fontSize: 12.5, color: INK_FAINT, margin: '14px 0 24px' }}>
                {countdown > 0 ? `${countdown}秒后可 ` : ''}
                <span
                  role="button"
                  tabIndex={countdown === 0 ? 0 : -1}
                  aria-disabled={countdown > 0}
                  style={{
                    color: countdown === 0 ? PURPLE_LT : INK_FAINT,
                    textDecoration: countdown === 0 ? 'underline' : 'none',
                    fontWeight: countdown === 0 ? 700 : 400,
                    cursor: countdown === 0 ? 'pointer' : 'default',
                  }}
                  onClick={resend}
                  onKeyDown={e => { if (countdown === 0 && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); resend() } }}
                >重新发送验证码</span>
              </div>

              <button style={{ ...btnStyle, opacity: canVerify ? 1 : 0.5, cursor: canVerify ? 'pointer' : 'default' }} onClick={verify}>验证并登入</button>
              <button style={btnGhostStyle} onClick={() => setStep(1)}>← 更换手机号</button>
            </>
          )}
        </div>

        <div style={{ textAlign: 'center', marginTop: 22, fontSize: 12, color: INK_FAINT }}>遇到问题？联系 Captain K 团队</div>
      </div>
    </div>
  )
}
