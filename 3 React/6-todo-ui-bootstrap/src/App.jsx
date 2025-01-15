import './App.css'
import AddToDo from './components/AddToDo'
import AppName from './components/AppName'
import ToDoItems from './components/ToDoItems';



function App() {

  return (
    <>
      <center>
        <AppName />
        <AddToDo />
        <ToDoItems/>
      </center>
    </>
  )
}

export default App
