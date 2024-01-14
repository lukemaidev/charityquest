"use client"// Because we're inside a server component
import React, { createContext, useState, useContext } from 'react';
// Create the context
 const AppContext = createContext();
// Create a provider component
 export const AppProvider = ({ children }) => {
 const [userName, setUsername] = useState("");
 const [theme, setTheme] = useState("light");
 const [userinfo, setUserinfo] = useState({});
 const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
 
 
// Define any functions or values you want to provide
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