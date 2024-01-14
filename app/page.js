"use client"

import Image from 'next/image'
import AllResolutionPanel from '@/components/allResolutionPanel'
import { useAppContext } from '@/context/AppContext'

export default function Home() {
  const { userName, theme, setUsername, toggleTheme, userinfo, setUserinfo } = useAppContext();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className='h-dvh min-w-full items-center justify-between flex flex-col flex-row' >
        <AllResolutionPanel/>
        <Image src="/meoww.jpg"     
        width={50}
        height={50}
      />
      </div>
    </main>
  )
}
