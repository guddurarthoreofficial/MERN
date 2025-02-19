import React from 'react'
import Section from './Section'

import {Briefcase} from 'lucide-react'

export default function Projects() {
  
  const projectList =[
    {title: "E-Commerce Platform",desc: "lorem gjhghru gfhuh8jhgs hgurher hg " ,
      techUsed:['Vue.js','D3.js','Express.js','SQL'] },
  ];

  return (
   <Section icon={<Briefcase/>} sectionTitle="Projects">
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis enim odio aut laudantium corporis distinctio minima ducimus, necessitatibus in nesciunt impedit eveniet temporibus animi consectetur dignissimos reiciendis nemo quia incidunt.
    </p>

   </Section>
  )
}
