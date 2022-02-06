import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { closeGallery } from '../modules/sidebar';

function Sidebarview() {
    const dispatch = useDispatch();
    return (
        <Main>
            <h3
                onClick={()=>{
                    dispatch(closeGallery());
                }}
            >Ha Chae-rin</h3>
        </Main>
    )
}

const Main = styled.div`
width: 120px;
height: 100%;
background-color: #0059ab;
position: fixed;
top: 0;
z-index: 1;
left: 0;
`

export default Sidebarview
