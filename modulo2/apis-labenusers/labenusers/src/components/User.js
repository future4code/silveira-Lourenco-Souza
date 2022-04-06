import React, { Component } from 'react'

export default class User extends Component {
  render() {

    const getUsuarios = this.props.usuarios

    const displayUsuarios = getUsuarios.map((value) => {
      return (
        <li key={value.id}>{value.name}</li>
      )
    })

    return (
      <>
      <ul>
        {displayUsuarios}
      </ul>

      <h4>Procurar usuário</h4>

      <input type="text" placeholder='Nome exato para a busca' value={this.props.valueBuscandoUsuario} onChange={this.props.onChangeBuscandoUsuario} />
      <button onClick={this.props.buscarUsuarios}>Salvar edição</button>

      </>
    )
  }
}
