import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'Solo AI — Your AI CEO PA for Malaysia SME',
  description: "AI CEO PA living inside WhatsApp. You confirm, May executes. Built for Salon, F&B & more. Malaysia's #1 AI for SME.",
  keywords: 'Solo AI, AI CEO PA, Malaysia AI, SME AI, Saloon AI, F&B AI, May AI, WhatsApp AI, soloai.my',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
      </head>
      <body className="bg-[#0A0A0A] text-white antialiased">{children}</body>
    </html>
  )
}
