import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Vending Machine System — Solo AI',
  description: 'AI-powered vending machine management: real-time CRM, smart restocking predictions, member wallet, analytics dashboard. Built for vending machine operators in Malaysia.',
}

export default function VendingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
