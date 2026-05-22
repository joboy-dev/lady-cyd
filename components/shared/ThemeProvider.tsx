'use client'

import { useEffect } from 'react'
import { useGeneralStore } from '@/lib/stores/general/general'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useGeneralStore((s) => s.theme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return <>{children}</>
}
