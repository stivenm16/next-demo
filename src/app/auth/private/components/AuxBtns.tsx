'use client'

import SignOut from '@/app/components/SignOut'
import ToggleTheme from '@/app/components/ToggleTheme'
import React from 'react'

export const AuxBtns = () => {
  return (
    <div className="gap-2 flex flex-col md:flex-row fixed bottom-5 right-5 z-10">
      <ToggleTheme />
      <SignOut />
    </div>
  )
}
