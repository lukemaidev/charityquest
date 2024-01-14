"use client"

import React, { createContext, useState, useContext } from 'react';

 const AppContext = createContext();
 
 export const AppProvider = ({ children }) => {
 const [userName, setUsername] = useState("");
 const [theme, setTheme] = useState("light");
 const [userinfo, setUserinfo] = useState({});
 const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
 

 const value = {
 userName,
 theme,
 setUsername,
 toggleTheme, 
 userinfo,
 setUserinfo
 };
return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
 };
// Export the context
 export const useAppContext=()=> useContext(AppContext)