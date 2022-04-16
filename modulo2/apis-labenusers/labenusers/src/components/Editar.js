import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Button = styled.button`
  margin-left: 5px;
`

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

    if (this.state.inputNome && this.state.inputEmail !== '') {
      const body = {
        "name": this.state.inputNome,
        "email": this.state.inputEmail
      }

      axios.put(url, body, header)
        .then(() => {
          this.changeDisplay()
          alert(`Usuário ${this.state.inputNome} criado. Email salvo como ${this.state.inputEmail}.`)
        })
        .catch((error) => {
          console.log(error.response.data);
        })
    } else if(this.state.inputNome !== ''){
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
          alert(`Email do usuário ${this.state.inputNome} atualizado`)
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
      return <Button onClick={this.changeDisplay}>Editar</Button>
    } else {
      return (
        <>
          <br />
          <br />
          <input type="text" placeholder='Digite o novo nome' value={this.state.inputNome} onChange={this.onChangeNome} />
          <input type="text" placeholder='Digite o novo email' value={this.state.inputEmail} onChange={this.onChangeEmail} />
          <button onClick={() => this.editarUsuario(this.props.usuario)}>Salvar</button>
          <Button onClick={this.changeDisplay}>cancelar</Button>
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
