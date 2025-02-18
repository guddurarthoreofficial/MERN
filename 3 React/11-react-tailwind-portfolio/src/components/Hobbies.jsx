import React from 'react'
import Section from './Section'

import { Heart } from 'lucide-react'
import List from './List'

export default function Hobbies() {
  const hobbies =["Playing","Painting","Drowing","OverThinkig","Kuchna"]
  return (
   <Section icon={<Heart/>} sectionTitle="Hobbies">
    <List items={hobbies}/>

   </Section>
  )
}
