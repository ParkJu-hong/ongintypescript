import React from 'react';
import styled from 'styled-components';

type Props = {
    text: string
}

function About({ text }: Props) {
    return (
        <Main>
            {text}
        </Main>
    )
}

const Main = styled.div`
margin-left: 220px;
`

export default About
