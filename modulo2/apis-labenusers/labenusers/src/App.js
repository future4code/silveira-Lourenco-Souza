import React, { Component } from 'react'

import Form from './components/Form'
import User from './components/User'


export default class App extends Component {

  
  state = {
    tela: true
  }

  trocarTela = () => {
    this.setState({
      tela: !this.state.tela,   
    })
  }

  render() {


    return (
      <div>
        <button onClick={this.trocarTela}>Trocar de tela</button>

        <div>
          { this.state.tela ? <Form /> : <User /> }
        </div>

          <br />
      </div>
    )
  }
}