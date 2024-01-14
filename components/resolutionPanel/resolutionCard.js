"use client"

import useFetch from "@/hooks/useFetch";
import { useAppContext } from "@/context/AppContext";

export default function ResolutionCard({Resolutions_id}){
    const { data, loading, error } = useFetch(process.env.NEXT_PUBLIC_BACKEND_URI+"/resolution/"+Resolutions_id)
    const { userName, theme, setUsername, toggleTheme, userinfo, setUserinfo } =
    useAppContext();
    return(<div>
        
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {data && <div>
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
            {userinfo.userType && <button>send nudge</button>}
        </div>}
    </div>)
}