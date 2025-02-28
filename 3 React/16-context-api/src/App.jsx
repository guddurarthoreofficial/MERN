import { Welcome } from "./components/Welcome";
import { ThemeToggle } from "./components/ThemeToggle";
import { ThemeProvider } from "./components/store/ThemeContext";

function App() {

  return (
    <>
      <ThemeProvider>
        <Welcome/>
        <ThemeToggle/>
      </ThemeProvider>
    </>
  )
}

export default App
