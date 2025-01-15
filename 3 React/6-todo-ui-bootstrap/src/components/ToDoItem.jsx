import React from 'react'
import Button from './Button'

export default function ToDoItem({ todoText, todoDate ,id }) {

  const deleteHandler = () =>{
    console.log(id,todoDate,todoText,);
  }

  return (


    <div className="container text-center kg-row">
      <div className="row">

        <div className="col-5">
          <div className="col-2 text-truncate">{todoText}</div>
        </div>

        <div className="col-3">
          {todoDate}
        </div>

        <div className="col-2">
          <Button btnText='Delete' btnType='danger' handler={deleteHandler}/>
        </div>

      </div>
    </div>
  )
}
