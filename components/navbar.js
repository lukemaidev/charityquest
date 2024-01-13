"use client"

import { useAppContext } from "@/context/AppContext"

export default function NavBar(){
    const {
        userName,
        theme,
        setUsername,
        toggleTheme
        } = useAppContext()
    
    const loggedinNavBar = () => {
        return(
            <div>logged in
            <button onClick={()=>{
                setUsername("")}
            }>logout</button>
            </div>
        )
    }
    const loggedoutNavBar = () => {
        console.log("Logged out")
        return(
            <div>logged out
                 <button onClick={()=>{setUsername("Yasss");console.log("Something cool")}}>login</button>
            </div>
        )
    }

    return(
        <div>{userName} {theme}
        {userName == "" ?
        loggedoutNavBar(): loggedinNavBar()}
        <button onClick={toggleTheme}>toggle theme</button>
        </div>
    )

}



