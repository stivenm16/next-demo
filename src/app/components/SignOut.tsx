'use client'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { Button } from '.'

export const SignOut = () => {
  return (
    <Link href="/">
      <Button
        customStyles="h-10 ring-1 ring-white"
        label="Cerrar Sesion"
        onClick={signOut}
      />
    </Link>
  )
}
