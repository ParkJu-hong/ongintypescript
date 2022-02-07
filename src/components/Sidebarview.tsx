import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { openGallery, closeGallery } from '../modules/sidebar';

type Props = {
    _opacity: number;
}

function Sidebarview({_opacity}:Props) {
    const dispatch = useDispatch();

    return (
        <Main style={{opacity: _opacity}}>
            <Link 
            to="/gallery/spring"
            style={{
                textDecoration: "none",
                color: "white"
            }}
            onClick={()=>{
                dispatch(closeGallery());
            }}
            >spring</Link>
            <Link 
            to="/gallery/summer"
            style={{
                textDecoration: "none",
                color: "white"
            }}
            onClick={()=>{
                dispatch(closeGallery());
            }}
            >summer</Link>
            <Link 
            to="/gallery/autumn"
            style={{
                textDecoration: "none",
                color: "white"
            }}
            onClick={()=>{
                dispatch(closeGallery());
            }}
            >autumn</Link>
            <Link 
            to="/gallery/winter"
            style={{
                textDecoration: "none",
                color: "white"
            }}
            onClick={()=>{
                dispatch(closeGallery());
            }}
            >winter</Link>
        </Main>
    )
}
const Main = styled.div`
display: flex;
justify-content: space-around;
width: 100vw;
height: 10vh;
background-color: #3fa46a;
position: fixed;
top: 15vh;
z-index: 1;
left: 0;
`

export default Sidebarview
