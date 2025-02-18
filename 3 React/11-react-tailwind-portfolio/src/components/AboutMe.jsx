import React from 'react'

import { User } from 'lucide-react';
import Section from './Section';

export default function AboutMe() {
    return (
        <Section icon={<User/>} sectionTitle="About Me">
             <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nihil nostrum eius officia quos, illum nam aliquam molestiae dolorum mollitia tempora dicta voluptas maxime neque eveniet sint! Quae, nulla repudiandae?
            </p>
        </Section>
    )
}
