import React from "react";
import styled from 'styled-components'

const MyDiv = styled.div`
    display: flex;
`

const MyImg = styled.img`
    margin-right: 8px;
    width: 20px
`

export const IconeFixar = (props) => {
    return (
        <MyDiv>
            <MyImg src={ props.icone } alt={'fixar'} onClick={ props.onClickIconeFixar } />
        </MyDiv>
    )
}

