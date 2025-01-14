import React from "react";
import { createContext, useState, useContext, useEffect } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev);
        upadateDarkMode(!isDarkMode)
    };

    useEffect(() => {
        const isDark = 
        localStorage.theme === 'dark' || (!('theme' in localStorage) 
        && window.matchMedia('(prefers-color-scheme: dark)').matches)
        setIsDarkMode(isDark);
        upadateDarkMode(isDark);
    }, [])

    return (
        <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

function upadateDarkMode(isDarkMode) {
    if(isDarkMode) {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark';
    } else {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light';
    }
}

export const useDarkMode = () => useContext(DarkModeContext);