import React, { Component } from 'react'
import axios from 'axios'

const header = {
  headers: {
    Authorization: 'lourenco-souza-silveira'
  }
}

export default class UserDetail extends Component {

  state = {
    email: 'Carregando...'
  }

  componentDidMount = () => {
    this.getEmail(this.props.usuarios.id)
  }

  getEmail = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

    axios.get(url, header)
    .then((response) =>{
      this.setState({
        email: response.data.email
      })
    })
    .catch((error) => {
      console.log(error.response.data);
    })
  }

  render() {

    const user = this.props.usuarios

    return (

      <div>
        <h3>Detalhes do usuário</h3>
        <p>Nome: {user.name}</p>
        <p>Email: {this.state.email}</p>
        <button onClick={() => this.props.apagarUsuario(user) } >Apagar</button> <br /> <br />
        <button onClick={this.props.getBack}>Voltar</button>
      </div>
    )
  }
}
