
'use client'
import Link from 'next/link'
import { useTheme } from '../contexts/ThemeContext'
import { Moon, Sun } from 'lucide-react'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Mental Health Support
        </Link>
        <p className="text-gray-600 dark:text-gray-400">Your Mental Health, Our Priority</p>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <Link href="/support" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Get Support Now
          </Link>
          <Link href="/support" className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition-colors">
            Donate
          </Link>
        </div>
      </div>
    </header>
  )
}


