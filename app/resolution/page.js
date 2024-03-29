import CreatingResolutionPanel from '@/components/creatingResolutionPanel'
import ResolutionPanel from '@/components/resolutionPanel'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className='h-dvh min-w-full items-center justify-between flex flex-col flex-row' >
        <CreatingResolutionPanel/>
        <Image src="/meoww.jpg"     
        width={50}
        height={50}
      />
      </div>
    </main>
  )
}
