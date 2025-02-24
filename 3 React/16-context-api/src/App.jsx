import { createContext, useContext, useState } from "react";
import { Welcome } from "./components/Welcome";
import { ThemeToggle } from "./components/ThemeToggle";
import ThemeContext from "./components/store/ThemeContext";

function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>{
    setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
  }

  return (
    <>
      <ThemeContext.Provider value={{theme:theme, toggleTheme:toggleTheme }}>
        <Welcome/>
        <ThemeToggle/>
      </ThemeContext.Provider>
    </>
  )
}

export default App
