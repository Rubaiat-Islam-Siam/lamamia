"use client"

import React, { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

const DarkMode = () => {
    const context = useContext(ThemeContext)
    
    // Optional: handle case where context is undefined if used outside provider, though layout wraps it so it's safe.
    if (!context) {
        return null; 
    }

    const { toggle, theme } = context;

    return (
        <div 
            className="w-12 h-6 border border-[#53c28b70] rounded-3xl flex items-center justify-between p-0.5 relative cursor-pointer" 
            onClick={toggle}
        >
            <div className="text-[12px]">🌙</div>
            <div className="text-[12px]">🔆</div>
            <div 
                className="w-4 h-4 bg-[#53c28b] rounded-full absolute transition-all duration-300 ease-in-out"
                style={theme === "light" ? { left: "2px" } : { right: "2px" }}
            />
        </div>
    )
}

export default DarkMode
