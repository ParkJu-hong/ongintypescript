import React from 'react';
import styled from 'styled-components';
import { authService, firebaseInstance } from "../../fBase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Upload from './Upload';

type Props = {
    isManager: boolean;
}

function Manager({ isManager }: Props) {

    const onSocialClick = async (event: any) => {
        let provider = new firebaseInstance.auth.GoogleAuthProvider();
        await authService.signInWithPopup(provider);
    }

    /*
        1. 사진카테고리별로 업로드할 수 있는 컴포넌트 만들 것
            일일히 만들어야하나..?
            

        2. 사진카테고리별로 딜리트할 수 있는 컴포넌트 만들 것
    */

    return (
        <Main>
            <MainBox>
                <div>
                    {isManager ? <>
                        <Upload/>
                    </> : <div
                    ><FontAwesomeIcon
                            icon={faGoogle}
                            size="2x"
                            onClick={onSocialClick}
                        /></div>}
                </div>
            </MainBox>
        </Main>
    )
}
const MainBox = styled.div`
    margin-left: 10vw;
    margin-top: 10vh;
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Main = styled.div`
 margin-left: 300px;
 @media screen and (max-width: 780px) {
    margin-left: 0px;
    margin-top: 25vh;
 }
`

export default Manager
