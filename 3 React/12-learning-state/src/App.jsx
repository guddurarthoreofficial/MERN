import { useState } from 'react'

import List from './components/List';
function App() {

  const todoItems = ['Drink Milk', 'Go to School', 'Kuchna', 'Kuchuna', 'guddu'];
  const [studentArr, setStudentArr] = useState(todoItems);


  const onChangeHandler = (event) => {
    if (event.key === "Enter") {
      console.log(event);
      console.log(event.target.value);

      const newArr = [...studentArr,event.target.value];
      event.target.value =""

      setStudentArr(newArr);
    }
  }

  

  return (
    <>
      <div className='text-amber-950'>
        Learning  Tailwind
        <List todoItems={studentArr} />
        <input type="text" placeholder='new Student Name:' onKeyDown={onChangeHandler} />
      </div>
    </>
  )
}

export default App
