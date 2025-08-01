import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Enterprise SaaS',
    default: 'Enterprise SaaS Platform',
  },
  description: 'Professional enterprise SaaS application built with Enhanced Geek Projects Methodology',
  metadataBase: new URL('https://your-domain.com'),
  keywords: ['SaaS', 'Enterprise', 'Business', 'Dashboard'],
  authors: [{ name: 'Your Company' }],
  creator: 'Your Company',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Enterprise SaaS Platform',
    description: 'Professional enterprise SaaS application',
    siteName: 'Enterprise SaaS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise SaaS Platform',
    description: 'Professional enterprise SaaS application',
    creator: '@yourcompany',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}