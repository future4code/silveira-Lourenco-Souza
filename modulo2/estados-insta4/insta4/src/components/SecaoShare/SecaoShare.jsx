import React from "react";
import styled from "styled-components";

import iconeFacebook from '../../img/my-img/facebook.png'
import iconeInstagram from '../../img/my-img/instagram.png'
import iconeTwitter from '../../img/my-img/twitter.png'

const MyImg = styled.img`
    width: 40px;
    margin: 10px 0;
`

const MyDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const clickFB = () =>{
    console.log('Mensagem compartilhada no Facebook');
}

const clickINS = () => {
    console.log('Mensagem compartilhada no Instagram');
}

const clickTW = () => {
    console.log('Mensagem compartilhada no Twitter');
}

export const SecaoShare = () => {
    return (
        <MyDiv>
            <MyImg src={iconeInstagram} alt="Instagram" onClick={clickINS} />
            <MyImg src={iconeFacebook} alt="Facebook" onClick={clickFB} />
            <MyImg src={iconeTwitter} alt="Twitter" onClick={clickTW} />
        </MyDiv>
    )
}