import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: 'Harshit Mittal | Full-Stack Developer',
  description: 'Full-Stack Developer & AI/ML Enthusiast. Computer Science undergraduate at DIT University specializing in Full Stack and DevOps. 500+ competitive programming problems solved.',
  keywords: ['developer', 'full-stack', 'react', 'next.js', 'portfolio', 'web development', 'competitive programming', 'AI/ML'],
  authors: [{ name: 'Harshit Mittal' }],
  creator: 'Harshit Mittal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Harshit Mittal | Full-Stack Developer',
    description: 'Full-Stack Developer & AI/ML Enthusiast. Building innovative web applications with modern technologies.',
    siteName: 'Harshit Mittal Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harshit Mittal | Full-Stack Developer',
    description: 'Full-Stack Developer & AI/ML Enthusiast. Building innovative web applications with modern technologies.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0a0a0f' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
