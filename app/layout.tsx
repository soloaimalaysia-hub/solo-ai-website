import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'Solo AI — AI Made Simple. Business Made Better.',
  description: "Malaysia's AI Empire for SME. 24/7 AI Workers for Saloon, Durian, Campus & more.",
  keywords: 'Solo AI, Malaysia AI, SME AI, Saloon AI, WhatsApp AI, soloai.my',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[#0A0A0A] text-white antialiased">{children}</body>
    </html>
  )
}
