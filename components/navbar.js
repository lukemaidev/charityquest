"use client"

import { useAppContext } from "@/context/AppContext"

export default function NavBar(){
    const {state, setState} = useAppContext()
    return(
        <div>{state}
        
        <button onClick={()=>{state=="Something" ? setState("Something else") : setState("Something")}}>Change state</button>
        </div>
    )
}