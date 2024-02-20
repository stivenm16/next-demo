'use client'
import { ThemeProvider } from 'next-themes'
import React from 'react'

interface IProps {
  children: React.ReactNode
}
const Provider = ({ children }: IProps) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}

export default Provider
