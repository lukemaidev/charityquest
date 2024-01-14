"use client"

import ResolutionCard from "./resolutionPanel/resolutionCard";

export default function ResolutionPanel({Resolutions_id}){
    return(<div>
        {
        Resolutions_id.map((resolution, i) => {
            return <ResolutionCard Resolutions_id={resolution} key={i}/>;
        })}
    </div>)
}