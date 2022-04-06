import React, { Component } from 'react'
import axios from 'axios'

import Form from './components/Form'
import User from './components/User'

const header = {
  headers: {
    Authorization: 'lourenco-souza-silveira'
  }
}

export default class App extends Component {

  usuarios = ['Maria', 'José', 'Helena', 'Lourenço']


  
  state = {
    usuarios: [],
    tela: true,
    nome: '',
    email: '',
    buscandoUsuario: ''
  }
  
  usuariosApi = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    axios.get(url, header)
    .then((response) => {
      console.log(response.data);
      this.setState({
        usuarios: response.data
      })
    }).catch((error) => {
      console.log(error.response.data);
    })
  }

  componentDidMount = () => {
    this.usuariosApi()
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
            <User usuarios={this.state.usuarios} buscarUsuarios={this.buscarUsuarios} valueBuscandoUsuario ={this.state.buscandoUsuario} onChangeBuscandoUsuario={this.onChangeBuscandoUsuario} /> }
        </div>

          <br />

      

      </div>
    )
  }
}
