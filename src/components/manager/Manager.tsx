import React from 'react';
import styled from 'styled-components';
import { authService, firebaseInstance } from "../../fBase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

type Props = {
    isManager: boolean;
}

function Manager({ isManager }: Props) {

    const onSocialClick = async (event: any) => {
        let provider = new firebaseInstance.auth.GoogleAuthProvider();
        await authService.signInWithPopup(provider);
    }

    return (
        <Main>
            <MainBox>
                <div
                    style={{ textAlign: "center" }}
                ><FontAwesomeIcon
                        icon={faGoogle}
                        size="2x"
                        onClick={onSocialClick}
                    /></div>
                    <div>
                    {isManager ? <>사진 업로드 등등..</> : <>로그인해주세요.</>}
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
`
const Main = styled.div`
 margin-left: 300px;

`

export default Manager
