import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'Solo AI Empire · 官网首页',
  description: 'Solo AI — 从业务出发，打造真正适合你的 AI 系统。9 大核心模块、54 项业务能力、20 个行业方案。',
  keywords: 'Solo AI, AI CEO PA, Malaysia AI, SME AI, Saloon AI, F&B AI, May AI, WhatsApp AI, soloai.my',
  openGraph: {
    title: 'Solo AI Empire — AI Made Simple. Business Made Better.',
    description: '从业务出发，打造真正适合你的 AI 系统。9 大模块 · 54 项能力 · 20 行业方案。',
    type: 'website',
    url: 'https://www.soloai.my/',
    images: ['https://www.soloai.my/og-cover.jpg'],
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Sans+SC:wght@400;500;700;900&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Solo AI Malaysia",
          "alternateName": "Solo AI Empire",
          "url": "https://soloai.my",
          "logo": "https://klrfpzxjsacriaqtfssf.supabase.co/storage/v1/object/public/solo-ai-assets/solo%20ai%20logo.webp",
          "description": "AI CEO PA for Malaysian SME. WhatsApp-native AI systems for Salon, F&B, Vending Machine and more.",
          "address": { "@type": "PostalAddress", "addressRegion": "Selangor", "addressCountry": "MY" },
          "contactPoint": { "@type": "ContactPoint", "telephone": "+60169212796", "contactType": "sales", "availableLanguage": ["en","ms","zh"] },
          "sameAs": []
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Solo AI Worker (May)",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web, WhatsApp",
          "offers": { "@type": "AggregateOffer", "lowPrice": "5888", "highPrice": "8888", "priceCurrency": "MYR", "offerCount": "3" },
          "featureList": ["WhatsApp AI CEO PA","Automated Booking & CRM","Daily CEO Briefing","Staff Commission Auto-calculation","Customer Win-back Automation","AI Vending Machine Management"],
          "audience": { "@type": "BusinessAudience", "audienceType": "Malaysian SME — Salon, F&B, Vending Machine" }
        })}} />
      </head>
      <body className="bg-[#0A0A0A] text-white antialiased">{children}</body>
    </html>
  )
}
