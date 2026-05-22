'use client'

import { Sun, Moon } from 'lucide-react'
import { useGeneralStore } from '@/lib/stores/general/general'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useGeneralStore()

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="text-white/70 hover:text-gold transition-colors duration-200 p-1"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
