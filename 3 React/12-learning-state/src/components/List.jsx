import React from 'react'

export default function List({todoItems}) {
    return (
        <ol className=' m-3 p-3'>
            {todoItems.map((item, index) => <li key={item}>{item}</li>)}
        </ol>
    )
}
