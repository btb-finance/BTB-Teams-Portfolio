import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BTB Teams Portfolio',
  description: 'Showcase of our amazing team members',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
