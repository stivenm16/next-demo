'use client'
import { SignOut, ToggleTheme } from '@/app/components'

export const AuxBtns = () => {
  return (
    <div className="gap-2 flex flex-col md:flex-row fixed bottom-5 right-5 z-10">
      <ToggleTheme />
      <SignOut />
    </div>
  )
}
