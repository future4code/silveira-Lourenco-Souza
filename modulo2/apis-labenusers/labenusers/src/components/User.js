import React, { Component } from 'react'
import axios from 'axios'

const header = {
  headers: {
    Authorization: 'lourenco-souza-silveira'
  }
}

export default class User extends Component {

  state = {
    usuarios: [],
    buscandoUsuario: ''
  }

  componentDidMount = () => {
    this.getUsuarios()
  }

  getUsuarios = () => {
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

  apagarUsuario = (user) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user}`

    axios.delete(url, header)
      .then(() => {
        this.getUsuarios()
      }).catch((error) => {
        console.log(error.response.data);
      })


    console.log(`Usuário ${user} deletado`);
  }

  buscarUsuarios = () => {

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.buscandoUsuario}&email=`

    axios.get(url, header)
      .then((response) => {
        console.log(response.data);
        this.setState({
          usuarios: response.data
        })
      }).catch((error) => {
        console.log(error.response.data);
      })

    console.log('Busca de Usuários');
  }

  onChangeBuscandoUsuario = (event) => {
    this.setState({
      buscandoUsuario: event.target.value
    })
  }

  render() {

    const displayUsuarios = this.state.usuarios.map((value) => {
      return (
        <li key={value.id}>{value.name} <button onClick={() => this.apagarUsuario(value.id)} >X</button> </li>
      )
    })

    return (
      <>
        {this.state.usuarios.length === 0 && <p>Carregando...</p>}
        <ul>
          {displayUsuarios}
        </ul>

        <h4>Procurar usuário:</h4>

          <input type="text" placeholder='Nome exato para a busca' value={this.state.buscandoUsuario} onChange={this.onChangeBuscandoUsuario} />
        <button onClick={this.buscarUsuarios}>Salvar edição</button>

      </>
    )
  }
}
