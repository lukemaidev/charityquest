"use client"

import useFetch from "@/hooks/useFetch"

export default function ResolutionPanel(){
    const { data, loading, error } = useFetch(process.env.NEXT_PUBLIC_BACKEND_URI+"/resolution")
    return(<div>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {data && <div>There's data Trust me bro</div>}
    </div>)
}