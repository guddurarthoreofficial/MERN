import React from 'react'

export const Buttons = ({ text ,onClickHandler }) => {


   
  return (
    <button  onClick={onClickHandler}>{ text }</button>
  )
}
