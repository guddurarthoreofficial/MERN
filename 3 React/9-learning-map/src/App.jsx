import './App.css'
import List from './components/List';
function App() {

  const todoItems = [
    { id: 1, todoText: 'Drink Milk', todoDate: "23-11-2002" },
    { id: 2, todoText: 'Go to School', todoDate: "23-11-2002" },
    { id: 3, todoText: 'Kuchna', todoDate: "23-11-2002" },
    { id: 3, todoText: 'Kuchna', todoDate: "23-11-2002" }
  ];

  return (
    <>
      <div className='text-amber-950'>
        Learning  Tailwind
        <List todoItems={todoItems}/>
      </div>
    </>
  )
}

export default App
