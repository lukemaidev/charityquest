"use client";

import React from "react";

import useInput from "@/hooks/useInput";
import axios from "axios";

export default function CreatingResolutionPanel()  {
    const label = useInput("");
    const userName = useInput("");
    const observerName = useInput("");
    const description = useInput("");
    const Type = useInput("");
    const repeatPerWeek = useInput("");
    const overallGoal = useInput("");
    const money = useInput("");



    const submitForm = (event) => {
        event.preventDefault();
        const sendingData = {
            "title": label.value,
            "userName": userName.value,
            "observerName": observerName.value,
            "description": description.value,
            "Type":     Type.value,
            "repeatPerWeek": repeatPerWeek.value,
            "weeklyProgress": 0,
            "overallProgress": 0,
            "overallGoal": overallGoal.value,
            "money": money.value,
            "completed": 0,
            "todayMarked": 0
        }
        axios.post(process.env.NEXT_PUBLIC_BACKEND_URI+"/resolution/", sendingData)
    };

    return (
        <form onSubmit={submitForm}>
            <label>Person commited:</label> <br/>
            <input className="text-black"placeholder="Person commited" {...userName} /> <br/>
            <label>Observer:</label><br/>
            <input className="text-black" placeholder="Oberver" {...observerName} /><br/>
            <label>Title</label><br/>
            <input className="text-black" placeholder="Title" {...label} /><br/>
            <label>Description</label><br/>
            <input className="text-black" type="textarea" placeholder="Description" {...description} /><br/>
            <label>Resolution Type</label><br/>
            <input className="text-black" placeholder="Resolution" {...Type} /><br/>
            <label>Repeat per week:</label><br/>
            <input className="text-black" placeholder="0" {...repeatPerWeek} /><br/>
            <label>Streak until finish:</label><br/>
            <input className="text-black" placeholder="0" {...overallGoal} /><br/>
            <label>Amount of money:</label><br/>
            <input className="text-black" placeholder="0" {...money} /><br/>
            <button  className="basis-40 p-1 bg-sky-500 hover:bg-sky-700 rounded"type="submit">Commit!</button>
        </form>
    );
};