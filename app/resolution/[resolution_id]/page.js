"use client"

import CreatingResolutionPanel from '@/components/creatingResolutionPanel'
import ResolutionPanel from '@/components/resolutionPanel'
import Image from 'next/image'
import useFetch from '@/hooks/useFetch';
import ResolutionCard from '@/components/resolutionPanel/resolutionCard';

export default function Page({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className='h-dvh min-w-full items-center justify-between flex flex-col flex-row' >
        <ResolutionCard Resolutions_id={params.resolution_id}/>
      </div>
    </main>
  )
}
