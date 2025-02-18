import React from 'react'
import { Code } from 'lucide-react'
import Section from './Section'
import Pill from './pill'


export default function Skills() {
    const skillTitle = ["JavaScript", "Java", "CSS", "NodeJs"];
    return (
        <Section icon={<Code />} sectionTitle="skills">
            {skillTitle.map((skill) => (
                <Pill title={skill} key={skill} />
            ))}

        </Section>
    )
}

