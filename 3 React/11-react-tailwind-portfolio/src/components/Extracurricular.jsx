import React from 'react'
import Section from './Section'

import { Award } from 'lucide-react'
import List from './List'

export default function Extracurricular() {
  const items = ["volenterga of sgh fhather goo","apple of the guddu singh gj","Orange osagah","Guddu singh Rehgaiag"]
  return (
   <Section icon={<Award/>} sectionTitle="Extracurricular">
    <List items={items}/>
   </Section>
  )
}
