import React from 'react';
import styled from 'styled-components';


const MyContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 90px;
        :hover {
            background-color: #f7cdcd;
            box-shadow: 6px 6px 10px 0px rgba(0,0,0,0.51);
        }
`
const MyImg = styled.img`
    width: 40px;
    margin-right: 10px;
    border-radius: 50%;
`

const MySpan = styled.span`
    font-weight: bolder;
`

let CardPequeno = (props) => {

    return (
        <MyContainer>
                <MyImg src={ props.imagem } />
                <p><MySpan>{ props.negrito }</MySpan> { props.texto }</p>
            </MyContainer>
    )
}

export default CardPequeno