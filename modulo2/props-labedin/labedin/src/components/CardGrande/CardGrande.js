import React from 'react';
import styled from 'styled-components'

const MyContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    font-family: 'Times New Roman', Times, serif;
    font-style: italic;
    font-size: 20px;
        :hover {
            background-color: #e4f7cd;
            box-shadow: 6px 6px 10px 0px rgba(0,0,0,0.51);
        }
`

const MyImg = styled.img`
    width: 70px;
    height: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const MyH4 = styled.h4`
    margin-bottom: 15px;
`

const MyDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <MyContainer>
            <MyImg src={ props.imagem } />
            <MyDiv>
                <MyH4>{ props.nome }</MyH4>
                <p>{ props.descricao }</p>
            </MyDiv>
        </MyContainer>
    )
}

export default CardGrande;