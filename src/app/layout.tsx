import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pathfindr - Stand Out. Get Accepted. | AI-Powered College Counseling',
  description: 'AI-powered college counseling for high-achieving students. Get personalized guidance from a Carnegie Mellon CS admit to secure your dream school acceptance.',
  keywords: 'college counseling, college admissions, essay editing, AI college counseling, ivy league admissions',
  authors: [{ name: 'Pathfindr' }],
  openGraph: {
    title: 'Pathfindr - Stand Out. Get Accepted.',
    description: 'AI-powered college counseling for high-achieving students.',
    url: 'https://pathfindr.com',
    siteName: 'Pathfindr',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased text-gray-900`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}