import { useState, useEffect } from 'react'

export const useTheme = () => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark')
      setDark(true)
    }
  }, [])

  const toggleTheme = () => {
    const isDark = !dark
    setDark(isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', isDark)
  }

  return { dark, toggleTheme }
}
