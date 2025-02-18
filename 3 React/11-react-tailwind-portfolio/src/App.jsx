import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Education from './components/Education'
import Extracurricular from './components/Extracurricular'
import Header from './components/Header'
import Hobbies from './components/Hobbies'
import Projects from './components/Projects'
import Skills from './components/Skills'



function App() {
  return (
    <div className='bg-slate-200 px-5 py-8 '>

      <div className='bg-white max-w-4xl mx-auto shadow-lg rounded-xl' >
        <Header />
        <AboutMe />
        <Projects/>
        <Skills/>
        <Education/>
        <Hobbies/>
        <Extracurricular/>
        <Contact/>
      </div>

    </div>
  )
}

export default App
