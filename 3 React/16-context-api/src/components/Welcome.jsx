import React, { useContext } from 'react'
import ThemeContext from './store/ThemeContext'

export const Welcome = () => {
    const { theme } = useContext(ThemeContext)
    console.log(theme);
    return (
        <div className={`text-3xl m-3 p-2 ${theme === 'light' ? "bg-slate-200 text-gray-800" : "text-slate-200 bg-gray-800" }`}>Welcome to Theme Changing App.</div>

    )
}
