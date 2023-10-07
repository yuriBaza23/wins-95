import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const win95Font = localFont({ src: './fonts/w95.ttf' })

export const metadata: Metadata = {
  title: 'Windows 95 Simulator',
  description: 'Project to simulate Windows 95 in the browser',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={win95Font.className}>{children}</body>
    </html>
  )
}
