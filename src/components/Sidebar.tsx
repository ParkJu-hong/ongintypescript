import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { openGallery, closeGallery } from '../modules/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faCameraRetro, faPhone } from '@fortawesome/free-solid-svg-icons'
import Sidebarview from './Sidebarview';

import { Motion, spring } from 'react-motion';


function Sidebar() {
    const dispatch = useDispatch();
    const _sidebar = useSelector((state: RootState) => state.sidebar.isGallery);
    const [sidebar, setSidebar] = useState(_sidebar);

    useEffect(() => {
        setSidebar(_sidebar);
    }, [_sidebar])

    return (
        <>
            <Main>
                {sidebar ?
                    <Motion
                        defaultStyle={{ x: -200, opacity: 0 }}
                        style={{ x: spring(0), opacity: spring(1) }}>
                        {(style: any) => (
                            <Sidebarview _opacity={Number(style.opacity)} />
                        )}
                    </Motion> :
                    <></>}
                <div style={{ marginLeft: "10px" }}>
                    <Link
                        to="/"
                        style={{ textDecoration: "none", color: "Black" }}
                    ><h1
                    onClick={()=>{
                        dispatch(closeGallery());
                    }}
                    >Ha Chae-rin</h1></Link>
                </div>
                <Category>
                    <Link
                        to="/about"
                        style={{
                            textDecoration: "none",
                            color: "Black",
                        }}
                    ><FontAwesomeIcon 
                    icon={faAddressCard}
                     size="2x"
                     onClick={()=>{
                        dispatch(closeGallery());
                    }}
                     /></Link>
                    <Link
                        to="/gallery"
                        style={{
                            textDecoration: "none",
                            color: "Black",

                        }}
                    ><FontAwesomeIcon
                            icon={faCameraRetro}
                            size="2x"
                            onClick={() => {
                                if (!sidebar) {
                                    dispatch(openGallery());
                                } else {
                                    dispatch(closeGallery());
                                }
                            }}
                        /></Link>
                    <Link
                        to="/contact"
                        style={{
                            textDecoration: "none",
                            color: "Black",

                        }}><FontAwesomeIcon
                         icon={faPhone}
                          size="2x"
                          onClick={()=>{
                            dispatch(closeGallery());
                        }}
                          /></Link>
                </Category>
            </Main>
        </>
    )
}
const Category = styled.div`
    margin-top: 30vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 45vh;
    justify-content: space-around;
    @media screen and (max-width: 780px) {
        display: flex;
        flex-direction: row;
        margin-top: 4vh;
        height: 0vh;
        width: 40vw;
    }
`

const ForSearch = styled.div`
    display: block;
    padding-top: 20px;
    padding-bottom: 25px;
    @media screen and (max-width: 780px) {
        position: fixed;
        top: -300px;
    }
`

const SearchButton = styled.button`
    position: relative;
    z-index: 1;
    height: 34px;
    left: 160px;
    bottom: 34px;
`

const InputForGoogle = styled.input`
    position: relative;
    float: left;
    width: 70%;
    height: 28px;
    margin-left: 30px;
    margin-bottom: 0;
`

const Main = styled.div`
width: 220px;
height: 100%;
background: #FFFFFF;
position: fixed;
top: 0;
z-index: 1;
left: 0;
@media screen and (max-width: 780px) {
    width: 100vw;
    height: 15vh;
    background: #FFFFFF;
    position: fixed;
    z-index: 1;
    display: flex;
    justify-content: space-between;
}
`


export default Sidebar



            // {/* <ForSearch>
            // <InputForGoogle
            //     type="text"
            //     placeholder="Google 검색"
            // ></InputForGoogle>
            // {/* 인풋옆에 바로 버튼이 있도록 구현할 것 */}
            // <SearchButton>검색</SearchButton>
            // </ForSearch> */}

