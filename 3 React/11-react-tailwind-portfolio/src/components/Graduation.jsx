import React from 'react'

export default function Graduation({ title, school, year }) {
    return (
        <>
            <h1 className='font-bold text-lg '>{title}</h1>
            <p className='text0'>{school},{year}</p>
        </>
    )
}
