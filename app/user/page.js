"use client"

import ResolutionPanel from '@/components/resolutionPanel'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        user
      <div className='h-dvh min-w-full items-center justify-between flex flex-col flex-row' >
        <ResolutionPanel/>
        <Image src="/meoww.jpg"     
        width={50}
        height={50}
      />
      </div>
    </main>
  )
}
