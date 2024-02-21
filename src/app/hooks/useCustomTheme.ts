import { useTheme } from 'next-themes'

const useCustomTheme = () => {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }
  return { toggleTheme }
}

export default useCustomTheme
