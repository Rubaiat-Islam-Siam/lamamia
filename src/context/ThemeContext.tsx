"use client"

import { createContext, useState, useContext } from "react"

export const ThemeContext = createContext<{theme: string; toggle: () => void} | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [mode, setMode] = useState("dark")

    const toggle = () => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"))
    }
    
    return (
        <ThemeContext.Provider value={{ theme: mode, toggle }}>
           <div className={`theme ${mode}`}>
             {children}
           </div>
        </ThemeContext.Provider>
    )
}
