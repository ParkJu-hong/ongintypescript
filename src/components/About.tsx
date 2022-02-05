import React from 'react'

type Props = {
    text: string
}

function About({ text }: Props) {
    return (
        <div>
            {text}
        </div>
    )
}

export default About
