"use client";

import React from "react";

import useInput from "@/hooks/useInput";

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
        console.log("email", email.value);
        console.log("password", password.value);
    };

    return (
        <form onSubmit={submitForm}>
            <label>Person commited:</label>
            <input placeholder="Person commited" {...userName} />
            <label>Observer:</label>
            <input placeholder="Oberver" {...observerName} />
            <label>Title</label>
            <input placeholder="Title" {...label} />
            <label>Description</label>
            <input placeholder="Description" {...description} />
            <label>Resolution Type</label>
            <input placeholder="Resolution" {...Type} />
            <label>Repeat per week:</label>
            <input placeholder="0" {...repeatPerWeek} />
            <label>Streak until finish:</label>
            <input placeholder="0" {...overallGoal} />
            <label>Amount of money:</label>
            <input placeholder="0" {...money} />
            <button type="submit">Commit!</button>
        </form>
    );
};