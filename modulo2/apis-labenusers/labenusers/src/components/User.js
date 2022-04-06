import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import UserDetail from './UserDetail'

const Button = styled.button`
  color: red;
  font-style: italic;
  background-color: white;
  cursor: pointer;
  margin-left: 15px;
    :hover {
      background-color: lightpink;
    }
`
const Li = styled.li`
  display: flex;
  justify-content: space-between;
  width: 150px;
    :hover {
      background-color: lightblue;
    }
`

const header = {
  headers: {
    Authorization: 'lourenco-souza-silveira'
  }
}

export default class User extends Component {

  state = {
    usuarios: [],
    buscandoUsuario: '',
    datail: false, 
    info: []
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
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user.id}`

    if(window.confirm(`Deseja realmente apagar o usuário(a) ${user.name}?`)){
      axios.delete(url, header)
        .then(() => {
          alert(`Usuário ${user.name} apagado.`)
          this.getUsuarios()
          this.setState({
            datail: false
          })
        }).catch((error) => {
          console.log(error.response.data);
        })
    }

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

  detailsUser = (user) => {
    console.log(`Detalhes ${user.name}`);
    this.setState({
      datail: true
    })
    this.setState({
      info: user
    })
  }

  getBack = () => {
    this.setState({
      datail: false
    })
  }

  selectUserDisplay = () => {

    const displayUsuarios = this.state.usuarios.map((value) => {
      return (
        <Li key={value.id}><button onClick={() => this.detailsUser(value)}> {value.name} </button><Button onClick={() => this.apagarUsuario(value)} >X</Button> </Li>
      )
    })

    if(this.state.datail === true){
      return <UserDetail getBack={this.getBack} usuarios={this.state.info} apagarUsuario={this.apagarUsuario} />
    } else {
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

  

  

  render() {

    console.log(this.state.datail);

    return (
      
      <>
        {this.selectUserDisplay()}
      </>
    )
  }
}
