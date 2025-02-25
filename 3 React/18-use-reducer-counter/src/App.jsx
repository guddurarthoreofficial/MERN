import {useReducer,useState} from 'react';

const counterReducer = (currentState,action) =>{

  let newState = currentState;
  if(action.type  === 'INCREMENT'){
    newState += 1;
  }
  else if(action.type  === 'DECREMENT'){
    newState -= 1;
  }
  return  newState;
}

function App() {

  // const [counterVal,setCounterVal] = useState(0);
  const [counterVal,counterDispatch] = useReducer(counterReducer,0)

  const handleIncrement = () =>{
    // setCounterVal(current => current+1);
    // console.log("increment click");

    counterDispatch(
      {
        type: "INCREMENT"
      }
    )
  }

  const handleDecrement = () =>{
    // console.log("Decrement click");
    // setCounterVal(current => current - 1);


    counterDispatch(
      {
        type: "DECREMENT"
      }
    )
  }

  return (
    <>
    <h1 className='text-3xl font-bold'>Count: {counterVal}</h1>
    <button className='m-4 p-2 border rounded' onClick={handleIncrement}>Increment</button>
    <button className='m-4 p-2 border rounded' onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default App
