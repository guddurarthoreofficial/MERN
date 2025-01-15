import "./Button.css";


function Button({btnType,btnText}) {
  console.log(btnText,btnType);
  if(btnType == "sucess"){
    return <button className="green-button"> {btnText} </button>
  }
  if(btnType == "danger"){
    return <button className="red-button"> {btnText} </button>
  }
  else{
    return <button className="blue-button"> {btnText} </button>
  }
  
}

export default Button;


// export  function DangerButton() {
//   const hello = "Delete";
//   return <button className="danger-button"> Delete </button>;
// }

// export function SucessButton() {
//   return <button className="save-button">Save</button>;
// }
