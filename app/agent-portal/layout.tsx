import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agent Portal — Solo AI Empire',
  robots: { index: false, follow: false },
}

export default function AgentPortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700;900&family=JetBrains+Mono:wght@400;500;700&display=swap" />
      {children}
    </>
  )
}
