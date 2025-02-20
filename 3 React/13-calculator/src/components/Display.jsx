import React from 'react'

const Display = ({displayVal }) => {
  return (
    <>
    { displayVal ? <p>{displayVal}</p> : <p> 0 </p> }
    </>
  )
}

export default Display;