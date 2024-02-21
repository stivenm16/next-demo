'use client'
import { ThemeProvider } from 'next-themes'
import React, { useEffect, useState } from 'react'

interface IProps {
  children: React.ReactNode
}
const Provider = ({ children }: IProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}

export default Provider
