import React from 'react'
import { Buttons } from './Buttons';

const NumberPad = ({displayVal, setDisplayVal}) => {

    const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

    const operations = ["+", "-", "*", "/",];

    const evaluateExpression = () =>{
        const result = eval(displayVal);
        setDisplayVal(result)
    }

    const addToDisplay = (text)=>{
        setDisplayVal(displayVal + text);
    }

    return (
        <>
            <Buttons text="C" onClickHandler={()=>setDisplayVal("")}  />
                <br />  
            {buttons.map(text => <Buttons onClickHandler={()=>addToDisplay(text)} key={text} text={text} />)}
            <br />
            {operations.map(text => <Buttons onClickHandler={ ()=>addToDisplay(text)} key={text} text={text} />)}
            <br />
            <Buttons text="=" onClickHandler={evaluateExpression} />


        </>
    )
}

export default NumberPad;




// import React from "react";
// import { Buttons } from "./Buttons";
// import "./NumberPad.css"; // Import the external CSS file

// const NumberPad = ({ displayVal, setDisplayVal }) => {
//   const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
//   const operations = ["+", "-", "*", "/"];

//   const evaluateExpression = () => {
//     try {
//       const result = Function(`"use strict"; return (${displayVal})`)();
//       setDisplayVal(result.toString());
//     } catch (error) {
//       setDisplayVal("Error");
//     }
//   };

//   const addToDisplay = (text) => {
//     setDisplayVal(displayVal + text);
//   };

//   return (
//     <div className="number-pad">
//       <div className="display">{displayVal || "0"}</div>

//       <div className="button-grid">
//         <Buttons text="C" onClickHandler={() => setDisplayVal("")} className="clear-btn" />
        
//         {operations.map((op) => (
//           <Buttons key={op} text={op} onClickHandler={() => addToDisplay(op)} className="operator-btn" />
//         ))}

//         {buttons.map((num) => (
//           <Buttons key={num} text={num} onClickHandler={() => addToDisplay(num)} className="number-btn" />
//         ))}

//         <Buttons text="=" onClickHandler={evaluateExpression} className="equals-btn" />
//       </div>
//     </div>
//   );
// };

// export default NumberPad;
