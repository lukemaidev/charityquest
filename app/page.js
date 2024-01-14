import Image from 'next/image'
import ResolutionPanel from '@/components/resolutionPanel'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className='h-dvh min-w-full items-center justify-between flex flex-col flex-row' >
      <ResolutionPanel/>
      </div>
    </main>
  )
}
