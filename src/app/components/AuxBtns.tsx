'use client'
import Link from 'next/link'
import { Button, SignOut, ToggleTheme } from '.'
interface Props {
  path?: string
}
export const AuxBtns = ({ path }: Props) => {
  const name = path ? path?.split('/').pop() : 'Test'

  return (
    <div className="gap-2 flex flex-col md:flex-row fixed bottom-5 right-5 z-10">
      <ToggleTheme />
      <SignOut />
      <Link href={path || '/auth/Test'}>
        <Button label={`Go to ${name}`} customStyles="ring-1 ring-white h-10" />
      </Link>
    </div>
  )
}
