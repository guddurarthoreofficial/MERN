import React from 'react'

import { BookOpen } from 'lucide-react'
import Section from './Section'
import Graduation from './Graduation'

export default function Education() {
    return (
        <Section icon={<BookOpen />} sectionTitle="Educations">
            <Graduation title="Bachlar of Technology" school="Maharishi Markendeshwar deemed to be University" year="2023-2025 " />

            <Graduation title="Full Stack 
            developer" school="Maharishi Markendeshwar deemed to be University" year="2020-2022 " />
        </Section>)
}
