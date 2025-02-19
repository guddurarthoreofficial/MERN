import React from 'react'

export default function SocialMedia({url,icon,title}) {
  return (
    <a className='flex  my-2 text-blue-600 hover:text-blue-800' href={url}>{icon}  <span className='ml-4'> {title}</span></a>
  )
}
