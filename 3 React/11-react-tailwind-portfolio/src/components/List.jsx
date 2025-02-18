import React from 'react'

export default function List({ items }) {
    return (
        <ul className='list-disc m-4 p-4'>
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    )
}
