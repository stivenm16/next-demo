'use client'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import logoLight from '../../../assets/svgs/logo-samm-ia-1802-a.png'
import logo from '../../../assets/svgs/logo-samm-ia-1802-b.png'

export const BackgroundImage = () => {
  const { theme } = useTheme()
  return (
    <div className="relative">
      <Image
        priority
        alt="logo"
        src={theme === 'dark' ? logoLight : logo}
        className={`z-0 absolute left-1/4 top-28 opacity-20 `}
        width="0"
        height="0"
        sizes="100vw"
        placeholder="blur"
        blurDataURL={'../../assets/svgs/logo-samm-ia-1802-b.png'}
        style={{ width: '50%', height: 'auto' }}
      />
    </div>
  )
}
