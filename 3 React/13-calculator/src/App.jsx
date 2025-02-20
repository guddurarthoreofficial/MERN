import { useState } from "react";  
import Display from "./components/Display";
import NumberPad from "./components/NumberPad";

function App() {
  const [displayVal, setDisplayVal] = useState("");  

  return (

    <>
    <h1>Calculator</h1>
      <Display displayVal={displayVal}/>
      <NumberPad displayVal={displayVal} setDisplayVal={setDisplayVal} />
    </>
  );
}

export default App;
