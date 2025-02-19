import './App.css'
import List from './components/List';
function App() {

  // const todoItems = [
  //   { id: 1, todoText: 'Drink Milk', todoDate: "23-11-2002" },
  //   { id: 2, todoText: 'Go to School', todoDate: "23-11-2002" },
  //   { id: 3, todoText: 'Kuchna', todoDate: "23-11-2002" },
  //   { id: 3, todoText: 'Kuchna', todoDate: "23-11-2002" }
  // ];


  const todoItems = ['Drink Milk','Go to School','Kuchna', 'Kuchuna', 'guddu' ];

  const onChangeHandler = (event)=>{
    if(event.key === "Enter"){
      console.log(event.target.value);
      todoItems.push(event.target.value);
      console.log(todoItems);
    }
    // console.log(event);
  }

  return (
    <>
      <div className='text-amber-950'>
        Learning  Tailwind
        <List todoItems={todoItems}/>
        <input type="text" placeholder='new Student Name:' onKeyDown={onChangeHandler} />
      </div>
    </>
  )
}

export default App
