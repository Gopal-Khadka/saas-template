import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Atlantis',
    default: 'Atlantis - The best AI to generate your next research report',
  },
  description:
    'Atlantis is the best AI to generate your next research report',
}
  
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
