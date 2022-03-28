import React from "react";
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`

const CampoUsuario = styled.input`
    width: 100px;
`

const CampoMensagem = styled.input`
    flex-grow: 1;
`

export default class Mensagem extends React.Component {

    render() {
        return (
            <Container>
                <CampoUsuario type="text" />
                <CampoMensagem type="text" />
                <button>Enviar</button>
            </Container>
        )
    }
}