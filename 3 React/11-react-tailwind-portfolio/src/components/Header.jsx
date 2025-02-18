import React from 'react'

import passportPhoto from '../assets/guddu.jpg';

export default function Header() {
    return (
        <header className='bg-blue-600 text-white p-5 rounded-t-xl flex justify-between items-center'>
            <div>
                <div className='font-bold text-3xl'>Guddu Kumar</div>
                <div className=' text-xl'>FullStack Developer</div>
            </div>
            <img className='rounded-full w-32' src={passportPhoto} alt="" />
        </header>
    )
}
