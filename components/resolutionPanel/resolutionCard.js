"use client"

import useFetch from "@/hooks/useFetch";
import { useAppContext } from "@/context/AppContext";
import Link from "next/link";

export default function ResolutionCard({Resolutions_id}){
    const { data, loading, error } = useFetch(process.env.NEXT_PUBLIC_BACKEND_URI+"/resolution/"+Resolutions_id)
    const { userName, theme, setUsername, toggleTheme, userinfo, setUserinfo } =
    useAppContext();
    return(<div className="w-screen h-full bg-slate-800 hover:bg-slate-700">
        <Link href={"/resolution/"+Resolutions_id}>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {data && <div>
            Title : {data.data.title} <br/>
            Username: {data.data.userName} <br/>
            ObserverName : {data.data.observerName}<br/>
            Description : {data.data.description}<br/>
            Type : {data.data.Type}<br/>
            RepeatPerWeek : {data.data.repeatPerWeek}<br/>
            Weekly Progress : {data.data.weeklyProgress}<br/>
            OverallProgress : {data.data.overallProgress}<br/>
            OverallGoal : {data.data.overallGoal}<br/>
            Money on the line : {data.data.money}<br/>
            {userinfo.userType == "Observer" && <button className="hover:bg-slate-600">Confirm</button>}
            
        </div>}
        </Link>
    </div>)
}