import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solo AI Empire · 公司介绍',
  description: '从实战走来，为 AI 时代而生 — Solo AI Empire 公司介绍、核心优势与落地项目。',
}

export default function CompanyProfileLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
