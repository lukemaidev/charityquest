"use client";

import { useAppContext } from "@/context/AppContext";
import useFetch from "@/hooks/useFetch";
import { set } from "mongoose";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function NavBar() {
  const { userName, theme, setUsername, toggleTheme, userinfo, setUserinfo } =
    useAppContext();

  const [navbarUsername, setNavbarUsername] = useState("kekew");
  const [loginError, setLoginError] = useState("");
  const [userLink, setUserLink] = useState("");

  console.log(userName)
  const logIn = () => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_BACKEND_URI + "/user/" + navbarUsername
        );
        const json = await response.json();
        console.log("json: ");
        await setUserinfo(json.data);
        await setUsername(json.data.userName);
        setLoginError("");
      } catch (error) {
        setLoginError("Credential is not correct!");
      }
    };
    console.log(
      process.env.NEXT_PUBLIC_BACKEND_URI + "/user/" + navbarUsername
    );
    fetchData();
  };

  useEffect(() => {
    setUserLink(userName)
  },[userName]);

  const loggedinNavBar = () => {
    return (
      <div className="flex flex-row bg-slate-900 w-screen h-12 flex-row-reverse p-1 space-x-1">
        
        <div className="basis-60 p-1">Current theme: {theme}</div>
        <div className="basis-40 p-1">Hi {userName}!</div>
        <button className="basis-40 p-1 bg-sky-500 hover:bg-sky-700 rounded"
          onClick={() => {
            setUsername("");
          }}
        >
          logout
        </button>
        <button className="basis-40 p-1 bg-sky-500 hover:bg-sky-700 rounded" onClick={toggleTheme}>toggle theme</button>
        <div className="grow  flex flex-row">
          <Link className="basis-20 p-1"href="/"> Home </Link>
          {userName !== "" ? <Link className="basis-25 p-1" href={"/user/"+userLink}> Your Resolution</Link>: <div/>}
        </div>
      </div>
    );
  };
  const loggedoutNavBar = () => {
    console.log("Logged out");
    return (
      <div className="flex flex-row bg-slate-900 w-screen h-12 flex-row-reverse p-1 space-x-1">
        <input  className="basis-40 p-1 bg-white text-black rounded"
          type="text"
          value={navbarUsername}
          onChange={(e) => setNavbarUsername(e.target.value)}
        />
        <button  className="basis-40 p-1 bg-sky-500 hover:bg-sky-700 rounded" onClick={() => logIn()}>login</button>
        <button  className="basis-40 p-1 bg-sky-500 hover:bg-sky-700 rounded" onClick={toggleTheme}>toggle theme</button>
      </div>
      
    );
  };

  return (
    <div>
      
      {userName == "" ? loggedoutNavBar() : loggedinNavBar()}
      
    </div>
  );
}
