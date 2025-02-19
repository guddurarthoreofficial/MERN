import React from 'react'
import Section from './Section'
import { Github, Instagram, Linkedin } from 'lucide-react';


import { Globe } from 'lucide-react'
import SocialMedia from './SocialMedia';

export default function Contact() {

  const socialLinks = [
    {icon:<Linkedin/>,title:"LinkedIn", url:"https://www.linkedin.com/in/guddu-kumar-7a25a9239/"},
    {icon:<Github/>,title:"GitHub", url:"https://www.linkedin.com/in/guddu-kumar-7a25a9239/"},
    {icon:<Instagram/>,title:"Instagram", url:"https://www.linkedin.com/in/guddu-kumar-7a25a9239/"}
  ]
  return (
   <Section icon={<Globe/>} sectionTitle="Contect & Social Media">
    <p className='text-gray-700 mb-4'>
      Email: guddu875482@gmail.com <br />
      Phone: +91 8525489986
    </p>

    {socialLinks.map((list)=>(
       <SocialMedia title={list.title} url={list.url} icon={list.icon} key={list.title} />
    ))}
   </Section>
  )
}
