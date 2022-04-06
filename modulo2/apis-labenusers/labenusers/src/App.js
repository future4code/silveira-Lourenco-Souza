import React, { Component } from 'react'

import Form from './components/Form'
import User from './components/User'

export default class App extends Component {

  usuarios = ['Maria', 'José', 'Helena', 'Lourenço']

  state = {
    tela: true,
    nome: '',
    email: '',
    buscandoUsuario: ''
  }

  trocarTela = () => {
    this.setState({
      tela: !this.state.tela,   
    })
  }

  buscarUsuarios = () => {
    console.log('Busca de Usuários');
  }

  criarUsuario = () => {
    console.log('Usuário criado');
  }

  onChangeNome = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  onChangeBuscandoUsuario = (event) => {
    this.setState({
      buscandoUsuario: event.target.value
    })
  }

  render() {


    return (
      <div>

        <button onClick={this.trocarTela}>Trocar de tela</button>

        <div>
          { this.state.tela ? 
            <Form criarUsuario={this.criarUsuario} valueNome={this.state.nome} onChangeNome={this.onChangeNome} valueEmail={this.state.email} onChangeEmail={this.onChangeEmail} /> : 
            <User usuarios={this.usuarios} buscarUsuarios={this.buscarUsuarios} valueBuscandoUsuario ={this.state.buscandoUsuario} onChangeBuscandoUsuario={this.onChangeBuscandoUsuario} /> }
        </div>

          <br />

          

      </div>
    )
  }
}
