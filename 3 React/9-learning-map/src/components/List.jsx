import React from 'react'

export default function List({todoItems}) {
    return (
        <ul className='list-disc m-3 p-3'>
            {todoItems.map((item, index) => <li key={index}>{item.todoText}</li>)}
        </ul>
    )
}
