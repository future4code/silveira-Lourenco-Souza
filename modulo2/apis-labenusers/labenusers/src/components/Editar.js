import React, { Component } from 'react'
import axios from 'axios'

const header = {
  headers: {
    Authorization: 'lourenco-souza-silveira'
  }
}

export default class Editar extends Component {

  state = {
    display: true,
    inputNome: '',
    inputEmail: ''
  }

  changeDisplay = () => {

    this.state.display ? 
    this.setState({
      display: false
    }) :
    this.setState({
      display: true
    })
  }

  onChangeNome = (event) => {
    this.setState({
      inputNome: event.target.value
    })
  }

  onChangeEmail = (event) => {
    this.setState({
      inputEmail: event.target.value
    })
  }

  editarUsuario = (user) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user.id}`

    if(this.state.inputNome !== ''){
      const body = {
        "name": this.state.inputNome
      }

      axios.put(url, body, header)
      .then(() => {
        this.changeDisplay()
        alert(`Usuário ${this.state.inputNome} criado`)
      })
      .catch((error) => {
        console.log(error.response.data);
      })
    } else if (this.state.inputEmail !== '') {
      const body = {
        "email": this.state.inputEmail
      }

      axios.put(url, body, header)
        .then(() => {
          this.changeDisplay()
          alert(`Email ${this.state.inputEmail} atualizado`)
        })
        .catch((error) => {
          console.log(error.response.data);
        })
    } else {
      alert('Digite valores válidos em pelo menos uma caixa de texto')
    }
  }

  showDisplay = () => {
    if (this.state.display === true) {
      return <button onClick={this.changeDisplay}>Editar</button>
    } else {
      return (
        <>
          <br />
          <input type="text" placeholder='Digite o novo nome' value={this.state.inputNome} onChange={this.onChangeNome} />
          <input type="text" placeholder='Digite o novo email' value={this.state.inputEmail} onChange={this.onChangeEmail} />
          <button onClick={() => this.editarUsuario(this.props.usuario)}>Salvar</button>
          <button onClick={this.changeDisplay}>cancelar</button>
        </>
      )
    }
  }

  render() {

        return (
      <>
        {this.showDisplay()}
      </>
    )
  }
}
