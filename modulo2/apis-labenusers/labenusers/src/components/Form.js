import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <>
        <input type="text" placeholder='Nome' value={this.props.valueNome} onChange={this.props.onChangeNome} />
        <input type="text" placeholder='E-mail' value={this.props.valueEmail} onChange={this.props.onChangeEmail} />
        <button onClick={this.props.criarUsuario}>Criar Usuário</button>
      </>
    )
  }
}
