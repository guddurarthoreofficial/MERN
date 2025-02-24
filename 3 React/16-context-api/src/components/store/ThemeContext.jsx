import { useState, createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () =>{
      setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
    }

    const contextVal = {
        theme: theme,
        toggleTheme : toggleTheme
    }


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;
