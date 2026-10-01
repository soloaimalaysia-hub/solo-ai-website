import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ — Solo AI | AI CEO PA for Malaysia SME',
  description: 'Frequently asked questions about Solo AI — WhatsApp AI CEO PA for Salon, F&B, Vending Machine and more. Find answers about pricing, setup, features and how May works for your business.',
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
