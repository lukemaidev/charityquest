"use client"

import CreatingResolutionPanel from '@/components/creatingResolutionPanel'
import ResolutionPanel from '@/components/resolutionPanel'
import Image from 'next/image'
import useFetch from '@/hooks/useFetch';

export default function Page({ params }) {
    const { data, loading, error } = useFetch(
        process.env.NEXT_PUBLIC_BACKEND_URI + "/resolution/" + params.resolution_id
      );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className='h-dvh min-w-full items-center justify-between flex flex-col flex-row' >
      {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {data && data.status != 200 && <div>Invalid id</div>}
        {data && data.status == 200 && (
          <div>
            {console.log(data.data)}
            {data.data.title}
            {data.data.userName}
            {data.data.observerName}
            {data.data.description}
            {data.data.Type}
            {data.data.repeatPerWeek}
            {data.data.weeklyProgress}
            {data.data.overallProgress}
            {data.data.overallGoal}
            {data.data.money}
          </div>
        )}
      </div>
    </main>
  )
}
