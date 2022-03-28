import React from "react";
import styled from 'styled-components'

import send from '../img/send.png'

const Container = styled.div`
    display: flex;
`

const CampoUsuario = styled.input`
    width: 100px;
    height: 25px;
    margin: 3px;
    font-weight: bolder;
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

    constructor(props) {
        super(props)
        this.state = {
            usuario: '',
            texto: ''
        }
    }
    

    escrevendoUsuario = (event) => {
        this.setState({usuario: event.target.value})
    }

    escrevendoTexto = (event) => {
        this.setState({texto: event.target.value})
    }

enviarMensagem = () => {
    const mensag = {
        usuario: this.state.usuario,
        texto: this.state.texto
    }

    this.props.addMensag(mensag)

    this.setState({texto: ''})

}

    render() {
        return (
            <Container>
                <CampoUsuario type="text" placeholder="Usuário" onChange={this.escrevendoUsuario} value={this.state.usuario} />
                <CampoMensagem type="text" placeholder="Mensagem" onChange={this.escrevendoTexto} value={this.state.texto} />
                <CustomButton onClick={this.enviarMensagem}>
                    <SendImg src={send} alt="Enviar" />
                </CustomButton>
            </Container>
        )
    }
}