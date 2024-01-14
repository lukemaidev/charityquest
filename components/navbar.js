"use client";

import { useAppContext } from "@/context/AppContext";
import useFetch from "@/hooks/useFetch";
import { set } from "mongoose";
import { useState } from "react";

export default function NavBar() {
  const { userName, theme, setUsername, toggleTheme, userinfo, setUserinfo } =
    useAppContext();

  const [navbarUsername, setNavbarUsername] = useState("kekew");
  const [loginError, setLoginError] = useState("");

  const logIn = () => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_BACKEND_URI + "/user/" + navbarUsername
        );
        const json = await response.json();
        console.log(json);
        setUserinfo(json);
        setUsername(json.data.userName);
        console.log(userinfo);  
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

  const loggedinNavBar = () => {
    return (
      <div>
        <div>{userName}</div>
        <button
          onClick={() => {
            setUsername("");
          }}
        >
          logout
        </button>
      </div>
    );
  };
  const loggedoutNavBar = () => {
    console.log("Logged out");
    return (
      <div>
        logged out
        <input
          type="text"
          value={navbarUsername}
          onChange={(e) => setNavbarUsername(e.target.value)}
        />
        <button onClick={() => logIn()}>login</button>
        {loginError}
      </div>
    );
  };

  return (
    <div>
      {userName} {theme}
      {userName == "" ? loggedoutNavBar() : loggedinNavBar()}
      <button onClick={toggleTheme}>toggle theme</button>
    </div>
  );
}
