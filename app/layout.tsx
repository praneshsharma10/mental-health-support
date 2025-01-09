import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CalmingBackground from './components/Background'
import ThemeWrapper from './components/Theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mental Health Support',
  description: 'Your Mental Health, Our Priority',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200`}>
        <ThemeWrapper>
          <CalmingBackground />
          <Header />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  )
}

