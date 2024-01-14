"use client"

import useFetch from "@/hooks/useFetch";
import Link from "next/link";

export default function AllResolutionPanel(){
    const { data, loading, error } = useFetch(process.env.NEXT_PUBLIC_BACKEND_URI+"/resolution/")
    return(<div className="w-screen h-full overflow-scroll">
        
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {data && 
        data.data.map((resolution, i) => {
            return <Link className="w-screen h-full bg-slate-600 hover:bg-slate-700" href={"/resolution/"+resolution._id}>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            {data && <div>
                Title : {resolution.title} <br/>
                Username: {resolution.userName} <br/>
                ObserverName : {resolution.observerName}<br/>
                Description : {resolution.description}<br/>
                Type : {resolution.Type}<br/>
                RepeatPerWeek : {resolution.repeatPerWeek}<br/>
                Weekly Progress : {resolution.weeklyProgress}<br/>
                OverallProgress : {resolution.overallProgress}<br/>
                OverallGoal : {resolution.overallGoal}<br/>
                Money on the line : {resolution.money}<br/><br/><br/>
            </div>}
            </Link>
        })
        
        }
        <br/>
    </div>)
}