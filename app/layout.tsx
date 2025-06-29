import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'earthy boom',
  description: 'Created by Yesp Tech Solutions',
 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
