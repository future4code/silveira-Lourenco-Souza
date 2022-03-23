import React from "react";
import styled from "styled-components";

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
            <MyImg src="https://cdn-icons.flaticon.com/png/512/717/premium/717392.png?token=exp=1648074037~hmac=3e4ba7d3a4bff9e93ddbc7346089d879" alt="Instagram" onClick={clickINS} />
            <MyImg src="https://cdn-icons-png.flaticon.com/512/747/747374.png" alt="Facebook" onClick={clickFB} />
            <MyImg src="https://cdn-icons-png.flaticon.com/512/466/466963.png" alt="Twitter" onClick={clickTW} />
        </MyDiv>
    )
}