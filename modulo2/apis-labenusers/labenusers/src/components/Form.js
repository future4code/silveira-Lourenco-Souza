import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <>
        <input type="text" placeholder='Nome' />
        <input type="text" placeholder='E-mail' />
        <button>Criar Usuário</button>
      </>
    )
  }
}
