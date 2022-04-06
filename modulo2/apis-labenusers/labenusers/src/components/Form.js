import React, { Component } from 'react'
import axios from 'axios'

const header = {
  headers: {
    Authorization: 'lourenco-souza-silveira'
  }
}

export default class Form extends Component {

  state = {
    nome: '',
    email: ''
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

  criarUsuario = () => {
    console.log('Usuário criado');
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const body = {
      "name": this.state.nome,
      "email": this.state.email
    }

    axios.post(url, body, header)
      .then(() => {
        this.setState({
          nome: '',
          email: ''
        })
      }).catch((error) => {
        console.log(error.response.data);
      })
  }

  render() {
    return (
      <>
        <input type="text" placeholder='Nome' value={this.state.nome} onChange={this.onChangeNome} />
        <input type="text" placeholder='E-mail' value={this.state.email} onChange={this.onChangeEmail} />
        <button onClick={this.criarUsuario}>Criar Usuário</button>
      </>
    )
  }
}
