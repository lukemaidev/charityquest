"use client"

import useFetch from "@/hooks/useFetch";

export default function AllResolutionPanel(){
    const { data, loading, error } = useFetch(process.env.NEXT_PUBLIC_BACKEND_URI+"/resolution/")
    return(<div className="">
        
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {data && 
        data.data.map((resolution, i) => {
            return <div key={resolution._id}>            
            {resolution.title}
            {resolution.userName}
            {resolution.observerName}
            {resolution.description}
            {resolution.Type}
            {resolution.repeatPerWeek}
            {resolution.weeklyProgress}
            {resolution.overallProgress}
            {resolution.overallGoal}
            {resolution.money}
            </div>
        })
        }
        
    </div>)
}