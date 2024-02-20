'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button, LoginForm } from './components'
import getUser from './services/axios'

const handlePress = async () => {
  const response = await getUser()
}
export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex  flex-col w-full items-center">
      <LoginForm />
      <div className=" flex mt-5 gap-5">
        <Button onClick={() => setTheme('light')}>Light Mode</Button>
        <Button onClick={() => setTheme('dark')}>Dark Mode</Button>
      </div>
    </div>
  )
}
