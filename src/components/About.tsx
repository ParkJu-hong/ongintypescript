import React from 'react';
import styled from 'styled-components';

type Props = {
    text: string
}

function About({ text }: Props) {
    return (
        <Main>
            <div><strong>She born 1999.10.5 in Deajeon, South Korea</strong></div>
            <div><strong>and has starting to play photo till' now</strong></div>
            <br></br>
            <div><strong>You can see what she see, how she see like here</strong></div>
        </Main>
    )
}

const Main = styled.div`
    margin-top: 10vh;
    margin-left: 35vw;
    @media screen and (max-width: 780px) {
    margin-top: 30vh;
    margin-left: 0vw;
    text-align: center;
    }
`

export default About
