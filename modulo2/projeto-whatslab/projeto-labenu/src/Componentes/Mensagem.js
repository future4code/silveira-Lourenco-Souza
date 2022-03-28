import React from "react";
import styled from 'styled-components'

import send from '../img/send.png'

const Container = styled.div`
    display: flex;
`

const CampoUsuario = styled.input`
    width: 150px;
    height: 25px;
    margin: 3px;
`

const CampoMensagem = styled.input`
    flex-grow: 1;
    margin: 3px;
`

const SendImg = styled.img`
    width: 20px;
`

const CustomButton = styled.button`
    width: 45px;
    margin: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default class Mensagem extends React.Component {

    render() {
        return (
            <Container>
                <CampoUsuario type="text" />
                <CampoMensagem type="text" />
                <CustomButton>
                    <SendImg src={send} alt="" />
                </CustomButton>
            </Container>
        )
    }
}