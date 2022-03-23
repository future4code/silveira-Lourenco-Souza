import React from 'react';
import styled from 'styled-components'

const MyContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
        :hover{
            background-color: #cdddf7;
            box-shadow: 6px 6px 10px 0px rgba(0,0,0,0.51);
        }
`

const MyImg = styled.img`
    width: 30px;
    margin-right: 10px;
`

function ImagemButton(props) {
    return (
        <MyContainer>
            <MyImg src={ props.imagem }/>
            <p>{ props.texto }</p>
        </MyContainer>

    )
}

export default ImagemButton;