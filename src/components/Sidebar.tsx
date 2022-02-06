import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openGallery } from '../modules/sidebar';

function Sidebar() {
    const dispatch = useDispatch();
    return (
        <Main>
            <div style={{ marginLeft: "2vw" }}>
                <Link 
                to="/"
                style={{textDecoration: "none", color: "black"}}
                ><h1>Ha Chae-rin</h1></Link>
            </div>
            <ForSearch>
            <InputForGoogle
                type="text"
                placeholder="Google 검색"
            ></InputForGoogle>
            {/* 인풋옆에 바로 버튼이 있도록 구현할 것 */}
            <SearchButton>검색</SearchButton>
            </ForSearch>
            <Category>
                <Link 
                to="/about"
                style={{
                    textDecoration: "none",
                    color: "black",

                    }}
                >about</Link>
                <Link 
                to="/gallery"
                style={{
                    textDecoration: "none",
                    color: "black",

                }}
                onClick= {()=>{
                    dispatch(openGallery());
                }}
                >gallery</Link>
                <Link 
                to="/contact"
                style={{
                    textDecoration: "none",
                    color: "black",
                    
                     }}>contact</Link>
            </Category>
        </Main>
    )
}
const Category = styled.div`
    margin-top: 20vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 30vh;
    justify-content: space-around;
    @media screen and (max-width: 780px) {
        display: flex;
        flex-direction: row;
        margin-top: 5vh;
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
background: #3fa46a;
position: fixed;
top: 0;
z-index: 1;
left: 0;
@media screen and (max-width: 780px) {
    width: 100vw;
    height: 15vh;
    background: #3fa46a;
    position: fixed;
    z-index: 1;
    display: flex;
    justify-content: space-between;
}
`


export default Sidebar
